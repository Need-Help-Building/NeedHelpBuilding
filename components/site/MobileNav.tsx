"use client";

import { useEffect } from "react";
import { Mail, Plus } from "lucide-react";
import SmartLink from "@/components/ui/SmartLink";
import ButtonLink from "@/components/ui/ButtonLink";
import { primaryNav } from "@/content/navigation";
import { serviceGroups } from "@/content/services";
import { productStatusLabel, products } from "@/content/products";
import { ProductMark } from "./MegaMenu";
import { programs } from "@/content/ecosystem";
import { ctas, site } from "@/content/site";
import { lockScroll } from "@/lib/scroll";
import { serviceIcons } from "./serviceIcons";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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
      className="fixed inset-x-0 top-16 bottom-0 animate-rise overflow-y-auto overscroll-contain border-t border-ivory/12 bg-ink text-ivory lg:hidden"
    >
      <nav aria-label="Mobile" className="flex min-h-full flex-col px-4 pt-4 pb-6 sm:px-6">
        <ul>
          {primaryNav.slice(0, 1).map((item) => (
            <li key={item.label} className="border-b border-ivory/12">
              <SmartLink
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between py-4 text-2xl font-semibold tracking-[-0.04em] text-ivory transition-colors hover:text-sun"
              >
                {item.label}
              </SmartLink>
            </li>
          ))}
        </ul>

        <details className="group border-b border-ivory/12">
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-semibold tracking-[-0.04em] [&::-webkit-details-marker]:hidden">
            Services
            <Plus aria-hidden className="size-5 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <ul className="grid gap-1 pb-5 sm:grid-cols-2">
            {serviceGroups.map((group) => {
              const Icon = serviceIcons[group.icon];
              const content = (
                <>
                  <span className="grid size-8 shrink-0 place-items-center rounded-md border border-ivory/15 bg-ink-2 text-sun">
                    <Icon aria-hidden className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium tracking-[-0.02em] text-ivory">{group.title}</span>
                    <span className="mt-0.5 block text-[13px] leading-5 text-ivory/60">{group.summary}</span>
                  </span>
                </>
              );
              return (
                <li key={group.id}>
                  {group.href ? (
                    <SmartLink href={group.href} onClick={onClose} className="flex gap-3 rounded-xl p-2.5 active:bg-ivory/10 hover:bg-ivory/5">
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

        <details className="group border-b border-ivory/12">
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-semibold tracking-[-0.04em] [&::-webkit-details-marker]:hidden">
            Products
            <Plus aria-hidden className="size-5 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <ul className="pb-4">
            {products.map((p) => (
              <li key={p.id}>
                <SmartLink href={`/earn-with-nhb#product-${p.id}`} onClick={onClose} className="flex gap-3 rounded-xl p-2.5 active:bg-ivory/10 hover:bg-ivory/5">
                  <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-md border border-ivory/15">
                    <ProductMark name={p.name} logo={p.logo} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium text-ivory">{p.name}</span>
                    <span className="mt-0.5 block text-[13px] leading-5 text-ivory/60">
                      {p.category} · {productStatusLabel[p.status]}
                    </span>
                  </span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </details>

        <details className="group border-b border-ivory/12">
          <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-semibold tracking-[-0.04em] [&::-webkit-details-marker]:hidden">
            Ecosystem
            <Plus aria-hidden className="size-5 transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <ul className="pb-4">
            {programs.map((p) => (
              <li key={p.id}>
                <SmartLink href={p.href} onClick={onClose} className="block rounded-xl p-2.5 active:bg-ivory/10 hover:bg-ivory/5">
                  <span className="t-arcade block text-[11px] text-sun/80">{p.audience}</span>
                  <span className="mt-1 block text-[15px] font-medium text-ivory">{p.title}</span>
                  <span className="mt-0.5 block text-[13px] leading-5 text-ivory/60">{p.summary}</span>
                </SmartLink>
              </li>
            ))}
            <li>
              <SmartLink href="/book" onClick={onClose} className="block rounded-xl p-2.5 text-[15px] font-medium text-sun active:bg-ivory/10">
                Book a one-to-one meeting →
              </SmartLink>
            </li>
          </ul>
        </details>

        <ul>
          {primaryNav.slice(1).map((item) => (
            <li key={item.label} className="border-b border-ivory/12">
              <SmartLink
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between py-4 text-2xl font-semibold tracking-[-0.04em] text-ivory hover:text-sun transition-colors"
              >
                {item.label}
              </SmartLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-3 pt-8">
          <ButtonLink href={ctas.startProject.href} variant="sun" size="lg" className="w-full justify-between">
            {ctas.startProject.label}
          </ButtonLink>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`mailto:${site.email}`}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-ivory/20 text-sm text-ivory/80 hover:text-white"
            >
              <Mail aria-hidden className="size-4" /> Email
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-ivory/20 text-sm text-ivory/80 hover:text-white"
            >
              <WhatsAppGlyph className="size-4" /> WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
