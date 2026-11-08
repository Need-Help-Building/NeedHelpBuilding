import { ImageResponse } from "next/og";

export const alt = "NeedHelpBuilding — engineering for businesses that can't afford to guess.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Typographic Open Graph card in the NHB palette (ivory, ink, NHB yellow). */
export default function OpengraphImage() {
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

        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
          <div style={{ display: "flex" }}>Engineering for businesses</div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ marginRight: 22 }}>that</span>
            <span style={{ background: "#fbda03", padding: "0 10px" }}>can&apos;t afford to guess.</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 24, color: "#5f5c55" }}>
          <div style={{ display: "flex", maxWidth: 760 }}>
            Digital product engineering · AI systems · Business automation · Technology consulting
          </div>
          <div style={{ display: "flex", color: "#171717" }}>needhelpbuilding.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
