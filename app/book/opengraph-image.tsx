import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding — Talk to the team";

export default function Image() {
  return ogCard({ eyebrow: "Talk to the team", title: "Book a one-to-one meeting with NHB" });
}
