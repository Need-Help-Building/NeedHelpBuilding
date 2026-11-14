import type { Metadata } from "next";
import { Briefcase, Code2, GraduationCap } from "lucide-react";
import ApplySection from "@/components/ecosystem/ApplySection";
import ProgramCta from "@/components/ecosystem/ProgramCta";
import ProgramHero from "@/components/ecosystem/ProgramHero";
import Steps, { type Step } from "@/components/ecosystem/Steps";
import WorkStrip from "@/components/ecosystem/WorkStrip";
import { bookingCta } from "@/components/ecosystem/booking";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";

export const metadata: Metadata = pageMetadata({
  title: "Referral & Ambassador Program",
  description:
    "Introduce businesses that need technology and earn 10% commission on eligible, closed work. Open to professionals, student ambassadors and builders.",
  path: "/referral-program",
});

const tracks = [
  {
    id: "referrers",
    icon: Briefcase,
    label: "A",
    title: "Network Referrers",
    who: "Professionals, entrepreneurs, consultants, business owners and past clients who know businesses that need technology.",
    tone: "bg-white border border-ink/12",
    groups: [
      {
        heading: "How it works",
        items: [
          "Spot a business that needs digital or technology services.",
          "Introduce them to NHB.",
          "We handle discovery, consultation, proposal and delivery.",
          "When the deal closes and the client pays, you receive 10% commission on the eligible amount.",
        ],
      },
    ],
  },
  {
    id: "ambassadors",
    icon: GraduationCap,
    label: "B",
    title: "Student City Ambassadors",
    who: "Ambitious students who want real business experience and a professional network, representing NHB in their city and college ecosystem.",
    tone: "bg-sun",
    groups: [
      {
        heading: "What you'll do",
        items: [
          "Identify local businesses that need digital solutions",
          "Connect with business owners and introduce NHB's services",
          "Help set up discovery meetings",
          "Build relationships with local organisations",
          "Spot opportunities for technology collaborations",
        ],
      },
      {
        heading: "What you get",
        items: [
          "10% commission on eligible, successfully closed business",
          "Official recognition as an NHB City Ambassador",
          "NHB merchandise",
          "Hands-on business development and client communication experience",
          "Networking, and the chance to collaborate with NHB on projects",
        ],
      },
    ],
    note: "This isn't an unpaid internship. Ambassadors are paid on performance, with recognition and opportunities on top.",
  },
  {
    id: "contributors",
    icon: Code2,
    label: "C",
    title: "Technical Contributors & Community",
    who: "Developers, designers, testers and technically minded people who would rather build than sell.",
    tone: "bg-mist-soft",
    groups: [
      {
        heading: "Ways to get involved",
        items: [
          "Technical collaboration",
          "Product feedback",
          "Design contributions",
          "Testing",
          "Community participation",
          "Project-specific opportunities",
        ],
      },
    ],
    note: "Joining as a contributor doesn't guarantee paid work or employment. When a project needs your skills, we'll talk about it openly.",
  },
];

const terms = [
  { title: "Earned on successful conversions", detail: "Commission applies to eligible business that closes and is paid for, not to introductions alone." },
  { title: "Registered and attributed to you", detail: "Register the referral with NHB before the client engages with us, so it's recorded as yours." },
  { title: "Existing clients and duplicates excluded", detail: "Current NHB clients and leads we already have aren't eligible, unless we explicitly agree otherwise." },
  { title: "Paid after the client pays", detail: "Your commission becomes payable once NHB has received the applicable payment from the client." },
];

const steps: Step[] = [
  { title: "Join the program", detail: "Apply below and tell us how you'd like to take part." },
  { title: "Get onboarded", detail: "We walk you through our services, the program terms and how to register a referral." },
  { title: "Identify an opportunity", detail: "A business in your network that needs a website, an app, automation or better systems." },
  { title: "Introduce the client", detail: "Register the lead and make the introduction, or bring them to a meeting with us." },
  { title: "We sell and deliver", detail: "NHB runs the discovery, proposal, contract and delivery. You stay informed." },
  { title: "Receive your commission", detail: "Once the deal closes and the client pays, your eligible commission is paid out." },
];

export default function ReferralProgramPage() {
  const meeting = bookingCta("referral", "Talk to our team");
  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([["Home", "/"], ["Referral & Ambassador Program", "/referral-program"]])} />

      <ProgramHero
        eyebrow="NHB Referral & Ambassador Program"
        title="Good businesses know good people. *Let's build something together.*"
        lede={
          <p>
            Your network has businesses that need better technology. Introduce them to NHB and we take care of the rest:
            the conversation, the proposal and the delivery. When the work is signed and paid, you&apos;re paid too.
          </p>
        }
        primary={{ href: "#apply", label: "Join the NHB Network" }}
        secondary={meeting}
        aside={
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-ivory">
            <div aria-hidden className="grid-paper-dark pointer-events-none absolute inset-0 opacity-60" />
            <p className="relative t-eyebrow text-ivory/60">Referral commission</p>
            <p className="relative mt-4 text-[clamp(5rem,4rem+5vw,8.5rem)] leading-[0.85] font-semibold tracking-[-0.06em] text-sun">10%</p>
            <p className="relative mt-5 max-w-xs text-[15.5px] leading-relaxed text-ivory/80">
              on eligible, successfully closed business you introduce, paid after the client pays.
            </p>
            <a href="#commission" className="relative mt-6 inline-block font-mono text-[12px] text-ivory/70 underline decoration-sun underline-offset-4 hover:text-ivory">
              How commission works
            </a>
          </div>
        }
      />

      <section aria-labelledby="tracks-title" className="py-20 lg:py-32">
        <Container>
          <SectionHeading
            index="01"
            label="Who can participate"
            title="Three ways to be part of *the NHB network.*"
            titleId="tracks-title"
            lede="Choose the track that fits how you work. You can tell us more in the application."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-3">
            {tracks.map((t, i) => {
              const Icon = t.icon;
              return (
                <article key={t.id} id={t.id} data-reveal data-delay={String(i + 1)} className={cn("flex flex-col rounded-3xl p-7 sm:p-9", t.tone)}>
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-ink text-sun">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <span className="font-mono text-[12px] text-ink/55">Track {t.label}</span>
                  </div>
                  <h3 className="mt-8 t-h3">{t.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{t.who}</p>
                  {t.groups.map((g) => (
                    <div key={g.heading} className="mt-7">
                      <p className="t-eyebrow text-ink/60">{g.heading}</p>
                      <ul className="mt-3 border-t border-ink/15">
                        {g.items.map((item) => (
                          <li key={item} className="flex gap-3 border-b border-ink/10 py-2.5 text-[14.5px] leading-snug">
                            <span aria-hidden className="text-ink/45">
                              ›
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {t.note && <p className="mt-6 rounded-2xl bg-ink/6 p-4 text-[13.5px] leading-relaxed text-ink/80">{t.note}</p>}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="commission" aria-labelledby="commission-title" className="bg-ink py-20 text-ivory lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionHeading
                index="02"
                label="Commission structure"
                title="10%, *explained plainly.*"
                titleId="commission-title"
                tone="dark"
                titleClassName="lg:col-span-12"
              />
              <p data-reveal className="t-lede mt-6 text-ivory/70">
                You earn 10% commission on the eligible amount of business you introduce, once it closes and the client
                has paid. Not on every introduction, and not on work we were already discussing with that client.
              </p>
              <p data-reveal data-delay="1" className="mt-6 text-[14px] leading-relaxed text-ivory/55">
                Exact eligibility, attribution and payment conditions are set out in the program terms, which we share
                with every participant at onboarding, before any referral is registered.
              </p>
            </div>
            <ol className="grid gap-px overflow-hidden rounded-3xl border border-ivory/15 bg-ivory/15 sm:grid-cols-2 lg:col-span-7">
              {terms.map((t, i) => (
                <li key={t.title} data-reveal data-delay={String(i + 1)} className="bg-ink p-6 sm:p-8">
                  <span className="font-mono text-[12px] text-sun">0{i + 1}</span>
                  <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.025em]">{t.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-ivory/70">{t.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section aria-labelledby="steps-title" className="py-20 lg:py-32">
        <Container>
          <SectionHeading index="03" label="How it works" title="From introduction to *commission.*" titleId="steps-title" />
          <Steps steps={steps} className="mt-14 lg:mt-20" />
        </Container>
      </section>

      <section aria-labelledby="proof-title" className="border-t border-line bg-ivory-2/60 py-20 lg:py-32">
        <Container>
          <SectionHeading
            index="04"
            label="Who you're introducing"
            title="Your name is on the introduction. *Here's who picks it up.*"
            titleId="proof-title"
            lede="Products NHB has designed, built and shipped. Open them before you recommend us to anyone."
          />
          <div className="mt-14 lg:mt-20">
            <WorkStrip />
          </div>
        </Container>
      </section>

      <ApplySection
        index="05"
        label="Apply"
        title="Join the *NHB network.*"
        lede="Tell us who you are and how you'd like to take part. Students, professionals and technical contributors all apply here."
        formId="referral"
        nextSteps={[
          "We review your application and reply personally.",
          "Approved participants get an onboarding call and the program terms.",
          "You start registering referrals, or contributing, from there.",
        ]}
        meeting={meeting}
      />

      <ProgramCta
        current="referral"
        title="Build your network. Create opportunities. Grow with NHB."
        primary={{ href: "#apply", label: "Join the NHB Network" }}
        secondary={meeting}
      />
    </main>
  );
}
