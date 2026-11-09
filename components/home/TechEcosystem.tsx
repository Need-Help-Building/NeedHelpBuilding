"use client";

import { useState } from "react";
import { techCategories, type TechItem } from "@/content/stack";
import { cn } from "@/lib/cn";
import { TECH_ICON_MAP } from "./visuals/TechIcons";

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
          className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0"
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
                  on
                    ? "border-sun bg-sun text-ink font-semibold lg:border-white lg:bg-transparent lg:text-white"
                    : "border-white/20 bg-white/10 text-white/80 hover:text-white hover:bg-white/15 lg:border-white/15 lg:bg-transparent",
                )}
              >
                <span className="flex items-baseline gap-4">
                  <span className={cn("hidden font-mono text-[11px] lg:inline", on ? "text-sun font-bold" : "text-white/60")}>
                    0{i + 1}
                  </span>
                  <span className="font-medium tracking-[-0.02em] lg:text-[22px] lg:font-semibold">
                    {c.label}
                  </span>
                  <span className={cn("ml-auto hidden font-mono text-[11px] lg:inline", on ? "text-sun" : "text-white/50")}>
                    {c.items.length}
                  </span>
                </span>
                {on && (
                  <span className="mt-2 hidden max-w-xs text-[14px] leading-snug text-white/85 lg:block">
                    {c.intent}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ecosystem map */}
      <div className="lg:col-span-8">
        <div
          id="stack-panel"
          role="tabpanel"
          aria-labelledby={`stack-tab-${activeId}`}
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-white text-ink shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
        >
          <div aria-hidden className="grid-paper absolute inset-0 opacity-40 pointer-events-none" />

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
                    className={cn("t-eyebrow font-mono text-xs uppercase tracking-wider", on ? "text-ink font-semibold" : "text-muted")}
                  >
                    {c.label}
                  </button>

                  <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-2">
                    {c.items.map((item) => {
                      const IconComponent = TECH_ICON_MAP[item.name];
                      const isSelected = inspected?.name === item.name;
                      return (
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
                            aria-label={item.name}
                            title={item.name}
                            className={cn(
                              "group relative flex w-full flex-col items-center justify-center gap-2 rounded-xl border p-3 text-center transition-all duration-200",
                              on
                                ? isSelected
                                  ? "border-ink bg-ink text-ivory shadow-md scale-[1.03]"
                                  : "border-ink/15 bg-white text-ink hover:border-ink hover:shadow-sm"
                                : "border-ink/10 bg-transparent text-ink/70",
                            )}
                          >
                            {item.shipped && (
                              <span
                                aria-hidden
                                className="absolute top-2 right-2 size-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/25"
                                title="Used in shipped NHB work"
                              />
                            )}
                            <span className="grid size-10 place-items-center rounded-lg bg-ink/5 p-1.5 transition-transform duration-200 group-hover:scale-110">
                              {IconComponent ? (
                                <IconComponent className="size-6 shrink-0" />
                              ) : (
                                <span className="size-2.5 rounded-full bg-ink" />
                              )}
                            </span>
                            <span className="w-full truncate text-[12px] font-semibold tracking-[-0.01em]">
                              {item.name}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Inspector */}
          <div id="stack-note" aria-live="polite" className="relative border-t border-ink/10 bg-white px-6 py-6 sm:px-8">
            {inspected ? (
              <div key={inspected.name} className="animate-rise flex items-start gap-4">
                {(() => {
                  const BigIcon = TECH_ICON_MAP[inspected.name];
                  return BigIcon ? (
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-ink/10 bg-ink/5 p-2 shadow-xs">
                      <BigIcon className="size-8" />
                    </span>
                  ) : null;
                })()}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <p className="text-[18px] sm:text-[20px] font-bold tracking-[-0.025em] text-ink">
                      {inspected.name}
                    </p>
                    {inspected.shipped && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-[10.5px] font-medium text-emerald-800">
                        <span aria-hidden className="size-1.5 rounded-full bg-emerald-500" />
                        Shipped in: {inspected.shipped}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-[14.5px] sm:text-[15.5px] leading-relaxed font-medium text-ink/85">
                    {inspected.note}
                  </p>
                </div>
              </div>
            ) : (
              <div key={`intent-${active.id}`} className="animate-rise">
                <p className="t-eyebrow text-muted">{active.label}</p>
                <p className="mt-2 text-[16px] leading-snug font-medium tracking-[-0.015em] text-ink">{active.intent}</p>
                <p className="mt-2 text-[13px] text-muted">Tap or hover any technology icon to inspect our engineering rationale.</p>
              </div>
            )}
          </div>
        </div>

        <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-white/80">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="size-1.5 rounded-full bg-emerald-400" /> Used in shipped NHB work
          </span>
          <span>Tools we work with — not vendor partnerships or certifications.</span>
        </p>
      </div>
    </div>
  );
}
