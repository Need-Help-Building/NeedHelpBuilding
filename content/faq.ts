import { site } from "./site";

/**
 * Site-wide questions with short, direct answers (homepage FAQ and /about). Written to be quotable by
 * search and AI answer engines: each answer stands on its own and names NeedHelpBuilding explicitly.
 */
export const homeFaq = [
  {
    q: "What is NeedHelpBuilding (NHB)?",
    a: "NeedHelpBuilding (NHB) is a digital product engineering and technology consulting company. We help businesses decide what to build, then design, engineer and run it: AI agents, business automation, custom software, and web and mobile products.",
  },
  {
    q: "What services does NHB offer?",
    a: "NHB offers AI development and AI agents, business process automation, technology consulting and fractional CTO support, custom software and SaaS development, web and mobile apps, UI/UX design, QA and security testing, and cloud infrastructure.",
  },
  {
    q: "Who does NHB work with?",
    a: "NHB works with startups, growing businesses and established companies in healthcare, education, retail, hospitality, finance, manufacturing and professional services, plus agencies that need a delivery partner.",
  },
  {
    q: "How does a project with NHB start?",
    a: `With a conversation about the problem, not the technology. Book a one-to-one meeting or email ${site.email}. We understand the goal and constraints first, then recommend the simplest system that meets them.`,
  },
  {
    q: "Does NHB partner with startups for equity?",
    a: "For selected early-stage startups, yes. Through the NHB Startup Program we can work for equity, a paid engagement or a mix, agreed case by case in writing. It is not free development in exchange for an idea.",
  },
  {
    q: "Can NHB take over or fix an existing product?",
    a: "Yes. NHB reviews existing codebases, fixes production issues, hardens security and performance, and can take over ongoing development with a written plan of what will change and why.",
  },
];
