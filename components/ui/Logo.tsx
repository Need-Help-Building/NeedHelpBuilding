import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * NHB wordmark: the signature NHB emblem (N-white, H-yellow, B-white). The brand name beside it is opt-in
 * (`withName`); the header shows the emblem alone.
 */
export default function Logo({
  tone = "light",
  compact = true,
  withName,
  className,
}: {
  tone?: "light" | "dark";
  /** Deprecated alias: compact = emblem only. */
  compact?: boolean;
  withName?: boolean;
  className?: string;
}) {
  const dark = tone === "dark";
  compact = withName ? false : compact;
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt="NHB"
        width={1024}
        height={512}
        className="h-7 sm:h-8 w-auto object-contain"
        priority
      />
      {!compact && (
        <span
          className={cn(
            "text-[14px] sm:text-[15px] font-semibold tracking-[-0.035em] hidden min-[360px]:inline",
            dark ? "text-ivory" : "text-ink",
          )}
        >
          NeedHelpBuilding
        </span>
      )}
    </span>
  );
}
