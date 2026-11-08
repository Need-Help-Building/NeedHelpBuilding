import { ArrowUpRight } from "lucide-react";
import SmartLink from "@/components/ui/SmartLink";
import ButtonLink from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/primitives";
import { serviceGroups, solutions } from "@/content/services";
import { ctas } from "@/content/site";
import { serviceIcons } from "./serviceIcons";

/** Full-width Services panel: nine practice areas with descriptions, plus a consultation prompt. */
export function ServicesPanel({ id, onNavigate }: { id: string; onNavigate: () => void }) {
  return (
    <div
      id={id}
      className="absolute inset-x-0 top-full animate-rise border-b border-line bg-ivory shadow-[0_32px_64px_-32px_rgb(23_23_23/0.22)]"
    >
      <div data-lenis-prevent className="max-h-[calc(100dvh-72px)] overflow-y-auto">
        <Container className="grid gap-8 py-9 lg:grid-cols-12">
          <div className="grid grid-cols-3 gap-x-8 gap-y-8 lg:col-span-9">
            {serviceGroups.map((group) => {
              const Icon = serviceIcons[group.icon];
              return (
                <div key={group.id} className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-7 shrink-0 place-items-center rounded-md border border-ink/12 bg-white text-ink">
                      <Icon className="size-3.5" aria-hidden />
                    </span>
                    {group.href ? (
                      <SmartLink
                        href={group.href}
                        onClick={onNavigate}
                        className="text-[15px] font-semibold tracking-[-0.02em] text-ink decoration-sun decoration-2 underline-offset-4 hover:underline"
                      >
                        {group.title}
                      </SmartLink>
                    ) : (
                      <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink">{group.title}</span>
                    )}
                  </div>
                  <p className="mt-2 text-[13px] leading-5 text-muted">{group.summary}</p>
                  <ul className="mt-3 space-y-1.5 border-l border-line pl-3">
                    {group.items.map((item) => (
                      <li key={item.label} className="text-[13px] leading-5">
                        {item.href ? (
                          <SmartLink
                            href={item.href}
                            onClick={onNavigate}
                            className="group/i inline-flex items-center gap-1 text-ink/85 hover:text-ink"
                          >
                            {item.label}
                            <ArrowUpRight
                              aria-hidden
                              className="size-3 opacity-0 transition-opacity group-hover/i:opacity-100"
                            />
                          </SmartLink>
                        ) : (
                          <span className="text-muted">{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <aside className="relative flex flex-col overflow-hidden rounded-2xl bg-ink p-6 text-ivory lg:col-span-3">
            <div aria-hidden className="grid-paper-dark absolute inset-0 opacity-70" />
            <div className="relative flex h-full flex-col">
              <p className="t-eyebrow text-sun">Not sure where to start?</p>
              <p className="mt-4 text-xl leading-snug font-medium tracking-[-0.03em]">
                Most good projects begin with a conversation about the problem, not the technology.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                Tell us what you&apos;re trying to achieve. We&apos;ll tell you honestly what we&apos;d build — or whether you
                need to build anything at all.
              </p>
              <div className="mt-auto pt-8">
                <ButtonLink href={ctas.consultation.href} variant="sun" className="w-full justify-between">
                  {ctas.consultation.label}
                </ButtonLink>
                <SmartLink
                  href="/#capabilities"
                  onClick={onNavigate}
                  className="mt-4 block text-center text-xs text-ivory/60 underline-offset-4 hover:text-ivory hover:underline"
                >
                  See how our four disciplines fit together
                </SmartLink>
              </div>
            </div>
          </aside>
        </Container>
      </div>
    </div>
  );
}

/** Compact Solutions dropdown anchored under its trigger. */
export function SolutionsPanel({ id, onNavigate }: { id: string; onNavigate: () => void }) {
  return (
    <div
      id={id}
      className="absolute top-full left-1/2 mt-2 w-[440px] -translate-x-1/2 animate-rise rounded-2xl border border-line bg-ivory p-2 shadow-[0_32px_64px_-32px_rgb(23_23_23/0.28)]"
    >
      <ul>
        {solutions.map((s, i) => (
          <li key={s.title}>
            <SmartLink
              href={s.href}
              onClick={onNavigate}
              className="group/s flex gap-4 rounded-xl p-3.5 transition-colors hover:bg-ivory-2"
            >
              <span className="t-eyebrow pt-1 text-muted">0{i + 1}</span>
              <span className="min-w-0">
                <span className="flex items-center gap-1.5 text-[15px] font-semibold tracking-[-0.02em] text-ink">
                  {s.title}
                  <ArrowUpRight aria-hidden className="size-3.5 opacity-0 transition-opacity group-hover/s:opacity-100" />
                </span>
                <span className="mt-1 block text-[13px] leading-5 text-muted">{s.summary}</span>
              </span>
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
