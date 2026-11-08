/**
 * Company-level facts and shared link helpers.
 * Every value here is sourced from the existing project (public/llms.txt, previous homepage, layout metadata).
 * `null` means "not known yet" and renders as a visible <Placeholder/> wherever it is shown.
 */

export const site = {
  name: "NeedHelpBuilding",
  shortName: "NHB",
  url: "https://needhelpbuilding.com",
  descriptor: "Digital product engineering, AI & technology consulting",
  positioning: "We don't just build technology. We help businesses make better technology decisions.",
  supporting:
    "From technical strategy to engineering execution, we help organizations discover, design, build, deploy, and evolve digital products and intelligent systems.",
  email: "hello@needhelpbuilding.com",
  phone: { display: "+91 92190 61093", e164: "+919219061093" },
  whatsapp: "https://wa.me/919219061093",
  instagram: "https://www.instagram.com/needhelpbuilding/",
  /** Registered business address — not in the repo yet. */
  address: null as string | null,
} as const;

/** Build a mailto: link with a pre-filled subject (and optional body). */
export function mailto(subject: string, body?: string): string {
  const params = new URLSearchParams();
  params.set("subject", subject);
  if (body) params.set("body", body);
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  return `mailto:${site.email}?${params.toString().replace(/\+/g, "%20")}`;
}

export function whatsapp(text: string): string {
  return `${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const ctas = {
  startProject: {
    label: "Start a Project",
    href: mailto(
      "New project enquiry",
      "Hi NHB team,\n\nWhat we're building:\n\nWhere we are today (idea / prototype / live product):\n\nTimeline:\n\nBest way to reach me:\n",
    ),
  },
  consultation: {
    label: "Book a Consultation",
    href: mailto(
      "Consultation request",
      "Hi NHB team,\n\nThe decision or problem we're working through:\n\nWhat we've tried or considered so far:\n\nA few times that work for a call:\n",
    ),
  },
  exploreWork: { label: "Explore Our Work", href: "/#work" },
} as const;

/** True for links that leave the site (open in a new tab). */
export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}
