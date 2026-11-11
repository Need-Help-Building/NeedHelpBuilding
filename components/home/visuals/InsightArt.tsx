import type { InsightArt } from "@/content/insights";

const INK = "#171717";
const SUN = "#ffd000";
const IVORY = "#f5f3ed";

/** Abstract editorial covers for upcoming articles (viewBox 400×250). */
export default function InsightArtwork({ art }: { art: InsightArt }) {
  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid meet">
      {art === "agents" && (
        <>
          {[110, 80, 50].map((r, i) => (
            <circle key={r} cx="200" cy="125" r={r} fill="none" stroke={INK} strokeOpacity={0.15 + i * 0.25} strokeDasharray={i === 0 ? "3 6" : undefined} />
          ))}
          <rect x="186" y="111" width="28" height="28" rx="5" fill={INK} />
          <rect x="207" y="132" width="7" height="7" fill={SUN} />
          {[
            [140, 90],
            [262, 102],
            [232, 178],
            [150, 170],
          ].map(([x, y], i) => (
            <rect key={i} x={x - 8} y={y - 8} width="16" height="16" rx="3" fill={IVORY} stroke={INK} />
          ))}
          {[
            [316, 52],
            [70, 214],
            [330, 200],
          ].map(([x, y], i) => (
            <g key={i}>
              <rect x={x - 8} y={y - 8} width="16" height="16" rx="3" fill="none" stroke={INK} strokeOpacity="0.4" />
              <path d={`M${x - 5} ${y - 5} L${x + 5} ${y + 5} M${x + 5} ${y - 5} L${x - 5} ${y + 5}`} stroke={INK} strokeOpacity="0.5" />
            </g>
          ))}
        </>
      )}
      {art === "decision" && (
        <>
          <rect x="40" y="105" width="70" height="40" rx="6" fill={INK} />
          {[50, 125, 200].map((y, i) => (
            <g key={y}>
              <path d={`M110 125 C 180 125, 180 ${y}, 250 ${y}`} fill="none" stroke={INK} strokeWidth={i === 1 ? 2.5 : 1.25} strokeDasharray={i === 1 ? undefined : "4 6"} />
              <rect x="250" y={y - 18} width="110" height="36" rx="6" fill={i === 1 ? IVORY : "none"} stroke={INK} strokeWidth={i === 1 ? 2 : 1} />
              <text x="305" y={y + 4} textAnchor="middle" fill={INK} className="font-mono" style={{ fontSize: 11 }}>
                {["BUY", "INTEGRATE", "BUILD"][i]}
              </text>
            </g>
          ))}
        </>
      )}
      {art === "retrieval" && (
        <>
          {Array.from({ length: 24 }).map((_, i) => {
            const x = 40 + (i % 6) * 44;
            const y = 40 + Math.floor(i / 6) * 44;
            const hit = [3, 8, 14, 19].includes(i);
            return <rect key={i} x={x} y={y} width="34" height="34" rx="4" fill={hit ? SUN : "#ffffff"} stroke={INK} strokeOpacity={hit ? 1 : 0.3} />;
          })}
          <path d="M370 30 L 186 74 M370 30 L 236 118 M370 30 L 126 172 M370 30 L 280 216" stroke={INK} strokeOpacity="0.55" strokeDasharray="3 5" />
          <circle cx="370" cy="30" r="9" fill={INK} />
        </>
      )}
      {art === "workflow" && (
        <>
          <line x1="20" x2="380" y1="85" y2="85" stroke={IVORY} strokeOpacity="0.2" />
          <line x1="20" x2="380" y1="165" y2="165" stroke={IVORY} strokeOpacity="0.2" />
          <text x="24" y="74" fill={IVORY} fillOpacity="0.5" className="font-mono" style={{ fontSize: 10 }}>
            PEOPLE
          </text>
          <text x="24" y="154" fill={IVORY} fillOpacity="0.5" className="font-mono" style={{ fontSize: 10 }}>
            SYSTEMS
          </text>
          {[60, 140, 220, 300].map((x, i) => (
            <g key={x}>
              <rect x={x} y={i % 2 ? 145 : 65} width="44" height="40" rx="6" fill={i === 2 ? SUN : "#1f1f1e"} stroke={IVORY} strokeOpacity="0.5" />
              {i < 3 && (
                <path d={`M${x + 44} ${i % 2 ? 165 : 85} C ${x + 62} ${i % 2 ? 165 : 85}, ${x + 62} ${i % 2 ? 85 : 165}, ${x + 80} ${i % 2 ? 85 : 165}`} fill="none" stroke={SUN} strokeWidth="1.5" strokeDasharray="3 5" className="animate-flow" />
              )}
            </g>
          ))}
        </>
      )}
    </svg>
  );
}
