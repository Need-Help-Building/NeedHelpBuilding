import type { ReactNode } from "react";
import ApplicationForm from "@/components/forms/ApplicationForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import type { FormId } from "@/content/forms";
import { ArrowLink } from "@/components/ui/ButtonLink";

/** Application section: heading and "what happens next" on the left, the working form on the right. */
export default function ApplySection({
  id = "apply",
  index,
  label,
  title,
  lede,
  formId,
  nextSteps,
  meeting,
}: {
  id?: string;
  index: string;
  label: string;
  title: string;
  lede: ReactNode;
  formId: FormId;
  nextSteps: string[];
  meeting: { href: string; label: string };
}) {
  const titleId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={titleId} className="border-t border-line bg-ivory-2/60 py-20 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading index={index} label={label} title={title} titleId={titleId} titleClassName="lg:col-span-12" />
            <div data-reveal className="t-lede mt-6 text-muted">
              {lede}
            </div>
            <div data-reveal data-delay="1" className="mt-10">
              <p className="t-eyebrow text-muted">What happens next</p>
              <ol className="mt-4 border-t border-ink/12">
                {nextSteps.map((s, i) => (
                  <li key={s} className="flex gap-4 border-b border-ink/12 py-3.5 text-[15px] leading-snug">
                    <span className="font-mono text-[12px] text-muted">0{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[14px] text-muted">Prefer to talk first?</p>
              <ArrowLink href={meeting.href} className="mt-2">
                {meeting.label}
              </ArrowLink>
            </div>
          </div>
          <div data-reveal data-delay="1" className="lg:col-span-7 lg:col-start-6">
            <div className="rounded-3xl border border-ink/10 bg-ivory p-6 sm:p-10">
              <ApplicationForm formId={formId} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
