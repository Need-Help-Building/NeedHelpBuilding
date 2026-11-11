import Image from "next/image";
import IndustryGlyphArt from "@/components/home/visuals/IndustryGlyphs";
import type { Product } from "@/content/products";
import { cn } from "@/lib/cn";

/**
 * Product showcases for /earn-with-nhb. Real assets are used where they exist (SocialGenie logo, Table & Thyme
 * design mockup). Coded interfaces show how a product works and are labelled "illustrative"; none of them
 * display figures or metrics.
 */

export function IllustrativeTag({ children = "Illustrative interface", className }: { children?: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-current/25 bg-white/70 px-2.5 py-1 font-mono text-[10.5px] tracking-wide text-ink/75 backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}

function SocialGenieShowcase() {
  const customers = [
    { name: "Ananya R.", tag: "Visited last week" },
    { name: "Rohit K.", tag: "Regular" },
    { name: "Meera S.", tag: "New customer" },
    { name: "Farhan A.", tag: "Regular" },
  ];
  return (
    <div
      className="relative grid h-full content-center items-start gap-3 p-5 pb-14 sm:grid-cols-[1fr_1.15fr] sm:p-7 sm:pb-16"
      style={{ background: "#e8f6ee" }}
    >
      <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_-12px_rgba(10,46,29,0.35)]">
        <p className="font-mono text-[10px] tracking-wider text-[#0a2e1d]/60 uppercase">Customers</p>
        <ul className="mt-3 space-y-2.5">
          {customers.map((c) => (
            <li key={c.name} className="flex items-center gap-2.5">
              <span aria-hidden className="grid size-7 place-items-center rounded-full bg-[#16a34a]/12 font-mono text-[10px] text-[#0a2e1d]">
                {c.name.slice(0, 1)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[12.5px] font-semibold text-[#0a2e1d]">{c.name}</span>
                <span className="block text-[11px] text-[#0a2e1d]/55">{c.tag}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-lg border border-dashed border-[#16a34a]/40 px-3 py-2 text-center text-[11px] text-[#0a2e1d]/70">
          Import from CSV
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="rounded-2xl bg-[#0a2e1d] p-4 text-white">
          <p className="font-mono text-[10px] tracking-wider text-white/55 uppercase">Broadcast</p>
          <p className="mt-2.5 rounded-lg bg-white/8 px-3 py-2.5 font-mono text-[11.5px] leading-relaxed">
            Hi <span className="rounded bg-[#16a34a] px-1">{"{{first_name}}"}</span>, our weekend specials are back. Reply to
            reserve a table.
          </p>
          <p className="mt-2 text-[11px] text-white/55">Personalised for every customer on the list</p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_-12px_rgba(10,46,29,0.35)]">
          <p className="font-mono text-[10px] tracking-wider text-[#0a2e1d]/60 uppercase">Inbox</p>
          <div className="mt-3 space-y-2 text-[12px]">
            <p className="max-w-[85%] rounded-xl rounded-tl-sm bg-[#f1f5f2] px-3 py-2 text-[#0a2e1d]">
              Hi Meera, our weekend specials are back. Reply to reserve a table.
            </p>
            <p className="ml-auto max-w-[75%] rounded-xl rounded-tr-sm bg-[#16a34a] px-3 py-2 text-white">
              Table for 4 on Saturday please!
            </p>
          </div>
        </div>
      </div>
      <IllustrativeTag className="absolute right-4 bottom-4" />
    </div>
  );
}

function Bottle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" className={className} aria-hidden>
      <rect x="22" y="4" width="16" height="14" rx="3" fill="#171717" />
      <path d="M18 22h24l6 16v70a8 8 0 0 1-8 8H20a8 8 0 0 1-8-8V38z" fill="#f5f3ed" stroke="#171717" strokeWidth="2.5" />
      <rect x="16" y="56" width="28" height="30" rx="3" fill="#ffd000" stroke="#171717" strokeWidth="2" />
    </svg>
  );
}

function ProductFitShowcase() {
  const outputs = [
    { label: "Studio still", bg: "linear-gradient(160deg,#ead9e4,#c59eb9)" },
    { label: "Animation", bg: "linear-gradient(160deg,#dce8f2,#b3cde3)" },
    { label: "Marketing video", bg: "linear-gradient(160deg,#fff6bf,#ffd000)" },
  ];
  return (
    <div className="relative h-full bg-ink p-5 text-ivory sm:p-7">
      <div className="grid h-full gap-4 sm:grid-cols-[0.8fr_auto_1.6fr] sm:items-center">
        <div>
          <p className="font-mono text-[10px] tracking-wider text-ivory/50 uppercase">Your product photo</p>
          <div className="relative mt-3 grid aspect-[4/5] place-items-center overflow-hidden rounded-2xl bg-[#3a3833]">
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-[#2c2b29]" />
            <Bottle className="relative h-1/2 -rotate-6 opacity-90" />
          </div>
        </div>
        <span aria-hidden className="hidden font-mono text-[22px] text-sun sm:block">→</span>
        <div>
          <p className="font-mono text-[10px] tracking-wider text-ivory/50 uppercase">Studio outputs</p>
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {outputs.map((o, i) => (
              <figure key={o.label} className="m-0">
                <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-2xl" style={{ background: o.bg }}>
                  <span aria-hidden className="absolute bottom-[18%] h-2 w-1/2 rounded-full bg-ink/20 blur-[3px]" />
                  <Bottle className={cn("relative h-1/2", i === 1 && "rotate-12", i === 2 && "-rotate-3 scale-110")} />
                  {i === 2 && (
                    <span aria-hidden className="absolute top-2 left-2 grid size-6 place-items-center rounded-full bg-ink text-[9px] text-sun">
                      ▶
                    </span>
                  )}
                  {i === 1 && (
                    <span aria-hidden className="absolute top-2 left-2 font-mono text-[9px] text-ink/70">
                      360°
                    </span>
                  )}
                </div>
                <figcaption className="mt-2 text-[11.5px] text-ivory/70">{o.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <IllustrativeTag className="absolute right-4 bottom-4">Illustrative — ask for a live demo</IllustrativeTag>
    </div>
  );
}

function EasyPgVisual() {
  const beds = ["on", "on", "off", "on", "on", "on", "off", "on", "on", "off", "on", "on"];
  return (
    <div className="relative grid h-full place-items-center bg-mist-soft p-6">
      <div className="w-full max-w-[260px]">
        <p className="font-mono text-[10px] tracking-wider text-ink/60 uppercase">Rooms · residents</p>
        <div className="mt-3 grid grid-cols-6 gap-2">
          {beds.map((b, i) => (
            <span
              key={i}
              aria-hidden
              className={cn("aspect-square rounded-lg border", b === "on" ? "border-ink bg-ink" : "border-ink/30 bg-white", i === 5 && "border-ink bg-sun")}
            />
          ))}
        </div>
      </div>
      <IllustrativeTag className="absolute right-3 bottom-3">Illustrative</IllustrativeTag>
    </div>
  );
}

export default function ProductVisual({ product, className }: { product: Product; className?: string }) {
  switch (product.visual) {
    case "socialgenie":
      return (
        <div role="img" aria-label="Illustration of SocialGenie: a customer list, a personalised WhatsApp broadcast and a shared inbox." className={className}>
          <SocialGenieShowcase />
        </div>
      );
    case "productfit":
      return (
        <div role="img" aria-label="Illustration of ProductFit turning one product photo into a studio still, an animation and a marketing video." className={className}>
          <ProductFitShowcase />
        </div>
      );
    case "easypg":
      return (
        <div role="img" aria-label="Illustration of rooms and resident occupancy in a PG." className={className}>
          <EasyPgVisual />
        </div>
      );
    case "healthcare":
      return (
        <div className={cn("bg-lilac-soft p-4", className)}>
          <IndustryGlyphArt glyph="healthcare" label="Sketch of a hospital system: appointments, records and a patient portal." />
        </div>
      );
    case "table-and-thyme":
      return (
        <div className={cn("relative overflow-hidden bg-[#dce8f2]", className)}>
          <Image
            src="/products/table-and-thyme-menu.webp"
            alt="Table & Thyme design concept: a phone showing a restaurant's digital food menu with dishes and prices."
            width={900}
            height={1601}
            sizes="(min-width: 1024px) 22vw, 60vw"
            className="mx-auto h-full w-auto object-contain object-top pt-4"
          />
          <IllustrativeTag className="absolute right-3 bottom-3">Design concept</IllustrativeTag>
        </div>
      );
  }
}
