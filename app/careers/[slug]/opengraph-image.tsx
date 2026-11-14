import { getRole, roles } from "@/content/careers";
import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding | Open role";

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getRole(slug);
  return ogCard({
    eyebrow: role ? `Careers · ${role.department}` : "Careers",
    title: role?.title ?? "Careers at NHB",
    footer: role ? `${role.type} · ${role.workMode} · ${role.location}` : undefined,
  });
}
