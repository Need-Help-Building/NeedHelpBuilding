import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink } from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartLink from "@/components/ui/SmartLink";
import { BrowserFrame, Container, Placeholder, StatusDot } from "@/components/ui/primitives";
import { getProject, testimonials, type Project } from "@/content/work";
import { mailto } from "@/content/site";
import { cn } from "@/lib/cn";
import SousChefMockup from "./SousChefMockup";

function Facts({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <dl className={cn("grid gap-x-6 gap-y-4 text-[13.5px]", compact ? "grid-cols-1" : "sm:grid-cols-2")}>
      <div>
        <dt className="t-eyebrow text-muted">Industry</dt>
        <dd className="mt-1.5">{project.industry ?? <Placeholder label="Industry — to confirm" />}</dd>
      </div>
      <div>
        <dt className="t-eyebrow text-muted">Category</dt>
        <dd className="mt-1.5">{project.category}</dd>
      </div>
      <div className={cn(!compact && "sm:col-span-2")}>
        <dt className="t-eyebrow text-muted">Technologies</dt>
        <dd className="mt-2 flex flex-wrap gap-1.5">
          {project.stack ? (
            project.stack.map((s) => (
              <span key={s} className="rounded-full border border-ink/12 px-2.5 py-1 font-mono text-[10.5px] text-ink/80">
                {s}
              </span>
            ))
          ) : (
            <Placeholder label="Stack — to confirm" />
          )}
        </dd>
      </div>
    </dl>
  );
}

function Built({ items, limit }: { items: string[]; limit?: number }) {
  return (
    <div>
      <p className="t-eyebrow text-muted">What we built</p>
      <ul className="mt-3 space-y-2">
        {items.slice(0, limit).map((b) => (
          <li key={b} className="flex gap-2.5 text-[14px] leading-snug">
            <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-sun ring-1 ring-ink/30" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <ArrowLink href={`/work/${project.slug}`}>Read the case study</ArrowLink>
      {project.liveUrl && (
        <SmartLink
          href={project.liveUrl}
          className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted hover:text-ink"
        >
          {project.liveLabel}
          <ArrowUpRight aria-hidden className="size-3.5" />
          <span className="sr-only">(opens the live product in a new tab)</span>
        </SmartLink>
      )}
    </div>
  );
}

function CardHeader({ project, index }: { project: Project; index: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <StatusDot status={project.status} />
      <span className="font-mono text-[11px] text-muted">{index}</span>
    </div>
  );
}

export default function FeaturedWork() {
  const caller = getProject("caller-os")!;
  const store = getProject("yourstorehere")!;
  const sous = getProject("sous-chef")!;
  const partners = [getProject("ganges")!, getProject("earnbuddy")!];

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 lg:py-36">
      <Container>
        <SectionHeading
          index="04"
          label="Selected work"
          title="We turn complex problems into *working systems.*"
          titleId="work-title"
          lede="A deliberately small body of work: products we've shipped, one we're building now, and startups we helped found. Everything here is something you can open, use or ask about."
          aside={<ArrowLink href={mailto("Project discussion")}>Talk about your project</ArrowLink>}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-12">
          {/* Caller OS — featured */}
          <article
            data-reveal
            aria-labelledby="work-caller"
            className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition-colors hover:border-ink/30 lg:col-span-8"
          >
            <div className="relative bg-ink p-4 sm:p-6">
              <div aria-hidden className="grid-paper-dark absolute inset-0" />
              <BrowserFrame url="caller.work" tone="dark" className="relative">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={caller.image!.src}
                    alt={caller.image!.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                </div>
              </BrowserFrame>
            </div>
            <div className="flex flex-1 flex-col gap-8 p-6 sm:p-8">
              <CardHeader project={caller} index="01 / 05" />
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 id="work-caller" className="text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] leading-none font-semibold tracking-[-0.045em]">
                    {caller.name}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{caller.summary}</p>
                  <div className="mt-6">
                    <Facts project={caller} compact />
                  </div>
                </div>
                <Built items={caller.built} limit={5} />
              </div>
              <div className="mt-auto border-t border-ink/10 pt-5">
                <Links project={caller} />
              </div>
            </div>
          </article>

          {/* YourStoreHere — tall */}
          <article
            data-reveal
            data-delay="1"
            aria-labelledby="work-store"
            className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition-colors hover:border-ink/30 lg:col-span-4"
          >
            <div className="bg-mist-soft p-4 sm:p-5">
              <BrowserFrame url="yourstorehere.vercel.app">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={store.image!.src}
                    alt={store.image!.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </BrowserFrame>
            </div>
            <div className="flex flex-1 flex-col gap-6 p-6 sm:p-7">
              <CardHeader project={store} index="02 / 05" />
              <div>
                <h3 id="work-store" className="text-[clamp(1.5rem,1.3rem+0.8vw,2rem)] leading-none font-semibold tracking-[-0.04em]">
                  {store.name}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{store.summary}</p>
              </div>
              <Built items={store.built} limit={5} />
              <Facts project={store} compact />
              <div className="mt-auto border-t border-ink/10 pt-5">
                <Links project={store} />
              </div>
            </div>
          </article>

          {/* Sous Chef — illustrative, wide horizontal card */}
          <article
            data-reveal
            aria-labelledby="work-sous"
            className="group grid overflow-hidden rounded-3xl border border-ink/10 bg-white transition-colors hover:border-ink/30 md:grid-cols-2 lg:col-span-7"
          >
            <div className="relative flex items-center bg-lilac-soft px-6 pt-14 pb-8 sm:px-8">
              <span className="absolute top-4 left-4 rounded-full border border-ink/20 bg-ivory/80 px-2.5 py-1 font-mono text-[10px] tracking-wide text-ink/75">
                Illustrative interface · in development
              </span>
              <div className="w-full transition-transform duration-700 group-hover:-translate-y-1">
                <SousChefMockup />
              </div>
            </div>
            <div className="flex flex-col gap-6 p-6 sm:p-7">
              <CardHeader project={sous} index="03 / 05" />
              <div>
                <h3 id="work-sous" className="text-[clamp(1.5rem,1.3rem+0.8vw,2rem)] leading-none font-semibold tracking-[-0.04em]">
                  {sous.name}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{sous.summary}</p>
              </div>
              <Built items={sous.built} limit={3} />
              <Facts project={sous} compact />
              <div className="mt-auto border-t border-ink/10 pt-5">
                <Links project={sous} />
              </div>
            </div>
          </article>

          {/* Startup partnerships — stacked compact cards */}
          <div data-reveal data-delay="1" className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {partners.map((p, i) => {
              const quote = testimonials.find((t) => t.projectSlug === p.slug);
              return (
                <article
                  key={p.slug}
                  aria-labelledby={`work-${p.slug}`}
                  className={cn(
                    "flex flex-col gap-5 rounded-3xl border p-6 transition-colors sm:p-7",
                    i === 0 ? "border-ink bg-ink text-ivory" : "border-ink/10 bg-white hover:border-ink/30",
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <StatusDot status={p.status} tone={i === 0 ? "dark" : "light"} />
                    <span className={cn("font-mono text-[11px]", i === 0 ? "text-ivory/50" : "text-muted")}>
                      0{4 + i} / 05
                    </span>
                  </div>
                  <div>
                    <h3 id={`work-${p.slug}`} className="text-[clamp(1.75rem,1.4rem+1.1vw,2.5rem)] leading-none font-semibold tracking-[-0.045em]">
                      {p.name}
                    </h3>
                    <p className={cn("t-eyebrow mt-3", i === 0 ? "text-sun" : "text-muted")}>{p.category}</p>
                    <p className={cn("mt-4 text-[14.5px] leading-relaxed", i === 0 ? "text-ivory/70" : "text-muted")}>
                      {p.summary}
                    </p>
                  </div>
                  <dl className="grid gap-x-6 gap-y-2 text-[13px] sm:grid-cols-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <dt className={cn("t-eyebrow", i === 0 ? "text-ivory/50" : "text-muted")}>Industry</dt>
                      <dd>{p.industry ?? <Placeholder label="to confirm" tone={i === 0 ? "dark" : "light"} />}</dd>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <dt className={cn("t-eyebrow", i === 0 ? "text-ivory/50" : "text-muted")}>Stack</dt>
                      <dd>{p.stack?.join(" · ") ?? <Placeholder label="to confirm" tone={i === 0 ? "dark" : "light"} />}</dd>
                    </div>
                  </dl>
                  <div
                    className={cn(
                      "mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-5",
                      i === 0 ? "border-ivory/15" : "border-ink/10",
                    )}
                  >
                    <ArrowLink href={`/work/${p.slug}`} tone={i === 0 ? "light" : "dark"}>
                      Read the case study
                    </ArrowLink>
                    {quote && (
                      <SmartLink
                        href="/#testimonials"
                        className={cn("font-mono text-[11px] hover:underline", i === 0 ? "text-ivory/55" : "text-muted")}
                      >
                        Testimonial from {quote.name} ↓
                      </SmartLink>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
