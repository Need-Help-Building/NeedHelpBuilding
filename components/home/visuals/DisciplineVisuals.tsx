/**
 * Original technical illustrations for the four disciplines. Pure SVG (server-rendered);
 * motion is CSS-only (stroke-dash flow), which the global reduced-motion rule switches off.
 */

const INK = "#171717";
const IVORY = "#f5f3ed";
const SUN = "#ffd000";
const LILAC = "#c59eb9";
const MIST = "#b3cde3";

function Label({ x, y, children, fill = INK, size = 9, anchor = "start" }: { x: number; y: number; children: string; fill?: string; size?: number; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} fill={fill} textAnchor={anchor} className="font-mono tracking-[0.08em]" style={{ fontSize: size }}>
      {children}
    </text>
  );
}

/** 01 — AI: an orchestrator hub coordinating specialised agents that reach out to tools. */
export function AgentsVisual() {
  const agents = [
    { x: 200, y: 52, label: "PLAN" },
    { x: 318, y: 118, label: "SEARCH" },
    { x: 282, y: 236, label: "ACT" },
    { x: 118, y: 236, label: "CHECK" },
    { x: 82, y: 118, label: "SPEAK" },
  ];
  const tools = [
    { x: 362, y: 40, label: "CRM" },
    { x: 372, y: 228, label: "DOCS" },
    { x: 28, y: 236, label: "CAL" },
    { x: 26, y: 40, label: "API" },
  ];
  return (
    <svg viewBox="0 0 400 290" className="h-full w-full" role="img" aria-label="An orchestrator at the centre coordinating five specialised agents, which connect out to tools such as a CRM, documents, calendars and APIs.">
      <circle cx="200" cy="148" r="104" fill="none" stroke={INK} strokeOpacity="0.18" strokeDasharray="2 5" />
      {agents.map((a) => (
        <path key={a.label} d={`M200 148 L${a.x} ${a.y}`} stroke={INK} strokeWidth="1.25" strokeDasharray="3 7" className="animate-flow" />
      ))}
      {tools.map((t, i) => {
        // Each tool hangs off the nearest agent (SEARCH, ACT, CHECK, SPEAK).
        const near = agents[i + 1];
        return (
          <g key={t.label}>
            <path d={`M${near.x} ${near.y} L${t.x + 16} ${t.y + 10}`} stroke={INK} strokeOpacity="0.35" strokeWidth="1" />
            <rect x={t.x} y={t.y} width="32" height="20" rx="3" fill={IVORY} stroke={INK} strokeOpacity="0.4" />
            <Label x={t.x + 16} y={t.y + 13.5} anchor="middle" size={7.5}>
              {t.label}
            </Label>
          </g>
        );
      })}
      {agents.map((a) => (
        <g key={`n-${a.label}`}>
          <rect x={a.x - 30} y={a.y - 15} width="60" height="30" rx="5" fill="#ffffff" stroke={INK} strokeWidth="1.25" />
          <Label x={a.x} y={a.y + 3.5} anchor="middle" size={8.5}>
            {a.label}
          </Label>
        </g>
      ))}
      <rect x="138" y="122" width="124" height="52" rx="7" fill={INK} />
      <rect x="254" y="166" width="8" height="8" fill={SUN} />
      <Label x={200} y={145} anchor="middle" fill={IVORY} size={8}>
        ORCHESTRATOR
      </Label>
      <text x="200" y="161" textAnchor="middle" fill={IVORY} fillOpacity="0.6" className="font-mono" style={{ fontSize: 7 }}>
        state · memory · budget
      </text>
      <Label x={12} y={282} size={8} fill={INK}>
        FIG. 03A — AGENT TOPOLOGY
      </Label>
    </svg>
  );
}

/** 02 — Product engineering: an exploded stack, with a request travelling through every layer. */
export function StackVisual() {
  const layers = [
    { label: "INTERFACE", detail: "web · mobile · admin" },
    { label: "API", detail: "typed contracts · auth" },
    { label: "DATA", detail: "postgres · cache · queues" },
    { label: "INFRASTRUCTURE", detail: "ci/cd · cloud · observability" },
  ];
  return (
    <svg viewBox="0 0 400 290" className="h-full w-full" role="img" aria-label="An exploded view of a product stack: interface, API, data and infrastructure layers, with a request passing through each.">
      {layers.map((l, i) => {
        const x = 40 + i * 18;
        const y = 34 + i * 54;
        return (
          <g key={l.label}>
            <rect x={x + 6} y={y + 6} width="236" height="40" rx="5" fill={INK} fillOpacity="0.12" />
            <rect x={x} y={y} width="236" height="40" rx="5" fill="#ffffff" stroke={INK} strokeWidth="1.25" />
            <Label x={x + 14} y={y + 17} size={8.5}>
              {`0${i + 1}  ${l.label}`}
            </Label>
            <text x={x + 14} y={y + 31} fill={INK} fillOpacity="0.55" className="font-mono" style={{ fontSize: 8 }}>
              {l.detail}
            </text>
            <circle cx={x + 222} cy={y + 20} r="3.5" fill={i === 0 ? SUN : INK} />
          </g>
        );
      })}
      <path d="M262 54 C 300 54, 300 108, 280 108 S 316 162, 298 162 S 334 216, 316 216" fill="none" stroke={INK} strokeWidth="1.5" strokeDasharray="3 6" className="animate-flow" />
      <path d="M316 216 L 352 216" stroke={INK} strokeWidth="1.5" />
      <rect x="352" y="206" width="22" height="20" rx="3" fill={SUN} stroke={INK} />
      <Label x={363} y={219.5} anchor="middle" size={8}>
        OK
      </Label>
      <Label x={334} y={44} size={8} anchor="middle">
        REQUEST
      </Label>
      <Label x={12} y={282} size={8}>
        FIG. 03B — ONE TEAM, EVERY LAYER
      </Label>
    </svg>
  );
}

/** 03 — Consulting: build / buy / integrate decision tree with an accepted decision record. */
export function DecisionVisual() {
  return (
    <svg viewBox="0 0 400 290" className="h-full w-full" role="img" aria-label="A decision tree weighing build, buy and integrate options, with the integrate option chosen and recorded as an accepted architecture decision.">
      <rect x="120" y="22" width="160" height="40" rx="6" fill={INK} />
      <text x="200" y="39" textAnchor="middle" fill={IVORY} className="font-sans font-semibold" style={{ fontSize: 11 }}>
        What are we solving?
      </text>
      <text x="200" y="53" textAnchor="middle" fill={IVORY} fillOpacity="0.6" className="font-mono" style={{ fontSize: 7.5 }}>
        goal · constraints · budget
      </text>
      {[
        { x: 66, label: "BUY", note: "fast · rigid", chosen: false },
        { x: 200, label: "INTEGRATE", note: "fits · low risk", chosen: true },
        { x: 334, label: "BUILD", note: "flexible · costly", chosen: false },
      ].map((o) => (
        <g key={o.label}>
          <path
            d={`M200 62 C200 92 ${o.x} 92 ${o.x} 122`}
            fill="none"
            stroke={INK}
            strokeWidth={o.chosen ? 2 : 1.25}
            strokeDasharray={o.chosen ? undefined : "3 5"}
            strokeOpacity={o.chosen ? 1 : 0.55}
          />
          <rect x={o.x - 52} y="122" width="104" height="44" rx="6" fill={o.chosen ? "#ffffff" : "transparent"} stroke={INK} strokeWidth={o.chosen ? 1.75 : 1} strokeOpacity={o.chosen ? 1 : 0.5} />
          <Label x={o.x} y={141} anchor="middle" size={9} fill={INK}>
            {o.label}
          </Label>
          <text x={o.x} y={156} textAnchor="middle" fill={INK} fillOpacity="0.6" className="font-mono" style={{ fontSize: 7.5 }}>
            {o.note}
          </text>
        </g>
      ))}
      <path d="M200 166 V 196" stroke={INK} strokeWidth="2" />
      <g transform="rotate(-3 200 228)">
        <rect x="118" y="198" width="164" height="58" rx="4" fill="#ffffff" stroke={INK} strokeWidth="1.5" />
        <Label x={132} y={216} size={8}>
          ADR-007
        </Label>
        <text x="132" y="232" fill={INK} className="font-sans font-semibold" style={{ fontSize: 11 }}>
          Integrate existing CRM
        </text>
        <rect x="132" y="239" width="64" height="12" rx="2" fill={INK} />
        <Label x={164} y={248} anchor="middle" fill={SUN} size={7}>
          ACCEPTED
        </Label>
      </g>
      <Label x={12} y={282} size={8}>
        FIG. 03C — DECIDE BEFORE YOU BUILD
      </Label>
    </svg>
  );
}

/** 04 — Automation: trigger → validate → enrich → route, with an exception path to a human. */
export function PipelineVisual() {
  const steps = [
    { x: 20, label: "TRIGGER", note: "webhook" },
    { x: 104, label: "VALIDATE", note: "schema" },
    { x: 188, label: "ENRICH", note: "crm lookup" },
    { x: 272, label: "ROUTE", note: "rules / ai" },
  ];
  return (
    <svg viewBox="0 0 400 290" className="h-full w-full" role="img" aria-label="An automation pipeline: a trigger is validated, enriched and routed; routine cases sync and notify automatically, while exceptions go to a person for approval.">
      {steps.map((s, i) => (
        <g key={s.label}>
          {i > 0 && <path d={`M${s.x - 16} 104 H ${s.x}`} stroke={SUN} strokeWidth="1.5" strokeDasharray="3 5" className="animate-flow" />}
          <rect x={s.x} y="80" width="68" height="48" rx="5" fill="#1f1f1e" stroke={IVORY} strokeOpacity="0.35" />
          <Label x={s.x + 34} y={101} anchor="middle" fill={IVORY} size={8}>
            {s.label}
          </Label>
          <text x={s.x + 34} y={116} textAnchor="middle" fill={IVORY} fillOpacity="0.5" className="font-mono" style={{ fontSize: 7.5 }}>
            {s.note}
          </text>
        </g>
      ))}
      <rect x="20" y="80" width="8" height="8" fill={SUN} />
      {/* auto branch */}
      <path d="M340 104 C 372 104, 372 60, 340 52 H 300" fill="none" stroke={SUN} strokeWidth="1.5" strokeDasharray="3 5" className="animate-flow" />
      <rect x="196" y="36" width="104" height="32" rx="5" fill={SUN} />
      <Label x={248} y={56} anchor="middle" size={8}>
        SYNC + NOTIFY
      </Label>
      {/* exception branch */}
      <path d="M306 128 V 176 H 268" fill="none" stroke={MIST} strokeWidth="1.5" strokeDasharray="3 5" className="animate-flow-slow" />
      <rect x="148" y="160" width="120" height="34" rx="5" fill="none" stroke={MIST} strokeWidth="1.25" />
      <Label x={208} y={175} anchor="middle" fill={MIST} size={8}>
        HUMAN APPROVAL
      </Label>
      <text x="208" y="187" textAnchor="middle" fill={MIST} fillOpacity="0.7" className="font-mono" style={{ fontSize: 7.5 }}>
        exceptions only
      </text>
      <path d="M148 177 H 60 V 210" fill="none" stroke={IVORY} strokeOpacity="0.35" strokeWidth="1.25" />
      <rect x="20" y="210" width="120" height="34" rx="5" fill="none" stroke={IVORY} strokeOpacity="0.35" />
      <Label x={80} y={225} anchor="middle" fill={IVORY} size={8}>
        AUDIT LOG
      </Label>
      <text x="80" y="237" textAnchor="middle" fill={IVORY} fillOpacity="0.5" className="font-mono" style={{ fontSize: 7.5 }}>
        every run recorded
      </text>
      <circle cx="340" cy="104" r="3" fill={LILAC} />
      <Label x={12} y={282} size={8} fill={IVORY}>
        FIG. 03D — AUTOMATE THE HANDOFF
      </Label>
    </svg>
  );
}
