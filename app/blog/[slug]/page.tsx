import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import ButtonLink, { ArrowLink } from "@/components/ui/ButtonLink";
import { insights, type Insight } from "@/content/insights";
import { ctas, site } from "@/content/site";
import InsightArtwork from "@/components/home/visuals/InsightArt";
import { cn } from "@/lib/cn";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((i) => i.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — NHB Engineering Insights`,
    description: post.dek,
  };
}

const covers: Record<Insight["art"], string> = {
  agents: "bg-lilac-soft",
  decision: "bg-sun",
  retrieval: "bg-mist-soft",
  workflow: "bg-ink",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = insights.find((i) => i.slug === slug);

  if (!post) notFound();

  const otherPosts = insights.filter((i) => i.slug !== slug).slice(0, 2);

  return (
    <main className="bg-ivory py-16 sm:py-24">
      <Container className="max-w-4xl">
        {/* Back Link */}
        <Link
          href="/#insights"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          Back to Insights
        </Link>

        {/* Post Header */}
        <header className="mt-8 border-b border-line pb-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
            <span className="rounded-full bg-ink px-3 py-1 text-ivory font-medium">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              {new Date(post.date || "2026-03-01").toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="mt-6 text-[clamp(2rem,1.3rem+2.6vw,3.75rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-ink">
            {post.title}
          </h1>

          <p className="mt-5 text-xl leading-relaxed text-muted">
            {post.dek}
          </p>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-line/60 pt-6 text-xs text-muted">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-full bg-ink font-mono text-xs font-bold text-ivory">
                NHB
              </div>
              <div>
                <p className="font-semibold text-ink">NHB Engineering Lab</p>
                <p className="text-[11px]">Systems, Architecture & Production AI</p>
              </div>
            </div>
            <span className="font-mono text-[11px] text-muted">ESSAY // {post.slug.toUpperCase()}</span>
          </div>
        </header>

        {/* Hero Visual */}
        <div className={cn("mt-10 overflow-hidden rounded-3xl aspect-[16/9] border border-line", covers[post.art])}>
          <InsightArtwork art={post.art} />
        </div>

        {/* Article Content */}
        <article className="prose prose-neutral mt-12 max-w-none text-[16.5px] leading-relaxed text-ink/90 sm:text-[17.5px]">
          <p className="text-xl leading-relaxed font-medium text-ink">
            Every breakthrough in software engineering looks like magic until you have to run it in production.
            When building complex architectures, the difference between a prototype and an operable system is measured
            in constraints, failure recovery, and boundary enforcement.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-ink">
            1. Diagnose before prescribing
          </h2>
          <p>
            When teams rush to adopt the newest patterns or models, they often solve the wrong problems with excessive
            complexity. Before writing code or spinning up infrastructure, we establish tight telemetry and clear
            evaluation metrics. If you cannot measure regression, you cannot safely deploy improvements.
          </p>

          <div className="my-8 rounded-2xl border border-line bg-ivory-2 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Operating Principle</p>
            <p className="mt-3 text-lg font-medium leading-snug text-ink">
              “The most reliable system is the one that minimizes unconstrained surface area. If an agent or service
              doesn&apos;t explicitly need access, revoke it by default.”
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-ink">
            2. The boundary architecture
          </h2>
          <p>
            Systems fail at boundaries: between services, between client and server, and especially between autonomous
            LLM logic and deterministic database state. By placing strict schema contracts and typed validations at
            every boundary, unpredictable errors are caught before they touch user data.
          </p>
          <ul className="my-6 space-y-2 list-disc pl-6 text-muted">
            <li><strong className="text-ink">Explicit tool validation:</strong> Arguments validated via Zod schemas before runtime execution.</li>
            <li><strong className="text-ink">Idempotency guarantees:</strong> All write operations keyed with transaction tokens.</li>
            <li><strong className="text-ink">Observability by default:</strong> OpenTelemetry spans emitted for every model call and tool execution.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-ink">
            3. What happens next
          </h2>
          <p>
            Building enduring digital products requires engineering discipline, shared risk, and relentless focus
            on user outcomes. We continue to publish architecture notes as we ship new platforms for our partners.
          </p>
        </article>

        {/* Author / CTA Box */}
        <div className="mt-16 rounded-3xl border border-line bg-ink p-8 text-ivory sm:p-10">
          <p className="t-eyebrow text-sun">Need help with your architecture?</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
            Have an ambitious system to build or scale?
          </h3>
          <p className="mt-3 text-sm text-ivory/70 leading-relaxed max-w-xl">
            We partner with founders and enterprise teams to engineer reliable digital products, AI systems, and custom software.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <ButtonLink href={ctas.startProject.href} variant="sun">
              {ctas.startProject.label}
            </ButtonLink>
            <ButtonLink href="/#contact" variant="outline" className="border-ivory/20 text-ivory hover:bg-ivory/10">
              Get in touch
            </ButtonLink>
          </div>
        </div>

        {/* Other Insights */}
        {otherPosts.length > 0 && (
          <div className="mt-20 border-t border-line pt-12">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted">More from the engineering lab</h4>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={other.href}
                  className="group rounded-2xl border border-line bg-white p-6 transition-all hover:border-ink/30"
                >
                  <p className="font-mono text-[11px] text-muted">{other.category}</p>
                  <h5 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-ink group-hover:underline">
                    {other.title}
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2">{other.dek}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-medium text-ink">
                    Read note <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}

