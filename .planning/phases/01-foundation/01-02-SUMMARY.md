# 01-02 Summary — Header, mega-menu, mobile nav, footer

**Status**: Complete · CoVe applied to SiteHeader state machine

## Delivered
- `SiteHeader` (client): sticky, hairline when scrolled, hides on scroll-down / returns on scroll-up (never while a
  menu is open), hover-intent open/close timers, click + keyboard, Esc returns focus to trigger, outside-pointer
  close, focus-leaving close (only when focus really moves out — CoVe fix), route-change close via derived state.
- `ServicesPanel`: 9 practice groups with icons, summaries, links (unbuilt items render as text, never 404) and an
  ink consultation panel. `SolutionsPanel`: 4 solutions.
- `MobileNav`: full-height sheet, `<details>` accordions, scroll lock (Lenis stop + overflow), Esc / resize close,
  CTAs + email/WhatsApp.
- `SiteFooter`: brand statement, real logo, contact, Instagram, referral scheme, 5 link columns from the brief
  (unbuilt pages shown as "Soon"), address placeholder.
- Service pages: removed old HeaderNav + footer (site chrome now global), title-cased metadata titles + per-page
  canonical, and **stopped rendering unverified metrics and fabricated testimonials** from `services-data.ts`.
- Deleted `components/HeaderNav.tsx`, `components/SmoothScrollProvider.tsx`.

## Verification
- tsc ✔ · eslint ✔ (fixed react-hooks/purity: `Date.now` → `event.timeStamp`)
- Visual verification deferred to the first browser pass after Phase 2 (needs real page content).
