import { ArrowLink } from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartLink from "@/components/ui/SmartLink";
import { Container } from "@/components/ui/primitives";
import { insights, insightsNotify, type Insight } from "@/content/insights";
import { cn } from "@/lib/cn";
import InsightArtwork from "./visuals/InsightArt";

const covers: Record<Insight["art"], string> = {
  agents: "bg-lilac-soft",
  decision: "bg-sun",
  retrieval: "bg-mist-soft",
  workflow: "bg-ink",
};

function Meta({ item }: { item: Insight }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-muted">
      <span className="text-ink">{item.category}</span>
      <span aria-hidden>·</span>
      <span>{item.readingTime}</span>
      <span aria-hidden>·</span>
      <time dateTime={item.date || "2026-03-01"}>
        {new Date(item.date || "2026-03-01").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
      </time>
    </p>
  );
}

function Title({ item, className }: { item: Insight; className?: string }) {
  return (
    <SmartLink href={item.href} className={cn("hover:underline", className)}>
      {item.title}
    </SmartLink>
  );
}

export default function Insights() {
  const [lead, ...rest] = insights;
  return (
    <section id="insights" aria-labelledby="insights-title" className="bg-ivory-2 py-24 lg:py-36">
      <Container>
        <SectionHeading
          index="11"
          label="Engineering insights"
          title="Ideas from the *engineering frontline.*"
          titleId="insights-title"
          lede="Notes on architecture, AI systems and technical decisions, written by the people doing the work. Our first pieces are in progress — here's what's coming."
          aside={<ArrowLink href={insightsNotify}>Tell me when they&apos;re published</ArrowLink>}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-12">
          <article data-reveal className="flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white lg:col-span-6">
            <div className={cn("aspect-[16/10]", covers[lead.art])}>
              <InsightArtwork art={lead.art} />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <Meta item={lead} />
              <h3 className="mt-4 text-[clamp(1.5rem,1.2rem+1vw,2.25rem)] leading-[1.08] font-semibold tracking-[-0.04em]">
                <Title item={lead} />
              </h3>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted">{lead.dek}</p>
            </div>
          </article>

          <div className="grid gap-5 lg:col-span-6">
            {rest.map((item, i) => (
              <article
                key={item.title}
                data-reveal
                data-delay={String(i + 1)}
                className="grid overflow-hidden rounded-3xl border border-ink/10 bg-white sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
              >
                <div className={cn("aspect-[16/10] sm:aspect-auto sm:min-h-full", covers[item.art])}>
                  <InsightArtwork art={item.art} />
                </div>
                <div className="flex flex-col p-6">
                  <Meta item={item} />
                  <h3 className="mt-3 text-[19px] leading-snug font-semibold tracking-[-0.025em]">
                    <Title item={item} />
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.dek}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
