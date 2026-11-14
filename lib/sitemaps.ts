import { SERVICES_DATA } from "@/app/services/services-data";
import { toTitle } from "@/app/services/title";
import { articles } from "@/content/articles";
import { roles } from "@/content/careers";
import { programs } from "@/content/ecosystem";
import { insights } from "@/content/insights";
import { site } from "@/content/site";
import { projects } from "@/content/work";

/**
 * One source for every indexable URL, grouped into sections. Feeds the XML sitemap index (/sitemap.xml),
 * the per-section sitemaps (/sitemaps/<section>.xml) and the human-readable /sitemap page.
 */

export interface SitemapEntry {
  path: string;
  title: string;
  lastModified: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  images?: string[];
}

export interface SitemapSection {
  id: "pages" | "services" | "work" | "blog" | "careers";
  title: string;
  entries: SitemapEntry[];
}

/** Bump when page copy changes. */
const SITE_UPDATED = "2026-11-14";

export function sitemapSections(): SitemapSection[] {
  return [
    {
      id: "pages",
      title: "Main pages",
      entries: [
        { path: "/", title: "Home", lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1, images: [`${site.url}/opengraph-image`] },
        { path: "/about", title: "About NHB", lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
        { path: "/industries", title: "Industries", lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
        ...programs.map((p) => ({
          path: p.href,
          title: p.title,
          lastModified: SITE_UPDATED,
          changeFrequency: "monthly" as const,
          priority: p.id === "careers" ? 0.8 : 0.7,
        })),
        { path: "/book", title: "Book a one-to-one meeting", lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.5 },
        { path: "/sitemap", title: "Sitemap", lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.2 },
      ],
    },
    {
      id: "services",
      title: "Services",
      entries: SERVICES_DATA.map((s) => ({
        path: `/services/${s.slug}`,
        title: toTitle(s.title),
        lastModified: SITE_UPDATED,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    },
    {
      id: "work",
      title: "Case studies",
      entries: projects.map((p) => ({
        path: `/work/${p.slug}`,
        title: `${p.name}: ${p.category}`,
        lastModified: SITE_UPDATED,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        images: p.image ? [`${site.url}${p.image.src}`] : undefined,
      })),
    },
    {
      id: "blog",
      title: "Blog",
      entries: [
        { path: "/blog", title: "Engineering blog", lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.7 },
        ...insights.map((p) => ({
          path: p.href,
          title: p.title,
          lastModified: articles[p.slug]?.updated ?? p.date ?? SITE_UPDATED,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        })),
      ],
    },
    {
      id: "careers",
      title: "Open roles",
      entries: roles.map((r) => ({
        path: `/careers/${r.slug}`,
        title: r.title,
        lastModified: r.datePosted ?? SITE_UPDATED,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      })),
    },
  ];
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function sectionXml(section: SitemapSection) {
  const urls = section.entries
    .map((e) => {
      const images = (e.images ?? []).map((i) => `<image:image><image:loc>${esc(i)}</image:loc></image:image>`).join("");
      return `<url><loc>${esc(site.url + (e.path === "/" ? "" : e.path))}</loc><lastmod>${e.lastModified}</lastmod><changefreq>${e.changeFrequency}</changefreq><priority>${e.priority.toFixed(1)}</priority>${images}</url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
}

export function indexXml(sections: SitemapSection[]) {
  const items = sections
    .map((s) => {
      const last = s.entries.map((e) => e.lastModified).sort().at(-1) ?? SITE_UPDATED;
      return `<sitemap><loc>${site.url}/sitemaps/${s.id}.xml</loc><lastmod>${last}</lastmod></sitemap>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
}

export const xmlHeaders = { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" };
