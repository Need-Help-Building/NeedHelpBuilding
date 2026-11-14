import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding | Careers";

export default function Image() {
  return ogCard({ eyebrow: "Careers at NHB", title: "Build things that matter, with people who care how they're built" });
}
