"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SmartLink from "@/components/ui/SmartLink";
import { serviceGroups, solutions } from "@/content/services";
import { serviceIcons } from "./serviceIcons";
import { cn } from "@/lib/cn";

interface NavPanelProps {
  id: string;
  onNavigate: () => void;
}

const servicePages = [
  {
    id: "ai",
    title: "AI & Intelligent Systems",
    shortLabel: "AI Systems",
    items: [
      {
        icon: "ai" as const,
        title: "AI Engineering & Architecture",
        summary: "Production LLM systems, custom models, and retrieval pipelines.",
        href: "/services/ai-development",
      },
      {
        icon: "ai" as const,
        title: "Autonomous AI Agents",
        summary: "Goal-directed agents with strict tool permissions and memory.",
        href: "/services/ai-agents",
      },
      {
        icon: "ai" as const,
        title: "Multi-Agent Orchestration",
        summary: "Coordinated agent workflows for complex operations.",
        href: "/services/multi-agent-systems",
      },
      {
        icon: "automation" as const,
        title: "Workflow & Business Automation",
        summary: "End-to-end automation connecting internal systems and APIs.",
        href: "/#discipline-automation",
      },
    ],
  },
  {
    id: "engineering",
    title: "Product & Engineering",
    shortLabel: "Engineering",
    items: [
      {
        icon: "web" as const,
        title: "Full-Stack Web Development",
        summary: "High-performance web apps built with Next.js, React, and TypeScript.",
        href: "/services/full-stack-web-development",
      },
      {
        icon: "software" as const,
        title: "Custom Software & SaaS",
        summary: "Scalable backend architectures, APIs, and modern cloud applications.",
        href: "/services/software-development",
      },
      {
        icon: "web" as const,
        title: "Mobile Applications",
        summary: "Native and cross-platform mobile apps with offline support.",
        href: "/services/application-development",
      },
      {
        icon: "design" as const,
        title: "Product & Interface Design",
        summary: "Design systems, interactive prototypes, and UX workflows.",
        href: "/services/ui-ux-design",
      },
    ],
  },
  {
    id: "strategy",
    title: "Cloud & Strategic Advisory",
    shortLabel: "Cloud & Advisory",
    items: [
      {
        icon: "consulting" as const,
        title: "Technology Consulting & Fractional CTO",
        summary: "Architecture reviews, stack selection, and senior technical leadership.",
        href: "/services/tech-consultancy",
      },
      {
        icon: "consulting" as const,
        title: "AI Strategy & Readiness",
        summary: "Evaluating use cases, data foundations, and ROI before investing.",
        href: "/services/ai-consulting",
      },
      {
        icon: "cloud" as const,
        title: "Cloud Infrastructure & DevOps",
        summary: "Secure cloud deployments, Kubernetes, and CI/CD pipelines.",
        href: "/services/management-scaling",
      },
      {
        icon: "quality" as const,
        title: "QA & Vulnerability Hardening",
        summary: "Penetration testing, load testing, and automated test suites.",
        href: "/services/application-testing",
      },
    ],
  },
];

/** Compact Services dropdown: split into 3 compact pages, showing only relevant services. */
export function ServicesPanel({ id, onNavigate }: NavPanelProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const page = servicePages[currentPage];

  return (
    <div
      id={id}
      className="absolute top-full left-0 mt-3 w-[520px] animate-rise rounded-2xl border border-ivory/15 bg-ink p-5 text-ivory shadow-[0_24px_50px_-12px_rgba(0,0,0,0.6)]"
    >
      {/* Page Tabs / Pagination Header */}
      <div className="flex items-center justify-between border-b border-ivory/10 pb-3">
        <div className="flex items-center gap-1.5">
          {servicePages.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setCurrentPage(idx)}
              className={cn(
                "rounded-full px-3 py-1 font-mono text-[11px] transition-colors",
                currentPage === idx
                  ? "bg-ivory text-ink font-semibold"
                  : "text-ivory/60 hover:text-ivory hover:bg-ivory/10"
              )}
            >
              {p.shortLabel}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 text-ivory/50">
          <button
            type="button"
            aria-label="Previous page"
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            className="grid size-6 place-items-center rounded-md hover:bg-ivory/10 hover:text-ivory disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ChevronLeft className="size-3.5" />
          </button>
          <span className="font-mono text-[10px] text-ivory/60">
            {currentPage + 1}/{servicePages.length}
          </span>
          <button
            type="button"
            aria-label="Next page"
            disabled={currentPage === servicePages.length - 1}
            onClick={() => setCurrentPage((p) => Math.min(servicePages.length - 1, p + 1))}
            className="grid size-6 place-items-center rounded-md hover:bg-ivory/10 hover:text-ivory disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <ChevronRight className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Relevant Services List for Selected Page */}
      <div className="mt-3 grid gap-2">
        {page.items.map((item) => {
          const Icon = serviceIcons[item.icon];
          return (
            <SmartLink
              key={item.title}
              href={item.href}
              onClick={onNavigate}
              className="group flex items-start gap-3.5 rounded-xl p-2.5 transition-colors hover:bg-ivory/5"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-ivory/15 bg-ink-2 text-sun">
                <Icon className="size-4" aria-hidden />
              </span>
              <div className="min-w-0">
                <span className="flex items-center gap-1.5 text-[14px] font-semibold text-ivory group-hover:text-sun transition-colors">
                  {item.title}
                  <ArrowUpRight aria-hidden className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span className="mt-0.5 block text-[12px] leading-snug text-ivory/60 line-clamp-1">
                  {item.summary}
                </span>
              </div>
            </SmartLink>
          );
        })}
      </div>

      {/* Compact Footer Action */}
      <div className="mt-3 flex items-center justify-between border-t border-ivory/10 pt-3 text-[12px]">
        <SmartLink
          href="/#capabilities"
          onClick={onNavigate}
          className="text-ivory/60 hover:text-ivory transition-colors"
        >
          View all 4 core disciplines
        </SmartLink>
        <SmartLink
          href="/#contact"
          onClick={onNavigate}
          className="inline-flex items-center gap-1 text-sun hover:underline font-medium"
        >
          Talk to an engineer <ArrowRight className="size-3" />
        </SmartLink>
      </div>
    </div>
  );
}

/** Compact Solutions dropdown anchored under its trigger. */
export function SolutionsPanel({ id, onNavigate }: NavPanelProps) {
  return (
    <div
      id={id}
      className="absolute top-full left-0 mt-3 w-[420px] animate-rise rounded-2xl border border-ivory/15 bg-ink p-3 text-ivory shadow-[0_24px_50px_-12px_rgba(0,0,0,0.6)]"
    >
      <div className="px-3 pt-2 pb-1 border-b border-ivory/10 mb-2 flex items-center justify-between">
        <span className="font-mono text-[11px] text-ivory/50 uppercase tracking-wider">Strategic Solutions</span>
        <span className="font-mono text-[11px] text-sun">4 OUTCOMES</span>
      </div>
      <ul className="space-y-1">
        {solutions.map((s, i) => (
          <li key={s.title}>
            <SmartLink
              href={s.href}
              onClick={onNavigate}
              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-ivory/5"
            >
              <span className="font-mono text-[11px] pt-0.5 text-sun">0{i + 1}</span>
              <div className="min-w-0">
                <span className="flex items-center gap-1.5 text-[14px] font-semibold text-ivory group-hover:text-sun transition-colors">
                  {s.title}
                  <ArrowUpRight aria-hidden className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span className="mt-0.5 block text-[12px] leading-snug text-ivory/60">{s.summary}</span>
              </div>
            </SmartLink>
          </li>
        ))}
      </ul>
      <div className="mt-2 border-t border-ivory/10 pt-2 px-3 pb-1">
        <SmartLink
          href="/#consulting"
          onClick={onNavigate}
          className="inline-flex items-center gap-1 font-mono text-[11px] text-ivory/60 hover:text-ivory"
        >
          How we structure partnerships <ArrowRight className="size-3" />
        </SmartLink>
      </div>
    </div>
  );
}
