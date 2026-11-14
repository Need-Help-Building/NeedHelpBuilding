import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import FinalCta from "@/components/home/FinalCta";
import FounderPanel from "@/components/ecosystem/FounderPanel";
import ProgramHero from "@/components/ecosystem/ProgramHero";
import { serviceIcons } from "@/components/site/serviceIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartLink from "@/components/ui/SmartLink";
import { Container } from "@/components/ui/primitives";
import { differentiators, proofLedger, team } from "@/content/company";
import { serviceGroups } from "@/content/services";
import { site } from "@/content/site";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About NHB: Founders, Team & How We Work",
  description:
    "NeedHelpBuilding (NHB) is a digital product engineering and technology consulting company led by co-founders Divy Shukla and Suyash Shukla.",
  path: "/about",
});

const founderNames = team.founders.map((f) => f.name).join(" and ");

export default function AboutPage() {
  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([["Home", "/"], ["About", "/about"]])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${site.url}/about#page`,
          url: `${site.url}/about`,
          name: "About NeedHelpBuilding",
          mainEntity: { "@id": `${site.url}/#organization` },
          about: { "@id": `${site.url}/#organization` },
          hasPart: team.founders
            .filter((f) => f.name)
            .map((f) => ({
              "@type": "Person",
              name: f.name,
              jobTitle: f.role,
              worksFor: { "@id": `${site.url}/#organization` },
            })),
        }}
      />

      <ProgramHero
        eyebrow="About NHB"
        title="We help businesses make *better technology decisions.*"
        lede={
          <p>
            NeedHelpBuilding (NHB) is a digital product engineering and technology consulting company. We help businesses
            decide what to build, then design, engineer and run it: AI agents, automation, custom software, and web and
            mobile products. {site.supporting}
          </p>
        }
        primary={{ href: "/book", label: "Book a one-to-one meeting" }}
        secondary={{ href: "/#work", label: "See our work" }}
        aside={
          <dl className="rounded-3xl border border-ink/12 bg-white p-6 sm:p-7">
            {[
              ["Founders", founderNames],
              ["Practice areas", `${serviceGroups.length} under one roof`],
              ["In production", "Caller OS · YourStoreHere"],
              ["Contact", site.email],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 border-b border-ink/8 py-3.5 first:pt-0 last:border-0 last:pb-0">
                <dt className="t-arcade text-[11px] text-muted">{k}</dt>
                <dd className="text-[15.5px] font-semibold tracking-[-0.01em]">{v}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* 01 Founders */}
      <section id="team" aria-labelledby="founders-title" className="py-20 lg:py-28">
        <Container>
          <FounderPanel eyebrow="01 · The founders" title={`NHB is led by ${founderNames}.`}>
            <p>
              {team.founders[0]?.name} and {team.founders[1]?.name} co-founded NHB to give businesses an engineering partner
              that thinks before it builds. {team.statement}
            </p>
            <p>
              They lead every engagement personally, from the first conversation through architecture, delivery and the
              system running in production.
            </p>
          </FounderPanel>
          <h2 id="founders-title" className="sr-only">
            The founders
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {team.founders.map((f) => (
              <li key={f.name ?? "founder"} className="rounded-3xl border border-ink/12 bg-white p-6 sm:p-7">
                <p className="t-pixel text-[clamp(1.4rem,1.1rem+1vw,1.9rem)] font-bold">{f.name}</p>
                <p className="t-arcade mt-2 text-[11px] text-muted">{f.role}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 02 What we do */}
      <section aria-labelledby="what-title" className="border-t border-line bg-ivory-2/60 py-20 lg:py-28">
        <Container>
          <SectionHeading
            index="02"
            label="What we do"
            title="One team, *every discipline.*"
            titleId="what-title"
            lede="Strategy, design, engineering, QA and operations under one roof, so nothing gets lost between vendors."
          />
          <ul className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {serviceGroups.map((g) => {
              const Icon = serviceIcons[g.icon];
              const inner = (
                <>
                  <span className="grid size-10 place-items-center rounded-xl bg-ink text-sun">
                    <Icon aria-hidden className="size-4.5" />
                  </span>
                  <span className="mt-5 block text-[17px] font-semibold tracking-[-0.02em]">{g.title}</span>
                  <span className="mt-1.5 block text-[14.5px] leading-relaxed text-muted">{g.summary}</span>
                </>
              );
              return (
                <li key={g.id}>
                  {g.href ? (
                    <SmartLink href={g.href} className="pixel-corners block h-full rounded-2xl border border-ink/10 bg-ivory p-6 transition-colors hover:border-ink">
                      {inner}
                    </SmartLink>
                  ) : (
                    <div className="h-full rounded-2xl border border-ink/10 bg-ivory p-6">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* 03 How we work */}
      <section aria-labelledby="how-title" className="py-20 lg:py-28">
        <Container>
          <SectionHeading index="03" label="How we work" title="The practices *behind the work.*" titleId="how-title" />
          <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <li key={d.title} className="bg-ivory p-6 sm:p-7">
                <span className="t-arcade text-[11px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em]">{d.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{d.practice}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 04 Proof */}
      <section aria-labelledby="record-title" className="border-t border-line bg-ivory-2/60 py-20 lg:py-28">
        <Container>
          <SectionHeading index="04" label="Our record" title="Evidence you can *open and inspect.*" titleId="record-title" />
          <ul className="mt-12 border-t border-ink/12 lg:mt-16">
            {proofLedger.map((row) => (
              <li key={row.label} className="border-b border-ink/12">
                <SmartLink href={row.href ?? "/#work"} className="group grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                  <span className="t-arcade text-[11px] text-muted sm:col-span-3">{row.label}</span>
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

      {/* 05 Contact */}
      <section aria-labelledby="contact-details-title" className="py-20 lg:py-28">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading index="05" label="Contact" title="Talk to *the founders.*" titleId="contact-details-title" titleClassName="lg:col-span-12" />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {[
              { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
              { icon: Phone, label: "Phone", value: site.phone.display, href: `tel:${site.phone.e164}` },
              { icon: MessageCircle, label: "WhatsApp", value: site.phone.display, href: site.whatsapp },
              { icon: ArrowUpRight, label: "Instagram", value: "@needhelpbuilding", href: site.instagram },
            ].map((c) => (
              <li key={c.label}>
                <SmartLink href={c.href} className="flex h-full items-center gap-4 rounded-2xl border border-ink/12 bg-white p-5 transition-colors hover:border-ink">
                  <c.icon aria-hidden className="size-5 shrink-0" />
                  <span>
                    <span className="t-arcade block text-[11px] text-muted">{c.label}</span>
                    <span className="mt-1 block text-[15px] font-medium">{c.value}</span>
                  </span>
                </SmartLink>
              </li>
            ))}
            <li className="sm:col-span-2">
              <Link href="/careers" className="flex items-center justify-between rounded-2xl bg-ink p-5 text-ivory">
                <span>
                  <span className="t-arcade block text-[11px] text-sun">Join the team</span>
                  <span className="mt-1 block text-[15px] font-medium">See careers at NHB</span>
                </span>
                <ArrowUpRight aria-hidden className="size-5" />
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      <FinalCta />
    </main>
  );
}
