import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding — Agency Partner Program";

export default function Image() {
  return ogCard({ eyebrow: "Agency Partner Program", title: "You bring the client relationship. We bring the execution" });
}
