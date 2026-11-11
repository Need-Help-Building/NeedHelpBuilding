import type { IndustryGlyph } from "@/content/industries";

/** Small original "system sketches", one per industry. viewBox 320×200, ink on a tinted surface. */

const INK = "#171717";
const SUN = "#ffd000";
const WHITE = "#ffffff";

function Mono({ x, y, children, anchor = "start" }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fill={INK} className="font-arcade tracking-[0.04em]" style={{ fontSize: 8 }}>
      {children}
    </text>
  );
}

function Healthcare() {
  const booked = new Set([1, 4, 6, 7, 11, 13]);
  return (
    <>
      <Mono x={24} y={30}>APPOINTMENTS · TODAY</Mono>
      {Array.from({ length: 15 }).map((_, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        const on = booked.has(i);
        return (
          <rect key={i} x={24 + col * 38} y={42 + row * 34} width="32" height="26" rx="4" fill={i === 7 ? SUN : on ? INK : WHITE} stroke={INK} strokeOpacity={on ? 1 : 0.25} />
        );
      })}
      <rect x="222" y="42" width="76" height="94" rx="6" fill={WHITE} stroke={INK} />
      <Mono x={232} y={60}>PATIENT</Mono>
      {[72, 84, 96, 108].map((y, i) => (
        <rect key={y} x="232" y={y} width={i % 2 ? 40 : 56} height="5" rx="2" fill={INK} fillOpacity="0.25" />
      ))}
      <rect x="232" y="120" width="30" height="8" rx="2" fill={SUN} stroke={INK} strokeWidth="0.75" />
      <path d="M194 107 H 222" stroke={INK} strokeDasharray="3 4" className="animate-flow" />
      <Mono x={24} y={168}>INTAKE → BOOKING → RECORD → BILLING</Mono>
    </>
  );
}

function Education() {
  return (
    <>
      <Mono x={24} y={30}>COURSE · MODULES</Mono>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="24" y={42 + i * 30} width="170" height="22" rx="4" fill={WHITE} stroke={INK} strokeOpacity="0.4" />
          <rect x="24" y={42 + i * 30} width={[170, 128, 70, 18][i]} height="22" rx="4" fill={i === 2 ? SUN : INK} fillOpacity={i === 2 ? 1 : 0.85} />
          <Mono x={204} y={57 + i * 30}>{["100%", "75%", "40%", "10%"][i]}</Mono>
        </g>
      ))}
      <circle cx="270" cy="88" r="30" fill="none" stroke={INK} strokeOpacity="0.2" strokeWidth="8" />
      <circle cx="270" cy="88" r="30" fill="none" stroke={INK} strokeWidth="8" strokeDasharray="120 200" transform="rotate(-90 270 88)" />
      <Mono x={270} y={91} anchor="middle">62%</Mono>
      <Mono x={24} y={180}>ADMISSIONS · ATTENDANCE · FEES · LEARNING</Mono>
    </>
  );
}

function Retail() {
  return (
    <>
      <Mono x={24} y={30}>BROWSE → CART → CHECKOUT</Mono>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x={24 + (i % 3) * 46} y={42 + Math.floor(i / 3) * 58} width="40" height="50" rx="4" fill={WHITE} stroke={INK} strokeOpacity="0.35" />
          <rect x={30 + (i % 3) * 46} y={48 + Math.floor(i / 3) * 58} width="28" height="24" rx="2" fill={i === 1 ? SUN : INK} fillOpacity={i === 1 ? 1 : 0.15} />
          <rect x={30 + (i % 3) * 46} y={78 + Math.floor(i / 3) * 58} width="20" height="4" rx="2" fill={INK} fillOpacity="0.4" />
        </g>
      ))}
      <path d="M166 92 H 196" stroke={INK} strokeWidth="1.25" strokeDasharray="3 4" className="animate-flow" />
      <rect x="196" y="62" width="44" height="60" rx="6" fill={WHITE} stroke={INK} />
      <Mono x={218} y={96} anchor="middle">CART</Mono>
      <path d="M240 92 H 256" stroke={INK} strokeWidth="1.25" />
      <rect x="256" y="72" width="44" height="40" rx="6" fill={INK} />
      <text x="278" y="96" textAnchor="middle" fill={SUN} className="font-mono" style={{ fontSize: 8 }}>
        PAID
      </text>
    </>
  );
}

function Hospitality() {
  // [start, width] bookings per table, within a 250-unit evening timeline.
  const rows: [number, number][][] = [
    [
      [10, 70],
      [110, 90],
    ],
    [[40, 120]],
    [
      [0, 50],
      [110, 40],
      [180, 50],
    ],
    [[60, 90]],
  ];
  return (
    <>
      <Mono x={24} y={30}>RESERVATIONS · TONIGHT</Mono>
      {["T1", "T2", "T3", "T4"].map((t, r) => (
        <g key={t}>
          <Mono x={24} y={58 + r * 30}>{t}</Mono>
          <rect x="48" y={46 + r * 30} width="250" height="18" rx="3" fill={WHITE} stroke={INK} strokeOpacity="0.2" />
          {rows[r].map(([start, width]) => (
            <rect
              key={start}
              x={48 + start}
              y={46 + r * 30}
              width={width}
              height="18"
              rx="3"
              fill={r === 1 ? SUN : INK}
              fillOpacity={r === 1 ? 1 : 0.85}
            />
          ))}
        </g>
      ))}
      <Mono x={24} y={180}>BOOKINGS · CONCIERGE · KITCHEN OPS</Mono>
    </>
  );
}

function Finance() {
  return (
    <>
      <Mono x={24} y={30}>LEDGER · RECONCILIATION</Mono>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <line x1="24" x2="296" y1={50 + i * 22} y2={50 + i * 22} stroke={INK} strokeOpacity="0.15" />
          <rect x="24" y={38 + i * 22} width={[60, 80, 50, 70, 64][i]} height="6" rx="2" fill={INK} fillOpacity="0.35" />
          <Mono x={220} y={46 + i * 22} anchor="end">{["12,400.00", "−3,250.00", "860.00", "−1,120.00", "4,075.50"][i]}</Mono>
          <rect x="236" y={38 + i * 22} width="12" height="10" rx="2" fill={i === 3 ? SUN : INK} />
        </g>
      ))}
      <rect x="262" y="38" width="34" height="98" rx="4" fill="none" stroke={INK} strokeDasharray="3 4" />
      <Mono x={279} y={150} anchor="middle">MATCH</Mono>
      <Mono x={24} y={180}>ONBOARDING · KYC · REPORTING · AUDIT</Mono>
    </>
  );
}

function Manufacturing() {
  return (
    <>
      <Mono x={24} y={30}>LINE 2 · STATIONS</Mono>
      <rect x="24" y="96" width="272" height="10" rx="5" fill={INK} fillOpacity="0.12" />
      <path d="M24 101 H 296" stroke={INK} strokeWidth="1.5" strokeDasharray="6 8" className="animate-flow-slow" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={34 + i * 68} y="48" width="52" height="40" rx="5" fill={i === 2 ? SUN : WHITE} stroke={INK} />
          <Mono x={60 + i * 68} y={72} anchor="middle">{["CUT", "WELD", "QC", "PACK"][i]}</Mono>
          <rect x={52 + i * 68} y="116" width="16" height="16" rx="2" fill={INK} fillOpacity={0.25 + i * 0.2} />
        </g>
      ))}
      <Mono x={24} y={168}>INVENTORY · QUALITY · MAINTENANCE · SUPPLIERS</Mono>
    </>
  );
}

function Startups() {
  return (
    <>
      <Mono x={24} y={30}>ITERATIONS</Mono>
      {[
        { x: 24, s: 30, l: "v0.1" },
        { x: 74, s: 46, l: "MVP" },
        { x: 142, s: 64, l: "v1" },
        { x: 228, s: 70, l: "SCALE" },
      ].map((b, i) => (
        <g key={b.l}>
          <rect x={b.x} y={140 - b.s} width={b.s} height={b.s} rx="5" fill={i === 1 ? SUN : i === 3 ? INK : WHITE} stroke={INK} />
          <text x={b.x + b.s / 2} y={140 - b.s / 2 + 3} textAnchor="middle" fill={i === 3 ? SUN : INK} className="font-mono" style={{ fontSize: 8 }}>
            {b.l}
          </text>
        </g>
      ))}
      <path d="M24 156 C 120 156, 200 120, 298 60" fill="none" stroke={INK} strokeDasharray="3 5" className="animate-flow" />
      <Mono x={24} y={180}>SCOPE → BUILD → LAUNCH → GROW</Mono>
    </>
  );
}

function Services() {
  return (
    <>
      <Mono x={24} y={30}>INTAKE → DOCUMENTS → APPROVAL</Mono>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={34 - i * 6} y={50 + i * 6} width="70" height="90" rx="4" fill={WHITE} stroke={INK} strokeOpacity={0.3 + i * 0.3} />
      ))}
      {[72, 84, 96, 108].map((y) => (
        <rect key={y} x="30" y={y} width="44" height="4" rx="2" fill={INK} fillOpacity="0.3" />
      ))}
      <path d="M110 100 H 150" stroke={INK} strokeDasharray="3 4" className="animate-flow" />
      <circle cx="176" cy="100" r="24" fill={SUN} stroke={INK} />
      <path d="M165 100 l7 7 l14 -15" fill="none" stroke={INK} strokeWidth="2" />
      <path d="M202 100 H 226" stroke={INK} strokeDasharray="3 4" className="animate-flow" />
      <rect x="226" y="66" width="72" height="68" rx="6" fill={INK} />
      <text x="262" y="96" textAnchor="middle" fill="#f5f3ed" className="font-mono" style={{ fontSize: 8 }}>
        CLIENT
      </text>
      <text x="262" y="108" textAnchor="middle" fill="#f5f3ed" className="font-mono" style={{ fontSize: 8 }}>
        PORTAL
      </text>
      <Mono x={24} y={168}>CRM · PROPOSALS · KNOWLEDGE ASSISTANTS</Mono>
    </>
  );
}

const glyphs: Record<IndustryGlyph, () => React.JSX.Element> = {
  healthcare: Healthcare,
  education: Education,
  retail: Retail,
  hospitality: Hospitality,
  finance: Finance,
  manufacturing: Manufacturing,
  startups: Startups,
  services: Services,
};

export default function IndustryGlyphArt({ glyph, label }: { glyph: IndustryGlyph; label: string }) {
  const G = glyphs[glyph];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label={label}>
      <G />
    </svg>
  );
}
