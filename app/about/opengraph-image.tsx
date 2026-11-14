import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding | About";

export default function Image() {
  return ogCard({ eyebrow: "About NHB", title: "We help businesses make better technology decisions" });
}
