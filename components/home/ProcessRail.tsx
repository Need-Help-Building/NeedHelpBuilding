"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { processStages } from "@/content/process";
import { cn } from "@/lib/cn";

export default function ProcessRail() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const stage = processStages[active];
  const n = processStages.length;

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (active + 1) % n;
    if (e.key === "ArrowLeft") next = (active - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next >= 0) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <>
      {/* Desktop: interactive rail */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* track + progress */}
          <div aria-hidden className="absolute top-[22px] right-[calc(100%/14)] left-[calc(100%/14)] h-px bg-ink/20" />
          <div
            aria-hidden
            className="absolute top-[22px] left-[calc(100%/14)] h-[2px] -translate-y-px bg-ink transition-[width] duration-700 ease-out"
            style={{ width: `calc((100% - 100% / 7) * ${active / (n - 1)})` }}
          />
          {/* evolve loop from the last station back to the first */}
          <svg aria-hidden className="pointer-events-none absolute top-[44px] left-0 h-10 w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 40">
            <path d="M650 0 V 22 Q650 34 638 34 H 62 Q50 34 50 22 V 0" fill="none" stroke="#c59eb9" strokeWidth="1.5" strokeDasharray="3 6" vectorEffect="non-scaling-stroke" className="animate-flow-slow" />
          </svg>

          <div role="tablist" aria-label="Engineering process stages" className="relative grid grid-cols-7">
            {processStages.map((s, i) => {
              const on = i === active;
              const done = i < active;
              return (
                <button
                  key={s.name}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  id={`process-tab-${i}`}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  aria-controls="process-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onKey}
                  className="group flex flex-col items-center gap-0 pb-16 text-center"
                >
                  <span
                    className={cn(
                      "relative z-10 grid size-11 place-items-center rounded-lg border font-mono text-[12px] transition-colors duration-300",
                      on ? "border-ink bg-sun text-ink" : done ? "border-ink bg-ink text-ivory" : "border-ink/25 bg-ivory text-ink/60 group-hover:border-ink",
                    )}
                  >
                    {s.index}
                  </span>
                  <span className={cn("mt-14 text-[17px] font-semibold tracking-[-0.025em] transition-colors", on ? "text-ink" : "text-ink/55 group-hover:text-ink")}>
                    {s.name}
                  </span>
                </button>
              );
            })}
          </div>
          <span aria-hidden className="t-eyebrow absolute top-[70px] left-1/2 -translate-x-1/2 bg-ivory px-2 text-lilac">
            evolve → discover again
          </span>
        </div>

        <div
          id="process-panel"
          role="tabpanel"
          aria-labelledby={`process-tab-${active}`}
          className="grid grid-cols-12 gap-8 rounded-3xl border border-ink/10 bg-white p-10"
        >
          <div key={`a-${active}`} className="col-span-3 animate-rise">
            <p className="t-eyebrow text-muted">Stage {stage.index} / 07</p>
            <h3 className="t-h3 mt-3">{stage.name}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{stage.summary}</p>
          </div>
          <div key={`b-${active}`} className="col-span-6 animate-rise border-l border-ink/10 pl-8">
            <p className="t-eyebrow text-muted">Engineering principle</p>
            <p className="mt-3 text-[clamp(1.125rem,0.95rem+0.5vw,1.375rem)] leading-snug font-medium tracking-[-0.02em]">
              {stage.principle}
            </p>
          </div>
          <div key={`c-${active}`} className="col-span-3 animate-rise border-l border-ink/10 pl-8">
            <p className="t-eyebrow text-muted">You receive</p>
            <ul className="mt-3 space-y-2.5">
              {stage.outputs.map((o) => (
                <li key={o} className="flex gap-2.5 text-[14px] leading-snug">
                  <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-sun ring-1 ring-ink/30" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Phones & tablets: full vertical timeline, nothing hidden behind interaction */}
      <ol className="lg:hidden">
        {processStages.map((s, i) => (
          <li key={s.name} className="relative grid grid-cols-[44px_1fr] gap-4 pb-10 last:pb-0">
            {i < n - 1 && <span aria-hidden className="absolute top-11 bottom-0 left-[21.5px] w-px bg-ink/20" />}
            <span
              className={cn(
                "grid size-11 place-items-center rounded-lg border font-mono text-[12px]",
                i === 0 ? "border-ink bg-sun" : "border-ink bg-ink text-ivory",
              )}
            >
              {s.index}
            </span>
            <div className="pt-1.5">
              <h3 className="text-[20px] font-semibold tracking-[-0.03em]">{s.name}</h3>
              <p className="mt-1 text-[14.5px] text-muted">{s.summary}</p>
              <p className="mt-4 border-l-2 border-sun pl-4 text-[15px] leading-relaxed">{s.principle}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.outputs.map((o) => (
                  <li key={o} className="rounded-full border border-ink/15 bg-white px-2.5 py-1 font-mono text-[11px] text-ink/80">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li className="t-eyebrow pl-[60px] text-lilac">↺ Evolve feeds the next Discover</li>
      </ol>
    </>
  );
}
