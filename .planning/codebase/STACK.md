# Stack

| Package | Version | Notes |
|---------|---------|-------|
| next | 16.3.4 | App Router, Turbopack default for dev+build, `next dev` outputs to `.next/dev` |
| react / react-dom | 19.2.8 | |
| tailwindcss / @tailwindcss/postcss | ^4 | CSS-first config via `@theme` in `app/globals.css`; no tailwind.config |
| typescript | ^5 | strict; path alias `@/*` → repo root |
| lenis | ^1.3.27 | smooth scroll (`components/site/MotionProvider.tsx`) |
| lucide-react | ^1.43.0 | icons |
| eslint / eslint-config-next | ^9 / 16.3.4 | flat config; run `npx eslint .` (`next lint` removed in 16) |

## Next 16 notes that matter here
- Async request APIs: `params` is a Promise in pages, `generateMetadata`, sitemap `id`, OG image routes.
- `next/image`: default `qualities` is `[75]`; local images with query strings need `localPatterns`.
- Next no longer overrides `scroll-behavior` during navigation; Lenis owns smoothing, `html` stays `auto`.
- Fonts: `Geist`, `Geist_Mono` from `next/font/google` (variable fonts, no weight list needed).
