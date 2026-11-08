"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA } from "./services/services-data";
import { ShaderCard, ShaderBackdrop } from "@/components/ui/shader-card";
import { Rise } from "@/components/ui/rise";

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function AgencyPosterPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isBooked, setIsBooked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [activeAppView, setActiveAppView] = useState<"app" | "case-study">("app");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState<"in" | "out" | null>(null);
  const [wipeTitle, setWipeTitle] = useState("");
  const [servicesMegaMenuOpen, setServicesMegaMenuOpen] = useState(false);
  const [servicesFullscreenOpen, setServicesFullscreenOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesFullscreenOpen(false);
      }
    };
    if (servicesFullscreenOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesFullscreenOpen]);

    useEffect(() => {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = window.Cal;
    if (Cal) {
      Cal("init", "needhelpbuilding", { origin: "https://app.cal.com" });
      Cal.config = Cal.config || {};
      Cal.config.forwardQueryParams = true;

      Cal.ns?.needhelpbuilding?.("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#efeee9" },
          dark: { "cal-brand": "#efeee9" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }
  }, []);

const handleCopyEmail = () => {
    navigator.clipboard?.writeText("hello@needhelpbuilding.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = Array.from(document.querySelectorAll("main > section:not(:first-of-type), main > footer"));
    targets.forEach((el) => el.classList.add("nx-reveal"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("nx-in"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const navigateToSection = (targetId: string, label: string) => {
    if (isTransitioning) return;
    setWipeTitle(label);
    setIsTransitioning(true);
    setTransitionPhase("in");

    // Phase 1: Wipe down covers screen
    setTimeout(() => {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
      // Phase 2: Wipe out reveals target section
      setTransitionPhase("out");

      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionPhase(null);
      }, 420);
    }, 380);
  };

  const caseStudies = [
    {
      id: "sous-chef",
      tag: "KITCHEN TECH & AUTOMATION",
      name: "SOUS CHEF",
      badge: "IN PROGRESS",
      color: "#efeee9",
      accent: "#0f0f0f",
      headline: "A smart prep assistant for restaurant kitchens",
      link: null,
      statusNote: "IN DEVELOPMENT",
      image: "/hero.png",
      problem:
        "Kitchens throw away money because prep cooks eyeball portions, misplace recipe cards, and let fresh ingredients spoil before anyone notices.",
      solution:
        "We built a rugged kitchen tablet app that walks staff through recipe steps, scales ingredient amounts automatically based on expected covers, and alerts chefs when prep items are running low.",
      deliverables: [
        "Spill-proof touchscreen UI designed for greasy, busy kitchen lines",
        "Automatic recipe scaling based on lunch and dinner volume",
        "Prep checklists that update inventory when items are completed",
        "Simple end-of-day summary showing what got prepped vs. wasted",
      ],
      impactStats: [
        { label: "PREP ERRORS", value: "-40%" },
        { label: "ONBOARDING NEW COOKS", value: "2 DAYS" },
        { label: "EST. FOOD SAVINGS", value: "15%" },
      ],
    },
    {
      id: "youre-store-here",
      tag: "ECOMMERCE WEB APP",
      name: "YOURESTOREHERE",
      badge: "LIVE",
      color: "#8be9fd",
      accent: "#0f0f0f",
      headline: "Instant online stores for independent brands",
      link: "https://yourstorehere.vercel.app",
      linkDisplay: "YOURSTOREHERE.VERCEL.APP",
      statusNote: "LIVE IN PRODUCTION",
      image: "/yourstorehere.png",
      problem:
        "Small brands and creators often struggle with Shopify setup, clunky templates, and days of configuring payment gateways before making a single sale.",
      solution:
        "We built a lightweight storefront creator where a seller drops in their product photos, sets prices, connects Stripe, and gets a fast, mobile-friendly shop live in minutes.",
      deliverables: [
        "Fast Next.js storefronts with instant checkout and zero bloat",
        "Clean product catalog management on desktop and phone",
        "Direct Stripe checkout with automated customer order receipts",
        "Simple seller dashboard to track daily sales and orders",
      ],
      impactStats: [
        { label: "STORE SETUP TIME", value: "5 MINS" },
        { label: "PAGE LOAD TIME", value: "< 0.5S" },
        { label: "CHECKOUT DROPOFF", value: "-25%" },
      ],
    },
    {
      id: "caller-work",
      tag: "VOICE AUTOMATION",
      name: "CALLER.WORK",
      badge: "LIVE",
      color: "#ff7ad9",
      accent: "#0f0f0f",
      headline: "AI phone agent that answers calls and books appointments",
      link: "https://caller.work",
      linkDisplay: "CALLER.WORK",
      statusNote: "LIVE IN PRODUCTION",
      image: "/caller_work.png",
      problem:
        "Service businesses miss calls when technicians are on jobs or after hours, losing lucrative customers to competitors who simply picked up first.",
      solution:
        "We built an AI phone receptionist that picks up in 2 rings, answers common customer questions naturally, checks calendar availability, and books appointments directly into the owner's CRM.",
      deliverables: [
        "Natural-sounding voice agent with instant answers and zero robot delay",
        "Live calendar booking connected directly to Google Calendar and Cal.com",
        "Instant SMS and email notifications sent to staff right after every call",
        "Automatic fallback to forward difficult or urgent calls to an owner's cell",
      ],
      impactStats: [
        { label: "MISSED CALLS", value: "0" },
        { label: "PICKUP SPEED", value: "2 RINGS" },
        { label: "LEAD CONVERSION", value: "+30%" },
      ],
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [activeCap, setActiveCap] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const root = document.documentElement;
        root.style.setProperty("--sy", y + "px");
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty("--nx-progress", String(max > 0 ? y / max : 0));
        setScrolled(y > 40);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const NAV_LINKS = [
    { label: "WORK", href: "#case-studies" },
    { label: "STARTUPS & CTO", href: "#startups-cto" },
    { label: "TEAM", href: "#team" },
    { label: "TESTIMONIALS", href: "#testimonials" },
    { label: "REFERRAL [10%]", href: "#referral" },
  ];

  const capabilities = [
    {
      n: "01",
      title: "WEBSITES & WEB APPS",
      body: "Full-stack Next.js and React web applications built for speed, SEO domination, and effortless conversion. From interactive landing pages to high-scale SaaS products.",
      foot: "FLAGSHIP: YOURESTOREHERE",
      variant: 0,
    },
    {
      n: "02",
      title: "BESPOKE WEB DESIGN & UI/UX",
      body: "Bold, unforgettable aesthetics that refuse to blend into corporate mediocrity. Custom typography, micro-interactions, responsive design systems, and brutalist finesse.",
      foot: "STUDIO: CRAFT & BRANDING",
      variant: 1,
    },
    {
      n: "03",
      title: "BUSINESS AUTOMATIONS",
      body: "Eliminate repetitive human work. Automated lead capture, CRM syncing, AI telephone triage, invoicing pipelines, and instant customer notifications that never sleep.",
      foot: "FLAGSHIP: CALLER.WORK",
      variant: 2,
    },
    {
      n: "04",
      title: "CUSTOM DIGITAL SYSTEMS",
      body: "Custom integrations, AI copilots, payment setups, database syncing, and specialized tooling tailored to your business needs without vendor lock-in.",
      foot: "FLAGSHIP: SOUS CHEF",
      variant: 3,
    },
  ];

  const marqueeWords = [
    "CUSTOM WEBSITES & WEB APPS",
    "BESPOKE WEB DESIGN & UI/UX",
    "END-TO-END BUSINESS AUTOMATIONS",
    "HIGH-SPEED EDGE DEPLOYMENTS",
    "ZERO-LATENCY API INTEGRATIONS",
    "FRACTIONAL CTO FOR STARTUPS",
    "HIGH-CONVERTING DIGITAL SYSTEMS",
    "RAPID PROTOTYPING & EXECUTION",
  ];

  const onTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.transform = `perspective(1200px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
  };
  const offTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
  };

  const cs = caseStudies[activeCaseStudy];

  const sectionLabel = "nx-mono text-[11px] sm:text-xs text-bone-dim flex items-center gap-3";

  return (
    <main className="relative min-h-screen w-full bg-ink text-bone flex flex-col items-stretch selection:bg-ember selection:text-ink overflow-x-clip">
      <div className="nx-progress" aria-hidden="true" />

      {/* SECTION WIPE TRANSITION */}
      {isTransitioning && (
        <div
          className={`fixed inset-0 z-[100] bg-ember flex flex-col items-center justify-center p-8 pointer-events-none select-none ${
            transitionPhase === "in" ? "animate-curtain-wipe-in" : "animate-curtain-wipe-out"
          }`}
        >
          <div className="flex flex-col items-center text-center gap-5">
            <span className="nx-mono text-xs sm:text-sm text-ink">NEED HELP BUILDING?</span>
            <h2 className="nx-display text-ink text-5xl sm:text-7xl md:text-8xl">{wipeTitle || "INITIALIZING..."}</h2>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* NAVIGATION                                                   */}
      {/* ============================================================ */}
      <header
        className={`fixed top-0 inset-x-0 z-50 h-[72px] px-5 sm:px-10 grid grid-cols-[auto_1fr_auto] items-center gap-6 transition-all duration-500 ${
          scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-bone/10" : "bg-transparent border-b border-transparent"
        }`}
      >
        <a href="#" className="flex items-center select-none cursor-pointer" aria-label="Need Help Building Home">
          <Image src="/logo.png" alt="Need Help Building" width={1062} height={482} priority className="h-11 sm:h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-9">
          <button
            onClick={() => setServicesMegaMenuOpen(!servicesMegaMenuOpen)}
            onMouseEnter={() => setServicesMegaMenuOpen(true)}
            className="nx-mono nx-link text-[11px] text-bone flex items-center gap-2 cursor-pointer"
            aria-expanded={servicesMegaMenuOpen}
            aria-label="Toggle all services menu"
          >
            <span>SERVICES</span>
            <span className={`text-[8px] transition-transform duration-300 ${servicesMegaMenuOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
          {NAV_LINKS.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setServicesMegaMenuOpen(false);
                navigateToSection(item.href, item.label);
              }}
              className="nx-mono nx-link text-[11px] text-bone cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="lg:hidden" />

        <div className="flex items-center gap-4">
          <button
            data-cal-namespace="needhelpbuilding"
            data-cal-link="need-help-building/needhelpbuilding"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="nx-btn nx-btn-solid hidden sm:inline-flex !py-2.5"
          >
            LET&apos;S TALK
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden nx-mono text-[11px] text-bone border border-bone/20 rounded-full px-4 py-2 cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* SERVICES MEGA MENU */}
      {servicesMegaMenuOpen && (
        <div
          onMouseEnter={() => setServicesMegaMenuOpen(true)}
          onMouseLeave={() => setServicesMegaMenuOpen(false)}
          className="fixed inset-x-0 top-[72px] z-40 bg-ink/95 backdrop-blur-2xl border-b border-bone/10 max-h-[85vh] overflow-y-auto animate-fadeIn"
        >
          <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-10 flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 border-b border-bone/10 pb-6">
              <div>
                <div className="nx-mono text-[11px] text-ember mb-3">FULL-SPECTRUM TECHNICAL CAPABILITIES // 9 DEDICATED DOMAINS</div>
                <h3 className="nx-display text-3xl sm:text-5xl">EVERYTHING WE BUILD, AUTOMATE &amp; SCALE</h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/919219061093?text=Hi%20NeedHelpBuilding%20team%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="nx-btn nx-btn-solid !py-2.5"
                >
                  DISCUSS REQUIREMENTS NOW
                </a>
                <button onClick={() => setServicesMegaMenuOpen(false)} className="nx-btn nx-btn-ghost !py-2.5">
                  CLOSE [ESC]
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES_DATA.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setServicesMegaMenuOpen(false)}
                  className="group rounded-3xl border border-bone/10 bg-ink-2 hover:bg-ember hover:text-ink hover:border-ember p-6 flex flex-col justify-between gap-6 transition-colors duration-500"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="nx-mono text-[10px] text-bone-dim group-hover:text-ink/70">
                        0{index + 1} // {service.category}
                      </span>
                      <span className="nx-mono text-[10px] border border-bone/20 group-hover:border-ink/40 rounded-full px-2.5 py-0.5">
                        {service.badge}
                      </span>
                    </div>
                    <h4 className="nx-display text-2xl sm:text-3xl leading-[0.95]">{service.title}</h4>
                    <p className="text-sm text-bone-dim group-hover:text-ink/80 mt-3 leading-relaxed">{service.shortDesc}</p>
                  </div>
                  <div className="pt-4 border-t border-bone/10 group-hover:border-ink/20 flex items-center justify-between nx-mono text-[11px]">
                    <span>VIEW DEDICATED SPECIFICS</span>
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="rounded-3xl border border-bone/10 bg-ink-2 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm text-bone-dim">
                ⚡ Not sure which service matches your exact workflow? We configure hybrid end-to-end architectures.
              </span>
              <button
                data-cal-namespace="needhelpbuilding"
                data-cal-link="need-help-building/needhelpbuilding"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                onClick={() => setServicesMegaMenuOpen(false)}
                className="nx-btn nx-btn-bone shrink-0 !py-2.5"
              >
                SCHEDULE ARCHITECTURAL AUDIT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-ink flex flex-col justify-between p-6 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-bone/10 pb-4">
            <Image src="/logo.png" alt="Need Help Building" width={1062} height={482} className="h-11 w-auto" />
            <button onClick={() => setMobileMenuOpen(false)} className="nx-mono text-[11px] border border-bone/20 rounded-full px-4 py-2 cursor-pointer">
              CLOSE [X]
            </button>
          </div>

          <div className="flex flex-col gap-2 my-8">
            <div className="rounded-3xl bg-ember text-ink p-5 mb-3">
              <span className="nx-mono text-[11px] block mb-3">SERVICES &amp; SPECIALIZATIONS</span>
              <div className="grid grid-cols-1">
                {SERVICES_DATA.map((srv) => (
                  <Link
                    key={srv.slug}
                    href={`/services/${srv.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="nx-mono text-xs flex items-center justify-between py-2.5 border-b border-ink/20"
                  >
                    <span>{srv.title}</span>
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </div>

            {[
              { label: "01. CASE STUDIES", href: "#case-studies", title: "CASE STUDIES" },
              { label: "02. STARTUPS & CTO", href: "#startups-cto", title: "STARTUPS & CTO" },
              { label: "03. FOUNDING TEAM", href: "#team", title: "THE TEAM" },
              { label: "04. TESTIMONIALS", href: "#testimonials", title: "TESTIMONIALS" },
              { label: "05. REFERRAL SCHEME", href: "#referral", title: "REFERRAL SCHEME" },
              { label: "06. WORK WITH US", href: "#contact", title: "WORK WITH US" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigateToSection(item.href, item.title);
                }}
                className="nx-display text-3xl text-left py-3 border-b border-bone/10 hover:text-ember transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigateToSection("#contact", "WORK WITH US");
            }}
            className="nx-btn nx-btn-solid w-full"
          >
            BOOK A DISCOVERY CALL
          </button>
        </div>
      )}

      {/* ============================================================ */}
      {/* 00 HERO                                                      */}
      {/* ============================================================ */}
      <section className="relative w-full flex flex-col px-5 sm:px-10 pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-[0.22] blur-[120px]"
          style={{ background: "radial-gradient(circle, #ff5a1f 0%, transparent 65%)" }}
          aria-hidden="true"
        />

        <h1 className="nx-display relative text-bone text-[clamp(38px,8.5vw,152px)]">
          <span className="nx-hero-line block overflow-hidden pb-[0.07em]">
            <span style={{ animationDelay: "0.1s" }}>NEED HELP</span>
          </span>
          <span className="nx-hero-line block overflow-hidden pb-[0.07em]">
            <span style={{ animationDelay: "0.25s" }}>
              BUILDING<span className="text-ember">?</span>
            </span>
          </span>
        </h1>

        <div className="relative mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <p className="nx-fade lg:col-span-5 text-bone-dim text-base sm:text-lg leading-relaxed max-w-xl" style={{ animationDelay: "0.7s" }}>
            We build websites, custom web designs, business automations, and intelligent digital systems. From high-converting storefronts and custom web applications to automated operations that run your business on autopilot.
          </p>

          <div className="nx-fade lg:col-span-5 flex flex-col sm:flex-row gap-3" style={{ animationDelay: "0.85s" }}>
            <button onClick={() => setServicesFullscreenOpen(true)} aria-label="Open services menu" className="nx-btn nx-btn-solid group">
              <span>VIEW SERVICES</span>
              <span className="transition-transform duration-300 group-hover:rotate-45">↗</span>
            </button>
            <button onClick={() => navigateToSection("#contact", "WORK WITH US")} className="nx-btn nx-btn-ghost">
              <span>{isBooked ? "WE GOT YOUR SPOT!" : "BOOK NOW"}</span>
              <span>→</span>
            </button>
          </div>

          <div className="nx-fade hidden lg:flex lg:col-span-2 justify-end" style={{ animationDelay: "1s" }} aria-hidden="true">
            <div className="relative w-28 h-28">
              <svg viewBox="0 0 120 120" className="nx-spin absolute inset-0 w-full h-full">
                <defs>
                  <path id="nx-circ" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
                </defs>
                <text className="nx-mono" fontSize="10.5" fill="#f1ebe0" letterSpacing="3.2">
                  <textPath href="#nx-circ">SCROLL • SCROLL • SCROLL • SCROLL •</textPath>
                </text>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-ember text-2xl">↓</span>
            </div>
          </div>
        </div>

        {/* Stage */}
        <div className="nx-fade relative mt-14 sm:mt-20 w-full aspect-[16/10] sm:aspect-[21/9] overflow-hidden rounded-[28px] sm:rounded-[40px] bg-ink-2 border border-bone/10" style={{ animationDelay: "1.1s" }}>
          <ShaderBackdrop variant={0} />
          <div className="absolute inset-[-10%]" style={{ transform: "translateY(calc(var(--sy) * -0.07))" }}>
            <Image
              src="/hero.png"
              alt="NEED HELP BUILDING? — systems, automations and web apps"
              fill
              priority
              sizes="(min-width: 1280px) 1400px, 100vw"
              className="object-cover object-[50%_30%] mix-blend-multiply"
            />
          </div>
          <div className="absolute left-4 bottom-4 sm:left-8 sm:bottom-8 flex flex-wrap gap-2 max-w-[calc(100%-32px)]">
            {["WEBSITES", "WEB DESIGN", "AUTOMATIONS", "SYSTEMS"].map((label) => (
              <span key={label} className="nx-mono text-[10px] sm:text-xs text-bone bg-ink/70 backdrop-blur-md border border-bone/15 rounded-full px-4 py-2">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* MARQUEE                                                      */}
      {/* ============================================================ */}
      <div className="w-full border-y border-bone/10 py-6 sm:py-8 overflow-hidden select-none flex flex-col gap-3">
        <div className="nx-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {marqueeWords.map((t, i) => (
                <span key={`${dup}-${i}`} className={`nx-display text-[clamp(34px,6vw,96px)] whitespace-nowrap pr-8 sm:pr-14 ${i % 2 ? "nx-outline" : "text-bone"}`}>
                  {t}
                  <span className="text-ember"> •</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 01 CAPABILITIES — ACCORDION                                  */}
      {/* ============================================================ */}
      <section id="capabilities" className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-10 py-24 lg:py-36 flex flex-col gap-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className={sectionLabel}>
              <span className="text-ember">(01)</span>
              <span>OUR CORE CAPABILITIES</span>
            </div>
            <h2 className="nx-display text-[clamp(28px,4.5vw,82px)]">
              <Rise>WEBSITES.</Rise>
              <Rise delay={120}>BESPOKE DESIGNS.</Rise>
              <Rise delay={240}>
                <span className="text-ember">AUTOMATIONS.</span>
              </Rise>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 items-start">
            <p className="text-bone-dim text-base leading-relaxed">
              From award-winning web design and lightning-fast web applications to bespoke automations that run your entire back-office on autopilot. We turn complex ideas into live, revenue-generating digital realities.
            </p>
            <button onClick={() => setServicesMegaMenuOpen(true)} className="nx-btn nx-btn-ghost">
              EXPLORE ALL 9 SERVICES MEGA MENU ↗
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 lg:h-[600px]">
          {capabilities.map((c, i) => {
            const on = activeCap === i;
            return (
              <div
                key={c.n}
                onMouseEnter={() => setActiveCap(i)}
                onClick={() => setActiveCap(i)}
                className={`nx-acc relative overflow-hidden rounded-[28px] border border-bone/10 bg-ink-2 cursor-pointer ${
                  on ? "lg:flex-[5] min-h-[440px]" : "lg:flex-[1] min-h-[96px]"
                }`}
              >
                {on && (
                  <div className="absolute inset-0 nx-fade" style={{ animationDuration: "0.8s" }}>
                    <ShaderBackdrop variant={c.variant} />
                    <div className="absolute inset-0 bg-ink/55" />
                  </div>
                )}

                {/* collapsed (desktop) */}
                {!on && (
                  <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-between py-7 px-3">
                    <span className="nx-display text-3xl text-bone-dim">{c.n}</span>
                    <span className="nx-mono text-[11px] text-bone [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">{c.title}</span>
                  </div>
                )}
                {/* collapsed (mobile) */}
                {!on && (
                  <div className="lg:hidden flex items-center justify-between px-6 h-[96px]">
                    <span className="nx-display text-lg sm:text-2xl pr-3">{c.title}</span>
                    <span className="nx-display text-xl sm:text-2xl text-bone-dim shrink-0">{c.n}</span>
                  </div>
                )}

                {on && (
                  <div className="relative z-10 h-full min-h-[440px] flex flex-col justify-between p-7 sm:p-10 nx-fade" style={{ animationDelay: "0.15s" }}>
                    <span className="nx-display text-6xl sm:text-8xl text-bone/90">{c.n}</span>
                    <div className="flex flex-col gap-5 max-w-xl">
                      <h3 className="nx-display text-3xl sm:text-5xl leading-[0.95]">{c.title}</h3>
                      <p className="text-bone/85 text-sm sm:text-base leading-relaxed">{c.body}</p>
                      <div className="pt-4 border-t border-bone/20 nx-mono text-[11px] text-bone/80">{c.foot}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02 CASE STUDIES — EDITORIAL STAGE                            */}
      {/* ============================================================ */}
      <section id="case-studies" className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-10 py-24 lg:py-36 border-t border-bone/10 flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <div className={sectionLabel}>
            <span className="text-ember">(02)</span>
            <span>FLAGSHIP CASE STUDIES</span>
          </div>
          <h2 className="nx-display text-[clamp(28px,4.5vw,82px)]">
            <Rise>PROVEN SYSTEMS</Rise>
            <Rise delay={120}>
              IN THE <span className="text-ember">WILD</span>
            </Rise>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Project index */}
          <div className="lg:col-span-4 flex flex-col lg:sticky lg:top-28 self-start">
            {caseStudies.map((item, idx) => {
              const on = activeCaseStudy === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCaseStudy(idx)}
                  onMouseEnter={() => setActiveCaseStudy(idx)}
                  className={`group text-left py-6 border-t border-bone/10 last:border-b flex items-start gap-5 cursor-pointer transition-colors duration-500 ${
                    on ? "text-bone" : "text-bone/35 hover:text-bone/70"
                  }`}
                >
                  <span className={`nx-mono text-xs pt-2 ${on ? "text-ember" : ""}`}>0{idx + 1}</span>
                  <span className="flex flex-col gap-3 flex-1">
                    <span className="nx-display text-[clamp(16px,1.35vw,24px)] leading-[1] [overflow-wrap:anywhere]">{item.name}</span>
                    <span className="nx-mono text-[10px] flex flex-wrap items-center gap-3">
                      <span>{item.tag}</span>
                      <span className={`rounded-full px-2.5 py-0.5 border ${on ? "border-ember text-ember" : "border-current"}`}>{item.badge}</span>
                    </span>
                  </span>
                  <span className={`text-xl pt-1 transition-transform duration-500 ${on ? "translate-x-0 text-ember" : "-translate-x-2 opacity-0 group-hover:opacity-60 group-hover:translate-x-0"}`}>→</span>
                </button>
              );
            })}

            <div className="flex items-center gap-3 pt-6">
              <button
                onClick={() => setActiveCaseStudy((activeCaseStudy - 1 + caseStudies.length) % caseStudies.length)}
                aria-label="Previous project"
                className="w-12 h-12 rounded-full border border-bone/20 hover:bg-bone hover:text-ink flex items-center justify-center transition-colors cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={() => setActiveCaseStudy((activeCaseStudy + 1) % caseStudies.length)}
                aria-label="Next project"
                className="w-12 h-12 rounded-full border border-bone/20 hover:bg-bone hover:text-ink flex items-center justify-center transition-colors cursor-pointer"
              >
                →
              </button>
            </div>
          </div>

          {/* Stage */}
          <div key={cs.id} className="lg:col-span-8 flex flex-col gap-8 nx-fade" style={{ animationDuration: "0.8s" }}>
            <div className="relative overflow-hidden rounded-[32px] sm:rounded-[44px] border border-bone/10 bg-ink-2 aspect-[4/3] sm:aspect-[16/10]">
              <ShaderBackdrop variant={activeCaseStudy + 1} />
              <div
                className="absolute inset-0 flex items-center justify-center p-5 sm:p-12"
                onMouseMove={onTilt}
                onMouseLeave={offTilt}
              >
                <div className="nx-tilt relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] border border-bone/15 bg-ink">
                  <Image src={cs.image} alt={`${cs.name} Screenshot`} fill sizes="(min-width: 1024px) 800px, 100vw" className="object-cover" />
                </div>
              </div>
              <div className="absolute left-5 top-5 sm:left-8 sm:top-8 nx-mono text-[10px] text-bone bg-ink/70 backdrop-blur-md border border-bone/15 rounded-full px-4 py-2">
                {cs.statusNote}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="flex flex-col gap-3 max-w-2xl">
                <span className="nx-mono text-[10px] text-bone-dim">APPLICATION PREVIEW &amp; REPOSITORY STATUS</span>
                <h3 className="nx-display text-2xl sm:text-4xl leading-[1]">{cs.headline}</h3>
              </div>
              {cs.link ? (
                <a href={cs.link} target="_blank" rel="noreferrer" className="nx-btn nx-btn-solid shrink-0">
                  <span>OPEN LIVE APPLICATION</span>
                  <span>↗</span>
                </a>
              ) : (
                <span className="nx-mono text-[11px] border border-ember text-ember rounded-full px-5 py-3 shrink-0">IN DEVELOPMENT PROTOTYPE</span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-bone/10">
              <div className="flex flex-col gap-3">
                <span className="nx-mono text-[10px] text-ember">THE BOTTLENECK / CHALLENGE</span>
                <p className="text-bone/85 leading-relaxed">{cs.problem}</p>
              </div>
              <div className="flex flex-col gap-3">
                <span className="nx-mono text-[10px] text-ember">ARCHITECTURE &amp; SOLUTION DEPLOYED</span>
                <p className="text-bone/85 leading-relaxed">{cs.solution}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-8 border-t border-bone/10">
              <span className="nx-mono text-[10px] text-ember">KEY APPLICATION MODULES DELIVERED</span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                {cs.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-3 py-3 border-b border-bone/10 text-sm text-bone/85">
                    <span className="text-ember">✓</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 pt-8 border-t border-bone/10">
              <span className="nx-mono text-[10px] text-ember">VERIFIED METRICS &amp; PRODUCTION IMPACT</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {cs.impactStats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="nx-display text-4xl sm:text-5xl text-bone">{stat.value}</span>
                    <span className="nx-mono text-[10px] text-bone-dim">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03 STARTUPS & CTO                                            */}
      {/* ============================================================ */}
      <section id="startups-cto" className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-10 py-24 lg:py-36 border-t border-bone/10 flex flex-col gap-14">
        <div className="flex flex-col gap-8">
          <div className={`${sectionLabel} flex-wrap`}>
            <span className="text-ember">(03)</span>
            <span>EQUITY // CTO CO-PILOT</span>
            <span className="border border-bone/20 rounded-full px-3 py-1 text-bone">AGENCY CTO &bull; EQUITY PARTNERSHIP PROGRAM</span>
          </div>
          <h3 className="nx-display text-[clamp(30px,6vw,108px)]">
            <Rise>WE BECOME YOUR</Rise>
            <Rise delay={120}>
              <span className="text-ember">TECHNICAL <span className="whitespace-nowrap">CO-FOUNDER</span></span>
            </Rise>
            <Rise delay={240}>&amp; CTO.</Rise>
          </h3>
          <p className="nx-mono text-xs sm:text-sm text-bone-dim">ZERO UPFRONT TECH RISK &bull; SPLIT RUNWAY &bull; SHARED EQUITY</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-[32px] border border-bone/10 bg-ink-2 p-7 sm:p-10 flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <span className="nx-mono text-[11px] text-bone-dim">CO-FOUNDER OPERATING MODEL</span>
              <span className="nx-mono text-[10px] text-ink bg-ember rounded-full px-3 py-1">ACTIVE</span>
            </div>
            <p className="nx-display !normal-case !tracking-[-0.025em] !leading-[1.1] !font-bold text-2xl sm:text-3xl">
              You bring the market vision and customer distribution. We engineer the entire tech apparatus, from high-converting frontends to autonomous backend infrastructure.
            </p>
            <p className="text-bone-dim leading-relaxed max-w-2xl">
              Instead of bleeding seed money on unreliable freelance contractors or taking 8 months to hire a CTO, our elite agency team steps in as your dedicated in-house technical co-founder. We split development costs and align long-term incentives via an agreed equity percentage.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-[32px] bg-ember text-ink p-7 sm:p-10 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="nx-mono text-[11px]">SUNDAY PITCH SLOT</span>
              <span className="nx-mono text-[10px] border border-ink/40 rounded-full px-3 py-1">4 SLOTS LEFT</span>
            </div>
            <h4 className="nx-display text-4xl sm:text-5xl leading-[0.92]">PITCHING HAPPENS EVERY SUNDAY.</h4>
            <p className="text-sm sm:text-base leading-relaxed text-ink/85">
              Every Sunday, our founding engineering team reviews pitches from early-stage founders. If selected, we enter a 14-day sprint to scope, design, and deploy your product into market as your technical partner.
            </p>
            <ul className="flex flex-col nx-mono text-[11px]">
              {["PITCH DECK OR PRODUCT SCOPE", "CO-FOUNDER DETAILS & RUNWAY", "PROPOSED EQUITY SPLIT RANGE"].map((t) => (
                <li key={t} className="flex items-center gap-3 py-3 border-b border-ink/20">
                  <span>✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@needhelpbuilding.com?subject=Startup%20CTO%20Equity%20Pitch&body=Hi%20NeedHelpBuilding%20Team%2C%0A%0AWe%20would%20love%20to%20pitch%20our%20startup%20for%20the%20Sunday%20session.%0A%0AStartup%20Name%3A%20%0AFounder(s)%3A%20%0AWebsite%2FDeck%20Link%3A%20%0AWhat%20we're%20building%3A%20"
              className="nx-btn bg-ink text-bone hover:bg-bone hover:text-ink w-full"
            >
              PITCH YOUR STARTUP VIA EMAIL
            </a>
            <div className="flex flex-wrap items-center justify-between gap-2 nx-mono text-[10px]">
              <span>INSTANT REVIEW:</span>
              <span className="underline">HELLO@NEEDHELPBUILDING.COM</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { num: "01", title: "EQUITY SHARE", desc: "We invest our engineering capabilities directly for skin in the game. True alignment.", v: 0 },
            { num: "02", title: "COST SPLIT", desc: "Shared operational expenditure ensures you extend runway without compromising code quality.", v: 3 },
            { num: "03", title: "FULL STACK", desc: "Web apps, internal tooling, edge databases, UI/UX, and AI automations fully managed.", v: 5 },
          ].map((p) => (
            <ShaderCard key={p.num} variant={p.v} className="min-h-[300px]">
              <span className="nx-mono text-[11px] text-bone/80">{p.num}. PILLAR</span>
              <h4 className="nx-display text-3xl sm:text-4xl mt-auto mb-3">{p.title}</h4>
              <p className="text-sm text-bone/85 leading-relaxed">{p.desc}</p>
            </ShaderCard>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 04 TEAM                                                      */}
      {/* ============================================================ */}
      <section id="team" className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-10 py-24 lg:py-36 border-t border-bone/10 flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <div className={`${sectionLabel} flex-wrap`}>
            <span className="text-ember">(04)</span>
            <span>04 &bull; MEET THE BUILDERS &bull; NO CORPORATE FLUFF</span>
          </div>
          <h2 className="nx-display text-[clamp(28px,4.5vw,82px)]">
            <Rise>THE FOUNDING DUO</Rise>
            <Rise delay={120}>
              BEHIND <span className="text-ember">EVERY BUILD</span>.
            </Rise>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[32px] sm:rounded-[44px] border border-bone/10 bg-ink-2 aspect-[4/3] sm:aspect-[16/8]">
          <ShaderBackdrop variant={4} />
          <div className="absolute inset-0" style={{ transform: "translateY(calc(var(--sy) * -0.015))" }}>
            <Image
              src="/team.png"
              alt="Divy Shukla (Sales) & Suyash (Tech) - Need Help Building Founders"
              fill
              sizes="(min-width: 1400px) 1320px, 100vw"
              className="object-cover object-top grayscale contrast-110 mix-blend-multiply"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 bg-gradient-to-t from-ink/90 to-transparent">
            <span className="nx-mono text-[11px] text-bone">← That&apos;s Divy!</span>
            <span className="nx-mono text-[11px] text-ember hidden sm:inline">⚡ Divy hunts the revenue &bull; Suyash ships the production code</span>
            <span className="nx-mono text-[11px] text-bone">That&apos;s Suyash! →</span>
          </div>
        </div>
        <p className="sm:hidden nx-mono text-[11px] text-ember -mt-6">⚡ Divy hunts the revenue &bull; Suyash ships the production code</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              role: "SALES • DEAL ARCHITECTURE",
              name: "DIVY SHUKLA",
              quote: "“The Sales Guy Who Never Takes No For An Answer”",
              bio: "Turns ambiguous founder ideas into signed contracts, clears enterprise roadblocks, and scopes high-margin distribution channels before the first line of code is committed.",
              tags: ["#Distribution", "#Pipelines", "#Growth"],
            },
            {
              role: "TECH ARCHITECT • CODE ENGINE",
              name: "SUYASH",
              quote: "“The Tech Guy Who Ships Code While You Sleep”",
              bio: "Full-stack systems architect, agentic AI hacker, and automation builder. Turns complex logic, APIs, and real-time databases into blazing-fast web engines with zero fluff.",
              tags: ["#FullStack", "#AutonomousAI", "#NextJS"],
            },
          ].map((m) => (
            <div key={m.name} className="rounded-[32px] border border-bone/10 bg-ink-2 p-7 sm:p-10 flex flex-col gap-6 hover:border-ember/60 transition-colors duration-500">
              <span className="nx-mono text-[11px] text-ember">{m.role}</span>
              <h3 className="nx-display text-5xl sm:text-6xl">{m.name}</h3>
              <p className="nx-display !normal-case text-xl sm:text-2xl !tracking-[-0.02em] !leading-tight text-bone/90">{m.quote}</p>
              <p className="text-bone-dim leading-relaxed">{m.bio}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {m.tags.map((t) => (
                  <span key={t} className="nx-mono text-[10px] border border-bone/20 rounded-full px-3 py-1.5">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="nx-mono text-[11px] text-bone-dim text-center">DIRECT PARTNERSHIP &bull; 0 MIDDLEMEN &bull; ZERO OUTSOURCING</p>
      </section>

      {/* ============================================================ */}
      {/* 05 TESTIMONIALS                                              */}
      {/* ============================================================ */}
      <section id="testimonials" className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-10 py-24 lg:py-36 border-t border-bone/10 flex flex-col gap-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className={`${sectionLabel} flex-wrap`}>
              <span className="text-ember">(05)</span>
              <span>CLIENT TESTIMONIALS &bull; FOUNDER ENDORSEMENTS</span>
            </div>
            <h2 className="nx-display text-[clamp(28px,4.5vw,82px)]">
              <Rise>PROOF IN</Rise>
              <Rise delay={120}>
                <span className="text-ember">PRODUCTION.</span>
              </Rise>
            </h2>
          </div>
          <p className="lg:col-span-4 text-bone-dim leading-relaxed">
            Real feedback from startup founders and operators who trusted us to build and engineer their core digital systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              stars: "★★★★★",
              tag: "VERIFIED FOUNDER",
              quote: "“NeedHelpBuilding turned our concept into a high-performance web platform in record time. Their architectural clarity, speed of execution, and attention to user flow made a massive impact on our early traction.”",
              name: "JAY AGRAWAL",
              role: "CO-FOUNDER @ GANGES",
              initials: "G",
              v: 1,
            },
            {
              stars: "★★★★★",
              tag: "CO-FOUNDER PARTNER",
              quote: "“Partnering with them gave us the technical muscle of an elite engineering team without the startup friction. From intuitive UI/UX design to rock-solid automations, they delivered exactly what Earnbuddy needed to scale.”",
              name: "ARINJAY SAXENA",
              role: "CO-FOUNDER @ EARNBUDDY",
              initials: "EB",
              v: 2,
            },
          ].map((t) => (
            <ShaderCard key={t.name} variant={t.v} className="min-h-[460px]" innerClassName="!p-8 sm:!p-12 justify-between gap-10">
              <div className="flex items-center justify-between">
                <span className="text-ember tracking-[0.3em] text-lg">{t.stars}</span>
                <span className="nx-mono text-[10px] border border-bone/25 rounded-full px-3 py-1.5">{t.tag}</span>
              </div>
              <p className="nx-display !normal-case !tracking-[-0.025em] !leading-[1.08] text-2xl sm:text-3xl !font-semibold text-bone">{t.quote}</p>
              <div className="flex items-center gap-4">
                <span className="w-14 h-14 rounded-full bg-ember text-ink flex items-center justify-center nx-display text-lg">{t.initials}</span>
                <div className="flex flex-col gap-1">
                  <span className="nx-display text-xl">{t.name}</span>
                  <span className="nx-mono text-[10px] text-bone-dim">{t.role}</span>
                </div>
              </div>
            </ShaderCard>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 06 REFERRAL                                                  */}
      {/* ============================================================ */}
      <section id="referral" className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-10 py-24 lg:py-36 border-t border-bone/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div className={`${sectionLabel} flex-wrap`}>
            <span className="text-ember">(06)</span>
            <span>EXCLUSIVE TO PREVIOUS &amp; EXISTING CLIENTS</span>
          </div>
          <h3 className="nx-display text-[clamp(26px,4vw,70px)]">
            <Rise>CLIENT REFERRAL</Rise>
            <Rise delay={100}>SCHEME:</Rise>
            <Rise delay={200}>
              <span className="text-ember">10% FOR BOTH SIDES.</span>
            </Rise>
          </h3>
          <p className="text-bone-dim text-base sm:text-lg leading-relaxed max-w-xl">
            If you’ve built with us before, introduce another founder or business to NeedHelpBuilding. When they initiate a project, <strong className="text-bone underline decoration-ember underline-offset-4">they get 10% off</strong> their total scope, and <strong className="text-bone underline decoration-ember underline-offset-4">you receive 10% direct cash commission</strong> or credit towards your next build.
          </p>
          <a
            href="mailto:hello@needhelpbuilding.com?subject=Client%20Referral%20Introduction&body=Hi%20NeedHelpBuilding%20Team%2C%0A%0AI%20am%20an%20existing%2Fpast%20client%20and%20would%20like%20to%20refer%20a%20friend%2Fbusiness%3A%0A%0AMy%20Name%20%2F%20Company%3A%20%0AReferred%20Founder's%20Name%3A%20%0AReferred%20Founder's%20Email%20or%20WhatsApp%3A%20%0AProject%20they%20need%20built%3A%20"
            className="nx-btn nx-btn-solid w-fit"
          >
            INTRODUCE A CLIENT VIA EMAIL
          </a>
        </div>

        <div className="lg:col-span-6">
          <ShaderCard variant={0} className="min-h-[420px]" innerClassName="!p-8 sm:!p-12 justify-between">
            <div className="flex items-center justify-between nx-mono text-[11px] text-bone/80">
              <span>REFERRAL PERK TICKET</span>
              <span>REFERRAL DATA</span>
            </div>
            <div className="nx-display text-[clamp(56px,9vw,140px)] text-ember leading-none">10% + 10%</div>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-dashed border-bone/30">
              <div className="flex flex-col gap-1">
                <span className="nx-display text-2xl sm:text-3xl">10% OFF</span>
                <span className="nx-mono text-[10px] text-bone-dim">THEIR PROJECT</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="nx-display text-2xl sm:text-3xl">10% CASH</span>
                <span className="nx-mono text-[10px] text-bone-dim">OR CREDIT TO YOU</span>
              </div>
            </div>
          </ShaderCard>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT / FOOTER                                             */}
      {/* ============================================================ */}
      <footer id="contact" className="w-full bg-ember text-ink px-5 sm:px-10 pt-20 sm:pt-28 pb-8 flex flex-col gap-20 min-h-[100vh] justify-between">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col gap-10">
          <span className="nx-mono text-xs border border-ink/40 rounded-full px-4 py-2 w-fit">READY TO SCALE AUTOMATICALLY?</span>
          <h2 className="nx-display text-ink text-[clamp(34px,8vw,150px)]">
            <Rise>LET&apos;S BUILD YOUR</Rise>
            <Rise delay={140}>SYSTEMS.</Rise>
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <p className="max-w-xl text-base sm:text-lg leading-relaxed font-medium">
              Tell us what you want to build or automate. We will review your requirements, design the architecture, and get your project into development immediately.
            </p>
            <button
              data-cal-namespace="needhelpbuilding"
              data-cal-link="need-help-building/needhelpbuilding"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="nx-btn bg-ink text-bone hover:bg-bone hover:text-ink !py-5 !px-9 !text-sm w-fit"
            >
              START YOUR PROJECT NOW
            </button>
          </div>
        </div>

        <div className="max-w-[1400px] w-full mx-auto pt-6 border-t border-ink/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <a href="mailto:hello@needhelpbuilding.com" className="nx-mono text-sm lowercase hover:underline cursor-pointer">
              hello@needhelpbuilding.com
            </a>
            <span className="opacity-40 select-none">•</span>
            <a href="https://wa.me/919219061093" target="_blank" rel="noreferrer" className="nx-mono text-sm hover:underline cursor-pointer">
              +91 9219061093
            </a>
          </div>
          {/* Pure Social Icons: Instagram, LinkedIn, WhatsApp, X (Twitter) - No Text */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 text-ink">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="text-ink hover:opacity-75 transition-opacity cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="text-ink hover:opacity-75 transition-opacity cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919219061093"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
              className="text-ink hover:opacity-75 transition-opacity cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.77 14.07c-.24.67-1.39 1.28-1.92 1.36-.5.08-1.14.12-3.66-.92-3.22-1.33-5.3-4.57-5.46-4.78-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.35 1.11-2.67.29-.32.63-.4.84-.4.21 0 .42 0 .61.01.2.01.47-.08.73.55.27.67.92 2.25 1 2.41.08.16.13.35.03.56-.1.21-.15.34-.3.51-.15.17-.32.38-.46.51-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.17 1.38 2.48 1.53.31.15.49.13.67-.08.18-.21.79-.92 1-1.24.21-.32.42-.26.71-.16.29.1 1.84.87 2.16 1.03.32.16.53.24.61.37.08.13.08.77-.16 1.44z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              title="X (Twitter)"
              className="text-ink hover:opacity-75 transition-opacity cursor-pointer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

        </div>
      </footer>

      {/* ============================================================ */}
      {/* FULLSCREEN SERVICES DIRECTORY                                */}
      {/* ============================================================ */}
      {servicesFullscreenOpen && (
        <div role="dialog" aria-modal="true" aria-label="All Services Menu" className="fixed inset-0 z-[70] bg-ink overflow-y-auto animate-fadeIn">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-8 sm:py-12 flex flex-col gap-10">
            <div className="flex items-start justify-between gap-6 border-b border-bone/10 pb-6">
              <div className="flex flex-col gap-2">
                <span className="nx-mono text-[11px] text-ember">SERVICES DIRECTORY</span>
                <span className="nx-mono text-[11px] text-bone-dim">9 CORE CAPABILITIES • PRODUCTION-READY</span>
              </div>
              <button onClick={() => setServicesFullscreenOpen(false)} className="nx-btn nx-btn-ghost !py-2.5">
                <span>CLOSE</span>
                <span>✕</span>
              </button>
            </div>

            <div className="flex flex-col gap-5 max-w-3xl">
              <h2 className="nx-display text-[clamp(40px,7vw,112px)]">WHAT WE BUILD &amp; DELIVER</h2>
              <p className="text-bone-dim leading-relaxed">
                Select any service below to explore our comprehensive scope of work, technical architecture, delivery process, and proven ROI metrics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES_DATA.map((service, idx) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setServicesFullscreenOpen(false)}
                  className="group rounded-3xl border border-bone/10 bg-ink-2 hover:bg-ember hover:text-ink hover:border-ember p-6 sm:p-8 flex flex-col justify-between gap-8 transition-colors duration-500 min-h-[260px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="nx-mono text-[10px] text-bone-dim group-hover:text-ink/70">
                        0{idx + 1} // {service.category}
                      </span>
                      <span className="nx-mono text-[10px] border border-bone/20 group-hover:border-ink/40 rounded-full px-2.5 py-0.5">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="nx-display text-2xl sm:text-3xl leading-[0.95]">{service.title}</h3>
                    <p className="text-sm text-bone-dim group-hover:text-ink/80 mt-3 leading-relaxed">{service.shortDesc}</p>
                  </div>
                  <div className="flex items-center justify-between nx-mono text-[11px] pt-4 border-t border-bone/10 group-hover:border-ink/20">
                    <span>VIEW CASE &amp; SCOPE</span>
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="rounded-[32px] bg-ember text-ink p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="nx-display text-3xl sm:text-5xl leading-[0.95]">NEED A CUSTOM PROJECT OR COMBINED SCOPE?</h3>
                <p className="text-ink/85">Speak directly with our technical team in a 20-minute strategy call.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setServicesFullscreenOpen(false);
                    navigateToSection("#contact", "WORK WITH US");
                  }}
                  className="nx-btn bg-ink text-bone hover:bg-bone hover:text-ink"
                >
                  BOOK DISCOVERY CALL
                </button>
                <button onClick={() => setServicesFullscreenOpen(false)} className="nx-btn border border-ink/40 hover:bg-ink hover:text-bone">
                  BACK TO SITE [ESC]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
