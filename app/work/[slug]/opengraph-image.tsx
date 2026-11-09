import { projects } from "@/content/work";
import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding case study";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return ogCard({
    eyebrow: project ? `Case study · ${project.category}` : "Case study",
    title: project?.name ?? "NeedHelpBuilding work",
    footer: project?.summary,
  });
}
