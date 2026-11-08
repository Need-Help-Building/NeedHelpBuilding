import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import SmartLink from "./SmartLink";
import { cn } from "@/lib/cn";
import { isExternal } from "@/content/site";

type Variant = "sun" | "ink" | "outline" | "outline-light" | "ivory";

const variants: Record<Variant, string> = {
  sun: "bg-sun text-ink hover:bg-ink hover:text-sun",
  ink: "bg-ink text-ivory hover:bg-sun hover:text-ink",
  ivory: "bg-ivory text-ink hover:bg-sun",
  outline: "border border-ink/80 text-ink hover:bg-ink hover:text-ivory",
  "outline-light": "border border-ivory/35 text-ivory hover:border-sun hover:text-sun",
};

interface Props {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  icon?: "arrow" | "external" | "none";
}

export default function ButtonLink({ href, children, variant = "sun", size = "md", className, icon }: Props) {
  const resolvedIcon = icon ?? (isExternal(href) ? "external" : "arrow");
  return (
    <SmartLink
      href={href}
      className={cn(
        "group/btn inline-flex items-center justify-center gap-3 rounded-full font-medium tracking-[-0.01em] transition-colors duration-300",
        size === "lg" ? "h-14 pl-7 pr-2.5 text-[15px]" : "h-12 pl-5 pr-2 text-sm",
        resolvedIcon === "none" && (size === "lg" ? "pr-7" : "pr-5"),
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      {resolvedIcon !== "none" && (
        <span
          aria-hidden
          className={cn(
            "grid place-items-center overflow-hidden rounded-full transition-colors duration-300",
            size === "lg" ? "size-9" : "size-8",
            variant === "sun" || variant === "ivory"
              ? "bg-ink text-sun group-hover/btn:bg-sun group-hover/btn:text-ink"
              : variant === "ink"
                ? "bg-sun text-ink group-hover/btn:bg-ink group-hover/btn:text-sun"
                : "bg-current/10",
          )}
        >
          {resolvedIcon === "external" ? (
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:-translate-y-px group-hover/btn:translate-x-px" />
          ) : (
            <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          )}
        </span>
      )}
    </SmartLink>
  );
}

/** Understated text link with an arrow, for secondary actions inside sections. */
export function ArrowLink({
  href,
  children,
  className,
  tone = "dark",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  const external = isExternal(href);
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <SmartLink
      href={href}
      className={cn(
        "group/al inline-flex items-center gap-2 text-sm font-medium",
        tone === "dark" ? "text-ink" : "text-ivory",
        className,
      )}
    >
      <span
        className={cn(
          "bg-[length:100%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover/al:bg-[length:0%_1px]",
          tone === "dark" ? "bg-linear-to-r from-ink to-ink" : "bg-linear-to-r from-ivory to-ivory",
        )}
      >
        {children}
      </span>
      <Icon
        aria-hidden
        className={cn(
          "size-4 transition-transform duration-300",
          external ? "group-hover/al:-translate-y-0.5 group-hover/al:translate-x-0.5" : "group-hover/al:translate-x-1",
        )}
      />
    </SmartLink>
  );
}
