import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ButtonLink, { ArrowLink } from "@/components/ui/ButtonLink";
import { BrowserFrame, Container, Placeholder, StatusDot } from "@/components/ui/primitives";
import SousChefMockup from "@/components/home/SousChefMockup";
import FinalCta from "@/components/home/FinalCta";
import { getProject, projects, statusLabel, testimonials } from "@/content/work";
import { mailto } from "@/content/site";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, clip, pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Case study not found" };
  return pageMetadata({
    title: `${project.name} Case Study | ${project.category}`,
    description: clip(project.summary),
    path: `/work/${project.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const quote = testimonials.find((t) => t.projectSlug === project.slug);
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const verifiedMetrics = project.metrics.filter((m) => m.verified);

  // No "Work" crumb: /#work is a fragment, not an indexable URL, so Google would reject it as a breadcrumb item.
  const breadcrumb = breadcrumbJsonLd([
    ["Home", "/"],
    [project.name, `/work/${project.slug}`],
  ]);

  return (
    <main id="main">
      <JsonLd data={breadcrumb} />
      <section aria-labelledby="case-title" className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_85%)]" />
        <Container className="relative pt-10 pb-16 lg:pt-14 lg:pb-24">
          <nav aria-label="Breadcrumb" className="t-eyebrow flex items-center gap-2 text-muted">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/#work" className="hover:text-ink">
              Work
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink">{project.name}</span>
          </nav>

          <div className="mt-10">
            <StatusDot status={project.status} />
          </div>
          <h1 id="case-title" className="t-pixel mt-5 text-[clamp(2.75rem,1.2rem+5vw,5.75rem)] leading-[1.02] font-semibold">
            {project.name}
          </h1>
          <p className="t-lede mt-6 max-w-3xl text-muted">{project.summary}</p>

          <dl className="mt-10 grid gap-6 border-t border-ink/12 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="t-eyebrow text-muted">Category</dt>
              <dd className="mt-2 text-[15px]">{project.category}</dd>
            </div>
            <div>
              <dt className="t-eyebrow text-muted">Industry</dt>
              <dd className="mt-2 text-[15px]">{project.industry ?? <Placeholder label="Industry: to confirm" />}</dd>
            </div>
            <div>
              <dt className="t-eyebrow text-muted">Status</dt>
              <dd className="mt-2 text-[15px]">{statusLabel[project.status]}</dd>
            </div>
            <div>
              <dt className="t-eyebrow text-muted">Live product</dt>
              <dd className="mt-2 text-[15px]">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[13px] underline decoration-sun decoration-2 underline-offset-4"
                  >
                    {project.liveLabel}
                    <ArrowUpRight aria-hidden className="size-3.5" />
                  </a>
                ) : (
                  <span className="text-muted">Not public yet</span>
                )}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Media */}
      <section aria-label={`${project.name} visual`} className="py-14 lg:py-20">
        <Container>
          {project.image ? (
            <div className="rounded-3xl bg-ink p-4 sm:p-8">
              <BrowserFrame url={project.liveLabel ?? project.slug} tone="dark">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    priority
                    sizes="(min-width: 1320px) 1240px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </BrowserFrame>
            </div>
          ) : project.illustrative ? (
            <div className="relative rounded-3xl bg-lilac-soft px-6 py-16 sm:py-20">
              <span className="absolute top-5 left-5 rounded-full border border-ink/20 bg-ivory/80 px-3 py-1 font-mono text-[11px] text-ink/75">
                Illustrative interface · product in development
              </span>
              <SousChefMockup />
            </div>
          ) : quote ? (
            <figure className="rounded-3xl bg-ink p-8 text-ivory sm:p-14">
              <blockquote className="max-w-4xl text-[clamp(1.5rem,1.1rem+1.4vw,2.5rem)] leading-[1.2] font-medium tracking-[-0.03em]">
                “{quote.quote}”
              </blockquote>
              <figcaption className="mt-8 font-mono text-[13px] text-ivory/60">
                {quote.name}, {quote.role}, {quote.organization}
              </figcaption>
            </figure>
          ) : null}
        </Container>
      </section>

      {/* Story */}
      <section aria-label="Problem and approach" className="pb-20 lg:pb-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="t-eyebrow text-muted">01 · The problem</p>
            <p className="mt-4 text-[clamp(1.25rem,1.05rem+0.7vw,1.75rem)] leading-snug font-medium tracking-[-0.025em]">
              {project.problem}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="t-eyebrow text-muted">02 · What we did</p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink/85">{project.solution}</p>

            <p className="t-eyebrow mt-12 text-muted">03 · What we built</p>
            <ul className="mt-4 border-t border-ink/12">
              {project.built.map((b) => (
                <li key={b} className="flex gap-3 border-b border-ink/12 py-3.5 text-[15.5px]">
                  <span aria-hidden className="text-ink/50 select-none">›</span>
                  {b}
                </li>
              ))}
            </ul>

            <p className="t-eyebrow mt-12 text-muted">04 · Technology</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack ? (
                project.stack.map((s) => (
                  <span key={s} className="rounded-full border border-ink/15 bg-white px-3 py-1.5 font-mono text-[12px]">
                    {s}
                  </span>
                ))
              ) : (
                <Placeholder label="Technology stack: to confirm" />
              )}
            </div>

            {verifiedMetrics.length > 0 && (
              <>
                <p className="t-eyebrow mt-12 text-muted">05 · Outcomes</p>
                <dl className="mt-4 grid gap-6 sm:grid-cols-3">
                  {verifiedMetrics.map((m) => (
                    <div key={m.label} className="border-t border-ink pt-3">
                      <dd className="text-3xl font-semibold tracking-[-0.04em]">{m.value}</dd>
                      <dt className="mt-1 text-[13px] text-muted">{m.label}</dt>
                    </div>
                  ))}
                </dl>
              </>
            )}

            {quote && project.image && (
              <figure className="mt-12 border-l-2 border-sun pl-6">
                <blockquote className="text-[18px] leading-relaxed">“{quote.quote}”</blockquote>
                <figcaption className="mt-3 font-mono text-[12px] text-muted">
                  {quote.name}, {quote.role}, {quote.organization}
                </figcaption>
              </figure>
            )}

            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink href={mailto(`Project like ${project.name}`)} variant="ink">
                Discuss a similar project
              </ButtonLink>
              {project.liveUrl && (
                <ButtonLink href={project.liveUrl} variant="outline">
                  Open {project.name}
                </ButtonLink>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Next / back */}
      <section aria-label="More work" className="border-t border-line py-12">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
            <ArrowLeft aria-hidden className="size-4" /> All work
          </Link>
          <ArrowLink href={`/work/${next.slug}`}>Next: {next.name}</ArrowLink>
        </Container>
      </section>

      <FinalCta />
    </main>
  );
}
