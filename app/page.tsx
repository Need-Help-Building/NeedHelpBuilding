import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Positioning from "@/components/home/Positioning";
import AiEngineering from "@/components/home/AiEngineering";
import Disciplines from "@/components/home/Disciplines";

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
    </main>
  );
}
