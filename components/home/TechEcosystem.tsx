"use client";

import { useState } from "react";
import { techCategories, type TechItem } from "@/content/stack";
import { cn } from "@/lib/cn";

export default function TechEcosystem() {
  const [activeId, setActiveId] = useState(techCategories[0].id);
  const [focus, setFocus] = useState<TechItem | null>(null);
  const active = techCategories.find((c) => c.id === activeId)!;
  const inspected = focus ?? null;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Category selector */}
      <div className="lg:col-span-4">
        <div
          role="tablist"
          aria-label="Technology categories"
          className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0"
        >
          {techCategories.map((c, i) => {
            const on = c.id === activeId;
            return (
              <button
                key={c.id}
                id={`stack-tab-${c.id}`}
                role="tab"
                type="button"
                aria-selected={on}
                aria-controls="stack-panel"
                onClick={() => {
                  setActiveId(c.id);
                  setFocus(null);
                }}
                className={cn(
                  "shrink-0 text-left transition-colors",
                  "rounded-full border px-4 py-2 text-sm lg:rounded-none lg:border-0 lg:border-t lg:px-0 lg:py-5",
                  on ? "border-ink bg-ink text-ivory lg:bg-transparent lg:text-ink" : "border-ink/15 text-ink/70 hover:text-ink lg:border-ink/12",
                )}
              >
                <span className="flex items-baseline gap-4">
                  <span className={cn("hidden font-mono text-[11px] lg:inline", on ? "text-ink" : "text-muted")}>0{i + 1}</span>
                  <span className="font-medium tracking-[-0.02em] lg:text-[22px] lg:font-semibold">{c.label}</span>
                  <span className={cn("ml-auto hidden font-mono text-[11px] lg:inline", on ? "text-ink" : "text-muted")}>
                    {c.items.length}
                  </span>
                </span>
                {on && <span className="mt-2 hidden max-w-xs text-[14px] leading-snug text-muted lg:block">{c.intent}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ecosystem map */}
      <div className="lg:col-span-8">
        <div id="stack-panel" role="tabpanel" aria-labelledby={`stack-tab-${activeId}`} className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white">
          <div aria-hidden className="grid-paper absolute inset-0 opacity-60" />
          <div className="relative grid grid-cols-1 gap-px bg-ink/8 sm:grid-cols-2 xl:grid-cols-3">
            {techCategories.map((c) => {
              const on = c.id === activeId;
              return (
                <div
                  key={c.id}
                  className={cn(
                    "p-5 transition-[background-color,opacity] duration-500",
                    on ? "bg-ivory" : "bg-white/90 opacity-60 max-lg:hidden",
                  )}
                >
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setActiveId(c.id)}
                    className={cn("t-eyebrow", on ? "text-ink" : "text-muted")}
                  >
                    {c.label}
                  </button>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.items.map((item) => (
                      <li key={item.name}>
                        <button
                          type="button"
                          tabIndex={on ? 0 : -1}
                          onPointerEnter={() => on && setFocus(item)}
                          onFocus={() => setFocus(item)}
                          onClick={() => {
                            setActiveId(c.id);
                            setFocus(item);
                          }}
                          aria-describedby="stack-note"
                          className={cn(
                            "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-[13.5px] font-medium tracking-[-0.01em] transition-colors",
                            on
                              ? inspected?.name === item.name
                                ? "border-ink bg-ink text-ivory"
                                : "border-ink/20 bg-white text-ink hover:border-ink"
                              : "border-ink/10 bg-transparent text-ink/70",
                          )}
                        >
                          {item.shipped && (
                            <span aria-hidden className="size-1.5 rounded-full bg-emerald-500" />
                          )}
                          {item.name}
                          {item.shipped && <span className="sr-only">(used in shipped NHB work)</span>}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Inspector */}
          <div id="stack-note" aria-live="polite" className="relative border-t border-ink/10 bg-white px-6 py-5">
            {inspected ? (
              <div key={inspected.name} className="animate-rise">
                <p className="t-eyebrow text-muted">When we choose {inspected.name}</p>
                <p className="mt-2 text-[16px] leading-snug font-medium tracking-[-0.015em]">{inspected.note}</p>
                {inspected.shipped && (
                  <p className="mt-2 font-mono text-[11.5px] text-ink/70">
                    <span aria-hidden className="mr-2 inline-block size-1.5 rounded-full bg-emerald-500" />
                    Used in shipped work: {inspected.shipped}
                  </p>
                )}
              </div>
            ) : (
              <div key={`intent-${active.id}`} className="animate-rise">
                <p className="t-eyebrow text-muted">{active.label}</p>
                <p className="mt-2 text-[16px] leading-snug font-medium tracking-[-0.015em]">{active.intent}</p>
                <p className="mt-2 text-[13px] text-muted">Hover or focus a tool to see when we reach for it.</p>
              </div>
            )}
          </div>
        </div>
        <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-muted">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="size-1.5 rounded-full bg-emerald-500" /> Used in shipped NHB work
          </span>
          <span>Tools we work with — not vendor partnerships or certifications.</span>
        </p>
      </div>
    </div>
  );
}
