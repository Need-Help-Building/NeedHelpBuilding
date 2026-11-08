import { mailto } from "./site";

/**
 * Service taxonomy used by the mega-menu, footer and Solutions menu.
 * Items with an `href` link to an existing page; the rest render as plain capability text until their
 * dedicated pages (see services.txt) are built — so nothing links to a 404.
 */

export type ServiceIcon =
  | "ai"
  | "automation"
  | "consulting"
  | "software"
  | "web"
  | "design"
  | "quality"
  | "cloud"
  | "growth";

export interface ServiceLink {
  label: string;
  href?: string;
}

export interface ServiceGroup {
  id: string;
  icon: ServiceIcon;
  title: string;
  summary: string;
  href?: string;
  items: ServiceLink[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: "ai",
    icon: "ai",
    title: "AI & Intelligent Systems",
    summary: "Agents, retrieval systems and generative AI engineered for production, not demos.",
    href: "/services/ai-development",
    items: [
      { label: "AI development & engineering", href: "/services/ai-development" },
      { label: "AI agents", href: "/services/ai-agents" },
      { label: "Multi-agent orchestration", href: "/services/multi-agent-systems" },
      { label: "Generative AI applications", href: "/services/generative-ai" },
    ],
  },
  {
    id: "automation",
    icon: "automation",
    title: "Automation",
    summary: "Workflows that move data, documents and decisions without manual handoffs.",
    href: "/#discipline-automation",
    items: [
      { label: "Business process automation" },
      { label: "Workflow automation" },
      { label: "CRM & sales automation" },
      { label: "Support & WhatsApp automation" },
    ],
  },
  {
    id: "consulting",
    icon: "consulting",
    title: "Technology Consulting",
    summary: "Architecture, stack and AI-readiness decisions made before the budget is spent.",
    href: "/services/tech-consultancy",
    items: [
      { label: "Consulting & fractional CTO", href: "/services/tech-consultancy" },
      { label: "AI strategy & readiness", href: "/services/ai-consulting" },
      { label: "Software architecture reviews" },
      { label: "Technical due diligence" },
    ],
  },
  {
    id: "software",
    icon: "software",
    title: "Software Engineering",
    summary: "Custom platforms, SaaS products and internal systems with clean architecture.",
    href: "/services/software-development",
    items: [
      { label: "Custom software development", href: "/services/software-development" },
      { label: "Code rescue & error fixing", href: "/services/error-fixing" },
      { label: "SaaS & MVP development" },
      { label: "Backend, API & database engineering" },
    ],
  },
  {
    id: "web",
    icon: "web",
    title: "Web & Mobile Development",
    summary: "Fast, accessible web apps and mobile products that people actually use.",
    href: "/services/full-stack-web-development",
    items: [
      { label: "Web application development", href: "/services/full-stack-web-development" },
      { label: "Mobile & cross-platform apps", href: "/services/application-development" },
      { label: "E-commerce development" },
      { label: "Website modernization" },
    ],
  },
  {
    id: "design",
    icon: "design",
    title: "Product Design",
    summary: "Research-led UX, interface design and design systems that engineering can ship.",
    href: "/services/ui-ux-design",
    items: [
      { label: "UI/UX design & prototyping", href: "/services/ui-ux-design" },
      { label: "Design systems" },
      { label: "User research" },
    ],
  },
  {
    id: "quality",
    icon: "quality",
    title: "Quality & Security",
    summary: "Testing, penetration testing and hardening before your users find the gaps.",
    href: "/services/application-testing",
    items: [
      { label: "QA & test automation", href: "/services/application-testing" },
      { label: "Penetration testing", href: "/services/vulnerability-testing" },
      { label: "Performance & load testing" },
    ],
  },
  {
    id: "cloud",
    icon: "cloud",
    title: "Cloud & Infrastructure",
    summary: "Deployments, CI/CD and infrastructure that scale without surprises.",
    href: "/services/management-scaling",
    items: [
      { label: "Scaling & infrastructure", href: "/services/management-scaling" },
      { label: "DevOps & CI/CD" },
      { label: "Cloud migration" },
    ],
  },
  {
    id: "growth",
    icon: "growth",
    title: "Digital Growth",
    summary: "Technical SEO and generative engine optimization, so the right people find you.",
    href: mailto("Digital growth enquiry"),
    items: [
      { label: "Search engine optimization" },
      { label: "Technical SEO & audits" },
      { label: "Generative engine optimization (GEO)" },
    ],
  },
];

export interface Solution {
  title: string;
  summary: string;
  href: string;
}

export const solutions: Solution[] = [
  {
    title: "AI Transformation",
    summary: "Find where AI removes real work, then engineer it safely into how you operate.",
    href: "/#ai-engineering",
  },
  {
    title: "AI Agents & Automation",
    summary: "Agents and workflows that take repetitive operations off your team's plate.",
    href: "/#discipline-automation",
  },
  {
    title: "Startup Launch",
    summary: "MVP scoping, build and launch, including our technical co-founder partnership.",
    href: "/#consulting",
  },
  {
    title: "Digital Business Launch",
    summary: "Website, commerce, payments and operations set up as one working system.",
    href: "/services/full-stack-web-development",
  },
];
