import { meetingTopics, type MeetingTopic } from "@/content/ecosystem";

/** Link to the shared booking page for a topic; the page embeds the scheduler or falls back to email/WhatsApp. */
export function bookingHref(topic: MeetingTopic = "general"): string {
  return topic === "general" ? "/book" : `/book?topic=${topic}`;
}

/** Ready-made CTA ({ href, label }) for a meeting about a topic, with an optional label override. */
export function bookingCta(topic: MeetingTopic, label?: string) {
  return { href: bookingHref(topic), label: label ?? meetingTopics[topic].label };
}
