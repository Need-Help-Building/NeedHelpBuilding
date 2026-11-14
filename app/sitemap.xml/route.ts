import { indexXml, sitemapSections, xmlHeaders } from "@/lib/sitemaps";

export const dynamic = "force-static";

/** /sitemap.xml: a sitemap index pointing to one sitemap per section (pages, services, work, blog, careers). */
export function GET() {
  return new Response(indexXml(sitemapSections()), { headers: xmlHeaders });
}
