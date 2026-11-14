import { programs } from "./ecosystem";

/** Header + footer navigation. `href: null` = destination not built yet (rendered as "soon", never a 404). */

export interface NavLink {
  label: string;
  href: string;
}

export type MenuId = "services" | "products" | "ecosystem";

/** Header order (desktop and mobile): About, the three dropdowns, Industries, Blog. Work lives in the footer. */
export const headerNav: ({ kind: "link"; label: string; href: string } | { kind: "menu"; id: MenuId; label: string })[] = [
  { kind: "link", label: "About", href: "/about" },
  { kind: "menu", id: "services", label: "Services" },
  { kind: "menu", id: "products", label: "Products" },
  { kind: "menu", id: "ecosystem", label: "Ecosystem" },
  { kind: "link", label: "Industries", href: "/industries" },
  { kind: "link", label: "Blog", href: "/blog" },
];

/** Plain links in the header (kept for components that only need links). */
export const primaryNav: NavLink[] = headerNav.flatMap((i) => (i.kind === "link" ? [{ label: i.label, href: i.href }] : []));

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
      { label: "About", href: "/about" },
      { label: "Our Work", href: "/#work" },
      { label: "Team", href: "/about#team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Ecosystem",
    links: [...programs.filter((p) => p.id !== "careers").map((p) => ({ label: p.navLabel, href: p.href })), { label: "Book a Meeting", href: "/book" }],
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
      { label: "Sitemap", href: "/sitemap" },
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
