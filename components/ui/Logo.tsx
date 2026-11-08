import { cn } from "@/lib/cn";

/**
 * NHB wordmark: a solid "building block" carrying the NHB monogram, with a yellow keystone corner,
 * followed by the full name. Echoes the heavy geometric NHB logo (public/logo.png) for light surfaces.
 */
export default function Logo({ tone = "light", compact = false, className }: { tone?: "light" | "dark"; compact?: boolean; className?: string }) {
  const dark = tone === "dark";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className={cn(
          "relative inline-flex h-8 items-center px-[7px] text-[15px] leading-none font-extrabold tracking-[-0.07em]",
          dark ? "bg-ivory text-ink" : "bg-ink text-ivory",
        )}
      >
        NHB
        <span className="absolute -right-[5px] -bottom-[5px] size-2.5 bg-sun" />
      </span>
      {!compact && (
        <span className={cn("text-[15px] font-semibold tracking-[-0.035em]", dark ? "text-ivory" : "text-ink")}>
          NeedHelpBuilding
        </span>
      )}
    </span>
  );
}
