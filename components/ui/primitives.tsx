import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-site px-4 sm:px-6 lg:px-10", className)}>{children}</div>;
}

/**
 * A clearly marked, editable placeholder for facts we don't have yet (see content/*.ts).
 * Visible on purpose: it must never be mistaken for real information.
 */
export function Placeholder({ label, tone = "light", className }: { label: string; tone?: "light" | "dark"; className?: string }) {
  return (
    <span
      data-placeholder
      title="Placeholder — replace in the content files"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[3px] border border-dashed px-1.5 py-0.5 font-mono text-[0.7rem] leading-tight tracking-wide uppercase",
        tone === "dark" ? "border-ivory/40 text-ivory/70" : "border-ink/35 text-muted",
        className,
      )}
    >
      <span aria-hidden>[</span>
      {label}
      <span aria-hidden>]</span>
    </span>
  );
}

export function Tag({ children, tone = "light", className }: { children: ReactNode; tone?: "light" | "dark" | "sun"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] leading-none tracking-wide",
        tone === "light" && "border-ink/15 text-ink/75",
        tone === "dark" && "border-ivory/20 text-ivory/75",
        tone === "sun" && "border-transparent bg-sun text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Small status pill with a dot (live / in development / partnership). */
export function StatusDot({ status, tone = "light" }: { status: "live" | "in-development" | "partnership"; tone?: "light" | "dark" }) {
  const label = status === "live" ? "Live" : status === "in-development" ? "In development" : "Partnership";
  return (
    <span className={cn("t-eyebrow inline-flex items-center gap-2", tone === "dark" ? "text-ivory/75" : "text-ink/70")}>
      <span className="relative flex size-2">
        {status === "live" && (
          <span aria-hidden className="absolute inset-0 animate-pulse-ring rounded-full bg-[#2f9e5b]" />
        )}
        <span
          className={cn(
            "relative size-2 rounded-full",
            status === "live" ? "bg-[#2f9e5b]" : status === "in-development" ? "bg-sun ring-1 ring-ink/20" : "bg-lilac",
          )}
        />
      </span>
      {label}
    </span>
  );
}

/** Minimal browser chrome around a screenshot or interface. */
export function BrowserFrame({
  url,
  children,
  tone = "light",
  className,
}: {
  url: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border",
        dark ? "border-ivory/15 bg-ink-2" : "border-ink/12 bg-white",
        className,
      )}
    >
      <div className={cn("flex h-9 items-center gap-3 border-b px-3.5", dark ? "border-ivory/10" : "border-ink/8")}>
        <span aria-hidden className="flex gap-1.5">
          <span className={cn("size-2 rounded-full", dark ? "bg-ivory/20" : "bg-ink/15")} />
          <span className={cn("size-2 rounded-full", dark ? "bg-ivory/20" : "bg-ink/15")} />
          <span className={cn("size-2 rounded-full", dark ? "bg-ivory/20" : "bg-ink/15")} />
        </span>
        <span
          className={cn(
            "mx-auto max-w-[60%] truncate rounded-md px-3 py-0.5 font-mono text-[0.65rem]",
            dark ? "bg-ivory/8 text-ivory/55" : "bg-ink/5 text-ink/55",
          )}
        >
          {url}
        </span>
        <span aria-hidden className="w-[34px]" />
      </div>
      {children}
    </div>
  );
}
