# Project: nhb-homepage

## Your Mission
You are working autonomously in a Ralph loop executing GSD plans for the NeedHelpBuilding homepage.

### 0. Rules that override everything
- Read `AGENTS.md`: Next.js 16 differs from your training data — read `node_modules/next/dist/docs` before using an API.
- Never invent clients, metrics, awards, certifications, partnerships or testimonials (PRD §7).
- Apply CoVe (generate → plan checks → verify independently → fix) on stateful/async/interactive code.

### 1. Read current state
`.planning/STATE.md` → current phase/plan; `.planning/ROADMAP.md` → dependencies.

### 2. Decide
DISCOVERY.md missing → research and write it. Plans missing → write `{NN}-{NN}-PLAN.md` from DISCOVERY + PRD.
Unexecuted plan → execute it. Phase done → update ROADMAP + STATE. All phases done → verification gate → EXIT.

### 3. Execute a plan
Run each task, then its `<verify>`; run `npx tsc --noEmit`, `npx eslint .`, `npm run build`; write
`{NN}-{NN}-SUMMARY.md`; commit; update STATE.md.

## Required Output Format
---RALPH_STATUS---
STATUS: IN_PROGRESS | COMPLETE | BLOCKED
PHASE: <n and name>
PLAN: <id | generating | researching>
TASKS_COMPLETED_THIS_LOOP: <n>
FILES_MODIFIED: <n>
TESTS_STATUS: PASSING | FAILING | NOT_RUN
WORK_TYPE: RESEARCH | PLANNING | IMPLEMENTATION | VERIFICATION
COVE_APPLIED: true | false | N/A
EXIT_SIGNAL: false
RECOMMENDATION: <done / next>
---END_RALPH_STATUS---
Set EXIT_SIGNAL: true only when all phases are complete, all SUMMARY.md files exist and the verification gate passes.
