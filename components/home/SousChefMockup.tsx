/**
 * Illustrative tablet interface for Sous Chef (in development). Rendered in code, not a screenshot,
 * and always shown with an "Illustrative interface" label. Quantities are sample UI data.
 */
const items = [
  { name: "Tomato concassé", qty: "2.4 kg", state: "done" },
  { name: "Garlic confit", qty: "0.8 kg", state: "active" },
  { name: "Herb oil", qty: "1.2 L", state: "todo" },
  { name: "Pickled shallots", qty: "0.6 kg", state: "low" },
] as const;

export default function SousChefMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] rounded-[26px] bg-ink p-3 shadow-[0_30px_60px_-30px_rgb(23_23_23/0.45)]">
      <div className="overflow-hidden rounded-[16px] bg-ivory">
        <div className="flex items-center justify-between border-b border-ink/10 px-4 py-3">
          <div>
            <p className="font-mono text-[9px] tracking-[0.08em] text-muted uppercase">Prep · dinner service</p>
            <p className="text-[15px] font-semibold tracking-[-0.02em]">Scaled for 84 covers</p>
          </div>
          <span className="rounded-full bg-sun px-2.5 py-1 font-mono text-[9px] tracking-wide text-ink">2 / 4 DONE</span>
        </div>
        <ul className="divide-y divide-ink/8">
          {items.map((item) => (
            <li key={item.name} className="flex items-center gap-3 px-4 py-2.5">
              <span
                aria-hidden
                className={
                  item.state === "done"
                    ? "grid size-6 place-items-center rounded-md bg-ink text-[11px] text-sun"
                    : item.state === "active"
                      ? "size-6 rounded-md border-2 border-ink bg-sun"
                      : "size-6 rounded-md border border-ink/25 bg-white"
                }
              >
                {item.state === "done" ? "✓" : ""}
              </span>
              <span className="flex-1 text-[13px] font-medium">{item.name}</span>
              {item.state === "low" && (
                <span className="rounded-sm bg-lilac-soft px-1.5 py-0.5 font-mono text-[8.5px] tracking-wide text-ink">LOW STOCK</span>
              )}
              <span className="font-mono text-[11px] text-muted">{item.qty}</span>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-2 p-3">
          <span className="grid h-10 place-items-center rounded-lg bg-ink text-[12px] font-medium text-ivory">Next step</span>
          <span className="grid h-10 place-items-center rounded-lg border border-ink/20 text-[12px] font-medium">Recipe card</span>
        </div>
      </div>
    </div>
  );
}
