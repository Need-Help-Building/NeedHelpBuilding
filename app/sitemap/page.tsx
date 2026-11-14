import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { sitemapSections } from "@/lib/sitemaps";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sitemap",
  description: "Every page on NeedHelpBuilding in one place: services, case studies, programs, careers, industries and the engineering blog.",
  path: "/sitemap",
});

/** Human-readable sitemap. The machine-readable index lives at /sitemap.xml. */
export default function SitemapPage() {
  const sections = sitemapSections();
  return (
    <main id="main" className="py-16 lg:py-24">
      <JsonLd data={breadcrumbJsonLd([["Home", "/"], ["Sitemap", "/sitemap"]])} />
      <Container>
        <p className="t-arcade text-[12px] text-muted">Sitemap</p>
        <h1 className="t-pixel mt-4 text-[clamp(2.25rem,1.2rem+3.4vw,4rem)] leading-[1.08] font-semibold">Every page on the site.</h1>
        <p className="t-lede mt-6 max-w-2xl text-muted">
          A plain list of everything on NeedHelpBuilding. Search engines can use the{" "}
          <a href="/sitemap.xml" className="font-medium text-ink underline decoration-sun decoration-2 underline-offset-4">
            XML sitemap index
          </a>
          .
        </p>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <section key={s.id} aria-labelledby={`sm-${s.id}`}>
              <h2 id={`sm-${s.id}`} className="t-arcade border-b-2 border-ink pb-3 text-[12px]">
                {s.title}
              </h2>
              <ul className="mt-3">
                {s.entries.map((e) => (
                  <li key={e.path} className="border-b border-ink/8">
                    <Link href={e.path} className="block py-2.5 text-[15px] hover:underline">
                      {e.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
