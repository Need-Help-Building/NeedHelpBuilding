import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { urgentRoles } from "@/content/careers";
import { cn } from "@/lib/cn";

/**
 * "Urgently hiring" ribbon shown at the top of a hero. Lists roles marked `urgent` in content/careers.ts and
 * renders nothing when there are none, so it switches itself off once those roles are filled.
 */
export default function HiringRibbon({ className }: { className?: string }) {
  if (urgentRoles.length === 0) return null;
  const href = urgentRoles.length === 1 ? `/careers/${urgentRoles[0].slug}` : "/careers#roles";
  return (
    <aside aria-label="Urgently hiring" className={cn("relative z-[60] h-10 border-b border-ink bg-sun text-ink", className)}>
      <Container className="flex h-full items-center gap-x-3 whitespace-nowrap sm:gap-x-5">
        <span className="t-arcade flex items-center gap-2 text-[11px] font-bold">
          <span aria-hidden className="relative flex size-2">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-ink" />
            <span className="relative size-2 rounded-full bg-ink" />
          </span>
          Urgently hiring
        </span>
        <span className="text-[13px] font-medium lg:hidden">
          {urgentRoles.length} {urgentRoles.length === 1 ? "role" : "roles"} open
        </span>
        <ul className="hidden items-center gap-x-1.5 text-[13.5px] font-medium lg:flex">
          {urgentRoles.map((r, i) => (
            <li key={r.slug} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden className="text-ink/40">·</span>}
              <Link href={`/careers/${r.slug}`} className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
                {r.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={href} className="group ml-auto inline-flex items-center gap-1.5 text-[13.5px] font-semibold">
          Apply now
          <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Container>
    </aside>
  );
}
