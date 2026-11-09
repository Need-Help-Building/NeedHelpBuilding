import { site } from "@/content/site";
import { serviceGroups } from "@/content/services";
import { projects, statusLabel } from "@/content/work";
import { insights } from "@/content/insights";
import { referral } from "@/content/company";
import { SERVICES_DATA } from "../services/services-data";
import { toTitle } from "../services/title";

export const dynamic = "force-static";

/**
 * /llms.txt generated from the same content files as the pages, so it can't drift from the site.
 * Unverified outcome metrics (content/work.ts `verified: false`) are deliberately left out.
 */
export function GET() {
  const lines: string[] = [
    `# ${site.name} (${site.shortName})`,
    "",
    `> ${site.descriptor}. ${site.positioning}`,
    "",
    site.supporting,
    "",
    `- Website: ${site.url}`,
    `- Email: ${site.email}`,
    `- Phone / WhatsApp: ${site.phone.display}`,
    "",
    "## Practice areas",
    "",
    ...serviceGroups.map((g) => {
      const link = g.href && !g.href.includes("#") ? `[${g.title}](${site.url}${g.href})` : g.title;
      return `- ${link}: ${g.summary}`;
    }),
    "",
    "## Services",
    "",
    ...SERVICES_DATA.map((s) => `- [${toTitle(s.title)}](${site.url}/services/${s.slug}): ${s.shortDesc}`),
    "",
    "## Case studies",
    "",
    ...projects.map((p) => {
      const live = p.liveUrl ? ` Live product: ${p.liveUrl}` : "";
      return `- [${p.name}](${site.url}/work/${p.slug}) (${p.category}, ${statusLabel[p.status]}): ${p.summary}${live}`;
    }),
    "",
    "## Engineering notes",
    "",
    ...insights.map((p) => `- [${p.title}](${site.url}${p.href}): ${p.dek}`),
    "",
    "## Referrals",
    "",
    referral.summary,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
