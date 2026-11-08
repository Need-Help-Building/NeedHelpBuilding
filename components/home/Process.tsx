import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import ProcessRail from "./ProcessRail";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-24 lg:py-36">
      <Container>
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
