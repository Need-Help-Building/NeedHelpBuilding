# Agent Instructions

## Build
npm run build

## Run
npm run dev   # http://localhost:3000 (Turbopack; dev output in .next/dev)

## Lint
npx eslint .   # `next lint` was removed in Next 16

## Type Check
npx tsc --noEmit

## Test
No unit-test suite. Verification = type check + lint + build + Playwright screenshots at
1920/1440/1280/1024/768/390 and a link crawl of the rendered homepage.

## Equipped Tools
- Bundled Next.js docs: node_modules/next/dist/docs (authoritative for v16)
- CoVe: 4-stage verification on non-trivial code (see PROMPT.md)
- Skills/MCP from skills.sh / Context7: not installed (install blocked in the setup session)
