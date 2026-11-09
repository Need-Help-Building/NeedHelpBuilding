import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import SectionHeading from "@/components/ui/SectionHeading";
import { insights } from "@/content/insights";
import InsightArtwork from "@/components/home/visuals/InsightArt";
import { cn } from "@/lib/cn";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

const description =
  "Engineering notes on production AI agents, RAG systems, business automation and build-vs-buy decisions, from the team that designs and runs them.";

export const metadata: Metadata = pageMetadata({
  title: "Engineering Blog: AI & Automation",
  description,
  path: "/blog",
});

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${site.url}/blog#blog`,
  url: `${site.url}/blog`,
  name: "NHB Engineering Notes",
  description,
  inLanguage: "en",
  publisher: { "@id": `${site.url}/#organization` },
  blogPost: insights.map((post) => ({
    "@type": "BlogPosting",
    "@id": `${site.url}${post.href}#article`,
    headline: post.title,
    url: `${site.url}${post.href}`,
    ...(post.date ? { datePublished: post.date } : {}),
  })),
};

const covers = {
  agents: "bg-lilac-soft",
  decision: "bg-sun",
  retrieval: "bg-mist-soft",
  workflow: "bg-ink",
};

export default function BlogIndexPage() {
  return (
    <main id="main" className="bg-ivory py-16 sm:py-24">
      <JsonLd data={blogJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          ["Home", "/"],
          ["Blog", "/blog"],
        ])}
      />
      <Container>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          Back to Home
        </Link>

        <div className="mt-8">
          <SectionHeading
            index="BLOG"
            label="Engineering notes"
            title="Field notes & architecture blueprints."
            titleId="blog-index-title"
            as="h1"
            lede="Essays on AI systems, scalable infrastructure, and technical decision making from the NHB engineering lab."
          />
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {insights.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all hover:border-ink/30"
            >
              <div className={cn("aspect-[16/9] overflow-hidden", covers[post.art])}>
                <InsightArtwork art={post.art} />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-center gap-3 font-mono text-xs text-muted">
                  <span className="text-ink font-semibold">{post.category}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink hover:underline">
                  <Link href={post.href}>{post.title}</Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.dek}</p>
                <div className="mt-auto pt-6">
                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-ink hover:underline"
                  >
                    Read article <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}

