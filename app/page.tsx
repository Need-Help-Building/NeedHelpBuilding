import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Positioning from "@/components/home/Positioning";
import AiEngineering from "@/components/home/AiEngineering";
import Disciplines from "@/components/home/Disciplines";
import FeaturedWork from "@/components/home/FeaturedWork";
import Spotlight from "@/components/home/Spotlight";
import Process from "@/components/home/Process";
import TechStack from "@/components/home/TechStack";
import Industries from "@/components/home/Industries";
import Consulting from "@/components/home/Consulting";
import WhyNhb from "@/components/home/WhyNhb";
import Insights from "@/components/home/Insights";
import Credibility from "@/components/home/Credibility";
import Testimonials from "@/components/home/Testimonials";
import FinalCta from "@/components/home/FinalCta";
import Faq from "@/components/ecosystem/Faq";
import { homeFaq } from "@/content/faq";
import { JsonLd } from "@/lib/structured-data";
import { site } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}/#webpage`,
  url: site.url,
  name: "NeedHelpBuilding | AI, Software & Technology Consulting",
  description: `${site.positioning} ${site.supporting}`,
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#organization` },
  inLanguage: "en",
};

/** Homepage narrative: §02 hero → §16 conversion. Header (§01) and footer (§17) live in the root layout. */
export default function HomePage() {
  return (
    <main id="main">
      <JsonLd data={webPageJsonLd} />
      <Hero />
      <Positioning />
      <AiEngineering />
      <Disciplines />
      <FeaturedWork />
      <Spotlight />
      <Process />
      <TechStack />
      <Industries />
      <Consulting />
      <WhyNhb />
      <Insights />
      <Credibility />
      <Testimonials />
      <Faq index="14" title="Common *questions.*" items={homeFaq} />
      <FinalCta />
    </main>
  );
}
