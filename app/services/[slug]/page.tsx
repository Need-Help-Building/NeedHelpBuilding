import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES_DATA, ServiceItem } from "../services-data";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

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
      title: "Service Not Found | NEED HELP BUILDING?",
    };
  }

  return {
    title: `${service.title} | NEED HELP BUILDING?`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | NEED HELP BUILDING?`,
      description: service.shortDesc,
      url: `https://needhelpbuilding.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug);

  return (
    <main className="min-h-screen w-full bg-[#0c0c0d] text-white flex flex-col items-center selection:bg-[#fbda03] selection:text-black">
      {/* ============================================================ */}
      {/* TOP COMPACT HEADER / BREADCRUMB                              */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-50 w-full bg-[#0c0c0d]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center group cursor-pointer select-none"
            aria-label="Back to home"
          >
            <span className="font-anton text-white text-xl sm:text-2xl tracking-tight uppercase group-hover:text-[#fbda03] transition-colors">
              NEED HELP BUILDING<span className="text-[#fbda03]">?</span>
            </span>
          </Link>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="text-xs font-mono font-bold tracking-widest text-[#fbda03] uppercase hidden sm:inline">
            SERVICES / {service.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-anton text-xs sm:text-sm uppercase tracking-wider text-white hover:text-[#fbda03] border border-white/20 px-3 py-1.5 transition-colors"
          >
            ← ALL SERVICES
          </Link>
          <a
            href="https://wa.me/919219061093?text=Hi%20NeedHelpBuilding%20team%2C%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="bg-[#fbda03] text-black border-[2px] border-black px-4 py-1.5 font-anton text-xs sm:text-sm uppercase tracking-wider hover:bg-white transition-colors"
          >
            BOOK A CALL
          </a>
        </div>
      </header>

      {/* ============================================================ */}
      {/* SERVICE HERO SECTION                                         */}
      {/* ============================================================ */}
      <section className="relative w-full max-w-7xl px-4 sm:px-8 pt-12 sm:pt-20 pb-16 flex flex-col gap-8 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-[#fbda03] text-black font-anton text-xs sm:text-sm px-3 py-1 border-[2px] border-black uppercase tracking-wider">
            {service.badge}
          </span>
          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
            CATEGORY // {service.category}
          </span>
        </div>

        <h1 className="font-anton text-4xl xs:text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.92] max-w-5xl">
          {service.title}
        </h1>

        <p className="text-[#fbda03] font-anton text-xl sm:text-3xl max-w-4xl tracking-wide uppercase leading-tight">
          {service.tagline}
        </p>

        <p className="text-gray-300 text-base sm:text-xl font-medium max-w-4xl leading-relaxed">
          {service.overview}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="https://wa.me/919219061093?text=Hi%20NeedHelpBuilding%20team%2C%20I%20want%20to%20discuss%20a%20project%20for%20this%20service."
            target="_blank"
            rel="noreferrer"
            className="bg-[#fbda03] text-black border-[3.5px] border-black px-8 py-4 font-anton text-lg sm:text-xl uppercase tracking-wider shadow-[5px_5px_0px_0px_rgba(255,255,255,0.9)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            INITIATE THIS PROJECT NOW
          </a>
          <a
            href="mailto:hello@needhelpbuilding.com"
            className="border-[3px] border-white/40 hover:border-white text-white px-6 py-3.5 font-anton text-base sm:text-lg uppercase tracking-wider transition-colors"
          >
            EMAIL REQUIREMENTS →
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* KEY NUMERICAL PERFORMANCE BENCHMARKS (METRICS)               */}
      {/* ============================================================ */}
      <section className="w-full max-w-7xl px-4 sm:px-8 py-16 border-b border-white/10">
        <div className="flex flex-col gap-2 mb-8">
          <span className="font-mono text-xs font-black tracking-widest text-[#fbda03] uppercase">
            NUMERICAL BENCHMARKS & VERIFIED OUTCOMES
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight">
            PROVEN IN PRODUCTION
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-[#18181b] border-[3px] border-black p-6 shadow-[5px_5px_0px_0px_#fbda03] flex flex-col justify-between"
            >
              <span className="font-mono text-xs text-gray-400 font-bold uppercase tracking-wider">
                {metric.label}
              </span>
              <div className="my-4 font-anton text-4xl sm:text-5xl text-[#fbda03] leading-none">
                {metric.value}
              </div>
              <span className="text-xs text-gray-300 font-medium">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION: WHAT WE DELIVER & HOW WE DO IT                      */}
      {/* ============================================================ */}
      <section className="w-full max-w-7xl px-4 sm:px-8 py-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column: What We Do */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="font-mono text-xs font-black tracking-widest text-[#fbda03] uppercase">
              DELIVERABLES
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight mt-1">
              WHAT WE DO
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {service.whatWeDo.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#18181b] border-[2px] border-white/20 p-4 flex items-start gap-4 hover:border-[#fbda03] transition-colors"
              >
                <div className="w-7 h-7 bg-[#fbda03] text-black font-anton flex items-center justify-center shrink-0 border border-black text-sm">
                  {idx + 1}
                </div>
                <p className="text-sm sm:text-base font-semibold text-gray-200 leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: How We Do It */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="font-mono text-xs font-black tracking-widest text-[#fbda03] uppercase">
              METHODOLOGY
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight mt-1">
              HOW WE DO IT
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {service.howWeDoIt.map((step, idx) => (
              <div
                key={idx}
                className="bg-white text-black border-[3.5px] border-black p-6 shadow-[6px_6px_0px_0px_#fbda03] flex flex-col gap-2"
              >
                <div className="flex items-center justify-between border-b-[2px] border-black/15 pb-2">
                  <span className="font-anton text-2xl text-black">
                    PHASE {step.step}
                  </span>
                  <span className="font-mono text-xs font-black uppercase text-black/60">
                    STAGE // 0{idx + 1}
                  </span>
                </div>
                <h3 className="font-anton text-xl uppercase mt-1 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm font-semibold text-black/85 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <span className="font-mono text-xs text-gray-400 font-bold uppercase tracking-wider block mb-3">
              PRIMARY TECHNOLOGIES & TOOLS:
            </span>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#18181b] border border-white/30 text-white font-mono text-xs px-3 py-1 font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DEDICATED VERIFIED TESTIMONIAL                               */}
      {/* ============================================================ */}
      <section className="w-full max-w-7xl px-4 sm:px-8 py-16 border-b border-white/10">
        <div className="bg-[#fbda03] text-black border-[4px] border-black p-6 sm:p-12 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.95)] flex flex-col gap-6">
          <div className="flex items-center justify-between border-b-[2.5px] border-black/25 pb-4">
            <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-black/80">
              VERIFIED CLIENT ENDORSEMENT // {service.title}
            </span>
            <span className="font-anton text-sm tracking-wider uppercase bg-black text-[#fbda03] px-3 py-1">
              5.0 ★★★★★
            </span>
          </div>

          <blockquote className="font-anton text-2xl sm:text-4xl lg:text-5xl uppercase leading-[1.05] tracking-tight text-black">
            &ldquo;{service.testimonial.quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4 pt-2">
            <div className="w-12 h-12 rounded-full bg-black text-[#fbda03] font-anton text-xl flex items-center justify-center border-[2px] border-black">
              {service.testimonial.avatarText}
            </div>
            <div>
              <div className="font-anton text-lg sm:text-xl uppercase tracking-wider text-black">
                {service.testimonial.author}
              </div>
              <div className="text-xs sm:text-sm font-mono font-bold text-black/80 uppercase">
                {service.testimonial.role} — {service.testimonial.company}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EXPLORE OTHER CORE SERVICES                                  */}
      {/* ============================================================ */}
      <section className="w-full max-w-7xl px-4 sm:px-8 py-16 border-b border-white/10 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono text-xs font-black tracking-widest text-[#fbda03] uppercase">
              LOOKING FOR MORE?
            </span>
            <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight mt-1">
              EXPLORE OTHER SERVICES
            </h2>
          </div>
          <Link
            href="/"
            className="font-anton text-sm uppercase tracking-wider text-[#fbda03] hover:underline hidden sm:inline"
          >
            VIEW ALL 9 CAPABILITIES →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherServices.slice(0, 4).map((other) => (
            <Link
              key={other.slug}
              href={`/services/${other.slug}`}
              className="bg-[#18181b] border-[2.5px] border-white/20 hover:border-[#fbda03] p-5 flex flex-col justify-between gap-3 group transition-all hover:-translate-y-1"
            >
              <div>
                <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">
                  {other.category}
                </span>
                <h3 className="font-anton text-xl text-white group-hover:text-[#fbda03] transition-colors leading-tight uppercase">
                  {other.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                  {other.shortDesc}
                </p>
              </div>
              <span className="font-anton text-xs text-[#fbda03] uppercase tracking-wider">
                EXPLORE SPECIFICS →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* DEDICATED BOTTOM ACTION BANNER                                */}
      {/* ============================================================ */}
      <footer className="w-full max-w-7xl px-4 sm:px-8 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-anton text-2xl sm:text-3xl uppercase tracking-tight">
            READY TO DEPLOY THIS FOR YOUR BUSINESS?
          </span>
          <p className="text-sm text-gray-400 font-medium mt-1">
            We review requirements within 4 business hours and start architecture immediately.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/"
            className="border-[2px] border-white/30 text-white px-5 py-2.5 font-anton text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            HOME
          </Link>
          <a
            href="https://wa.me/919219061093?text=Hi%20NeedHelpBuilding%20team%2C%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="bg-[#fbda03] text-black border-[3px] border-black px-6 py-2.5 font-anton text-sm sm:text-base uppercase tracking-wider shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            START ON WHATSAPP
          </a>
        </div>
      </footer>
    </main>
  );
}
