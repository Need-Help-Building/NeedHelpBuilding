import ButtonLink from "@/components/ui/ButtonLink";
import { Highlight } from "@/components/ui/Marked";
import { Container } from "@/components/ui/primitives";
import { LiveOrb } from "@/components/ui/live-orb";
import { hero } from "@/content/hero";
import { ctas, site } from "@/content/site";
import HeroSystem from "./HeroSystem";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden
        className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_0%,#000_45%,transparent_92%)]"
      />
      <Container className="relative pt-10 pb-20 sm:pt-14 lg:pt-16 lg:pb-28">
        <p data-reveal="fade" className="t-eyebrow text-muted">
          {hero.eyebrow}
        </p>

        <h1
          id="hero-title"
          data-reveal
          className="mt-7 max-w-[15ch] text-[clamp(2.6rem,0.55rem+6vw,6.25rem)] leading-[0.95] font-semibold tracking-[-0.052em] lg:max-w-none"
        >
          {hero.titleLead} <Highlight>{hero.titleMark}</Highlight>
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col lg:col-span-5">
            <p data-reveal data-delay="1" className="t-lede max-w-xl text-muted">
              {hero.lede}
            </p>
            <div data-reveal data-delay="2" className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={ctas.startProject.href} size="lg">
                {ctas.startProject.label}
              </ButtonLink>
              <ButtonLink href={ctas.exploreWork.href} variant="outline" size="lg">
                {ctas.exploreWork.label}
              </ButtonLink>
            </div>

            <div data-reveal data-delay="3" className="mt-12 border-t border-ink/12 pt-6 lg:mt-auto">
              <p className="t-eyebrow text-muted">Our position</p>
              <p className="mt-3 max-w-md text-lg leading-snug font-medium tracking-[-0.02em]">{site.positioning}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="What we do">
                {hero.capabilities.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-ink/15 bg-ivory px-3 py-1.5 font-mono text-[11px] tracking-wide text-ink/80"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div data-reveal data-delay="2" className="relative lg:col-span-7">
            <div className="pointer-events-auto absolute -top-3 -right-3 z-20 hidden lg:block">
              <LiveOrb variant="custom" color="#245bff" eyeColor="#FAFAFA" size={56} />
            </div>
            <HeroSystem />
          </div>
        </div>
      </Container>
    </section>
  );
}
