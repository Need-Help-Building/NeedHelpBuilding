import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { StatusDot } from "@/components/ui/primitives";
import { projects, statusLabel, type Project } from "@/content/work";
import { cn } from "@/lib/cn";

/**
 * Startups associated with the program. Driven by content/work.ts: any project with status "partnership"
 * appears here automatically, so adding a startup is a content change only. Optional fields (logo image,
 * screenshot, live URL, industry) render when present and are simply omitted when unknown.
 */
const covers = ["bg-mist-soft", "bg-lilac-soft", "bg-sun", "bg-ivory-2"];

function Monogram({ name }: { name: string }) {
  return (
    <span aria-hidden className="grid size-14 place-items-center rounded-2xl bg-ink font-mono text-[15px] font-semibold text-ivory">
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

function StartupCard({ project, index }: { project: Project; index: number }) {
  return (
    <article data-reveal data-delay={String((index % 3) + 1)} className="group flex flex-col overflow-hidden rounded-3xl border border-ink/12 bg-white">
      <div className={cn("relative aspect-[16/10] overflow-hidden", covers[index % covers.length])}>
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div aria-hidden className="absolute inset-0 grid place-items-center">
            <div className="grid-paper absolute inset-0 opacity-70" />
            <span className="relative text-[clamp(2.5rem,2rem+2vw,3.5rem)] font-semibold tracking-[-0.05em] text-ink/85">{project.name}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-4">
          <Monogram name={project.name} />
          <div className="min-w-0">
            <h3 className="text-[20px] font-semibold tracking-[-0.03em]">{project.name}</h3>
            <p className="mt-0.5 font-mono text-[11.5px] text-muted">{project.industry ?? project.category}</p>
          </div>
        </div>
        <p className="mt-5 mb-6 text-[15px] leading-relaxed text-ink/80">{project.summary}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-5">
          <span title={statusLabel[project.status]}>
            <StatusDot status={project.status} />
          </span>
          <span className="flex items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[12px] text-ink underline decoration-sun decoration-2 underline-offset-4"
              >
                Website <ArrowUpRight aria-hidden className="size-3" />
              </a>
            )}
            <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-1.5 text-[14px] font-medium">
              Case study <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </span>
        </div>
      </div>
    </article>
  );
}

export default function StartupPortfolio({ applyHref }: { applyHref: string }) {
  const startups = projects.filter((p) => p.status === "partnership");
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {startups.map((p, i) => (
        <StartupCard key={p.slug} project={p} index={i} />
      ))}
      <a
        href={applyHref}
        data-reveal
        data-delay="3"
        className="group flex min-h-72 flex-col justify-between rounded-3xl border-2 border-dashed border-ink/20 p-7 transition-colors hover:border-ink hover:bg-white"
      >
        <span className="grid size-14 place-items-center rounded-2xl border border-ink/20 transition-colors group-hover:bg-sun">
          <Plus aria-hidden className="size-6" />
        </span>
        <span>
          <span className="block text-[20px] font-semibold tracking-[-0.03em]">Your startup next?</span>
          <span className="mt-2 block text-[15px] leading-relaxed text-muted">
            We review every application individually and take on a small number of startups at a time.
          </span>
          <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium">
            Apply to the program <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </span>
      </a>
    </div>
  );
}
