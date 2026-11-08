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

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/** Homepage narrative: §02 hero → §16 conversion. Header (§01) and footer (§17) live in the root layout. */
export default function HomePage() {
  return (
    <main id="main">
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
      <FinalCta />
    </main>
  );
}
