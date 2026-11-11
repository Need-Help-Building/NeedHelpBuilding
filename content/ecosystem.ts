/**
 * NHB ecosystem programs: navigation entries, meeting topics and shared program copy.
 * Commercial terms here are deliberately non-specific where nothing has been finalised (no fixed equity
 * percentages, no product-specific commission rates). Update the copy as terms are agreed.
 */

export type ProgramId = "startups" | "referral" | "products" | "partners";

export interface Program {
  id: ProgramId;
  title: string;
  /** Compact label for the footer. */
  navLabel: string;
  href: string;
  audience: string;
  summary: string;
}

export const programs: Program[] = [
  {
    id: "startups",
    title: "Startup Program",
    navLabel: "Startup Program",
    href: "/startups",
    audience: "For founders",
    summary: "A product and engineering team for early-stage founders, with partnership models evaluated case by case.",
  },
  {
    id: "referral",
    title: "Referral & Ambassador Program",
    navLabel: "Referral Program",
    href: "/referral-program",
    audience: "For professionals & students",
    summary: "Introduce businesses that need technology. Earn 10% commission on eligible, closed work.",
  },
  {
    id: "products",
    title: "Products & Revenue Program",
    navLabel: "Product Partners",
    href: "/earn-with-nhb",
    audience: "For product partners",
    summary: "Bring NHB's software products to the businesses in your network, with demos and closing handled by us.",
  },
  {
    id: "partners",
    title: "Agency Partner Program",
    navLabel: "Agency Partners",
    href: "/partners",
    audience: "For agencies & studios",
    summary: "You bring the client relationship. We bring design, engineering and QA capacity behind it.",
  },
];

export function getProgram(id: ProgramId): Program {
  const program = programs.find((p) => p.id === id);
  if (!program) throw new Error(`Unknown program: ${id}`);
  return program;
}

/** Topics for the shared /book page (?topic=…). Each pre-fills the meeting request. */
export const meetingTopics = {
  general: { label: "Discuss your business requirements", subject: "One-to-one meeting request" },
  startups: { label: "Discuss your startup", subject: "Startup Program — one-to-one discussion" },
  referral: { label: "Talk to our team about referrals", subject: "Referral & Ambassador Program — meeting request" },
  products: { label: "Talk about the product program", subject: "Products & Revenue Program — meeting request" },
  partners: { label: "Explore a partnership", subject: "Agency Partner Program — meeting request" },
} as const;

export type MeetingTopic = keyof typeof meetingTopics;

export function isMeetingTopic(value: string | undefined): value is MeetingTopic {
  return !!value && value in meetingTopics;
}
