import { mailto } from "./site";

/** §05 — four disciplines, each with its own visual treatment. */

export type DisciplineVisual = "agents" | "stack" | "decision" | "pipeline";

export interface Discipline {
  id: string;
  index: string;
  title: string;
  kicker: string;
  summary: string;
  capabilities: string[];
  technical: string[];
  link: { label: string; href: string };
  visual: DisciplineVisual;
}

export const disciplines: Discipline[] = [
  {
    id: "discipline-ai",
    index: "01",
    title: "AI & Intelligent Systems",
    kicker: "Agents · RAG · voice · document AI",
    summary:
      "We design AI systems around the work they need to do: the data they can trust, the tools they're allowed to use and the point where a human stays in control. Then we engineer them to run reliably in production.",
    capabilities: [
      "AI agents & tool use",
      "Retrieval-augmented generation",
      "Voice & conversational AI",
      "Document intelligence",
      "Evaluation & guardrails",
      "AI inside internal tools",
    ],
    technical: ["Function calling & structured outputs", "Embeddings + vector search", "Tracing & evals", "Model routing & caching"],
    link: { label: "Explore AI engineering", href: "/services/ai-development" },
    visual: "agents",
  },
  {
    id: "discipline-product",
    index: "02",
    title: "Digital Product Engineering",
    kicker: "Web · SaaS · mobile · platforms",
    summary:
      "Web platforms, SaaS products, mobile apps and internal systems: designed, built and deployed by one team that owns the architecture from the database to the last pixel.",
    capabilities: [
      "Web applications",
      "SaaS products & MVPs",
      "Mobile & cross-platform apps",
      "Backend, APIs & data",
      "Product design & UX",
      "QA & security testing",
    ],
    technical: ["TypeScript end to end", "Typed APIs & migrations", "Auth, roles & multi-tenancy", "CI/CD with preview deploys"],
    link: { label: "Explore product engineering", href: "/services/full-stack-web-development" },
    visual: "stack",
  },
  {
    id: "discipline-consulting",
    index: "03",
    title: "Technology Consulting",
    kicker: "Architecture · stack · AI readiness · CTO",
    summary:
      "Independent technical judgement before you commit budget: what to build, what to buy, which architecture fits, and what it will really take to get there.",
    capabilities: [
      "Architecture reviews",
      "Technology stack selection",
      "AI readiness assessments",
      "MVP scoping & feasibility",
      "Technical due diligence",
      "Fractional CTO",
    ],
    technical: ["Architecture decision records", "Build-vs-buy analysis", "Risk & cost modelling", "Phased roadmaps"],
    link: { label: "Explore technology consulting", href: "/services/tech-consultancy" },
    visual: "decision",
  },
  {
    id: "discipline-automation",
    index: "04",
    title: "Business Automation",
    kicker: "Workflows · CRM · documents · messaging",
    summary:
      "We map how work actually moves through your business, remove the manual handoffs and connect the tools you already pay for, with AI where it helps, and plain logic where that's enough.",
    capabilities: [
      "Workflow automation",
      "CRM & sales pipelines",
      "Lead capture & qualification",
      "Invoice & document flows",
      "Scheduling & notifications",
      "WhatsApp & email automation",
    ],
    technical: ["Webhooks & event-driven flows", "n8n · Make · Zapier · custom code", "Retries & error queues", "Audit logs & approvals"],
    link: { label: "Discuss an automation", href: mailto("Business automation enquiry") },
    visual: "pipeline",
  },
];
