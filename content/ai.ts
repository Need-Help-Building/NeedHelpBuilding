/** §04 — AI engineering capabilities and the reference architecture shown in the diagram. */

export interface AiCapability {
  title: string;
  detail: string;
}

export const aiCapabilities: AiCapability[] = [
  { title: "AI agents", detail: "Goal-driven agents that call tools, check their work and know when to ask a human." },
  { title: "Multi-agent orchestration", detail: "Specialised agents coordinated through explicit state, not a single prompt doing everything." },
  { title: "Autonomous workflows", detail: "Long-running processes that trigger, act and recover on their own — with approvals where it matters." },
  { title: "Generative AI applications", detail: "Products where generation is the feature: drafting, summarising, transforming, creating." },
  { title: "Enterprise RAG systems", detail: "Answers grounded in your documents and data, with citations and retrieval you can evaluate." },
  { title: "AI voice agents", detail: "Real-time phone agents that listen, reason and speak — like the Caller OS pipeline we built." },
  { title: "Conversational AI", detail: "Chat and WhatsApp assistants connected to the systems that hold the real answers." },
  { title: "Intelligent document processing", detail: "Invoices, forms, contracts and records turned into structured, validated data." },
  { title: "AI-powered internal systems", detail: "Copilots inside the tools your team already uses: CRMs, dashboards, back offices." },
];

export type LayerId = "input" | "orchestration" | "agents" | "tools" | "knowledge" | "execution" | "monitoring";

export interface ArchitectureLayer {
  id: LayerId;
  index: string;
  name: string;
  role: string;
  detail: string;
  parts: string[];
}

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "input",
    index: "01",
    name: "User input",
    role: "Where work enters",
    detail: "Chat, voice calls, email, forms, webhooks or a schedule. Every entry point is normalised into the same request shape.",
    parts: ["Web & mobile UI", "Telephony (SIP)", "WhatsApp & email", "Webhooks & cron"],
  },
  {
    id: "orchestration",
    index: "02",
    name: "Orchestration layer",
    role: "Plans, routes, remembers",
    detail: "Breaks the request into steps, routes each to the right agent or model, holds state and memory, and enforces cost and time budgets.",
    parts: ["State graph", "Model routing", "Context & memory", "Budgets & limits"],
  },
  {
    id: "agents",
    index: "03",
    name: "Specialised agents",
    role: "One job each",
    detail: "Narrow agents with a single responsibility — plan, research, act, review — are easier to test and far harder to confuse.",
    parts: ["Planner", "Researcher", "Executor", "Reviewer"],
  },
  {
    id: "tools",
    index: "04",
    name: "Tools & APIs",
    role: "Permissioned actions",
    detail: "Typed tool calls into your CRM, calendar, database, payments or internal APIs — each scoped to exactly what the agent is allowed to do.",
    parts: ["Function calling", "MCP servers", "REST / GraphQL", "Scoped credentials"],
  },
  {
    id: "knowledge",
    index: "05",
    name: "Knowledge base",
    role: "Grounded answers",
    detail: "Your documents and data, chunked, embedded and retrieved with citations, so answers come from your sources rather than the model's memory.",
    parts: ["Embeddings", "Vector store", "Hybrid search", "Re-ranking"],
  },
  {
    id: "execution",
    index: "06",
    name: "Execution",
    role: "Guarded outcomes",
    detail: "Outputs are validated against schemas, risky actions wait for approval, and every step can be retried safely.",
    parts: ["Structured outputs", "Human-in-the-loop", "Idempotent actions", "Fallbacks"],
  },
  {
    id: "monitoring",
    index: "07",
    name: "Monitoring",
    role: "Measured, not guessed",
    detail: "Every run is traced and evaluated so quality, latency and cost are visible — and failures feed back into the next iteration.",
    parts: ["Tracing", "Evaluations", "Latency & cost", "Feedback loop"],
  },
];
