"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { heroScenarios, type NodeId } from "@/content/hero";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/cn";

/** Plain-language names for the parts of a system each scenario uses. */
const PARTS: Partial<Record<NodeId, string>> = {
  product: "Product UI",
  ai: "AI agents",
  automation: "Automation",
  data: "Data & integrations",
  production: "Live & monitored",
};

/**
 * "How a brief becomes a working system", told as three plain steps: pick a common problem, see our call and
 * what gets built. Rotates through the examples until the visitor picks one.
 */
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
  const parts = scenario.path.map((id) => PARTS[id]).filter(Boolean) as string[];

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

  const steps = [
    { label: "The problem", value: scenario.brief },
    { label: "Our call", value: scenario.decision },
    { label: "What we build", value: scenario.built },
  ];

  return (
    <figure
      className="pixel-corners relative overflow-hidden rounded-2xl border border-ink/12 bg-white"
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
    >
      <div className="border-b border-ink/8 px-5 py-4 sm:px-6">
        <p className="text-[15px] font-semibold tracking-[-0.02em]">Pick a problem. See what we&apos;d build.</p>
        <div role="tablist" aria-label="Example problems" className="no-scrollbar -mx-1 mt-3 flex gap-1.5 overflow-x-auto px-1">
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
                "relative h-9 shrink-0 overflow-hidden rounded-full border px-3.5 text-[13px] whitespace-nowrap transition-colors",
                i === index ? "border-ink bg-ink text-ivory" : "border-ink/15 text-ink/75 hover:border-ink/40 hover:text-ink",
              )}
            >
              {s.tab}
              {i === index && auto && !hovering && !reduce && (
                <span
                  key={`${s.id}-progress`}
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-sun"
                  style={{ animation: "hero-progress 5.6s linear forwards" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <ol
        id="hero-readout"
        role="tabpanel"
        aria-labelledby={`hero-tab-${scenario.id}`}
        aria-live={announce ? "polite" : "off"}
        className="grid gap-px bg-ink/8 sm:grid-cols-3"
      >
        {steps.map((step, i) => (
          <li key={step.label} className="relative bg-white px-5 py-5 sm:px-6 sm:py-6">
            <span
              aria-hidden
              className={cn(
                "t-pixel grid size-9 place-items-center text-[18px]",
                i === 2 ? "pixel-mark" : "bg-ink text-ivory",
              )}
            >
              {i + 1}
            </span>
            <p className="t-arcade mt-4 text-[11px] text-muted">{step.label}</p>
            <p key={`${scenario.id}-${i}`} className="mt-2 animate-rise text-[14.5px] leading-snug text-ink">
              {step.value}
            </p>
          </li>
        ))}
      </ol>

      <div className="flex flex-wrap items-center gap-2 border-t border-ink/8 px-5 py-3.5 sm:px-6">
        <span className="t-arcade text-[11px] text-muted">Built with</span>
        {parts.map((p) => (
          <span key={`${scenario.id}-${p}`} className="rounded-full bg-ivory-2 px-2.5 py-1 text-[12.5px] text-ink/80">
            {p}
          </span>
        ))}
      </div>
      <figcaption className="sr-only">
        Illustrative examples of how NHB turns a business problem into a decision and then a working, monitored system.
      </figcaption>
    </figure>
  );
}
