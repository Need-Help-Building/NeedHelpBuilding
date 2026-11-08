# Architecture

## Before (dev @ 239e254)
- `app/page.tsx` — one 640-line `"use client"` component; GeekyAnts copy/data/images hot-linked from GeekyAnts' CDN.
- `components/HeaderNav.tsx` — client header; mega-menu built from `SERVICES_DATA`.
- `app/services/services-data.ts` + `app/services/[slug]/page.tsx` — 14 dark-themed service pages (SSG).
- `app/layout.tsx` — Figtree/Space Grotesk/Inter, metadata, JSON-LD (with self-serving reviews, US address).
- `app/assets/page.tsx` — internal gallery relying on legacy keyframes in `globals.css`.

## After (this milestone)
```
app/
  layout.tsx            fonts, metadata, JSON-LD, MotionProvider, `js` class bootstrap
  page.tsx              Server Component: <SiteHeader/> <main>§02–§16</main> <SiteFooter/>
  work/[slug]/page.tsx  case studies from content/work.ts (SSG)
  opengraph-image.tsx   typographic OG image
  globals.css           @theme tokens, base, motifs (grid paper, highlighter, reveal)
  assets/legacy.css     keyframes only /assets uses
content/                typed content modules (site, services, work, ai, process, stack, industries,
                        consulting, differentiators, insights, team)
components/
  ui/                   primitives (server-safe)
  site/                 SiteHeader (client), MegaMenu, MobileNav, SiteFooter, MotionProvider (client)
  home/                 one file per section; `*.client.tsx` for interactive islands
```

## Data flow
Content modules → Server Components render static HTML → small client islands hydrate only interactive
widgets (header, diagrams, tabs, explorers, consultation panel). One IntersectionObserver (MotionProvider)
toggles `data-inview` on `[data-reveal]` elements; CSS does the animation; reduced-motion disables it.
