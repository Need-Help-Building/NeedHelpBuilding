/**
 * Article bodies for /blog/[slug], keyed by insight slug (metadata lives in ./insights.ts).
 * Kept as typed blocks so the page renders semantic HTML (h2/h3, lists, tables) and reading time is
 * computed from the real word count. No client names or statistics are claimed here.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul" | "ol"; items: { lead?: string; text: string }[] }
  | { type: "callout"; label: string; text: string }
  | { type: "table"; caption: string; head: string[]; rows: string[][] };

export interface Article {
  /** Direct answer to the question the title raises, shown first (and used as the summary). */
  answer: string;
  body: ArticleBlock[];
  /** ISO date of the last substantive edit. */
  updated: string;
}

export const articles: Record<string, Article> = {
  "agents-need-boundaries": {
    updated: "2026-11-09",
    answer:
      "A production AI agent is only as safe as the tools it can call. Design the permission list before the prompt: give the agent narrow, task-shaped tools, sort them by how much damage a wrong call can do, enforce limits in code rather than in instructions, and require a human approval step for anything that cannot be undone.",
    body: [
      { type: "h2", text: "Why tool permissions matter more than the prompt" },
      {
        type: "p",
        text: "A system prompt is a request. A tool permission is a fact. When an agent reads an email, a support ticket or a web page, any of that text can contain instructions, and a model cannot reliably tell the difference between your instructions and an attacker's. This is prompt injection, and no amount of careful wording in the system prompt fully prevents it.",
      },
      {
        type: "p",
        text: "What you can control completely is what happens when the model asks to do something. If the agent has no tool that issues refunds, no prompt can make it issue a refund. That makes the tool list, not the prompt, the real specification of what your agent is allowed to do.",
      },
      { type: "h2", text: "Start from the task, not from the API" },
      {
        type: "p",
        text: "The fastest way to build an agent is to hand it a wrapper around an entire API: your CRM, your database, your email account. It is also the fastest way to give it far more power than the job requires. Instead, write down the verbs the task actually needs and expose one tool per verb.",
      },
      {
        type: "ul",
        items: [
          { lead: "Too broad:", text: "a generic crm_request(method, path, body) tool that can read, update or delete any record." },
          { lead: "Task-shaped:", text: "find_contact_by_email, log_call_note and create_follow_up_task, each with a fixed set of fields." },
          { lead: "Too broad:", text: "run_sql(query) against the production database." },
          { lead: "Task-shaped:", text: "get_order_status(order_id) backed by a parameterised, read-only query." },
        ],
      },
      {
        type: "p",
        text: "Narrow tools are also easier for the model to use correctly. Fewer parameters and clearer names reduce the number of ways a call can go wrong, which improves reliability as well as safety.",
      },
      { type: "h2", text: "Sort every tool by blast radius" },
      {
        type: "p",
        text: "Not every tool deserves the same controls. Classify each one by the worst realistic outcome of a wrong call, then apply controls to match.",
      },
      {
        type: "table",
        caption: "Tool tiers and the controls each one needs",
        head: ["Tier", "Examples", "Controls"],
        rows: [
          ["Read-only", "Look up an order, search documents, check a calendar", "Scope to the current user or tenant; log every call"],
          ["Reversible write", "Draft an email, create a task, add an internal note", "Schema validation, rate limits, an undo path"],
          ["Irreversible or external", "Send to a customer, issue a refund, delete data, move money", "Human approval of the exact action, hard limits on amounts"],
        ],
      },
      { type: "h2", text: "Enforce limits at the boundary, in code" },
      {
        type: "p",
        text: "Every tool call crosses a boundary from probabilistic model output into deterministic systems. Validate there, as you would validate input from an untrusted user, because that is effectively what it is.",
      },
      {
        type: "ul",
        items: [
          { lead: "Validate arguments against a schema", text: "before anything executes, and reject the call rather than trying to repair it." },
          { lead: "Take identity from the session, not the model.", text: "The user ID, tenant and permissions come from your authentication layer; never let the model supply them as arguments." },
          { lead: "Apply hard limits", text: "on amounts, recipients and volumes, such as a maximum refund value or an allowlist of domains the agent may email." },
          { lead: "Make writes idempotent", text: "with a request key, so a retried or repeated call does not create duplicate records." },
        ],
      },
      { type: "h2", text: "Put a human in front of irreversible actions" },
      {
        type: "p",
        text: "For the highest tier, change the tool from \"do it\" to \"propose it\". The agent prepares the exact action, such as the email text, the refund amount or the record to delete, and a person approves or rejects it. Show the approver the concrete payload, not a summary written by the model, so they are approving what will actually happen.",
      },
      {
        type: "callout",
        label: "Operating principle",
        text: "If an agent does not explicitly need a capability to do its job, it should not have it. Grant access per task, not per system.",
      },
      { type: "h2", text: "Treat retrieved content as untrusted" },
      {
        type: "p",
        text: "Injection usually arrives through data the agent reads, not through the user. The most robust pattern is to avoid combining untrusted input and powerful tools in the same step. An agent that summarises inbound email should not also hold a tool that sends email on your behalf; split that into a reader that produces structured output and a separate, narrower actor that works only from that output.",
      },
      { type: "h2", text: "Use scoped, short-lived credentials" },
      {
        type: "p",
        text: "Give each agent its own service account with the minimum permissions its tools need, rather than reusing an admin key. Prefer short-lived tokens, keep secrets out of the model's context entirely, and make sure you can revoke one agent's access without touching anything else.",
      },
      { type: "h2", text: "Log and test the boundaries" },
      {
        type: "p",
        text: "Record every tool call with its arguments, result, the model's stated reason and, where relevant, who approved it. These traces are how you debug incidents and how you build evaluation sets from real behaviour.",
      },
      {
        type: "p",
        text: "Then test the boundaries on purpose. Keep a suite of adversarial cases, such as documents containing injected instructions or requests just outside the agent's remit, and run it on every prompt, model or tool change. The question is not whether the agent completes the happy path but whether it stays inside its permissions when pushed.",
      },
      { type: "h2", text: "Checklist before an agent goes live" },
      {
        type: "ol",
        items: [
          { text: "Every tool maps to a specific verb the task needs." },
          { text: "Each tool is classified as read-only, reversible or irreversible." },
          { text: "Arguments are schema-validated and identity comes from the session." },
          { text: "Irreversible actions require human approval of the exact payload." },
          { text: "Untrusted input and high-privilege tools never share a step." },
          { text: "The agent runs on its own least-privilege, revocable credentials." },
          { text: "Every call is logged and an adversarial test suite runs on each change." },
        ],
      },
    ],
  },

  "build-buy-or-integrate": {
    updated: "2026-11-09",
    answer:
      "Buy when the capability is common to every business like yours and you can adapt your process to the product. Integrate when good products exist but your advantage comes from how they connect. Build only when the capability is what makes you different, or no product fits without distorting the way you work.",
    body: [
      { type: "h2", text: "Name the capability, then ask if it differentiates you" },
      {
        type: "p",
        text: "Most build-versus-buy debates go wrong because the question is framed around a product (\"should we build our own CRM?\") instead of a capability (\"how do we track relationships with customers?\"). Write the capability down in one sentence, then ask a blunt question: would a customer choose you over a competitor because you do this better?",
      },
      {
        type: "p",
        text: "Payroll, email and accounting almost never differentiate a business; buy them. The way a logistics company plans routes, or the way a clinic triages bookings, often does. Differentiating capabilities are where custom software earns its cost.",
      },
      { type: "h2", text: "Measure how far you would bend to fit the product" },
      {
        type: "p",
        text: "Every off-the-shelf product encodes someone else's process. List the steps in your current workflow and mark the ones the product does not support. If the gaps are in places where your process is simply habit, change the process and buy. If the gaps are in the steps that make you good at what you do, heavy customisation of a bought product tends to be the most expensive option of all: you pay the licence and you also pay for custom work that breaks on every upgrade.",
      },
      { type: "h2", text: "Compare total cost over three years, not the first invoice" },
      {
        type: "p",
        text: "A subscription looks cheap and a build looks expensive in month one. Over three years the picture is often different, in either direction. Put both on the same sheet.",
      },
      {
        type: "table",
        caption: "What to include in a three-year cost comparison",
        head: ["Cost", "Buy", "Build"],
        rows: [
          ["Upfront", "Setup, migration, configuration", "Discovery, design, engineering"],
          ["Recurring", "Licences that grow with seats or usage", "Hosting, monitoring, security updates"],
          ["Change", "Customisation, workarounds, plan upgrades", "New features and ongoing maintenance"],
          ["People", "Admin time, training", "An owner who understands the system"],
          ["Exit", "Data export and migration if you leave", "Rewrites if the stack is neglected"],
        ],
      },
      {
        type: "p",
        text: "Maintenance is the line most build estimates leave out. Software that is not maintained becomes a liability, so budget for it every year rather than treating the build as a one-off purchase.",
      },
      { type: "h2", text: "Check who controls the data" },
      {
        type: "p",
        text: "Before buying, confirm that you can export all of your data in a usable format, that the product has a documented API with sensible rate limits, and that the vendor's roadmap is not the only route to features you need. Weak answers here are what turn a convenient purchase into lock-in.",
      },
      { type: "h2", text: "Weigh time to value against your team's capacity" },
      {
        type: "p",
        text: "Buying is usually faster to first value. Building is only realistic if someone will own the system after launch: deploying it, fixing it and deciding what it should do next. If nobody on the team can play that role, a build is a bet on a vendor relationship anyway, just a less visible one.",
      },
      { type: "h2", text: "Integration: buy the systems of record, build the glue" },
      {
        type: "p",
        text: "For many businesses the best answer is neither pure option. Buy proven products for the systems of record, such as accounting, CRM and support desk, then build the thin layer that connects them: syncing data, routing work and automating the handoffs that make your operation distinctive. You get the reliability of mature products and custom behaviour exactly where it matters, with far less code to maintain.",
      },
      { type: "h2", text: "A quick scorecard" },
      {
        type: "ol",
        items: [
          { lead: "Differentiation:", text: "does doing this better win customers? Yes points to build or integrate." },
          { lead: "Process fit:", text: "do the product's gaps fall on your core steps? Yes points away from buying." },
          { lead: "Three-year cost:", text: "which option is cheaper once maintenance and licence growth are included?" },
          { lead: "Data control:", text: "can you export everything and integrate through an API?" },
          { lead: "Ownership:", text: "is there a named person who will run the system after launch?" },
        ],
      },
      { type: "h2", text: "Signs you chose wrong" },
      {
        type: "ul",
        items: [
          { text: "Your team keeps spreadsheets beside the product to do the work it cannot." },
          { text: "Most of the engineering budget goes to keeping customisations working after vendor updates." },
          { text: "A custom build has no owner and nobody wants to change it." },
          { text: "You cannot answer a basic business question without exporting data by hand." },
        ],
      },
      {
        type: "p",
        text: "None of these are permanent. The point of the framework is to make the decision explicit, write down why you made it and revisit it when the reasons change.",
      },
    ],
  },

  "your-rag-prototype-works": {
    updated: "2026-11-09",
    answer:
      "Retrieval-augmented generation prototypes usually fail in production because of retrieval, not the language model. Answers degrade when documents are chunked badly, when nobody measures whether the right passages are found, when the index goes stale, when users can see documents they should not, and when answers cannot be traced back to a source.",
    body: [
      { type: "h2", text: "Chunk by document structure, not by character count" },
      {
        type: "p",
        text: "Splitting every document into fixed-size pieces is fine for a demo. In production it cuts tables in half, separates a heading from the paragraph it explains and buries the one sentence that answers the question inside unrelated text. Split along the structure the document already has, such as sections, headings, list items and table rows, and keep each chunk's context with it.",
      },
      {
        type: "ul",
        items: [
          { lead: "Carry the path:", text: "store the document title and heading trail with each chunk so \"Refunds > Damaged items\" is searchable even when the chunk text never says \"refund\"." },
          { lead: "Keep metadata:", text: "source, owner, last-modified date and access rules travel with every chunk." },
          { lead: "Handle formats explicitly:", text: "PDFs, slides and spreadsheets each need their own extraction, and scanned documents need OCR before anything else." },
        ],
      },
      { type: "h2", text: "Evaluate retrieval separately from generation" },
      {
        type: "p",
        text: "If the right passage is never retrieved, the best model in the world cannot answer correctly. Build a test set of real questions paired with the passages that answer them, and measure retrieval on its own: of the top results returned, how often is the correct passage among them? Then measure the generated answers separately. Without this split you cannot tell whether a bad answer came from search or from the model.",
      },
      {
        type: "p",
        text: "Two improvements pay off for most teams once they are measuring. Hybrid search combines keyword matching with vector similarity, which catches exact terms like product codes and names that embeddings handle poorly. A reranking step then reorders a larger candidate set so the most relevant passages reach the model.",
      },
      { type: "h2", text: "Keep the index in step with the source" },
      {
        type: "p",
        text: "A prototype is indexed once. A production system needs incremental ingestion that picks up new and edited documents, removes deleted ones and records when each chunk was last refreshed. Stale content is worse than missing content, because the system will cite an outdated policy with complete confidence.",
      },
      {
        type: "callout",
        label: "Rule of thumb",
        text: "Deletion is the ingestion path most often missed. If a document is removed from the source system, test that it disappears from answers too.",
      },
      { type: "h2", text: "Enforce permissions at retrieval time" },
      {
        type: "p",
        text: "If an employee cannot open a document directly, the assistant must not quote it to them. Filter search results by the user's permissions before anything reaches the model; asking the model to withhold restricted content is not access control. Sync permissions from the source systems along with the content, and test with users who have different roles.",
      },
      { type: "h2", text: "Ground every answer in a citation, and allow \"I don't know\"" },
      {
        type: "p",
        text: "Instruct the model to answer only from the retrieved passages and to cite the source of each claim, then show those citations in the interface so people can check them. Just as important, let the system say it could not find an answer. A grounded refusal builds more trust than a fluent guess, and logging those refusals shows you exactly which content is missing.",
      },
      { type: "h2", text: "Watch quality, cost and latency together" },
      {
        type: "table",
        caption: "What to monitor once a RAG system is live",
        head: ["Signal", "Why it matters"],
        rows: [
          ["Retrieval hit rate on the test set", "Catches regressions when chunking, embeddings or ranking change"],
          ["Answers with no supporting citation", "Flags likely hallucinations"],
          ["\"Could not find\" responses by topic", "Shows gaps in the source content"],
          ["User feedback on answers", "Supplies new cases for the test set"],
          ["Tokens and latency per answer", "Keeps cost and response time predictable as usage grows"],
        ],
      },
      { type: "h2", text: "Production readiness checklist" },
      {
        type: "ol",
        items: [
          { text: "Chunks follow document structure and carry title, headings and metadata." },
          { text: "A labelled question set measures retrieval and answers separately." },
          { text: "Hybrid search and reranking are evaluated against that set." },
          { text: "Ingestion handles new, edited and deleted documents." },
          { text: "Results are filtered by the user's permissions before generation." },
          { text: "Answers cite sources, and the system can decline to answer." },
          { text: "Quality, cost and latency are monitored and feed back into the test set." },
        ],
      },
    ],
  },

  "automate-the-handoff": {
    updated: "2026-11-09",
    answer:
      "The best first automations are the handoffs between people and systems: copying data from one tool to another, routing requests, sending reminders and chasing status. Leave judgement calls, rare exceptions and relationship moments with people. Pick work that is frequent, follows clear rules and is cheap to correct when something goes wrong.",
    body: [
      { type: "h2", text: "Why handoffs are the right place to start" },
      {
        type: "p",
        text: "Work rarely slows down while someone is doing a task. It slows down between tasks: while a form waits to be copied into the CRM, while an invoice waits for someone to notice it arrived, while a customer waits for a status update nobody remembered to send. Handoffs are also where errors creep in, because retyping data and passing messages are exactly the jobs people do worst when they are busy.",
      },
      {
        type: "p",
        text: "Automating a whole job means encoding all of its judgement. Automating the handoff means encoding only the movement of information, which is far simpler, cheaper to build and easier to trust.",
      },
      { type: "h2", text: "Find the handoffs in a process" },
      {
        type: "ol",
        items: [
          { lead: "Map one process end to end", text: "from trigger to outcome, for example \"enquiry received\" to \"job booked\"." },
          { lead: "Mark every handoff:", text: "each point where information moves between people, teams or tools." },
          { lead: "Note three numbers for each:", text: "how often it happens, how long work waits there and how often it goes wrong." },
          { lead: "Ask who notices", text: "when it fails. Handoffs that fail silently are usually the most valuable to fix." },
        ],
      },
      { type: "h2", text: "Score candidates before building anything" },
      {
        type: "table",
        caption: "A simple scoring guide for automation candidates",
        head: ["Factor", "Automate first", "Leave for later"],
        rows: [
          ["Volume", "Happens daily or many times a week", "A few times a month"],
          ["Rules", "Clear inputs and a predictable outcome", "Depends on context and judgement"],
          ["Exceptions", "Rare and easy to recognise", "Most cases are special"],
          ["Cost of a mistake", "Easy to notice and reverse", "Expensive, public or irreversible"],
          ["Process stability", "Has not changed in months", "Still being worked out"],
        ],
      },
      { type: "h2", text: "Good first candidates" },
      {
        type: "ul",
        items: [
          { lead: "Lead capture:", text: "website and WhatsApp enquiries created as CRM records and assigned to the right person." },
          { lead: "Intake to ticket:", text: "form submissions turned into structured tickets with the right category and priority." },
          { lead: "Document extraction with review:", text: "invoice or order details pulled into your system, with a person confirming anything the extraction is unsure about." },
          { lead: "Reminders and confirmations:", text: "appointment, payment and renewal messages sent on schedule." },
          { lead: "Status updates:", text: "customers notified automatically when their order or request changes state." },
        ],
      },
      { type: "h2", text: "What to leave alone" },
      {
        type: "ul",
        items: [
          { text: "Decisions that need judgement or accountability, such as pricing exceptions or hiring." },
          { text: "Processes where exceptions are the norm; you will spend more time handling failures than you save." },
          { text: "Relationship moments, such as a complaint from a long-standing customer." },
          { text: "Processes that are still changing; automate them once they have settled." },
        ],
      },
      {
        type: "callout",
        label: "Operating principle",
        text: "Automate the predictable middle and route the exceptions to a person, with everything they need to decide quickly.",
      },
      { type: "h2", text: "Design so it fails safely" },
      {
        type: "ul",
        items: [
          { lead: "Route exceptions to a named owner", text: "instead of dropping them, with the original data attached." },
          { lead: "Make steps idempotent", text: "so a retry never creates a duplicate invoice or a second message to a customer." },
          { lead: "Log every run", text: "with what came in, what was done and what was skipped, so problems can be traced." },
          { lead: "Alert on silence,", text: "not only on errors: an automation that stops running often produces no error at all." },
        ],
      },
      { type: "h2", text: "Measure the result" },
      {
        type: "p",
        text: "Before launch, record the numbers you noted when mapping the process: volume, waiting time and error rate at the handoff. Measure them again a month after launch. If waiting time and errors fell and the exception queue is manageable, move to the next handoff. If the exception queue is growing, the rules were not as clear as they looked, and the right fix is usually to narrow what the automation handles.",
      },
    ],
  },
};

/** Plain text of an article, for word counts and structured data. */
export function articleText(article: Article): string {
  const parts = [article.answer];
  for (const b of article.body) {
    if (b.type === "p" || b.type === "h2" || b.type === "h3") parts.push(b.text);
    else if (b.type === "ul" || b.type === "ol") parts.push(...b.items.map((i) => `${i.lead ?? ""} ${i.text}`));
    else if (b.type === "callout") parts.push(b.label, b.text);
    else if (b.type === "table") parts.push(b.caption, ...b.head, ...b.rows.flat());
  }
  return parts.join(" ");
}

export function wordCount(article: Article): number {
  return articleText(article).split(/\s+/).filter(Boolean).length;
}

/** Reading time at ~220 words per minute. */
export function readingTime(article: Article): string {
  return `${Math.max(1, Math.round(wordCount(article) / 220))} min read`;
}
