# 06-01 Summary — Verification & polish

**Status**: Complete

## Checks run
| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | ✔ |
| `npx eslint app components content lib` | ✔ 0 errors (7 pre-existing warnings in `/assets`) |
| `npm run build` | ✔ 29 static routes (home, 5 case studies, 14 services, OG image, sitemap, manifest, robots) |
| Horizontal overflow at 1920 / 1440 / 1280 / 1024 / 768 / 390 | ✔ none (only intended horizontal tab rails scroll) |
| Console errors / hydration warnings | ✔ none (dev-only LCP hint caused by the harness scrolling) |
| Link crawl (57 unique homepage links) | ✔ 13 internal routes 200, all `/#anchors` exist, 24 pre-filled mailto, 5 external |
| Keyboard: Services menu | ✔ Enter opens, Tab stays in header, Esc closes + focus returns to trigger |
| Same-page anchor scroll | ✔ lands 88px below the top (header clearance) |
| Reduced motion | ✔ content visible without reveals; Lenis + SVG packets off |
| Motion mode | ✔ hero auto-cycles scenarios, packets travel the active route |
| Authenticity grep | ✔ no GeekyAnts content, invented counts, awards or certifications in rendered content |

## Fixes made in this phase
- Anchor offset counted three times (Lenis offset + `scroll-margin-top` + `scroll-padding-top`) → one source of
  truth (`[id] { scroll-margin-top }`), `scrollIntoView` for the reduced-motion path.
- Hero figure header stacks between `lg` and `xl` so the scenario tabs fit.
- Work grid between 1024–1279px: Sous Chef full width, partnership cards side by side.
