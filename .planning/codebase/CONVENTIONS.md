# Conventions

- **Server first**: components are Server Components unless they need state/effects/events. Client files are
  named `*.client.tsx` and kept small.
- **Content out of JSX**: copy and data live in `content/*.ts`; components map over typed data. Unknown facts are
  `null` and render through `<Placeholder>`; unverified numbers carry `verified: false` and are not rendered.
- **Tokens, not hex**: use Tailwind theme tokens (`bg-ivory`, `text-ink`, `bg-sun`, `text-muted`, `border-line`,
  `bg-mist` (blue), `bg-lilac` (lavender)). No raw hex in components except SVG art that needs exact values via CSS vars.
- **Type scale**: `.t-display`, `.t-h2`, `.t-h3`, `.t-lede`, `.t-mono` utilities in globals.css.
- **Sections**: `<section id aria-labelledby>` + `<SectionHeading index="04" ...>`; one `h1` (hero) per page.
- **Motion**: add `data-reveal` (optionally `data-reveal-delay="1..6"`); never animate layout-critical content
  without a reduced-motion fallback; SVG motion components check `useReducedMotion()`.
- **Links**: internal routes via `next/link`; external links `target="_blank" rel="noopener noreferrer"` with an
  arrow-up-right icon; unbuilt destinations map to nearest real page/anchor/email (never 404).
- **Naming**: PascalCase components, kebab-case slugs, camelCase data keys.
