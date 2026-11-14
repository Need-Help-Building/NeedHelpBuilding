import { mailto, site } from "./site";

/**
 * Careers at NHB: roles, filters, team, perks and the open application.
 *
 * Roles below are MOCK roles (mock: true) written to show the structure. Replace them with real openings.
 * - `applyUrl`: paste the role's Tally form URL (e.g. https://tally.so/r/abc123). The role page then embeds
 *   the form; without it, Apply opens a pre-filled email to the team.
 * - Mock roles never emit JobPosting structured data, so search engines don't list placeholder jobs.
 *   Set `mock: false` (and fill `datePosted`) when a role is real.
 */

export type Department = "Engineering" | "AI" | "Design" | "Quality" | "Automation" | "Growth";
export type EmploymentType = "Full-time" | "Internship" | "Contract";
export type WorkMode = "Remote" | "Hybrid";

export interface Role {
  slug: string;
  title: string;
  department: Department;
  type: EmploymentType;
  workMode: WorkMode;
  location: string;
  experience: string;
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  applyUrl?: string;
  mock: boolean;
  /** ISO date; required for JobPosting data once the role is real. */
  datePosted?: string;
}

export const roles: Role[] = [
  {
    slug: "full-stack-engineer",
    title: "Full-Stack Engineer (Next.js)",
    department: "Engineering",
    type: "Full-time",
    workMode: "Remote",
    location: "India",
    experience: "2+ years",
    summary: "Build production web products end to end, from the database schema to the last interaction.",
    about:
      "You'll own features across client projects and NHB's own products: designing the data model, building the API, shipping the interface and keeping it healthy in production.",
    responsibilities: [
      "Design and build features across Next.js, TypeScript and PostgreSQL",
      "Write clear technical notes for the decisions you make",
      "Review code and pair with designers and QA before release",
      "Monitor what you ship and fix what breaks",
    ],
    requirements: [
      "2+ years building and shipping web applications",
      "Strong TypeScript and React fundamentals",
      "Comfort with relational databases and API design",
      "Clear written communication",
    ],
    niceToHave: ["Experience with Next.js App Router", "Exposure to AI or automation work", "Open-source contributions"],
    mock: true,
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer (LLMs & Agents)",
    department: "AI",
    type: "Full-time",
    workMode: "Remote",
    location: "India",
    experience: "2+ years",
    summary: "Build AI agents, retrieval systems and voice pipelines that hold up in production, not just in demos.",
    about:
      "You'll design and ship LLM-powered systems for clients and products like Caller OS: tool-using agents, retrieval pipelines and the evaluations that keep them honest.",
    responsibilities: [
      "Build agents with scoped, validated tools",
      "Design retrieval pipelines and measure their quality",
      "Set up evaluations, tracing and cost controls",
      "Explain trade-offs to clients in plain language",
    ],
    requirements: [
      "Hands-on experience shipping LLM features",
      "Solid Python or TypeScript",
      "Understanding of retrieval, embeddings and prompt design",
      "A habit of measuring before claiming",
    ],
    niceToHave: ["Real-time voice or speech experience", "Experience with open-source model hosting", "MLOps exposure"],
    mock: true,
  },
  {
    slug: "product-designer",
    title: "Product Designer (UI/UX)",
    department: "Design",
    type: "Full-time",
    workMode: "Remote",
    location: "India",
    experience: "2+ years",
    summary: "Design products people can use without a manual, and design systems engineers can ship.",
    about:
      "You'll take products from research to high-fidelity design, working directly with engineers and founders, and you'll care about how the shipped version matches the design.",
    responsibilities: [
      "Run lightweight research and turn it into flows",
      "Design interfaces and maintain design systems in Figma",
      "Prototype interactions and hand off with clear specs",
      "Review builds and push for the details",
    ],
    requirements: ["A portfolio of shipped product work", "Strong interaction and visual design", "Fluency in Figma", "Ability to explain design decisions"],
    niceToHave: ["Motion design", "Front-end skills", "Experience designing for AI products"],
    mock: true,
  },
  {
    slug: "qa-automation-engineer",
    title: "QA & Automation Engineer",
    department: "Quality",
    type: "Full-time",
    workMode: "Remote",
    location: "India",
    experience: "1+ years",
    summary: "Find what breaks before users do, and build the test suites that keep it from breaking again.",
    about:
      "You'll own quality across projects: mapping critical flows, writing automated tests, and making sure releases are checked before they ship.",
    responsibilities: [
      "Map critical user flows and edge cases",
      "Write and maintain Playwright or Cypress suites",
      "Run functional, regression and basic security checks",
      "Report issues clearly and verify fixes",
    ],
    requirements: ["1+ years in QA or test automation", "Comfort with JavaScript or TypeScript", "A methodical, curious approach", "Clear bug reports"],
    niceToHave: ["Load testing experience", "API testing", "CI pipeline setup"],
    mock: true,
  },
  {
    slug: "automation-specialist",
    title: "Automation Specialist (n8n / Make)",
    department: "Automation",
    type: "Contract",
    workMode: "Remote",
    location: "Worldwide",
    experience: "1+ years",
    summary: "Connect business tools and remove manual handoffs with reliable, well-documented workflows.",
    about:
      "You'll design and build automations for clients: lead routing, document intake, CRM sync and notifications, with error handling that doesn't fail silently.",
    responsibilities: [
      "Map processes and identify the right handoffs to automate",
      "Build workflows in n8n, Make or Zapier",
      "Handle errors, retries and logging",
      "Document what you build for the client team",
    ],
    requirements: ["Shipped automations used by real teams", "Comfort with APIs and webhooks", "Clear documentation habits"],
    niceToHave: ["JavaScript for custom steps", "Experience with WhatsApp or CRM APIs"],
    mock: true,
  },
  {
    slug: "frontend-intern",
    title: "Frontend Developer Intern",
    department: "Engineering",
    type: "Internship",
    workMode: "Remote",
    location: "India",
    experience: "Students & recent graduates",
    summary: "Learn by shipping real interfaces alongside senior engineers, with feedback on every pull request.",
    about:
      "You'll work on real features from day one, pair with experienced engineers and get detailed code review on everything you build.",
    responsibilities: ["Build UI components from designs", "Fix bugs and polish interactions", "Write simple tests", "Ask questions early"],
    requirements: ["Working knowledge of HTML, CSS and JavaScript", "Some React experience (projects count)", "Willingness to learn fast and take feedback"],
    niceToHave: ["TypeScript", "A portfolio or GitHub with your work"],
    mock: true,
  },
  {
    slug: "business-development-associate",
    title: "Business Development Associate",
    department: "Growth",
    type: "Full-time",
    workMode: "Hybrid",
    location: "India",
    experience: "1+ years",
    summary: "Find businesses that need better technology and start conversations worth having.",
    about:
      "You'll identify opportunities, run first conversations and work with the founders and engineers to turn them into well-scoped projects.",
    responsibilities: [
      "Research and reach out to businesses that fit",
      "Run discovery calls and capture requirements",
      "Coordinate proposals with the delivery team",
      "Support the referral and partner programs",
    ],
    requirements: ["1+ years in sales or business development", "Excellent spoken and written English", "Comfort talking about technology"],
    niceToHave: ["B2B services or SaaS experience", "An existing network in a target industry"],
    mock: true,
  },
  {
    slug: "mobile-developer",
    title: "Mobile Developer (React Native)",
    department: "Engineering",
    type: "Contract",
    workMode: "Remote",
    location: "Worldwide",
    experience: "2+ years",
    summary: "Build cross-platform apps that work offline, on real devices, in real conditions.",
    about:
      "You'll build mobile apps for clients and products, including offline-first experiences for operations teams who can't rely on a signal.",
    responsibilities: ["Build features in React Native and TypeScript", "Handle offline sync and device APIs", "Ship builds to the stores", "Work closely with design and QA"],
    requirements: ["2+ years shipping React Native apps", "Experience with offline storage and sync", "App store release experience"],
    niceToHave: ["Native iOS or Android experience", "Tablet and kiosk app experience"],
    mock: true,
  },
];

export const departments = [...new Set(roles.map((r) => r.department))];
export const employmentTypes = [...new Set(roles.map((r) => r.type))];
export const workModes = [...new Set(roles.map((r) => r.workMode))];

export function getRole(slug: string) {
  return roles.find((r) => r.slug === slug);
}

/** Apply link for a role: its Tally form when set, otherwise a pre-filled email. */
export function applyHref(role: Role) {
  return (
    role.applyUrl ??
    mailto(
      `Application: ${role.title}`,
      `Hi NHB team,\n\nI'd like to apply for the ${role.title} role.\n\nName:\nPhone / WhatsApp:\nLinkedIn / portfolio / GitHub:\nWhy this role:\n\nI've attached my resume (PDF).\n`,
    )
  );
}

/** "Don't see your role?" open application by email. */
export const openApplication = {
  email: site.email,
  href: mailto(
    "Open application: [your area]",
    "Hi NHB team,\n\nI don't see a role that fits, but I'd like to work with NHB.\n\nName:\nWhat I'm best at:\nWhat I'd like to build or own at NHB:\nLinks (portfolio, GitHub, LinkedIn):\nAvailability (full-time / internship / contract):\n\nI've attached my resume (PDF).\n",
  ),
};

/** What working at NHB looks like. Confirm each item before launch. */
export const perks = [
  { title: "Remote-first", detail: "Work from where you work best. We plan around written communication and overlapping hours." },
  { title: "Real ownership", detail: "You own features and decisions on products that real businesses use, not tickets in a queue." },
  { title: "Work with the founders", detail: "Direct access to the people who design the systems and review the code." },
  { title: "Breadth across disciplines", detail: "AI, engineering, design, QA and automation under one roof, so you see how products are really built." },
  { title: "Feedback that makes you better", detail: "Detailed code and design review, and regular conversations about where you want to grow." },
  { title: "Flexible hours", detail: "Results matter more than hours online. Plan your day around your best work." },
];

export const teamValues = [
  { title: "Decide before we build", detail: "We write down the options and trade-offs, then build the simplest thing that works." },
  { title: "Own the outcome", detail: "We're accountable for what runs in production, not just what was delivered." },
  { title: "Say it plainly", detail: "Clear, honest communication with each other and with clients, including when something is hard." },
  { title: "Craft over speed theatre", detail: "We move quickly, but we don't ship work we wouldn't put our name to." },
];

export const hiringSteps = [
  { title: "Apply", detail: "Apply to a role, or send an open application with your resume and the work you're proudest of." },
  { title: "Intro call", detail: "A short conversation about you, the role and what you want next." },
  { title: "Skills conversation", detail: "A practical discussion around real work. Any exercise is short and relevant to the role." },
  { title: "Meet the founders", detail: "Talk with Divy and Suyash about how we work and what you'd own." },
  { title: "Offer", detail: "If it's a fit on both sides, we make a clear written offer." },
];

export const careersFaq = [
  {
    q: "What if no open role fits me?",
    a: `Send an open application to ${site.email} with your resume and what you'd like to work on. We read every one, and when someone's skills are a strong fit we can shape a role around them.`,
  },
  {
    q: "Do you hire interns?",
    a: "Yes. Internships are real project work with senior review on everything you build. Students and recent graduates are welcome to apply.",
  },
  {
    q: "Can I work remotely?",
    a: "Most roles are remote-first within India, and some contract roles are open worldwide. Each role lists its work mode and location.",
  },
  {
    q: "How long does hiring take?",
    a: "We aim to reply to every application personally. The process is short: an intro call, a skills conversation and a meeting with the founders.",
  },
  {
    q: "What should I include in my application?",
    a: "Your resume (PDF), links to work you've shipped, and a few lines on what you'd like to build or own at NHB.",
  },
];
