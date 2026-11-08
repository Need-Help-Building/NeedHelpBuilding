import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import SmartLink from "@/components/ui/SmartLink";
import { Container } from "@/components/ui/primitives";
import { conversationStarters } from "@/content/company";
import { ctas, site } from "@/content/site";

export default function FinalCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-sun text-ink">
      <div aria-hidden className="grid-paper-sun pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_80%_at_70%_40%,#000,transparent)]" />
      <Container className="relative py-24 lg:py-32">
        <p data-reveal="fade" className="t-eyebrow flex items-center gap-3">
          <span aria-hidden className="size-2 bg-ink" />
          Need help building?
        </p>
        <h2
          id="contact-title"
          data-reveal
          className="mt-8 max-w-[21ch] text-[clamp(2.75rem,1rem+5.4vw,5.75rem)] leading-[0.95] font-semibold tracking-[-0.055em]"
        >
          The right conversation can change your business.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div data-reveal data-delay="1" className="lg:col-span-5">
            <p className="t-lede max-w-md text-ink/80">
              Whether you&apos;re planning a new digital product, exploring AI, modernising existing systems, or figuring
              out where technology fits into your business — let&apos;s start with a conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={ctas.consultation.href} variant="ink" size="lg">
                {ctas.consultation.label}
              </ButtonLink>
              <ButtonLink href={ctas.startProject.href} variant="outline" size="lg">
                {ctas.startProject.label}
              </ButtonLink>
            </div>
            <ul className="mt-10 space-y-2.5 text-[15px]">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 font-medium underline-offset-4 hover:underline">
                  <Mail aria-hidden className="size-4" /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-medium underline-offset-4 hover:underline"
                >
                  <MessageCircle aria-hidden className="size-4" /> WhatsApp {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.e164}`} className="inline-flex items-center gap-3 font-medium underline-offset-4 hover:underline">
                  <Phone aria-hidden className="size-4" /> Call us
                </a>
              </li>
            </ul>
          </div>

          <div data-reveal data-delay="2" className="lg:col-span-6 lg:col-start-7">
            <p className="t-eyebrow text-ink/70">Start with where you are</p>
            <ul className="mt-4 border-t-2 border-ink">
              {conversationStarters.map((s, i) => (
                <li key={s.label} className="border-b border-ink/25">
                  <SmartLink href={s.href} className="group flex items-center gap-5 py-5">
                    <span className="font-mono text-[12px] text-ink/60">0{i + 1}</span>
                    <span className="text-[clamp(1.125rem,0.95rem+0.6vw,1.5rem)] leading-snug font-semibold tracking-[-0.03em]">
                      {s.label}
                    </span>
                    <span className="ml-auto grid size-10 shrink-0 place-items-center rounded-full border border-ink/30 transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-sun">
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
    </section>
  );
}
