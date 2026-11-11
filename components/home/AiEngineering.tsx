import ButtonLink, { ArrowLink } from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import { LiveOrb } from "@/components/ui/live-orb";
import { aiCapabilities } from "@/content/ai";
import AgentArchitecture from "./AgentArchitecture";

export default function AiEngineering() {
  return (
    <section id="ai-engineering" aria-labelledby="ai-title" className="border-t border-line py-24 lg:py-36">
      <Container>
        <SectionHeading
          index="02"
          label="AI engineering"
          title="Building beyond what's *conventional.*"
          titleId="ai-title"
          lede="Most AI projects stall somewhere between a promising demo and a system people can depend on. We engineer the part in between: architecture, retrieval, tool permissions, evaluation and cost control."
          aside={
            <ButtonLink href="/services/ai-development" variant="ink">
              Explore AI Engineering
            </ButtonLink>
          }
        />

        <div data-reveal className="mt-14 lg:mt-20">
          <AgentArchitecture />
        </div>

        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="lg:col-span-4">
            <p className="t-eyebrow text-muted">What we build</p>
            <h3 className="t-h3 mt-4 max-w-sm">Nine kinds of intelligent system. One engineering discipline.</h3>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
              Every one of them gets the same treatment: grounded in your data, permissioned, evaluated and monitored in
              production.
            </p>
            <ArrowLink href="/#spotlight" className="mt-6">
              See a voice agent in production
            </ArrowLink>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
            {aiCapabilities.map((cap, i) => (
              <li key={cap.title} data-reveal="fade" data-delay={String((i % 3) + 1)} className="group relative bg-ivory p-6 transition-colors hover:bg-white">
                {i === 1 && (
                  <div className="pointer-events-auto absolute top-3 right-3 z-10">
                    <LiveOrb variant="black" size={36} />
                  </div>
                )}
                {i === 4 && (
                  <div className="pointer-events-auto absolute top-3 right-3 z-10">
                    <LiveOrb variant="custom" color="#245bff" eyeColor="#FAFAFA" size={36} />
                  </div>
                )}
                {i === 8 && (
                  <div className="pointer-events-auto absolute top-3 right-3 z-10">
                    <LiveOrb variant="custom" color="#ffd000" eyeColor="#171717" size={36} />
                  </div>
                )}
                <span className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <h4 className="mt-5 text-[17px] font-semibold tracking-[-0.025em]">{cap.title}</h4>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{cap.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
