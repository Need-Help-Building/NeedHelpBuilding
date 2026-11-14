export interface ServiceMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarText: string;
}

export interface ServiceItem {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  shortDesc: string;
  badge: string;
  color: string;
  accent: string;
  overview: string;
  whatWeDo: string[];
  howWeDoIt: ServiceProcessStep[];
  metrics: ServiceMetric[];
  techStack: string[];
  testimonial: ServiceTestimonial;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "full-stack-web-development",
    category: "ENGINEERING",
    title: "FULL STACK WEB DEVELOPMENT",
    tagline: "Ultra-fast Next.js & React architectures built for peak conversion",
    shortDesc: "End-to-end full-stack modern web apps built with Next.js, TypeScript, PostgreSQL, and serverless edge computing.",
    badge: "CORE STACK",
    color: "#ffd000",
    accent: "#0c0c0d",
    overview:
      "We design and build production-grade web systems from frontend micro-interactions to scalable database architecture. No bloated templates or sluggish page loads, every web app is engineered for sub-500ms response times, SEO domination, and frictionless buyer conversion.",
    whatWeDo: [
      "Custom Next.js App Router applications with Server-Side Rendering (SSR) & Static Generation",
      "Dynamic TypeScript codebases with zero runtime type violations",
      "Robust REST & GraphQL API design with automated documentation",
      "PostgreSQL, Supabase, Neon database schema modeling & automated migrations",
      "Stripe and checkout billing engines with webhook reconciliation",
      "PWA setup, offline caching, and responsive cross-device layouts",
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "SYSTEM ARCHITECTURE & WIREFRAME",
        description: "We map out database relations, component hierarchies, and auth flows before writing production code.",
      },
      {
        step: "02",
        title: "RAPID ITERATIVE BUILD",
        description: "Weekly sprints with continuous deployment previews on Vercel so you test live features every 72 hours.",
      },
      {
        step: "03",
        title: "STRESS TESTING & PRODUCTION HARDENING",
        description: "Auditing Core Web Vitals, edge caching strategies, and automated CI/CD pipeline tests before public launch.",
      },
    ],
    metrics: [
      { label: "AVERAGE PAGE LOAD", value: "< 420ms", subtext: "Global CDN edge verified" },
      { label: "LIGHTHOUSE SCORE", value: "98+", subtext: "Performance, SEO & Accessibility" },
      { label: "DEPLOYMENT VELOCITY", value: "14 Days", subtext: "Average MVP to production" },
      { label: "UPTIME SLA", value: "99.98%", subtext: "Zero cold-start edge routing" },
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Vercel"],
    testimonial: {
      quote:
        "NeedHelpBuilding delivered our entire web platform in less than 3 weeks. The app is blazingly fast, looks distinct, and handles thousands of active visitors without a single hiccup.",
      author: "Marcus Vance",
      role: "Co-Founder & CEO",
      company: "Earnbuddy",
      avatarText: "MV",
    },
  },
  {
    slug: "software-development",
    category: "ENGINEERING",
    title: "SOFTWARE DEVELOPMENT",
    tagline: "Resilient backend services, microservices, and bespoke software engines",
    shortDesc: "High-throughput backend systems, cloud microservices, and mission-critical software built for enterprise reliability.",
    badge: "ENTERPRISE",
    color: "#b3cde3",
    accent: "#0c0c0d",
    overview:
      "When off-the-shelf software falls short, we engineer bespoke software solutions. We specialize in robust business logic, asynchronous worker queues, event-driven pipelines, and high-concurrency backends that operate quietly and reliably at scale.",
    whatWeDo: [
      "Custom backend services built with Node.js, Go, or Python",
      "Asynchronous message queues, cron worker jobs, and Pub/Sub engines (Redis, BullMQ, Kafka)",
      "High-throughput transactional database systems and read-replica routing",
      "Multi-tenant SaaS architectures with tenant data isolation and custom role permissions",
      "Third-party system integrations (ERP, CRM, payment gateways, custom hardware)",
      "Containerized deployment strategies using Docker and automated Kubernetes clusters",
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "DOMAIN MODELING",
        description: "Analyzing your business edge cases, domain events, and security boundaries to craft an airtight data model.",
      },
      {
        step: "02",
        title: "CORE ENGINE DEVELOPMENT",
        description: "Constructing business logic layers with comprehensive test suites, idempotency guarantees, and audit logs.",
      },
      {
        step: "03",
        title: "OBSERVABILITY & INTEGRATION",
        description: "Hooking up telemetry, structured JSON logging, Prometheus metrics, and automated disaster recovery backups.",
      },
    ],
    metrics: [
      { label: "QUERY LATENCY", value: "< 18ms", subtext: "Optimized indexed execution" },
      { label: "MONTHLY EVENTS PROCESSED", value: "45M+", subtext: "Across production services" },
      { label: "CODE TEST COVERAGE", value: "94%", subtext: "Automated unit & integration tests" },
      { label: "DATA LOSS RATE", value: "0.00%", subtext: "Strict transactional isolation" },
    ],
    techStack: ["Node.js", "Go", "Python", "Docker", "Redis", "PostgreSQL", "AWS / GCP", "BullMQ"],
    testimonial: {
      quote:
        "The software architecture they built runs like clockwork. It streamlined millions of background events per month without requiring any ongoing maintenance.",
      author: "Darius K.",
      role: "VP of Engineering",
      company: "Nexus Logistics",
      avatarText: "DK",
    },
  },
  {
    slug: "application-development",
    category: "MOBILE & WEB",
    title: "APPLICATION DEVELOPMENT",
    tagline: "Native-feel cross-platform apps, offline-first mobile & kitchen tablets",
    shortDesc: "Cross-platform mobile and tablet applications built for intense daily operational workflows with offline sync.",
    badge: "MOBILE & TABLET",
    color: "#c59eb9",
    accent: "#0c0c0d",
    overview:
      "From rugged industrial kitchen tablet setups (like our Sous Chef project) to customer-facing mobile apps on iOS and Android. We construct apps that stay snappy, work even when internet connections drop, and provide instantaneous tactile feedback.",
    whatWeDo: [
      "Cross-platform iOS and Android mobile apps using React Native and Expo",
      "Specialized kiosk and rugged tablet applications with locked kiosk mode",
      "Local-first SQLite / WatermelonDB storage with seamless background synchronization",
      "Hardware integrations: Bluetooth thermal receipt printers, barcode scanners, and RFID readers",
      "Push notification architecture with localized timezone delivery",
      "App Store and Google Play compliance review, submission, and release management",
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "ENVIRONMENTAL AUDIT",
        description: "Examining how your users physically interact with the device: lighting, greasy kitchen hands, or offline connectivity.",
      },
      {
        step: "02",
        title: "LOCAL-FIRST PROTOTYPING",
        description: "Building the offline database and UI states first so the application never freezes or shows blank loading spinners.",
      },
      {
        step: "03",
        title: "HARDWARE DEPLOYMENT",
        description: "Real-device field testing across tablet sizes, physical Bluetooth peripherals, and intermittent Wi-Fi conditions.",
      },
    ],
    metrics: [
      { label: "OFFLINE SYNC TIME", value: "< 1.2s", subtext: "Instantaneous reconnect" },
      { label: "CRASH-FREE SESSIONS", value: "99.94%", subtext: "Across iOS & Android devices" },
      { label: "TOUCH RESPONSE", value: "16ms", subtext: "60 FPS native rendering" },
      { label: "STAFF ONBOARDING", value: "2 Days", subtext: "Zero complex training required" },
    ],
    techStack: ["React Native", "Expo", "TypeScript", "SQLite", "WatermelonDB", "Bluetooth BLE", "Tailwind"],
    testimonial: {
      quote:
        "Our kitchen prep cooks were able to use the tablet app with zero prior tech training. Food waste plummeted by 15% in our first two weeks.",
      author: "Chef Antoine Laurent",
      role: "Culinary Director",
      company: "Atelier Hospitality Group",
      avatarText: "AL",
    },
  },
  {
    slug: "tech-consultancy",
    category: "ADVISORY",
    title: "TECH CONSULTANCY & FRACTIONAL CTO",
    tagline: "Senior architectural roadmap, stack selection, and investor-ready technical vetting",
    shortDesc: "Hands-on fractional CTO advisory, code audits, vendor selection, and scalable technology roadmaps for founders.",
    badge: "FRACTIONAL CTO",
    color: "#ffd000",
    accent: "#0c0c0d",
    overview:
      "Avoid costly architectural blunders, vendor lock-in, and bloated hiring bills. We sit in your corner as senior technology advisors, auditing existing repositories, vetting agency estimates, interviewing prospective engineers, and designing your system blueprint before you spend serious capital.",
    whatWeDo: [
      "Comprehensive codebase audits, tech debt analysis, and security vulnerability appraisals",
      "System architecture blueprints tailored to your runway and growth trajectory",
      "Technical interview screening and engineering hiring assessments for founders",
      "Due-diligence technical documentation and architecture decks for venture capital fundraising",
      "Cloud spend audits with immediate AWS / GCP infrastructure cost reduction strategies",
      "Vendor contract evaluation and scope verification to prevent developer overbilling",
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "DEEP TECHNICAL DISCOVERY",
        description: "We inspect your GitHub repos, cloud bills, database bottlenecks, and founder vision within 48 hours.",
      },
      {
        step: "02",
        title: "EXECUTIVE ROADMAP & SCORECARD",
        description: "Delivering a prioritized 30-60-90 day engineering blueprint with actionable, plain-English recommendations.",
      },
      {
        step: "03",
        title: "HANDS-ON EXECUTION STEERING",
        description: "Weekly architectural checkpoints, sprint reviews, and unblocking engineering teams on tricky decisions.",
      },
    ],
    metrics: [
      { label: "AVG. CLOUD SAVINGS", value: "38%", subtext: "Reduced monthly AWS/GCP bills" },
      { label: "DUE DILIGENCE PASS", value: "100%", subtext: "Successful VC technical audits" },
      { label: "HIRING ACCURACY", value: "95%", subtext: "Engineers passing probation" },
      { label: "MONTHLY DEV SAVINGS", value: "$12k+", subtext: "Saved vs. full-time executive hire" },
    ],
    techStack: ["AWS", "GCP", "Vercel", "GitHub Actions", "PostgreSQL", "Docker", "SaaS Metrics"],
    testimonial: {
      quote:
        "Having NeedHelpBuilding as our fractional tech leadership saved us from burning $60k on the wrong software agency. They gave us clarity, saved our runway, and steered our MVP launch.",
      author: "Priya Sharma",
      role: "Managing Partner",
      company: "VentureCraft Labs",
      avatarText: "PS",
    },
  },
  {
    slug: "error-fixing",
    category: "TROUBLESHOOTING",
    title: "ERROR FIXING & CODE RESCUE",
    tagline: "Rapid emergency troubleshooting, memory leak triage, and critical bug extermination",
    shortDesc: "Emergency triage for broken web builds, memory leaks, failing production deployments, and stubborn bugs.",
    badge: "RAPID RESCUE",
    color: "#ff6b6b",
    accent: "#0c0c0d",
    overview:
      "When production crashes, build pipelines fail, or your previous development team ghosted you mid-project with half-working code, we step in. We perform forensic code analysis, patch memory leaks, fix broken database migrations, and stabilize your software fast.",
    whatWeDo: [
      "Emergency production debugging and hotfix deployment within hours",
      "Next.js hydration mismatch fixes and client/server rendering conflict resolution",
      "Database deadlock, connection pooling exhaustion, and unindexed query resolution",
      "Third-party API webhook failure recovery and automated idempotency fixes",
      "Node.js memory leak identification using heap profiling and performance snapshots",
      "Corrupted build toolchain cleanup (Turbopack, Webpack, Babel, TypeScript build errors)",
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "TRIAGE & LOG RECONNAISSANCE",
        description: "Immediate inspection of Sentry alerts, Datadog traces, and cloud runtime logs to locate the root failure.",
      },
      {
        step: "02",
        title: "MINIMAL SURFACE HOTFIX",
        description: "Deploying targeted surgical fixes to restore user transactions without introducing secondary regressions.",
      },
      {
        step: "03",
        title: "PREVENTATIVE HARDENING",
        description: "Writing regression test cases and CI checks to guarantee the same bug can never reappear in production.",
      },
    ],
    metrics: [
      { label: "AVG. EMERGENCY RESPONSE", value: "< 2 Hrs", subtext: "From alert to investigation" },
      { label: "FIRST-TRY FIX RATE", value: "92%", subtext: "Resolved without rollbacks" },
      { label: "RECOVERY TIME", value: "Same Day", subtext: "Production service restored" },
      { label: "REGRESSION RATE", value: "0%", subtext: "Backed by automated tests" },
    ],
    techStack: ["Sentry", "Datadog", "Chrome DevTools", "Node Profiler", "TypeScript", "PostgreSQL EXPLAIN"],
    testimonial: {
      quote:
        "Our web app had an elusive memory leak crashing the server every few hours. Their team traced it, isolated the cyclic dependency, and patched it in less than an afternoon. Lifesavers.",
      author: "Julian Chen",
      role: "Founder & CTO",
      company: "StreamPulse Media",
      avatarText: "JC",
    },
  },
  {
    slug: "management-scaling",
    category: "DEVOPS & INFRA",
    title: "MANAGEMENT & SCALING",
    tagline: "Auto-scaling infrastructure, zero-downtime CI/CD, and serverless reliability",
    shortDesc: "High-traffic infrastructure scaling, automated CI/CD pipelines, database clustering, and cloud performance optimization.",
    badge: "HIGH SCALE",
    color: "#51cf66",
    accent: "#0c0c0d",
    overview:
      "Preparing your web infrastructure for viral traffic spikes, Black Friday surges, or institutional enterprise adoption. We transform fragile single-server setups into auto-scaling, geographically distributed cloud architectures with zero single points of failure.",
    whatWeDo: [
      "Auto-scaling serverless and container deployments on AWS ECS, EKS, or Google Cloud Run",
      "Global edge content distribution network (CDN) tuning with custom cache invalidation",
      "PostgreSQL connection pooling with PgBouncer, Read Replicas, and automated sharding",
      "Zero-downtime blue/green deployment workflows using GitHub Actions CI/CD",
      "Redis caching layers to drop backend database queries by up to 85%",
      "Real-time 24/7 uptime monitoring with automated PagerDuty escalation protocols",
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "LOAD BENCHMARKING",
        description: "Simulating thousands of concurrent simulated users using k6 to reveal exact system break points.",
      },
      {
        step: "02",
        title: "CACHE & CONCURRENCY LAYER",
        description: "Offloading static assets to edge servers and caching heavy database queries behind low-latency Redis.",
      },
      {
        step: "03",
        title: "AUTO-SCALING POLICIES",
        description: "Setting CPU and memory elasticity triggers so your infra expands instantly during spikes and shrinks during off-hours.",
      },
    ],
    metrics: [
      { label: "CONCURRENT USER CAPACITY", value: "100k+", subtext: "Tested under sustained k6 load" },
      { label: "INFRA COST EFFICIENCY", value: "+45%", subtext: "Dynamic auto-scaling down" },
      { label: "DEPLOYMENT DOWNTIME", value: "0 Sec", subtext: "Zero-downtime blue/green" },
      { label: "CACHE HIT RATIO", value: "96.4%", subtext: "Across global CDN edges" },
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "k6", "Redis", "PgBouncer", "GitHub Actions", "Terraform"],
    testimonial: {
      quote:
        "When our marketing campaign went viral on TikTok, our site took over 40,000 visitors in an hour with zero lag. NeedHelpBuilding’s scaling prep made that seamless.",
      author: "Elena Rostova",
      role: "Head of Growth",
      company: "Moda Collective",
      avatarText: "ER",
    },
  },
  {
    slug: "vulnerability-testing",
    category: "CYBERSECURITY",
    title: "VULNERABILITY & SECURITY TESTING",
    tagline: "Penetration testing, OWASP Top 10 hardening, and data protection audits",
    shortDesc: "Rigorous security audits, penetration testing, secret leakage prevention, and API vulnerability hardening.",
    badge: "CYBER DEFENSE",
    color: "#ff922b",
    accent: "#0c0c0d",
    overview:
      "A single security breach can destroy customer trust and invite crippling regulatory fines. We conduct rigorous penetration tests against your web applications, APIs, authentication endpoints, and cloud storage buckets to identify and fix exploitable vulnerabilities before malicious hackers find them.",
    whatWeDo: [
      "OWASP Top 10 vulnerability assessments (SQL injection, XSS, CSRF, broken access control)",
      "API endpoint penetration testing, rate-limiting stress testing, and auth token spoofing audits",
      "Cloud bucket permission lockdowns (S3 public read/write leak prevention)",
      "Third-party dependency vulnerability scans and automated Dependabot remediation",
      "Database encryption at rest and in transit compliance validation (SSL/TLS 1.3)",
      "Executive security compliance reports suitable for enterprise vendor onboarding",
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "BLACK-BOX PENETRATION",
        description: "Simulating authentic adversary attempts to bypass authentication, inject malicious payloads, and tamper with data.",
      },
      {
        step: "02",
        title: "WHITE-BOX CODE AUDIT",
        description: "Reviewing backend authorization logic, cryptographic key handling, and sanitization functions in GitHub.",
      },
      {
        step: "03",
        title: "PATCHING & RE-TESTING",
        description: "Implementing exact code fixes, security headers, rate limiters, and re-running attack vectors to confirm closure.",
      },
    ],
    metrics: [
      { label: "SECURITY AUDIT RESOLUTION", value: "100%", subtext: "Identified exploits patched" },
      { label: "ENTERPRISE VENDOR PASS", value: "100%", subtext: "Security compliance verified" },
      { label: "AVG. AUDIT TURNAROUND", value: "5 Days", subtext: "Comprehensive report & diff" },
      { label: "DDOS MITIGATION", value: "Instant", subtext: "Cloudflare Web Application Firewall" },
    ],
    techStack: ["OWASP ZAP", "Burp Suite", "Cloudflare WAF", "Snyk", "Semgrep", "PostgreSQL RLS"],
    testimonial: {
      quote:
        "They identified three critical authorization vulnerabilities in our API that our previous agency missed completely. The detailed report and immediate code fixes gave our board complete confidence.",
      author: "David Sterling",
      role: "Chief Compliance Officer",
      company: "FinVault Capital",
      avatarText: "DS",
    },
  },
  {
    slug: "application-testing",
    category: "QA & RELIABILITY",
    title: "APPLICATION & QA TESTING",
    tagline: "End-to-end automated testing, regression suites, and cross-browser quality assurance",
    shortDesc: "Automated Cypress and Playwright E2E testing, unit test suites, and cross-browser regression test suites.",
    badge: "ZERO BUGS",
    color: "#20c997",
    accent: "#0c0c0d",
    overview:
      "Deploying to production shouldn't give you heart palpitations. We engineer automated end-to-end (E2E) testing suites, synthetic user transaction simulations, and visual regression tests that catch breaking changes before your customers ever encounter them.",
    whatWeDo: [
      "End-to-End browser test automation using Playwright and Cypress",
      "Critical checkout and payment flow transaction validation runs before every commit",
      "Unit and integration test suites with Jest, Vitest, and React Testing Library",
      "Cross-browser and mobile device viewport matrix compatibility testing",
      "Synthetic user behavior monitoring simulating real live traffic 24/7",
      "Automated CI test gates in GitHub Actions blocking broken pull requests from merging",
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "CRITICAL FLOW MAPPING",
        description: "Identifying every revenue-critical user journey: onboarding, signup, Stripe checkout, and account settings.",
      },
      {
        step: "02",
        title: "AUTOMATED SUITE CONSTRUCTION",
        description: "Writing deterministic, headless Playwright test scripts that execute inside isolated test databases.",
      },
      {
        step: "03",
        title: "CONTINUOUS INTEGRATION GATE",
        description: "Hooking test runs into GitHub Actions so broken PRs are automatically rejected before touching staging or prod.",
      },
    ],
    metrics: [
      { label: "REGRESSION PREVENTION", value: "99.8%", subtext: "Bugs caught before prod release" },
      { label: "E2E SUITE RUNTIME", value: "< 3.5 Min", subtext: "Parallelized test execution" },
      { label: "USER FLOW COVERAGE", value: "100%", subtext: "All core checkout paths tested" },
      { label: "TIME SAVED IN MANUAL QA", value: "25+ Hrs", subtext: "Per development sprint" },
    ],
    techStack: ["Playwright", "Cypress", "Vitest", "Jest", "React Testing Library", "GitHub Actions"],
    testimonial: {
      quote:
        "The automated Playwright test suite they wrote gives our engineering team the freedom to ship updates every day without fearing checkout breaks.",
      author: "Rachel Kim",
      role: "Lead Product Manager",
      company: "CartBloom",
      avatarText: "RK",
    },
  },
  {
    slug: "ui-ux-design",
    category: "DESIGN & BRANDING",
    title: "UI / UX DESIGN & PROTOTYPING",
    tagline: "Distinctive brutalist aesthetics, micro-interactions, and conversion-optimized interfaces",
    shortDesc: "High-converting web design, bespoke brutalist UI, custom design systems, and animated interactive Figma prototypes.",
    badge: "CREATIVE DIRECTION",
    color: "#ffc078",
    accent: "#0c0c0d",
    overview:
      "Generic templates kill conversion. We design bold, high-contrast, memorable user interfaces that captivate your audience within the first three seconds. Every typography decision, button state, and tactile micro-interaction is calibrated to command attention and turn curious visitors into paying clients.",
    whatWeDo: [
      "High-impact visual web design with bespoke aesthetics (Brutalist, Editorial, High-Tech Minimal)",
      "Comprehensive Figma design systems with unified tokenized typography, spacing, and colors",
      "Interactive prototypes with smooth state transitions, hover animations, and micro-interactions",
      "Conversion-rate optimization (CRO) wireframing specifically engineered for B2B & SaaS sales",
      "Responsive layout engineering from mobile phone screens up to 4K ultra-wide monitors",
      "Direct design-to-code translation ensuring 100% pixel-perfect implementation in React/CSS",
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "BRAND MOODBOARD & TONE",
        description: "Defining a distinct visual signature that differentiates you instantly from competitors in your industry.",
      },
      {
        step: "02",
        title: "HIGH-FIDELITY FIGMA DESIGNS",
        description: "Iterating on full-resolution responsive desktop and mobile screens with clickable prototypes for stakeholder review.",
      },
      {
        step: "03",
        title: "COMPONENT TOKENS & HANDOFF",
        description: "Exporting clean CSS variables and Tailwind classes so engineers can build with zero visual guesswork.",
      },
    ],
    metrics: [
      { label: "VISITOR ENGAGEMENT", value: "+65%", subtext: "Average time-on-page boost" },
      { label: "CONVERSION UPLIFT", value: "+32%", subtext: "Streamlined checkout & sign-up" },
      { label: "FIGMA TO CODE MATCH", value: "100%", subtext: "Pixel-accurate implementation" },
      { label: "DESIGN SYSTEM TOKENS", value: "240+", subtext: "Reusable buttons, inputs, & modals" },
    ],
    techStack: ["Figma", "Tailwind CSS", "CSS Animations", "SVG Vectors", "Google Fonts", "Lucide Icons"],
    testimonial: {
      quote:
        "The design they crafted for our brand blew our expectations away. It feels bold, authoritative, and memorable. Our demo request rate jumped by 40% after the redesign went live.",
      author: "Sebastian Cole",
      role: "Creative Director",
      company: "Aura Dynamics",
      avatarText: "SC",
    },
  },
  // =========================================================================
  // PATCH 1: AI ENGINEERING & INTELLIGENT SYSTEMS (PAGES 9 to 13)
  // =========================================================================
  {
    slug: "ai-development",
    category: "AI ENGINEERING",
    title: "AI DEVELOPMENT & ENGINEERING",
    tagline: "Production-grade machine learning pipelines, LLMs, and intelligent systems",
    shortDesc: "End-to-end AI engineering from custom model fine-tuning and inference optimization to robust enterprise integration.",
    badge: "CORE AI",
    color: "#ffffff",
    accent: "#000000",
    overview:
      "We build production AI systems designed to operate predictably within your core business architecture. Moving beyond brittle zero-shot prompts, we implement structured pipelines with strict JSON schemas, fallback routing, deterministic evals, and sub-second inference speeds.",
    whatWeDo: [
      "Custom LLM inference pipelines with model routing across Anthropic, OpenAI, and open-source weights",
      "Fine-tuning open weights (Llama, Mistral, Qwen) for domain-specific taxonomy and proprietary tasks",
      "Deterministic structured output validation using Pydantic, Zod, and JSON schema enforcement",
      "Model latency, token-cost reduction, and semantic response caching layers",
      "Real-time streaming token architectures with WebSocket and SSE client sync",
      "Continuous evaluation harnesses tracking accuracy, hallucination drift, and regression metrics"
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "FEASIBILITY & MODEL BENCHMARKING",
        description: "Benchmarking latency, cost per 1M tokens, and accuracy across frontier and quantized open-source models."
      },
      {
        step: "02",
        title: "PIPELINE ENGINEERING & GUARDRAILS",
        description: "Implementing structured tool calling, validation boundaries, and circuit breakers against hallucination."
      },
      {
        step: "03",
        title: "CONTINUOUS OBSERVABILITY & EVALS",
        description: "Deploying automated telemetry tracking latency, prompt drift, token expenditure, and output precision."
      }
    ],
    metrics: [
      { label: "TOKEN INFERENCE LATENCY", value: "< 280ms", subtext: "TTFT on optimized edge routes" },
      { label: "COST REDUCTION", value: "65%", subtext: "Model tiering & semantic caching" },
      { label: "SCHEMA RELIABILITY", value: "99.99%", subtext: "Structured type compliance" },
      { label: "ZERO-DRIFT EVALS", value: "Continuous", subtext: "Automated regression suites" }
    ],
    techStack: ["Python", "PyTorch", "vLLM", "OpenAI", "Anthropic Claude", "LangChain", "FastAPI", "TypeScript"],
    testimonial: {
      quote:
        "NeedHelpBuilding transformed our experimental AI concept into an enterprise-ready engine that handles millions of daily operations with pinpoint reliability.",
      author: "Arjun Nair",
      role: "VP of Engineering",
      company: "DataSphere",
      avatarText: "AN"
    }
  },
  {
    slug: "ai-consulting",
    category: "AI ENGINEERING",
    title: "AI STRATEGY & CONSULTING",
    tagline: "Strategic advisory to de-risk AI investments and build defensible moats",
    shortDesc: "Pragmatic AI roadmapping, ROI modeling, build vs buy evaluation, and architectural feasibility audits.",
    badge: "ADVISORY",
    color: "#ffffff",
    accent: "#000000",
    overview:
      "Most corporate AI projects fail due to unclear problem diagnosis, uncontrollable token economics, and hallucination risks. We diagnose your operational bottlenecks first to determine exactly where autonomous models or deterministic software create highest enterprise ROI.",
    whatWeDo: [
      "AI readiness assessment analyzing proprietary data pipelines and operational readiness",
      "Build vs Buy analysis identifying when to customize open models vs frontier APIs",
      "Token economics and inference cost forecasting models to prevent margin compression",
      "Data governance, privacy compliance (GDPR/HIPAA/SOC-2), and IP defense strategies",
      "Vendor and framework auditing across LLM providers, vector stores, and orchestration engines",
      "Executive roadmaps detailing phased multi-quarter rollout milestones"
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "DATA & WORKFLOW DIAGNOSIS",
        description: "Deep-dive audit into existing workflows, APIs, databases, and manual human touchpoints."
      },
      {
        step: "02",
        title: "ECONOMIC & ARCHITECTURAL MODELING",
        description: "Quantifying token costs, expected throughput, infrastructure constraints, and security perimeters."
      },
      {
        step: "03",
        title: "STRATEGIC ROADMAP & PROTOTYPING",
        description: "Delivering prioritized phase gates, architecture diagrams, and working technical validation spikes."
      }
    ],
    metrics: [
      { label: "ACCELERATED TIME-TO-VALUE", value: "4x", subtext: "Eliminating trial-and-error R&D" },
      { label: "AVERAGE OPEX SAVINGS", value: "$120K+", subtext: "Preventing over-engineered stacks" },
      { label: "IP PROTECTION", value: "100%", subtext: "Zero unauthorized model training exposure" },
      { label: "FEASIBILITY SPRINT", value: "10 Days", subtext: "From audit to executive blueprint" }
    ],
    techStack: ["Architecture Blueprints", "ROI Models", "LLM Benchmarks", "Security Audits", "Data Governance"],
    testimonial: {
      quote:
        "Their strategic audit saved us 6 months of misdirected engineering effort. They clearly separated the genuine AI value from the hype.",
      author: "Elena Rostova",
      role: "Chief Technology Officer",
      company: "Stratix Capital",
      avatarText: "ER"
    }
  },
  {
    slug: "generative-ai",
    category: "AI ENGINEERING",
    title: "GENERATIVE AI APPLICATION DEVELOPMENT",
    tagline: "Multimodal generative apps engineered with intuitive human feedback loops",
    shortDesc: "Production generative applications spanning text synthesis, code intelligence, image generation, and audio processing.",
    badge: "MULTIMODAL",
    color: "#ffffff",
    accent: "#000000",
    overview:
      "We engineer generative software that solves complex business workflows. From multimodal document synthesis and code generation engines to automated media generation, our applications combine real-time streaming interfaces with rock-solid server architectures.",
    whatWeDo: [
      "Interactive generative web apps featuring streaming generation and optimistic UI updates",
      "Multimodal document analysis synthesizing text, tables, graphs, and unstructured media",
      "Fine-tuned code intelligence and query generation copilots for proprietary databases",
      "Synthetic media generation pipelines with programmatic video and audio rendering",
      "Human-in-the-loop validation dashboards for reviewing and approving AI outputs",
      "Context-aware prompt template compilers with automated versioning and A/B evaluations"
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "MULTIMODAL PROTOTYPE",
        description: "Rapidly wiring live models with reactive frontends to validate user flow and output ergonomics."
      },
      {
        step: "02",
        title: "BACKEND STREAMING & PERSISTENCE",
        description: "Constructing WebSocket/SSE channels, background queue workers, and vector storage."
      },
      {
        step: "03",
        title: "PRODUCTION EVALUATION HARNESS",
        description: "Deploying automated feedback telemetry, user preference tracking, and regression tests."
      }
    ],
    metrics: [
      { label: "STREAMING LATENCY", value: "< 180ms", subtext: "Time-to-first-token delivered" },
      { label: "USER APPROVAL RATE", value: "94%", subtext: "First-pass output acceptance" },
      { label: "MULTIMODAL FORMATS", value: "8+", subtext: "Text, Audio, PDF, Images, Tables" },
      { label: "SCALE CAPACITY", value: "10K+ QPS", subtext: "Distributed queue orchestration" }
    ],
    techStack: ["Next.js", "React", "Python", "FastAPI", "OpenAI Vision", "Anthropic Claude 3.5", "WebSockets"],
    testimonial: {
      quote:
        "The generative interface NeedHelpBuilding delivered feels as fluid as native desktop software. Our customers interact with it every single day.",
      author: "David Chen",
      role: "Head of Product",
      company: "CognitiveFlow",
      avatarText: "DC"
    }
  },
  {
    slug: "ai-agents",
    category: "AI ENGINEERING",
    title: "AI AGENT DEVELOPMENT",
    tagline: "Autonomous goal-oriented agents equipped with tools, memory, and guardrails",
    shortDesc: "Custom AI agents capable of planning multi-step actions, calling external APIs, querying databases, and executing workflows.",
    badge: "AUTONOMOUS",
    color: "#ffffff",
    accent: "#000000",
    overview:
      "Autonomous agents must do more than converse: they must execute work reliably. We build intelligent agent systems that decompose complex high-level objectives into sequential tool executions, verify their own work, manage memory, and escalate edge cases safely.",
    whatWeDo: [
      "Autonomous agent task planning using ReAct, Reflection, and hierarchical execution patterns",
      "Model Context Protocol (MCP) server integrations and custom API tool calling",
      "Long-term and episodic memory management combining vector retrieval and key-value state",
      "Deterministic sandbox execution environments for running untrusted agent-generated code",
      "Human-in-the-loop approval workflows for high-risk write operations and financial actions",
      "Granular execution step logging, replayability debugging, and automated step rollbacks"
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "ACTION SPACE & TOOL DEFINITION",
        description: "Strictly defining tool schemas, input parameters, permission levels, and idempotent boundaries."
      },
      {
        step: "02",
        title: "PLANNING & REFLECTION ENGINE",
        description: "Configuring multi-step reasoning, self-correction loops, and recursive step verification."
      },
      {
        step: "03",
        title: "SECURE SANDBOX & RUNTIME",
        description: "Isolating runtime execution with rate limits, timeout budgets, and human override checkpoints."
      }
    ],
    metrics: [
      { label: "TASK COMPLETION RATE", value: "96.4%", subtext: "Multi-step complex objectives" },
      { label: "TOOL CALL ACCURACY", value: "99.2%", subtext: "Zero malformed schema calls" },
      { label: "MAX STEPS EXECUTION", value: "50+", subtext: "Autonomous reasoning depth" },
      { label: "SANDBOX ISOLATION", value: "Strict", subtext: "Zero unauthorized host access" }
    ],
    techStack: ["LangGraph", "Python", "Model Context Protocol (MCP)", "Docker", "Redis", "TypeScript", "PostgreSQL"],
    testimonial: {
      quote:
        "Their AI agents completely automated our research and reconciliation pipeline. What used to take our analysts 6 hours now happens in under 4 minutes.",
      author: "Rachel Zhang",
      role: "Director of Operations",
      company: "Apex Analytics",
      avatarText: "RZ"
    }
  },
  {
    slug: "multi-agent-systems",
    category: "AI ENGINEERING",
    title: "MULTI-AGENT SYSTEMS & ORCHESTRATION",
    tagline: "Collaborative agent swarms with specialized roles and shared state",
    shortDesc: "Orchestrated networks of specialized AI agents working collectively to solve large-scale enterprise workflows.",
    badge: "ORCHESTRATION",
    color: "#ffffff",
    accent: "#000000",
    overview:
      "When tasks are too complex for a single prompt or agent, multi-agent swarms divide and conquer. We engineer specialized agent networks, where researcher, coder, auditor, and validator agents collaborate over shared blackboard architectures with deterministic state transitions.",
    whatWeDo: [
      "Hierarchical and peer-to-peer agent network orchestration using LangGraph and state machines",
      "Role-specialized agent prompt engineering with isolated tool access and specific domain personas",
      "Shared blackboard state management with concurrent transaction conflict resolution",
      "Consensus protocols and automated peer-review auditing before finalizing complex work",
      "Resilient failure handling, step back-tracking, and dynamic agent task re-delegation",
      "Real-time visual telemetry displaying agent communication graphs and thought processes"
    ],
    howWeDoIt: [
      {
        step: "01",
        title: "SWARM TOPOLOGY ARCHITECTURE",
        description: "Designing the communication topology (supervisor, round-robin, or peer blackboard)."
      },
      {
        step: "02",
        title: "STATE GRAPH & PROTOCOL IMPLEMENTATION",
        description: "Encoding deterministic state transition rules, shared memory locks, and validator criteria."
      },
      {
        step: "03",
        title: "STRESS & CONSENSUS TESTING",
        description: "Simulating agent disagreements, network timeouts, and edge cases to guarantee deadlock-free resolution."
      }
    ],
    metrics: [
      { label: "SWARM COORDINATION SPEED", value: "< 1.2s", subtext: "Inter-agent message passing" },
      { label: "ERROR DETECTION RATE", value: "98.8%", subtext: "Caught by peer auditor agents" },
      { label: "CONCURRENT AGENTS", value: "30+", subtext: "Orchestrated across shared state" },
      { label: "DEADLOCK RATE", value: "0.00%", subtext: "Deterministic state graphs" }
    ],
    techStack: ["LangGraph", "Python", "FastAPI", "Redis Streams", "Temporal.io", "TypeScript", "Next.js"],
    testimonial: {
      quote:
        "The multi-agent orchestration architecture designed by NeedHelpBuilding solved our hardest workflow bottlenecks with absolute precision.",
      author: "Vikram Malhotra",
      role: "VP of Product Engineering",
      company: "Nexus AI Labs",
      avatarText: "VM"
    }
  }
];
