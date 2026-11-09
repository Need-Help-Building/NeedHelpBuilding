import { insights } from "@/content/insights";
import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding engineering note";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insights.find((i) => i.slug === slug);
  return ogCard({
    eyebrow: post ? `Engineering notes · ${post.category}` : "Engineering notes",
    title: post?.title ?? "NHB Engineering Notes",
    footer: post?.readingTime,
  });
}
