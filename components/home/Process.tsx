import { PixelCloud, PixelPteroHover } from "@/components/pixel/Decor";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import ProcessRail from "./ProcessRail";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative overflow-hidden py-24 lg:py-36">
      <PixelCloud scale={4} drift={30} duration={18} className="top-20 right-[8%] hidden md:block" />
      <PixelCloud small scale={3} drift={-18} duration={13} className="top-44 right-[30%] hidden lg:block" />
      <PixelPteroHover scale={2} className="top-[118px] right-[20%] hidden lg:block" />
      <Container className="relative">
        <SectionHeading
          index="06"
          label="How we work"
          title="Good engineering doesn't happen *by accident.*"
          titleId="process-title"
          lede="Seven stages, each with a principle behind it and something concrete you receive at the end. The last stage feeds the first: production teaches us what to improve next."
        />
        <div data-reveal className="mt-14 lg:mt-20">
          <ProcessRail />
        </div>
      </Container>
    </section>
  );
}
