"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { heroScenarios, type NodeId } from "@/content/hero";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/cn";

const W = 112;
const H = 58;

const NODES: Record<NodeId, { x: number; y: number; label: string; tag: string }> = {
  problem: { x: 8, y: 150, label: "The brief", tag: "01 · INPUT" },
  strategy: { x: 154, y: 150, label: "Strategy", tag: "02 · DECIDE" },
  product: { x: 304, y: 38, label: "Product UI", tag: "03 · BUILD" },
  ai: { x: 304, y: 150, label: "AI agents", tag: "03 · BUILD" },
  automation: { x: 304, y: 262, label: "Automation", tag: "03 · BUILD" },
  data: { x: 454, y: 150, label: "Data & APIs", tag: "04 · INTEGRATE" },
  production: { x: 600, y: 150, label: "Production", tag: "05 · RUN" },
};

const EDGES: [NodeId, NodeId][] = [
  ["problem", "strategy"],
  ["strategy", "product"],
  ["strategy", "ai"],
  ["strategy", "automation"],
  ["product", "data"],
  ["ai", "data"],
  ["automation", "data"],
  ["data", "production"],
];

const BUILD_NODES: NodeId[] = ["product", "ai", "automation"];

function curve(a: NodeId, b: NodeId, move = true) {
  const A = NODES[a];
  const B = NODES[b];
  const x1 = A.x + W;
  const y1 = A.y + H / 2;
  const x2 = B.x;
  const y2 = B.y + H / 2;
  const mx = (x1 + x2) / 2;
  return `${move ? `M${x1} ${y1} ` : ""}C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`;
}

/** One continuous path through the scenario: curve → straight line across each node → curve … */
function routePath(path: NodeId[]) {
  let d = "";
  path.forEach((id, i) => {
    const n = NODES[id];
    const y = n.y + H / 2;
    if (i === 0) d += `M${n.x} ${y} L${n.x + W} ${y} `;
    else d += `${curve(path[i - 1], id, false)} L${n.x + W} ${y} `;
  });
  return d.trim();
}

const LOOP = "M656 208 V 322 Q656 338 640 338 H 226 Q210 338 210 322 V 208";

export default function HeroSystem() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [announce, setAnnounce] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (!auto || hovering || reduce) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % heroScenarios.length), 5600);
    return () => window.clearInterval(t);
  }, [auto, hovering, reduce]);

  const scenario = heroScenarios[index];
  const activeEdges = new Set(scenario.path.slice(1).map((id, i) => `${scenario.path[i]}>${id}`));
  const activeNodes = new Set(scenario.path);

  const choose = (i: number) => {
    setIndex(i);
    setAuto(false);
    setAnnounce(true);
  };

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const n = heroScenarios.length;
    let next = -1;
    if (e.key === "ArrowRight") next = (index + 1) % n;
    if (e.key === "ArrowLeft") next = (index - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next >= 0) {
      e.preventDefault();
      choose(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <figure
      className="relative overflow-hidden rounded-2xl border border-ink/12 bg-white shadow-[0_1px_0_rgb(23_23_23/0.04)]"
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
    >
      <div className="flex flex-col gap-3 border-b border-ink/8 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="t-eyebrow text-muted">fig. 01 — from brief to working system</span>
        <div role="tablist" aria-label="Example briefs" className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto px-1">
          {heroScenarios.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`hero-tab-${s.id}`}
              role="tab"
              type="button"
              aria-selected={i === index}
              aria-controls="hero-readout"
              tabIndex={i === index ? 0 : -1}
              onClick={() => choose(i)}
              onKeyDown={onTabKey}
              className={cn(
                "relative h-8 shrink-0 overflow-hidden rounded-full px-3 text-[12.5px] whitespace-nowrap transition-colors",
                i === index ? "bg-ink text-ivory" : "text-ink/70 hover:bg-ink/5 hover:text-ink",
              )}
            >
              {s.tab}
              {i === index && auto && !hovering && !reduce && (
                <span
                  key={`${s.id}-progress`}
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-sun"
                  style={{ animation: "hero-progress 5.6s linear forwards" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative grid-paper">
        {/* Desktop / tablet: system map */}
        <svg
          viewBox="0 0 720 352"
          className="hidden h-auto w-full sm:block"
          role="img"
          aria-label={`Illustrative system map for the brief “${scenario.brief}”: ${scenario.path
            .map((id) => NODES[id].label)
            .join(" → ")}, with a loop back from production to strategy.`}
        >
          <defs>
            <marker id="hs-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L8 4 L0 8 z" fill="#171717" />
            </marker>
          </defs>

          {/* Evolve loop */}
          <path d={LOOP} fill="none" stroke="#c59eb9" strokeWidth="1.5" strokeDasharray="3 6" className="animate-flow-slow" />
          <rect x="398" y="330" width="64" height="16" rx="8" fill="#ffffff" stroke="#c59eb9" />
          <text x="430" y="341.5" textAnchor="middle" className="fill-ink font-mono text-[8.5px] tracking-[0.08em]">
            EVOLVE
          </text>

          {EDGES.map(([a, b]) => {
            const on = activeEdges.has(`${a}>${b}`);
            return (
              <path
                key={`${a}-${b}`}
                d={curve(a, b)}
                fill="none"
                stroke={on ? "#171717" : "#cdc9bd"}
                strokeWidth={on ? 1.75 : 1.25}
                strokeDasharray={on ? undefined : "3 5"}
                markerEnd={on ? "url(#hs-arrow)" : undefined}
                className="transition-[stroke] duration-500"
              />
            );
          })}

          {(Object.keys(NODES) as NodeId[]).map((id) => {
            const n = NODES[id];
            const on = activeNodes.has(id);
            const key = on && BUILD_NODES.includes(id);
            return (
              <g key={id} className="transition-opacity duration-500" opacity={on ? 1 : 0.55}>
                <rect
                  x={n.x}
                  y={n.y}
                  width={W}
                  height={H}
                  rx="6"
                  fill={key ? "#fbda03" : on ? "#171717" : "#ffffff"}
                  stroke={on ? "#171717" : "#cdc9bd"}
                  strokeWidth="1.25"
                  className="transition-[fill,stroke] duration-500"
                />
                <text
                  x={n.x + 12}
                  y={n.y + 21}
                  className={cn(
                    "font-mono text-[8.5px] tracking-[0.08em]",
                    key ? "fill-ink/70" : on ? "fill-ivory/60" : "fill-muted",
                  )}
                >
                  {n.tag}
                </text>
                <text
                  x={n.x + 12}
                  y={n.y + 41}
                  className={cn("font-sans text-[14px] font-semibold tracking-[-0.02em]", key ? "fill-ink" : on ? "fill-ivory" : "fill-ink")}
                >
                  {n.label}
                </text>
                {key && <rect x={n.x + W - 9} y={n.y + H - 9} width="9" height="9" fill="#171717" />}
              </g>
            );
          })}

          {!reduce && (
            <g key={scenario.id}>
              {[0, 1.9].map((delay) => (
                <rect key={delay} x="-4" y="-4" width="8" height="8" fill="#fbda03" stroke="#171717" strokeWidth="1.25">
                  <animateMotion dur="3.8s" begin={`${delay}s`} repeatCount="indefinite" path={routePath(scenario.path)} />
                </rect>
              ))}
            </g>
          )}

          <text x="8" y="22" className="fill-muted font-mono text-[8.5px] tracking-[0.08em]">
            DECIDE → DESIGN & BUILD → INTEGRATE → RUN
          </text>
        </svg>

        {/* Phones: the active route as a vertical chain */}
        <ol className="space-y-0 px-5 py-6 sm:hidden" aria-label={`Route for the brief “${scenario.brief}”`}>
          {scenario.path.map((id, i) => {
            const key = BUILD_NODES.includes(id);
            return (
              <li key={`${scenario.id}-${id}`} className="relative flex items-center gap-4 pb-3 last:pb-0">
                {i < scenario.path.length - 1 && (
                  <span aria-hidden className="absolute top-9 bottom-0 left-[17px] w-px bg-ink/30" />
                )}
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-md border font-mono text-[10px]",
                    key ? "border-ink bg-sun text-ink" : "border-ink bg-ink text-ivory",
                  )}
                >
                  0{i + 1}
                </span>
                <span>
                  <span className="t-eyebrow block text-muted">{NODES[id].tag.split(" · ")[1]}</span>
                  <span className="block text-[15px] font-semibold tracking-[-0.02em]">{NODES[id].label}</span>
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <div
        id="hero-readout"
        role="tabpanel"
        aria-labelledby={`hero-tab-${scenario.id}`}
        aria-live={announce ? "polite" : "off"}
        className="grid border-t border-ink/8 sm:grid-cols-3 sm:divide-x sm:divide-ink/8"
      >
        {[
          { label: "The brief", value: scenario.brief },
          { label: "Our call", value: scenario.decision },
          { label: "What gets built", value: scenario.built },
        ].map((item) => (
          <div key={item.label} className="border-b border-ink/8 px-4 py-4 last:border-b-0 sm:border-b-0">
            <p className="t-eyebrow text-muted">{item.label}</p>
            <p key={`${scenario.id}-${item.label}`} className="mt-2 animate-rise text-[13.5px] leading-snug text-ink">
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <figcaption className="sr-only">
        Illustrative only: how NHB turns a business brief into a decision and then a working, monitored system.
      </figcaption>
    </figure>
  );
}
