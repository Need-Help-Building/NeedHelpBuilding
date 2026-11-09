import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import { coFounderProgramme } from "@/content/consulting";
import ConsultingPanel from "./ConsultingPanel";

export default function Consulting() {
  return (
    <section id="consulting" aria-labelledby="consulting-title" className="relative overflow-hidden bg-ink py-24 text-ivory lg:py-36">
      <div aria-hidden className="grid-paper-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_60%)]" />
      <Container className="relative">
        <SectionHeading
          index="09"
          label="Technology consulting"
          title="Sometimes the most important thing we build is *the right plan.*"
          titleId="consulting-title"
          tone="dark"
          lede="You don't need to know what technology you need before talking to us. Bring the goal, the bottleneck or the system that's struggling — we'll help you decide what to do about it, whether or not we end up building it."
        />

        <div data-reveal className="mt-14 lg:mt-20">
          <ConsultingPanel />
        </div>

        <div
          data-reveal
          className="mt-16 grid gap-8 rounded-3xl border border-sun/40 p-6 sm:p-10 lg:mt-20 lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-7">
            <p className="t-eyebrow text-sun">For early-stage founders</p>
            <h3 className="t-h3 mt-3 text-ivory">{coFounderProgramme.title}</h3>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ivory/70">{coFounderProgramme.summary}</p>
          </div>
          <div className="lg:col-span-5">
            <ul className="space-y-3">
              {coFounderProgramme.points.map((p) => (
                <li key={p} className="flex gap-3 border-b border-ivory/10 pb-3 text-[15px] text-ivory/85">
                  <span aria-hidden className="text-ivory/40 select-none">›</span>
                  {p}
                </li>
              ))}
            </ul>
            <ButtonLink href={coFounderProgramme.cta.href} variant="sun" className="mt-6">
              {coFounderProgramme.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
