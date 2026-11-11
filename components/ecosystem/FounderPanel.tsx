import Image from "next/image";
import type { ReactNode } from "react";
import { team } from "@/content/company";
import { cn } from "@/lib/cn";

/**
 * The founders' photograph with a page-specific message beside it.
 * Names come from content/company.ts.
 */
export default function FounderPanel({
  eyebrow,
  title,
  children,
  reverse = false,
  className,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12", className)}>
      <figure data-reveal className={cn("lg:col-span-6", reverse && "lg:order-2")}>
        <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-ink">
          <Image
            src={team.photo.src}
            alt={team.photo.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-4 font-mono text-[12px] text-muted">{team.founders.map((f) => f.name).join(" & ")}, co-founders of NHB, lead every engagement personally.</figcaption>
      </figure>
      <div data-reveal data-delay="1" className="lg:col-span-6">
        <p className="t-eyebrow text-muted">{eyebrow}</p>
        <h2 className="mt-5 text-[clamp(1.75rem,1.2rem+1.8vw,2.75rem)] leading-[1.08] font-semibold tracking-[-0.04em]">{title}</h2>
        <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink/80">{children}</div>
      </div>
    </div>
  );
}
