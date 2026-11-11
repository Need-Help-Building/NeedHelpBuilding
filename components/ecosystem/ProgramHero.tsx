import type { ReactNode } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import { Marked } from "@/components/ui/Marked";
import { Container } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";
import { PixelCloud, PixelSun } from "@/components/pixel/Decor";

interface Cta {
  href: string;
  label: string;
}

interface Props {
  eyebrow: string;
  /** Supports *highlight* markup (see components/ui/Marked). */
  title: string;
  lede: ReactNode;
  primary: Cta;
  secondary?: Cta;
  /** Right-hand visual or proof panel. */
  aside?: ReactNode;
  /** Small print under the CTAs. */
  note?: ReactNode;
  className?: string;
}

/** Opening section shared by the ecosystem program pages: grid-paper canvas, display headline, two CTAs. */
export default function ProgramHero({ eyebrow, title, lede, primary, secondary, aside, note, className }: Props) {
  return (
    <section aria-labelledby="program-title" className={cn("relative overflow-hidden border-b border-line", className)}>
      <div
        aria-hidden
        className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_0%,#000_40%,transparent_92%)]"
      />
      <PixelSun scale={5} className="top-8 right-[6%] hidden md:block" />
      <PixelCloud small scale={4} drift={-20} duration={13} className="top-28 right-[22%] hidden lg:block" />
      <Container className="relative pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
        <div className={cn("grid grid-cols-1 gap-12 lg:gap-10", !!aside && "lg:grid-cols-12")}>
          <div className={cn(!!aside && "lg:col-span-7")}>
            <p data-reveal="fade" className="t-eyebrow flex items-center gap-3 text-muted">
              <span aria-hidden className="size-2 bg-sun ring-1 ring-ink/20" />
              {eyebrow}
            </p>
            <h1
              id="program-title"
              data-reveal
              className="t-pixel mt-7 max-w-[17ch] text-[clamp(2.25rem,0.9rem+4.2vw,4.75rem)] leading-[1.08] font-semibold"
            >
              <Marked text={title} />
            </h1>
            <div data-reveal data-delay="1" className="t-lede mt-8 max-w-2xl text-muted">
              {lede}
            </div>
            <div data-reveal data-delay="2" className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={primary.href} size="lg" variant="ink">
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink href={secondary.href} size="lg" variant="outline">
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
            {note && (
              <div data-reveal data-delay="3" className="mt-6 max-w-xl text-[13.5px] leading-relaxed text-muted">
                {note}
              </div>
            )}
          </div>
          {aside && (
            <div data-reveal data-delay="2" className="lg:col-span-5 lg:self-end">
              {aside}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
