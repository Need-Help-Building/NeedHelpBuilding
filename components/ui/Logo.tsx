import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * NHB wordmark: uses the signature NHB emblem (N-white, H-yellow, B-white)
 * paired with the brand name.
 */
export default function Logo({
  tone = "light",
  compact = false,
  className,
}: {
  tone?: "light" | "dark";
  compact?: boolean;
  className?: string;
}) {
  const dark = tone === "dark";
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
