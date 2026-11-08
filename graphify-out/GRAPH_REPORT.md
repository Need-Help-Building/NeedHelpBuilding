# Graph Report - Agency  (2026-11-08)

## Corpus Check
- 17 files · ~216,152 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 90 nodes · 83 edges · 16 communities (12 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6a17555c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- compilerOptions
- services-data.ts
- layout.tsx
- package.json
- devDependencies
- scripts
- tsconfig.json
- eslint.config.mjs
- next.config.ts
- postcss.config.mjs
- AGENTS.md

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `SERVICES_DATA` - 5 edges
3. `scripts` - 5 edges
4. `SmoothScrollProvider()` - 3 edges
5. `generateMetadata()` - 2 edges
6. `ServiceDetailPage()` - 2 edges
7. `ServiceItem` - 2 edges
8. `lenis` - 2 edges
9. `paths` - 2 edges
10. `caveat` - 1 edges

## Surprising Connections (you probably didn't know these)
- `SmoothScrollProvider()` --references--> `lenis`  [EXTRACTED]
  components/SmoothScrollProvider.tsx → package.json
- `generateMetadata()` --references--> `SERVICES_DATA`  [EXTRACTED]
  app/services/[slug]/page.tsx → app/services/services-data.ts
- `ServiceDetailPage()` --references--> `SERVICES_DATA`  [EXTRACTED]
  app/services/[slug]/page.tsx → app/services/services-data.ts

## Import Cycles
- None detected.

## Communities (16 total, 4 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "services-data.ts"
Cohesion: 0.22
Nodes (8): ServiceItem, ServiceMetric, ServiceProcessStep, SERVICES_DATA, ServiceTestimonial, generateMetadata(), ServiceDetailPage(), ServicePageProps

### Community 2 - "layout.tsx"
Cohesion: 0.17
Nodes (10): anton, archivoBlack, caveat, inter, jsonLd, metadata, silkscreen, spaceGrotesk (+2 more)

### Community 3 - "package.json"
Cohesion: 0.40
Nodes (5): dependencies, lucide-react, next, react, react-dom

### Community 4 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 5 - "scripts"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 6 - "tsconfig.json"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **55 isolated node(s):** `caveat`, `anton`, `archivoBlack`, `silkscreen`, `spaceGrotesk` (+50 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `package.json` to `layout.tsx`, `scripts`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Why does `lenis` connect `layout.tsx` to `package.json`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **What connects `caveat`, `anton`, `archivoBlack` to the rest of the system?**
  _55 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._