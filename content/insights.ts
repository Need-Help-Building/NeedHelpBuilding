import { mailto } from "./site";

/**
 * §13 — editorial pipeline. These are planned articles, shown as "upcoming": no publish dates are
 * claimed. Replace with real posts (title, href, date) as they are published.
 */

export type InsightArt = "agents" | "decision" | "retrieval" | "workflow";

export interface Insight {
  title: string;
  category: string;
  readingTime: string;
  dek: string;
  art: InsightArt;
  /** ISO date once published; null = upcoming. */
  date: string | null;
  href: string | null;
}

export const insights: Insight[] = [
  {
    title: "Agents need boundaries: designing tool permissions for production AI",
    category: "AI agents",
    readingTime: "9 min read",
    dek: "Why the most important part of an agent is the list of things it is not allowed to do — and how to design it.",
    art: "agents",
    date: null,
    href: null,
  },
  {
    title: "Build, buy or integrate? A decision framework for your next system",
    category: "Technical strategy",
    readingTime: "7 min read",
    dek: "A practical way to weigh custom software against SaaS and integration, before the budget is committed.",
    art: "decision",
    date: null,
    href: null,
  },
  {
    title: "Your RAG prototype works. Here's what breaks in production.",
    category: "AI implementation",
    readingTime: "11 min read",
    dek: "Chunking, retrieval evaluation, stale data and citations — the unglamorous work behind trustworthy answers.",
    art: "retrieval",
    date: null,
    href: null,
  },
  {
    title: "Automate the handoff, not the job",
    category: "Business automation",
    readingTime: "6 min read",
    dek: "How to choose the first workflows worth automating, and the ones you should leave alone.",
    art: "workflow",
    date: null,
    href: null,
  },
];

export const insightsNotify = mailto("Notify me about NHB engineering insights");
