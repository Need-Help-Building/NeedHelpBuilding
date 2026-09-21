import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowUpRight, Cpu, Layers, PhoneCall, Sparkles } from "lucide-react";

export const metadata = {
  title: "Case Studies & Work | future automations",
  description: "Explore flagship AI platforms engineered by future automations, including yourstorehere.vercel.app and caller.work.",
};

export default function WorkPage() {
  const caseStudies = [
    {
      id: "yourstorehere",
      title: "YourStoreHere",
      subtitle: "Next-Gen Autonomous AI E-Commerce Architecture",
      url: "https://yourstorehere.vercel.app",
      domain: "yourstorehere.vercel.app",
      tags: ["Autonomous Agents", "Next.js", "Dynamic Rendering", "Vercel"],
      summary: "A zero-configuration autonomous storefront engine that dynamically synthesizes inventory layouts, generates conversion-optimized copy, and personalizes client purchasing funnels on the fly.",
      challenge: "Legacy e-commerce required weeks of manual SKU entry, catalog tagging, layout restructuring, and high maintenance overhead.",
      solution: "Engineered an AI agent orchestration system that builds dynamic, live-rendering storefronts instantly from raw product feeds with automated SEO and checkout checkout flows.",
      results: [
        { metric: "4.2x", label: "Higher checkout conversion" },
        { metric: "<80ms", label: "Dynamic catalog rendering latency" },
        { metric: "0 hrs", label: "Manual SKU setup needed" },
      ]
    },
    {
      id: "caller-work",
      title: "Caller.work",
      subtitle: "Real-Time Conversational AI Voice Infrastructure",
      url: "https://caller.work",
      domain: "caller.work",
      tags: ["Voice AI", "Sub-300ms WebRTC", "Enterprise Telephony", "CRM Sync"],
      summary: "Enterprise-grade conversational voice agent infrastructure designed to execute low-latency inbound & outbound voice operations, automated qualification, and live CRM synchronization.",
      challenge: "High cost, variable agent performance, and delayed call response times leading to 45% missed qualified leads during peak windows.",
      solution: "Implemented an end-to-end voice pipeline utilizing custom speech-to-speech models and SIP trunking with sub-300ms latency, enabling natural interruptions and complex business reasoning.",
      results: [
        { metric: "<300ms", label: "Speech-to-speech response latency" },
        { metric: "99.2%", label: "Intent recognition accuracy" },
        { metric: "24/7", label: "Continuous autonomous line availability" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#EDEDF0] text-[#0A0A0C] font-sans selection:bg-black selection:text-white">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-10 pb-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
          <div className="text-xs font-mono uppercase text-gray-500">
            [ PORTFOLIO ARCHIVE // 2026 ]
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-12 pb-24">
        {/* Page Hero */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-2xs text-[11px] font-mono tracking-wider uppercase text-gray-600 mb-4">
            <Cpu size={13} className="text-blue-600" />
            <span>Engineering Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#0A0A0C] mb-6">
            Autonomous systems deployed in the real world
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            Deep-dive case studies on how our intelligent workflows, autonomous commerce engines, and voice agents power modern enterprises.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="rounded-3xl hud-glass-card p-8 sm:p-12 border border-white/80 shadow-md transition-all hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-gray-200/70">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                      Featured Deployment
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#0A0A0C]">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">
                    {study.subtitle}
                  </p>
                </div>
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs sm:text-sm font-medium hover:bg-gray-800 transition-all self-start lg:self-auto shadow-sm"
                >
                  <span>Launch {study.domain}</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Grid: Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-b border-gray-200/70">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-3">
                    The Bottleneck
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-3">
                    Architectural Solution
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Metrics row */}
              <div className="pt-8">
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold mb-6">
                  Verified Production Metrics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {study.results.map((res, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-white/80 border border-gray-200/70 shadow-2xs">
                      <div className="text-3xl font-bold font-mono text-[#0A0A0C]">
                        {res.metric}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 font-medium">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 rounded-3xl bg-black text-white text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl sm:text-4xl font-normal mb-3">
            Have a project or integration in mind?
          </h3>
          <p className="text-gray-400 text-sm max-w-lg mb-8">
            We partner with ambitious teams to deliver customized automations, voice pipelines, and high-conversion software.
          </p>
          <Link
            href="/#contact"
            className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </main>
    </div>
  );
}
