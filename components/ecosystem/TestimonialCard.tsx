import { ArrowLink } from "@/components/ui/ButtonLink";
import type { Testimonial } from "@/content/work";
import { cn } from "@/lib/cn";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

/** A real testimonial (content/work.ts) as a standalone card, linking to the related case study. */
export default function TestimonialCard({ testimonial: t, className }: { testimonial: Testimonial; className?: string }) {
  return (
    <figure data-reveal className={cn("flex flex-col rounded-3xl bg-white p-7 text-ink ring-1 ring-ink/10 sm:p-9", className)}>
      <span aria-hidden className="grid size-10 place-items-center rounded-lg bg-sun">
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
          <path d="M4 18v-5.2C4 8.6 6 6.1 10 5l.8 1.8C8.6 7.6 7.6 9 7.5 11H10v7H4Zm10 0v-5.2c0-4.2 2-6.7 6-7.8l.8 1.8c-2.2.8-3.2 2.2-3.3 4.2H20v7h-6Z" />
        </svg>
      </span>
      <blockquote className="mt-6 flex-1 text-[clamp(1.1rem,1rem+0.4vw,1.35rem)] leading-[1.4] font-medium tracking-[-0.02em]">
        <p>{t.quote}</p>
      </blockquote>
      <figcaption className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t border-ink/12 pt-6">
        <span className="flex items-center gap-3.5">
          <span aria-hidden className="grid size-11 place-items-center rounded-lg bg-ink font-mono text-[12px] text-ivory">
            {initials(t.name)}
          </span>
          <span>
            <span className="block text-[15.5px] font-semibold tracking-[-0.02em]">{t.name}</span>
            <span className="block text-[13.5px] text-muted">
              {t.role}, {t.organization}
            </span>
          </span>
        </span>
        <ArrowLink href={`/work/${t.projectSlug}`}>The {t.organization} work</ArrowLink>
      </figcaption>
    </figure>
  );
}
