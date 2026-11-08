import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Positioning from "@/components/home/Positioning";
import AiEngineering from "@/components/home/AiEngineering";
import Disciplines from "@/components/home/Disciplines";
import FeaturedWork from "@/components/home/FeaturedWork";
import Spotlight from "@/components/home/Spotlight";
import Process from "@/components/home/Process";
import TechStack from "@/components/home/TechStack";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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
    </main>
  );
}
