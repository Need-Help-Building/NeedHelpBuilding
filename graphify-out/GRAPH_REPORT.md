# Graph Report - .  (2026-11-08)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 80 nodes · 72 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `78f7cc35`
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

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `scripts` - 5 edges
3. `SERVICES_DATA` - 3 edges
4. `ServiceItem` - 2 edges
5. `paths` - 2 edges
6. `caveat` - 1 edges
7. `anton` - 1 edges
8. `archivoBlack` - 1 edges
9. `silkscreen` - 1 edges
10. `spaceGrotesk` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (14 total, 4 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.12
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 1 - "services-data.ts"
Cohesion: 0.19
Nodes (6): ServiceItem, ServiceMetric, ServiceProcessStep, SERVICES_DATA, ServiceTestimonial, ServicePageProps

### Community 2 - "layout.tsx"
Cohesion: 0.20
Nodes (8): anton, archivoBlack, caveat, inter, jsonLd, metadata, silkscreen, spaceGrotesk

### Community 3 - "package.json"
Cohesion: 0.22
Nodes (8): dependencies, lucide-react, next, react, react-dom, name, private, version

### Community 4 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 5 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

## Knowledge Gaps
- **51 isolated node(s):** `caveat`, `anton`, `archivoBlack`, `silkscreen`, `spaceGrotesk` (+46 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `compilerOptions` connect `compilerOptions` to `tsconfig.json`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **What connects `caveat`, `anton`, `archivoBlack` to the rest of the system?**
  _51 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._