import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Marked } from "./Marked";

interface Props {
  index: string;
  label: string;
  title: string;
  titleId: string;
  lede?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  /** Optional element aligned to the right of the title on wide screens (e.g. a link). */
  aside?: ReactNode;
  titleClassName?: string;
  /** Heading level for the title; use "h1" when the section heading is the page's main heading. */
  as?: "h1" | "h2";
}

/** Section eyebrow (§ index + label + rule) followed by an editorial h2 and optional lede. */
export default function SectionHeading({
  index,
  label,
  title,
  titleId,
  lede,
  tone = "light",
  className,
  aside,
  titleClassName,
  as: Heading = "h2",
}: Props) {
  const dark = tone === "dark";
  return (
    <div className={cn("grid gap-y-7 lg:grid-cols-12 lg:gap-x-8", className)}>
      <div
        data-reveal="fade"
        className={cn("t-eyebrow flex items-center gap-3 lg:col-span-12", dark ? "text-ivory/60" : "text-muted")}
      >
        <span className={cn("font-medium", dark ? "text-sun" : "text-ink")}>§ {index}</span>
        <span aria-hidden className={cn("h-px w-10", dark ? "bg-ivory/25" : "bg-ink/25")} />
        <span>{label}</span>
      </div>
      <Heading
        id={titleId}
        data-reveal
        className={cn("t-h2 lg:col-span-8", dark ? "text-ivory" : "text-ink", titleClassName)}
      >
        <Marked text={title} tone={tone} />
      </Heading>
      {lede && (
        <div
          data-reveal
          data-delay="1"
          className={cn("t-lede max-w-2xl lg:col-span-7", dark ? "text-ivory/70" : "text-muted")}
        >
          {lede}
        </div>
      )}
      {aside && (
        // After the lede on phones; beside the title on desktop.
        <div data-reveal data-delay="2" className="flex items-end lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:justify-end">
          {aside}
        </div>
      )}
    </div>
  );
}
