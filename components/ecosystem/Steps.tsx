import { cn } from "@/lib/cn";

export interface Step {
  title: string;
  detail: string;
}

/** Numbered process rail: horizontal on wide screens, stacked on phones. */
export default function Steps({ steps, tone = "light", className }: { steps: Step[]; tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  const cols = steps.length === 6 || steps.length === 3 ? "lg:grid-cols-3" : steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <ol className={cn("grid grid-cols-1 gap-px overflow-hidden rounded-3xl border sm:grid-cols-2", cols, dark ? "border-ivory/15 bg-ivory/15" : "border-ink/12 bg-ink/12", className)}>
      {steps.map((step, i) => (
        <li
          key={step.title}
          data-reveal
          data-delay={String((i % 4) + 1)}
          className={cn("flex flex-col p-6 sm:p-8", dark ? "bg-ink" : "bg-ivory")}
        >
          <span className={cn("font-mono text-[12px]", dark ? "text-sun" : "text-muted")}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.025em]">{step.title}</h3>
          <p className={cn("mt-2.5 text-[14.5px] leading-relaxed", dark ? "text-ivory/65" : "text-muted")}>{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}
