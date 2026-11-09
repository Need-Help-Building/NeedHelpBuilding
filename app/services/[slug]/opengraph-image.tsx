import { SERVICES_DATA } from "../services-data";
import { ogCard, ogSize } from "@/lib/og-card";
import { toTitle } from "../title";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "NeedHelpBuilding service";

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  return ogCard({
    eyebrow: service ? `Services · ${service.category}` : "Services",
    title: service ? toTitle(service.title) : "NeedHelpBuilding services",
    footer: service?.shortDesc,
  });
}
