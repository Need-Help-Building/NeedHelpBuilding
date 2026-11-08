import type Lenis from "lenis";

/** Shared handle to the page's Lenis instance (null when reduced motion disables smooth scrolling). */
let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export const HEADER_OFFSET = 84;

/** Scroll to an element id (with or without "#"), smoothly when allowed. */
export function scrollToId(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  const el = id ? document.getElementById(id) : null;
  if (!id) {
    if (lenis) lenis.scrollTo(0, { force: true });
    else window.scrollTo({ top: 0 });
    return;
  }
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset: -HEADER_OFFSET, force: true });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top });
  }
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
