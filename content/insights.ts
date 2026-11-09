import { mailto } from "./site";
import { articles, readingTime } from "./articles";

/**
 * §13 — published engineering notes. Bodies live in ./articles.ts; reading time is derived from the real
 * word count so the label never drifts from the content.
 */

export type InsightArt = "agents" | "decision" | "retrieval" | "workflow";

export interface Insight {
  slug: string;
  title: string;
  /** Shorter title for <title> and social cards when `title` is too long for search results (≤ 54 chars). */
  metaTitle?: string;
  category: string;
  readingTime: string;
  dek: string;
  art: InsightArt;
  /** ISO date once published; null = upcoming. */
  date: string | null;
  href: string;
}

const posts: Insight[] = [
  {
    slug: "agents-need-boundaries",
    metaTitle: "Agents Need Boundaries: AI Tool Permissions",
    title: "Agents need boundaries: designing tool permissions for production AI",
    category: "AI agents",
    readingTime: "",
    dek: "Why the most important part of an agent is the list of things it is not allowed to do — and how to design it.",
    art: "agents",
    date: "2026-03-12",
    href: "/blog/agents-need-boundaries",
  },
  {
    slug: "build-buy-or-integrate",
    metaTitle: "Build, Buy or Integrate? A Decision Framework",
    title: "Build, buy or integrate? A decision framework for your next system",
    category: "Technical strategy",
    readingTime: "",
    dek: "A practical way to weigh custom software against SaaS and integration, before the budget is committed.",
    art: "decision",
    date: "2026-02-24",
    href: "/blog/build-buy-or-integrate",
  },
  {
    slug: "your-rag-prototype-works",
    metaTitle: "What Breaks When Your RAG Prototype Ships",
    title: "Your RAG prototype works. Here's what breaks in production.",
    category: "AI implementation",
    readingTime: "",
    dek: "Chunking, retrieval evaluation, stale data and citations — the unglamorous work behind trustworthy answers.",
    art: "retrieval",
    date: "2026-02-10",
    href: "/blog/your-rag-prototype-works",
  },
  {
    slug: "automate-the-handoff",
    title: "Automate the handoff, not the job",
    category: "Business automation",
    readingTime: "",
    dek: "How to choose the first workflows worth automating, and the ones you should leave alone.",
    art: "workflow",
    date: "2026-01-18",
    href: "/blog/automate-the-handoff",
  },
];

export const insights: Insight[] = posts.map((p) => ({
  ...p,
  readingTime: articles[p.slug] ? readingTime(articles[p.slug]) : p.readingTime,
}));

export const insightsNotify = mailto("Notify me about NHB engineering insights");
