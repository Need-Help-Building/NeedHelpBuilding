import Link from "next/link";
import { ArrowLeft, Bot, PhoneCall, Layers, Zap, ArrowRight, ShieldCheck, Cpu, Palette } from "lucide-react";

export const metadata = {
  title: "Services & Capabilities | future automations",
  description: "Enterprise capabilities across brand systems, autonomous AI agents, conversational voice infrastructure, and autonomous web platforms.",
};

export default function ServicesPage() {
  const capabilities = [
    {
      icon: Palette,
      title: "Brand Systems & Digital Identity",
      headline: "Crafting distinctive stories and digital design languages that elevate tech ventures",
      features: [
        "Digital-first brand architecture, design tokens, and modular visual assets",
        "High-fidelity UI/UX design systems, rapid interactive prototyping & user research",
        "Cross-channel creative direction and conversion-engineered typography",
        "Interactive web animation, 3D/GL motion principles, and asset generation"
      ],
      deliverable: "Complete brand guidelines, design system tokens, and high-fidelity prototype suite."
    },
    {
      icon: Layers,
      title: "Autonomous Web & SaaS Systems",
      headline: "High-conversion digital storefronts and web apps (YourStoreHere architecture)",
      features: [
        "Dynamic real-time layout synthesis and AI-personalized user funnels",
        "Sub-100ms edge rendering with Next.js Turbopack & Vercel edge networks",
        "Integrated checkout pipelines with Stripe, LemonSqueezy, or custom gateways",
        "Automatic SEO generation and dynamic content optimization"
      ],
      deliverable: "Production-ready web application with automated data pipelines."
    },
    {
      icon: PhoneCall,
      title: "Conversational Voice Engineering",
      headline: "Sub-300ms speech-to-speech agents inspired by Caller.work",
      features: [
        "Ultra-low latency streaming voice pipelines over WebRTC & SIP",
        "Realistic human cadence with interruption handling and conversational tone",
        "Automated outbound qualification, inbound triage, and schedule bookings",
        "Direct synchronization with Salesforce, HubSpot, and bespoke CRMs"
      ],
      deliverable: "Scalable telephonic lines with 24/7 autonomous voice dispatcher."
    },
    {
      icon: Zap,
      title: "Enterprise Consulting & AI Training",
      headline: "Audit manual friction points and train internal teams on autonomous pipelines",
      features: [
        "Holistic operational workflow audits to pinpoint maximum ROI opportunities",
        "Multi-agent LangGraph orchestrations with built-in human-in-the-loop approvals",
        "High-throughput webhook consumers with automatic retry and idempotency",
        "Hands-on engineering workshops and operational runbooks for internal teams"
      ],
      deliverable: "Architectural blueprint, integration playbook, and team training runbooks."
    }
  ];

  return (
    <div className="min-h-screen bg-[#EDEDF0] text-[#0A0A0C] font-sans selection:bg-black selection:text-white">
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
            [ CAPABILITIES & SERVICES // 2026 ]
          </div>
        </div>
      </header>

      <main className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-12 pb-24">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-2xs text-[11px] font-mono tracking-wider uppercase text-gray-600 mb-4">
            <Cpu size={13} className="text-blue-600" />
            <span>Core Disciplines</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#0A0A0C] mb-6">
            Autonomous software engineered for compounding speed
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We don&apos;t build fragile scripts. We engineer resilient, production-hardened autonomous systems that free your team to focus on leverage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl hud-glass-card p-8 sm:p-10 border border-white/80 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6 shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#0A0A0C] mb-2">
                    {cap.title}
                  </h2>
                  <p className="text-sm font-medium text-blue-600 mb-6 font-mono">
                    {cap.headline}
                  </p>

                  <div className="space-y-3 mb-8">
                    {cap.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0"></div>
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200/70">
                  <div className="text-xs text-gray-500 font-mono mb-1">STANDARD OUTCOME</div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-4">{cap.deliverable}</div>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-black hover:underline"
                  >
                    <span>Request technical consultation</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 rounded-3xl bg-black text-white text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl sm:text-4xl font-normal mb-3">
            Want to audit where AI can generate the highest ROI?
          </h3>
          <p className="text-gray-400 text-sm max-w-lg mb-8">
            Schedule a 30-minute operational audit with our systems engineering team.
          </p>
          <Link
            href="/#contact"
            className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Book Technical Audit
          </Link>
        </div>
      </main>
    </div>
  );
}
