import { Fragment } from "react";

/** Yellow highlighter swipe behind a phrase. Animates in when scrolled into view. */
export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="hl" data-reveal="mark">
      {children}
    </span>
  );
}

/**
 * Renders CMS-style copy where *starred phrases* get the NHB highlighter and _underscored phrases_ are
 * set in a lighter weight. Keeps headline markup out of the content files.
 */
export function Marked({ text, tone = "light" }: { text: string; tone?: "light" | "dark" }) {
  const parts = text.split(/(\*[^*]+\*|_[^_]+_)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          // On dark surfaces a yellow swipe behind ivory text loses contrast; colour the words instead.
          if (tone === "dark") {
            return (
              <span key={i} className="text-sun">
                {part.slice(1, -1)}
              </span>
            );
          }
          return <Highlight key={i}>{part.slice(1, -1)}</Highlight>;
        }
        if (part.startsWith("_") && part.endsWith("_")) {
          return (
            <span key={i} className="font-light text-current/55">
              {part.slice(1, -1)}
            </span>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
