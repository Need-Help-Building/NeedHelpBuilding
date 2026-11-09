import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "../services-data";
import { toTitle } from "../title";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, clip, pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service not found",
    };
  }

  return pageMetadata({
    title: toTitle(service.title),
    description: clip(service.shortDesc),
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug);
  const name = toTitle(service.title);
  const url = `${site.url}/services/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    url,
    name,
    serviceType: name,
    category: service.category,
    description: service.overview,
    provider: { "@id": `${site.url}/#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} deliverables`,
      itemListElement: service.whatWeDo.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: clip(item, 110) },
      })),
    },
  };

  return (
    <main id="main" className="min-h-screen w-full bg-black text-white flex flex-col items-center selection:bg-white selection:text-black">
      <JsonLd data={serviceJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          ["Home", "/"],
          [name, `/services/${service.slug}`],
        ])}
      />
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 pt-20 pb-20 border-b border-neutral-800 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs uppercase tracking-widest font-mono border border-neutral-700 px-3 py-1 text-neutral-400">
            {service.badge}
          </span>
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
            {service.category}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl">
          {service.title}
        </h1>

        <p className="text-xl text-neutral-400 font-light max-w-3xl leading-relaxed mb-10">
          {service.tagline}
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="mailto:hello@needhelpbuilding.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
          >
            Discuss Your Architecture
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-neutral-800 text-white font-medium text-sm hover:border-white transition-colors"
          >
            View Capabilities
          </a>
        </div>
      </section>

      {/*
        Metrics row and "Client Verification" testimonial intentionally not rendered:
        the figures and testimonials in services-data.ts are unverified (several attribute
        quotes to people/companies NHB cannot substantiate). Re-enable only with verified data.
      */}

      {/* Overview & What We Do */}
      <section id="capabilities" className="w-full max-w-6xl px-6 py-24 border-b border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
              The Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Engineering with Production Discipline.
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              {service.overview}
            </p>

            <div className="pt-6 border-t border-neutral-900 space-y-3">
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                Technologies & Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs border border-neutral-800 text-neutral-300 px-3 py-1 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
              Deliverables & Core Capabilities
            </span>
            <div className="divide-y divide-neutral-900 border-t border-b border-neutral-900">
              {service.whatWeDo.map((item, idx) => (
                <div key={idx} className="py-5 flex items-start gap-4">
                  <span className="text-xs font-mono text-neutral-500 pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base text-neutral-300 leading-relaxed font-normal">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="w-full max-w-6xl px-6 py-24 border-b border-neutral-800">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
            How We Execute
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Execution Framework
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.howWeDoIt.map((step, idx) => (
            <div key={idx} className="border border-neutral-800 p-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-mono text-neutral-500">
                  STEP // {step.step}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Services Grid */}
      <section className="w-full max-w-6xl px-6 py-20 border-b border-neutral-800">
        <div className="mb-10 flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
            Explore Other Disciplines
          </span>
          <Link href="/#practices" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white">
            View All Practices →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.slice(0, 3).map((other, idx) => (
            <Link
              key={idx}
              href={`/services/${other.slug}`}
              className="border border-neutral-800 p-6 hover:border-neutral-500 transition-colors group block"
            >
              <div className="text-[11px] font-mono text-neutral-500 uppercase mb-2">
                {other.category}
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-neutral-300 mb-2">
                {other.title}
              </h3>
              <p className="text-xs text-neutral-400 line-clamp-2">
                {other.shortDesc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#245bff] py-24 text-white flex justify-center">
        <div className="w-full max-w-6xl px-6 space-y-6">
          <span className="text-xs uppercase tracking-widest text-white/80 font-mono">
            Start An Engagement
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl">
            Ready to Build With Production Rigor?
          </h2>
          <p className="text-lg text-white/85 leading-relaxed max-w-2xl">
            Direct communication with senior engineers and architects. Zero vendor lock-in, clean intellectual property ownership, and high execution speed.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="mailto:hello@needhelpbuilding.com"
              className="px-6 py-3.5 bg-white text-black font-semibold text-sm hover:bg-neutral-100 transition-colors shadow-lg"
            >
              Schedule an Architecture Call
            </a>
            <a
              href="mailto:hello@needhelpbuilding.com"
              className="px-6 py-3.5 border border-white/40 text-white font-medium text-sm hover:border-white hover:bg-white/10 transition-colors"
            >
              hello@needhelpbuilding.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
