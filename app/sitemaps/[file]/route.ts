import { sectionXml, sitemapSections, xmlHeaders } from "@/lib/sitemaps";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return sitemapSections().map((s) => ({ file: `${s.id}.xml` }));
}

/** /sitemaps/<section>.xml: the URLs for one section of the site. */
export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const section = sitemapSections().find((s) => `${s.id}.xml` === file);
  if (!section) return new Response("Not found", { status: 404 });
  return new Response(sectionXml(section), { headers: xmlHeaders });
}
