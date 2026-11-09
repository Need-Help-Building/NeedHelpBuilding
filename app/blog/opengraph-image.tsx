import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NHB Engineering Notes";

export default function Image() {
  return ogCard({
    eyebrow: "Engineering notes",
    title: "Field notes on AI agents, RAG, automation and architecture",
  });
}
