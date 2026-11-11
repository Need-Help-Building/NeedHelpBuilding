import type { Metadata } from "next";
import ApplySection from "@/components/ecosystem/ApplySection";
import ProductCatalogue from "@/components/ecosystem/ProductCatalogue";
import ProgramCta from "@/components/ecosystem/ProgramCta";
import ProgramHero from "@/components/ecosystem/ProgramHero";
import Steps, { type Step } from "@/components/ecosystem/Steps";
import { bookingCta } from "@/components/ecosystem/booking";
import SectionHeading from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/primitives";
import { productStatusLabel, products } from "@/content/products";
import { JsonLd } from "@/lib/structured-data";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products & Revenue Program",
  description:
    "Introduce NHB's software products, including SocialGenie, to businesses in your network. NHB runs the demos and closing; approved partners earn an agreed, product-specific commission.",
  path: "/earn-with-nhb",
});

const steps: Step[] = [
  { title: "Choose a product", detail: "Pick the products you want to represent, based on the industries you know." },
  { title: "Understand the customer", detail: "We brief you on who each product is for and the problems it solves." },
  { title: "Find the right businesses", detail: "Identify businesses in your network that would genuinely benefit." },
  { title: "Register the lead", detail: "Register each lead with NHB so it's attributed to you from the start." },
  { title: "We demo and close", detail: "NHB runs the demo, the consultation and the closing conversation." },
  { title: "Earn your commission", detail: "When the deal qualifies, you receive the commission agreed for that product." },
];

const reasons = [
  { title: "Several products, several industries", detail: "Hospitality, healthcare, local retail, accommodation and product brands." },
  { title: "Demos and sales support", detail: "We run the demonstrations and help you answer questions." },
  { title: "Nothing to build or maintain", detail: "NHB develops, supports and maintains every product." },
  { title: "Learn B2B sales", detail: "Real conversations with real business owners, with a team behind you." },
  { title: "Real business exposure", detail: "Understand how different industries buy and use software." },
  { title: "Performance-based earnings", detail: "You're paid on qualifying deals, at rates agreed up front." },
  { title: "A long-term relationship", detail: "The opportunity to build a lasting working relationship with NHB." },
];

export default function EarnWithNhbPage() {
  const meeting = bookingCta("products");
  return (
    <main id="main">
      <JsonLd data={breadcrumbJsonLd([["Home", "/"], ["Products & Revenue Program", "/earn-with-nhb"]])} />

      <ProgramHero
        eyebrow="NHB Products & Revenue Program"
        title="Products worth selling. *Opportunities worth building.*"
        lede={
          <p>
            NHB builds software products for specific industries. If you know businesses that would benefit from one,
            introduce them. We handle the demo, the consultation and the sale; approved partners earn a commission on
            every qualifying deal.
          </p>
        }
        primary={{ href: "#apply", label: "Become a Product Partner" }}
        secondary={meeting}
        aside={
          <div className="rounded-3xl border border-ink/12 bg-white p-6 sm:p-7">
            <p className="t-eyebrow text-muted">The catalogue</p>
            <ul className="mt-4 border-t border-ink/10">
              {products.map((p) => (
                <li key={p.id}>
                  <a href={`#product-${p.id}`} className="group flex items-center justify-between gap-4 border-b border-ink/10 py-3.5">
                    <span>
                      <span className="block text-[16px] font-semibold tracking-[-0.02em] group-hover:underline">{p.name}</span>
                      <span className="block text-[13px] text-muted">{p.category}</span>
                    </span>
                    <span className="shrink-0 font-mono text-[10.5px] tracking-wide text-ink/60 uppercase">{productStatusLabel[p.status]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <section aria-labelledby="catalogue-title" className="py-20 lg:py-32">
        <Container>
          <SectionHeading
            index="01"
            label="Products to showcase"
            title="Know a business that needs *better software?*"
            titleId="catalogue-title"
            lede="Each product shows what's built today and what we tailor for each customer. Ask for a demo of any of them."
          />
          <div className="mt-14 lg:mt-20">
            <ProductCatalogue />
          </div>
        </Container>
      </section>

      <section aria-labelledby="how-title" className="bg-ink py-20 text-ivory lg:py-32">
        <Container>
          <SectionHeading index="02" label="Revenue opportunity" title="How product partnership *works.*" titleId="how-title" tone="dark" />
          <Steps steps={steps} tone="dark" className="mt-14 lg:mt-20" />
          <div data-reveal className="mt-8 grid gap-6 rounded-3xl border border-ivory/15 p-7 sm:p-9 lg:grid-cols-12">
            <p className="text-[clamp(1.35rem,1.1rem+0.8vw,1.875rem)] leading-tight font-semibold tracking-[-0.03em] lg:col-span-5">
              Commission is product-specific, and agreed before you start.
            </p>
            <p className="text-[15px] leading-relaxed text-ivory/70 lg:col-span-7">
              Each product has its own pricing and sales cycle, so commission isn&apos;t one flat rate across the catalogue.
              We agree the commission for each product you represent in writing, along with what counts as a qualifying
              deal and when it&apos;s paid, before you register your first lead.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="why-title" className="py-20 lg:py-32">
        <Container>
          <SectionHeading index="03" label="Why participate" title="You bring the customer. *We bring everything else.*" titleId="why-title" />
          <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <li key={r.title} data-reveal data-delay={String((i % 4) + 1)} className="bg-ivory p-6 sm:p-7">
                <span className="font-mono text-[12px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.025em]">{r.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{r.detail}</p>
              </li>
            ))}
            <li className="bg-sun p-6 sm:p-7">
              <a href="#apply" className="flex h-full flex-col justify-between gap-6">
                <span className="text-[18px] font-semibold tracking-[-0.025em]">Ready to represent a product?</span>
                <span className="font-mono text-[12px] underline underline-offset-4">Apply below →</span>
              </a>
            </li>
          </ul>
        </Container>
      </section>

      <ApplySection
        index="04"
        label="Apply"
        title="Become a *Product Partner.*"
        lede="Tell us which products you'd like to represent and the businesses you can reach."
        formId="products"
        nextSteps={[
          "We review your application and reply personally.",
          "Approved partners get a product briefing and the commission terms for each product.",
          "You register leads; we run the demos and close.",
        ]}
        meeting={meeting}
      />

      <ProgramCta
        current="products"
        title="Find the right product. Find the right customer. Grow with us."
        primary={{ href: "#apply", label: "Become a Product Partner" }}
        secondary={meeting}
      />
    </main>
  );
}
