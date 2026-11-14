import { CactusPatch } from "@/components/pixel/Decor";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartLink from "@/components/ui/SmartLink";
import { Container, Placeholder } from "@/components/ui/primitives";
import { evidence, recognitions, team } from "@/content/company";

export default function Credibility() {
  return (
    <section id="team" aria-labelledby="team-title" className="relative overflow-hidden py-24 lg:py-36">
      <CactusPatch variant={0} className="right-[8%] bottom-0 hidden md:flex" />
      <Container>
        <SectionHeading
          index="12"
          label="Team & credibility"
          title="Evidence over *adjectives.*"
          titleId="team-title"
          lede="We're a focused team, not a five-hundred-person agency. So rather than badges and big numbers, here's what you can verify for yourself."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <figure data-reveal className="lg:col-span-6">
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-ink">
              <Image
                src={team.photo.src}
                alt={team.photo.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Names sit under each founder: left-aligned under the left, right-aligned under the right. */}
            <figcaption className="mt-5 grid grid-cols-2 gap-4 border-t-2 border-ink pt-4">
              {team.founders.map((f, i) => (
                <div key={i} className={i === 1 ? "text-right" : undefined}>
                  <p className="t-pixel text-[clamp(1.35rem,1.05rem+1.1vw,1.9rem)] leading-tight font-bold">
                    {f.name ?? <Placeholder label="Founder name" />}
                  </p>
                  <p className="t-arcade mt-2 text-[11px] text-muted">{f.role ?? <Placeholder label="Role" />}</p>
                </div>
              ))}
            </figcaption>
          </figure>

          <div className="lg:col-span-6 lg:pl-8">
            <p data-reveal className="text-[clamp(1.25rem,1.05rem+0.7vw,1.75rem)] leading-snug font-medium tracking-[-0.025em]">
              {team.statement}
            </p>

            <ul className="mt-10">
              {evidence.map((e, i) => (
                <li key={e.title} data-reveal data-delay={String(i + 1)} className="border-t border-ink/12 last:border-b">
                  <SmartLink href={e.href} className="group grid grid-cols-[36px_1fr_auto] items-start gap-4 py-6">
                    <span className="font-mono text-[12px] text-muted">0{i + 1}</span>
                    <span>
                      <span className="block text-[18px] font-semibold tracking-[-0.025em]">{e.title}</span>
                      <span className="mt-1.5 block text-[14.5px] leading-relaxed text-muted">{e.detail}</span>
                      <span className="mt-3 inline-block font-mono text-[12px] text-ink underline decoration-sun decoration-2 underline-offset-4">
                        {e.linkLabel}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="mt-1 size-5 text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </SmartLink>
                </li>
              ))}
            </ul>

            {recognitions.length > 0 && (
              <div className="mt-10">
                <p className="t-eyebrow text-muted">Recognition</p>
                <ul className="mt-4 space-y-3">
                  {recognitions.map((r) => (
                    <li key={r.title} className="flex justify-between gap-4 border-b border-ink/12 pb-3 text-[15px]">
                      <span>
                        {r.title} <span className="text-muted">· {r.issuer}</span>
                      </span>
                      <span className="font-mono text-[12px] text-muted">{r.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
