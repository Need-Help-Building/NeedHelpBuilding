import { mailto } from "./site";

/** §03 proof ledger, §12 differentiators, §14 team & credibility, §16 conversion prompts. */

export interface LedgerRow {
  label: string;
  value: string;
  detail: string;
  href?: string;
}

/** Verifiable facts used instead of invented company metrics. */
export const proofLedger: LedgerRow[] = [
  {
    label: "In production",
    value: "Caller OS · YourStoreHere",
    detail: "AI voice agents and a commerce platform — both live, both open to inspect.",
    href: "/#work",
  },
  {
    label: "In development",
    value: "Sous Chef",
    detail: "Kitchen operations software for commercial restaurants.",
    href: "/work/sous-chef",
  },
  {
    label: "Co-founder partnerships",
    value: "Ganges · Earnbuddy",
    detail: "Startups where NHB served as the technical founding team.",
    href: "/#testimonials",
  },
  {
    label: "Under one roof",
    value: "9 practice areas",
    detail: "From AI and automation to QA, security, cloud and growth.",
    href: "/#capabilities",
  },
];

export interface Differentiator {
  title: string;
  practice: string;
}

export const differentiators: Differentiator[] = [
  {
    title: "Business-first technology decisions",
    practice:
      "We start from the outcome and the constraints — budget, timeline, team — and recommend the simplest architecture that meets them. Sometimes that means not building custom software at all.",
  },
  {
    title: "Engineering-led execution",
    practice:
      "The people who recommend the architecture are the people who build it. There is no hand-off from a sales deck to a team you've never met.",
  },
  {
    title: "AI-native thinking",
    practice:
      "We look for where AI removes real work, then engineer it with evaluations, guardrails and cost controls — and we say so when a rule or a form would do the job better.",
  },
  {
    title: "End-to-end product development",
    practice:
      "Strategy, design, engineering, QA, deployment and support from one team, so nothing gets lost between vendors.",
  },
  {
    title: "Transparent technical communication",
    practice:
      "Written decision records, working preview builds and plain-language updates. You always know what was built, why, and what comes next.",
  },
  {
    title: "Scalable architecture",
    practice:
      "Data models, APIs and infrastructure designed for your next stage of growth — without over-engineering for a scale you may never need.",
  },
  {
    title: "Quality and security",
    practice:
      "Code review, automated tests and security checks are part of the build, not an optional extra bolted on at the end.",
  },
  {
    title: "Long-term technology partnerships",
    practice:
      "We maintain and evolve what we ship. For selected startups we go further, as a technical co-founder with shared incentives.",
  },
];

export interface Founder {
  name: string | null;
  role: string | null;
}

export const team = {
  photo: {
    src: "/team.png",
    alt: "NHB co-founders Divy Shukla and Suyash Shukla, arms crossed, photographed in black and white against a yellow glow.",
    width: 1536,
    height: 1024,
  },
  founders: [
    { name: "Divy Shukla", role: "Co-founder" },
    { name: "Suyash Shukla", role: "Co-founder" },
  ] as Founder[],
  statement:
    "NHB is led by engineers who still design systems and review code. When you talk to us, you're talking to the people who will be accountable for the build.",
};

export interface EvidenceItem {
  title: string;
  detail: string;
  href: string;
  linkLabel: string;
}

export const evidence: EvidenceItem[] = [
  {
    title: "Open the products",
    detail: "Caller OS and YourStoreHere are live. Use them before you talk to us.",
    href: "https://caller.work",
    linkLabel: "caller.work",
  },
  {
    title: "Talk to the founders we've built with",
    detail: "Ganges and Earnbuddy worked with us as their technical founding team.",
    href: "/#testimonials",
    linkLabel: "Read what they said",
  },
  {
    title: "Ask for an architecture walkthrough",
    detail: "We'll walk you through how something we built actually works — data model, infrastructure and trade-offs.",
    href: mailto("Architecture walkthrough request"),
    linkLabel: "Request a walkthrough",
  },
];

/**
 * Awards, certifications, publications, hackathons. Intentionally empty: add only verifiable items.
 * The recognition block does not render while this list is empty.
 */
export const recognitions: { title: string; issuer: string; year: string; href?: string }[] = [];

export const conversationStarters = [
  { label: "We're planning a new digital product", subject: "Planning a new digital product" },
  { label: "We want to explore AI or automation", subject: "Exploring AI / automation" },
  { label: "We need to modernise an existing system", subject: "Modernising an existing system" },
  { label: "We're not sure where technology fits yet", subject: "Not sure where technology fits yet" },
].map((s) => ({ label: s.label, href: mailto(s.subject) }));

export const referral = {
  title: "Worked with us before?",
  summary:
    "Introduce a founder or business. When they start a project, they get 10% off and you get 10% back — as cash or as credit towards your next build.",
  cta: {
    label: "See the referral program",
    href: "/referral-program",
  },
};
