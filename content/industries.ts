import { mailto } from "./site";

/** Industries: the homepage section (IndustryExplorer) and the /industries page. CTAs open a pre-filled enquiry. */

export type IndustryGlyph =
  | "healthcare"
  | "education"
  | "retail"
  | "hospitality"
  | "finance"
  | "manufacturing"
  | "startups"
  | "services";

export interface Industry {
  slug: IndustryGlyph;
  name: string;
  summary: string;
  solutions: string[];
  evidence?: { label: string; href: string };
  cta: { label: string; href: string };
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Clinics and hospitals run on schedules, records and compliance. We build systems that respect all three — and give staff time back for patients.",
    solutions: ["Hospital & clinic management", "Patient portals & appointment booking", "Prescription & billing workflows", "AI-assisted intake & triage"],
    cta: { label: "Discuss a healthcare project", href: mailto("Healthcare project enquiry") },
  },
  {
    slug: "education",
    name: "Education",
    summary:
      "Learning, administration and communication usually live in separate tools. We connect them so institutions can run as one system.",
    solutions: ["Learning platforms & course delivery", "Admissions & student management", "Fee, attendance & reporting automation", "AI tutoring & doubt-resolution assistants"],
    cta: { label: "Discuss an education project", href: mailto("Education project enquiry") },
  },
  {
    slug: "retail",
    name: "Retail & E-commerce",
    summary:
      "Every point of friction between browsing and checkout costs a sale. We build commerce that is fast to use and simple to operate.",
    solutions: ["Storefronts & custom commerce", "Inventory & order management", "Support & order-status automation", "Personalised product discovery"],
    evidence: { label: "See YourStoreHere", href: "/work/yourstorehere" },
    cta: { label: "Discuss a commerce project", href: mailto("Retail / e-commerce project enquiry") },
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    summary:
      "Guests expect instant answers and easy bookings; kitchens and front desks need tight operations behind the scenes.",
    solutions: ["Booking & reservation systems", "AI voice & WhatsApp concierge", "Kitchen & prep operations", "Review & feedback automation"],
    evidence: { label: "See Sous Chef", href: "/work/sous-chef" },
    cta: { label: "Discuss a hospitality project", href: mailto("Hospitality project enquiry") },
  },
  {
    slug: "finance",
    name: "Finance & FinTech",
    summary:
      "Money software has no margin for error. Correctness, auditability and security come before features.",
    solutions: ["Onboarding & KYC workflows", "Dashboards & reporting", "Statement & invoice intelligence", "Payment integrations & reconciliation"],
    cta: { label: "Discuss a fintech project", href: mailto("Finance / fintech project enquiry") },
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Production depends on information moving cleanly between the floor, the warehouse and the office.",
    solutions: ["Production & inventory tracking", "Quality & maintenance logs", "Supplier & purchase-order automation", "Operational dashboards"],
    cta: { label: "Discuss a manufacturing project", href: mailto("Manufacturing project enquiry") },
  },
  {
    slug: "startups",
    name: "Startups",
    summary:
      "Founders need the right product built in the right order, without burning runway on the wrong stack.",
    solutions: ["MVP scoping & development", "Technical co-founder partnership", "Architecture that survives growth", "Technical due diligence for fundraising"],
    evidence: { label: "See our startup partnerships", href: "/work/ganges" },
    cta: { label: "Discuss your startup", href: mailto("Startup project enquiry") },
  },
  {
    slug: "services",
    name: "Professional Services",
    summary:
      "Firms sell expertise. Their systems should stop eating billable hours on intake, paperwork and follow-ups.",
    solutions: ["Client portals & intake", "Document & proposal automation", "CRM & pipeline automation", "Knowledge assistants over internal documents"],
    cta: { label: "Discuss a services project", href: mailto("Professional services project enquiry") },
  },
];
