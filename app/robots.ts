import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "YandexBot",
          "Slurp",
          "Baiduspider",
        ],
        allow: "/",
      },
      {
        // AI search engines and retrieval agents
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "Google-Extended",
          "Amazonbot",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://needhelpbuilding.com/sitemap.xml",
    host: "https://needhelpbuilding.com",
  };
}

