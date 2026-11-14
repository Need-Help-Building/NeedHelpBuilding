import type { Metadata } from "next";
import ApplySection from "@/components/ecosystem/ApplySection";
import FeatureCards, { type FeatureCard } from "@/components/ecosystem/FeatureCards";
import Faq from "@/components/ecosystem/Faq";
import FounderPanel from "@/components/ecosystem/FounderPanel";
import ProgramCta from "@/components/ecosystem/ProgramCta";
import ProgramHero from "@/components/ecosystem/ProgramHero";
import StartupPortfolio from "@/components/ecosystem/StartupPortfolio";
import Steps, { type Step } from "@/components/ecosystem/Steps";
import TestimonialCard from "@/components/ecosystem/TestimonialCard";
import { bookingCta } from "@/components/ecosystem/booking";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import { testimonials } from "@/content/work";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Startup Program: A Technology Team for Founders",
  description:
    "A product, design and engineering team for early-stage founders, with equity, paid or hybrid partnerships agreed case by case. Apply to NHB's Startup Program.",
  path: "/startups",
});

const team = [
  "Full-stack developers",
  "UI/UX designers",
  "Product designers",
  "QA engineers & testers",
  "Automation specialists",
  "AI & software engineers",
  "Product & technology consultants",
];

const offer: FeatureCard[] = [
  {
    title: "Technology & product development",
    tone: "white",
    items: ["MVP development", "Web and mobile applications", "SaaS development", "Backend infrastructure", "APIs and integrations", "Custom software"],
  },
  {
    title: "Product design & strategy",
    tone: "white",
    items: ["Product architecture", "UI/UX design", "User journey planning", "Technical feasibility", "MVP planning", "Product iteration"],
  },
  {
    title: "Quality & reliability",
    tone: "white",
    items: ["Functional testing", "QA and automation testing", "Alpha and beta testing", "Performance optimisation", "Security testing and documentation"],
  },
  {
    title: "Network & growth",
    tone: "white",
    items: [
      "Access to our professional network",
      "Technical and product mentorship",
      "Introductions to relevant people in the ecosystem",
      "Opportunities for strategic collaboration",
      "Continued product support",
    ],
  },
];

const steps: Step[] = [
  { title: "Apply", detail: "Tell us about your startup, the problem you're solving and what you need from a technology partner." },
  { title: "Evaluate", detail: "We get to know the opportunity: your vision, your stage, the technical requirements and the team." },
  { title: "Build together", detail: "We agree the scope, who is responsible for what, and the partnership structure, in writing." },
  { title: "Grow together", detail: "We keep developing, improving and supporting the product as the business finds its feet." },
];

const commercial = [
  {
    title: "Equity or another agreed structure",
    detail:
      "For selected startups we're open to a small equity stake, a paid engagement, or a combination, in exchange for our involvement. The structure is agreed with the founders, not imposed.",
  },
  {
    title: "No fixed formula",
    detail:
      "There is no standard equity percentage. What makes sense depends on your stage, the scope of work, the risk each side carries and how involved we need to be.",
  },
  {
    title: "Evaluated individually",
    detail:
      "We take on a small number of startups at a time, so not every application is accepted. Each one is reviewed on its own merits.",
  },
  {
    title: "Agreed in writing",
    detail:
      "Nothing is final until scope, responsibilities and commercial terms are documented and signed by both sides. The program is not free development in exchange for an idea.",
  },
];

const glance = [
  { k: "Who it's for", v: "Early-stage founders" },
  { k: "Engagement", v: "Equity, paid or hybrid" },
  { k: "Team", v: "Product, engineering, QA & AI" },
  { k: "Selection", v: "Reviewed individually" },
];

const fit = {
  good: [
    "You're committed to the startup and can make decisions quickly",
    "You have a clear problem and a specific group of users in mind",
    "You want a long-term technology partner, not a one-off build",
    "You're open to equity, a paid engagement or a mix",
  ],
  notYet: [
    "You're looking for free development in exchange for an idea",
    "You need a fixed-bid project with no ongoing involvement",
    "The scope changes faster than anyone can write it down",
    "There's no one on the founding team who can own the product",
  ],
};

const models = {
  columns: ["Equity partnership", "Paid engagement", "Hybrid"],
  rows: [
    ["Best for", "Pre-product startups where NHB's involvement is central", "Founders who are funded and want a dedicated team", "Startups that want to share risk and keep cash for growth"],
    ["NHB contributes", "Product, design and engineering capacity alongside you", "A team on agreed scope and timelines", "A reduced-cost team plus a smaller equity stake"],
    ["How terms are set", "Agreed individually; no fixed percentage", "Scoped and priced per engagement", "A mutually agreed mix, documented upfront"],
  ],
};

const startupFaq = [
  {
    q: "Does NHB take equity in every startup?",
    a: "No. Equity is one option. Many engagements are paid or a hybrid of payment and a smaller equity stake. The right structure depends on your stage and what you need.",
  },
  {
    q: "How much equity does NHB ask for?",
    a: "There is no fixed percentage. It depends on your stage, the scope of work, the risk each side carries and how involved we need to be, and it's agreed with you in writing.",
  },
  {
    q: "Is the Startup Program free development?",
    a: "No. It's a partnership with commitment on both sides. We contribute a product, design and engineering team; founders contribute ownership, decisions and an agreed commercial structure.",
  },
  {
    q: "Who is the Startup Program for?",
    a: "Early-stage founders who need product, design and engineering capability and want a long-term technology partner rather than a freelancer or a one-off build.",
  },
  {
    q: "How do I apply?",
    a: "Fill in the application on this page. We read every application, reply personally, and set up a conversation if there's a fit.",
  },
];

export default function StartupsPage() {
  const applyHref = "#apply";
  const meeting = bookingCta("startups", "Book a one-to-one discussion");

  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([["Home", "/"], ["Startup Program", "/startups"]])} />

      <ProgramHero
        eyebrow="NHB Startup Program · For founders"
        title="Your startup needs a *technology team.* Not just another freelancer."
        lede={
          <p>
            We work with early-stage founders who need product, design and engineering capability, and someone to think
            it through with them. We don&apos;t deliver code and disappear. We work alongside you to turn the idea into a
            working product, and keep improving it after launch.
          </p>
        }
        primary={{ href: applyHref, label: "Apply to the Startup Program" }}
        secondary={meeting}
        note="Selective by design: each application is reviewed individually, and partnership terms are agreed case by case."
        aside={
          <div className="rounded-3xl bg-ink p-7 text-ivory sm:p-8">
            <p className="t-eyebrow text-sun">The team behind your product</p>
            <ul className="mt-5 divide-y divide-ivory/10 border-y border-ivory/10">
              {team.map((t, i) => (
                <li key={t} className="flex items-center gap-4 py-3 text-[15.5px]">
                  <span className="font-mono text-[11px] text-ivory/45">{String(i + 1).padStart(2, "0")}</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13.5px] leading-relaxed text-ivory/65">
              One team across strategy, design, engineering and QA, so nothing gets lost between vendors.
            </p>
          </div>
        }
      />

      {/* Program at a glance */}
      <section aria-label="Program at a glance" className="border-b border-line bg-white">
        <Container>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {glance.map((g, i) => (
              <div key={g.k} className={i > 0 ? "border-ink/10 py-6 pl-5 max-lg:odd:pl-0 lg:border-l lg:py-8 lg:pl-8" : "py-6 lg:py-8"}>
                <dt className="t-arcade text-[11px] text-muted">{g.k}</dt>
                <dd className="mt-2 text-[16px] font-semibold tracking-[-0.02em]">{g.v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="offer-title" className="py-20 lg:py-32">
        <Container>
          <SectionHeading
            index="01"
            label="What we offer"
            title="Everything an early product needs, *from one team.*"
            titleId="offer-title"
            lede="From the first architecture decision to the first thousand users: the capabilities a founding team would otherwise have to hire one by one."
          />
          <FeatureCards cards={offer} className="mt-14 lg:mt-20" />
        </Container>
      </section>

      {/* Is it a fit? */}
      <section aria-labelledby="fit-title" className="border-t border-line py-20 lg:py-32">
        <Container>
          <SectionHeading
            index="02"
            label="Is it a fit?"
            title="Who the program is *built for.*"
            titleId="fit-title"
            lede="We take on a small number of startups at a time. These are the signs a partnership is likely to work."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-2">
            <div data-reveal className="rounded-3xl border border-ink/12 bg-white p-7 sm:p-9">
              <h3 className="t-h3">A strong fit if</h3>
              <ul className="mt-6 border-t border-ink/10">
                {fit.good.map((x) => (
                  <li key={x} className="flex gap-3 border-b border-ink/8 py-3.5 text-[15.5px] leading-snug">
                    <span aria-hidden className="mt-1.5 grid size-4 shrink-0 place-items-center bg-ink text-[10px] text-sun">✓</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal data-delay="1" className="rounded-3xl border border-ink/12 bg-ivory-2/60 p-7 sm:p-9">
              <h3 className="t-h3">Probably not the right fit if</h3>
              <ul className="mt-6 border-t border-ink/10">
                {fit.notYet.map((x) => (
                  <li key={x} className="flex gap-3 border-b border-ink/8 py-3.5 text-[15.5px] leading-snug text-ink/80">
                    <span aria-hidden className="mt-1.5 grid size-4 shrink-0 place-items-center border border-ink/40 text-[10px]">×</span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="how-title" className="border-t border-line bg-ivory-2/60 py-20 lg:py-32">
        <Container>
          <SectionHeading
            index="03"
            label="How the partnership works"
            title="Four steps, *agreed openly.*"
            titleId="how-title"
          />
          <Steps steps={steps} className="mt-14 lg:mt-20" />
        </Container>
      </section>

      <section aria-labelledby="commercial-title" className="bg-ink py-20 text-ivory lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionHeading
                index="04"
                label="Commercial model"
                title="Built alongside founders, *structured case by case.*"
                titleId="commercial-title"
                tone="dark"
                titleClassName="lg:col-span-12"
              />
              <p data-reveal className="t-lede mt-6 text-ivory/70">
                Instead of treating every engagement as a conventional client project, we&apos;re interested in building
                with founders and sharing in the outcome. That only works when the terms are clear from the start.
              </p>
            </div>
            <dl className="grid gap-px overflow-hidden rounded-3xl border border-ivory/15 bg-ivory/15 sm:grid-cols-2 lg:col-span-7">
              {commercial.map((c, i) => (
                <div key={c.title} data-reveal data-delay={String(i + 1)} className="bg-ink p-6 sm:p-8">
                  <dt className="text-[18px] font-semibold tracking-[-0.025em]">
                    <span className="mr-3 font-mono text-[12px] text-sun">0{i + 1}</span>
                    {c.title}
                  </dt>
                  <dd className="mt-3 text-[14.5px] leading-relaxed text-ivory/70">{c.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Engagement models, side by side */}
          <div data-reveal className="mt-14 overflow-x-auto rounded-3xl border border-ivory/15 lg:mt-20">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="border-b border-ivory/15 px-6 py-4 text-left">
                <span className="t-arcade text-[11px] text-sun">Engagement models</span>
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[18%] px-6 py-4" />
                  {models.columns.map((c) => (
                    <th key={c} scope="col" className="px-6 py-4 text-[16px] font-semibold tracking-[-0.02em]">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {models.rows.map(([label, ...cells]) => (
                  <tr key={label} className="border-t border-ivory/10">
                    <th scope="row" className="px-6 py-4 align-top text-[13px] font-medium text-ivory/60">
                      {label}
                    </th>
                    {cells.map((c, i) => (
                      <td key={i} className="px-6 py-4 align-top text-[14.5px] leading-relaxed text-ivory/85">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section aria-labelledby="portfolio-title" className="py-20 lg:py-32">
        <Container>
          <SectionHeading
            index="05"
            label="Startups we've built with"
            title="Founders who chose us as their *technical team.*"
            titleId="portfolio-title"
            lede="Startups where NHB has worked as the embedded technical partner. Each links to the full case study."
          />
          <div className="mt-14 lg:mt-20">
            <StartupPortfolio applyHref={applyHref} />
          </div>
        </Container>
      </section>

      <section aria-labelledby="trust-title" className="border-t border-line py-20 lg:py-32">
        <Container>
          <FounderPanel eyebrow="06 · Who you'll work with" title="Founders, working with founders.">
            <p>
              NHB is led by engineers who still design systems and review code. In the Startup Program you work with
              them directly, from the first conversation to the release, not with an account manager.
            </p>
            <p>
              We&apos;ve been the technical founding team for startups before. We know the trade-offs between moving fast
              and building something that lasts, and we&apos;ll tell you which one matters more at your stage.
            </p>
          </FounderPanel>
          <h2 id="trust-title" className="sr-only">
            What founders say
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-2">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      <Faq index="07" title="Startup Program *questions.*" items={startupFaq} tone="muted" />

      <ApplySection
        index="08"
        label="Apply"
        title="Tell us what you're *building.*"
        lede="A few minutes now saves a long first call. The more context you share, the more useful our reply will be."
        formId="startup"
        nextSteps={[
          "We read every application and reply personally.",
          "If there's a fit, we set up a conversation about your startup and what you need.",
          "Scope, responsibilities and terms are agreed in writing before any work starts.",
        ]}
        meeting={meeting}
      />

      <ProgramCta
        current="startups"
        title="Let's build something worth building."
        primary={{ href: applyHref, label: "Apply to the Startup Program" }}
        secondary={bookingCta("startups", "Discuss your startup")}
      />
    </main>
  );
}
