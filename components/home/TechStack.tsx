import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import { techCategories } from "@/content/stack";
import { insights } from "@/content/insights";
import { TECH_ICON_MAP } from "./visuals/TechIcons";

/** The article that explains how we choose technology, linked from the stack. */
const STACK_ARTICLE = insights.find((p) => p.slug === "build-buy-or-integrate")!;

/**
 * Technology: one clean card, a row per category, logos with names. The one-line rationale for each tool is
 * kept as a tooltip rather than a panel, so the card stays about the stack itself.
 */
export default function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="relative overflow-hidden bg-[#245bff] py-20 text-white sm:py-24 lg:py-36"
    >
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
          lede="We choose tools per problem: on maturity, team fit, running cost and how easy they'll be to hire for later."
          tone="dark"
        />

        <div data-reveal className="mt-12 overflow-hidden rounded-3xl bg-white text-ink shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:mt-14 lg:mt-20">
          <dl>
            {techCategories.map((c) => (
              <div
                key={c.id}
                className="grid gap-4 border-b border-ink/8 px-6 py-6 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-7"
              >
                <dt className="t-arcade text-[12px] text-ink/60 lg:col-span-2">{c.label}</dt>
                <dd className="lg:col-span-10">
                  <ul className="flex flex-wrap items-center gap-x-9 gap-y-5">
                    {c.items.map((item) => {
                      const Icon = TECH_ICON_MAP[item.name];
                      return (
                        <li key={item.name} title={item.note} className="flex items-center gap-2.5">
                          {Icon ? <Icon className="size-6 shrink-0" aria-hidden /> : null}
                          <span className="text-[15px] font-medium tracking-[-0.01em]">{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-[14px] text-muted">How we decide what to build, buy or integrate</p>
            <Link
              href={STACK_ARTICLE.href}
              className="group inline-flex items-center gap-2 text-[14.5px] font-medium underline decoration-sun decoration-2 underline-offset-4"
            >
              Read: {STACK_ARTICLE.title}
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <p className="mt-4 text-[12.5px] text-white/75">Tools we work with — not vendor partnerships or certifications.</p>
      </Container>
    </section>
  );
}
