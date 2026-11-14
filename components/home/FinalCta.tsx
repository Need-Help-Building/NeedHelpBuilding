import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import SmartLink from "@/components/ui/SmartLink";
import { Container } from "@/components/ui/primitives";
import { conversationStarters } from "@/content/company";
import { BigDino, PixelHorizon } from "@/components/pixel/Decor";
import { GROUND_H } from "@/lib/pixel-sprites";
import { ctas, site } from "@/content/site";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function FinalCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-sun text-ink">
      <div aria-hidden className="grid-paper-sun pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_80%_at_70%_40%,#000,transparent)]" />
      <Container className="relative py-16 sm:py-24 lg:py-32">
        <p data-reveal="fade" className="t-eyebrow flex items-center gap-3">
          <span aria-hidden className="size-2 bg-ink" />
          Need help building?
        </p>
        <h2
          id="contact-title"
          data-reveal
          className="t-pixel mt-6 sm:mt-8 max-w-[21ch] text-[clamp(2rem,1rem+4.2vw,5rem)] leading-[1.06] font-semibold break-words"
        >
          The right conversation can change your business.
        </h2>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-10 sm:gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div data-reveal data-delay="1" className="lg:col-span-5">
            <p className="t-lede max-w-md text-ink/80">
              Whether you&apos;re planning a new digital product, exploring AI, modernising existing systems, or figuring
              out where technology fits into your business, let&apos;s start with a conversation.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <ButtonLink href={ctas.consultation.href} variant="ink" size="lg">
                {ctas.consultation.label}
              </ButtonLink>
              <ButtonLink href={ctas.startProject.href} variant="outline" size="lg">
                {ctas.startProject.label}
              </ButtonLink>
            </div>
            <ul className="mt-8 sm:mt-10 space-y-2.5 text-[15px]">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 font-medium underline-offset-4 hover:underline break-all sm:break-normal">
                  <Mail aria-hidden className="size-4 shrink-0" /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-medium underline-offset-4 hover:underline"
                >
                  <WhatsAppGlyph className="size-4 shrink-0" /> WhatsApp {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.e164}`} className="inline-flex items-center gap-3 font-medium underline-offset-4 hover:underline">
                  <Phone aria-hidden className="size-4 shrink-0" /> Call us
                </a>
              </li>
            </ul>
          </div>

          <div data-reveal data-delay="2" className="lg:col-span-6 lg:col-start-7">
            <p className="t-eyebrow text-ink/70">Start with where you are</p>
            <ul className="mt-4 border-t-2 border-ink">
              {conversationStarters.map((s, i) => (
                <li key={s.label} className="border-b border-ink/25">
                  <SmartLink href={s.href} className="group flex items-center gap-4 sm:gap-5 py-4 sm:py-5">
                    <span className="font-mono text-[12px] text-ink/60">0{i + 1}</span>
                    <span className="text-[clamp(1.05rem,0.9rem+0.5vw,1.5rem)] leading-snug font-semibold tracking-[-0.03em]">
                      {s.label}
                    </span>
                    <span className="ml-auto grid size-9 sm:size-10 shrink-0 place-items-center rounded-full border border-ink/30 transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-sun">
                      <ArrowUpRight aria-hidden className="size-4" />
                    </span>
                  </SmartLink>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] text-ink/70">Each option opens an email with the topic filled in. We reply personally.</p>
          </div>
        </div>
      </Container>
      {/* A large, faint dino standing on the horizon's ground */}
      <BigDino scale={6} className="right-[5%] hidden md:block" style={{ bottom: GROUND_H }} />
      <PixelHorizon className="relative -mb-px" />
    </section>
  );
}
