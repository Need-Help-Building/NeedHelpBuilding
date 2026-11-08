import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import IndustryExplorer from "./IndustryExplorer";

export default function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="py-24 lg:py-36">
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
      </Container>
    </section>
  );
}
