import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding | Sitemap";

export default function Image() {
  return ogCard({ eyebrow: "Sitemap", title: "Every page on NeedHelpBuilding" });
}
