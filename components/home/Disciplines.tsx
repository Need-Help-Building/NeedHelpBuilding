import { ArrowLink } from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import PixelOrb from "@/components/pixel/PixelOrb";
import { disciplines, type DisciplineVisual } from "@/content/disciplines";
import { cn } from "@/lib/cn";
import { AgentsVisual, DecisionVisual, PipelineVisual, StackVisual } from "./visuals/DisciplineVisuals";

const visuals: Record<DisciplineVisual, { Component: () => React.JSX.Element; surface: string }> = {
  agents: { Component: AgentsVisual, surface: "bg-lilac-soft" },
  stack: { Component: StackVisual, surface: "bg-mist-soft" },
  decision: { Component: DecisionVisual, surface: "bg-sun" },
  pipeline: { Component: PipelineVisual, surface: "bg-ink" },
};

export default function Disciplines() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="bg-ivory-2 py-24 lg:py-36">
      <Container>
        <SectionHeading
          index="03"
          label="Capabilities"
          title="Four disciplines. *One engineering standard.*"
          titleId="capabilities-title"
          lede="Most partners are strong in one of these. Real projects need all four working together, so we built one team that covers them, held to the same standard of engineering."
        />

        <div className="mt-14 lg:mt-20">
          {disciplines.map((d, i) => {
            const flip = i % 2 === 1;
            const { Component, surface } = visuals[d.visual];
            return (
              <article
                key={d.id}
                id={d.id}
                aria-labelledby={`${d.id}-title`}
                className="grid gap-10 border-t border-ink/12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-20"
              >
                <div data-reveal className={cn("lg:col-span-5 lg:row-start-1", flip ? "lg:col-start-8" : "lg:col-start-1")}>
                  <p className="t-arcade text-[13px] text-muted">
                    <span className="text-ink">{d.index}</span> / 04
                  </p>
                  <h3
                    id={`${d.id}-title`}
                    className="mt-5 text-[clamp(1.875rem,1.3rem+1.8vw,3rem)] leading-[1.02] font-semibold tracking-[-0.045em]"
                  >
                    {d.title}
                  </h3>
                  <p className="t-eyebrow mt-4 text-muted">{d.kicker}</p>
                  <p className="mt-6 max-w-md text-[16px] leading-relaxed text-muted">{d.summary}</p>
                  <ul className="mt-8 grid max-w-md grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {d.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-[14.5px] leading-snug">
                        <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-ink" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <ArrowLink href={d.link.href} className="mt-9">
                    {d.link.label}
                  </ArrowLink>
                </div>

                <div
                  data-reveal
                  data-delay="1"
                  className={cn("lg:col-span-7 lg:row-start-1", flip ? "lg:col-start-1" : "lg:col-start-6")}
                >
                  <figure className={cn("pixel-corners relative aspect-[400/290] overflow-hidden rounded-2xl p-4 sm:p-6", surface)}>
                    <div className="pointer-events-auto absolute top-3 right-3 z-10">
                      {d.index === "01" && <PixelOrb variant="custom" color="#ffd000" eyeColor="#171717" size={48} />}
                      {d.index === "02" && <PixelOrb variant="custom" color="#245bff" eyeColor="#FAFAFA" size={48} />}
                      {d.index === "03" && <PixelOrb variant="black" size={48} />}
                      {d.index === "04" && <PixelOrb variant="custom" color="#ffd000" eyeColor="#171717" size={48} />}
                    </div>
                    <Component />
                  </figure>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="t-eyebrow mr-1 text-muted">Under the hood</span>
                    {d.technical.map((t) => (
                      <span key={t} className="rounded-full border border-ink/15 bg-ivory px-2.5 py-1 font-mono text-[11px] text-ink/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
