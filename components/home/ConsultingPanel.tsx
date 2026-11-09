"use client";

import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { LiveOrb } from "@/components/ui/live-orb";
import { consultingMailto, consultingTopics } from "@/content/consulting";
import { whatsapp } from "@/content/site";
import { cn } from "@/lib/cn";

export default function ConsultingPanel() {
  const [selected, setSelected] = useState<string[]>(["architecture", "ai-readiness"]);
  const picked = consultingTopics.filter((t) => selected.includes(t.id));

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <fieldset className="lg:col-span-7">
        <legend className="t-eyebrow mb-5 text-ivory/55">What are you trying to decide? Pick any that apply.</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {consultingTopics.map((t) => {
            const on = selected.includes(t.id);
            return (
              <label
                key={t.id}
                className={cn(
                  "group relative flex cursor-pointer flex-col gap-3 rounded-2xl border p-5 transition-colors",
                  "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sun",
                  on ? "border-sun bg-sun/10" : "border-ivory/12 bg-ink-2 hover:border-ivory/35",
                )}
              >
                <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(t.id)} />
                <span className="flex items-center justify-between gap-3">
                  <span className={cn("t-eyebrow", on ? "text-sun" : "text-ivory/50")}>{t.label}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-5 shrink-0 place-items-center rounded-[5px] border transition-colors",
                      on ? "border-sun bg-sun text-ink" : "border-ivory/30 text-transparent",
                    )}
                  >
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                </span>
                <span className="text-[16px] leading-snug font-medium tracking-[-0.015em] text-ivory">“{t.question}”</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="lg:col-span-5">
        <div className="sticky top-28 overflow-hidden rounded-3xl bg-ivory text-ink relative">
          <div className="pointer-events-auto absolute top-4 right-4 z-10">
            <LiveOrb variant="black" size={46} />
          </div>
          <div className="border-b border-ink/10 px-6 py-5 sm:px-8">
            <p className="t-eyebrow text-muted">Your consultation brief</p>
            <p className="mt-2 text-[22px] leading-tight font-semibold tracking-[-0.035em]">
              {picked.length === 0
                ? "Start with the problem."
                : `${picked.length} ${picked.length === 1 ? "question" : "questions"} to work through`}
            </p>
          </div>
          <div aria-live="polite" className="px-6 py-6 sm:px-8">
            {picked.length === 0 ? (
              <p className="text-[15px] leading-relaxed text-muted">
                Not sure which of these applies? That&apos;s normal. Tell us what&apos;s happening in plain language and
                we&apos;ll work out the right questions together.
              </p>
            ) : (
              <>
                <p className="t-eyebrow text-muted">You leave with</p>
                <ul className="mt-4 space-y-3">
                  {picked.map((t) => (
                    <li key={t.id} className="flex animate-rise gap-3 text-[14.5px] leading-snug">
                      <span aria-hidden className="text-ink/60 select-none">›</span>
                      {t.deliverable}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="space-y-3 border-t border-ink/10 bg-white px-6 py-6 sm:px-8">
            <ButtonLink href={consultingMailto(picked)} variant="ink" className="w-full justify-between">
              Discuss Your Technical Challenges
            </ButtonLink>
            <a
              href={whatsapp(
                picked.length
                  ? `Hi NHB, we'd like to talk through: ${picked.map((t) => t.label).join(", ")}.`
                  : "Hi NHB, we'd like to talk through a technical decision.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center justify-center gap-2 rounded-full border border-ink/15 text-sm transition-colors hover:border-ink"
            >
              <MessageCircle aria-hidden className="size-4" /> Or message us on WhatsApp
            </a>
            <p className="text-center text-[12px] text-muted">Opens your email app with these questions filled in.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
