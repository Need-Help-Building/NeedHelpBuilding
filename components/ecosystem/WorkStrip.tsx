import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StatusDot } from "@/components/ui/primitives";
import { projects } from "@/content/work";

/** Compact strip of live, screenshot-backed case studies (proof that introductions are in good hands). */
export default function WorkStrip() {
  const live = projects.filter((p) => p.image);
  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {live.map((p, i) => (
        <li key={p.slug} data-reveal data-delay={String(i + 1)}>
          <Link href={`/work/${p.slug}`} className="group block overflow-hidden rounded-3xl border border-ink/12 bg-white">
            <div className="relative aspect-[16/9] overflow-hidden bg-ink">
              {p.image && (
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              )}
            </div>
            <div className="flex items-end justify-between gap-4 p-6">
              <div>
                <StatusDot status={p.status} />
                <p className="mt-3 text-[20px] font-semibold tracking-[-0.03em]">{p.name}</p>
                <p className="mt-1 text-[14.5px] text-muted">{p.category}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium">
                Case study <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
