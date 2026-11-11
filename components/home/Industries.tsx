import { CactusPatch, PixelPteroHover } from "@/components/pixel/Decor";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/primitives";
import IndustryExplorer from "./IndustryExplorer";

export default function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="relative overflow-hidden py-24 lg:py-36">
      <CactusPatch variant={2} dino={2} className="bottom-0 left-[5%] hidden md:flex" flip />
      <PixelPteroHover scale={3} className="top-16 right-[9%] hidden md:block" />
      <Container>
        <SectionHeading
          index="08"
          label="Industries"
          title="Technology built around *how your industry works.*"
          titleId="industries-title"
          lede="Every sector has its own rhythms, regulations and failure points. We start from how the work actually happens there — then design systems that fit it, rather than forcing it into a template."
        />
        <div data-reveal className="mt-14 lg:mt-20">
          <IndustryExplorer />
        </div>
        <div data-reveal className="mt-12 flex justify-center lg:mt-16">
          <ButtonLink href="/industries" variant="ink" size="lg">
            Learn more about the industries we serve
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
