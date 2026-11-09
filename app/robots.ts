import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Everything public is crawlable, including AI search and answer engines (the site wants to be cited).
 * Search/citation crawlers are listed explicitly so the policy is visible and easy to change per bot:
 * - OAI-SearchBot, Claude-SearchBot, PerplexityBot decide citability in ChatGPT / Claude / Perplexity search.
 * - GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot are training crawlers; they are allowed
 *   today — move them to a Disallow group to opt out of model training without affecting search.
 * /assets is an internal playground: it is noindexed in its layout rather than disallowed, so crawlers can
 * still read the noindex directive.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "GPTBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot-Extended",
          "Amazonbot",
          "CCBot",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
