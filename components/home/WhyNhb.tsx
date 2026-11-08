import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import { differentiators } from "@/content/company";
import { ctas } from "@/content/site";

export default function WhyNhb() {
  return (
    <section id="why" aria-labelledby="why-title" className="py-24 lg:py-36">
      <Container>
        <SectionHeading
          index="10"
          label="Why NHB"
          title="Why businesses choose an *engineering-first* partner."
          titleId="why-title"
          lede="Every agency says it cares about quality. These are the practices behind ours — the things you'll actually notice when we work together."
          aside={
            <ButtonLink href={ctas.consultation.href} variant="ink">
              {ctas.consultation.label}
            </ButtonLink>
          }
        />

        <ol className="mt-14 grid gap-x-10 md:grid-cols-2 lg:mt-20 lg:gap-x-16">
          {differentiators.map((d, i) => (
            <li
              key={d.title}
              data-reveal
              data-delay={String((i % 2) + 1)}
              className="group grid grid-cols-[52px_1fr] gap-x-4 border-t border-ink/12 py-8"
            >
              <span className="font-mono text-[13px] text-muted transition-colors group-hover:text-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[clamp(1.25rem,1.1rem+0.5vw,1.5rem)] leading-tight font-semibold tracking-[-0.03em]">
                  {d.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  <span className="t-eyebrow mr-2 align-[1px] text-ink/70">In practice</span>
                  {d.practice}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
