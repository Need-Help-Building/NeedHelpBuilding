import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import ButtonLink from "@/components/ui/ButtonLink";
import { insights, type Insight } from "@/content/insights";
import { articles, wordCount, type ArticleBlock } from "@/content/articles";
import { ctas, site } from "@/content/site";
import InsightArtwork from "@/components/home/visuals/InsightArt";
import { cn } from "@/lib/cn";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, clip, pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((i) => i.slug === slug);
  const article = articles[slug];
  if (!post || !article) return { title: "Post not found" };

  return pageMetadata({
    title: post.metaTitle ?? post.title,
    description: clip(post.dek),
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date ?? undefined,
    modifiedTime: article.updated,
    section: post.category,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/** Renders one article block as semantic HTML (h2/h3, lists, tables) so structure is visible to crawlers. */
function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-ink">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-ink">{block.text}</h3>;
    case "p":
      return <p className="mt-5">{block.text}</p>;
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List className={cn("my-6 space-y-2.5 pl-6 text-ink/80", block.type === "ul" ? "list-disc" : "list-decimal")}>
          {block.items.map((item) => (
            <li key={item.text}>
              {item.lead && <strong className="text-ink">{item.lead} </strong>}
              {item.text}
            </li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <aside className="my-8 rounded-2xl border border-line bg-ivory-2 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">{block.label}</p>
          <p className="mt-3 text-lg font-medium leading-snug text-ink">{block.text}</p>
        </aside>
      );
    case "table":
      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
            <caption className="border-b border-line px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-muted">
              {block.caption}
            </caption>
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col" className="border-b border-line px-5 py-3 font-semibold text-ink">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")} className="border-b border-line/60 last:border-0">
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row" className="px-5 py-3 align-top font-medium text-ink">
                        {cell}
                      </th>
                    ) : (
                      <td key={i} className="px-5 py-3 align-top text-ink/80">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
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
  const article = articles[slug];

  if (!post || !article) notFound();

  const otherPosts = insights.filter((i) => i.slug !== slug).slice(0, 2);
  const url = `${site.url}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: post.title,
    description: post.dek,
    abstract: article.answer,
    articleSection: post.category,
    wordCount: wordCount(article),
    ...(post.date ? { datePublished: post.date } : {}),
    dateModified: article.updated,
    inLanguage: "en",
    image: `${url}/opengraph-image`,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    isPartOf: { "@id": `${site.url}/blog#blog` },
  };

  return (
    <main id="main" className="bg-ivory py-16 sm:py-24">
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          ["Home", "/"],
          ["Blog", "/blog"],
          [post.title, `/blog/${post.slug}`],
        ])}
      />
      <Container className="max-w-4xl">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          All engineering notes
        </Link>

        {/* Post Header */}
        <header className="mt-8 border-b border-line pb-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
            <span className="rounded-full bg-ink px-3 py-1 text-ivory font-medium">
              {post.category}
            </span>
            {post.date && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
            )}
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
            <span className="font-mono text-[11px] text-muted">
              Updated <time dateTime={article.updated}>{formatDate(article.updated)}</time>
            </span>
          </div>
        </header>

        {/* Hero Visual */}
        <div aria-hidden className={cn("mt-10 overflow-hidden rounded-3xl aspect-[16/9] border border-line", covers[post.art])}>
          <InsightArtwork art={post.art} />
        </div>

        {/* Article Content */}
        <article className="mt-12 text-[16.5px] leading-relaxed text-ink/90 sm:text-[17.5px]">
          <p className="text-xl leading-relaxed font-medium text-ink">{article.answer}</p>
          {article.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        {/* Author / CTA Box */}
        <div className="mt-16 rounded-3xl border border-line bg-ink p-8 text-ivory sm:p-10">
          <p className="t-eyebrow text-sun">Need help with your architecture?</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
            Have an ambitious system to build or scale?
          </h2>
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
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted">More from the engineering lab</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={other.href}
                  className="group rounded-2xl border border-line bg-white p-6 transition-all hover:border-ink/30"
                >
                  <p className="font-mono text-[11px] text-muted">{other.category}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-ink group-hover:underline">
                    {other.title}
                  </h3>
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

