import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import TallyEmbed from "@/components/careers/TallyEmbed";
import { getRole, openRoles, tallyEmbedUrl } from "@/content/careers";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

/** Only roles with a Tally form get an apply page; email-only roles apply from the role page. */
export function generateStaticParams() {
  return openRoles.filter((r) => r.applyUrl).map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return { title: "Role not found" };
  return {
    ...pageMetadata({
      title: `Apply: ${role.title}`,
      description: `Application form for the ${role.title} role at NeedHelpBuilding.`,
      path: `/careers/${role.slug}/apply`,
    }),
    // The role page is the one to rank (it carries the JobPosting data); the form page stays out of the index.
    robots: { index: false, follow: true },
  };
}

export default async function ApplyPage({ params }: Props) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role?.applyUrl) notFound();

  return (
    <main id="main">
      <section
        aria-labelledby="apply-title"
        className="relative overflow-hidden border-b border-line"
      >
        <div
          aria-hidden
          className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_85%)]"
        />
        <Container className="relative pt-10 pb-10 lg:pt-14 lg:pb-12">
          <Link
            href={`/careers/${role.slug}`}
            className="inline-flex items-center gap-2 text-[14px] text-muted hover:text-ink"
          >
            <ArrowLeft aria-hidden className="size-4" /> Role description
          </Link>
          <p className="t-arcade mt-8 text-[12px] text-muted">
            Application · {role.department}
          </p>
          <h1
            id="apply-title"
            className="t-pixel mt-4 text-[clamp(2rem,1.2rem+2.6vw,3.25rem)] leading-[1.08] font-semibold"
          >
            {role.title}
          </h1>
          <p className="mt-4 text-[15px] text-muted">
            {role.type} · {role.workMode} · {role.location}
          </p>
        </Container>
      </section>

      <section
        aria-label="Application form"
        className="bg-ivory-2/60 py-10 lg:py-14"
      >
        <Container>
          <div className="max-w-3xl">
            <div className="overflow-hidden rounded-3xl border border-ink/12 bg-white p-2 sm:p-4">
              <TallyEmbed
                src={tallyEmbedUrl(role.applyUrl)}
                title={`Application form: ${role.title}`}
              />
            </div>
            <a
              href={role.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-1.5 text-[13px] text-muted hover:text-ink"
            >
              Form not loading? Open it on Tally{" "}
              <ArrowUpRight aria-hidden className="size-3.5" />
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
