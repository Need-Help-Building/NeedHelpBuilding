import { mailto } from "./site";
import { programs } from "./ecosystem";

/** Header + footer navigation. `href: null` = destination not built yet (rendered as "soon", never a 404). */

export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "Industries", href: "/#industries" },
  { label: "Work", href: "/#work" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/#about" },
];

export interface FooterLink {
  label: string;
  href: string | null;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Our Work", href: "/#work" },
      { label: "Team", href: "/#team" },
      { label: "Careers", href: mailto("Careers at NHB") },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Ecosystem",
    links: [...programs.map((p) => ({ label: p.navLabel, href: p.href })), { label: "Book a Meeting", href: "/book" }],
  },
  {
    title: "Services",
    links: [
      { label: "AI Engineering", href: "/services/ai-development" },
      { label: "AI Agents", href: "/services/ai-agents" },
      { label: "Business Automation", href: "/#discipline-automation" },
      { label: "Technology Consulting", href: "/services/tech-consultancy" },
      { label: "Software Development", href: "/services/software-development" },
      { label: "Web Development", href: "/services/full-stack-web-development" },
      { label: "Mobile Development", href: "/services/application-development" },
      { label: "Product Design", href: "/services/ui-ux-design" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "AI Transformation", href: "/#ai-engineering" },
      { label: "Startup Launch", href: "/#consulting" },
      { label: "Digital Business Launch", href: "/services/full-stack-web-development" },
      { label: "Enterprise Automation", href: "/#discipline-automation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "/blog" },
      { label: "Engineering Lab", href: "/blog" },
      { label: "FAQs", href: "/#faq" },
      { label: "Technology Stack", href: "/#stack" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/#privacy" },
      { label: "Terms & Conditions", href: "/#terms" },
      { label: "Cookie Policy", href: "/#cookies" },
    ],
  },
];
