import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import TechEcosystem from "./TechEcosystem";

export default function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="relative overflow-hidden bg-[#245bff] py-20 text-white sm:py-24 lg:py-36"
    >
      {/* Decorative technical grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
      />

      <Container className="relative">
        <SectionHeading
          index="07"
          label="Technology"
          title="Built with the right technologies. *Not just the trendiest ones.*"
          titleId="stack-title"
          lede="We choose tools per problem — on maturity, team fit, running cost and how easy they'll be to hire for later. These are the ones we reach for most, and why."
          tone="dark"
        />
        <div data-reveal className="mt-12 sm:mt-14 lg:mt-20">
          <TechEcosystem />
        </div>
      </Container>
    </section>
  );
}
