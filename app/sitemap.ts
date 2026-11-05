import type { MetadataRoute } from "next";
import { SERVICES_DATA } from "./services/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `https://needhelpbuilding.com/services/${service.slug}`,
    lastModified: new Date("2026-10-18T00:00:00.000Z"),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: "https://needhelpbuilding.com",
      lastModified: new Date("2026-10-18T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...serviceUrls,
  ];
}
