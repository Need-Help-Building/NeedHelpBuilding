# Project: NHB Homepage & Brand System

## Vision
An original, editorial, long-form homepage that makes NeedHelpBuilding read as an established engineering-first
company: one that helps businesses make better technology decisions, then designs, builds, deploys and evolves the
resulting products and intelligent systems. (PRD §1)

## Requirements

### Validated
- 17-section homepage narrative (PRD §3 Epic B), Services mega-menu with 9 groups (Epic A).
- Case-study pages for the five real engagements (Epic C).
- SEO, accessibility, reduced-motion, performance requirements (Epic D, PRD §8).
- NHB palette: ivory canvas, ink type, yellow signature accent, blue/lavender secondary (PRD §6).

### Active (Under Discussion)
- Founder names/roles, partner industries/stacks, Sous Chef stack, business address, extra socials (PRD §11).

### Out of Scope
- The ~100 dedicated pages listed in `services.txt`, real articles, legal pages, CMS wiring, form backend.

## Constraints
- Next.js 16.3.4 has breaking changes vs. training data — consult `node_modules/next/dist/docs` first (AGENTS.md).
- No fabricated claims of any kind (PRD §7). GeekyAnts content must be fully removed.
- Keep the existing stack; no Framer Motion unless CSS/IO cannot do the job.
- Windows dev environment (Git Bash / PowerShell); work happens in worktree `feat/nhb-homepage`.

## Key Decisions
| Decision | Status | Rationale |
|----------|--------|-----------|
| Execute in-session, generate Ralph config for later | Approved (user) | Ralph/tmux unavailable on this machine |
| Hide unverified outcome metrics, keep in data with `verified:false` | Approved (user) | Authenticity rules |
| Founder names as editable placeholders | Approved (user) | Names not in repo |
| Keep CTO equity partnership + referral scheme | Approved (user) | Real NHB offers from previous site |
| Geist + Geist Mono | Approved | Brief's first choice; `next/font/google` supports both |
| CSS + IntersectionObserver motion instead of Framer Motion | Approved | No new dependency, Server Components stay server-side |
| Unbuilt destinations → nearest real page/anchor/email, never 404 | Approved | Avoid broken links while page catalogue is built |
| Drop `public/hero.png` (robot render) from the site | Approved | Brief forbids robot clichés |
| Remove self-serving `review` objects from JSON-LD | Approved | Google structured-data guidelines; testimonials stay on page |
