"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function HomePage() {
  const [activeWorkFilter, setActiveWorkFilter] = useState("ALL");

  const clientNames = [
    "Google",
    "Olive Garden",
    "Darden",
    "ICICI Bank",
    "Kingsley Gate",
    "Atsign",
    "SKF",
    "Thyrocare",
    "WeWork",
    "Goosehead Insurance",
    "MetroGhar"
  ];

  const practices = [
    {
      num: "01 / 04",
      title: "AI & Intelligent Systems",
      desc: "From AI strategy to production-grade LLM integration, autonomous agents, and intelligent workflows — we take AI from experiment to enterprise reality.",
      tags: ["Agentic AI", "ML Model Development", "AI Pods", "Digital Transformation", "AI Strategies", "Production LLMs"]
    },
    {
      num: "02 / 04",
      title: "AI-Powered Product Engineering",
      desc: "From idea to prototype to scaled production — we build modern cloud, mobile, and web products at AI speed with elite engineering discipline.",
      tags: ["Prototype to Production", "AI Native Engineering", "Fractional Teams", "Code Quality", "Scaling MVP to Market"]
    },
    {
      num: "03 / 04",
      title: "Enterprise System Modernization",
      desc: "We re-architect monolithic legacy systems for AI-readiness, distributed scale, and lightning-fast developer velocity — then stay to evolve them.",
      tags: ["App Modernization", "Data & Integration", "Process Transformation", "Cloud Infrastructure", "Performance & Security"]
    },
    {
      num: "04 / 04",
      title: "Digital Customer Experience",
      desc: "We align engineering, UX architecture, and business KPIs so customer experiences build lifelong trust and compound value at scale.",
      tags: ["Discovery Strategy", "Digital Product Design", "Legacy UX Migration", "Agentic Experience Design", "Design Systems"]
    }
  ];

  const caseStudies = [
    {
      tag: "DIGITAL INFRASTRUCTURE",
      category: "Fintech",
      title: "RBI Domain Migration For India’s Largest Private Bank",
      desc: "Executed a large-scale domain migration for Reserve Bank of India compliance, enabling one of India’s largest private banks to transition its digital infrastructure to RBI-mandated domains without disrupting live banking services.",
      stats: [
        { value: "99%", label: "Manual Effort Reduction" },
        { value: "10,000", label: "Pages In ~2 Mins" },
        { value: "85%+", label: "Response Accuracy" }
      ]
    },
    {
      tag: "HEALTHCARE",
      category: "Healthcare",
      title: "Healthcare SaaS Platform",
      desc: "Modernized onboarding workflows by introducing AI-driven automation and optimizing backend workflows, reducing friction in doctor onboarding and improving operational efficiency.",
      stats: [
        { value: "35%", label: "Dr. Efficiency Gain" },
        { value: "40%", label: "Onboarding Time Drop" },
        { value: "Real-Time", label: "Patient Care Sync" }
      ]
    },
    {
      tag: "REAL ESTATE",
      category: "Real Estate",
      title: "Property Inspection Platform",
      desc: "Built a scalable backend architecture supporting AI chatbots, QR-based workflows, and production-grade RAG pipelines to automate property inspections and reporting.",
      stats: [
        { value: "80%", label: "Answer Accuracy" },
        { value: "90%", label: "Data Relevance" },
        { value: "2x", label: "On-site Interactions" }
      ]
    },
    {
      tag: "FINTECH & COMMERCE",
      category: "Commerce",
      title: "Consumer Commerce Platform",
      desc: "Executed a comprehensive cloud infrastructure overhaul for this digital banking platform to eliminate over-provisioning and slash monthly cloud infrastructure costs.",
      stats: [
        { value: "60%", label: "Cloud Cost Cut" },
        { value: "$4,800", label: "Saved Monthly" },
        { value: "$57,000+", label: "Annual Net Savings" }
      ]
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

  const techStack = [
    "React Native", "Next.js", "React", "TypeScript", "Python", "GraphQL", 
    "Node.js", "NestJS", "Golang", "PostgreSQL", "Tailwind CSS", "Redis", 
    "AWS", "Vercel", "Docker", "Kubernetes", "PyTorch", "gluestack-ui"
  ];

  const filteredCaseStudies = activeWorkFilter === "ALL"
    ? caseStudies
    : caseStudies.filter(c => c.category.toUpperCase() === activeWorkFilter.toUpperCase());

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Top Header */}
      <header className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-neutral-300">
            NEED HELP BUILDING?
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">Why Now</a>
            <a href="#practices" className="hover:text-white transition-colors">Practices</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Point of View</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div>
            <a
              href="mailto:hello@needhelpbuilding.com"
              className="text-xs uppercase tracking-widest px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="py-24 md:py-36 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6">
              AI-Powered Digital Product Engineering
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-8 max-w-4xl text-white">
              Turning Ambitious Technology Strategies into Production-Grade Reality.
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-12">
              From AI adoption to legacy modernization to product scale — we bring the thinking and the team to build software that compounds in enterprise value.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="mailto:hello@needhelpbuilding.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
              >
                Schedule a Strategy Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#practices"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-neutral-700 text-white font-medium text-sm hover:border-white transition-colors"
              >
                Explore Practices
              </a>
            </div>
          </div>
        </section>

        {/* CLIENT MARQUEE / TEXT ROW */}
        <section className="py-12 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
              Trusted by high-growth enterprises and industry leaders worldwide
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-neutral-400">
              {clientNames.map((client, i) => (
                <span key={i} className="hover:text-white transition-colors">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WHY NOW & STATS */}
        <section id="about" className="py-24 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-widest text-neutral-500">
                  Why Now
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  The Companies that will Lead the Next Decade are Being Engineered Right Now.
                </h2>
                <div className="space-y-4 text-neutral-400 text-base leading-relaxed">
                  <p>
                    <span className="text-white">Enterprise is being Reimagined.</span> Workflows are becoming autonomous, pipelines are turning intelligent, and users expect zero latency.
                  </p>
                  <p>
                    <span className="text-white">Products are being Reinvented.</span> Software is no longer just static forms; it is active, responsive, and constantly optimizing itself.
                  </p>
                  <p className="text-white font-semibold pt-2">
                    We engineer Both.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t md:border-t-0 md:border-l border-neutral-800 pt-8 md:pt-0 md:pl-12">
                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">20+</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">Years of Engineering Products</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">550+</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">Products Shipped to Production</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">700+</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">300+</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">Product Engineers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AGENTIC FRAMEWORK */}
        <section className="py-24 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <span className="text-xs uppercase tracking-widest text-neutral-500">
                Agentic Development Framework
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3 mb-6">
                Connecting what your business needs with how software gets built.
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Transitioning teams from traditional sprint overhead to orchestrated AI velocity, backed by deterministic testing and rigorous enterprise boundaries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-neutral-800 p-8 space-y-4">
                <div className="text-xs uppercase tracking-widest text-neutral-500">Pillar 01</div>
                <h3 className="text-xl font-bold text-white">AI Agent Swarms</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Autonomous code generation agents, security auditors, and PR reviewers coordinate directly against your backlog with deterministic guardrails.
                </p>
              </div>

              <div className="border border-neutral-800 p-8 space-y-4">
                <div className="text-xs uppercase tracking-widest text-neutral-500">Pillar 02</div>
                <h3 className="text-xl font-bold text-white">Deterministic CI/CD</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Every AI-generated contribution is validated through automated test sandboxes, end-to-end regression suites, and verified builds before shipping.
                </p>
              </div>

              <div className="border border-neutral-800 p-8 space-y-4">
                <div className="text-xs uppercase tracking-widest text-neutral-500">Pillar 03</div>
                <h3 className="text-xl font-bold text-white">Enterprise Governance</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Strict human-in-the-loop sign-offs, data protection boundaries, and SOC-2 compliant practices ensure zero IP risk and clean architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOUR PRACTICES */}
        <section id="practices" className="py-24 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <span className="text-xs uppercase tracking-widest text-neutral-500">Practices</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3 mb-4">
                Four Practices, One Engineering Standard.
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl">
                Every practice combines strategic consulting with hands-on engineering — because advice without execution is just a slide deck.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practices.map((p, idx) => (
                <div key={idx} className="border border-neutral-800 p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-4 mb-8">
                    <div className="text-xs font-mono text-neutral-500 tracking-wider">{p.num}</div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{p.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-6 border-t border-neutral-900 flex flex-wrap gap-2">
                    {p.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs text-neutral-400 border border-neutral-800 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK / CASE STUDIES */}
        <section id="work" className="py-24 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-500">Case Studies</span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
                  We Measure Success in Business Impact, Not Lines of Code.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["ALL", "Fintech", "Healthcare", "Real Estate", "Commerce"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveWorkFilter(filter)}
                    className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
                      activeWorkFilter === filter
                        ? "border-white bg-white text-black"
                        : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, idx) => (
                <div key={idx} className="border border-neutral-800 p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-4 mb-8">
                    <div className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
                      {study.tag}
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{study.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{study.desc}</p>
                  </div>

                  <div>
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-900 mb-6">
                      {study.stats.map((s, sIdx) => (
                        <div key={sIdx}>
                          <div className="text-2xl font-bold text-white">{s.value}</div>
                          <div className="text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white hover:text-neutral-400 cursor-pointer">
                      Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POINT OF VIEW */}
        <section id="philosophy" className="py-24 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <span className="text-xs uppercase tracking-widest text-neutral-500">Point of View</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-3">
                We Bring a Point of View.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pointsOfView.map((pov, idx) => (
                <div key={idx} className="border-t border-neutral-800 pt-6 space-y-4">
                  <div className="text-2xl font-bold text-white font-mono">{pov.num}</div>
                  <h3 className="text-lg font-bold text-white leading-snug">{pov.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{pov.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK LIST */}
        <section className="py-20 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
              Technologies We Master & Contribute To
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-400">
              {techStack.map((tech, idx) => (
                <span key={idx} className="hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-28 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs uppercase tracking-widest text-neutral-500">Start A Project</span>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                The Right Conversation Can Save You Six Months.
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Speak directly with senior technology partners. We'll examine your architecture, roadmap, and delivery bottlenecks.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="mailto:hello@needhelpbuilding.com"
                  className="px-6 py-3.5 bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
                >
                  Book a Call with an Architect
                </a>
                <a
                  href="mailto:hello@needhelpbuilding.com"
                  className="px-6 py-3.5 border border-neutral-700 text-white font-medium text-sm hover:border-white transition-colors"
                >
                  hello@needhelpbuilding.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-16 text-sm text-neutral-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="col-span-2 space-y-4">
              <div className="text-base font-bold text-white">NEED HELP BUILDING?</div>
              <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
                AI-Powered Digital Product Engineering & Consulting. Transforming legacy stacks into high-performance production systems.
              </p>
              <div className="text-xs text-neutral-600">
                2026 © Need Help Building. All rights reserved.
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-white">Practices</div>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>AI & Intelligent Systems</li>
                <li>Product Engineering</li>
                <li>System Modernization</li>
                <li>Customer Experience</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-white">Contact</div>
              <ul className="space-y-2 text-neutral-400 text-sm">
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
