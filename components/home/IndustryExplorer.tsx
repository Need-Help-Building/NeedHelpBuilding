"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { industries, type Industry } from "@/content/industries";
import { cn } from "@/lib/cn";
import IndustryGlyphArt from "./visuals/IndustryGlyphs";

const surfaces = ["bg-mist-soft", "bg-lilac-soft", "bg-sun", "bg-ivory-2"];

function Detail({ industry, index }: { industry: Industry; index: number }) {
  return (
    <>
      <div className={cn("relative aspect-[16/10] overflow-hidden rounded-2xl p-4", surfaces[index % surfaces.length])}>
        <IndustryGlyphArt glyph={industry.slug} label={`Illustration of a ${industry.name.toLowerCase()} system`} />
      </div>
      <p className="mt-6 text-[17px] leading-relaxed text-ink/85">{industry.summary}</p>
      <p className="t-eyebrow mt-6 text-muted">What we build</p>
      <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {industry.solutions.map((s) => (
          <li key={s} className="flex gap-2.5 text-[14.5px] leading-snug">
            <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-ink" />
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
        <ArrowLink href={industry.cta.href}>{industry.cta.label}</ArrowLink>
        {industry.evidence && (
          <ArrowLink href={industry.evidence.href} className="text-muted">
            {industry.evidence.label}
          </ArrowLink>
        )}
      </div>
    </>
  );
}

export default function IndustryExplorer() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <>
      {/* Desktop: list + sticky preview */}
      <div className="hidden gap-8 lg:grid lg:grid-cols-12">
        <div role="tablist" aria-label="Industries" aria-orientation="vertical" className="lg:col-span-5">
          {industries.map((ind, i) => {
            const on = i === active;
            return (
              <button
                key={ind.slug}
                id={`industry-tab-${ind.slug}`}
                role="tab"
                type="button"
                aria-selected={on}
                aria-controls="industry-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                onPointerEnter={() => setActive(i)}
                onKeyDown={(e) => {
                  const n = industries.length;
                  const next = e.key === "ArrowDown" ? (i + 1) % n : e.key === "ArrowUp" ? (i - 1 + n) % n : -1;
                  if (next >= 0) {
                    e.preventDefault();
                    setActive(next);
                    document.getElementById(`industry-tab-${industries[next].slug}`)?.focus();
                  }
                }}
                className="group flex w-full items-center gap-5 border-t border-ink/12 py-5 text-left last:border-b"
              >
                <span className={cn("font-mono text-[11px] transition-colors", on ? "text-ink" : "text-muted")}>0{i + 1}</span>
                <span
                  className={cn(
                    "text-[clamp(1.5rem,1.1rem+1.1vw,2.25rem)] leading-none font-semibold tracking-[-0.045em] transition-colors duration-300",
                    on ? "text-ink" : "text-ink/35 group-hover:text-ink/70",
                  )}
                >
                  {ind.name}
                </span>
                {on && (
                  <span aria-hidden className="ml-auto text-sm font-semibold text-ink">
                    →
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <div
            id="industry-panel"
            role="tabpanel"
            aria-labelledby={`industry-tab-${current.slug}`}
            className="sticky top-28 rounded-3xl border border-ink/10 bg-white p-8"
          >
            <div key={current.slug} className="animate-rise">
              <div className="mb-5 flex items-baseline justify-between">
                <h3 className="t-h3">{current.name}</h3>
                <span className="font-mono text-[11px] text-muted">0{active + 1} / 0{industries.length}</span>
              </div>
              <Detail industry={current} index={active} />
            </div>
          </div>
        </div>
      </div>

      {/* Phones & tablets: accordions */}
      <div className="lg:hidden">
        {industries.map((ind, i) => (
          <details key={ind.slug} className="group border-t border-ink/12 last:border-b" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
              <span className="font-mono text-[11px] text-muted">0{i + 1}</span>
              <span className="text-[24px] leading-none font-semibold tracking-[-0.04em]">{ind.name}</span>
              <Plus aria-hidden className="ml-auto size-5 transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <div className="pb-8">
              <Detail industry={ind} index={i} />
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
