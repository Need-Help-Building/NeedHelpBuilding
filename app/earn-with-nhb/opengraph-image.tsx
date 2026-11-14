import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding | Products & Revenue Program";

export default function Image() {
  return ogCard({ eyebrow: "Products & Revenue Program", title: "Products worth selling. Opportunities worth building" });
}
