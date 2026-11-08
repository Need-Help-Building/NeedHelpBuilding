# Roadmap — Milestone 1: NHB Homepage

## Progress
| Phase | Name | Status | Plans |
|-------|------|--------|-------|
| 1 | Foundation: tokens, layout, content layer, navigation, footer | Complete | 01-01, 01-02 |
| 2 | Narrative I: Hero, Positioning, AI capability, Four disciplines (§02–§05) | Complete | 02-01 |
| 3 | Narrative II: Work, AI spotlight, Process, Tech stack (§06–§09) | Complete | 03-01 |
| 4 | Narrative III: Industries, Consulting, Why NHB, Insights, Credibility, Testimonials, Final CTA (§10–§16) | Complete | 04-01 |
| 5 | Case studies, SEO & integration (work pages, OG image, JSON-LD, sitemap, service-page chrome, legacy cleanup) | Complete | 05-01 |
| 6 | Verification & polish (build, lint, browser review at 6 widths, a11y, reduced motion) | Complete | 06-01 |

---

### Phase 1: Foundation
**Goal**: Design tokens + fonts + globals, MotionProvider (reveals, Lenis w/ reduced motion), UI primitives, typed content modules, SiteHeader with Services mega-menu + Solutions menu + mobile sheet, SiteFooter.
**Depends on**: None
**Research**: Likely — Next 16 fonts/metadata/image docs, Tailwind v4 `@theme`, Lenis anchors.
**Traces to**: PRD §4, §6, Epic A, US-B16

### Phase 2: Narrative I (§02–§05)
**Goal**: Hero with interactive system diagram; positioning + proof ledger; AI capability with interactive agent architecture; four distinct discipline pillars.
**Depends on**: Phase 1
**Research**: Unlikely
**Traces to**: US-B1–US-B4

### Phase 3: Narrative II (§06–§09)
**Goal**: Asymmetric portfolio grid with real screenshots + illustrative Sous Chef UI; Caller OS dark spotlight; 7-stage process rail; interactive technology ecosystem.
**Depends on**: Phase 1
**Research**: Unlikely
**Traces to**: US-B5–US-B8

### Phase 4: Narrative III (§10–§16)
**Goal**: Industries explorer, consultation panel (mailto composer + CTO partnership), differentiators with practices, upcoming insights, credibility with placeholders, testimonials, yellow final CTA w/ referral.
**Depends on**: Phase 1
**Research**: Unlikely
**Traces to**: US-B9–US-B15

### Phase 5: Case studies, SEO & integration
**Goal**: `/work/[slug]`; generated OG image; JSON-LD + metadata + manifest + sitemap refresh; service pages use new header/footer; isolate `/assets` legacy CSS; delete GeekyAnts remnants and `HeaderNav`.
**Depends on**: Phases 1–4
**Research**: Likely — Next 16 opengraph-image / async params / sitemap docs.
**Traces to**: Epic C, US-D1

### Phase 6: Verification & polish
**Goal**: Build/lint clean; Playwright screenshots at 1920/1440/1280/1024/768/390; fix overflow, spacing, contrast, focus, hydration, reduced-motion issues; link crawl; authenticity grep.
**Depends on**: All previous phases
**Traces to**: PRD §8, §10
