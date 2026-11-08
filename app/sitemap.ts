import type { MetadataRoute } from "next";
import { SERVICES_DATA } from "./services/services-data";
import { projects } from "@/content/work";
import { site } from "@/content/site";

const UPDATED = new Date("2026-11-08T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: UPDATED, changeFrequency: "weekly", priority: 1.0 },
    ...projects.map((p) => ({
      url: `${site.url}/work/${p.slug}`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SERVICES_DATA.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
