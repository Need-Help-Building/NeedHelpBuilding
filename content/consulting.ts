import { mailto } from "./site";

/** §11 — technology consulting topics, each phrased as the question a client actually asks. */

export interface ConsultingTopic {
  id: string;
  label: string;
  question: string;
  deliverable: string;
}

export const consultingTopics: ConsultingTopic[] = [
  {
    id: "architecture",
    label: "Software architecture",
    question: "Will our architecture hold up as we grow?",
    deliverable: "Architecture review with prioritised risks and a target design",
  },
  {
    id: "stack",
    label: "Technology stack selection",
    question: "Which stack should we build on?",
    deliverable: "Stack recommendation with trade-offs, costs and hiring implications",
  },
  {
    id: "ai-readiness",
    label: "AI readiness assessment",
    question: "Where would AI actually help us?",
    deliverable: "Use cases ranked by value, data readiness and risk",
  },
  {
    id: "feasibility",
    label: "Technical feasibility",
    question: "Can this be built, and what would it take?",
    deliverable: "Feasibility study with a proof-of-concept plan and cost range",
  },
  {
    id: "mvp",
    label: "MVP planning",
    question: "What's the smallest product worth launching?",
    deliverable: "MVP scope, core user flows and a phased build plan",
  },
  {
    id: "due-diligence",
    label: "Technical due diligence",
    question: "Is this codebase and team ready for investment?",
    deliverable: "Due-diligence report for founders or investors",
  },
  {
    id: "data-api",
    label: "Database & API architecture",
    question: "How should our data and APIs be designed?",
    deliverable: "Data model, API contracts and an integration map",
  },
  {
    id: "cloud",
    label: "Cloud infrastructure",
    question: "Are we overpaying for infrastructure, or about to outgrow it?",
    deliverable: "Cloud architecture and cost review with a migration path",
  },
  {
    id: "audit",
    label: "Software audit",
    question: "What's really wrong with the system we already have?",
    deliverable: "Findings on code quality, security and performance, in priority order",
  },
  {
    id: "fractional-cto",
    label: "Fractional CTO",
    question: "We need technical leadership, not just developers.",
    deliverable: "Ongoing technical leadership: roadmap, hiring and delivery oversight",
  },
];

/** Real NHB programme from the previous site (kept by user decision 2026-11-08). */
export const coFounderProgramme = {
  title: "Technical co-founder partnership",
  summary:
    "For selected early-stage startups, we act as your technical co-founding team. Development costs are shared and incentives are aligned through an agreed equity stake, then we design, build and launch the product with you.",
  points: ["You bring the market insight and distribution", "We own architecture, engineering and delivery", "Shared runway, shared upside"],
  cta: {
    label: "Pitch your startup",
    href: mailto(
      "Startup technical partnership pitch",
      "Hi NHB team,\n\nStartup name:\nFounder(s):\nWebsite or deck link:\nWhat we're building:\n",
    ),
  },
} as const;

export function consultingMailto(selected: ConsultingTopic[]): string {
  const lines = selected.length
    ? selected.map((t) => `- ${t.label}: ${t.question}`).join("\n")
    : "- (not sure yet, happy to talk it through)";
  return mailto(
    "Technical consultation request",
    `Hi NHB team,\n\nWe'd like to talk through:\n${lines}\n\nAbout us / context:\n\n`,
  );
}
