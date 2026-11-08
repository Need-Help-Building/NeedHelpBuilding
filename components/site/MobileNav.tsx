"use client";

import { useEffect } from "react";
import { Mail, MessageCircle, Plus } from "lucide-react";
import SmartLink from "@/components/ui/SmartLink";
import ButtonLink from "@/components/ui/ButtonLink";
import { primaryNav } from "@/content/navigation";
import { serviceGroups, solutions } from "@/content/services";
import { ctas, site } from "@/content/site";
import { lockScroll } from "@/lib/scroll";
import { serviceIcons } from "./serviceIcons";

/** Full-height mobile menu: accordion groups, large tap targets, CTAs pinned to the bottom. */
export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const mq = window.matchMedia("(min-width: 1024px)");
    const onWide = () => mq.matches && onClose();
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      lockScroll(false);
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-nav"
      data-lenis-prevent
      className="fixed inset-x-0 top-16 bottom-0 animate-rise overflow-y-auto overscroll-contain border-t border-line bg-ivory lg:hidden"
    >
      <nav aria-label="Mobile" className="flex min-h-full flex-col px-4 pt-4 pb-6 sm:px-6">
        <details className="group border-b border-line" open>
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-semibold tracking-[-0.04em] [&::-webkit-details-marker]:hidden">
            Services
            <Plus aria-hidden className="size-5 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <ul className="grid gap-1 pb-5 sm:grid-cols-2">
            {serviceGroups.map((group) => {
              const Icon = serviceIcons[group.icon];
              const content = (
                <>
                  <span className="grid size-8 shrink-0 place-items-center rounded-md border border-ink/12 bg-white">
                    <Icon aria-hidden className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium tracking-[-0.02em]">{group.title}</span>
                    <span className="mt-0.5 block text-[13px] leading-5 text-muted">{group.summary}</span>
                  </span>
                </>
              );
              return (
                <li key={group.id}>
                  {group.href ? (
                    <SmartLink href={group.href} onClick={onClose} className="flex gap-3 rounded-xl p-2.5 active:bg-ivory-2">
                      {content}
                    </SmartLink>
                  ) : (
                    <div className="flex gap-3 p-2.5">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </details>

        <details className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-semibold tracking-[-0.04em] [&::-webkit-details-marker]:hidden">
            Solutions
            <Plus aria-hidden className="size-5 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <ul className="pb-4">
            {solutions.map((s) => (
              <li key={s.title}>
                <SmartLink href={s.href} onClick={onClose} className="block rounded-xl p-2.5 active:bg-ivory-2">
                  <span className="block text-[15px] font-medium">{s.title}</span>
                  <span className="mt-0.5 block text-[13px] leading-5 text-muted">{s.summary}</span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </details>

        <ul>
          {primaryNav.map((item) => (
            <li key={item.label} className="border-b border-line">
              <SmartLink
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between py-4 text-2xl font-semibold tracking-[-0.04em]"
              >
                {item.label}
              </SmartLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-3 pt-8">
          <ButtonLink href={ctas.startProject.href} size="lg" className="w-full justify-between">
            {ctas.startProject.label}
          </ButtonLink>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`mailto:${site.email}`}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-ink/15 text-sm"
            >
              <Mail aria-hidden className="size-4" /> Email
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-ink/15 text-sm"
            >
              <MessageCircle aria-hidden className="size-4" /> WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
