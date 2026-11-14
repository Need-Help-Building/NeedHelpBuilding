import type { Metadata } from "next";
import { Check, Copy, Mail } from "lucide-react";
import Faq from "@/components/ecosystem/Faq";
import FounderPanel from "@/components/ecosystem/FounderPanel";
import ProgramCta from "@/components/ecosystem/ProgramCta";
import ProgramHero from "@/components/ecosystem/ProgramHero";
import Steps from "@/components/ecosystem/Steps";
import RoleBoard from "@/components/careers/RoleBoard";
import { PixelPteroHover } from "@/components/pixel/Decor";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import { careersFaq, departments, hiringSteps, openApplication, perks, roles, teamValues, workModes } from "@/content/careers";
import { team } from "@/content/company";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Careers: Engineering, AI & Design Jobs",
  description:
    "Join NeedHelpBuilding. Remote-first roles in engineering, AI, design, QA and growth, plus open applications when no role fits your talent.",
  path: "/careers",
});

const founderNames = team.founders.map((f) => f.name).join(" and ");

export default function CareersPage() {
  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([["Home", "/"], ["Careers", "/careers"]])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${site.url}/careers#page`,
          url: `${site.url}/careers`,
          name: "Careers at NeedHelpBuilding",
          about: { "@id": `${site.url}/#organization` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: roles.map((r, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${site.url}/careers/${r.slug}`,
              name: r.title,
            })),
          },
        }}
      />

      <ProgramHero
        eyebrow="Careers at NHB"
        title="Build things that matter, with people who care *how they're built.*"
        lede={
          <p>
            NHB is a small, engineering-led team building AI systems, software and digital products for businesses and
            startups. We hire people who like ownership, write things down and want their work to run in production.
          </p>
        }
        primary={{ href: "#roles", label: "See open roles" }}
        secondary={{ href: "#open-application", label: "Send an open application" }}
        aside={
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/12 bg-ink/12">
            {[
              { k: "Open roles", v: String(roles.length) },
              { k: "Teams hiring", v: String(departments.length) },
              { k: "Work modes", v: workModes.join(" & ") },
              { k: "Open applications", v: "Always" },
            ].map((s) => (
              <div key={s.k} className="bg-white p-5 sm:p-6">
                <dt className="t-arcade text-[11px] text-muted">{s.k}</dt>
                <dd className="t-pixel mt-2 text-[clamp(1.4rem,1.1rem+1vw,2rem)] font-semibold">{s.v}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* 01 Team */}
      <section aria-labelledby="team-values-title" className="relative overflow-hidden py-20 lg:py-28">
        <PixelPteroHover scale={2} className="top-16 right-[8%] hidden lg:block" />
        <Container>
          <SectionHeading
            index="01"
            label="Who we are"
            title="A small team that *owns what it ships.*"
            titleId="team-values-title"
            lede="Engineers, designers and builders who work across AI, product, QA and automation. Here's what we expect of each other."
          />
          <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {teamValues.map((v, i) => (
              <li key={v.title} data-reveal data-delay={String(i + 1)} className="bg-ivory p-6 sm:p-7">
                <span className="t-arcade text-[11px] text-muted">0{i + 1}</span>
                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.025em]">{v.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{v.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 02 Roles */}
      <section id="roles" aria-labelledby="roles-title" className="border-t border-line bg-ivory-2/60 py-20 lg:py-28">
        <Container>
          <SectionHeading
            index="02"
            label="Open roles"
            title="Find your *role.*"
            titleId="roles-title"
            lede="Filter by team, type and work mode. Every role page has the full description and an apply button."
          />
          <div className="mt-12 lg:mt-16">
            <RoleBoard />
          </div>
        </Container>
      </section>

      {/* 03 Perks */}
      <section aria-labelledby="perks-title" className="py-20 lg:py-28">
        <Container>
          <SectionHeading index="03" label="What we offer" title="Work that *grows you.*" titleId="perks-title" />
          <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {perks.map((p, i) => (
              <li key={p.title} data-reveal data-delay={String((i % 3) + 1)} className="pixel-corners rounded-3xl border border-ink/10 bg-white p-7">
                <span aria-hidden className="grid size-9 place-items-center rounded-lg bg-sun">
                  <Check className="size-4" />
                </span>
                <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.025em]">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{p.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 04 Founders */}
      <section aria-label="Founders" className="border-t border-line py-20 lg:py-28">
        <Container>
          <FounderPanel eyebrow="04 · About the founders" title={`Meet ${founderNames}.`}>
            <p>
              NHB is led by its co-founders, {founderNames}, engineers who still design systems and review code. You&apos;ll
              work with them directly, from your first conversation to the work you ship.
            </p>
            <p>
              They hire for ownership and curiosity over credentials. If you&apos;ve built something you&apos;re proud of,
              that matters more than where you studied.
            </p>
          </FounderPanel>
        </Container>
      </section>

      {/* 05 Hiring process */}
      <section aria-labelledby="hiring-title" className="border-t border-line bg-ivory-2/60 py-20 lg:py-28">
        <Container>
          <SectionHeading index="05" label="How we hire" title="Short, clear and *respectful of your time.*" titleId="hiring-title" />
          <Steps steps={hiringSteps} className="mt-14 lg:mt-20" />
        </Container>
      </section>

      {/* 06 Open application */}
      <section id="open-application" aria-labelledby="open-app-title" className="bg-ink py-20 text-ivory lg:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <SectionHeading
              index="06"
              label="Open application"
              title="Don't fit a job description? *Pitch us the role.*"
              titleId="open-app-title"
              tone="dark"
              titleClassName="lg:col-span-12"
            />
            <p data-reveal className="t-lede mt-6 text-ivory/75">
              Some of the best people we could hire won&apos;t match a listing. Send your resume and tell us what you&apos;d
              build or own at NHB. If your talent is a strong fit, we&apos;ll consider creating a role around it.
            </p>
          </div>
          <div data-reveal data-delay="1" className="lg:col-span-5 lg:col-start-8">
            <div className="rounded-3xl border border-ivory/15 bg-ink-2 p-7 sm:p-8">
              <p className="t-arcade text-[11px] text-sun">What to send</p>
              <ul className="mt-4 space-y-3 text-[15px] text-ivory/85">
                {["Your resume (PDF)", "Links to work you've shipped", "What you'd like to build or own", "Full-time, internship or contract"].map((x) => (
                  <li key={x} className="flex gap-3">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-sun" />
                    {x}
                  </li>
                ))}
              </ul>
              <a
                href={openApplication.href}
                className="pixel-press mt-8 flex h-14 items-center justify-center gap-2.5 rounded-full bg-sun px-6 text-[15px] font-medium text-ink"
              >
                <Mail aria-hidden className="size-4" /> Email your resume
              </a>
              <p className="mt-4 flex items-center justify-center gap-2 text-[13px] text-ivory/60">
                <Copy aria-hidden className="size-3.5" /> Or write to <span className="font-medium text-ivory">{openApplication.email}</span>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Faq index="07" title="Careers *questions.*" items={careersFaq} />

      <ProgramCta
        current="careers"
        title="Good things are built together. Come build with us."
        primary={{ href: "#roles", label: "See open roles" }}
        secondary={{ href: "#open-application", label: "Send an open application" }}
      />
    </main>
  );
}
