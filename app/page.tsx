"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA } from "./services/services-data";

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
          light: { "cal-brand": "#f3ff15" },
          dark: { "cal-brand": "#ffe800" },
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
      color: "#fbda03",
      accent: "#0c0c0d",
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
      color: "#b3cde3",
      accent: "#0c0c0d",
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
      color: "#c59eb9",
      accent: "#0c0c0d",
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

  return (
    <main className="relative min-h-screen w-full bg-[#0c0c0d] text-white flex flex-col items-center justify-start selection:bg-[#fbda03] selection:text-black overflow-x-hidden">
      {/* ============================================================ */}
      {/* PERSISTENT FAINT BACKGROUND TEXTURE & MOVING GEOMETRICS       */}
      {/* ============================================================ */}
      {/* 1. Subtle Industrial Cross-Hatch / Diagonal Grid Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 40px),
                             repeating-linear-gradient(-45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 40px)`,
          backgroundSize: '56px 56px'
        }}
        aria-hidden="true"
      />

      {/* 2. Floating Faint Geometric Shapes (Slow Ambient Drift) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Yellow Wireframe Diamond */}
        <div className="absolute top-[18%] left-[4%] w-32 h-32 border-[2px] border-[#fbda03] opacity-20 rotate-45 animate-bg-drift" />
        
        {/* Soft Violet Hexagon Accent */}
        <div className="absolute top-[48%] right-[6%] w-48 h-48 border-[2px] border-[#c59eb9] opacity-15 rounded-[24px] rotate-12 animate-bg-drift-rev" />

        {/* Faint Blue Circular Dashed Orbit */}
        <div className="absolute bottom-[22%] left-[10%] w-60 h-60 border-[2.5px] border-dashed border-[#b3cde3] opacity-15 rounded-full animate-bg-drift" />

        {/* Small Yellow Accent Plus Marks */}
        <div className="absolute top-[75%] right-[18%] text-[#fbda03] opacity-25 font-anton text-4xl select-none animate-bg-drift-rev">
          +
        </div>
        <div className="absolute top-[32%] left-[48%] text-white opacity-15 font-anton text-3xl select-none animate-bg-drift">
          ×
        </div>
        <div className="absolute top-[88%] left-[35%] text-[#c59eb9] opacity-20 font-anton text-3xl select-none animate-bg-drift">
          +
        </div>
      </div>

      {/* ============================================================ */}
      {/* INDUSTRY-GRADE FULLSCREEN SECTION WIPE CURTAIN TRANSITION   */}
      {/* ============================================================ */}
      {isTransitioning && (
        <div
          className={`fixed inset-0 z-[100] bg-[#fbda03] flex flex-col items-center justify-center p-8 border-y-[12px] border-black pointer-events-none select-none ${transitionPhase === "in"
              ? "animate-curtain-wipe-in"
              : "animate-curtain-wipe-out"
            }`}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest bg-black text-[#fbda03] px-4 py-1 border-[2.5px] border-black">
              NEED HELP BUILDING?
            </span>
            <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl text-black uppercase tracking-tight leading-none">
              {wipeTitle || "INITIALIZING..."}
            </h2>
            <div className="w-24 h-1.5 bg-black mt-2" />
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* FAT BOLD STICKY NAVIGATION BAR (NO BOTTOM BORDER)            */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-50 w-full bg-[#0c0c0d] px-4 sm:px-8 lg:px-12 py-3 sm:py-4 flex items-center justify-between border-b border-white/10">
        {/* Large Bold Brand Wordmark (Clean Text Only) */}
        <div className="flex items-center min-w-0">
          <a
            href="#"
            className="flex items-center group cursor-pointer select-none"
            aria-label="Need Help Building Home"
          >
            <span className="font-anton text-white text-lg xs:text-xl sm:text-3xl lg:text-4xl tracking-tight leading-none uppercase group-hover:text-[#fbda03] transition-colors whitespace-nowrap">
              NEED HELP BUILDING<span className="text-[#fbda03]">?</span>
            </span>
          </a>
        </div>

        {/* Fatter Bold Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* DEDICATED HOVER MEGA DROPDOWN MENU FOR SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setServicesMegaMenuOpen(true)}
            onMouseLeave={() => setServicesMegaMenuOpen(false)}
          >
            <button
              onClick={() => setServicesMegaMenuOpen(!servicesMegaMenuOpen)}
              className="font-anton text-base xl:text-lg tracking-wider uppercase flex items-center gap-2 text-white hover:text-[#fbda03] transition-colors cursor-pointer py-2"
              aria-expanded={servicesMegaMenuOpen}
              aria-label="Toggle all services menu"
            >
              <span>SERVICES</span>
              <span className={`text-xs transition-transform duration-200 ${servicesMegaMenuOpen ? "rotate-180 text-[#fbda03]" : ""}`}>
                ▼
              </span>
            </button>
          </div>

          {[
            { label: "WORK", href: "#case-studies" },
            { label: "STARTUPS & CTO", href: "#startups-cto" },
            { label: "TEAM", href: "#team" },
            { label: "TESTIMONIALS", href: "#testimonials" },
            { label: "REFERRAL [10%]", href: "#referral" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setServicesMegaMenuOpen(false);
                navigateToSection(item.href, item.label);
              }}
              className="font-anton text-base xl:text-lg tracking-wider uppercase text-white hover:text-[#fbda03] transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Big Bold Eye Asset & Action */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <button
            data-cal-namespace="needhelpbuilding"
            data-cal-link="need-help-building/needhelpbuilding"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="hidden sm:inline-block bg-[#fbda03] text-black border-[3px] border-black px-5 py-2 font-anton text-sm sm:text-base uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
          >
            LET&apos;S TALK
          </button>

          {/* LARGE PROMINENT ILLUMINATING EYE ASSET */}
          <div className="relative w-14 xs:w-16 sm:w-20 h-7 xs:h-8 sm:h-10 flex items-center justify-center select-none pointer-events-none">
            <div className="relative w-14 xs:w-16 sm:w-20 h-7 xs:h-8 sm:h-10 bg-white rounded-[50%] border-[2px] sm:border-[2.5px] border-black flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_0px_#fbda03]">
              <div className="relative w-6 xs:w-7 sm:w-9 h-6 xs:h-7 sm:h-9 bg-[#c59eb9] rounded-full border-[1.5px] sm:border-[2px] border-black flex items-center justify-center animate-eye-pupil">
                <svg
                  viewBox="0 0 24 24"
                  className="w-3 xs:w-3.5 sm:w-4.5 h-3 xs:h-3.5 sm:h-4.5 fill-black animate-star-spin"
                >
                  <path d="M12 0 C12 6 6 12 0 12 C6 12 12 18 12 24 C12 18 18 12 24 12 C18 12 12 6 12 0 Z" />
                </svg>
              </div>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-black font-anton text-xs xs:text-sm uppercase bg-[#fbda03] border-[2px] sm:border-[2.5px] border-black px-3 py-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#fff]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* ============================================================ */}
      {/* DEDICATED FULL-SPECTRUM SERVICES MEGA MENU (DESKTOP MODAL)   */}
      {/* ============================================================ */}
      {servicesMegaMenuOpen && (
        <div
          onMouseEnter={() => setServicesMegaMenuOpen(true)}
          onMouseLeave={() => setServicesMegaMenuOpen(false)}
          className="fixed inset-x-0 top-[65px] sm:top-[74px] z-40 bg-[#0c0c0d] border-b-[5px] border-[#fbda03] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] max-h-[85vh] overflow-y-auto transition-all animate-fadeIn"
        >
          {/* Halftone texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10 flex flex-col gap-8 relative z-10">
            {/* Header / Intro */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-[2.5px] border-white/15 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#fbda03] text-black px-3 py-1 font-anton text-xs sm:text-sm uppercase tracking-wider mb-2">
                  FULL-SPECTRUM TECHNICAL CAPABILITIES // 9 DEDICATED DOMAINS
                </div>
                <h3 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-white">
                  EVERYTHING WE BUILD, AUTOMATE & SCALE
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/919219061093?text=Hi%20NeedHelpBuilding%20team%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#fbda03] text-black border-[2px] border-black px-4 py-2 font-anton text-xs sm:text-sm uppercase tracking-wider hover:bg-white transition-colors"
                >
                  DISCUSS REQUIREMENTS NOW
                </a>
                <button
                  onClick={() => setServicesMegaMenuOpen(false)}
                  className="bg-white/10 hover:bg-white hover:text-black border border-white/20 px-3 py-2 font-anton text-xs uppercase text-white transition-colors cursor-pointer"
                >
                  CLOSE [ESC]
                </button>
              </div>
            </div>

            {/* 9 Services Grid (3x3 on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {SERVICES_DATA.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setServicesMegaMenuOpen(false)}
                  className="group bg-[#18181b] hover:bg-[#fbda03] border-[2.5px] border-white/20 hover:border-black p-5 flex flex-col justify-between gap-4 transition-all duration-150 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.9)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] font-black uppercase tracking-wider text-gray-400 group-hover:text-black/80">
                        0{index + 1} // {service.category}
                      </span>
                      <span className="bg-white/10 group-hover:bg-black text-white group-hover:text-[#fbda03] font-anton text-[10px] px-2 py-0.5 border border-white/20 group-hover:border-black uppercase">
                        {service.badge}
                      </span>
                    </div>

                    <h4 className="font-anton text-xl sm:text-2xl uppercase tracking-tight text-white group-hover:text-black leading-tight">
                      {service.title}
                    </h4>

                    <p className="text-xs font-semibold text-gray-300 group-hover:text-black/90 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 group-hover:border-black/20 flex items-center justify-between font-anton text-xs uppercase tracking-wider text-[#fbda03] group-hover:text-black">
                    <span>VIEW DEDICATED SPECIFICS</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom quick banner inside mega menu */}
            <div className="bg-[#18181b] border-[2px] border-white/10 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-xs text-gray-300">
                ⚡ Not sure which service matches your exact workflow? We configure hybrid end-to-end architectures.
              </span>
              <button
                data-cal-namespace="needhelpbuilding"
                data-cal-link="need-help-building/needhelpbuilding"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                onClick={() => setServicesMegaMenuOpen(false)}
                className="bg-white text-black font-anton text-xs uppercase px-4 py-2 border border-black hover:bg-[#fbda03] transition-colors shrink-0"
              >
                SCHEDULE ARCHITECTURAL AUDIT
              </button>
            </div>
          </div>
        </div>
      )}


      {/* FULLSCREEN BRUTALIST MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#0c0c0d] flex flex-col justify-between p-6 border-[8px] border-[#fbda03]">
          <div className="flex items-center justify-between border-b-[3px] border-white/20 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-anton text-2xl tracking-wider text-[#fbda03]">
                NEED HELP BUILDING?
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white text-black font-anton text-sm px-4 py-1.5 border-[2px] border-black shadow-[3px_3px_0px_0px_#fbda03] cursor-pointer"
            >
              CLOSE [X]
            </button>
          </div>

          <div className="flex flex-col gap-3 my-auto overflow-y-auto max-h-[60vh] pr-1">
            <div className="bg-[#fbda03] text-black p-3 border-[2.5px] border-black">
              <span className="font-anton text-lg uppercase block mb-2">SERVICES & SPECIALIZATIONS</span>
              <div className="grid grid-cols-1 gap-1.5">
                {SERVICES_DATA.map((srv) => (
                  <Link
                    key={srv.slug}
                    href={`/services/${srv.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-mono font-black uppercase text-black hover:underline flex items-center justify-between py-1 border-b border-black/20"
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
                className="font-anton text-2xl sm:text-3xl text-left py-2.5 px-4 border-[3px] border-black bg-[#18181b] text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t-[3px] border-white/20 pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateToSection("#contact", "WORK WITH US");
              }}
              className="w-full bg-[#fbda03] text-black font-anton text-center py-3 text-base border-[2px] border-black uppercase cursor-pointer"
            >
              BOOK A DISCOVERY CALL
            </button>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* FULLSCREEN SECTION 1: HERO                                   */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[calc(100vh-90px)] flex flex-col justify-between overflow-hidden p-4 sm:p-8 lg:p-12">

        {/* Halftone/grain background overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px]" />

        {/* Background Ribbons from Original Design */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            className="animate-ribbon-yellow"
            d="M 600 280 C 850 70 1200 40 1320 220 C 1440 380 1200 520 1500 680"
            stroke="#fbda03"
            strokeWidth="90"
            strokeLinecap="round"
            fill="none"
          />
          <path
            className="animate-ribbon-blue"
            d="M -60 520 C 350 400 150 820 480 800 C 600 790 580 680 440 660"
            stroke="#9bb8d3"
            strokeWidth="80"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* HERO TITLE SECTION - SIGN BOARD WITH READABLE RODS & CORNER BOLTS */}
        <div className="relative z-10 my-auto py-8 flex flex-col items-center justify-center max-w-6xl mx-auto w-full">

          {/* INDUSTRIAL OVERHEAD MOUNTING CEILING BEAM */}
          <div className="w-full flex justify-between px-[10%] sm:px-[16%] md:px-[20%] mb-1 select-none pointer-events-none z-20">
            {/* Left Top Ceiling Bracket */}
            <div className="flex flex-col items-center">
              <div className="w-8 sm:w-10 h-3 bg-black border-2 border-white/60 shadow-[2px_2px_0_0_#fbda03]" />
              <div className="w-4 h-4 rounded-full bg-white border-[2px] border-black flex items-center justify-center -mt-1 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
              </div>
            </div>

            {/* Right Top Ceiling Bracket */}
            <div className="flex flex-col items-center">
              <div className="w-8 sm:w-10 h-3 bg-black border-2 border-white/60 shadow-[2px_2px_0_0_#fbda03]" />
              <div className="w-4 h-4 rounded-full bg-white border-[2px] border-black flex items-center justify-center -mt-1 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
              </div>
            </div>
          </div>

          {/* TWO VERTICAL SUSPENDED HANGING CHAINS / RODS FROM CEILING TO SIGN */}
          {/* Left Hanging Chain */}
          <div
            className="absolute left-[12%] sm:left-[16%] md:left-[20%] top-3 h-12 sm:h-16 w-3 sm:w-3.5 z-10 pointer-events-none flex flex-col items-center justify-between"
            aria-hidden="true"
          >
            <div className="w-full h-full bg-[#fbda03] border-[2px] border-black shadow-[2px_2px_0_0_#000] [background-image:repeating-linear-gradient(0deg,#000,#000_3px,transparent_3px,transparent_10px)]" />
          </div>

          {/* Right Hanging Chain */}
          <div
            className="absolute right-[12%] sm:right-[16%] md:right-[20%] top-3 h-12 sm:h-16 w-3 sm:w-3.5 z-10 pointer-events-none flex flex-col items-center justify-between"
            aria-hidden="true"
          >
            <div className="w-full h-full bg-[#fbda03] border-[2px] border-black shadow-[2px_2px_0_0_#000] [background-image:repeating-linear-gradient(0deg,#000,#000_3px,transparent_3px,transparent_10px)]" />
          </div>

          {/* SUSPENDED HANGING SIGN WITH GENTLE SWAY ANIMATION */}
          <div className="w-full relative z-10 mt-6 sm:mt-10 animate-hanging-sign">
          {/* Left & Right Hanging Eyebolts on Sign Top Edge */}
          <div className="absolute -top-3.5 left-[12%] sm:left-[16%] md:left-[20%] -translate-x-1/2 w-5 h-5 rounded-full bg-[#fbda03] border-[2.5px] border-black flex items-center justify-center z-30 shadow-[1px_1px_0_0_#000]">
            <div className="w-2 h-2 rounded-full bg-black" />
          </div>
          <div className="absolute -top-3.5 right-[12%] sm:right-[16%] md:right-[20%] translate-x-1/2 w-5 h-5 rounded-full bg-[#fbda03] border-[2.5px] border-black flex items-center justify-center z-30 shadow-[1px_1px_0_0_#000]">
            <div className="w-2 h-2 rounded-full bg-black" />
          </div>

          {/* Signboard Top Panel: NEED HELP */}
          <div className="relative w-full bg-white text-black border-[4px] border-black px-4 sm:px-8 py-2 sm:py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10">
            {/* Flat Brutalist Screws (Top corners) */}
            <div className="absolute top-2.5 left-3 sm:left-4 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-2 h-[1.5px] bg-black rotate-45" />
            </div>
            <div className="absolute top-2.5 right-3 sm:right-4 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-2 h-[1.5px] bg-black -rotate-45" />
            </div>

            {/* Screws at mounting rod intersections */}
            <div className="hidden sm:flex absolute top-2.5 left-[16%] md:left-[20%] -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#fbda03] border-[2px] border-black items-center justify-center">
              <div className="w-1.5 h-[1.5px] bg-black rotate-90" />
            </div>
            <div className="hidden sm:flex absolute top-2.5 right-[16%] md:right-[20%] translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#fbda03] border-[2px] border-black items-center justify-center">
              <div className="w-1.5 h-[1.5px] bg-black" />
            </div>

            <h1 className="font-anton text-[44px] xs:text-[52px] sm:text-[105px] lg:text-[140px] leading-[0.88] tracking-[-0.02em] uppercase text-center select-none">
              NEED HELP
            </h1>
          </div>

          {/* Signboard Bottom Panel: BUILDING? */}
          <div className="relative w-full bg-white text-black border-x-[4px] border-b-[4px] border-black px-4 sm:px-8 py-2 sm:py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10">
            {/* Flat Brutalist Screws (Bottom corners) */}
            <div className="absolute bottom-2.5 left-3 sm:left-4 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-2 h-[1.5px] bg-black -rotate-45" />
            </div>
            <div className="absolute bottom-2.5 right-3 sm:right-4 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-2 h-[1.5px] bg-black rotate-45" />
            </div>

            {/* Screws at mounting rod intersections */}
            <div className="hidden sm:flex absolute bottom-2.5 left-[16%] md:left-[20%] -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#fbda03] border-[2px] border-black items-center justify-center">
              <div className="w-1.5 h-[1.5px] bg-black rotate-90" />
            </div>
            <div className="hidden sm:flex absolute bottom-2.5 right-[16%] md:right-[20%] translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#fbda03] border-[2px] border-black items-center justify-center">
              <div className="w-1.5 h-[1.5px] bg-black" />
            </div>

            <h2 className="font-anton text-[42px] xs:text-[50px] sm:text-[98px] lg:text-[132px] leading-[0.85] tracking-[-0.01em] uppercase text-center flex items-center justify-center select-none">
              BUILDIN
              <span className="inline-block relative">
                G
                <span className="absolute -inset-1 text-black opacity-30 select-none pointer-events-none scale-105 font-pixel">
                  G
                </span>
              </span>
              ?
            </h2>
          </div>

          {/* Blue Signboard Pill (Attached to vertical rods with mounting screws) */}
          <div className="relative mt-5 sm:mt-8 z-20 select-none pointer-events-none max-w-full">
            <div className="relative bg-[#b3cde3] border-[3.5px] border-black rounded-full px-5 sm:px-14 py-2 sm:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-1.5deg]">
              {/* Screws on blue signboard pill */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-5 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-1.5 sm:w-2 h-[1.5px] bg-black rotate-45" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-5 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-1.5 sm:w-2 h-[1.5px] bg-black -rotate-45" />
              </div>

              <span className="font-archivo text-[13px] xs:text-[15px] sm:text-[30px] tracking-wider uppercase text-black font-extrabold text-center block">
                WEBSITES • WEB DESIGN • AUTOMATIONS • SYSTEMS
              </span>
            </div>
          </div>
          </div> {/* End Suspended Hanging Sign */} 

          <p className="mt-8 text-center text-gray-300 text-sm sm:text-lg max-w-3xl font-medium tracking-wide z-10">
            We build websites, custom web designs, business automations, and intelligent digital systems. From high-converting storefronts and custom web applications to automated operations that run your business on autopilot.
          </p>
        </div>

        {/* HERO LOWER BAR */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 pt-6">
          <button
            onClick={() => setServicesFullscreenOpen(true)}
            aria-label="Open services menu"
            className="group flex items-center justify-center gap-3 bg-white hover:bg-[#fbda03] text-black border-[3.5px] border-black px-6 sm:px-8 py-3.5 font-anton text-xl sm:text-2xl uppercase tracking-wider active:translate-x-1 active:translate-y-1 transition-all cursor-pointer w-full sm:w-auto"
          >
            <span>VIEW SERVICES</span>
            <span className="font-mono text-xl font-bold group-hover:rotate-45 transition-transform duration-200">
              ↗
            </span>
          </button>

          <button
            onClick={() => navigateToSection("#contact", "WORK WITH US")}
            className="w-full sm:w-auto min-w-[200px] sm:min-w-[240px] bg-white text-black border-[3.5px] border-black py-3.5 px-8 active:translate-x-1 active:translate-y-1 hover:bg-[#fbda03] transition-colors cursor-pointer text-center"
          >
            <span className="font-anton text-xl sm:text-2xl leading-tight tracking-normal uppercase block">
              {isBooked ? "WE GOT YOUR SPOT!" : "BOOK NOW"}
            </span>
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TICKER MARQUEE BAR                                           */}
      {/* ============================================================ */}
      <div className="w-full bg-[#fbda03] text-black border-b-[5px] border-black py-3 overflow-hidden whitespace-nowrap select-none font-anton text-2xl tracking-wider flex items-center shadow-lg">
        <div className="animate-marquee flex items-center gap-8">
          {[
            "CUSTOM WEBSITES & WEB APPS",
            "•",
            "BESPOKE WEB DESIGN & UI/UX",
            "•",
            "END-TO-END BUSINESS AUTOMATIONS",
            "•",
            "HIGH-SPEED EDGE DEPLOYMENTS",
            "•",
            "ZERO-LATENCY API INTEGRATIONS",
            "•",
            "FRACTIONAL CTO FOR STARTUPS",
            "•",
            "HIGH-CONVERTING DIGITAL SYSTEMS",
            "•",
            "RAPID PROTOTYPING & EXECUTION",
            "•",
            "CUSTOM WEBSITES & WEB APPS",
            "•",
            "BESPOKE WEB DESIGN & UI/UX",
            "•",
            "END-TO-END BUSINESS AUTOMATIONS",
            "•",
            "HIGH-SPEED EDGE DEPLOYMENTS",
            "•",
            "ZERO-LATENCY API INTEGRATIONS",
            "•",
            "FRACTIONAL CTO FOR STARTUPS",
            "•",
            "HIGH-CONVERTING DIGITAL SYSTEMS",
            "•",
            "RAPID PROTOTYPING & EXECUTION",
            "•",
          ].map((text, i) => (
            <span key={i} className="cursor-default">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* SECTION 2: WHAT WE BUILD (CLEAN BRUTALIST PINBOARD)          */}
      {/* ============================================================ */}
      <section id="capabilities" className="relative w-full max-w-7xl px-4 sm:px-8 py-20 lg:py-28 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 border-[2.5px] border-black font-anton text-lg tracking-wide w-fit rotate-[-1deg]">
            OUR CORE CAPABILITIES
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-anton text-5xl sm:text-7xl leading-[0.9] uppercase tracking-tight">
              WEBSITES. BESPOKE DESIGNS. AUTOMATIONS.
            </h2>
            <button
              onClick={() => setServicesMegaMenuOpen(true)}
              className="bg-[#fbda03] text-black border-[3px] border-black px-5 py-2 font-anton text-sm uppercase tracking-wider hover:bg-white transition-colors cursor-pointer w-fit"
            >
              EXPLORE ALL 9 SERVICES MEGA MENU ↗
            </button>
          </div>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl font-medium">
            From award-winning web design and lightning-fast web applications to bespoke automations that run your entire back-office on autopilot. We turn complex ideas into live, revenue-generating digital realities.
          </p>
        </div>

        {/* BRUTALIST PINBOARD CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">

          <div className="relative bg-[#fbda03] text-black border-[3.5px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] rotate-[-1deg]">
            <div className="absolute -top-5 left-6">
              <svg width="24" height="28" viewBox="0 0 28 34" fill="none">
                <path d="M 5 6 C 5 2 23 2 23 6 C 23 10 20 12 20 18 C 24 20 25 24 25 25 L 3 25 C 3 24 4 20 8 18 C 8 12 5 10 5 6 Z" fill="#c59eb9" stroke="#000" strokeWidth="2.5" />
                <path d="M 14 25 L 11 33" stroke="#000" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-anton text-3xl">01</span>
            <h3 className="font-anton text-2xl uppercase mt-2 mb-2 leading-none">
              WEBSITES & WEB APPS
            </h3>
            <p className="text-xs font-semibold leading-relaxed text-black/85">
              Full-stack Next.js and React web applications built for speed, SEO domination, and effortless conversion. From interactive landing pages to high-scale SaaS products.
            </p>
            <div className="mt-4 pt-2 border-t border-black/30 font-anton text-xs tracking-wider">
              FLAGSHIP: YOURESTOREHERE
            </div>
          </div>

          <div className="relative bg-[#c59eb9] text-black border-[3.5px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] rotate-[1.5deg]">
            <div className="absolute -top-5 right-6">
              <svg width="24" height="28" viewBox="0 0 28 34" fill="none">
                <path d="M 5 6 C 5 2 23 2 23 6 C 23 10 20 12 20 18 C 24 20 25 24 25 25 L 3 25 C 3 24 4 20 8 18 C 8 12 5 10 5 6 Z" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
                <path d="M 14 25 L 11 33" stroke="#000" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-anton text-3xl">02</span>
            <h3 className="font-anton text-2xl uppercase mt-2 mb-2 leading-none">
              BESPOKE WEB DESIGN & UI/UX
            </h3>
            <p className="text-xs font-semibold leading-relaxed text-black/85">
              Bold, unforgettable aesthetics that refuse to blend into corporate mediocrity. Custom typography, micro-interactions, responsive design systems, and brutalist finesse.
            </p>
            <div className="mt-4 pt-2 border-t border-black/30 font-anton text-xs tracking-wider">
              STUDIO: CRAFT & BRANDING
            </div>
          </div>

          <div className="relative bg-[#b3cde3] text-black border-[3.5px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] rotate-[-1.5deg]">
            <div className="absolute -top-5 left-8">
              <svg width="24" height="28" viewBox="0 0 28 34" fill="none">
                <path d="M 5 6 C 5 2 23 2 23 6 C 23 10 20 12 20 18 C 24 20 25 24 25 25 L 3 25 C 3 24 4 20 8 18 C 8 12 5 10 5 6 Z" fill="#fbda03" stroke="#000" strokeWidth="2.5" />
                <path d="M 14 25 L 11 33" stroke="#000" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-anton text-3xl">03</span>
            <h3 className="font-anton text-2xl uppercase mt-2 mb-2 leading-none">
              BUSINESS AUTOMATIONS
            </h3>
            <p className="text-xs font-semibold leading-relaxed text-black/85">
              Eliminate repetitive human work. Automated lead capture, CRM syncing, AI telephone triage, invoicing pipelines, and instant customer notifications that never sleep.
            </p>
            <div className="mt-4 pt-2 border-t border-black/30 font-anton text-xs tracking-wider">
              FLAGSHIP: CALLER.WORK
            </div>
          </div>

          <div className="relative bg-white text-black border-[3.5px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] rotate-[1deg]">
            <div className="absolute -top-5 right-8">
              <svg width="24" height="28" viewBox="0 0 28 34" fill="none">
                <path d="M 5 6 C 5 2 23 2 23 6 C 23 10 20 12 20 18 C 24 20 25 24 25 25 L 3 25 C 3 24 4 20 8 18 C 8 12 5 10 5 6 Z" fill="#c59eb9" stroke="#000" strokeWidth="2.5" />
                <path d="M 14 25 L 11 33" stroke="#000" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-anton text-3xl">04</span>
            <h3 className="font-anton text-2xl uppercase mt-2 mb-2 leading-none">
              CUSTOM DIGITAL SYSTEMS
            </h3>
            <p className="text-xs font-semibold leading-relaxed text-black/85">
              Custom integrations, AI copilots, payment setups, database syncing, and specialized tooling tailored to your business needs without vendor lock-in.
            </p>
            <div className="mt-4 pt-2 border-t border-black/30 font-anton text-xs tracking-wider">
              FLAGSHIP: SOUS CHEF
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: IN-DEPTH CASE STUDIES (CLEAN & POWERFUL)          */}
      {/* ============================================================ */}
      <section id="case-studies" className="relative w-full max-w-7xl px-4 sm:px-8 py-20 lg:py-28 border-t-[4px] border-white/20 flex flex-col gap-10">

        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#fbda03] text-black px-3 py-1 border-[2.5px] border-black font-anton text-lg tracking-wide w-fit mb-3">
              FLAGSHIP CASE STUDIES
            </div>
            <h2 className="font-anton text-5xl sm:text-7xl uppercase tracking-tight">
              PROVEN SYSTEMS IN THE WILD
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <div className="flex sm:hidden items-center gap-1.5 mr-1">
              <button
                onClick={() => setActiveCaseStudy((activeCaseStudy - 1 + caseStudies.length) % caseStudies.length)}
                aria-label="Previous project"
                className="w-9 h-9 bg-[#fbda03] text-black border-[2px] border-black flex items-center justify-center font-bold cursor-pointer"
              >
                ◀
              </button>
              <button
                onClick={() => setActiveCaseStudy((activeCaseStudy + 1) % caseStudies.length)}
                aria-label="Next project"
                className="w-9 h-9 bg-[#fbda03] text-black border-[2px] border-black flex items-center justify-center font-bold cursor-pointer"
              >
                ▶
              </button>
            </div>

            {caseStudies.map((cs, idx) => (
              <button
                key={cs.id}
                onClick={() => setActiveCaseStudy(idx)}
                className={`px-3 sm:px-4 py-2 font-anton text-xs sm:text-sm uppercase tracking-wider border-[2.5px] border-black transition-colors cursor-pointer ${activeCaseStudy === idx
                  ? "bg-[#fbda03] text-black shadow-[4px_4px_0px_0px_#ffffff]"
                  : "bg-[#18181b] text-gray-300 hover:text-white hover:border-[#fbda03]"
                  }`}
              >
                {cs.name}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE RETINA LAPTOP OS WORKSTATION                    */}
        {/* ============================================================ */}
        {(() => {
          const cs = caseStudies[activeCaseStudy];
          return (
            <div className="relative w-full flex flex-col items-center">
              
              {/* LAPTOP CHASSIS & BEZEL */}
              <div className="w-full max-w-6xl flex flex-col items-center select-none">
                
                {/* 1. LAPTOP TOP DISPLAY ENCLOSURE */}
                <div className="relative w-full bg-[#121214] border-[4px] sm:border-[5px] border-black rounded-t-2xl sm:rounded-t-3xl pt-3 px-3 sm:pt-4 sm:px-4 pb-2 shadow-[12px_12px_0px_0px_rgba(251,218,3,1)]">
                  
                  {/* Top Display Bezel: Camera Notch & Sensors */}
                  <div className="w-full flex items-center justify-between pb-2.5 px-2">
                    {/* Window Controls */}
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56] border-[1.5px] border-black inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border-[1.5px] border-black inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f] border-[1.5px] border-black inline-block" />
                    </div>

                    {/* Centered Retina Webcam Assembly */}
                    <div className="flex items-center gap-2 bg-[#000] px-3 py-1 rounded-full border border-white/20 shadow-inner">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1e293b] border border-[#38bdf8] flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-[#0284c7]" />
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Machine Brand Badge */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-black uppercase tracking-wider text-black bg-[#fbda03] px-2 py-0.5 border border-black shadow-[1px_1px_0_0_#fff]">
                        NHB // STUDIO BOOK M3
                      </span>
                    </div>
                  </div>

                  {/* 2. LAPTOP ACTIVE OS SCREEN */}
                  <div className="relative w-full min-h-[560px] sm:min-h-[640px] lg:min-h-[680px] bg-[#0c0c0d] border-[3px] border-black rounded-lg overflow-hidden flex flex-col">
                    
                    {/* Top OS Menu Bar */}
                    <div className="w-full bg-[#1c1c1f] border-b-[2px] border-black px-3 py-1.5 flex items-center justify-between text-xs font-mono font-bold text-gray-300">
                      <div className="flex items-center gap-3 sm:gap-5">
                        <span className="text-[#fbda03] font-anton text-sm sm:text-base tracking-wider">
                          NHB.OS
                        </span>
                        <span className="hidden sm:inline text-white">File</span>
                        <span className="hidden sm:inline text-white">Edit</span>
                        <span className="hidden sm:inline text-white">View</span>
                        <span className="hidden md:inline text-white">Window</span>
                        <span className="text-gray-400">Project: <strong className="text-white uppercase">{cs.name}</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px]">
                        <span className="hidden sm:inline text-emerald-400">● ONLINE</span>
                        <span className="text-gray-400">BATTERY 100%</span>
                        <span className="bg-black/60 px-2 py-0.5 border border-white/10 text-white font-mono">
                          OCT 18 19:30
                        </span>
                      </div>
                    </div>

                    {/* WORKSTATION DESKTOP ENVIRONMENT */}
                    <div className="relative flex-1 bg-[#18181b] p-3 sm:p-6 flex flex-col justify-between overflow-hidden">
                      {/* Subtle desktop wallpaper pattern */}
                      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#fbda03_1px,transparent_1px)] [background-size:20px_20px]" />
                      
                      {/* TOP: APPLICATION TABS BAR (CHOOSE DIFFERENT BUILT APPLICATIONS) */}
                      <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                        <span className="font-mono text-xs font-black text-black bg-[#fbda03] px-2.5 py-1.5 border-[2px] border-black uppercase tracking-wider shrink-0 shadow-[2px_2px_0_0_#fff]">
                          SYSTEM APPS:
                        </span>
                        {caseStudies.map((item, idx) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setActiveCaseStudy(idx);
                              setActiveAppView("app");
                            }}
                            className={`px-3 sm:px-4 py-1.5 font-anton text-xs sm:text-sm uppercase tracking-wider border-[2px] border-black transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
                              activeCaseStudy === idx
                                ? "bg-white text-black shadow-[3px_3px_0px_0px_#fbda03] -translate-y-0.5"
                                : "bg-black/60 text-gray-300 hover:bg-black hover:text-white"
                            }`}
                          >
                            <span
                              className="w-2.5 h-2.5 rounded-full border border-black inline-block"
                              style={{ backgroundColor: item.color }}
                            />
                            <span>{item.name}</span>
                          </button>
                        ))}
                      </div>

                      {/* MIDDLE: THE APPLICATION WORKSTATION WINDOW */}
                      <div className="relative z-10 flex-1 my-3 bg-[#0c0c0d] border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden">
                        
                        {/* Application Window Title Bar + Dual File Selector */}
                        <div className="bg-[#27272a] border-b-[2.5px] border-black p-2 sm:px-4 flex flex-wrap items-center justify-between gap-2">
                          {/* Left: App Title and Status */}
                          <div className="flex items-center gap-2">
                            <span className="font-anton text-sm sm:text-base text-white tracking-wider uppercase">
                              {cs.name} // WORKSPACE
                            </span>
                            <span
                              className="text-[10px] font-mono font-black uppercase px-2 py-0.5 border border-black"
                              style={{ backgroundColor: cs.color, color: "#000" }}
                            >
                              {cs.badge}
                            </span>
                          </div>

                          {/* Center/Right: THE TWO REQUIRED FILES (APPLICATION & CASE STUDY.TXT) */}
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            {/* File 1: Application File */}
                            <button
                              onClick={() => setActiveAppView("app")}
                              className={`px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider border-[2px] border-black flex items-center gap-1.5 transition-all cursor-pointer ${
                                activeAppView === "app"
                                  ? "bg-[#fbda03] text-black shadow-[2px_2px_0px_0px_#000]"
                                  : "bg-[#18181b] text-gray-300 hover:text-white"
                              }`}
                            >
                              <span>⚡</span>
                              <span>{cs.name}.APP</span>
                            </button>

                            {/* File 2: Case Study.txt */}
                            <button
                              onClick={() => setActiveAppView("case-study")}
                              className={`px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider border-[2px] border-black flex items-center gap-1.5 transition-all cursor-pointer ${
                                activeAppView === "case-study"
                                  ? "bg-white text-black shadow-[2px_2px_0px_0px_#000]"
                                  : "bg-[#18181b] text-gray-300 hover:text-white"
                              }`}
                            >
                              <span>📄</span>
                              <span>CASE-STUDY.TXT</span>
                            </button>
                          </div>
                        </div>

                        {/* File Content Workspace */}
                        <div className="flex-1 p-3 sm:p-6 overflow-y-auto max-h-[460px] sm:max-h-[500px]">
                          
                          {/* VIEW 1: THE RUNNING APPLICATION VIEW */}
                          {activeAppView === "app" && (
                            <div className="w-full flex flex-col gap-6 animate-fadeIn">
                              {/* Application Live Bar */}
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#18181b] border-[2px] border-white/20 p-3 sm:px-4">
                                <div>
                                  <span className="font-mono text-xs text-gray-400 font-bold uppercase block">
                                    APPLICATION PREVIEW & REPOSITORY STATUS
                                  </span>
                                  <h4 className="font-anton text-xl sm:text-2xl text-white uppercase mt-0.5">
                                    {cs.headline}
                                  </h4>
                                </div>
                                <div>
                                  {cs.link ? (
                                    <a
                                      href={cs.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-2 bg-[#fbda03] hover:bg-white text-black border-[2px] border-black px-4 py-2 font-anton text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0_0_#000] transition-colors"
                                    >
                                      <span>OPEN LIVE APPLICATION</span>
                                      <span>↗</span>
                                    </a>
                                  ) : (
                                    <span className="inline-flex items-center gap-2 bg-black text-[#fbda03] border-[2px] border-black px-4 py-1.5 font-anton text-xs uppercase tracking-wider">
                                      <span className="w-2 h-2 rounded-full bg-[#fbda03] animate-ping" />
                                      <span>IN DEVELOPMENT PROTOTYPE</span>
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Application Interactive Frame / Mockup */}
                              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#050505] border-[3px] border-black rounded overflow-hidden flex items-center justify-center">
                                <Image
                                  src={cs.image}
                                  alt={`${cs.name} Screenshot`}
                                  fill
                                  className="object-cover object-top"
                                />

                                {/* Sous Chef Center Overlay */}
                                {cs.id === "sous-chef" && (
                                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 z-20">
                                    <div className="relative w-24 sm:w-32 h-12 sm:h-16 bg-white rounded-[50%] border-[3px] border-black flex items-center justify-center overflow-hidden shadow-[4px_4px_0_0_#fbda03]">
                                      <div className="relative w-10 sm:w-14 h-10 sm:h-14 bg-[#fbda03] rounded-full border-[2px] border-black flex items-center justify-center animate-eye-pupil">
                                        <svg viewBox="0 0 24 24" className="w-5 sm:w-7 h-5 sm:h-7 fill-black animate-star-spin">
                                          <path d="M12 0 C12 6 6 12 0 12 C6 12 12 18 12 24 C12 18 18 12 24 12 C18 12 12 6 12 0 Z" />
                                        </svg>
                                      </div>
                                    </div>
                                    <span className="mt-3 bg-black text-[#fbda03] font-anton text-xs sm:text-sm px-3 py-1 border border-[#fbda03] uppercase tracking-wider">
                                      SOUS CHEF KITCHEN OS // ACTIVE DEV
                                    </span>
                                  </div>
                                )}
                              </div>

                              {/* Deliverables quick grid */}
                              <div className="bg-[#18181b] border-[2px] border-black p-4">
                                <span className="font-mono text-xs font-bold text-[#fbda03] uppercase tracking-wider block mb-2">
                                  KEY APPLICATION MODULES DELIVERED:
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {cs.deliverables.map((del, i) => (
                                    <div key={i} className="flex items-start gap-2 text-xs font-bold text-gray-200">
                                      <span className="text-[#fbda03]">✓</span>
                                      <span>{del}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* VIEW 2: THE CASE STUDY.TXT FILE VIEW */}
                          {activeAppView === "case-study" && (
                            <div className="w-full bg-[#050505] text-[#34d399] border-[2.5px] border-black p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed shadow-inner animate-fadeIn">
                              <div className="flex items-center justify-between border-b border-emerald-900/50 pb-2 mb-4 text-[11px] text-gray-400">
                                <span>FILENAME: /case-studies/{cs.id}/CASE-STUDY.TXT</span>
                                <span>ENCODING: UTF-8 // VERIFIED</span>
                              </div>

                              <div className="flex flex-col gap-5 text-gray-300">
                                <div>
                                  <span className="text-[#fbda03] font-bold block mb-1">
                                    // 1. EXECUTIVE SUMMARY & OBJECTIVE:
                                  </span>
                                  <p className="text-white pl-3 border-l-2 border-[#fbda03]">
                                    {cs.name} — {cs.headline}. Target Domain: {cs.tag}. Production Status: {cs.statusNote}.
                                  </p>
                                </div>

                                <div>
                                  <span className="text-[#f87171] font-bold block mb-1">
                                    // 2. THE BOTTLENECK / CHALLENGE:
                                  </span>
                                  <p className="pl-3 border-l-2 border-[#f87171] text-gray-300">
                                    {cs.problem}
                                  </p>
                                </div>

                                <div>
                                  <span className="text-[#60a5fa] font-bold block mb-1">
                                    // 3. ARCHITECTURE & SOLUTION DEPLOYED:
                                  </span>
                                  <p className="pl-3 border-l-2 border-[#60a5fa] text-gray-300">
                                    {cs.solution}
                                  </p>
                                </div>

                                <div>
                                  <span className="text-[#fbda03] font-bold block mb-1">
                                    // 4. VERIFIED METRICS & PRODUCTION IMPACT:
                                  </span>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pl-3 pt-1">
                                    {cs.impactStats.map((stat, i) => (
                                      <div key={i} className="bg-black/60 border border-white/10 p-2.5">
                                        <div className="text-xl sm:text-2xl font-anton text-[#fbda03] leading-none">
                                          {stat.value}
                                        </div>
                                        <div className="text-[10px] text-gray-400 uppercase mt-1">
                                          {stat.label}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="pt-2 text-xs text-gray-400 border-t border-emerald-900/40 flex items-center justify-between">
                                  <span>STATUS: APPROVED FOR PRODUCTION DEPLOYMENT</span>
                                  <span className="text-[#fbda03]">END OF FILE</span>
                                </div>
                              </div>
                            </div>
                          )}

                        </div>
                      </div>

                      {/* BOTTOM: OS DOCK BAR */}
                      <div className="relative z-10 w-fit mx-auto bg-black/80 backdrop-blur-md border-[2px] border-white/20 rounded-2xl px-4 py-2 flex items-center gap-3 shadow-xl">
                        {caseStudies.map((item, idx) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setActiveCaseStudy(idx);
                              setActiveAppView("app");
                            }}
                            title={item.name}
                            className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl border-[2px] border-black flex items-center justify-center font-anton text-xs transition-all cursor-pointer ${
                              activeCaseStudy === idx
                                ? "scale-110 shadow-[0_0_12px_#fbda03]"
                                : "hover:scale-105 opacity-80"
                            }`}
                            style={{ backgroundColor: item.color, color: "#000" }}
                          >
                            <span>{item.name.slice(0, 2)}</span>
                            {activeCaseStudy === idx && (
                              <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-white shadow" />
                            )}
                          </button>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>

                {/* 3. LAPTOP DISPLAY HINGE */}
                <div className="w-[32%] sm:w-[28%] h-3 sm:h-4 bg-[#09090b] border-x-[3px] border-b-[3px] border-black -mt-[1px] rounded-b-md shadow-inner z-10" />

                {/* 4. LAPTOP LOWER CHASSIS & BASE KEYBOARD DECK */}
                <div className="relative w-[104%] sm:w-[106%] -mt-1 h-5 sm:h-6 bg-[#e4e4e7] border-[4px] border-black rounded-b-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
                  {/* Thumb opening groove */}
                  <div className="w-20 sm:w-28 h-2 sm:h-2.5 bg-[#71717a] border-x-[1.5px] border-b-[1.5px] border-black rounded-b-sm shadow-inner" />
                  {/* Highlights */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-white opacity-90" />
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 w-3 h-1 bg-black/40 rounded-full" />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 w-3 h-1 bg-black/40 rounded-full" />
                </div>

              </div>

            </div>
          );
        })()}
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: STARTUPS & AGENCY CTO (EQUITY PARTNERSHIP)        */}
      {/* ============================================================ */}
      <section id="startups-cto" className="relative w-full max-w-7xl px-4 sm:px-8 py-20 lg:py-28 flex flex-col gap-12 overflow-hidden">

        {/* Ambient Subtle Tech Watermark Asset: Silicon Microchip in Background */}
        <div className="absolute -right-8 top-12 opacity-10 pointer-events-none select-none hidden lg:block">
          <svg width="220" height="220" viewBox="0 0 90 90" fill="none">
            <rect x="18" y="18" width="54" height="54" rx="4" fill="#18181b" stroke="#fff" strokeWidth="2" />
            <rect x="28" y="28" width="34" height="34" rx="2" fill="#fbda03" stroke="#000" strokeWidth="2" />
            {[24, 34, 44, 54, 64].map((pos) => (
              <React.Fragment key={pos}>
                <line x1={pos} y1="8" x2={pos} y2="18" stroke="#fbda03" strokeWidth="2" />
                <line x1={pos} y1="72" x2={pos} y2="82" stroke="#fbda03" strokeWidth="2" />
                <line x1="8" y1={pos} x2="18" y2={pos} stroke="#fbda03" strokeWidth="2" />
                <line x1="72" y1={pos} x2="82" y2={pos} stroke="#fbda03" strokeWidth="2" />
              </React.Fragment>
            ))}
          </svg>
        </div>

        {/* Graffiti Street Tag Overlay in CTO section */}
        <div className="absolute top-12 left-6 pointer-events-none opacity-75 rotate-[-14deg] hidden sm:block select-none">
          <span className="font-pixel text-[#fbda03] text-sm tracking-widest bg-black px-2.5 py-1 border-2 border-black shadow-[3px_3px_0px_0px_#ff0055]">
            EQUITY // CTO CO-PILOT
          </span>
        </div>

        {/* Signboard Header Assembly */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">
          {/* Signboard Top Badge with Eye Asset */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative bg-[#fbda03] text-black border-[3px] border-black px-6 py-2 shadow-[5px_5px_0px_0px_#ffffff] rotate-[-1deg]">
              <span className="font-anton text-base sm:text-lg uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-black rounded-full animate-pulse" />
                AGENCY CTO &bull; EQUITY PARTNERSHIP PROGRAM
              </span>
            </div>

            {/* ILLUMINATING EYE ASSET IN STARTUP CTO */}
            <div className="relative w-14 sm:w-16 h-7 sm:h-8 hidden sm:flex items-center justify-center select-none pointer-events-none rotate-[-6deg]">
              <div className="relative w-14 sm:w-16 h-7 sm:h-8 bg-white rounded-[50%] border-[2px] border-black flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_0px_#fbda03]">
                <div className="relative w-5 h-5 bg-[#c59eb9] rounded-full border-[1.5px] border-black flex items-center justify-center animate-eye-pupil">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-black animate-star-spin">
                    <path d="M12 0 C12 6 6 12 0 12 C6 12 12 18 12 24 C12 18 18 12 24 12 C18 12 12 6 12 0 Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract Signboard Plaque with Flat Screws */}
          <div className="relative w-full bg-white text-black border-[4px] border-black px-4 sm:px-12 py-5 sm:py-8 shadow-[6px_6px_0px_0px_#fbda03] sm:shadow-[10px_10px_0px_0px_#fbda03]">
            {/* 4 Flat Corner Screws */}
            <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-1.5 sm:w-2 h-[1.5px] bg-black rotate-45" />
            </div>
            <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-1.5 sm:w-2 h-[1.5px] bg-black -rotate-45" />
            </div>
            <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-1.5 sm:w-2 h-[1.5px] bg-black -rotate-45" />
            </div>
            <div className="absolute bottom-2.5 sm:bottom-3 right-2.5 sm:right-3 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-1.5 sm:w-2 h-[1.5px] bg-black rotate-45" />
            </div>

            {/* Graffiti Crown on Plaque */}
            <div className="absolute -top-5 left-8 sm:left-14 rotate-[-12deg] select-none pointer-events-none">
              <svg width="48" height="32" viewBox="0 0 64 42" fill="none">
                <path
                  d="M 4 36 L 4 14 L 20 26 L 32 4 L 44 26 L 60 14 L 60 36 Z"
                  fill="#ff0055"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="font-anton text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.92] select-none">
              WE BECOME YOUR <span className="bg-[#fbda03] px-2 py-0.5 border-[2.5px] sm:border-[3px] border-black inline-block mt-1 sm:mt-0">TECHNICAL CO-FOUNDER</span> &amp; CTO.
            </h3>
          </div>

          {/* Under-signboard Abstract Pill */}
          <div className="relative -mt-3 sm:-mt-4 z-20 max-w-full">
            <div className="bg-[#b3cde3] border-[3px] border-black rounded-full px-4 sm:px-10 py-1.5 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[1.5deg]">
              <span className="font-archivo text-[10px] xs:text-xs sm:text-base tracking-wider uppercase text-black font-extrabold text-center block">
                ZERO UPFRONT TECH RISK &bull; SPLIT RUNWAY &bull; SHARED EQUITY
              </span>
            </div>
          </div>
        </div>

        {/* Abstract Main Layout: Interactive Split Screen */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">

          {/* Left Column (7 cols): The Architecture Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="bg-[#18181b] border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#fbda03] flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#fbda03] font-bold">
                  CO-FOUNDER OPERATING MODEL
                </span>
                <span className="font-anton text-xs uppercase px-2 py-0.5 bg-white text-black border border-black">
                  ACTIVE
                </span>
              </div>

              <p className="font-archivo text-xl sm:text-2xl uppercase tracking-tight text-white leading-tight font-extrabold">
                You bring the market vision and customer distribution. We engineer the entire tech apparatus, from high-converting frontends to autonomous backend infrastructure.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                Instead of bleeding seed money on unreliable freelance contractors or taking 8 months to hire a CTO, our elite agency team steps in as your dedicated in-house technical co-founder. We split development costs and align long-term incentives via an agreed equity percentage.
              </p>
            </div>

            {/* 3 Abstract Ticket Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  num: "01",
                  title: "EQUITY SHARE",
                  desc: "We invest our engineering capabilities directly for skin in the game. True alignment.",
                  bg: "bg-white text-black",
                  tag: "#fbda03",
                },
                {
                  num: "02",
                  title: "COST SPLIT",
                  desc: "Shared operational expenditure ensures you extend runway without compromising code quality.",
                  bg: "bg-[#fbda03] text-black",
                  tag: "#000000",
                },
                {
                  num: "03",
                  title: "FULL STACK",
                  desc: "Web apps, internal tooling, edge databases, UI/UX, and AI automations fully managed.",
                  bg: "bg-[#b3cde3] text-black",
                  tag: "#ffffff",
                },
              ].map((p) => (
                <div
                  key={p.num}
                  className={`${p.bg} border-[3.5px] border-black p-4 flex flex-col justify-between shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] relative`}
                >
                  {/* Top pin icon */}
                  <div className="flex items-center justify-between border-b border-black/20 pb-2 mb-3">
                    <span className="font-mono font-black text-xs">{p.num}. PILLAR</span>
                    <div className="w-2.5 h-2.5 rounded-full border border-black" style={{ backgroundColor: p.tag }} />
                  </div>
                  <div>
                    <h4 className="font-anton text-xl tracking-wide uppercase block mb-1">
                      {p.title}
                    </h4>
                    <p className="text-xs font-semibold leading-snug opacity-90">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Sunday Pitch Session Ticket */}
          <div className="lg:col-span-5 relative flex flex-col">
            {/* Decorative Pin on Pitch Card */}
            <div className="absolute -top-6 right-8 z-30 animate-pin-wiggle origin-bottom">
              <svg width="28" height="34" viewBox="0 0 28 34" fill="none">
                <path
                  d="M 5 6 C 5 2 23 2 23 6 C 23 10 20 12 20 18 C 24 20 25 24 25 25 L 3 25 C 3 24 4 20 8 18 C 8 12 5 10 5 6 Z"
                  fill="#fbda03"
                  stroke="#000"
                  strokeWidth="2.5"
                />
                <path d="M 14 25 L 11 33" stroke="#000" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            <div className="bg-[#fbda03] text-black border-[4px] sm:border-[4.5px] border-black p-5 sm:p-8 flex flex-col justify-between gap-6 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.9)] sm:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.9)] h-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b-[2.5px] border-black pb-3">
                  <span className="font-mono text-xs font-black uppercase tracking-wider bg-black text-[#fbda03] px-2.5 py-1 border border-black">
                    SUNDAY PITCH SLOT
                  </span>
                  <span className="font-anton text-sm uppercase bg-white px-2 py-0.5 border border-black">
                    4 SLOTS LEFT
                  </span>
                </div>

                <h4 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight leading-[0.92]">
                  PITCHING HAPPENS EVERY SUNDAY.
                </h4>

                <p className="text-black/85 text-xs sm:text-sm font-semibold leading-relaxed">
                  Every Sunday, our founding engineering team reviews pitches from early-stage founders. If selected, we enter a 14-day sprint to scope, design, and deploy your product into market as your technical partner.
                </p>

                {/* Pitch Checklist */}
                <div className="bg-white border-[2.5px] border-black p-3 flex flex-col gap-1.5 font-mono text-[11px] font-bold">
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>PITCH DECK OR PRODUCT SCOPE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>CO-FOUNDER DETAILS &amp; RUNWAY</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700">✓</span> <span>PROPOSED EQUITY SPLIT RANGE</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="mailto:hello@needhelpbuilding.com?subject=Startup%20CTO%20Equity%20Pitch&body=Hi%20NeedHelpBuilding%20Team%2C%0A%0AWe%20would%20love%20to%20pitch%20our%20startup%20for%20the%20Sunday%20session.%0A%0AStartup%20Name%3A%20%0AFounder(s)%3A%20%0AWebsite%2FDeck%20Link%3A%20%0AWhat%20we're%20building%3A%20"
                  className="w-full bg-black text-white hover:bg-white hover:text-black border-[3.5px] border-black py-4 px-4 text-center font-anton text-2xl uppercase tracking-wider transition-colors shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer block"
                >
                  PITCH YOUR STARTUP VIA EMAIL
                </a>

                <div className="flex items-center justify-between text-[11px] font-mono font-black text-black">
                  <span>INSTANT REVIEW:</span>
                  <span className="underline">HELLO@NEEDHELPBUILDING.COM</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4.5: MEET THE FOUNDING DUO (TEAM)                   */}
      {/* ============================================================ */}
      <section
        id="team"
        className="relative w-full min-h-screen px-4 sm:px-8 lg:px-14 py-16 lg:py-20 flex flex-col justify-between items-center overflow-hidden bg-[#0c0c0d]"
      >

        {/* Section Header */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#fbda03] text-black border-[3px] border-black px-6 py-1 shadow-[4px_4px_0px_0px_#ffffff] rotate-[-1deg]">
              <span className="font-anton text-xs sm:text-sm uppercase tracking-wider">
                04 &bull; MEET THE BUILDERS &bull; NO CORPORATE FLUFF
              </span>
            </div>
          </div>

          <h2 className="font-anton text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.92] drop-shadow-[0_4px_0_#000]">
            THE FOUNDING DUO BEHIND <span className="text-[#fbda03]">EVERY BUILD</span>.
          </h2>
        </div>

        {/* Full-width Team Stage: Left Card, Center Photo with Curly Arrows, Right Card */}
        <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* LEFT PERSON CARD: DIVY SHUKLA (THE SALES GUY) */}
            <div className="lg:col-span-3 flex flex-col order-2 lg:order-1">
              <div className="bg-[#fbda03] text-black border-[4px] border-black p-5 sm:p-6 shadow-[8px_8px_0px_0px_#000] relative rotate-[-1.5deg] hover:rotate-0 transition-transform">
                <div className="font-mono text-[10px] font-black uppercase tracking-widest bg-black text-[#fbda03] px-2 py-0.5 inline-block w-fit mb-3">
                  SALES &bull; DEAL ARCHITECTURE
                </div>
                <h3 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight leading-none mb-1">
                  DIVY SHUKLA
                </h3>
                <div className="font-handwritten text-2xl sm:text-3xl text-black font-bold -rotate-1 mb-3">
                  &ldquo;The Sales Guy Who Never Takes No For An Answer&rdquo;
                </div>
                <p className="font-sans text-xs sm:text-sm font-semibold leading-relaxed border-t-2 border-black pt-3 text-black/90">
                  Turns ambiguous founder ideas into signed contracts, clears enterprise roadblocks, and scopes high-margin distribution channels before the first line of code is committed.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] font-bold">
                  <span className="bg-black text-white px-2 py-0.5">#Distribution</span>
                  <span className="bg-black text-white px-2 py-0.5">#Pipelines</span>
                  <span className="bg-black text-white px-2 py-0.5">#Growth</span>
                </div>
              </div>
            </div>

            {/* CENTER: DUO PHOTO WITH WAVY / CURLY ARROWS */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[560px] aspect-[4/3] sm:aspect-[1.3/1] flex items-center justify-center">
                <Image
                  src="/team.png"
                  alt="Divy Shukla (Sales) & Suyash (Tech) - Need Help Building Founders"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.85)]"
                />

                {/* SVG CURLY / WAVY ARROWS OVERLAY */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
                  viewBox="0 0 560 400"
                  fill="none"
                >
                  <defs>
                    <marker
                      id="arrow-curl-divy"
                      markerWidth="12"
                      markerHeight="12"
                      refX="8"
                      refY="4"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 4, 0 8" fill="#fbda03" stroke="#000" strokeWidth="1.2" />
                    </marker>
                    <marker
                      id="arrow-curl-suyash"
                      markerWidth="12"
                      markerHeight="12"
                      refX="8"
                      refY="4"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 4, 0 8" fill="#b3cde3" stroke="#000" strokeWidth="1.2" />
                    </marker>
                  </defs>

                  {/* Curly Arrow pointing to Divy */}
                  <path
                    d="M 50 65 C 85 20, 115 95, 140 45 C 160 10, 180 35, 205 75"
                    stroke="#fbda03"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeDasharray="8 4"
                    fill="none"
                    markerEnd="url(#arrow-curl-divy)"
                  />

                  {/* Curly Arrow pointing to Suyash */}
                  <path
                    d="M 510 65 C 475 20, 445 95, 420 45 C 400 10, 380 35, 355 75"
                    stroke="#b3cde3"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeDasharray="8 4"
                    fill="none"
                    markerEnd="url(#arrow-curl-suyash)"
                  />
                </svg>

                {/* Floating Handwritten Pointer Labels */}
                <div className="absolute top-0 left-4 sm:left-8 z-30">
                  <span className="font-handwritten text-2xl sm:text-3xl lg:text-4xl text-[#fbda03] font-bold drop-shadow-[0_2px_4px_#000] rotate-[-7deg] inline-block">
                    ← That&apos;s Divy!
                  </span>
                </div>
                <div className="absolute top-0 right-4 sm:right-8 z-30">
                  <span className="font-handwritten text-2xl sm:text-3xl lg:text-4xl text-[#b3cde3] font-bold drop-shadow-[0_2px_4px_#000] rotate-[7deg] inline-block">
                    That&apos;s Suyash! →
                  </span>
                </div>
              </div>

              {/* Bottom Tag Strip (Clean Text Only) */}
              <div className="mt-2 inline-flex items-center gap-2 bg-black/90 border-2 border-white/20 px-4 py-1 text-xs font-mono">
                <span className="text-[#fbda03] font-bold">⚡</span>
                <span className="text-gray-300">
                  Divy hunts the revenue &bull; Suyash ships the production code
                </span>
              </div>
            </div>

            {/* RIGHT PERSON CARD: SUYASH (THE TECH GUY) */}
            <div className="lg:col-span-3 flex flex-col order-3">
              <div className="bg-[#b3cde3] text-black border-[4px] border-black p-5 sm:p-6 shadow-[8px_8px_0px_0px_#000] relative rotate-[1.5deg] hover:rotate-0 transition-transform">
                <div className="font-mono text-[10px] font-black uppercase tracking-widest bg-black text-[#b3cde3] px-2 py-0.5 inline-block w-fit mb-3">
                  TECH ARCHITECT &bull; CODE ENGINE
                </div>
                <h3 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight leading-none mb-1">
                  SUYASH
                </h3>
                <div className="font-handwritten text-2xl sm:text-3xl text-black font-bold rotate-1 mb-3">
                  &ldquo;The Tech Guy Who Ships Code While You Sleep&rdquo;
                </div>
                <p className="font-sans text-xs sm:text-sm font-semibold leading-relaxed border-t-2 border-black pt-3 text-black/90">
                  Full-stack systems architect, agentic AI hacker, and automation builder. Turns complex logic, APIs, and real-time databases into blazing-fast web engines with zero fluff.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono text-[10px] font-bold">
                  <span className="bg-black text-white px-2 py-0.5">#FullStack</span>
                  <span className="bg-black text-white px-2 py-0.5">#AutonomousAI</span>
                  <span className="bg-black text-white px-2 py-0.5">#NextJS</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Clean Bottom Note */}
        <div className="relative z-10 font-mono text-xs text-gray-400 uppercase tracking-widest text-center">
          DIRECT PARTNERSHIP &bull; 0 MIDDLEMEN &bull; ZERO OUTSOURCING
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: CLIENT TESTIMONIALS                               */}
      {/* ============================================================ */}
      <section id="testimonials" className="relative w-full min-h-screen px-4 sm:px-8 py-20 lg:py-24 flex flex-col justify-center items-center gap-12 overflow-hidden bg-[#0c0c0d]">

        {/* Subtle Brutalist Surveillance Cam in Upper Corner */}
        <div className="absolute top-10 right-8 opacity-20 pointer-events-none select-none hidden lg:block">
          <svg width="110" height="80" viewBox="0 0 110 80" fill="none">
            <rect x="8" y="10" width="8" height="40" rx="2" fill="#fff" />
            <path d="M 16 30 L 42 30" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
            <g transform="rotate(18 55 35)">
              <rect x="36" y="22" width="48" height="24" rx="4" fill="#ffffff" stroke="#000" strokeWidth="3.5" />
              <path d="M 32 18 L 88 18 L 84 22 L 34 22 Z" fill="#fbda03" stroke="#000" strokeWidth="2.5" />
              <rect x="80" y="24" width="8" height="20" rx="2" fill="#000" />
              <circle cx="84" cy="34" r="3" fill="#b3cde3" />
              <circle cx="44" cy="28" r="2.5" fill="#dc2626" className="animate-ping" />
            </g>
          </svg>
        </div>

        {/* Header Title Board with Screws & Ribbon Aesthetics */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#b3cde3] text-black border-[3px] border-black px-6 py-1.5 shadow-[4px_4px_0px_0px_#ffffff] rotate-[-1deg]">
              <span className="font-anton text-sm sm:text-base uppercase tracking-wider">
                CLIENT TESTIMONIALS &bull; FOUNDER ENDORSEMENTS
              </span>
            </div>

            {/* ILLUMINATING EYE ASSET IN TESTIMONIALS HEADER */}
            <div className="relative w-14 sm:w-16 h-7 sm:h-8 hidden sm:flex items-center justify-center select-none pointer-events-none rotate-[6deg]">
              <div className="relative w-14 sm:w-16 h-7 sm:h-8 bg-white rounded-[50%] border-[2px] border-black flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_0px_#fbda03]">
                <div className="relative w-5 h-5 bg-[#fbda03] rounded-full border-[1.5px] border-black flex items-center justify-center animate-eye-pupil">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-black animate-star-spin">
                    <path d="M12 0 C12 6 6 12 0 12 C6 12 12 18 12 24 C12 18 18 12 24 12 C18 12 12 6 12 0 Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl leading-[0.88] uppercase tracking-tight select-none">
              PROOF IN PRODUCTION.
            </h2>
          </div>

          <p className="mt-4 text-gray-300 text-sm sm:text-lg max-w-2xl font-medium tracking-wide">
            Real feedback from startup founders and operators who trusted us to build and engineer their core digital systems.
          </p>
        </div>

        {/* Dual Co-founder Testimonial Billboards with Abstract Signboard Elements */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-4 max-w-5xl mx-auto w-full">

          {/* Testimonial 1: Jay Agrawal @ Ganges */}
          <div className="relative group">
            {/* Abstract mounting vertical beam behind billboard (Bright readable yellow) */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6 bottom-[-20px] w-4 bg-[#fbda03] border-x-[2.5px] border-black shadow-[2px_0_0_0_#000] -z-10" />

            <div className="relative bg-white text-black border-[4px] border-black p-5 sm:p-10 shadow-[6px_6px_0px_0px_#fbda03] sm:shadow-[10px_10px_0px_0px_#fbda03] rotate-[-1deg] flex flex-col justify-between gap-6 transition-transform hover:rotate-0">
              {/* 4 Corner Screws */}
              <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-1.5 sm:w-2 h-[1.5px] bg-black rotate-45" />
              </div>
              <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-1.5 sm:w-2 h-[1.5px] bg-black -rotate-45" />
              </div>
              <div className="hidden sm:flex absolute bottom-3 left-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black items-center justify-center">
                <div className="w-2 h-[1.5px] bg-black -rotate-45" />
              </div>
              <div className="hidden sm:flex absolute bottom-3 right-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black items-center justify-center">
                <div className="w-2 h-[1.5px] bg-black rotate-45" />
              </div>

              {/* Pin Badge on top edge */}
              <div className="absolute -top-5 left-10">
                <svg width="24" height="28" viewBox="0 0 28 34" fill="none">
                  <path d="M 5 6 C 5 2 23 2 23 6 C 23 10 20 12 20 18 C 24 20 25 24 25 25 L 3 25 C 3 24 4 20 8 18 C 8 12 5 10 5 6 Z" fill="#fbda03" stroke="#000" strokeWidth="2.5" />
                  <path d="M 14 25 L 11 33" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b-[2px] border-black/15 pb-3">
                  <div className="flex items-center gap-1 text-[#fbda03] select-none text-2xl font-black">
                    {"★★★★★"}
                  </div>
                  <span className="bg-[#fbda03] text-black font-anton text-xs px-2 py-0.5 border border-black uppercase tracking-wider">
                    VERIFIED FOUNDER
                  </span>
                </div>

                <p className="text-lg sm:text-xl font-bold text-black leading-snug font-archivo tracking-tight">
                  &ldquo;NeedHelpBuilding turned our concept into a high-performance web platform in record time. Their architectural clarity, speed of execution, and attention to user flow made a massive impact on our early traction.&rdquo;
                </p>
              </div>

              {/* Signboard Signature Footer */}
              <div className="pt-4 border-t-[3px] border-black flex items-center justify-between bg-black/5 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-4 sm:p-6">
                <div>
                  <span className="font-anton text-2xl tracking-wide uppercase block text-black">
                    JAY AGRAWAL
                  </span>
                  <span className="text-xs font-mono font-black text-black/70 uppercase tracking-wider">
                    CO-FOUNDER @ GANGES
                  </span>
                </div>
                <div className="w-10 h-10 bg-black text-[#fbda03] border-[2px] border-black flex items-center justify-center font-anton text-lg">
                  G
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2: Arinjay Saxena @ Earnbuddy */}
          <div className="relative group">
            {/* Abstract mounting vertical beam behind billboard (Bright readable yellow) */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6 bottom-[-20px] w-4 bg-[#fbda03] border-x-[2.5px] border-black shadow-[2px_0_0_0_#000] -z-10" />

            <div className="relative bg-[#fbda03] text-black border-[4px] border-black p-5 sm:p-10 shadow-[6px_6px_0px_0px_#ffffff] sm:shadow-[10px_10px_0px_0px_#ffffff] rotate-[1.5deg] flex flex-col justify-between gap-6 transition-transform hover:rotate-0">
              {/* 4 Corner Screws */}
              <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-1.5 sm:w-2 h-[1.5px] bg-black rotate-45" />
              </div>
              <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-1.5 sm:w-2 h-[1.5px] bg-black -rotate-45" />
              </div>
              <div className="hidden sm:flex absolute bottom-3 left-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black items-center justify-center">
                <div className="w-2 h-[1.5px] bg-black -rotate-45" />
              </div>
              <div className="hidden sm:flex absolute bottom-3 right-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black items-center justify-center">
                <div className="w-2 h-[1.5px] bg-black rotate-45" />
              </div>

              {/* Pin Badge on top edge */}
              <div className="absolute -top-5 right-10">
                <svg width="24" height="28" viewBox="0 0 28 34" fill="none">
                  <path d="M 5 6 C 5 2 23 2 23 6 C 23 10 20 12 20 18 C 24 20 25 24 25 25 L 3 25 C 3 24 4 20 8 18 C 8 12 5 10 5 6 Z" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
                  <path d="M 14 25 L 11 33" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b-[2.5px] border-black pb-3">
                  <div className="flex items-center gap-1 text-black select-none text-2xl font-black">
                    {"★★★★★"}
                  </div>
                  <span className="bg-white text-black font-anton text-xs px-2 py-0.5 border border-black uppercase tracking-wider">
                    CO-FOUNDER PARTNER
                  </span>
                </div>

                <p className="text-lg sm:text-xl font-bold text-black leading-snug font-archivo tracking-tight">
                  &ldquo;Partnering with them gave us the technical muscle of an elite engineering team without the startup friction. From intuitive UI/UX design to rock-solid automations, they delivered exactly what Earnbuddy needed to scale.&rdquo;
                </p>
              </div>

              {/* Signboard Signature Footer */}
              <div className="pt-4 border-t-[3px] border-black flex items-center justify-between bg-black/10 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-4 sm:p-6">
                <div>
                  <span className="font-anton text-2xl tracking-wide uppercase block text-black">
                    ARINJAY SAXENA
                  </span>
                  <span className="text-xs font-mono font-black text-black/80 uppercase tracking-wider">
                    CO-FOUNDER @ EARNBUDDY
                  </span>
                </div>
                <div className="w-10 h-10 bg-white text-black border-[2px] border-black flex items-center justify-center font-anton text-lg">
                  EB
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5.5: OLD CUSTOMER REFERRAL SCHEME                    */}
      {/* ============================================================ */}
      <section id="referral" className="relative w-full min-h-screen px-4 sm:px-8 py-20 lg:py-24 flex flex-col justify-center items-center overflow-hidden bg-[#0c0c0d]">

        {/* Ambient Telemetry Box Asset in Upper Corner */}
        <div className="absolute top-12 left-8 opacity-15 pointer-events-none select-none hidden lg:block">
          <svg width="110" height="80" viewBox="0 0 110 80" fill="none">
            <rect x="8" y="14" width="94" height="54" rx="4" fill="#f97316" stroke="#fff" strokeWidth="2" />
            <rect x="18" y="24" width="74" height="34" rx="2" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <text x="22" y="38" fill="#000" fontSize="8" fontFamily="monospace" fontWeight="black">REFERRAL DATA</text>
            <text x="22" y="48" fill="#000" fontSize="7" fontFamily="monospace" fontWeight="bold">COMMISSION 10%</text>
            <circle cx="82" cy="41" r="5" fill="#000" />
            <circle cx="82" cy="41" r="2" fill="#f97316" />
          </svg>
        </div>

        {/* Abstract Referral Card Box */}
        <div className="relative z-10 w-full max-w-6xl bg-[#18181b] border-[4px] border-black p-5 sm:p-12 lg:p-16 shadow-[6px_6px_0px_0px_#fbda03] sm:shadow-[14px_14px_0px_0px_#fbda03] flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">

          {/* Left Column: Heading & Explanation */}
          <div className="flex flex-col gap-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-[#fbda03] text-black px-4 py-1.5 font-anton text-sm sm:text-base uppercase tracking-wider w-fit rotate-[-1deg] border-[2px] border-black shadow-[3px_3px_0px_0px_#fff]">
              EXCLUSIVE TO PREVIOUS &amp; EXISTING CLIENTS
            </div>

            <h3 className="font-anton text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.92]">
              CLIENT REFERRAL SCHEME: <span className="text-[#fbda03]">10% FOR BOTH SIDES.</span>
            </h3>

            <p className="text-gray-200 text-base sm:text-lg font-medium leading-relaxed">
              If you’ve built with us before, introduce another founder or business to NeedHelpBuilding. When they initiate a project, <strong className="text-white underline">they get 10% off</strong> their total scope, and <strong className="text-[#fbda03] underline">you receive 10% direct cash commission</strong> or credit towards your next build.
            </p>
          </div>

          {/* Right Column: Interactive Referral Action Voucher */}
          <div className="bg-white text-black border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] flex flex-col justify-between gap-6 w-full lg:w-[420px] shrink-0 rotate-[1deg]">
            <div className="flex items-center justify-between border-b-[2.5px] border-black/20 pb-3">
              <span className="font-mono text-xs font-black uppercase tracking-wider text-black/70">
                REFERRAL PERK TICKET
              </span>
              <span className="bg-[#fbda03] text-black font-anton text-xs px-2.5 py-1 border border-black uppercase">
                10% + 10%
              </span>
            </div>
            <div className="flex items-center justify-around text-center py-3 bg-gray-50 border-[2.5px] border-black">
              <div>
                <span className="font-anton text-3xl sm:text-4xl text-black block leading-none">10% OFF</span>
                <span className="text-[11px] font-mono font-bold text-gray-600 uppercase">THEIR PROJECT</span>
              </div>
              <div className="h-10 w-[2px] bg-black/20" />
              <div>
                <span className="font-anton text-3xl sm:text-4xl text-[#0c0c0d] block leading-none">10% CASH</span>
                <span className="text-[11px] font-mono font-bold text-gray-600 uppercase">OR CREDIT TO YOU</span>
              </div>
            </div>

            <a
              href="mailto:hello@needhelpbuilding.com?subject=Client%20Referral%20Introduction&body=Hi%20NeedHelpBuilding%20Team%2C%0A%0AI%20am%20an%20existing%2Fpast%20client%20and%20would%20like%20to%20refer%20a%20friend%2Fbusiness%3A%0A%0AMy%20Name%20%2F%20Company%3A%20%0AReferred%20Founder's%20Name%3A%20%0AReferred%20Founder's%20Email%20or%20WhatsApp%3A%20%0AProject%20they%20need%20built%3A%20"
              className="w-full bg-[#fbda03] hover:bg-black hover:text-[#fbda03] text-black border-[3px] border-black py-3.5 px-4 text-center font-anton text-lg sm:text-xl uppercase tracking-wider transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] block cursor-pointer"
            >
              INTRODUCE A CLIENT VIA EMAIL
            </a>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: EXACT SCREENSHOT FOOTER SECTION (PAGE-FITTED)     */}
      {/* ============================================================ */}
      <footer id="contact" className="w-full bg-[#fbda03] text-black border-t-[6px] sm:border-t-[8px] border-black py-6 sm:py-8 md:py-10 px-4 sm:px-8 flex flex-col items-center justify-between min-h-[calc(100vh-65px)] box-border">
        <div className="max-w-5xl w-full flex flex-col items-center text-center my-auto">

          {/* Top Pill Badge: "READY TO SCALE AUTOMATICALLY?" */}
          <div className="bg-white border-[2.5px] sm:border-[3px] border-black px-4 sm:px-6 py-1 sm:py-1.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[-0.5deg]">
            <span className="font-anton text-xs sm:text-sm md:text-base tracking-wider uppercase text-black">
              READY TO SCALE AUTOMATICALLY?
            </span>
          </div>

          {/* Main Giant Headline: "LET'S BUILD YOUR SYSTEMS." */}
          <h2 className="mt-3 sm:mt-4 md:mt-5 font-anton text-[36px] xs:text-[44px] sm:text-[62px] md:text-[80px] lg:text-[100px] xl:text-[112px] leading-[0.88] uppercase tracking-tight text-black select-none">
            LET&apos;S BUILD YOUR
            <br />
            SYSTEMS.
          </h2>

          {/* Description Paragraph */}
          <p className="mt-3 sm:mt-4 font-sans font-bold text-black text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed tracking-tight px-2">
            Tell us what you want to build or automate. We will review your requirements, design the architecture, and get your project into development immediately.
          </p>

          {/* Large Brutalist Button: "START YOUR PROJECT NOW" -> Direct to WhatsApp */}
          <button
            data-cal-namespace="needhelpbuilding"
            data-cal-link="need-help-building/needhelpbuilding"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="mt-4 sm:mt-6 bg-black text-white hover:bg-white hover:text-black border-[3px] sm:border-[4px] border-black py-2.5 sm:py-3.5 px-6 sm:px-10 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer font-anton text-base sm:text-xl md:text-2xl uppercase tracking-wider inline-block text-center"
          >
            START YOUR PROJECT NOW
          </button>

        </div>

        {/* Footer Bottom Bar: Direct Typography (No Boxes) & Real Social Icons */}
        <div className="w-full max-w-7xl mt-4 sm:mt-8 pt-4 sm:pt-5 border-t-[3px] border-black flex flex-col md:flex-row items-center justify-between gap-4 font-anton tracking-wider uppercase">

          {/* Email and Phone directly as is */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-black">
            <a
              href="mailto:hello@needhelpbuilding.com"
              className="text-base sm:text-xl font-mono font-bold tracking-tight lowercase text-black hover:underline cursor-pointer"
            >
              hello@needhelpbuilding.com
            </a>

            <span className="text-black/40 font-bold select-none">•</span>

            <a
              href="https://wa.me/919219061093"
              target="_blank"
              rel="noreferrer"
              className="text-base sm:text-xl font-mono font-bold tracking-tight text-black hover:underline cursor-pointer"
            >
              +91 9219061093
            </a>
          </div>

          {/* Pure Social Icons: Instagram, LinkedIn, WhatsApp, X (Twitter) - No Text */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 text-black">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="text-black hover:opacity-75 transition-opacity cursor-pointer"
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
              className="text-black hover:opacity-75 transition-opacity cursor-pointer"
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
              className="text-black hover:opacity-75 transition-opacity cursor-pointer"
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
              className="text-black hover:opacity-75 transition-opacity cursor-pointer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* FULL SCREEN YELLOW SERVICES MENU                             */}
      {/* ============================================================ */}
      {servicesFullscreenOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="All Services Menu"
          className="fixed inset-0 z-[120] bg-[#fbda03] text-black overflow-y-auto flex flex-col justify-between border-[8px] sm:border-[14px] border-black animate-in fade-in zoom-in-95 duration-200"
        >
          {/* TOP BAR / HEADER */}
          <div className="p-4 sm:p-8 md:p-10 border-b-[4px] sm:border-b-[6px] border-black bg-[#fbda03] flex items-center justify-between sticky top-0 z-20 backdrop-blur-sm">
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="bg-black text-[#fbda03] px-3 sm:px-4 py-1.5 sm:py-2 font-anton text-xl sm:text-3xl tracking-wider uppercase border-[3px] border-black shadow-[3px_3px_0px_0px_#000]">
                SERVICES DIRECTORY
              </div>
              <span className="hidden md:inline-block font-mono text-xs sm:text-sm font-bold tracking-widest uppercase bg-white border-[2px] border-black px-3 py-1 shadow-[2px_2px_0px_0px_#000]">
                9 CORE CAPABILITIES • PRODUCTION-READY
              </span>
            </div>

            <button
              onClick={() => setServicesFullscreenOpen(false)}
              className="group flex items-center gap-2 bg-black hover:bg-white text-white hover:text-black border-[3px] sm:border-[4px] border-black px-4 sm:px-6 py-2 sm:py-2.5 font-anton text-base sm:text-2xl uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              <span>CLOSE</span>
              <span className="font-mono font-bold text-lg sm:text-2xl group-hover:rotate-90 transition-transform duration-200">
                ✕
              </span>
            </button>
          </div>

          {/* SERVICES GRID */}
          <div className="p-4 sm:p-8 md:p-10 max-w-7xl mx-auto w-full flex-1">
            <div className="mb-6 sm:mb-10 text-center sm:text-left">
              <h2 className="font-anton text-3xl sm:text-6xl md:text-7xl uppercase tracking-tight text-black leading-none">
                WHAT WE BUILD & DELIVER
              </h2>
              <p className="mt-2 font-mono text-xs sm:text-base font-semibold text-black/80 max-w-3xl">
                Select any service below to explore our comprehensive scope of work, technical architecture, delivery process, and proven ROI metrics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {SERVICES_DATA.map((service, idx) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setServicesFullscreenOpen(false)}
                  className="group relative bg-white hover:bg-black text-black hover:text-white border-[3.5px] border-black p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 shadow-[5px_5px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 cursor-pointer"
                >
                  {/* Top Badge & Number */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-black tracking-widest text-black/60 group-hover:text-[#fbda03]">
                        0{idx + 1} // {service.category}
                      </span>
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 border-[1.5px] border-black bg-[#fbda03] text-black uppercase">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="font-anton text-xl sm:text-2xl uppercase tracking-wide leading-tight group-hover:text-[#fbda03] transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm font-medium leading-relaxed text-black/75 group-hover:text-gray-300">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Footer Link & Action */}
                  <div className="mt-5 pt-4 border-t-[2px] border-black/20 group-hover:border-[#fbda03]/30 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-wider uppercase group-hover:text-[#fbda03]">
                      VIEW CASE & SCOPE
                    </span>
                    <span className="font-anton text-lg text-black group-hover:text-[#fbda03] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* BOTTOM ACTION / FOOTER */}
          <div className="p-4 sm:p-8 border-t-[4px] sm:border-t-[6px] border-black bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="font-anton text-xl sm:text-2xl text-[#fbda03] tracking-wide uppercase">
                NEED A CUSTOM PROJECT OR COMBINED SCOPE?
              </div>
              <div className="font-mono text-xs text-gray-300 mt-0.5">
                Speak directly with our technical team in a 20-minute strategy call.
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  setServicesFullscreenOpen(false);
                  navigateToSection("#contact", "WORK WITH US");
                }}
                className="flex-1 sm:flex-initial bg-[#fbda03] hover:bg-white text-black font-anton text-base sm:text-lg px-6 py-2.5 border-[2px] border-black shadow-[3px_3px_0px_0px_#fff] active:translate-x-0.5 active:translate-y-0.5 transition-all uppercase tracking-wider cursor-pointer text-center"
              >
                BOOK DISCOVERY CALL
              </button>
              <button
                onClick={() => setServicesFullscreenOpen(false)}
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-bold px-4 py-3 border-[2px] border-white/40 uppercase tracking-wider cursor-pointer"
              >
                BACK TO SITE [ESC]
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
