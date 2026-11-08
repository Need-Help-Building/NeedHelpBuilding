import Image from "next/image";
import ButtonLink, { ArrowLink } from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { BrowserFrame, Container } from "@/components/ui/primitives";
import { spotlight } from "@/content/spotlight";
import { getProject } from "@/content/work";
import { mailto } from "@/content/site";

export default function Spotlight() {
  const caller = getProject(spotlight.projectSlug)!;
  return (
    <section id="spotlight" aria-labelledby="spotlight-title" className="relative overflow-hidden bg-ink py-24 text-ivory lg:py-36">
      <div aria-hidden className="grid-paper-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" />
      <Container className="relative">
        <SectionHeading
          index="05"
          label="Product spotlight · Caller OS"
          title="Engineering systems that *think, connect & execute.*"
          titleId="spotlight-title"
          tone="dark"
          lede={spotlight.lede}
          aside={
            <ButtonLink href={caller.liveUrl!} variant="sun">
              See Caller OS live
            </ButtonLink>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <figure data-reveal className="lg:col-span-7">
            <BrowserFrame url="caller.work — live session, detail" tone="dark">
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    transform: `scale(${spotlight.detailZoom.scale})`,
                    transformOrigin: `${spotlight.detailZoom.originX}% ${spotlight.detailZoom.originY}%`,
                  }}
                >
                  <Image
                    src={caller.image!.src}
                    alt={caller.image!.alt}
                    fill
                    sizes="(min-width: 1024px) 90vw, 160vw"
                    className="object-cover object-top"
                  />
                </div>
                {spotlight.annotations.map((a) => (
                  <span
                    key={a.n}
                    aria-hidden
                    className="absolute grid size-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sun font-mono text-[11px] font-semibold text-ink ring-4 ring-sun/25"
                    style={{ left: `${a.x}%`, top: `${a.y}%` }}
                  >
                    {a.n}
                  </span>
                ))}
              </div>
            </BrowserFrame>
            <figcaption className="mt-6 grid gap-4 sm:grid-cols-3">
              {spotlight.annotations.map((a) => (
                <div key={a.n} className="flex gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border border-sun font-mono text-[10.5px] text-sun">
                    {a.n}
                  </span>
                  <p className="text-[13.5px] leading-snug">
                    <span className="block font-medium text-ivory">{a.label}</span>
                    <span className="text-ivory/60">{a.detail}</span>
                  </p>
                </div>
              ))}
            </figcaption>
          </figure>

          <div data-reveal data-delay="1" className="lg:col-span-5">
            <div className="rounded-2xl border border-ivory/12 bg-ink-2/80 p-6 sm:p-8">
              <p className="t-eyebrow text-ivory/50">fig. 05 — voice pipeline, one call</p>
              <ol className="mt-6">
                {spotlight.pipeline.map((step, i) => (
                  <li key={step.stage} className="relative grid grid-cols-[28px_1fr_auto] items-start gap-4 pb-5 last:pb-0">
                    {i < spotlight.pipeline.length - 1 && (
                      <span aria-hidden className="absolute top-7 bottom-0 left-[13.5px] w-px bg-[repeating-linear-gradient(to_bottom,rgb(251_218_3/0.7)_0_3px,transparent_3px_7px)]" />
                    )}
                    <span
                      className={
                        i === 3
                          ? "grid size-7 place-items-center rounded-md bg-sun font-mono text-[10px] text-ink"
                          : "grid size-7 place-items-center rounded-md border border-ivory/25 font-mono text-[10px] text-ivory/70"
                      }
                    >
                      0{i + 1}
                    </span>
                    <span>
                      <span className="block text-[15px] font-medium tracking-[-0.015em]">{step.stage}</span>
                      <span className="block text-[13px] text-ivory/55">{step.detail}</span>
                    </span>
                    <span className="mt-0.5 rounded-full border border-ivory/15 px-2 py-0.5 text-right font-mono text-[10.5px] text-ivory/70">
                      {step.tech}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-ivory/12 pt-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div data-reveal className="lg:col-span-5">
            <p className="t-eyebrow text-sun">Key capabilities</p>
            <ul className="mt-5 space-y-3">
              {spotlight.capabilities.map((c) => (
                <li key={c} className="flex gap-3 text-[15px] leading-snug text-ivory/85">
                  <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-sun" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal data-delay="1" className="lg:col-span-4">
            <p className="t-eyebrow text-sun">Real-world application</p>
            <p className="mt-5 text-[15px] leading-relaxed text-ivory/75">{spotlight.application}</p>
          </div>
          <div data-reveal data-delay="2" className="lg:col-span-3">
            <p className="t-eyebrow text-sun">Technology</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {caller.stack!.map((s) => (
                <li key={s} className="rounded-full border border-ivory/20 px-2.5 py-1 font-mono text-[11px] text-ivory/80">
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <ArrowLink href={`/work/${caller.slug}`} tone="light">
                Read the Caller OS case study
              </ArrowLink>
              <ArrowLink href={mailto("Voice agent project")} tone="light">
                Build a voice agent with us
              </ArrowLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
