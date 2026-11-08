# Phase 1 Discovery — Foundation

## Findings
- Current homepage/header are GeekyAnts-derived (copy, case studies, stats, logos, red `#e11d2a`). Replace entirely.
- Real NHB assets: `public/caller_work.png` (Caller OS screenshot: Groq Whisper STT, Llama-3.3-70B LLM, Google TTS,
  SIP telephony, Hinglish, RAG grounding), `public/yourstorehere.png` (storefront screenshot), `public/team.png`
  (founders, black & white on yellow glow), `redesign:public/logo.png` (white NHB wordmark, 1062×482).
- Real NHB facts: `public/llms.txt` + `git show 1d9a4cf:app/page.tsx` — Caller.work, YourStoreHere, Sous Chef
  (problem/solution/deliverables), Ganges + Earnbuddy testimonials, CTO equity programme, referral scheme,
  hello@needhelpbuilding.com, +91 92190 61093 (WhatsApp), Instagram @needhelpbuilding.
- Existing service slugs (link targets): full-stack-web-development, software-development, application-development,
  tech-consultancy, error-fixing, management-scaling, vulnerability-testing, application-testing, ui-ux-design,
  ai-development, ai-consulting, generative-ai, ai-agents, multi-agent-systems.
- `/assets` page depends on legacy keyframes/classes in globals.css → move to `app/assets/legacy.css`.
- Lenis: html must not have `scroll-behavior: smooth` while Lenis runs; use `anchors` option with header offset;
  skip Lenis under `prefers-reduced-motion`.
- Next 16 fonts doc: `import { Geist, Geist_Mono } from 'next/font/google'` with `variable` option.

## Risks
- Hydration mismatch from the pre-paint `js` class → `suppressHydrationWarning` on `<html>`.
- Reveal-hidden content invisible without JS → hide only under `.js`.
