"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  Check, 
  ChevronRight, 
  Play,
  Layers,
  Radio,
  ExternalLink
} from "lucide-react";
import HeaderNav from "@/components/HeaderNav";

export default function HomePage() {
  const [activeWorkFilter, setActiveWorkFilter] = useState("ALL");
  const [activePracticeIndex, setActivePracticeIndex] = useState(0);

  const clientLogos = [
    { name: "Google" },
    { name: "Olive Garden" },
    { name: "Darden" },
    { name: "ICICI Bank" },
    { name: "Kingsley Gate" },
    { name: "Atsign" },
    { name: "SKF" },
    { name: "Thyrocare" },
    { name: "WeWork" },
    { name: "Goosehead" },
    { name: "MetroGhar" }
  ];

  const practices = [
    {
      num: "01",
      title: "AI & Intelligent Systems",
      desc: "From AI strategy to production-grade LLM integration, autonomous agents, and intelligent workflows — we take AI from experiment to enterprise reality.",
      tags: ["Agentic AI", "ML Model Development", "AI Pods", "Digital Transformation", "AI Strategies", "Production LLMs"]
    },
    {
      num: "02",
      title: "AI-Powered Product Engineering",
      desc: "From idea to prototype to scaled production — we build modern cloud, mobile, and web products at AI speed with elite engineering discipline.",
      tags: ["Prototype to Production", "AI Native Engineering", "Fractional Teams", "Code Quality", "Scaling MVP to Market"]
    },
    {
      num: "03",
      title: "Enterprise System Modernization",
      desc: "We re-architect monolithic legacy systems for AI-readiness, distributed scale, and lightning-fast developer velocity — then stay to evolve them.",
      tags: ["App Modernization", "Data & Integration", "Process Transformation", "Cloud Infrastructure", "Performance & Security"]
    },
    {
      num: "04",
      title: "Digital Customer Experience",
      desc: "We align engineering, UX architecture, and business KPIs so customer experiences build lifelong trust and compound value at scale.",
      tags: ["Discovery Strategy", "Digital Product Design", "Legacy UX Migration", "Agentic Experience Design", "Design Systems"]
    }
  ];

  const caseStudies = [
    {
      tag: "FINTECH & BANKING",
      category: "Fintech",
      title: "RBI Domain Migration For India’s Largest Private Bank",
      desc: "Executed a large-scale domain migration for Reserve Bank of India compliance, enabling one of India’s largest private banks to transition its digital infrastructure without disrupting live banking services.",
      stats: [
        { value: "99%", label: "Manual Effort Cut" },
        { value: "10,000", label: "Pages in 2 Mins" },
        { value: "85%+", label: "Accuracy" }
      ],
      slug: "full-stack-web-development"
    },
    {
      tag: "HEALTHCARE",
      category: "Healthcare",
      title: "Healthcare SaaS Platform",
      desc: "Modernized onboarding workflows by introducing AI-driven automation and optimizing backend pipelines, reducing friction in doctor onboarding and improving operational clinical efficiency.",
      stats: [
        { value: "35%", label: "Doctor Efficiency" },
        { value: "40%", label: "Time Reduction" },
        { value: "Real-Time", label: "Care Sync" }
      ],
      slug: "software-development"
    },
    {
      tag: "REAL ESTATE",
      category: "Real Estate",
      title: "Property Inspection Platform",
      desc: "Built a scalable backend architecture supporting AI chatbots, QR-based workflows, and production-grade RAG pipelines to automate commercial property inspections and reporting.",
      stats: [
        { value: "80%", label: "Answer Accuracy" },
        { value: "90%", label: "Data Relevance" },
        { value: "2x", label: "Voice Field Queries" }
      ],
      slug: "application-development"
    },
    {
      tag: "COMMERCE & CLOUD",
      category: "Commerce",
      title: "Consumer Commerce Cloud Overhaul",
      desc: "Executed a comprehensive cloud infrastructure overhaul for this digital banking platform to eliminate over-provisioning and slash monthly cloud infrastructure costs.",
      stats: [
        { value: "60%", label: "Cloud Cost Cut" },
        { value: "$4,800", label: "Saved Monthly" },
        { value: "$57K+", label: "Annual Net Savings" }
      ],
      slug: "management-scaling"
    }
  ];

  const pointsOfView = [
    {
      num: "01",
      title: "We diagnose before we build.",
      desc: "Our assessments often reveal the most important problem isn't the one the client came to us with. This saves months of misdirected effort and significant wasted investment."
    },
    {
      num: "02",
      title: "AI-native engineering, grounded in 20 years of discipline.",
      desc: "We use AI to accelerate delivery. But we never ship without the testing, security, and architecture that production demands. Speed without rigor is just faster failure."
    },
    {
      num: "03",
      title: "We build tools the industry depends on.",
      desc: "NativeBase. gluestack-ui. React Native core contributions. Hundreds of thousands of developers trust our foundations."
    },
    {
      num: "04",
      title: "We stay. We don't ship and disappear.",
      desc: "550+ engagements. Clients who've been with us for 5+ years. We're invested in long-term success, not just the current project scope."
    }
  ];

  const industries = [
    { title: "Healthcare", desc: "Patient onboarding, EHR syncing, HIPAA compliant workflows" },
    { title: "Fintech & Banking", desc: "RBI compliance, microservices, secure transaction routing" },
    { title: "Food & Beverages", desc: "Order orchestration, omnichannel customer experiences" },
    { title: "Manufacturing", desc: "Supply chain observability, IoT integration, telemetry" },
    { title: "E-commerce", desc: "High-conversion checkout, inventory sync, headless stores" },
    { title: "Real Estate", desc: "Smart inspection platforms, automated tenant portals" },
    { title: "Media & OTT", desc: "Streaming infrastructure, content management systems" },
    { title: "Gaming", desc: "Real-time state engines, low-latency cross-platform clients" }
  ];

  const filteredCaseStudies = activeWorkFilter === "ALL"
    ? caseStudies
    : caseStudies.filter(c => c.category.toUpperCase() === activeWorkFilter.toUpperCase());

  return (
    <div className="min-h-screen bg-white text-[#111111] antialiased selection:bg-[#111111] selection:text-white">
      {/* Top Header */}
      <HeaderNav />

      <main>
        {/* ======================================================== */}
        {/* 1. HERO SECTION                                          */}
        {/* ======================================================== */}
        <section className="pt-20 pb-24 md:pt-32 md:pb-36 border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-8 max-w-4xl">
              Turning Ambitious <br />
              Technology Strategies <br />
              into Production-Grade Reality
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-12">
              From AI adoption to legacy modernization to product scale — we bring the thinking and the team to engineer systems that last.
            </p>

            <div>
              <a
                href="mailto:hello@needhelpbuilding.com"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#111111] text-white font-medium text-sm rounded hover:bg-neutral-800 transition-colors"
              >
                Schedule a Strategy Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. CLIENT LOGOS STRIP                                    */}
        {/* ======================================================== */}
        <section className="py-12 border-b border-neutral-200 bg-neutral-50/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-8 text-sm font-semibold tracking-wider uppercase text-neutral-400">
              {clientLogos.map((client, idx) => (
                <span key={idx} className="hover:text-neutral-900 transition-colors cursor-default">
                  {client.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. WHY NOW & EDITORIAL NARRATIVE                         */}
        {/* ======================================================== */}
        <section className="py-24 md:py-32 border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-6">
              Why Now
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.12] mb-12 max-w-4xl">
              The Companies that will Lead the Next Decade are Being Engineered Right Now.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-neutral-700 text-lg leading-relaxed pt-8 border-t border-neutral-200">
              <div>
                <p className="font-semibold text-[#111111] mb-2">Enterprise is being Reimagined.</p>
                <p className="text-neutral-500 text-base">
                  Legacy systems are shifting from brittle cron jobs to real-time event-driven backbones.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#111111] mb-2">Products are being Reinvented.</p>
                <p className="text-neutral-500 text-base">
                  Software is no longer static interfaces; it is predictive, agentic, and self-optimizing.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#111111] mb-2">We engineer Both.</p>
                <p className="text-neutral-500 text-base">
                  We combine high-velocity delivery with the architectural rigor required for high enterprise scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. QUANTITATIVE METRICS BAR                              */}
        {/* ======================================================== */}
        <section className="py-16 border-b border-neutral-200 bg-neutral-50/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#111111] tracking-tight mb-2">20+</div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Years of Engineering Products</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#111111] tracking-tight mb-2">550+</div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Products Shipped to Production</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#111111] tracking-tight mb-2">700+</div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-[#111111] tracking-tight mb-2">300+</div>
                <div className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Product Engineers</div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. AGENTIC FRAMEWORK (AntFlow AI equivalent)             */}
        {/* ======================================================== */}
        <section className="py-24 md:py-32 border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
                AntFlow AI · Our Agentic Development Framework
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] mb-6">
                Agentic Development Framework by NeedHelpBuilding
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                AntFlow AI connects what your business needs with how software gets built, helping teams transition from traditional slow sprints to AI-orchestrated velocity with verified quality controls.
              </p>
            </div>

            {/* Framework Graphic Card Mockup */}
            <div className="border border-neutral-200 rounded-xl p-8 sm:p-12 bg-neutral-50/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mx-auto md:mx-0">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-[#111111]">Deterministic CI/CD</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Automated testing sandboxes and regression suites validate all agent-generated code before human review.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mx-auto md:mx-0">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-[#111111]">Specialized Agent Swarms</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Architect, builder, and security auditor agents collaborate over shared deterministic state graphs.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mx-auto md:mx-0">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-[#111111]">Enterprise Governance</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Human-in-the-loop checkpoints and strict data boundaries ensure zero IP contamination or security drift.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 6. FOUR PRACTICES, ONE ENGINEERING STANDARD              */}
        {/* ======================================================== */}
        <section id="practices" className="py-24 md:py-32 border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
                Practices
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] mb-6">
                Four Practices, One Engineering Standard.
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Every practice combines strategic consulting with hands-on engineering — because advice without execution is just a slide deck.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practices.map((practice, idx) => (
                <div 
                  key={idx} 
                  className="border border-neutral-200 p-8 sm:p-10 rounded-lg flex flex-col justify-between hover:border-neutral-400 transition-colors"
                >
                  <div className="space-y-4 mb-8">
                    <span className="text-xs font-mono font-bold text-neutral-400 tracking-wider">
                      {practice.num} / 04
                    </span>
                    <h3 className="text-2xl font-bold text-[#111111]">
                      {practice.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {practice.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 flex flex-wrap gap-2">
                    {practice.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs text-neutral-600 bg-neutral-100 px-3 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 7. CASE STUDIES & QUANTITATIVE IMPACT                    */}
        {/* ======================================================== */}
        <section id="work" className="py-24 md:py-32 border-b border-neutral-200 bg-neutral-50/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
                  Work
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111]">
                  We Measure Success in Business Impact, <br className="hidden sm:inline" />
                  Not Lines of Code.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["ALL", "Fintech", "Healthcare", "Real Estate", "Commerce"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveWorkFilter(filter)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors ${
                      activeWorkFilter === filter
                        ? "bg-[#111111] text-white"
                        : "border border-neutral-200 text-neutral-600 hover:border-neutral-400"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, idx) => (
                <div 
                  key={idx} 
                  className="border border-neutral-200 bg-white p-8 sm:p-10 rounded-lg flex flex-col justify-between hover:border-neutral-400 transition-colors"
                >
                  <div className="space-y-4 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                      {study.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-[#111111]">
                      {study.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {study.desc}
                    </p>
                  </div>

                  <div>
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-100 mb-6">
                      {study.stats.map((s, sIdx) => (
                        <div key={sIdx}>
                          <div className="text-2xl font-bold text-[#111111]">{s.value}</div>
                          <div className="text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/services/${study.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:underline"
                    >
                      Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 8. INDUSTRIES WE SERVE                                   */}
        {/* ======================================================== */}
        <section className="py-24 md:py-32 border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
                Industries
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] mb-6">
                Industries We Serve.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, idx) => (
                <div key={idx} className="border border-neutral-200 p-6 rounded-lg space-y-2 hover:border-neutral-400 transition-colors">
                  <h3 className="text-base font-bold text-[#111111]">{ind.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 9. POINT OF VIEW (Philosophy)                            */}
        {/* ======================================================== */}
        <section id="philosophy" className="py-24 md:py-32 border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
                Point of View
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] mb-6">
                We Bring a Point of View.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pointsOfView.map((pov, idx) => (
                <div key={idx} className="border-t-2 border-neutral-900 pt-6 space-y-3">
                  <div className="text-sm font-mono font-bold text-neutral-400">{pov.num}</div>
                  <h3 className="text-lg font-bold text-[#111111] leading-snug">{pov.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{pov.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 10. RED CTA BANNER (Exact GeekyAnts Conversion Section) */}
        {/* ======================================================== */}
        <section id="contact" className="py-28 bg-[#d81e28] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl space-y-8">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-white/80">
                Start A Project
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                The Right Conversation Can Save You Six Months.
              </h2>
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="mailto:hello@needhelpbuilding.com"
                  className="px-8 py-4 bg-white text-[#d81e28] font-bold text-sm rounded hover:bg-neutral-100 transition-colors"
                >
                  Book a Call
                </a>
                <a
                  href="mailto:hello@needhelpbuilding.com"
                  className="px-8 py-4 border border-white/40 text-white font-medium text-sm rounded hover:bg-white/10 transition-colors"
                >
                  hello@needhelpbuilding.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================================== */}
      {/* 11. FOOTER DIRECTORY                                     */}
      {/* ======================================================== */}
      <footer className="py-20 border-t border-neutral-200 bg-neutral-50/60 text-sm text-neutral-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2 space-y-4">
              <div className="text-lg font-bold text-[#111111]">NEED HELP BUILDING?</div>
              <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
                AI-Powered Digital Product Engineering & Consulting Company. Innovate · Collaborate · Build.
              </p>
              <div className="text-xs text-neutral-400">
                2026 © Need Help Building. All rights reserved.
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#111111]">Our Services</div>
              <ul className="space-y-2 text-xs">
                <li><Link href="/services/ai-development" className="hover:text-black">AI Development</Link></li>
                <li><Link href="/services/full-stack-web-development" className="hover:text-black">Web Development</Link></li>
                <li><Link href="/services/software-development" className="hover:text-black">Software Engineering</Link></li>
                <li><Link href="/services/ai-agents" className="hover:text-black">AI Agent Systems</Link></li>
                <li><Link href="/services/ai-consulting" className="hover:text-black">AI Consulting</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#111111]">Technologies</div>
              <ul className="space-y-2 text-xs">
                <li><span className="hover:text-black">Next.js & React</span></li>
                <li><span className="hover:text-black">TypeScript</span></li>
                <li><span className="hover:text-black">Python & PyTorch</span></li>
                <li><span className="hover:text-black">PostgreSQL & Redis</span></li>
                <li><span className="hover:text-black">LangGraph & MCP</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#111111]">Contact</div>
              <ul className="space-y-2 text-xs">
                <li>hello@needhelpbuilding.com</li>
                <li>+91-9219061093</li>
                <li>Global Remote & Engineering Hub</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
