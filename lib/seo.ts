import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageMetaInput {
  /** Page title without the brand; the root layout template appends " — NeedHelpBuilding". */
  title: string;
  description: string;
  /** Site-relative path, e.g. "/services/ai-agents". */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
}

/**
 * Per-page metadata with a self-referencing canonical and complete Open Graph / Twitter tags.
 * Next shallow-merges `openGraph`, so a page that sets it must restate every field it needs (url, siteName,
 * locale…); doing it here keeps pages from silently inheriting the homepage's og:url. Images come from the
 * segment's `opengraph-image` file.
 */
export function pageMetadata({ title, description, path, type = "website", publishedTime, modifiedTime, section }: PageMetaInput): Metadata {
  // Keep <title> within ~60 characters: fall back to the short brand when the full one would overflow.
  const longTitle = `${title} — ${site.name}`;
  const fullTitle = longTitle.length <= 60 ? longTitle : `${title} — ${site.shortName}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_US",
      siteName: site.name,
      url: `${site.url}${path}`,
      title: fullTitle,
      description,
      ...(type === "article" ? { publishedTime, modifiedTime, section, authors: [site.url] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** BreadcrumbList JSON-LD from [name, path] pairs (paths must be real, indexable URLs — no #fragments). */
export function breadcrumbJsonLd(trail: [name: string, path: string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${site.url}${path}`,
    })),
  };
}

/** Trim to `max` characters on a word boundary (for meta descriptions built from content). */
export function clip(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s]+$/, "")}…`;
}
