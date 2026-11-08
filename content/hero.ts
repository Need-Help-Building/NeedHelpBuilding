/** §02 hero — copy and the illustrative "brief → system" scenarios for the hero system map. */

export const hero = {
  eyebrow: "Digital product engineering · AI · Technology consulting",
  titleLead: "Engineering for businesses that",
  titleMark: "can't afford to guess.",
  lede: "We partner with ambitious businesses to engineer digital products, intelligent systems, and technology-driven experiences that solve real problems.",
  capabilities: ["AI & agents", "Automation", "Product engineering", "Technology consulting"],
};

export type NodeId = "problem" | "strategy" | "product" | "ai" | "automation" | "data" | "production";

export interface HeroScenario {
  id: string;
  tab: string;
  path: NodeId[];
  brief: string;
  decision: string;
  built: string;
}

export const heroScenarios: HeroScenario[] = [
  {
    id: "calls",
    tab: "Missed calls",
    path: ["problem", "strategy", "ai", "data", "production"],
    brief: "Customers call after hours and nobody picks up.",
    decision: "A voice agent grounded in the business's own data, booking into the calendar it already uses.",
    built: "Voice pipeline · retrieval · calendar & CRM sync",
  },
  {
    id: "invoices",
    tab: "Manual invoicing",
    path: ["problem", "strategy", "automation", "data", "production"],
    brief: "Finance re-types invoices from email into the accounting system.",
    decision: "Automation first: document extraction with human approval for exceptions. No new app required.",
    built: "Email intake · document AI · accounting sync",
  },
  {
    id: "saas",
    tab: "New SaaS product",
    path: ["problem", "strategy", "product", "data", "production"],
    brief: "A founder has validated demand and needs an MVP that can grow.",
    decision: "A focused MVP on a proven stack, designed from day one to become multi-tenant SaaS.",
    built: "Web app · auth & billing · admin dashboard",
  },
];
