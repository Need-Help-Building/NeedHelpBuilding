import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FinalCta from "@/components/home/FinalCta";
import IndustryGlyphArt from "@/components/home/visuals/IndustryGlyphs";
import ProgramHero from "@/components/ecosystem/ProgramHero";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/primitives";
import { industries, type IndustryGlyph } from "@/content/industries";
import { products } from "@/content/products";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Build For",
  description:
    "Software for healthcare, education, retail, hospitality, finance, manufacturing, startups and professional services, designed around how each industry actually works.",
  path: "/industries",
});

const surfaces = ["bg-mist-soft", "bg-lilac-soft", "bg-sun", "bg-ivory-2"];

/** NHB products that are directly relevant to an industry (cross-links to the product cards). */
const relatedProducts: Partial<Record<IndustryGlyph, string[]>> = {
  healthcare: ["hospital", "socialgenie"],
  hospitality: ["table-and-thyme", "socialgenie"],
  retail: ["socialgenie", "productfit"],
  services: ["socialgenie"],
};

export default function IndustriesPage() {
  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([["Home", "/"], ["Industries", "/industries"]])} />

      <ProgramHero
        eyebrow="Industries"
        title="Technology built around *how your industry works.*"
        lede={
          <p>
            Every sector has its own rhythms, regulations and failure points. We start from how the work actually happens
            there, then design systems that fit it rather than forcing it into a template.
          </p>
        }
        primary={{ href: "/book", label: "Discuss your industry" }}
        secondary={{ href: "/#work", label: "See our work" }}
        aside={
          <nav aria-label="Industries on this page" className="rounded-3xl border border-ink/12 bg-white p-6 sm:p-7">
            <p className="t-arcade text-[11px] text-muted">Jump to</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 border-t border-ink/10">
              {industries.map((ind) => (
                <li key={ind.slug} className="border-b border-ink/10">
                  <a href={`#${ind.slug}`} className="group flex items-center justify-between gap-3 py-3 text-[15px] font-medium">
                    {ind.name}
                    <ArrowRight aria-hidden className="size-3.5 text-ink/30 transition-colors group-hover:text-ink" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        }
      />

      {industries.map((ind, i) => {
        const flip = i % 2 === 1;
        const related = (relatedProducts[ind.slug] ?? [])
          .map((id) => products.find((p) => p.id === id))
          .filter(Boolean) as typeof products;
        return (
          <section
            key={ind.slug}
            id={ind.slug}
            aria-labelledby={`${ind.slug}-title`}
            className={cn("border-b border-line py-20 lg:py-28", flip ? "bg-ivory-2/60" : "bg-ivory")}
          >
            <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div data-reveal className={cn("lg:col-span-6", flip && "lg:order-2")}>
                <p className="t-arcade text-[12px] text-muted">{String(i + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}</p>
                <h2 id={`${ind.slug}-title`} className="t-h2-pixel mt-4">
                  {ind.name}
                </h2>
                <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink/80">{ind.summary}</p>

                <p className="t-eyebrow mt-8 text-muted">What we build</p>
                <ul className="mt-3 grid max-w-xl gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {ind.solutions.map((s) => (
                    <li key={s} className="flex gap-2.5 text-[15px] leading-snug">
                      <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-ink" />
                      {s}
                    </li>
                  ))}
                </ul>

                {related.length > 0 && (
                  <div className="mt-8">
                    <p className="t-eyebrow text-muted">Related NHB products</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {related.map((p) => (
                        <li key={p.id}>
                          <Link
                            href={`/earn-with-nhb#product-${p.id}`}
                            className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-3 py-1.5 text-[13.5px] transition-colors hover:border-ink"
                          >
                            {p.name}
                            <span className="text-muted">· {p.category}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
                  <ArrowLink href={ind.cta.href}>{ind.cta.label}</ArrowLink>
                  {ind.evidence && (
                    <ArrowLink href={ind.evidence.href} className="text-muted">
                      {ind.evidence.label}
                    </ArrowLink>
                  )}
                </div>
              </div>

              <div data-reveal data-delay="1" className={cn("lg:col-span-6", flip && "lg:order-1")}>
                <div className={cn("pixel-corners relative aspect-[16/10] overflow-hidden rounded-3xl p-6", surfaces[i % surfaces.length])}>
                  <IndustryGlyphArt glyph={ind.slug} label={`Illustration of a ${ind.name.toLowerCase()} system`} />
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <FinalCta />
    </main>
  );
}
