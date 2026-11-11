"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { architectureLayers, type LayerId } from "@/content/ai";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/cn";

type Box = { x: number; y: number; w: number; h: number; label: string; layer: LayerId };

const BOXES: Box[] = [
  { x: 180, y: 14, w: 200, h: 44, label: "User input", layer: "input" },
  { x: 40, y: 92, w: 480, h: 52, label: "Orchestration layer", layer: "orchestration" },
  { x: 40, y: 180, w: 102, h: 46, label: "Planner", layer: "agents" },
  { x: 166, y: 180, w: 102, h: 46, label: "Researcher", layer: "agents" },
  { x: 292, y: 180, w: 102, h: 46, label: "Executor", layer: "agents" },
  { x: 418, y: 180, w: 102, h: 46, label: "Reviewer", layer: "agents" },
  { x: 40, y: 274, w: 216, h: 52, label: "Tools & APIs", layer: "tools" },
  { x: 304, y: 274, w: 216, h: 52, label: "Knowledge base", layer: "knowledge" },
  { x: 40, y: 362, w: 480, h: 48, label: "Execution", layer: "execution" },
  { x: 180, y: 446, w: 200, h: 44, label: "Monitoring", layer: "monitoring" },
];

const INDEX: Record<LayerId, string> = Object.fromEntries(architectureLayers.map((l) => [l.id, l.index])) as Record<
  LayerId,
  string
>;

const WIRES = [
  "M280 58 V92",
  "M91 144 V180",
  "M217 144 V180",
  "M343 144 V180",
  "M469 144 V180",
  "M91 226 V250",
  "M217 226 V250",
  "M343 226 V250",
  "M469 226 V250",
  "M91 250 H469",
  "M148 250 V274",
  "M412 250 V274",
  "M148 326 V362",
  "M412 326 V362",
  "M280 410 V446",
];

const ROUTE_TOOLS = "M280 36 V118 H217 V250 H148 V386 H280 V468";
const ROUTE_KNOWLEDGE = "M280 36 V118 H343 V250 H412 V386 H280 V468";
const LOOP = "M380 468 H530 Q542 468 542 456 V130 Q542 118 530 118 H520";

export default function AgentArchitecture() {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<LayerId>("orchestration");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const layer = architectureLayers.find((l) => l.id === selected)!;
  const selectedIndex = architectureLayers.findIndex((l) => l.id === selected);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const n = architectureLayers.length;
    let next = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (selectedIndex + 1) % n;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (selectedIndex - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next >= 0) {
      e.preventDefault();
      setSelected(architectureLayers[next].id);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-ink text-ivory">
      <div aria-hidden className="grid-paper-dark absolute inset-0" />
      <div className="relative grid lg:grid-cols-12">
        <div className="hidden border-ivory/10 p-6 sm:p-10 md:block lg:col-span-7 lg:border-r">
          <div className="flex items-center justify-between gap-4">
            <p className="t-eyebrow text-ivory/50">fig. 02 — reference architecture, production AI system</p>
            <p className="t-eyebrow hidden items-center gap-2 text-ivory/50 xl:flex">
              <span aria-hidden className="size-2 rounded-full bg-lilac" /> feedback loop
            </p>
          </div>
          <svg
            viewBox="0 0 560 506"
            className="mx-auto mt-6 h-auto w-full max-w-[600px]"
            role="img"
            aria-label="Reference architecture: user input flows into an orchestration layer, which routes work to specialised agents (planner, researcher, executor, reviewer). Agents use permissioned tools and APIs and a knowledge base, results pass through guarded execution, and monitoring feeds back into orchestration."
          >
            {WIRES.map((d) => (
              <path key={d} d={d} fill="none" stroke="rgb(245 243 237 / 0.28)" strokeWidth="1.25" />
            ))}
            <path d={LOOP} fill="none" stroke="#c59eb9" strokeWidth="1.5" strokeDasharray="3 6" className="animate-flow-slow" />

            {BOXES.map((b) => {
              const on = b.layer === selected;
              const isAgent = b.layer === "agents";
              return (
                <g
                  key={b.label}
                  onClick={() => setSelected(b.layer)}
                  className="cursor-pointer"
                  aria-hidden
                >
                  <rect
                    x={b.x}
                    y={b.y}
                    width={b.w}
                    height={b.h}
                    rx="6"
                    fill={on ? "#ffd000" : "#1f1f1e"}
                    stroke={on ? "#ffd000" : "rgb(245 243 237 / 0.3)"}
                    strokeWidth="1.25"
                    className="transition-[fill,stroke] duration-300 hover:stroke-ivory"
                  />
                  <text
                    x={b.x + 12}
                    y={b.y + b.h / 2 + 3.5}
                    className={cn("pointer-events-none font-mono text-[9px] tracking-[0.08em]", on ? "fill-ink/60" : "fill-ivory/40")}
                  >
                    {INDEX[b.layer]}
                  </text>
                  <text
                    x={isAgent ? b.x + 32 : b.x + 34}
                    y={b.y + b.h / 2 + 4.5}
                    className={cn(
                      "pointer-events-none font-sans font-semibold tracking-[-0.02em]",
                      isAgent ? "text-[11.5px]" : "text-[13.5px]",
                      on ? "fill-ink" : "fill-ivory",
                    )}
                  >
                    {b.label}
                  </text>
                </g>
              );
            })}

            {!reduce && (
              <g aria-hidden>
                <rect x="-4" y="-4" width="8" height="8" fill="#ffd000">
                  <animateMotion dur="5s" repeatCount="indefinite" path={ROUTE_TOOLS} />
                </rect>
                <rect x="-4" y="-4" width="8" height="8" fill="#b3cde3">
                  <animateMotion dur="5s" begin="2.5s" repeatCount="indefinite" path={ROUTE_KNOWLEDGE} />
                </rect>
                <circle r="3.5" fill="#c59eb9">
                  <animateMotion dur="3.2s" repeatCount="indefinite" path={LOOP} />
                </circle>
              </g>
            )}
          </svg>
        </div>

        <div className="flex flex-col p-6 sm:p-10 lg:col-span-5">
          <p className="t-eyebrow text-ivory/50 md:hidden">fig. 02 — reference architecture</p>
          <div
            role="tablist"
            aria-label="Architecture layers"
            aria-orientation="vertical"
            className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-ivory/10 bg-ivory/10 md:mt-0"
          >
            {architectureLayers.map((l, i) => {
              const on = l.id === selected;
              return (
                <button
                  key={l.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  id={`arch-tab-${l.id}`}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  aria-controls="arch-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setSelected(l.id)}
                  onKeyDown={onKey}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3 text-left transition-colors",
                    on ? "bg-sun text-ink" : "bg-ink-2 text-ivory/80 hover:bg-ink-3 hover:text-ivory",
                  )}
                >
                  <span className={cn("font-mono text-[11px]", on ? "text-ink/60" : "text-ivory/40")}>{l.index}</span>
                  <span className="text-[14.5px] font-medium tracking-[-0.015em]">{l.name}</span>
                  <span className={cn("ml-auto hidden font-mono text-[10.5px] sm:inline", on ? "text-ink/60" : "text-ivory/35")}>
                    {l.role}
                  </span>
                </button>
              );
            })}
          </div>

          <div id="arch-panel" role="tabpanel" aria-labelledby={`arch-tab-${layer.id}`} className="mt-8 flex-1">
            <div key={layer.id} className="animate-rise">
              <p className="t-eyebrow text-sun">
                Layer {layer.index} · {layer.role}
              </p>
              <h3 className="t-h3 mt-3 text-ivory">{layer.name}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ivory/70">{layer.detail}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${layer.name} techniques`}>
                {layer.parts.map((p) => (
                  <li key={p} className="rounded-full border border-ivory/20 px-3 py-1.5 font-mono text-[11px] text-ivory/80">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
