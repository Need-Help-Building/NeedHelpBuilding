import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { isMeetingTopic, meetingTopics, programs, type MeetingTopic } from "@/content/ecosystem";
import { mailto, site, whatsapp } from "@/content/site";
import { bookingHref } from "@/components/ecosystem/booking";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";

export const metadata: Metadata = pageMetadata({
  title: "Book a One-to-One Meeting",
  description:
    "Talk directly with the NHB team about your startup, a partnership, a referral or a technology project. Choose a topic and request a time.",
  path: "/book",
});

const expectations = [
  "You speak with the people who would lead the work, not a sales team.",
  "Bring the context you have: an idea, a product, a client brief or a question. No preparation is required.",
  "We'll be direct about whether, and how, we can help. There's no obligation either way.",
];

function requestBody(topic: MeetingTopic) {
  return `Hi NHB team,\n\nI'd like a one-to-one meeting about: ${meetingTopics[topic].label}.\n\nWhat I'd like to discuss:\n\nA few times that suit me (with time zone):\n\nBest number to reach me:\n`;
}

/** Shared booking experience for every ecosystem page. Topic comes from ?topic=startups|referral|products|partners. */
export default async function BookPage({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic: rawTopic } = await searchParams;
  const topic: MeetingTopic = isMeetingTopic(rawTopic) ? rawTopic : "general";
  const { label, subject } = meetingTopics[topic];
  const program = programs.find((p) => p.id === topic);
  const topics = Object.entries(meetingTopics) as [MeetingTopic, (typeof meetingTopics)[MeetingTopic]][];

  return (
    <main id="main">
      <section aria-labelledby="book-title" className="relative overflow-hidden">
        <div
          aria-hidden
          className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_0%,#000_40%,transparent_90%)]"
        />
        <Container className="relative pt-12 pb-20 sm:pt-16 lg:pt-20 lg:pb-28">
          <p className="t-eyebrow flex items-center gap-3 text-muted">
            <span aria-hidden className="size-2 bg-sun ring-1 ring-ink/20" />
            Talk to the team
          </p>
          <h1
            id="book-title"
            className="mt-7 max-w-[16ch] text-[clamp(2.5rem,0.9rem+5vw,5.25rem)] leading-[0.97] font-semibold tracking-[-0.05em]"
          >
            Book a one-to-one meeting.
          </h1>
          <p className="t-lede mt-8 max-w-2xl text-muted">
            A direct conversation with NHB about your startup, a partnership, a referral or a technology project.
            Choose what you&apos;d like to discuss and request a time.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <nav aria-label="Meeting topic">
                <p className="t-eyebrow text-muted">What would you like to discuss?</p>
                <ul className="mt-4 border-t border-ink/12">
                  {topics.map(([id, t]) => {
                    const active = id === topic;
                    return (
                      <li key={id} className="border-b border-ink/12">
                        <Link
                          href={bookingHref(id)}
                          scroll={false}
                          aria-current={active ? "true" : undefined}
                          className={cn(
                            "flex items-center gap-4 py-4 text-[17px] font-medium tracking-[-0.02em] transition-colors",
                            active ? "text-ink" : "text-ink/60 hover:text-ink",
                          )}
                        >
                          <span
                            aria-hidden
                            className={cn(
                              "grid size-5 shrink-0 place-items-center rounded-full border",
                              active ? "border-ink bg-ink" : "border-ink/30",
                            )}
                          >
                            {active && <span className="size-2 rounded-full bg-sun" />}
                          </span>
                          {t.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-10">
                <p className="t-eyebrow text-muted">What to expect</p>
                <ul className="mt-4 space-y-3">
                  {expectations.map((e) => (
                    <li key={e} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-ink" />
                      {e}
                    </li>
                  ))}
                </ul>
                {program && (
                  <p className="mt-8 text-[14px] text-muted">
                    Want the details first?{" "}
                    <Link href={program.href} className="font-medium text-ink underline decoration-sun decoration-2 underline-offset-4">
                      Read about the {program.title}
                    </Link>
                    .
                  </p>
                )}
              </div>
            </div>

            <div className="lg:col-span-7">
              {site.bookingUrl ? (
                <div className="overflow-hidden rounded-3xl border border-ink/12 bg-white">
                  <div className="flex items-center justify-between gap-4 border-b border-ink/10 px-5 py-3.5">
                    <p className="text-[14px] font-medium">{label}</p>
                    <a
                      href={site.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted hover:text-ink"
                    >
                      Open in a new tab <ArrowUpRight aria-hidden className="size-3.5" />
                    </a>
                  </div>
                  <div className="relative h-[720px] bg-ivory">
                    {/* Shown until the scheduler paints over it (and if it fails to load). */}
                    <div aria-hidden className="absolute inset-0 grid place-items-center p-8 text-center">
                      <div>
                        <div className="mx-auto size-8 animate-spin rounded-full border-2 border-ink/15 border-t-ink" />
                        <p className="mt-4 text-[14px] text-muted">Loading the calendar…</p>
                      </div>
                    </div>
                    <iframe
                      src={site.bookingUrl}
                      title={`Schedule a meeting with NHB: ${label}`}
                      loading="lazy"
                      className="relative size-full border-0"
                    />
                  </div>
                </div>
              ) : (
                <div className="rounded-3xl bg-ink p-7 text-ivory sm:p-10">
                  <p className="t-eyebrow text-sun">Request a time</p>
                  <p className="mt-5 text-[clamp(1.5rem,1.2rem+1vw,2.125rem)] leading-tight font-semibold tracking-[-0.035em]">
                    {label}
                  </p>
                  <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-ivory/70">
                    Send us a few times that work for you and we&apos;ll confirm the meeting personally. Your request opens
                    with the topic already filled in.
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <a
                      href={mailto(subject, requestBody(topic))}
                      className="group flex h-14 items-center justify-between gap-3 rounded-full bg-sun pr-2.5 pl-6 text-[15px] font-medium text-ink transition-colors hover:bg-white"
                    >
                      <span className="inline-flex items-center gap-2.5">
                        <Mail aria-hidden className="size-4" /> Request by email
                      </span>
                      <span aria-hidden className="grid size-9 place-items-center rounded-full bg-ink text-sun">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </a>
                    <a
                      href={whatsapp(`Hi NHB team, I'd like a one-to-one meeting about: ${label}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-14 items-center justify-center gap-2.5 rounded-full border border-ivory/30 px-6 text-[15px] font-medium transition-colors hover:border-sun hover:text-sun"
                    >
                      <MessageCircle aria-hidden className="size-4" /> Message on WhatsApp
                    </a>
                  </div>
                  <ul className="mt-8 space-y-2 border-t border-ivory/12 pt-6 text-[14px] text-ivory/70">
                    <li>
                      <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 hover:text-sun">
                        <Mail aria-hidden className="size-4" /> {site.email}
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${site.phone.e164}`} className="inline-flex items-center gap-2.5 hover:text-sun">
                        <Phone aria-hidden className="size-4" /> {site.phone.display}
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
