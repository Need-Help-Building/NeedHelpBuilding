import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import SmartLink from "@/components/ui/SmartLink";
import { Container } from "@/components/ui/primitives";
import { footerColumns } from "@/content/navigation";
import { referral } from "@/content/company";
import { site } from "@/content/site";
import { InstagramGlyph } from "./serviceIcons";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <Container className="pt-14 pb-8 sm:pt-20 sm:pb-10 lg:pt-28">
        <p className="t-pixel max-w-4xl text-[clamp(1.45rem,1.05rem+2.3vw,2.9rem)] leading-[1.15] font-semibold break-words">
          We don&apos;t just build technology.{" "}
          <span className="text-sun">We help businesses make better technology decisions.</span>
        </p>

        <div className="mt-12 sm:mt-16 grid gap-10 sm:gap-12 border-t border-ivory/12 pt-10 sm:pt-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Image
              src="/logo.png"
              alt="NHB | NeedHelpBuilding, digital products and services"
              width={1024}
              height={512}
              className="h-auto w-36 sm:w-44 object-contain"
            />
            <ul className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 py-1 text-ivory/80 transition-colors hover:text-sun break-all sm:break-normal"
                >
                  <Mail aria-hidden className="size-4 shrink-0 text-ivory/50" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.e164}`}
                  className="inline-flex items-center gap-3 py-1 text-ivory/80 transition-colors hover:text-sun"
                >
                  <Phone aria-hidden className="size-4 shrink-0 text-ivory/50" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 py-1 text-ivory/80 transition-colors hover:text-sun"
                >
                  <WhatsAppGlyph className="size-4 shrink-0 text-ivory/50" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 py-1 text-ivory/80 transition-colors hover:text-sun"
                >
                  <InstagramGlyph className="size-4 shrink-0 text-ivory/50" />
                  @needhelpbuilding
                </a>
              </li>
            </ul>

            <div className="mt-8 sm:mt-10 max-w-sm rounded-2xl border border-ivory/12 bg-white/[0.02] p-4 sm:p-5">
              <p className="t-eyebrow text-sun">{referral.title}</p>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ivory/70">{referral.summary}</p>
              <SmartLink
                href={referral.cta.href}
                className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-ivory hover:text-sun"
              >
                {referral.cta.label}
                <ArrowUpRight aria-hidden className="size-3.5" />
              </SmartLink>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-5 gap-y-8 min-[520px]:grid-cols-3 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-6 lg:pl-8"
          >
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="t-eyebrow text-ivory/45">{column.title}</h3>
                <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label} className="text-sm leading-5">
                      {link.href ? (
                        <SmartLink
                          href={link.href}
                          className="inline-block py-1 text-ivory/80 transition-colors hover:text-sun"
                        >
                          {link.label}
                        </SmartLink>
                      ) : (
                        <span className="inline-block py-1 text-ivory/60">
                          {link.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 sm:mt-20 flex flex-col gap-3 border-t border-ivory/12 pt-6 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.descriptor}.
          </p>
          <p className="flex flex-wrap items-center gap-2">
            {site.address ?? (
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-sun">
                {site.email}
              </a>
            )}
          </p>
        </div>
      </Container>
    </footer>
  );
}
