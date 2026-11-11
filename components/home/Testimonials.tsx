import { ArrowLink } from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import PixelOrb from "@/components/pixel/PixelOrb";
import { PixelPteroHover } from "@/components/pixel/Decor";
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
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-[#245bff] py-24 text-white lg:py-36"
    >
      <PixelPteroHover scale={2} color="#ffffff" flip className="top-14 right-[22%] hidden opacity-50 lg:block" />
      {/* Subtle technical grid pattern for depth on the electric blue canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
      />

      <Container className="relative">
        <SectionHeading
          index="13"
          label="Testimonials"
          title="What our partners say about *working with us.*"
          titleId="testimonials-title"
          lede="In their own words, from founders we've built with as their technical partner."
          tone="dark"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-12">
          {testimonials.map((t, i) => {
            const lead = i === 0;
            return (
              <figure
                key={t.name}
                data-reveal
                data-delay={String(i + 1)}
                className={cn(
                  "relative flex flex-col rounded-3xl p-7 sm:p-10 bg-white text-ink shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]",
                  lead ? "lg:col-span-7" : "lg:col-span-5",
                )}
              >
                <div className="pointer-events-auto absolute top-7 right-7 z-10">
                  {lead ? (
                    <PixelOrb variant="custom" color="#245bff" eyeColor="#FAFAFA" size={50} />
                  ) : (
                    <PixelOrb variant="custom" color="#ffd000" eyeColor="#171717" size={46} />
                  )}
                </div>
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
