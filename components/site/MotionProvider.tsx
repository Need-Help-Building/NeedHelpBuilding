"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { scrollToId, setLenis } from "@/lib/scroll";

/**
 * Page-level motion:
 *  1. Lenis smooth scrolling (skipped entirely under prefers-reduced-motion).
 *  2. Same-page hash links (e.g. "/#work" while on "/") scroll smoothly with the sticky-header offset.
 *  3. One IntersectionObserver marks [data-reveal] elements with [data-inview]; CSS does the animation.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let instance: Lenis | null = null;
    if (!reduce) {
      instance = new Lenis({
        autoRaf: true,
        lerp: 0.11,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.4,
      });
      setLenis(instance);
    }

    // Capture phase so we run before next/link; Link bails out when defaultPrevented.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      event.preventDefault();
      if (url.hash !== window.location.hash) window.history.pushState(null, "", url.hash);
      // Let menus close (and unlock scrolling) before measuring the target.
      requestAnimationFrame(() => scrollToId(url.hash));
    };
    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      instance?.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    const pending = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-inview])"));
    if (!("IntersectionObserver" in window)) {
      pending.forEach((el) => el.setAttribute("data-inview", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-inview", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    pending.forEach((el) => io.observe(el));

    // Arriving on a URL with a hash: honour it once layout has settled.
    if (window.location.hash) {
      const hash = window.location.hash;
      const t = window.setTimeout(() => scrollToId(hash), 60);
      return () => {
        window.clearTimeout(t);
        io.disconnect();
      };
    }
    return () => io.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
