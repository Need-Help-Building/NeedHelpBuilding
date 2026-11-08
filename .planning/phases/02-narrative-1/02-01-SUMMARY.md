# 02-01 Summary — Hero, Positioning, AI engineering, Four disciplines

**Status**: Complete · CoVe applied to HeroSystem (auto-cycle/pause/keyboard tabs) and AgentArchitecture (tabs ↔ SVG selection)

## Delivered
- **Hero**: headline "Engineering for businesses that *can't afford to guess.*", brief's supporting copy, Start a
  Project / Explore Our Work, positioning statement, and `HeroSystem` — an original interactive system map:
  three illustrative briefs (missed calls / manual invoicing / new SaaS) light the route
  brief → strategy → build → data → production with an evolve loop; packets travel the route; auto-cycles with a
  progress bar, pauses on hover, stops on user choice; tablist keyboard support; vertical chain on phones.
- **Positioning (§01)**: editorial statement, understand → recommend → engineer strip, and a *proof ledger*
  (live products, in-development, partnerships, practice areas) instead of invented metrics.
- **AI engineering (§02)**: 7-layer reference architecture with feedback loop (SVG on md+, tab inspector on all
  sizes), 9 AI capabilities in a ruled grid, CTA to /services/ai-development and the Caller OS spotlight.
- **Disciplines (§03)**: four alternating editorial rows with distinct original illustrations
  (agent topology / exploded stack / decision tree + ADR / automation pipeline) and "under the hood" tags.

## Fixes found in browser review
- Reduced-motion override lost on specificity → content stayed hidden for reduced-motion users. Fixed.
- Hero grid min-content overflow at 390px (tab strip) → `grid-cols-1`.
- Orchestrator caption overflow; step-label misalignment; footer column cramping; section CTA order on phones.

## Verification
- tsc ✔ · eslint ✔ · 1440px + 390px: no horizontal overflow, no console errors · mega-menu + mobile menu captured.
