# 01-01 Summary — Tokens, layout shell, primitives, content layer

**Status**: Complete · CoVe applied to MotionProvider (hash-link interception, reveal observer)

## Delivered
- `app/globals.css` rewritten as the NHB design system: Tailwind v4 `@theme` tokens (ivory, ink, sun, mist, lilac,
  muted, line…), Geist/Geist Mono via `@theme inline`, type utilities (`t-display`, `t-h2`, `t-h3`, `t-lede`,
  `t-eyebrow`), motifs (`grid-paper*`, `.hl` highlighter, `[data-reveal]`, `.shot-pan`), reduced-motion overrides.
- Legacy keyframes moved to `app/assets/legacy.css` (imported by `/assets` only).
- `app/layout.tsx`: Geist fonts, refreshed metadata (no robot OG image, no unverified X handle, canonical moved
  to pages), `js` class bootstrap, skip link, SiteHeader/SiteFooter, corrected JSON-LD (`lib/structured-data.tsx`;
  removed self-serving reviews and the unverified US address).
- `components/site/MotionProvider.tsx` + `lib/scroll.ts`: Lenis (off under reduced motion), capture-phase
  same-page hash scrolling (Next `Link` respects `defaultPrevented`), IntersectionObserver reveals.
- Primitives: `SmartLink`, `ButtonLink`/`ArrowLink`, `Marked`/`Highlight`, `SectionHeading`, `Container`,
  `Placeholder`, `Tag`, `StatusDot`, `BrowserFrame`, `Logo`.
- Content modules: site, services, work, ai, disciplines, process, stack, industries, consulting, company,
  insights, navigation.

## Verification
- `npx tsc --noEmit` ✔ · `npx eslint app components content lib` ✔ (0 errors; 7 pre-existing warnings in /assets)
