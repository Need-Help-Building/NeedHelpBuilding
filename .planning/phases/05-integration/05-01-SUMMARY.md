# 05-01 Summary — Case studies, SEO & integration

**Status**: Complete

## Delivered
- `/work/[slug]` (SSG, `dynamicParams = false`) for caller-os, yourstorehere, sous-chef, ganges, earnbuddy:
  breadcrumb (+ BreadcrumbList JSON-LD), status, facts, media (real screenshot / illustrative UI / testimonial),
  problem → what we did → what we built → technology (placeholder when unknown), verified outcomes only
  (none yet), testimonial, CTAs, next-project nav, shared conversion section. Per-page metadata + canonical.
- `app/opengraph-image.tsx`: typographic OG card (ivory / ink / NHB yellow) via `next/og` — replaces the robot image.
- `app/sitemap.ts`: homepage + 5 case studies + 14 service pages.
- `app/manifest.ts`: NHB naming and ivory theme colours.
- Homepage `WebPage` JSON-LD linked to site-wide Organization/WebSite graph.
- (Earlier in Phase 1: service pages moved onto the global header/footer; unverified metrics/testimonials hidden.)

## Verification
- `npm run build` ✔ — 29 static routes; `/opengraph-image` 200 image/png; case study 1440 + 390 clean.
