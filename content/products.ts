/**
 * Products & Revenue Program catalogue (/earn-with-nhb).
 *
 * Sourcing rules (2026-11-11 review of the product codebases):
 * - `features` lists only capabilities found implemented in the product's code.
 * - `buildToOrder` lists capabilities NHB builds per client; they are presented as customisable, not as
 *   finished product features.
 * - `designedFor` is the intended scope given by the NHB team for products whose code wasn't available for
 *   review (Easy PG, ProductFit). It is shown as intended use, never as a feature list.
 * - SocialGenie's code is a WhatsApp customer follow-up tool, not a social-media scheduler, so it is described
 *   as built. AI and automated follow-ups are not claimed (not in the code).
 */

export type ProductStatus = "live" | "prototype" | "custom" | "on-request";

export const productStatusLabel: Record<ProductStatus, string> = {
  live: "Live",
  prototype: "Working prototype",
  custom: "Built to order",
  "on-request": "Details on request",
};

export type ProductVisual = "socialgenie" | "productfit" | "easypg" | "healthcare" | "table-and-thyme";

export interface Product {
  id: string;
  name: string;
  category: string;
  status: ProductStatus;
  summary: string;
  audience: string[];
  idealCustomer: string;
  features?: string[];
  buildToOrder?: string[];
  designedFor?: string[];
  liveUrl?: string;
  liveLabel?: string;
  logo?: { src: string; alt: string };
  visual: ProductVisual;
  /** Shown as a large showcase rather than a standard card. */
  featured?: boolean;
  /** Brand accent used for the product's showcase (from the product's own design tokens where known). */
  accent: { bg: string; fg: string; soft: string };
}

export const products: Product[] = [
  {
    id: "socialgenie",
    name: "SocialGenie",
    category: "WhatsApp customer engagement",
    status: "live",
    summary:
      "Helps local businesses stay in touch with their customers on WhatsApp: one customer list, one shared inbox and personalised broadcast campaigns.",
    audience: ["Cafés & restaurants", "Salons", "Clinics", "Gyms", "Grocery & retail stores", "Boutiques", "Local services"],
    idealCustomer:
      "A local business with a customer list in a notebook or a phone's contacts that wants more repeat visits without chasing people one by one.",
    features: [
      "Customer records, with CSV import of an existing list",
      "Shared WhatsApp inbox for customer conversations",
      "Broadcast campaigns personalised with each customer's name",
      "WhatsApp Business connection through Meta's official signup flow",
      "Dashboard with a customer and messaging overview",
      "Team, billing and business settings",
    ],
    liveUrl: "https://socialgenie.tech",
    liveLabel: "socialgenie.tech",
    logo: { src: "/products/socialgenie-logo.svg", alt: "SocialGenie logo" },
    visual: "socialgenie",
    featured: true,
    accent: { bg: "#0a2e1d", fg: "#ffffff", soft: "#e8f6ee" },
  },
  {
    id: "productfit",
    name: "ProductFit",
    category: "AI-assisted product content",
    status: "on-request",
    summary:
      "A creative platform for product-led brands that need studio-style visuals, product animations and short marketing videos without a studio shoot for every launch.",
    audience: ["D2C and e-commerce brands", "Marketplace sellers", "Marketing teams", "Creative agencies"],
    idealCustomer:
      "A brand with a growing catalogue that needs consistent product visuals and video for listings, ads and social.",
    designedFor: [
      "Product image enhancement",
      "Studio-style product visuals",
      "Product animations",
      "Short marketing videos",
      "Product-focused content for listings, ads and social",
    ],
    visual: "productfit",
    featured: true,
    accent: { bg: "#171717", fg: "#f5f3ed", soft: "#ead9e4" },
  },
  {
    id: "easy-pg",
    name: "Easy PG",
    category: "PG & accommodation management",
    status: "on-request",
    summary: "Management software for PG operators, accommodation managers and property owners.",
    audience: ["PG operators", "Hostel and co-living managers", "Property owners"],
    idealCustomer: "An operator running one or more PG or shared-accommodation properties on registers, spreadsheets and phone calls.",
    designedFor: [
      "PG and property management",
      "Tenant and resident management",
      "Accommodation listings and discovery",
      "Day-to-day operations in one place",
    ],
    visual: "easypg",
    accent: { bg: "#b3cde3", fg: "#171717", soft: "#dce8f2" },
  },
  {
    id: "hospital",
    name: "Hospital & Clinic Software",
    category: "Healthcare technology",
    status: "custom",
    summary:
      "Software for hospitals, clinics and healthcare institutions, built around how each one already works rather than forcing a generic system on it.",
    audience: ["Multi-speciality hospitals", "Clinics", "Diagnostic centres", "Healthcare groups"],
    idealCustomer:
      "A hospital or clinic that wants a better patient-facing presence today and better internal workflows over time.",
    features: [
      "Hospital website with department pages and a doctor directory",
      "Doctor profiles, health packages and insurance information",
      "Online consultation and appointment request flows",
    ],
    buildToOrder: [
      "Patient management",
      "Doctor dashboards",
      "Appointment scheduling",
      "Reception and administrative workflows",
      "Billing and operational systems",
    ],
    visual: "healthcare",
    accent: { bg: "#c59eb9", fg: "#171717", soft: "#ead9e4" },
  },
  {
    id: "table-and-thyme",
    name: "Table & Thyme",
    category: "Restaurant technology",
    status: "prototype",
    summary:
      "A table-side digital menu for restaurants and cafés. Guests browse, order and play loyalty games from their own phone.",
    audience: ["Restaurants", "Cafés", "Food courts and QSRs"],
    idealCustomer: "A restaurant or café that wants faster table ordering and a reason for guests to come back.",
    features: [
      "Digital menu with item details and a cart",
      "Table ordering from the guest's phone",
      "Loyalty games: collectable puzzle, card-flip offers and a lucky draw with voucher codes",
      "Guest feedback",
      "Installs on a phone like an app",
    ],
    buildToOrder: ["Kitchen and order management", "Staff tools", "Menus, branding and integrations for each restaurant"],
    visual: "table-and-thyme",
    accent: { bg: "#0b2f8a", fg: "#ffffff", soft: "#dce8f2" },
  },
];

export const productNames = products.map((p) => p.name);
