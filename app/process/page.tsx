import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Sparkles } from "lucide-react";

export const metadata = {
  title: "Delivery Process & Methodology | future automations",
  description: "How future automations designs, engineers, and deploys production-grade AI systems in 14 days.",
};

export default function ProcessPage() {
  const steps = [
    {
      num: "01",
      name: "ANALYZE & AUDIT",
      duration: "Days 1 - 3",
      title: "Deconstruct the operational bottlenecks",
      desc: "We perform a deep architecture and workflow analysis of your current manual processes, APIs, and data structures to identify the highest-leverage automation targets.",
      outputs: ["Systems Integration Matrix", "Target Architecture Blueprints", "Quantified ROI Model"]
    },
    {
      num: "02",
      name: "AUTOMATE & PROTOTYPE",
      duration: "Days 4 - 7",
      title: "Rapid proof of execution",
      desc: "We engineer working agent loops, data transformation adapters, and test telephony/voice pipelines (like Caller.work) against real company inputs.",
      outputs: ["Interactive Sandbox", "Error Handling & Idempotency Rules", "Model Latency Benchmarks"]
    },
    {
      num: "03",
      name: "SCALE & HARDEN",
      duration: "Days 8 - 11",
      title: "Enterprise fault tolerance",
      desc: "We stress-test concurrency, implement guardrails and validation layers, and wire direct synchronization into your production databases and CRMs.",
      outputs: ["Regression Test Suites", "Permission Security Boundary", "Failover & Retry Handlers"]
    },
    {
      num: "04",
      name: "OPTIMIZE & TUNE",
      duration: "Days 12 - 13",
      title: "Cost and latency reduction",
      desc: "Fine-tuning prompt tokens, model routing, caching strategies, and voice audio buffers to achieve sub-300ms responsiveness with minimal compute costs.",
      outputs: ["Telemetry & Log Dashboard", "Cost Optimization Report", "Operational Runbooks"]
    },
    {
      num: "05",
      name: "DEPLOY & MONITOR",
      duration: "Day 14",
      title: "Production cutover & 24/7 telemetry",
      desc: "We launch to live production traffic, provide team onboarding, and activate real-time performance monitoring alerts.",
      outputs: ["Production Deployment", "Team Training Session", "30-Day Managed Guarantee"]
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
            [ DELIVERY BLUEPRINT // 2026 ]
          </div>
        </div>
      </header>

      <main className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-12 pb-24">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200 shadow-2xs text-[11px] font-mono tracking-wider uppercase text-gray-600 mb-4">
            <Sparkles size={13} className="text-amber-500" />
            <span>Systematic Execution</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#0A0A0C] mb-6">
            From architecture to production in 14 days
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Our systematic engineering framework guarantees predictable delivery, hardened security, and immediate operational leverage.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="rounded-3xl hud-glass-card p-8 sm:p-10 border border-white/80 shadow-md relative"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200/70">
                <div className="flex items-center gap-4">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-black">
                    {step.num}
                  </span>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold block">
                      {step.name}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-[#0A0A0C]">
                      {step.title}
                    </h2>
                  </div>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 text-xs font-mono text-gray-700 font-medium self-start md:self-auto">
                  {step.duration}
                </div>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                {step.desc}
              </p>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Key Deliverables
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {step.outputs.map((out, oIdx) => (
                    <span
                      key={oIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-gray-200 text-xs font-medium text-gray-800"
                    >
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      <span>{out}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 rounded-3xl bg-black text-white text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl sm:text-4xl font-normal mb-3">
            Ready to initiate your 14-day sprint?
          </h3>
          <p className="text-gray-400 text-sm max-w-lg mb-8">
            Tell us about your systems and we will return an architectural roadmap in under 24 hours.
          </p>
          <Link
            href="/#contact"
            className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Start Your Build
          </Link>
        </div>
      </main>
    </div>
  );
}
