import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding | Referral & Ambassador Program";

export default function Image() {
  return ogCard({ eyebrow: "Referral & Ambassador Program", title: "Good businesses know good people. Earn 10% on eligible business" });
}
