import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NEED HELP BUILDING?",
    short_name: "NeedHelpBuilding",
    description: "We build custom automations, AI agents, high-converting web apps, and enterprise systems for growing businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c0d",
    theme_color: "#0c0c0d",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
