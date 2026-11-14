"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import SmartLink from "@/components/ui/SmartLink";
import { programs } from "@/content/ecosystem";
import { productStatusLabel, products } from "@/content/products";
import { serviceIcons } from "./serviceIcons";

interface NavPanelProps {
  id: string;
  onNavigate: () => void;
}

/* --------------------------------------------------------------- shared shell
 * Every dropdown uses the same frame: dark panel centred under the header, yellow pixel group labels,
 * icon rows, and one footer row (quiet link on the left, yellow action on the right).
 */
function Panel({
  id,
  width,
  children,
  footer,
  onNavigate,
}: {
  id: string;
  width: number;
  children: ReactNode;
  footer: { left: { href: string; label: string }; right: { href: string; label: string } };
  onNavigate: () => void;
}) {
  return (
    <div
      id={id}
      className="fixed inset-x-0 top-[76px] mx-auto animate-rise rounded-2xl border border-ivory/15 bg-ink p-6 text-ivory shadow-[0_24px_50px_-12px_rgba(0,0,0,0.6)]"
      style={{ width: `min(${width}px, calc(100vw - 48px))` }}
    >
      {children}
      <div className="mt-5 flex items-center justify-between gap-4 border-t border-ivory/10 pt-4 text-[13px]">
        <SmartLink href={footer.left.href} onClick={onNavigate} className="text-ivory/65 transition-colors hover:text-ivory">
          {footer.left.label}
        </SmartLink>
        <SmartLink href={footer.right.href} onClick={onNavigate} className="inline-flex items-center gap-1.5 font-medium text-sun hover:underline">
          {footer.right.label} <ArrowRight className="size-3.5" aria-hidden />
        </SmartLink>
      </div>
    </div>
  );
}

function GroupLabel({ children }: { children: ReactNode }) {
  return <p className="t-arcade text-[11px] text-sun">{children}</p>;
}

/** One row: square icon/mark, title, optional one-line detail. */
function Row({
  href,
  onNavigate,
  mark,
  title,
  detail,
  meta,
}: {
  href: string;
  onNavigate: () => void;
  mark: ReactNode;
  title: string;
  detail?: string;
  meta?: string;
}) {
  return (
    <SmartLink href={href} onClick={onNavigate} className="group -mx-2 flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-ivory/6">
      <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-md border border-ivory/15 text-sun">{mark}</span>
      <span className="min-w-0">
        <span className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-[14px] leading-snug font-medium text-ivory/90 transition-colors group-hover:text-sun">{title}</span>
          {meta && <span className="t-arcade text-[9.5px] text-ivory/45">{meta}</span>}
        </span>
        {detail && <span className="mt-0.5 block text-[12.5px] leading-snug text-ivory/55">{detail}</span>}
      </span>
    </SmartLink>
  );
}

/* --------------------------------------------------------------- services */
const servicePages = [
  {
    id: "ai",
    label: "AI and automation",
    items: [
      { icon: "ai" as const, title: "AI Engineering & Architecture", href: "/services/ai-development" },
      { icon: "ai" as const, title: "Autonomous AI Agents", href: "/services/ai-agents" },
      { icon: "ai" as const, title: "Multi-Agent Orchestration", href: "/services/multi-agent-systems" },
      { icon: "automation" as const, title: "Workflow & Business Automation", href: "/#discipline-automation" },
    ],
  },
  {
    id: "engineering",
    label: "Product and engineering",
    items: [
      { icon: "web" as const, title: "Full-Stack Web Development", href: "/services/full-stack-web-development" },
      { icon: "software" as const, title: "Custom Software & SaaS", href: "/services/software-development" },
      { icon: "web" as const, title: "Mobile Applications", href: "/services/application-development" },
      { icon: "design" as const, title: "Product & Interface Design", href: "/services/ui-ux-design" },
    ],
  },
  {
    id: "strategy",
    label: "Advisory, cloud and QA",
    items: [
      { icon: "consulting" as const, title: "Technology Consulting & Fractional CTO", href: "/services/tech-consultancy" },
      { icon: "consulting" as const, title: "AI Strategy & Readiness", href: "/services/ai-consulting" },
      { icon: "cloud" as const, title: "Cloud Infrastructure & DevOps", href: "/services/management-scaling" },
      { icon: "quality" as const, title: "QA & Vulnerability Hardening", href: "/services/application-testing" },
    ],
  },
];

export function ServicesPanel({ id, onNavigate }: NavPanelProps) {
  return (
    <Panel
      id={id}
      width={860}
      onNavigate={onNavigate}
      footer={{ left: { href: "/#capabilities", label: "How we work across disciplines" }, right: { href: "/book", label: "Talk to an engineer" } }}
    >
      <div className="grid grid-cols-3 gap-6">
        {servicePages.map((group) => (
          <div key={group.id}>
            <GroupLabel>{group.label}</GroupLabel>
            <div className="mt-3 space-y-0.5">
              {group.items.map((item) => {
                const Icon = serviceIcons[item.icon];
                return (
                  <Row key={item.title} href={item.href} onNavigate={onNavigate} title={item.title} mark={<Icon className="size-3.5" aria-hidden />} />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* --------------------------------------------------------------- products */
export function ProductMark({ name, logo }: { name: string; logo?: { src: string; alt: string } }) {
  if (logo) return <Image src={logo.src} alt="" width={32} height={32} className="size-full" />;
  return <span className="t-arcade text-[10px] text-sun">{name.replace(/[^A-Za-z]/g, "").slice(0, 2)}</span>;
}

export function ProductsPanel({ id, onNavigate }: NavPanelProps) {
  return (
    <Panel
      id={id}
      width={680}
      onNavigate={onNavigate}
      footer={{
        left: { href: "/earn-with-nhb", label: "Introduce a product and earn" },
        right: { href: "/book?topic=products", label: "Request a demo" },
      }}
    >
      <GroupLabel>Our SaaS products</GroupLabel>
      <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-0.5">
        {products.map((p) => (
          <Row
            key={p.id}
            href={`/earn-with-nhb#product-${p.id}`}
            onNavigate={onNavigate}
            mark={<ProductMark name={p.name} logo={p.logo} />}
            title={p.name}
            meta={productStatusLabel[p.status]}
            detail={p.category}
          />
        ))}
      </div>
    </Panel>
  );
}

/* --------------------------------------------------------------- ecosystem */
const programMarks: Record<string, string> = { startups: "ST", referral: "RE", products: "PR", partners: "AG", careers: "CA" };

export function EcosystemPanel({ id, onNavigate }: NavPanelProps) {
  return (
    <Panel
      id={id}
      width={680}
      onNavigate={onNavigate}
      footer={{ left: { href: "/book", label: "Not sure which fits?" }, right: { href: "/book", label: "Book a one-to-one meeting" } }}
    >
      <GroupLabel>Ways to work with us</GroupLabel>
      <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-0.5">
        {programs.map((p) => (
          <Row
            key={p.id}
            href={p.href}
            onNavigate={onNavigate}
            mark={<span className="t-arcade text-[10px] text-sun">{programMarks[p.id]}</span>}
            title={p.title}
            detail={p.audience}
          />
        ))}
      </div>
    </Panel>
  );
}
