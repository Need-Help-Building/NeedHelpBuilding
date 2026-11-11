import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding — Industries";

export default function Image() {
  return ogCard({ eyebrow: "Industries", title: "Technology built around how your industry works" });
}
