"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronRight, 
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Workflow,
  Shield,
  Zap,
  Globe,
  Radio
} from "lucide-react";
import HeaderNav from "@/components/HeaderNav";

export default function HomePage() {
  const [activeWorkFilter, setActiveWorkFilter] = useState("Featured");

  const clientLogos = [
    { name: "Google", src: "https://geekyants-v5-media.sgp1.cdn.digitaloceanspaces.com/media/2026/07/a263e2a1-04d1-4997-9541-2055059900d3.svg" },
    { name: "OliveGarden", src: "https://geekyants-v5-media.sgp1.cdn.digitaloceanspaces.com/media/2026/07/a263e2a2-dc4a-4379-83c4-b8bd9b473f13.svg" },
    { name: "Darden", src: "https://geekyants-v5-media.sgp1.cdn.digitaloceanspaces.com/media/2026/07/a263e2a2-dc4a-4379-83c4-b8bd9b473f13.svg" },
    { name: "ICICI Bank", src: "https://geekyants-v5-media.sgp1.cdn.digitaloceanspaces.com/media/2026/07/a263e2a6-193c-4414-a46f-b980da901d64.svg" },
    { name: "Kingsley Gate", src: "https://geekyants-v5-media.sgp1.cdn.digitaloceanspaces.com/media/2026/07/a263e2a7-4da9-4dc0-94ed-c66f0e08538f.svg" },
    { name: "Atsign", src: "https://geekyants-v5-media.sgp1.cdn.digitaloceanspaces.com/media/2026/07/a263e2a2-00f1-4fa4-8bf3-49262a3b53ec.svg" },
    { name: "SKF", src: "https://geekyants-v5-media.sgp1.cdn.digitaloceanspaces.com/media/2026/07/a263e2a4-25ae-4285-bf3c-80f01f0044c6.svg" },
    { name: "Thyrocare", src: "https://geekyants-v5-media.sgp1.cdn.digitaloceanspaces.com/media/2026/07/a263e2a1-ce91-4398-b07f-127394cbd24b.svg" },
    { name: "WeWork", src: "https://geekyants-v5-media.sgp1.cdn.digitaloceanspaces.com/media/2026/07/a263e2a4-9159-4f87-b4d5-7917d8b6a129.svg" },
    { name: "Goosehead", src: "https://geekyants-v5-media.sgp1.cdn.digitaloceanspaces.com/media/2026/07/a263e2a1-6981-4989-98b9-9fd4d0d4a8bd.svg" },
    { name: "MetroGhar", src: "https://geekyants-v5-media.sgp1.cdn.digitaloceanspaces.com/media/2026/07/a263e2a5-0c0c-40ef-9c41-7b122fc6a2dd.svg" }
  ];

  const practices = [
    {
      num: "01 / 04",
      title: "AI & Intelligent Systems",
      desc: "From AI strategy to production-grade LLM integration, autonomous agents, and intelligent workflows — we take AI from experiment to enterprise.",
      tags: ["Agentic AI", "ML Model Development", "AI Pods", "Digital Transformation", "AI Strategies", "Production LLMs"]
    },
    {
      num: "02 / 04",
      title: "AI-Powered Product Engineering",
      desc: "From idea to prototype to production — we build products at AI speed with the engineering discipline that makes them last.",
      tags: ["Prototype to Production", "AI Native Engineering", "Fractional Teams", "Code Quality", "Scaling MVP to Market"]
    },
    {
      num: "03 / 04",
      title: "Enterprise System Modernization",
      desc: "We re-architect legacy systems for AI-readiness, scale, and speed — then stay to manage and evolve them.",
      tags: ["App Modernization", "Data & Integration", "Process Transformation", "Cloud Infrastructure", "Performance & Security"]
    },
    {
      num: "04 / 04",
      title: "Digital Customer Experience",
      desc: "We bring engineering, design, and strategy on the same page — ensuring your customer experiences build trust and compound value at scale.",
      tags: ["Discovery & Strategy", "Product & Experience Design", "Legacy UX Migration", "Agentic Experience Design", "Design Systems"]
    }
  ];

  const caseStudies = [
    {
      title: "RBI Domain Migration For India’s Largest Private Bank",
      category: "Fintech",
      featured: true,
      desc: "GeekyAnts executed a large-scale domain migration for Reserve Bank of India compliance, enabling one of India’s largest private banks to transition its digital infrastructure to RBI-mandated domains without disrupting live banking services.",
      stats: [
        { label: "reduction in manual effort", value: "99%" },
        { label: "pages in ~2 minutes", value: "10,000" },
        { label: "response accuracy", value: "85%+" }
      ],
      img: "https://geekyants.com/_next/image?url=https%3A%2F%2Fgeekyants-v5-media.sgp1.cdn.digitaloceanspaces.com%2Fmedia%2F2026%2F08%2Fa27de02a-1cb8-443e-8da1-f39efeaf1242.png&w=3840&q=75",
      slug: "full-stack-web-development"
    },
    {
      tag: "HEALTHCARE",
      title: "Healthcare SaaS Platform",
      category: "Healthcare",
      featured: true,
      desc: "We modernized Dentify’s onboarding workflows by introducing AI-driven automation and optimizing backend workflows, reducing friction in doctor onboarding and improving operational efficiency.",
      stats: [
        { label: "Doctor efficiency boost", value: "35%" },
        { label: "Onboarding time reduction", value: "40%" },
        { label: "Patient Care", value: "Real-Time" }
      ],
      img: "https://geekyants.com/_next/image?url=https%3A%2F%2Fgeekyants-v5-media.sgp1.cdn.digitaloceanspaces.com%2Fmedia%2F2026%2F07%2Fa263e779-5a70-4108-bf51-6534b28a825c.png&w=3840&q=75",
      slug: "software-development"
    },
    {
      tag: "REAL ESTATE",
      title: "Property Inspection Platform",
      category: "Real Estate",
      featured: true,
      desc: "We built a scalable backend architecture supporting AI chatbots, QR-based workflows, and production-grade RAG pipelines to automate property inspections and reporting.",
      stats: [
        { label: "answer accuracy", value: "80%" },
        { label: "relevance to property data", value: "90%" },
        { label: "On-site voice queries", value: "2x" }
      ],
      img: "https://geekyants.com/_next/image?url=https%3A%2F%2Fgeekyants-v5-media.sgp1.cdn.digitaloceanspaces.com%2Fmedia%2F2026%2F07%2Fa263e79a-8ed5-4eb8-ab55-a98809e43436.png&w=3840&q=75",
      slug: "application-development"
    },
    {
      tag: "FINTECH",
      title: "Consumer Commerce Platform",
      category: "E-commerce",
      featured: true,
      desc: "We executed a comprehensive cloud infrastructure overhaul for this digital banking platform to eliminate over-provisioning and inefficient resource allocation, stabilizing the backend while slashing overhead.",
      stats: [
        { label: "Reduction in cloud costs", value: "60%" },
        { label: "Saved per month", value: "$4,800" },
        { label: "Annual savings", value: "$57K+" }
      ],
      img: "https://geekyants.com/_next/image?url=https%3A%2F%2Fgeekyants-v5-media.sgp1.cdn.digitaloceanspaces.com%2Fmedia%2F2026%2F07%2Fa263e7a0-b40f-418c-a6e9-9a5c89e75435.png&w=3840&q=75",
      slug: "management-scaling"
    }
  ];

  const industries = [
    { title: "Healthcare", desc: "Top-notch Healthcare App Development Services. Partner with trusted healthcare app developers." },
    { title: "Fintech", desc: "Secure, scalable fintech and banking app development." },
    { title: "Food and Beverages", desc: "Customized AI-driven F&B apps for a booming business." },
    { title: "Manufacturing", desc: "Smarter apps for process efficiency and operational excellence." },
    { title: "E-commerce", desc: "E-commerce apps that retain customers, boost sales and conversions." },
    { title: "Travel & Hospitality", desc: "Travel apps for seamless experiences and memorable moments." },
    { title: "Real Estate", desc: "Smart property management and listing apps with locale expertise." },
    { title: "Gaming", desc: "Immersive gaming app development services for today and the future." },
    { title: "Banking, Finance & Insurance", desc: "Consulting services that transform legacy tech into secure AI platforms." },
    { title: "Media and Entertainment", desc: "AI, cloud modernization, MAM/DAM, and custom OTT app development." },
    { title: "Hiring", desc: "AI-driven recruitment, ATS modernization, and automated workflows." },
    { title: "Insurance", desc: "Policy automation, fraud detection, and secure InsurTech solutions." }
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
      desc: "NativeBase. gluestack-ui. React Native core contributions. React Summit 2024 Productivity Award. Thousands of developers trust our foundations."
    },
    {
      num: "04",
      title: "We stay. We don't ship and disappear.",
      desc: "550+ engagements. Clients who've been with us for 5+ years. We're invested in long-term success, not just the current project scope."
    }
  ];

  const filteredCaseStudies = activeWorkFilter === "Featured"
    ? caseStudies.filter(c => c.featured)
    : caseStudies.filter(c => c.category.toLowerCase() === activeWorkFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-[#f7f7f8] text-[#121316] font-sans antialiased selection:bg-[#e11d2a] selection:text-white">
      {/* Top Header */}
      <HeaderNav />

      <main>
        {/* ======================================================== */}
        {/* 1. HERO SECTION                                          */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden bg-[#f7f7f8] pt-14 pb-20 md:pt-24 md:pb-28 border-b border-[#e5e5e7]">
          <div className="mx-auto w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 flex flex-col items-start gap-6">
              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-[#121316] leading-[1.05]">
                Turning Ambitious <br />
                Technology Strategies <br />
                into Production-Grade <br />
                Reality<span className="inline-block w-2.5 h-2.5 rounded-full bg-[#e11d2a] ml-1.5 align-baseline" />
              </h1>

              <p className="max-w-[560px] text-base sm:text-lg text-[#616266] leading-relaxed font-normal">
                From AI adoption to legacy modernization to product scale — we bring the thinking and the team.
              </p>

              <div className="pt-2">
                <a
                  href="mailto:hello@needhelpbuilding.com"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#121316] text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  <span>Schedule a Strategy Conversation</span>
                  <span className="flex size-5 items-center justify-center rounded-sm bg-white text-[#121316] group-hover:bg-[#e11d2a] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Hero Decorative Canvas / Tech Visual */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="relative aspect-square w-72 rounded-2xl border border-[#e5e5e7] bg-white p-6 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-mono text-[#8a8b90] uppercase">
                  <span>Architecture Pod</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#8a8b90]">STATUS // ACTIVE</div>
                  <div className="text-xl font-bold text-[#121316]">Agentic AI Engineering</div>
                  <p className="text-xs text-[#616266] leading-relaxed">
                    Zero hallucinations, deterministic CI/CD, and production LLM guardrails.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[#e11d2a] font-bold">
                  550+ DEPLOYMENTS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. LOGO MARQUEE STRIP                                    */}
        {/* ======================================================== */}
        <section className="py-8 bg-white border-b border-[#e5e5e7] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between gap-10 overflow-x-auto no-scrollbar py-2 opacity-75">
              {clientLogos.map((client, idx) => (
                <span 
                  key={idx}
                  className="text-sm font-semibold tracking-wider uppercase text-[#8a8b90] whitespace-nowrap hover:text-[#121316] transition-colors"
                >
                  {client.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. WHY NOW (Section Eyebrow + Red Dot + Headline)        */}
        {/* ======================================================== */}
        <section id="about" className="py-20 md:py-28 bg-[#f7f7f8] border-b border-[#e5e5e7]">
          <div className="max-w-6xl mx-auto px-6">
            {/* GeekyAnts Section Eyebrow with Red Dot */}
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8b90] mb-8">
              <span className="size-2 rounded-full bg-[#e11d2a]" />
              <span>Why Now</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[44px] font-bold tracking-tight text-[#121316] leading-[1.12] mb-14 max-w-4xl">
              The Companies that will Lead the Next Decade are Being Engineered Right Now<span className="inline-block w-2 h-2 rounded-full bg-[#e11d2a] ml-1 align-baseline" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[#e5e5e7]">
              <div>
                <h3 className="text-lg font-bold text-[#121316] mb-2">Enterprise is being Reimagined.</h3>
                <p className="text-sm text-[#616266] leading-relaxed">
                  Workflows are becoming autonomous, pipelines are turning intelligent, and users expect zero latency.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#121316] mb-2">Products are being Reinvented.</h3>
                <p className="text-sm text-[#616266] leading-relaxed">
                  Software is no longer just static forms; it is active, responsive, and constantly optimizing itself.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#e11d2a] mb-2">We engineer Both.</h3>
                <p className="text-sm text-[#616266] leading-relaxed">
                  We combine strategic architectural consulting with battle-tested hands-on engineering execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. QUANTITATIVE METRICS (4 Columns)                      */}
        {/* ======================================================== */}
        <section className="py-14 bg-white border-b border-[#e5e5e7]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border-l border-[#e5e5e7] pl-6">
                <div className="text-4xl sm:text-5xl font-bold text-[#121316] tracking-tight mb-2">20+</div>
                <div className="text-xs uppercase tracking-wider text-[#8a8b90] font-medium">Years of Engineering Products</div>
              </div>

              <div className="border-l border-[#e5e5e7] pl-6">
                <div className="text-4xl sm:text-5xl font-bold text-[#121316] tracking-tight mb-2">550+</div>
                <div className="text-xs uppercase tracking-wider text-[#8a8b90] font-medium">Products Shipped to Production</div>
              </div>

              <div className="border-l border-[#e5e5e7] pl-6">
                <div className="text-4xl sm:text-5xl font-bold text-[#121316] tracking-tight mb-2">700+</div>
                <div className="text-xs uppercase tracking-wider text-[#8a8b90] font-medium">Projects Completed</div>
              </div>

              <div className="border-l border-[#e5e5e7] pl-6">
                <div className="text-4xl sm:text-5xl font-bold text-[#121316] tracking-tight mb-2">300+</div>
                <div className="text-xs uppercase tracking-wider text-[#8a8b90] font-medium">Product Engineers</div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. ANTFLOW AI (Agentic Development Framework Card)       */}
        {/* ======================================================== */}
        <section className="py-20 md:py-28 bg-[#f7f7f8] border-b border-[#e5e5e7]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8b90] mb-8">
              <span className="size-2 rounded-full bg-[#e11d2a]" />
              <span>AntFlow AI · Our Agentic Development Framework</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121316] mb-6 max-w-3xl">
              Agentic Development Framework by GeekyAnts<span className="inline-block w-2 h-2 rounded-full bg-[#e11d2a] ml-1 align-baseline" />
            </h2>
            <p className="text-base sm:text-lg text-[#616266] max-w-2xl leading-relaxed mb-12">
              AntFlow AI connects what your business needs with how software gets built, helping teams ship with deterministic quality controls.
            </p>

            {/* Architecture Card Layout */}
            <div className="rounded-2xl border border-[#e5e5e7] bg-white p-8 sm:p-12 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="text-xs font-mono font-bold text-[#e11d2a]">PHASE 01</div>
                  <h3 className="text-xl font-bold text-[#121316]">AI Agent Swarms</h3>
                  <p className="text-sm text-[#616266] leading-relaxed">
                    Specialized coder, auditor, and validator agents coordinate autonomously with strict bounded tool permissions.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono font-bold text-[#e11d2a]">PHASE 02</div>
                  <h3 className="text-xl font-bold text-[#121316]">Deterministic CI/CD</h3>
                  <p className="text-sm text-[#616266] leading-relaxed">
                    Every generated line passes automated regression, security audits, and type verification before deployment.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono font-bold text-[#e11d2a]">PHASE 03</div>
                  <h3 className="text-xl font-bold text-[#121316]">Enterprise Governance</h3>
                  <p className="text-sm text-[#616266] leading-relaxed">
                    Human-in-the-loop checkpoints and SOC-2 compliant privacy boundaries ensure 100% intellectual property safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 6. FOUR PRACTICES ONE ENGINEERING STANDARD               */}
        {/* ======================================================== */}
        <section id="practices" className="py-20 md:py-28 bg-white border-b border-[#e5e5e7]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8b90] mb-8">
              <span className="size-2 rounded-full bg-[#e11d2a]" />
              <span>Practices</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121316] mb-4 max-w-3xl">
              Four Practices One Engineering Standard<span className="inline-block w-2 h-2 rounded-full bg-[#e11d2a] ml-1 align-baseline" />
            </h2>
            <p className="text-base sm:text-lg text-[#616266] max-w-2xl leading-relaxed mb-16">
              Every practice combines strategic consulting with hands-on engineering — because advice without execution is just a slide deck.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practices.map((practice, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-[#e5e5e7] bg-[#fbfbfc] p-8 sm:p-10 flex flex-col justify-between hover:border-[#121316] transition-colors"
                >
                  <div className="space-y-4 mb-8">
                    <span className="text-xs font-mono font-bold text-[#8a8b90]">
                      {practice.num}
                    </span>
                    <h3 className="text-2xl font-bold text-[#121316]">
                      {practice.title}
                    </h3>
                    <p className="text-sm text-[#616266] leading-relaxed">
                      {practice.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#e5e5e7] flex flex-wrap gap-2">
                    {practice.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs text-[#616266] bg-white border border-[#e5e5e7] px-3 py-1 rounded-md">
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
        {/* 7. CASE STUDIES (Featured Work with Real Imagery)        */}
        {/* ======================================================== */}
        <section id="work" className="py-20 md:py-28 bg-[#f7f7f8] border-b border-[#e5e5e7]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8b90] mb-8">
              <span className="size-2 rounded-full bg-[#e11d2a]" />
              <span>Work</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121316] max-w-2xl">
                We Measure Success in Business Impact, Not Lines of Code<span className="inline-block w-2 h-2 rounded-full bg-[#e11d2a] ml-1 align-baseline" />
              </h2>
              <Link 
                href="/services/full-stack-web-development"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#121316] hover:text-[#e11d2a] transition-colors"
              >
                View all <ArrowRight className="w-4 h-4 text-[#e11d2a]" />
              </Link>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-12">
              {["Featured", "E-commerce", "Healthcare", "Real Estate", "Fintech"].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveWorkFilter(f)}
                  className={`h-9 px-4 text-xs font-medium rounded-lg border transition-colors ${
                    activeWorkFilter === f
                      ? "border-[#121316] bg-[#121316] text-white"
                      : "border-[#e5e5e7] bg-white text-[#616266] hover:border-[#121316]/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, idx) => (
                <article key={idx} className="flex flex-col rounded-2xl border border-[#e5e5e7] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Image Plate */}
                  <div className="relative aspect-[16/10] bg-[#e5e5e7] overflow-hidden">
                    <img
                      src={study.img}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex flex-col justify-between flex-1">
                    <div className="space-y-4 mb-6">
                      {study.tag && (
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#e11d2a]">
                          {study.tag}
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-[#121316]">
                        {study.title}
                      </h3>
                      <p className="text-sm text-[#616266] leading-relaxed line-clamp-3">
                        {study.desc}
                      </p>
                    </div>

                    <div>
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e5e5e7] mb-6">
                        {study.stats.map((s, sIdx) => (
                          <div key={sIdx}>
                            <div className="text-2xl font-bold text-[#121316]">{s.value}</div>
                            <div className="text-[11px] uppercase tracking-wider text-[#8a8b90] mt-1 line-clamp-1">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/services/${study.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#121316] hover:text-[#e11d2a]"
                      >
                        Read case study <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 8. INDUSTRIES WE SERVE                                   */}
        {/* ======================================================== */}
        <section className="py-20 md:py-28 bg-white border-b border-[#e5e5e7]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8b90] mb-8">
              <span className="size-2 rounded-full bg-[#e11d2a]" />
              <span>Industries</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121316] mb-14">
              Industries We Serve<span className="inline-block w-2 h-2 rounded-full bg-[#e11d2a] ml-1 align-baseline" />
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, idx) => (
                <div key={idx} className="border border-[#e5e5e7] rounded-xl p-6 bg-[#fbfbfc] hover:border-[#121316] transition-colors space-y-2">
                  <h3 className="text-base font-bold text-[#121316]">{ind.title}</h3>
                  <p className="text-xs text-[#616266] leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 9. POINT OF VIEW                                         */}
        {/* ======================================================== */}
        <section id="philosophy" className="py-20 md:py-28 bg-[#f7f7f8] border-b border-[#e5e5e7]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8b90]">
                <span className="size-2 rounded-full bg-[#e11d2a]" />
                <span>Point of View</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121316]">
                We Bring a Point of View<span className="inline-block w-2 h-2 rounded-full bg-[#e11d2a] ml-1 align-baseline" />
              </h2>
              <p className="text-base text-[#616266] leading-relaxed">
                Strategic technology leadership isn't just about writing tickets. We bring opinionated architecture that prevents wasted quarters.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-10">
              {pointsOfView.map((pov, idx) => (
                <div key={idx} className="border-t border-[#e5e5e7] pt-8 space-y-3">
                  <div className="text-xs font-mono font-bold text-[#e11d2a]">{pov.num}</div>
                  <h3 className="text-2xl font-bold text-[#121316]">{pov.title}</h3>
                  <p className="text-sm text-[#616266] leading-relaxed">{pov.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 10. EXACT RED CTA SECTION ("The Right Conversation...")  */}
        {/* ======================================================== */}
        <section id="contact" className="py-24 md:py-32 bg-[#e11d2a] text-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/80 mb-8">
              <span className="size-2 rounded-full bg-white" />
              <span>Start A Project</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-3xl mb-12">
              The Right Conversation Can Save You Six Months.
            </h2>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="mailto:hello@needhelpbuilding.com"
                className="px-8 py-4 bg-white text-[#e11d2a] font-bold text-sm rounded-md hover:bg-neutral-100 transition-colors shadow-lg"
              >
                Book a Call
              </a>
              <a
                href="mailto:hello@needhelpbuilding.com"
                className="px-8 py-4 border border-white/40 text-white font-medium text-sm rounded-md hover:bg-white/10 transition-colors"
              >
                hello@needhelpbuilding.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================================== */}
      {/* 11. FOOTER DIRECTORY                                     */}
      {/* ======================================================== */}
      <footer className="py-16 bg-white border-t border-[#e5e5e7] text-sm text-[#616266]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2 space-y-4">
              <div className="text-lg font-bold text-[#121316]">NEED HELP BUILDING?</div>
              <p className="text-xs text-[#8a8b90] max-w-sm leading-relaxed">
                AI-Powered Digital Product Engineering & Technology Consulting Company. Innovate · Collaborate · Build.
              </p>
              <div className="text-xs text-[#8a8b90]">
                2026 © Need Help Building. All rights reserved.
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#121316]">Our Services</div>
              <ul className="space-y-2 text-xs">
                <li><Link href="/services/ai-development" className="hover:text-black">AI Development</Link></li>
                <li><Link href="/services/full-stack-web-development" className="hover:text-black">Web Engineering</Link></li>
                <li><Link href="/services/software-development" className="hover:text-black">Software Modernization</Link></li>
                <li><Link href="/services/ai-agents" className="hover:text-black">AI Agent Systems</Link></li>
                <li><Link href="/services/ai-consulting" className="hover:text-black">Technology Consulting</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#121316]">Technologies</div>
              <ul className="space-y-2 text-xs">
                <li><span>Next.js & React</span></li>
                <li><span>TypeScript</span></li>
                <li><span>Python & PyTorch</span></li>
                <li><span>PostgreSQL & Redis</span></li>
                <li><span>LangGraph & MCP</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#121316]">Contact</div>
              <ul className="space-y-2 text-xs font-mono">
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
