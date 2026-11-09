import { ImageResponse } from "next/og";
import { clip } from "./seo";

export const ogSize = { width: 1200, height: 630 };

/** Per-page Open Graph card in the NHB palette, matching the root card in app/opengraph-image.tsx. */
export function ogCard({ eyebrow, title, footer }: { eyebrow: string; title: string; footer?: string }) {
  const fontSize = title.length > 70 ? 60 : title.length > 40 ? 72 : 84;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f6f2",
          color: "#171717",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              position: "relative",
              background: "#171717",
              color: "#f7f6f2",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: -2,
              padding: "8px 12px",
            }}
          >
            NHB
            <div style={{ position: "absolute", right: -8, bottom: -8, width: 16, height: 16, background: "#fbda03" }} />
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600, letterSpacing: -1 }}>NeedHelpBuilding</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex" }}>
            <span style={{ background: "#fbda03", padding: "4px 14px", fontSize: 26, fontWeight: 600 }}>{eyebrow}</span>
          </div>
          <div style={{ display: "flex", fontSize, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, maxWidth: 1050 }}>
            {title}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 24, color: "#5f5c55" }}>
          <div style={{ display: "flex", maxWidth: 820 }}>{footer ? clip(footer, 120) : "Digital product engineering · AI systems · Technology consulting"}</div>
          <div style={{ display: "flex", color: "#171717" }}>needhelpbuilding.com</div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
