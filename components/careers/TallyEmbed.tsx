"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const SCRIPT = "https://tally.so/widgets/embed.js";

/**
 * Tally form embed, as Tally recommends: the iframe carries `data-tally-src` and Tally's script sets the source
 * and keeps the height in step with the form (no inner scrollbar, no cropping).
 */
export default function TallyEmbed({ src, title }: { src: string; title: string }) {
  useEffect(() => {
    const load = () => window.Tally?.loadEmbeds();
    if (window.Tally) {
      load();
      return;
    }
    let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", load);
    return () => script?.removeEventListener("load", load);
  }, [src]);

  return <iframe data-tally-src={src} title={title} loading="lazy" width="100%" height={600} className="w-full border-0" />;
}
