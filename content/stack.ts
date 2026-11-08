/**
 * §09 — technologies NHB works with. These are working tools, not vendor partnerships or certifications.
 * `shipped` marks tools visible in NHB's live work (Caller OS screenshot, YourStoreHere stack in llms.txt,
 * and this site itself). Everything else comes from the brief / services.txt and should be confirmed
 * against the team's current practice before launch.
 */

export interface TechItem {
  name: string;
  note: string;
  shipped?: string;
}

export interface TechCategory {
  id: string;
  label: string;
  intent: string;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    intent: "Interfaces that stay fast and maintainable as they grow.",
    items: [
      { name: "React", note: "Component model for interfaces that need to grow without becoming fragile." },
      { name: "Next.js", note: "Server rendering, routing and SEO for web products.", shipped: "YourStoreHere, this site" },
      { name: "TypeScript", note: "One typed language from UI to API, so refactors are safe instead of scary.", shipped: "This site" },
      { name: "Tailwind CSS", note: "Design tokens enforced in code, so the design system survives contact with deadlines.", shipped: "This site" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    intent: "Services chosen for the workload, not the hype cycle.",
    items: [
      { name: "Node.js", note: "Event-driven APIs and integrations that share types with the frontend." },
      { name: "Python", note: "Data and AI workloads, model tooling and pipelines." },
      { name: "Rust", note: "Performance-critical services where latency and memory really matter." },
    ],
  },
  {
    id: "data",
    label: "Databases",
    intent: "Storage matched to how the data is actually read and written.",
    items: [
      { name: "PostgreSQL", note: "Our default for transactional data: relational, reliable, well understood." },
      { name: "MongoDB", note: "Document-shaped data with schemas that are still evolving." },
      { name: "Redis", note: "Caching, queues, rate limiting and real-time state." },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure",
    intent: "Deployments that are reproducible, observable and reversible.",
    items: [
      { name: "Docker", note: "Identical environments from a laptop to production." },
      { name: "AWS", note: "Managed compute, storage and networking when you need the full toolbox." },
      { name: "Vercel", note: "Zero-config deploys and preview environments for web products.", shipped: "YourStoreHere" },
    ],
  },
  {
    id: "ai",
    label: "AI",
    intent: "Model-agnostic by design — picked per task on quality, latency and cost.",
    items: [
      { name: "OpenAI", note: "General-purpose reasoning, structured outputs and tool use." },
      { name: "Anthropic", note: "Long-context reasoning and careful, tool-using agents." },
      { name: "Gemini", note: "Multimodal tasks and large-context retrieval." },
      { name: "Open-source LLMs", note: "Self-hostable models like Llama when data control or cost requires it.", shipped: "Caller OS (Llama 3.3 70B)" },
      { name: "Groq inference", note: "Very low-latency inference for real-time voice.", shipped: "Caller OS (Whisper STT)" },
      { name: "Vector databases", note: "Embedding search for retrieval-augmented generation." },
      { name: "Orchestration frameworks", note: "LangChain / LangGraph-style state graphs for multi-step agents." },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    intent: "No-code where it's enough, custom code where it isn't.",
    items: [
      { name: "n8n", note: "Self-hostable workflows when data needs to stay in your infrastructure." },
      { name: "Make", note: "Visual scenarios that operations teams can read and adjust." },
      { name: "Zapier", note: "Fast connections between mainstream SaaS tools." },
      { name: "Custom integrations", note: "Webhooks, queues and APIs when off-the-shelf connectors run out." },
    ],
  },
];
