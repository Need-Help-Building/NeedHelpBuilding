import { ArrowUpRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import SmartLink from "@/components/ui/SmartLink";
import { Container } from "@/components/ui/primitives";
import { programs, type ProgramId } from "@/content/ecosystem";
import { PixelHorizon } from "@/components/pixel/Decor";

/**
 * Closing band for every ecosystem page (NHB yellow, as the homepage contact section), with links to the
 * other programs so visitors who landed on the wrong one can move across.
 */
export default function ProgramCta({
  current,
  title,
  primary,
  secondary,
}: {
  current: ProgramId;
  title: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  const others = programs.filter((p) => p.id !== current);
  return (
    <section aria-labelledby="program-cta-title" className="relative overflow-hidden bg-sun text-ink">
      <div aria-hidden className="grid-paper-sun pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_80%_at_70%_40%,#000,transparent)]" />
      <Container className="relative py-16 sm:py-24 lg:py-28">
        <p data-reveal="fade" className="t-eyebrow flex items-center gap-3">
          <span aria-hidden className="size-2 bg-ink" />
          Good things are built together
        </p>
        <h2
          id="program-cta-title"
          data-reveal
          className="t-pixel mt-6 max-w-[20ch] text-[clamp(2rem,1rem+3.6vw,4.25rem)] leading-[1.06] font-semibold"
        >
          {title}
        </h2>
        <div data-reveal data-delay="1" className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href={primary.href} variant="ink" size="lg">
            {primary.label}
          </ButtonLink>
          <ButtonLink href={secondary.href} variant="outline" size="lg">
            {secondary.label}
          </ButtonLink>
        </div>

        <nav aria-label="Other NHB programs" className="mt-16 border-t-2 border-ink pt-6 lg:mt-20">
          <p className="t-eyebrow text-ink/70">Other ways to work with NHB</p>
          <ul className="mt-4 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <li key={p.id}>
                <SmartLink href={p.href} className="group flex h-full flex-col gap-2 py-3 pr-6">
                  <span className="font-mono text-[11px] text-ink/60 uppercase">{p.audience}</span>
                  <span className="flex items-center gap-2 text-[18px] font-semibold tracking-[-0.025em]">
                    {p.title}
                    <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                  <span className="text-[14px] leading-snug text-ink/75">{p.summary}</span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <PixelHorizon className="relative -mb-px" />
    </section>
  );
}
