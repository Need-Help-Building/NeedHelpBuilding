import type Lenis from "lenis";

/** Shared handle to the page's Lenis instance (null when reduced motion disables smooth scrolling). */
let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

/**
 * Scroll to an element id (with or without "#"), smoothly when allowed.
 * The sticky-header clearance comes from CSS `[id] { scroll-margin-top }` alone — Lenis and native
 * scrollIntoView both honour it, so no extra offset is added here (adding one double-counts it).
 */
export function scrollToId(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  const el = id ? document.getElementById(id) : null;
  if (!id) {
    if (lenis) lenis.scrollTo(0, { force: true });
    else window.scrollTo({ top: 0 });
    return;
  }
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { force: true });
  else el.scrollIntoView({ block: "start" });
}

/** Freeze page scrolling (e.g. while the mobile menu is open). */
export function lockScroll(locked: boolean) {
  const root = document.documentElement;
  if (locked) {
    lenis?.stop();
    root.style.overflow = "hidden";
  } else {
    lenis?.start();
    root.style.overflow = "";
  }
}
