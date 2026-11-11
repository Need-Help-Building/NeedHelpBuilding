"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import SmartLink from "@/components/ui/SmartLink";
import { Container } from "@/components/ui/primitives";
import { primaryNav } from "@/content/navigation";
import { ctas } from "@/content/site";
import { cn } from "@/lib/cn";
import { EcosystemPanel, ServicesPanel, SolutionsPanel } from "./MegaMenu";
import MobileNav from "./MobileNav";

type MenuId = "services" | "solutions" | "ecosystem";

const menus: { id: MenuId; label: string }[] = [
  { id: "services", label: "Services" },
  { id: "solutions", label: "Solutions" },
  { id: "ecosystem", label: "Ecosystem" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Close everything on route change (state-derived; avoids setState in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenu(null);
    setMobileOpen(false);
  }

  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<MenuId, HTMLButtonElement | null>>({ services: null, solutions: null, ecosystem: null });
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);
  const hoverOpenedAt = useRef(0);

  // Scroll state: hairline once scrolled; hide on scroll down, reveal on scroll up.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y < 160 || y < lastY - 4) setHidden(false);
      else if (y > lastY + 4) setHidden(true);
      lastY = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Escape + outside pointer closes the desktop menus.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        triggerRefs.current[menu]?.focus();
        setMenu(null);
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [menu]);

  useEffect(
    () => () => {
      window.clearTimeout(openTimer.current);
      window.clearTimeout(closeTimer.current);
    },
    [],
  );

  const scheduleOpen = (id: MenuId) => {
    window.clearTimeout(closeTimer.current);
    window.clearTimeout(openTimer.current);
    openTimer.current = window.setTimeout(() => {
      hoverOpenedAt.current = performance.now();
      setMenu(id);
    }, 80);
  };
  const scheduleClose = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenu(null), 180);
  };
  const cancelClose = () => window.clearTimeout(closeTimer.current);
  const closeMenus = () => setMenu(null);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const onTriggerClick = (id: MenuId, clickedAt: number) => {
    window.clearTimeout(openTimer.current);
    // A click right after hover-open should not immediately close the menu again.
    // (event.timeStamp shares performance.now()'s clock.)
    if (menu === id && clickedAt - hoverOpenedAt.current < 500) return;
    setMenu((current) => (current === id ? null : id));
  };

  const solid = scrolled || menu !== null || mobileOpen;
  const isHidden = hidden && menu === null && !mobileOpen;

  return (
    <header
      ref={headerRef}
      onPointerLeave={(e) => e.pointerType === "mouse" && scheduleClose()}
      onFocusCapture={() => setHidden(false)}
      onBlurCapture={(e) => {
        // Only when keyboard focus actually moves elsewhere; pointer clicks are handled by the outside-pointer listener.
        const next = e.relatedTarget as Node | null;
        if (menu && next && !headerRef.current?.contains(next)) setMenu(null);
      }}
      className={cn(
        "sticky top-0 z-50 border-b border-ivory/12 bg-ink text-ivory transition-[translate,background-color,border-color] duration-500 ease-out",
        solid ? "shadow-[0_12px_32px_rgba(0,0,0,0.5)]" : "",
        isHidden && "-translate-y-full",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <Link href="/" aria-label="NeedHelpBuilding — home" className="shrink-0" onClick={closeMenus}>
          <Logo tone="dark" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {menus.map(({ id, label }) => {
              const open = menu === id;
              return (
                <li key={id} className="relative">
                  <button
                    ref={(el) => {
                      triggerRefs.current[id] = el;
                    }}
                    type="button"
                    aria-expanded={open}
                    aria-controls={`menu-${id}`}
                    onPointerEnter={(e) => e.pointerType === "mouse" && scheduleOpen(id)}
                    onClick={(e) => onTriggerClick(id, e.timeStamp)}
                    className={cn(
                      "flex h-10 items-center gap-1.5 rounded-full px-3.5 text-[14px] transition-colors",
                      open ? "bg-ivory/15 text-white" : "text-ivory/80 hover:text-white hover:bg-ivory/10",
                    )}
                  >
                    {label}
                    <ChevronDown
                      aria-hidden
                      className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")}
                    />
                  </button>
                  {open && id === "services" && (
                    <div onPointerEnter={cancelClose}>
                      <ServicesPanel id="menu-services" onNavigate={closeMenus} />
                    </div>
                  )}
                  {open && id === "solutions" && (
                    <div onPointerEnter={cancelClose}>
                      <SolutionsPanel id="menu-solutions" onNavigate={closeMenus} />
                    </div>
                  )}
                  {open && id === "ecosystem" && (
                    <div onPointerEnter={cancelClose}>
                      <EcosystemPanel id="menu-ecosystem" onNavigate={closeMenus} />
                    </div>
                  )}
                </li>
              );
            })}
            {primaryNav.map((item) => (
              <li key={item.label}>
                <SmartLink
                  href={item.href}
                  onPointerEnter={(e) => e.pointerType === "mouse" && menu && scheduleClose()}
                  onClick={closeMenus}
                  className="flex h-10 items-center rounded-full px-3.5 text-[14px] text-ivory/80 transition-colors hover:text-white hover:bg-ivory/10"
                >
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <SmartLink
            href={ctas.consultation.href}
            className="hidden h-10 items-center px-3 text-[14px] text-ivory/80 transition-colors hover:text-white xl:flex"
          >
            Let&apos;s talk
          </SmartLink>
          <SmartLink
            href={ctas.startProject.href}
            className="hidden h-10 items-center gap-2 rounded-full bg-sun pr-4 pl-4 text-[14px] font-medium text-ink transition-colors hover:bg-white sm:inline-flex"
          >
            Start a project
          </SmartLink>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-ivory/20 text-ivory lg:hidden hover:bg-ivory/10 transition-colors"
          >
            {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </Container>

      <MobileNav open={mobileOpen} onClose={closeMobile} />
    </header>
  );
}
