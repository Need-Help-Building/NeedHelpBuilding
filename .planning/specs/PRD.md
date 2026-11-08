# PRD: NeedHelpBuilding (NHB) — Homepage & Brand System

Source brief: user prompt of 2026-11-08 ("PROJECT: NEEDHELPBUILDING — PREMIUM DIGITAL ENGINEERING & AI COMPANY WEBSITE").
Reference studied: full-page capture of geekyants.com (principles only — never its layouts, copy, colors or identity).

## 1. Overview

Replace the current homepage — a near-clone of GeekyAnts that carries GeekyAnts' own case studies, client logos,
statistics and red brand color — with an original, editorial, long-form homepage for NHB. The page must communicate
that NHB is an engineering-first company that (a) helps businesses make better technology decisions and (b) can
engineer and run the resulting systems: AI, automation, software, web/mobile, design, QA/security, cloud, growth.

Positioning: **"We don't just build technology. We help businesses make better technology decisions."**
Supporting: "From technical strategy to engineering execution, we help organizations discover, design, build, deploy,
and evolve digital products and intelligent systems."

## 2. Target Users

| User | Description | Primary need on the page |
|------|-------------|--------------------------|
| Founder / CEO (SMB, startup) | Has a business problem, unsure what tech it needs | Confidence NHB can advise *before* building; easy first conversation |
| CTO / engineering lead | Evaluating a partner for a build or rescue | Technical depth: architecture, stack choices, process, quality/security |
| Operations / business owner | Drowning in manual work | Concrete automation + AI agent examples, plain-language outcomes |
| Investor / due-diligence reader | Checking credibility | Real evidence: live products, partner testimonials, honest claims |

## 3. User Stories

### Epic A — Orientation & navigation
- **US-A1** As a visitor I can understand within ~5s what NHB does (engineering + AI + consulting).
  - [ ] H1 + supporting copy + primary/secondary CTA visible above the fold at 1440×900 and 390×844.
- **US-A2** As a visitor I can discover services through a Services mega-menu grouped into 9 practice areas, each with a description and links.
  - [ ] Mega-menu opens on hover/click/keyboard, closes on Esc/outside click, links resolve (no 404s).
- **US-A3** On mobile I get a purpose-built full-screen menu (accordion groups, large tap targets, CTA).
- **US-A4** Sticky header hides on scroll-down and returns on scroll-up; gains a hairline once scrolled.

### Epic B — Narrative sections (homepage §02–§16)
- **US-B1 Hero** — oversized editorial headline, supporting copy, CTAs "Start a Project" / "Explore Our Work", original interactive system-architecture visual (nodes + connections, hover detail, animated flow). No robots, no gradient blobs.
- **US-B2 Positioning** — "Not just another technology partner." Explain understand → recommend → engineer. Instead of invented metrics, show a *proof ledger* of verifiable facts (live products, partnerships, practice areas).
- **US-B3 AI capability** — "Building beyond what's conventional." 9 AI capabilities + a designed, interactive AI system architecture (User input → Orchestration → Specialized agents → Tools & APIs / Knowledge base → Execution → Monitoring, with feedback loop). CTA: Explore AI Engineering.
- **US-B4 Four disciplines** — AI & Intelligent Systems, Digital Product Engineering, Technology Consulting, Business Automation; each with explanation, capabilities, technical detail, a *distinct* visual, link.
- **US-B5 Featured work** — asymmetric grid of real NHB work: Caller OS (live), YourStoreHere (live), Sous Chef (in development, illustrative UI clearly labelled), Ganges and Earnbuddy partnerships. Each: name, industry, description, what we built, technologies, category, link. Missing facts render as clearly marked placeholders.
- **US-B6 AI product spotlight** — dark section on Caller OS: real screenshot, annotated; voice pipeline architecture; capabilities; real-world use; stack; CTA.
- **US-B7 Process** — 7 stages (Discover → Evolve) as a connected, interactive rail (desktop) / vertical timeline (mobile) with the engineering principle and outputs per stage.
- **US-B8 Technology stack** — interactive ecosystem by category (Frontend, Backend, Data, Infrastructure, AI, Automation) with "when we choose it" notes; no logo wall; no implied vendor partnerships.
- **US-B9 Industries** — 8 industries, each with an original visual, explanation, example solutions and a link.
- **US-B10 Consulting** — "Sometimes the most important thing we build is the right plan." Interactive consultation panel: pick decisions/topics → see what the engagement produces → CTA composes an email with selected topics. Includes the Startup technical co-founder (equity) partnership.
- **US-B11 Why NHB** — 8 differentiators, each backed by a concrete practice ("what that looks like").
- **US-B12 Insights** — 4 editorial cards, clearly marked as upcoming (no fake publish dates).
- **US-B13 Credibility** — team photo with *editable placeholder* names/roles; checkable evidence (live products, architecture walkthroughs). No invented awards/certifications; empty recognition list renders nothing.
- **US-B14 Testimonials** — the two real testimonials (Jay Agrawal, Ganges; Arinjay Saxena, Earnbuddy) in an editorial layout with project context.
- **US-B15 Final CTA** — yellow, memorable, "The right conversation can change your business." CTAs: Book a Consultation / Start a Project; entry-point prompts; referral scheme (10% / 10%).
- **US-B16 Footer** — Company, Services, Solutions, Resources, Legal columns; contact; socials; brand statement. Unbuilt destinations never 404.

### Epic C — Case studies
- **US-C1** Each featured project links to `/work/[slug]` built from the same content (problem, solution, deliverables, stack, status, live link).

### Epic D — Platform quality
- **US-D1** SEO: metadata, canonical, Open Graph (generated typographic OG image), JSON-LD (Organization, WebSite, WebPage, ProfessionalService + OfferCatalog), sitemap incl. case studies.
- **US-D2** Accessibility: semantic landmarks, one H1, labelled sections, focus-visible styles, keyboard-operable menus/tabs, AA contrast, `prefers-reduced-motion` honored (Lenis + reveals + SVG motion off).
- **US-D3** Performance: sections are Server Components by default; client JS only for interactive islands; `next/image` for raster assets; `next/font` (Geist, Geist Mono); no new heavy deps.

## 4. Technical Requirements

### Stack
| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 16.3.4 (App Router, Turbopack) | Existing; read `node_modules/next/dist/docs` before APIs |
| UI | React 19.2, TypeScript strict | Existing |
| Styling | Tailwind CSS v4 (`@theme` tokens in `app/globals.css`) | Existing |
| Motion | CSS transitions + one IntersectionObserver + SVG/SMIL; Lenis for smooth scroll | Already installed; avoids adding Framer Motion for effects CSS handles |
| Icons | lucide-react | Existing |
| Fonts | Geist + Geist Mono via `next/font/google` | Brief's preferred family; variable, self-hosted |

### Architecture
- `content/*.ts` — typed, CMS-ready content modules (single source of truth; placeholders and unverified data flagged in data, not in JSX).
- `components/ui/*` — primitives: Container, SectionHeading, ButtonLink, Highlight, Placeholder, Tag, BrowserFrame.
- `components/site/*` — SiteHeader (+ mega menu, mobile sheet), SiteFooter, MotionProvider.
- `components/home/*` — one component per homepage section; interactive islands are small `"use client"` files.
- `app/page.tsx` — Server Component composing sections; `app/work/[slug]/page.tsx` case studies.
- Legacy keyframes used only by `/assets` move to `app/assets/legacy.css`.

### Data Model (content layer)
| Entity | Key fields | Notes |
|--------|-----------|-------|
| ServiceGroup | id, title, summary, icon, links[{label, href}] | 9 groups → mega-menu, footer |
| Pillar | index, title, summary, capabilities[], technical[], href, visual | 4 disciplines |
| Project | slug, name, status(live/in-development/partnership), industry, category, summary, problem, solution, built[], stack[], liveUrl?, image?, metrics[{label,value,verified}] | metrics render only when `verified: true` |
| Testimonial | quote, name, role, organization, context | real only |
| Industry | slug, name, summary, solutions[], visual | |
| ProcessStage | index, name, summary, principle, outputs[] | |
| TechCategory | id, label, items[{name, note}] | |
| ConsultingTopic | id, label, outcome | |
| Insight | title, category, readingTime, status:'upcoming', date:null | |
| Placeholder | rendered via `<Placeholder>` when a field is `null`/flagged | visible, dashed, mono |

### API Endpoints
None. Contact = `mailto:hello@needhelpbuilding.com` (pre-filled subjects) and WhatsApp `wa.me/919219061093`.

## 5. Screens & Navigation

```
/                      Homepage (§01–§17)
/work/[slug]           Case study (caller-os, yourstorehere, sous-chef, ganges, earnbuddy)
/services/[slug]       Existing 14 service pages (header/footer swapped to new system; content unchanged)
/assets                Existing internal component gallery (untouched, legacy CSS isolated)
```

## 6. Design System

- **Color**: Ivory `#F7F6F2` (canvas) · Ink `#171717` (type, dark sections) · NHB Yellow `#FBDA03` (signature accent: CTAs, highlighter marks, active nodes — never body text on light) · Muted Blue `#B3CDE3` / Dusty Lavender `#C59EB9` (secondary: select cards, diagrams) · White. Derived: ivory-2 `#EFEDE6`, line `#E3E0D7`, muted text `#5F5C55`.
- **Type**: Geist (display 600 at tight tracking; light 300 for contrast phrases) + Geist Mono for indices, labels, annotations.
- **Motifs (NHB-original)**: blueprint grid paper; yellow highlighter swipe behind key words; mono section index `§ 04 / 16`; engineering-drawing annotations (tick marks, numbered callouts); square nodes + dashed live connections.
- **Layout**: 12-col grid, max 1320px, 16px mobile gutter; asymmetric splits; hairline separators instead of boxed cards; varied card proportions; light/dark rhythm.
- **Avoid**: purple AI gradients, neon, glassmorphism, blobs, heavy shadows, uniform rounded cards, emoji, robots, stock handshakes, logo walls.

## 7. Content & Authenticity Rules
- Never invent clients, outcomes, statistics, awards, certifications, partnerships, testimonials or capabilities.
- Outcome metrics found in `public/llms.txt` are **hidden** (kept in `content/work.ts` with `verified: false`). — *user decision 2026-11-08*
- Founder names/roles render as **editable placeholders**. — *user decision 2026-11-08*
- Startup technical co-founder (equity) partnership and 10%/10% referral scheme are **kept**. — *user decision 2026-11-08*
- `public/hero.png` (AI robot render) is not used. Sous Chef visual is an illustrative interface, labelled as such.
- Insights are labelled "upcoming"; no fabricated publish dates.
- Copy avoids clichés ("unlock the power…", "transforming tomorrow…", "revolutionizing…").

## 8. Non-Functional Requirements
- Responsive at 1920 / 1440 / 1280 / 1024 / 768 / 390 widths; mobile layouts are designed, not compressed.
- No horizontal scroll at any width; tap targets ≥ 44px on mobile.
- `npm run build` and `npm run lint` pass; zero hydration warnings in console.
- Motion respects `prefers-reduced-motion`; nothing essential depends on animation.

## 9. MVP Scope
**In**: everything in §3 Epics A–D.
**Out (planned in services.txt)**: the ~100 dedicated service/consulting/industry/solution pages, real articles, legal pages, CMS integration, contact form backend. Links to these point to the nearest existing destination (service page, homepage anchor or pre-filled email) — never a 404.

## 10. Success Metrics
| Metric | Target | How measured |
|--------|--------|--------------|
| Build health | build + lint pass | `npm run build`, `npm run lint` |
| Fabricated claims | 0 | grep content for GeekyAnts data / unverified numbers |
| Broken internal links | 0 | crawl rendered homepage links |
| Responsive defects | 0 horizontal overflow | Playwright at 6 widths |
| Consult intent | CTA reachable from every section | manual review |

## 11. Open Questions
- Founder names, roles and bios (placeholders in `content/team.ts`).
- Ganges / Earnbuddy industries and stacks (placeholders in `content/work.ts`).
- Sous Chef stack and real screenshots once available.
- Whether outcome metrics in `llms.txt` can be verified and switched on.
- Business address / registered entity details for footer + JSON-LD.
- LinkedIn / X profiles (only Instagram, email and WhatsApp are confirmed).
