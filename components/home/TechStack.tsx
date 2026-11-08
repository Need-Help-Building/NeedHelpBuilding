import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import TechEcosystem from "./TechEcosystem";

export default function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="bg-ivory-2 py-24 lg:py-36">
      <Container>
        <SectionHeading
          index="07"
          label="Technology"
          title="Built with the right technologies. *Not just the trendiest ones.*"
          titleId="stack-title"
          lede="We choose tools per problem — on maturity, team fit, running cost and how easy they'll be to hire for later. These are the ones we reach for most, and why."
        />
        <div data-reveal className="mt-14 lg:mt-20">
          <TechEcosystem />
        </div>
      </Container>
    </section>
  );
}
