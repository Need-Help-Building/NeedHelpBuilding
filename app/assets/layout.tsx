import type { Metadata } from "next";

/** Internal component playground: reachable, but kept out of search results and the sitemap. */
export const metadata: Metadata = {
  title: "Component Playground",
  description: "Internal NHB component playground.",
  robots: { index: false, follow: false },
};

export default function AssetsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
