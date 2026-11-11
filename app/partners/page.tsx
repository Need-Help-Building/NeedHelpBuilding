import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import ApplySection from "@/components/ecosystem/ApplySection";
import FounderPanel from "@/components/ecosystem/FounderPanel";
import ProgramCta from "@/components/ecosystem/ProgramCta";
import ProgramHero from "@/components/ecosystem/ProgramHero";
import Steps, { type Step } from "@/components/ecosystem/Steps";
import { bookingCta } from "@/components/ecosystem/booking";
import { serviceIcons } from "@/components/site/serviceIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartLink from "@/components/ui/SmartLink";
import { Container } from "@/components/ui/primitives";
import { proofLedger } from "@/content/company";
import type { ServiceIcon } from "@/content/services";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Agency Partner Program",
  description:
    "A delivery partnership for agencies, studios and consultancies: you keep the client relationship, NHB brings design, engineering, QA and AI capability behind it.",
  path: "/partners",
});

const steps: Step[] = [
  { title: "Apply", detail: "Tell us about your agency: your expertise, your clients and the capabilities you already have." },
  { title: "Demonstrate", detail: "We look at your work through your portfolio, case studies or a relevant demonstration." },
  { title: "Collaborate", detail: "We agree the commercial model, who delivers what, and how we communicate with clients." },
  { title: "Grow", detail: "Qualified partners work with us on suitable client projects as opportunities arise." },
];

const capabilities: { title: string; href: string; icon: ServiceIcon }[] = [
  { title: "Full-stack development", href: "/services/full-stack-web-development", icon: "web" },
  { title: "UI/UX & product design", href: "/services/ui-ux-design", icon: "design" },
  { title: "QA & testing", href: "/services/application-testing", icon: "quality" },
  { title: "Custom software development", href: "/services/software-development", icon: "software" },
  { title: "SaaS & web applications", href: "/services/full-stack-web-development", icon: "web" },
  { title: "AI & automation", href: "/services/ai-development", icon: "ai" },
  { title: "Technical consultation", href: "/services/tech-consultancy", icon: "consulting" },
  { title: "Cloud & delivery infrastructure", href: "/services/management-scaling", icon: "cloud" },
];

const expectations = [
  "Professional client communication",
  "Genuine business relationships",
  "Relevant industry expertise",
  "Previous work you can show",
  "Reliable, timely communication",
  "Ethical business practices",
  "Clear expectations and delivery coordination",
];

const benefits = [
  "Access to relevant client opportunities",
  "Technical execution support",
  "Room to expand the services you offer",
  "A multidisciplinary team behind your proposals",
  "Joint project opportunities",
  "Potential for recurring collaboration",
  "Revenue-sharing or commercial terms agreed with you",
];

const evaluation = [
  { title: "Existing portfolio projects", detail: "Live work you've delivered, and your role in it." },
  { title: "Relevant case studies", detail: "The problem, what you did and what changed for the client." },
  { title: "A product demonstration", detail: "A walkthrough of something you've built or designed." },
  { title: "A sample implementation", detail: "Only where it's genuinely needed, and scoped to be small." },
  { title: "A technical or creative review", detail: "A conversation about how you approach design, code or delivery." },
];

export default function PartnersPage() {
  const meeting = bookingCta("partners");
  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([["Home", "/"], ["Agency Partner Program", "/partners"]])} />

      <ProgramHero
        eyebrow="NHB Agency Partner Program · For agencies & studios"
        title="You bring the client relationship. *We bring the execution.*"
        lede={
          <p>
            Many agencies win clients faster than they can build a full technical or creative team. We partner with
            agencies, studios and consultancies that have strong client relationships and want dependable design,
            engineering and QA capacity behind them.
          </p>
        }
        primary={{ href: "#apply", label: "Apply for Partnership" }}
        secondary={meeting}
        aside={
          <div className="grid overflow-hidden rounded-3xl border border-ink/12 sm:grid-cols-2">
            <div className="bg-white p-6 sm:p-7">
              <p className="t-eyebrow text-muted">Your agency</p>
              <ul className="mt-5 space-y-3 text-[15px]">
                {["Client relationships", "Industry knowledge", "Account management", "Your brand and positioning"].map((x) => (
                  <li key={x} className="flex gap-2.5">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-ink/50" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink p-6 text-ivory sm:p-7">
              <p className="t-eyebrow text-sun">NHB</p>
              <ul className="mt-5 space-y-3 text-[15px]">
                {["Product & UI/UX design", "Engineering & AI", "QA & security testing", "Delivery & infrastructure"].map((x) => (
                  <li key={x} className="flex gap-2.5">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-sun" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      />

      <section aria-labelledby="how-title" className="py-20 lg:py-32">
        <Container>
          <SectionHeading
            index="01"
            label="How the partnership works"
            title="Better agencies build *better partnerships.*"
            titleId="how-title"
            lede="A partnership only works if both sides know what the other is good at. So we start by getting to know each other's work."
          />
          <Steps steps={steps} className="mt-14 lg:mt-20" />
        </Container>
      </section>

      <section aria-labelledby="brings-title" className="border-t border-line bg-ivory-2/60 py-20 lg:py-32">
        <Container>
          <SectionHeading index="02" label="What NHB brings" title="One team, *every discipline.*" titleId="brings-title" />
          <ul className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {capabilities.map((c, i) => {
              const Icon = serviceIcons[c.icon];
              return (
                <li key={c.title} data-reveal data-delay={String((i % 4) + 1)}>
                  <Link href={c.href} className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-ink/10 bg-ivory p-5 transition-colors hover:border-ink">
                    <span className="grid size-10 place-items-center rounded-xl bg-ink text-sun">
                      <Icon aria-hidden className="size-4.5" />
                    </span>
                    <span className="flex items-end justify-between gap-3 text-[16.5px] font-semibold tracking-[-0.02em]">
                      {c.title}
                      <ArrowUpRight aria-hidden className="size-4 shrink-0 text-ink/30 transition-colors group-hover:text-ink" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="fit-title" className="py-20 lg:py-32">
        <Container>
          <SectionHeading index="03" label="Fit" title="What we expect, and *what you get.*" titleId="fit-title" />
          <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-2">
            <div data-reveal className="rounded-3xl border border-ink/12 bg-white p-7 sm:p-10">
              <h3 className="t-h3">What we expect from partners</h3>
              <ul className="mt-6 border-t border-ink/10">
                {expectations.map((e) => (
                  <li key={e} className="flex gap-3 border-b border-ink/8 py-3 text-[15.5px]">
                    <span aria-hidden className="text-ink/40">
                      ›
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal data-delay="1" className="rounded-3xl bg-sun p-7 sm:p-10">
              <h3 className="t-h3">Partner benefits</h3>
              <ul className="mt-6 border-t border-ink/15">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-3 border-b border-ink/12 py-3 text-[15.5px]">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="evaluation-title" className="bg-ink py-20 text-ivory lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionHeading
                index="04"
                label="Demonstration & qualification"
                title="We partner with agencies *we've seen at work.*"
                titleId="evaluation-title"
                tone="dark"
                titleClassName="lg:col-span-12"
              />
              <p data-reveal className="t-lede mt-6 text-ivory/70">
                We&apos;re looking for serious agencies, not just completed forms. Selected applicants may be asked to show
                their capabilities in one or more of these ways.
              </p>
              <div data-reveal data-delay="1" className="mt-8 space-y-4 border-t border-ivory/15 pt-6 text-[14.5px] leading-relaxed text-ivory/70">
                <p>
                  <span className="font-semibold text-ivory">Proportionate, not free work.</span> We don&apos;t ask every
                  applicant to build something for us. Any evaluation is scoped to what we genuinely need to see.
                </p>
                <p>
                  <span className="font-semibold text-ivory">No guaranteed volume.</span> A successful evaluation makes you a
                  qualified partner; it doesn&apos;t promise a fixed number of clients. Opportunities depend on client
                  requirements, partner capabilities and mutual agreement.
                </p>
              </div>
            </div>
            <ol className="lg:col-span-6 lg:col-start-7">
              {evaluation.map((e, i) => (
                <li key={e.title} data-reveal data-delay={String((i % 4) + 1)} className="grid grid-cols-[40px_1fr] gap-4 border-b border-ivory/12 py-5 first:border-t">
                  <span className="font-mono text-[12px] text-sun">0{i + 1}</span>
                  <span>
                    <span className="block text-[18px] font-semibold tracking-[-0.025em]">{e.title}</span>
                    <span className="mt-1 block text-[14.5px] text-ivory/65">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section aria-labelledby="record-title" className="py-20 lg:py-32">
        <Container>
          <FounderPanel eyebrow="05 · Who you'd be working with" title="Engineers who stay accountable for the build." reverse>
            <p>
              The founders who scope a partnership are the people who review the architecture and the code. Your clients
              get work you can put your name to, and you always know who is responsible for what.
            </p>
          </FounderPanel>
          <h2 id="record-title" className="mt-16 t-eyebrow text-muted lg:mt-24">
            Our record, open to inspect
          </h2>
          <ul className="mt-4 border-t border-ink/12">
            {proofLedger.map((row) => (
              <li key={row.label} className="border-b border-ink/12">
                <SmartLink href={row.href ?? "/#work"} className="group grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                  <span className="font-mono text-[12px] text-muted uppercase sm:col-span-3">{row.label}</span>
                  <span className="text-[19px] font-semibold tracking-[-0.025em] sm:col-span-4">{row.value}</span>
                  <span className="flex items-center justify-between gap-4 text-[14.5px] text-muted sm:col-span-5">
                    {row.detail}
                    <ArrowUpRight aria-hidden className="size-4 shrink-0 text-ink/30 transition-colors group-hover:text-ink" />
                  </span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ApplySection
        index="06"
        label="Apply"
        title="Apply for *partnership.*"
        lede="Tell us about your agency and where you'd like to collaborate. Links to real work help us most."
        formId="partner"
        nextSteps={[
          "We review your agency's work and reply personally.",
          "Shortlisted agencies are invited to a conversation, and possibly a proportionate demonstration.",
          "We agree commercial terms and delivery responsibilities before any client work.",
        ]}
        meeting={meeting}
      />

      <ProgramCta
        current="partners"
        title="Let's build a stronger delivery network."
        primary={{ href: "#apply", label: "Apply for Partnership" }}
        secondary={meeting}
      />
    </main>
  );
}
