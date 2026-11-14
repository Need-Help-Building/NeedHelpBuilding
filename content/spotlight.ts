/**
 * §05 — Caller OS spotlight. Pipeline stages and annotations are taken from the real product screenshot
 * (public/caller_work.png) and the project description in public/llms.txt.
 */

export const spotlight = {
  projectSlug: "caller-os",
  lede: "Caller OS is our own voice-AI product: real-time phone agents that hold natural conversations, including Hinglish, answer from a business's own data, and act on what they hear.",
  application:
    "Built for service businesses that lose customers when nobody picks up: clinics, home services, agencies and support desks. The agent answers, qualifies, books and hands over, and the team gets a written summary of every call.",
  capabilities: [
    "Inbound and outbound calls over SIP telephony",
    "Natural, interruptible conversation in English and Hinglish",
    "Answers grounded in the business's own knowledge (RAG)",
    "Live availability checks and calendar booking",
    "Call summaries to staff by SMS and email",
    "Escalation to a person when it matters",
  ],
  /** Zoomed "detail view" of the screenshot: scale 1.6 about (96%, 56%). Pins are in zoomed % coordinates. */
  detailZoom: { scale: 1.6, originX: 96, originY: 56 },
  annotations: [
    { n: 1, x: 34.5, y: 38.5, label: "Live transcription stream", detail: "The caller's speech, transcribed as they talk." },
    { n: 2, x: 70.5, y: 49, label: "Per-stage latency", detail: "Speech-to-text, LLM and text-to-speech timed separately." },
    { n: 3, x: 70.5, y: 85, label: "Grounding confidence", detail: "How well the answer is supported by the business's data." },
  ],
  pipeline: [
    { stage: "Caller", detail: "Phone call in or out", tech: "PSTN" },
    { stage: "Telephony", detail: "SIP trunk, call control", tech: "SIP" },
    { stage: "Speech-to-text", detail: "Streaming transcription", tech: "Groq · Whisper" },
    { stage: "Reasoning", detail: "Grounded on business data", tech: "Llama 3.3 70B · RAG" },
    { stage: "Text-to-speech", detail: "Natural voice reply", tech: "Google TTS" },
    { stage: "Actions", detail: "Book, notify, escalate", tech: "Calendar · Cal.com · SMS" },
  ],
};
