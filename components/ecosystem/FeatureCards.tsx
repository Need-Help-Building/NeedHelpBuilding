import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface FeatureCard {
  title: string;
  summary?: string;
  items: string[];
  /** Background accent from the NHB palette. */
  tone?: "ivory" | "white" | "sun" | "mist" | "lilac" | "ink";
  icon?: ReactNode;
}

const tones: Record<NonNullable<FeatureCard["tone"]>, string> = {
  ivory: "bg-ivory-2 text-ink",
  white: "bg-white text-ink border border-ink/10",
  sun: "bg-sun text-ink",
  mist: "bg-mist-soft text-ink",
  lilac: "bg-lilac-soft text-ink",
  ink: "bg-ink text-ivory",
};

/** Grid of capability cards with ticked lists, used for "what we offer" style sections. */
export default function FeatureCards({ cards, columns = 2, className }: { cards: FeatureCard[]; columns?: 2 | 3 | 4; className?: string }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:gap-5",
        columns === 2 && "md:grid-cols-2",
        columns === 3 && "md:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {cards.map((card, i) => {
        const tone = card.tone ?? "white";
        const dark = tone === "ink";
        return (
          <article
            key={card.title}
            data-reveal
            data-delay={String((i % 4) + 1)}
            className={cn("pixel-corners flex flex-col rounded-3xl p-7 sm:p-9", tones[tone])}
          >
            <div className="flex items-start justify-between gap-4">
              <span className={cn("font-mono text-[12px]", dark ? "text-sun" : "text-ink/55")}>{String(i + 1).padStart(2, "0")}</span>
              {card.icon}
            </div>
            <h3 className="mt-8 t-h3">{card.title}</h3>
            {card.summary && <p className={cn("mt-3 text-[15px] leading-relaxed", dark ? "text-ivory/70" : "text-ink/70")}>{card.summary}</p>}
            <ul className={cn("mt-6 border-t", dark ? "border-ivory/15" : "border-ink/12")}>
              {card.items.map((item) => (
                <li
                  key={item}
                  className={cn("flex gap-3 border-b py-3 text-[15px]", dark ? "border-ivory/10 text-ivory/90" : "border-ink/10")}
                >
                  <span aria-hidden className={cn("select-none", dark ? "text-sun" : "text-ink/45")}>
                    ›
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
