import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartLink from "@/components/ui/SmartLink";
import { Container } from "@/components/ui/primitives";
import { proofLedger } from "@/content/company";

const steps = [
  {
    index: "01",
    title: "Understand",
    body: "How your business actually works: the goal, the constraints, the people involved and the systems already in place.",
  },
  {
    index: "02",
    title: "Recommend",
    body: "What to build, buy or integrate — with the trade-offs written down and the costs made explicit.",
  },
  {
    index: "03",
    title: "Engineer & stay",
    body: "Design, build, test and deploy it. Then keep it running, measured and improving.",
  },
];

export default function Positioning() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 lg:py-36">
      <Container>
        <SectionHeading index="01" label="About NHB" title="Not just another *technology partner.*" titleId="about-title" />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <p
            data-reveal
            className="text-[clamp(1.5rem,1.05rem+1.6vw,2.6rem)] leading-[1.18] font-medium tracking-[-0.035em] lg:col-span-10 lg:col-start-3"
          >
            Most businesses don&apos;t need more developers. They need someone who understands the problem, recommends an
            architecture that fits it, and then builds it properly.{" "}
            <span className="text-ink/45">
              That is the responsibility we take on — from the first conversation to the system running in production.
            </span>
          </p>
        </div>

        <ol className="mt-16 grid border-y border-ink/12 md:grid-cols-3 lg:mt-24">
          {steps.map((step, i) => (
            <li
              key={step.index}
              data-reveal
              data-delay={String(i + 1)}
              className="relative border-ink/12 py-8 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 [&:not(:first-child)]:border-t md:[&:not(:first-child)]:border-t-0"
            >
              <div className="flex h-4 items-center gap-3">
                <span className="t-eyebrow text-muted">{step.index}</span>
                <span aria-hidden className="h-px flex-1 bg-ink/12" />
                <span aria-hidden className="hidden w-3 font-mono text-xs leading-none text-ink/40 md:inline">
                  {i < steps.length - 1 ? "→" : ""}
                </span>
              </div>
              <h3 className="t-h3 mt-6">{step.title}</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="lg:col-span-4">
            <p className="t-eyebrow text-muted">Proof, not vanity numbers</p>
            <h3 className="t-h3 mt-4 max-w-sm">What we can show you</h3>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
              We don&apos;t publish inflated counts. These are things you can open, use or ask about directly.
            </p>
          </div>
          <ul className="lg:col-span-8">
            {proofLedger.map((row, i) => {
              const inner = (
                <>
                  <span className="t-eyebrow pt-1.5 text-muted md:col-span-3">{row.label}</span>
                  <span className="block md:col-span-9">
                    <span className="flex items-start justify-between gap-6">
                      <span className="text-[clamp(1.375rem,1.1rem+1vw,2rem)] leading-tight font-semibold tracking-[-0.035em]">
                        {row.value}
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        className="mt-1 size-5 shrink-0 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      />
                    </span>
                    <span className="mt-2 block text-[15px] text-muted">{row.detail}</span>
                  </span>
                </>
              );
              return (
                <li key={row.label} data-reveal data-delay={String(i + 1)} className="border-t border-ink/12 last:border-b">
                  {row.href ? (
                    <SmartLink
                      href={row.href}
                      className="group grid gap-2 py-6 transition-colors hover:bg-ink/[0.025] md:grid-cols-12 md:gap-6 md:px-3"
                    >
                      {inner}
                    </SmartLink>
                  ) : (
                    <div className="grid gap-2 py-6 md:grid-cols-12 md:gap-6 md:px-3">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
