import ButtonLink from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/primitives";
import PixelOrb from "@/components/pixel/PixelOrb";
import { PixelCloud, PixelPterodactyl, PixelSun } from "@/components/pixel/Decor";
import PixelRunner from "@/components/pixel/PixelRunner";
import { hero } from "@/content/hero";
import { ctas, site } from "@/content/site";
import HeroSystem from "./HeroSystem";

/**
 * Hero: the NHB business card, alive.
 * Screen one is the card — pixel sky, the headline in the pixel display face, the card's "Offline?" line and a
 * full-width ground that is a playable runner (the business stuck offline that NHB brings to the web).
 * Below the ground: our position and the brief → system map, unchanged.
 */
export default function Hero() {
  // The card highlights a single word; the headline's last word gets the yellow block.
  const markWords = hero.titleMark.split(" ");
  const lastWord = markWords.pop();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="relative flex min-h-[calc(100svh-64px)] flex-col lg:min-h-[calc(100svh-72px)]">
        <div
          aria-hidden
          className="grid-paper pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,#000_0%,#000_30%,transparent_75%)]"
        />

        {/* Pixel sky, composed around the headline */}
        <PixelSun scale={6} className="top-10 right-[7%] hidden md:block" />
        <PixelCloud scale={5} drift={28} duration={16} className="top-[168px] right-[19%] hidden lg:block" />
        <PixelCloud small scale={4} drift={-22} duration={12} className="top-[92px] left-[58%] hidden md:block" />
        <PixelCloud small scale={3} drift={18} duration={11} className="top-5 right-5 md:hidden" />
        <PixelPterodactyl scale={3} className="top-[120px] hidden md:block" duration={24} delay={6} />

        <Container className="relative flex-1 pt-6 pb-5 sm:pt-14 sm:pb-8 lg:pt-16">
          <p data-reveal="fade" className="t-eyebrow text-muted">
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            data-reveal
            className="t-pixel mt-4 max-w-[14ch] sm:mt-6 text-[clamp(2.25rem,0.9rem+4.4vw,4.6rem)] leading-[1.14] font-semibold sm:max-w-[19ch]"
          >
            {hero.titleLead} {markWords.join(" ")} <span className="pixel-mark whitespace-nowrap">{lastWord}</span>
          </h1>

          <div className="mt-6 grid grid-cols-1 items-end gap-6 sm:mt-8 sm:gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <p data-reveal data-delay="1" className="t-lede max-w-xl text-muted">
                {hero.lede}
              </p>
              <div data-reveal data-delay="2" className="mt-6 flex flex-wrap gap-3 sm:mt-7">
                <ButtonLink href={ctas.startProject.href} size="lg">
                  {ctas.startProject.label}
                </ButtonLink>
                <ButtonLink href={ctas.exploreWork.href} variant="outline" size="lg">
                  {ctas.exploreWork.label}
                </ButtonLink>
              </div>
            </div>

            {/* The card's line, sitting just above the ground */}
            <div className="lg:col-span-6 lg:justify-self-end lg:text-right">
              <p data-reveal data-delay="2" className="t-pixel text-[clamp(1.5rem,1.05rem+1.4vw,2.4rem)] font-semibold">
                Is your business still <span className="pixel-mark">Offline?</span>
              </p>
              <p data-reveal data-delay="3" className="mt-3 text-[17px] font-medium tracking-[-0.01em] text-ink/80">
                We bring it to the web.
                <span aria-hidden className="pixel-caret" />
              </p>
            </div>
          </div>
        </Container>

        <PixelRunner />
      </div>

      {/* Below the ground: position + the brief → working system map */}
      <Container className="relative py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div data-reveal className="flex flex-col lg:col-span-5">
            <p className="t-eyebrow text-muted">Our position</p>
            <p className="mt-4 max-w-md text-[clamp(1.35rem,1.1rem+0.8vw,1.85rem)] leading-snug font-medium tracking-[-0.025em]">
              {site.positioning}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="What we do">
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

          <div data-reveal data-delay="1" className="relative lg:col-span-7">
            <div className="pointer-events-auto absolute -top-3 -right-3 z-20 hidden lg:block">
              <PixelOrb variant="custom" color="#245bff" eyeColor="#FAFAFA" size={56} />
            </div>
            <HeroSystem />
          </div>
        </div>
      </Container>
    </section>
  );
}
