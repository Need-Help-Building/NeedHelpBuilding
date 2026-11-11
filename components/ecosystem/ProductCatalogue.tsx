import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { mailto } from "@/content/site";
import { productStatusLabel, products, type Product } from "@/content/products";
import { cn } from "@/lib/cn";
import ProductVisual from "./ProductVisuals";

function demoHref(p: Product) {
  return mailto(
    `Demo request: ${p.name}`,
    `Hi NHB team,\n\nI'd like a demo of ${p.name}.\n\nBusiness name:\nWhat we'd use it for:\nBest number to reach me:\n`,
  );
}

function StatusPill({ status, dark }: { status: Product["status"]; dark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-[10.5px] tracking-wide uppercase",
        dark ? "bg-white/12 text-white/85" : "bg-ink/6 text-ink/70",
      )}
    >
      <span
        aria-hidden
        className={cn("size-1.5 rounded-full", status === "live" ? "bg-[#2f9e5b]" : status === "prototype" ? "bg-sun" : "bg-current/50")}
      />
      {productStatusLabel[status]}
    </span>
  );
}

function Mark({ product, dark }: { product: Product; dark?: boolean }) {
  if (product.logo) {
    return <Image src={product.logo.src} alt={product.logo.alt} width={44} height={44} className="size-11 rounded-xl" />;
  }
  return (
    <span
      aria-hidden
      className={cn("grid size-11 place-items-center rounded-xl font-mono text-[13px] font-semibold", dark ? "bg-white/12 text-white" : "bg-ink text-ivory")}
    >
      {product.name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase()}
    </span>
  );
}

function FeatureList({ title, items, dark, note }: { title: string; items: string[]; dark?: boolean; note?: string }) {
  return (
    <div>
      <p className={cn("t-eyebrow", dark ? "text-white/55" : "text-muted")}>{title}</p>
      {note && <p className={cn("mt-1.5 text-[12.5px]", dark ? "text-white/50" : "text-muted")}>{note}</p>}
      <ul className={cn("mt-3 border-t", dark ? "border-white/12" : "border-ink/10")}>
        {items.map((f) => (
          <li key={f} className={cn("flex gap-3 border-b py-2.5 text-[14.5px] leading-snug", dark ? "border-white/10" : "border-ink/8")}>
            <span aria-hidden className={dark ? "text-sun" : "text-ink/40"}>
              ›
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Details({ product, dark }: { product: Product; dark?: boolean }) {
  return (
    <div className="space-y-7">
      {product.features && (
        <FeatureList
          title={product.status === "custom" ? "Already built" : product.status === "prototype" ? "In the working prototype" : "What it does"}
          items={product.features}
          dark={dark}
        />
      )}
      {product.buildToOrder && <FeatureList title="Built to order" items={product.buildToOrder} dark={dark} />}
      {product.designedFor && (
        <FeatureList
          title="Designed for"
          note="Full feature list shared in the demo."
          items={product.designedFor}
          dark={dark}
        />
      )}
      <div>
        <p className={cn("t-eyebrow", dark ? "text-white/55" : "text-muted")}>Ideal customer</p>
        <p className={cn("mt-2 text-[14.5px] leading-relaxed", dark ? "text-white/80" : "text-ink/80")}>{product.idealCustomer}</p>
      </div>
      <ul aria-label={`Who ${product.name} is for`} className="flex flex-wrap gap-1.5">
        {product.audience.map((a) => (
          <li
            key={a}
            className={cn("rounded-full border px-2.5 py-1 font-mono text-[11px]", dark ? "border-white/20 text-white/75" : "border-ink/15 text-ink/70")}
          >
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Actions({ product, dark }: { product: Product; dark?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <ButtonLink href={demoHref(product)} variant={dark ? "sun" : "ink"} icon="arrow">
        Request a demo
      </ButtonLink>
      {product.liveUrl && (
        <a
          href={product.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("inline-flex items-center gap-1.5 text-[14px] font-medium underline decoration-2 underline-offset-4", dark ? "decoration-sun" : "decoration-sun")}
        >
          Visit {product.liveLabel} <ArrowUpRight aria-hidden className="size-4" />
        </a>
      )}
    </div>
  );
}

/** Large, brand-tinted showcase for the featured products (SocialGenie, ProductFit). */
function Showcase({ product, flip }: { product: Product; flip?: boolean }) {
  const dark = true;
  return (
    <article
      id={`product-${product.id}`}
      data-reveal
      className="overflow-hidden rounded-[2rem]"
      style={{ background: product.accent.bg, color: product.accent.fg }}
    >
      <div className={cn("grid grid-cols-1 lg:grid-cols-12")}>
        <div className={cn("p-7 sm:p-10 lg:col-span-5", flip && "lg:order-2")}>
          <div className="flex flex-wrap items-center gap-3">
            <Mark product={product} dark={dark} />
            <div>
              <h3 className="text-[26px] font-semibold tracking-[-0.035em]">{product.name}</h3>
              <p className="font-mono text-[11.5px] text-white/60">{product.category}</p>
            </div>
          </div>
          <div className="mt-5">
            <StatusPill status={product.status} dark={dark} />
          </div>
          <p className="mt-6 text-[17px] leading-relaxed text-white/85">{product.summary}</p>
          <div className="mt-8">
            <Details product={product} dark={dark} />
          </div>
          <div className="mt-9">
            <Actions product={product} dark={dark} />
          </div>
        </div>
        <div className={cn("min-h-[380px] lg:col-span-7", flip && "lg:order-1")}>
          <ProductVisual product={product} className="h-full" />
        </div>
      </div>
    </article>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article id={`product-${product.id}`} data-reveal className="pixel-corners flex flex-col overflow-hidden rounded-3xl border border-ink/12 bg-white">
      <div className="h-64 border-b border-ink/10">
        <ProductVisual product={product} className="h-full" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <Mark product={product} />
          <div className="min-w-0">
            <h3 className="text-[20px] font-semibold tracking-[-0.03em]">{product.name}</h3>
            <p className="font-mono text-[11.5px] text-muted">{product.category}</p>
          </div>
        </div>
        <div className="mt-4">
          <StatusPill status={product.status} />
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{product.summary}</p>
        <div className="mt-6 flex-1">
          <Details product={product} />
        </div>
        <div className="mt-8 border-t border-ink/10 pt-6">
          <Actions product={product} />
        </div>
      </div>
    </article>
  );
}

export default function ProductCatalogue() {
  const featured = products.filter((p) => p.featured);
  const rest = products.filter((p) => !p.featured);
  return (
    <div className="space-y-6">
      {featured.map((p, i) => (
        <Showcase key={p.id} product={p} flip={i % 2 === 1} />
      ))}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
