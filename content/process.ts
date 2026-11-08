/** §08 — engineering process. */

export interface ProcessStage {
  index: string;
  name: string;
  summary: string;
  principle: string;
  outputs: string[];
}

export const processStages: ProcessStage[] = [
  {
    index: "01",
    name: "Discover",
    summary: "Understand business objectives and technical requirements.",
    principle:
      "Diagnose before prescribing. The problem a client arrives with isn't always the one worth solving first, so we talk to the people who do the work and look at the systems they use.",
    outputs: ["Stakeholder & user interviews", "Current-system audit", "Problem statement & success criteria"],
  },
  {
    index: "02",
    name: "Strategize",
    summary: "Identify suitable technologies, architecture and execution plans.",
    principle:
      "Every significant choice is written down with the options considered, the trade-offs and the cost — so decisions can be revisited with context instead of memory.",
    outputs: ["Architecture options & trade-offs", "Build / buy / integrate decisions", "Phased roadmap & estimate"],
  },
  {
    index: "03",
    name: "Design",
    summary: "Create user experiences, interfaces and technical blueprints.",
    principle:
      "We design the screens and the system together, so the interface never promises something the backend can't keep.",
    outputs: ["User flows & clickable prototypes", "Interface design system", "Data model & API contracts"],
  },
  {
    index: "04",
    name: "Engineer",
    summary: "Build frontend, backend, AI systems and integrations.",
    principle:
      "Small, reviewed increments deployed to a preview environment. You watch the product take shape instead of waiting for a big reveal.",
    outputs: ["Working preview builds", "Reviewed, typed code", "Integrations & automated tests"],
  },
  {
    index: "05",
    name: "Validate",
    summary: "Test functionality, security, reliability and performance.",
    principle:
      "Assume it will break, then prove where. Functional, security and load testing happen before launch — not after the first incident.",
    outputs: ["Automated & manual QA", "Security review", "Performance & load results"],
  },
  {
    index: "06",
    name: "Deploy",
    summary: "Launch and configure infrastructure.",
    principle:
      "Releases should be boring: automated, reversible and observable from the first minute in production.",
    outputs: ["CI/CD pipelines", "Infrastructure configuration", "Monitoring, alerts & runbooks"],
  },
  {
    index: "07",
    name: "Evolve",
    summary: "Monitor, maintain and continuously improve.",
    principle:
      "Launch is the first real data point. We measure against the goals set in Discover, then maintain and improve — and the loop starts again.",
    outputs: ["Usage & error monitoring", "Maintenance & upgrades", "Improvement roadmap"],
  },
];
