import { ArrowLink } from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import { testimonials } from "@/content/work";
import { cn } from "@/lib/cn";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-white py-24 lg:py-36">
      <Container>
        <SectionHeading
          index="13"
          label="Testimonials"
          title="What our partners say about *working with us.*"
          titleId="testimonials-title"
          lede="In their own words, from founders we've built with as their technical partner."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-12">
          {testimonials.map((t, i) => {
            const lead = i === 0;
            return (
              <figure
                key={t.name}
                data-reveal
                data-delay={String(i + 1)}
                className={cn(
                  "relative flex flex-col rounded-3xl p-7 sm:p-10",
                  lead ? "bg-ivory lg:col-span-7" : "bg-lilac-soft lg:col-span-5",
                )}
              >
                <span aria-hidden className="grid size-12 place-items-center rounded-lg bg-sun text-ink">
                  <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
                    <path d="M4 18v-5.2C4 8.6 6 6.1 10 5l.8 1.8C8.6 7.6 7.6 9 7.5 11H10v7H4Zm10 0v-5.2c0-4.2 2-6.7 6-7.8l.8 1.8c-2.2.8-3.2 2.2-3.3 4.2H20v7h-6Z" />
                  </svg>
                </span>
                <blockquote
                  className={cn(
                    "mt-8 font-medium tracking-[-0.025em] text-ink",
                    lead ? "text-[clamp(1.375rem,1.1rem+1vw,2.125rem)] leading-[1.25]" : "text-[clamp(1.2rem,1.05rem+0.6vw,1.5rem)] leading-[1.35]",
                  )}
                >
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-ink/12 pt-6">
                  <div className="flex items-center gap-4">
                    <span aria-hidden className="grid size-12 place-items-center rounded-lg bg-ink font-mono text-[13px] text-ivory">
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block text-[16px] font-semibold tracking-[-0.02em]">{t.name}</span>
                      <span className="block text-[14px] text-muted">
                        {t.role}, {t.organization}
                      </span>
                      <span className="mt-1 block font-mono text-[11px] text-ink/60">{t.context}</span>
                    </span>
                  </div>
                  <ArrowLink href={`/work/${t.projectSlug}`}>About the {t.organization} work</ArrowLink>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
