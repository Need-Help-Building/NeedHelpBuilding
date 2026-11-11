import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NeedHelpBuilding — Digital Product Engineering, AI & Technology Consulting",
    short_name: "NHB",
    description:
      "We help businesses make better technology decisions, then design, engineer and run the systems: AI agents, automation, software and digital products.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f3ed",
    theme_color: "#f5f3ed",
    icons: [
      { src: "/favicon.png", sizes: "32x32", type: "image/png" },
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
