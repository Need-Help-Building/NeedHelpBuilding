import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import SmartLink from "@/components/ui/SmartLink";
import { Container, Placeholder } from "@/components/ui/primitives";
import { footerColumns } from "@/content/navigation";
import { referral } from "@/content/company";
import { site } from "@/content/site";
import { InstagramGlyph } from "./serviceIcons";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <Container className="pt-20 pb-10 lg:pt-28">
        <p className="max-w-4xl text-[clamp(1.75rem,1.1rem+2.6vw,3.25rem)] leading-[1.06] font-semibold tracking-[-0.045em]">
          We don&apos;t just build technology.{" "}
          <span className="text-sun">We help businesses make better technology decisions.</span>
        </p>

        <div className="mt-16 grid gap-12 border-t border-ivory/12 pt-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Image
              src="/logo.png"
              alt="NHB — NeedHelpBuilding, digital products & services"
              width={1062}
              height={482}
              className="h-auto w-44"
            />
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-ivory/80 hover:text-sun">
                  <Mail aria-hidden className="size-4 text-ivory/50" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.e164}`} className="inline-flex items-center gap-3 text-ivory/80 hover:text-sun">
                  <Phone aria-hidden className="size-4 text-ivory/50" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-ivory/80 hover:text-sun"
                >
                  <MessageCircle aria-hidden className="size-4 text-ivory/50" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-ivory/80 hover:text-sun"
                >
                  <InstagramGlyph className="size-4 text-ivory/50" />
                  @needhelpbuilding
                </a>
              </li>
            </ul>

            <div className="mt-10 max-w-sm rounded-xl border border-ivory/12 p-5">
              <p className="t-eyebrow text-sun">{referral.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">{referral.summary}</p>
              <SmartLink
                href={referral.cta.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ivory hover:text-sun"
              >
                {referral.cta.label}
                <ArrowUpRight aria-hidden className="size-3.5" />
              </SmartLink>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="t-eyebrow text-ivory/45">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label} className="text-sm leading-5">
                      {link.href ? (
                        <SmartLink href={link.href} className="text-ivory/80 transition-colors hover:text-sun">
                          {link.label}
                        </SmartLink>
                      ) : (
                        <span className="text-ivory/40">
                          {link.label}
                          <span className="ml-2 rounded-sm border border-ivory/15 px-1 py-px font-mono text-[0.6rem] tracking-wider uppercase">
                            Soon
                          </span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-ivory/12 pt-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. {site.descriptor}.
          </p>
          <p className="flex flex-wrap items-center gap-2">
            {site.address ?? <Placeholder label="Registered business address" tone="dark" />}
          </p>
        </div>
      </Container>
    </footer>
  );
}
