import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/primitives";
import { applyHref, getRole, openApplication, roles } from "@/content/careers";
import { site } from "@/content/site";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, clip, pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return { title: "Role not found" };
  return pageMetadata({
    title: `${role.title} | Careers`,
    description: clip(`${role.summary} ${role.type}, ${role.workMode.toLowerCase()} (${role.location}). Apply to NeedHelpBuilding.`),
    path: `/careers/${role.slug}`,
  });
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="t-arcade text-[12px] text-muted">{title}</h2>
      <ul className="mt-4 border-t border-ink/12">
        {items.map((i) => (
          <li key={i} className="flex gap-3 border-b border-ink/10 py-3 text-[16px] leading-snug">
            <span aria-hidden className="mt-[9px] size-1.5 shrink-0 bg-ink" />
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function RolePage({ params }: Props) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();
  const apply = applyHref(role);
  const tally = role.applyUrl;

  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([["Home", "/"], ["Careers", "/careers"], [role.title, `/careers/${role.slug}`]])} />
      {/* JobPosting data only for real roles, so placeholder listings never appear in job search. */}
      {!role.mock && role.datePosted && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: role.title,
            description: `<p>${role.about}</p><ul>${role.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>`,
            datePosted: role.datePosted,
            employmentType: role.type === "Full-time" ? "FULL_TIME" : role.type === "Internship" ? "INTERN" : "CONTRACTOR",
            hiringOrganization: { "@type": "Organization", name: site.name, sameAs: site.url, logo: `${site.url}/logo.png` },
            jobLocationType: role.workMode === "Remote" ? "TELECOMMUTE" : undefined,
            applicantLocationRequirements: { "@type": "Country", name: role.location === "Worldwide" ? "Worldwide" : role.location },
            directApply: !!role.applyUrl,
          }}
        />
      )}

      <section aria-labelledby="role-title" className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_85%)]" />
        <Container className="relative pt-10 pb-14 lg:pt-14 lg:pb-20">
          <Link href="/careers#roles" className="inline-flex items-center gap-2 text-[14px] text-muted hover:text-ink">
            <ArrowLeft aria-hidden className="size-4" /> All roles
          </Link>
          <p className="t-arcade mt-10 text-[12px] text-muted">{role.department}</p>
          <h1 id="role-title" className="t-pixel mt-4 max-w-[20ch] text-[clamp(2.25rem,1.1rem+3.6vw,4.25rem)] leading-[1.08] font-semibold">
            {role.title}
          </h1>
          <p className="t-lede mt-6 max-w-2xl text-muted">{role.summary}</p>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Role details">
            {[role.type, `${role.workMode} · ${role.location}`, role.experience].map((t) => (
              <li key={t} className="rounded-full border border-ink/15 bg-white px-3.5 py-1.5 text-[14px]">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={tally ? "#apply" : apply} size="lg" variant="ink">
              Apply for this role
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section aria-label="Role description" className="py-16 lg:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="t-arcade text-[12px] text-muted">About the role</h2>
            <p className="mt-4 text-[clamp(1.15rem,1.05rem+0.4vw,1.4rem)] leading-relaxed">{role.about}</p>
            <List title="What you'll do" items={role.responsibilities} />
            <List title="What you'll bring" items={role.requirements} />
            {role.niceToHave.length > 0 && <List title="Nice to have" items={role.niceToHave} />}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="sticky top-24 rounded-3xl border border-ink/12 bg-white p-6 sm:p-7">
              <dl className="space-y-4 text-[14.5px]">
                {[
                  ["Team", role.department],
                  ["Type", role.type],
                  ["Work mode", role.workMode],
                  ["Location", role.location],
                  ["Experience", role.experience],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-ink/8 pb-3">
                    <dt className="text-muted">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <ButtonLink href={tally ? "#apply" : apply} variant="sun" className="mt-6 w-full justify-between">
                Apply now
              </ButtonLink>
              <p className="mt-4 text-[13px] leading-snug text-muted">
                Not quite the right fit?{" "}
                <Link href="/careers#open-application" className="font-medium text-ink underline underline-offset-4">
                  Send an open application
                </Link>
                .
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <section id="apply" aria-labelledby="apply-title" className="border-t border-line bg-ivory-2/60 py-16 lg:py-24">
        <Container className="max-w-3xl">
          <h2 id="apply-title" className="t-h2-pixel">
            Apply for this role
          </h2>
          {tally ? (
            <div className="mt-8 overflow-hidden rounded-3xl border border-ink/12 bg-white">
              <iframe src={tally} title={`Application form: ${role.title}`} loading="lazy" className="h-[820px] w-full border-0" />
              <a href={tally} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 border-t border-ink/10 py-3 text-[13px] text-muted hover:text-ink">
                Open the form in a new tab <ArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-ink/12 bg-white p-7 sm:p-9">
              <p className="text-[16px] leading-relaxed text-ink/85">
                Send your resume and a few lines about why this role, and we&apos;ll reply personally. Your email opens with
                the role already filled in; attach your resume (PDF) before sending.
              </p>
              <a href={apply} className="pixel-press mt-6 inline-flex h-14 items-center gap-2.5 rounded-full bg-ink px-6 text-[15px] font-medium text-ivory">
                <Mail aria-hidden className="size-4" /> Email your application
              </a>
              <p className="mt-4 text-[13.5px] text-muted">
                Or write to <span className="font-medium text-ink">{openApplication.email}</span> with the role in the subject.
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
