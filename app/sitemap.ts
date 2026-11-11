import type { MetadataRoute } from "next";
import { SERVICES_DATA } from "./services/services-data";
import { projects } from "@/content/work";
import { insights } from "@/content/insights";
import { articles } from "@/content/articles";
import { site } from "@/content/site";
import { programs } from "@/content/ecosystem";

/** Date of the last site-wide content change. Bump it when page copy changes; blog posts use their own dates. */
const UPDATED = new Date("2026-11-09T00:00:00.000Z");
const ECOSYSTEM_UPDATED = new Date("2026-11-11T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const postDates = insights.map((p) => new Date(articles[p.slug]?.updated ?? p.date ?? UPDATED));
  const latestPost = new Date(Math.max(...postDates.map((d) => d.getTime())));

  return [
    { url: site.url, lastModified: UPDATED, changeFrequency: "weekly", priority: 1.0 },
    ...SERVICES_DATA.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projects.map((p) => ({
      url: `${site.url}/work/${p.slug}`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...programs.map((p) => ({
      url: `${site.url}${p.href}`,
      lastModified: ECOSYSTEM_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/book`, lastModified: ECOSYSTEM_UPDATED, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/industries`, lastModified: ECOSYSTEM_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/blog`, lastModified: latestPost, changeFrequency: "weekly", priority: 0.7 },
    ...insights.map((p, i) => ({
      url: `${site.url}${p.href}`,
      lastModified: postDates[i],
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
