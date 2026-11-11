import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding — Startup Program";

export default function Image() {
  return ogCard({ eyebrow: "Startup Program", title: "A technology team for founders, not just another freelancer" });
}
