/**
 * NHB work. Sources: public/llms.txt, previous homepage (git 1d9a4cf:app/page.tsx), and the real
 * screenshots in /public. Unknown facts are `null` (rendered as <Placeholder/>).
 *
 * Outcome metrics from llms.txt are kept here with `verified: false` and are NOT rendered
 * (user decision 2026-11-08). Flip `verified` to true once a number is confirmed.
 */

export type ProjectStatus = "live" | "in-development" | "partnership";

export interface ProjectMetric {
  label: string;
  value: string;
  verified: boolean;
}

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  category: string;
  industry: string | null;
  summary: string;
  problem: string;
  solution: string;
  built: string[];
  stack: string[] | null;
  liveUrl?: string;
  liveLabel?: string;
  image?: { src: string; alt: string; width: number; height: number };
  /** Illustrative interface rendered in code (clearly labelled on the page). */
  illustrative?: boolean;
  metrics: ProjectMetric[];
}

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live in production",
  "in-development": "In development",
  partnership: "Technical co-founder partnership",
};

export const projects: Project[] = [
  {
    slug: "caller-os",
    name: "Caller OS",
    status: "live",
    category: "AI voice agents",
    industry: "Service businesses · sales & support",
    summary:
      "Real-time AI voice agents that answer and place phone calls in natural speech, grounded in a business's own data.",
    problem:
      "Service businesses miss calls when their people are on the job or off the clock, and a caller who doesn't get an answer rings the next business on the list.",
    solution:
      "A voice AI pipeline that picks up the phone, understands the caller (including Hinglish), answers from the business's own knowledge, checks availability and books the appointment into the calendar, handing urgent calls to a human.",
    built: [
      "Streaming voice pipeline: speech-to-text → LLM → text-to-speech",
      "SIP-ready telephony for inbound and outbound calls",
      "Answers grounded in business data with retrieval (RAG)",
      "Live booking via Google Calendar and Cal.com",
      "SMS and email summaries to staff after every call",
      "Escalation to a person for urgent or complex calls",
    ],
    stack: ["Groq Whisper (STT)", "Llama 3.3 70B", "Google TTS", "SIP telephony", "RAG", "Google Calendar", "Cal.com"],
    liveUrl: "https://caller.work",
    liveLabel: "caller.work",
    image: {
      src: "/caller_work.png",
      alt: "Caller OS product page showing a live transcription stream, per-stage latency for speech-to-text, LLM and text-to-speech, and a grounding confidence meter.",
      width: 1280,
      height: 800,
    },
    metrics: [
      { label: "Missed calls", value: "0", verified: false },
      { label: "Pickup speed", value: "2 rings", verified: false },
      { label: "Lead conversion", value: "+30%", verified: false },
    ],
  },
  {
    slug: "yourstorehere",
    name: "YourStoreHere",
    status: "live",
    category: "Commerce platform",
    industry: "Retail & e-commerce",
    summary:
      "A storefront builder that takes independent sellers from product photos to a working online shop in minutes.",
    problem:
      "Small brands lose days to platform setup, clunky templates and payment configuration before they make a single sale.",
    solution:
      "A lightweight storefront creator: sellers add products and prices, connect payments and get a fast, mobile-first shop with checkout, receipts and an order dashboard.",
    built: [
      "Fast, mobile-first Next.js storefronts",
      "Product catalogue management on desktop and phone",
      "Stripe checkout with automated order receipts",
      "Seller dashboard for daily sales and orders",
      "Bilingual storefront interface (English / Hindi)",
    ],
    stack: ["Next.js", "Stripe", "Serverless functions", "Vercel"],
    liveUrl: "https://yourstorehere.vercel.app",
    liveLabel: "yourstorehere.vercel.app",
    image: {
      src: "/yourstorehere.png",
      alt: "YourStoreHere grocery storefront with category navigation, search, cart and a promotional hero.",
      width: 1280,
      height: 800,
    },
    metrics: [
      { label: "Store setup time", value: "5 min", verified: false },
      { label: "Page load", value: "< 0.5s", verified: false },
      { label: "Checkout drop-off", value: "−25%", verified: false },
    ],
  },
  {
    slug: "sous-chef",
    name: "Sous Chef",
    status: "in-development",
    category: "Operations software",
    industry: "Hospitality · commercial kitchens",
    summary:
      "A prep assistant for restaurant kitchens: guided recipes, automatic scaling and prep tracking on a rugged tablet.",
    problem:
      "Kitchens lose money when prep is eyeballed, recipe cards go missing and fresh stock spoils before anyone notices.",
    solution:
      "A touch-first tablet app that walks staff through each recipe, scales quantities to the covers expected for service, and flags prep items that are running low.",
    built: [
      "Glove-friendly, spill-proof touchscreen interface",
      "Automatic recipe scaling by expected covers",
      "Prep checklists that update inventory as items are completed",
      "End-of-day summary of prepped versus wasted",
    ],
    stack: null,
    illustrative: true,
    metrics: [
      { label: "Prep errors", value: "−40%", verified: false },
      { label: "Onboarding new cooks", value: "2 days", verified: false },
      { label: "Food savings (est.)", value: "15%", verified: false },
    ],
  },
  {
    slug: "ganges",
    name: "Ganges",
    status: "partnership",
    category: "Startup web platform",
    industry: null,
    summary:
      "Took the founders' concept to a production web platform as their embedded technical partner.",
    problem:
      "An early-stage team with a clear market idea and no in-house engineering leadership to turn it into a product.",
    solution:
      "NHB acted as the technical co-founding team: shaping the architecture, designing the user flows and engineering the platform through launch.",
    built: ["Product architecture and technical direction", "User-flow design", "Web platform engineering, concept to launch"],
    stack: null,
    metrics: [],
  },
  {
    slug: "earnbuddy",
    name: "Earnbuddy",
    status: "partnership",
    category: "Startup product",
    industry: null,
    summary:
      "Product design and business automation for an early-stage startup, delivered as an embedded technical partner.",
    problem:
      "A startup that needed senior design and engineering capacity without the cost and delay of building a full team first.",
    solution:
      "NHB worked as the startup's technical partner, owning UI/UX design and the automations behind its operations.",
    built: ["UI/UX design", "Business process automations", "Ongoing technical partnership"],
    stack: null,
    metrics: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  organization: string;
  context: string;
  projectSlug: string;
}

/** Real testimonials published on NHB's previous homepage. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "NeedHelpBuilding turned our concept into a high-performance web platform in record time. Their architectural clarity, speed of execution, and attention to user flow made a massive impact on our early traction.",
    name: "Jay Agrawal",
    role: "Co-Founder",
    organization: "Ganges",
    context: "Technical co-founder partnership · Web platform",
    projectSlug: "ganges",
  },
  {
    quote:
      "Partnering with them gave us the technical muscle of an elite engineering team without the startup friction. From intuitive UI/UX design to rock-solid automations, they delivered exactly what Earnbuddy needed to scale.",
    name: "Arinjay Saxena",
    role: "Co-Founder",
    organization: "Earnbuddy",
    context: "Technical co-founder partnership · Product design & automation",
    projectSlug: "earnbuddy",
  },
];
