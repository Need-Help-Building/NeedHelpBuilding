import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import { JsonLd } from "@/lib/structured-data";
import { cn } from "@/lib/cn";

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Question-and-answer section: each question is a real heading with a short, direct answer (good for answer
 * engines and voice search), plus matching FAQPage structured data. Answers are always in the HTML; the
 * disclosure only collapses them visually.
 */
export default function Faq({
  id = "faq",
  index,
  label = "Questions",
  title,
  items,
  className,
  tone = "light",
}: {
  id?: string;
  index: string;
  label?: string;
  title: string;
  items: FaqItem[];
  className?: string;
  tone?: "light" | "muted";
}) {
  const titleId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={titleId} className={cn("border-t border-line py-20 lg:py-28", tone === "muted" && "bg-ivory-2/60", className)}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SectionHeading index={index} label={label} title={title} titleId={titleId} titleClassName="lg:col-span-12" />
        </div>
        <div className="lg:col-span-8">
          {items.map((item, i) => (
            <details key={item.q} className="group border-b border-ink/12 first:border-t" open={i === 0}>
              <summary className="flex list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[clamp(1.05rem,0.98rem+0.3vw,1.25rem)] leading-snug font-semibold tracking-[-0.02em]">{item.q}</h3>
                <Plus aria-hidden className="mt-1 size-5 shrink-0 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="max-w-2xl pb-6 text-[15.5px] leading-relaxed text-ink/80">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
