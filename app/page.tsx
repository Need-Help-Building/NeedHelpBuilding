"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function AgencyPosterPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isBooked, setIsBooked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState<"in" | "out" | null>(null);
  const [wipeTitle, setWipeTitle] = useState("");

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
      tag: "CULINARY AI & COMPUTER VISION",
      name: "SOUS CHEF",
      badge: "IN PROGRESS",
      color: "#fbda03",
      accent: "#0c0c0d",
      headline: "AI Recipe & Kitchen Operations Assistant for Busy Kitchens",
      link: null,
      statusNote: "WORK IN PROGRESS",
      image: "/hero.png",
      problem:
        "Kitchen teams waste significant food and time juggling recipe books, manual inventory sheets, and prep line orders during peak hours.",
      solution:
        "Building a simple, hands-free kitchen screen that guides staff step-by-step through prep recipes, tracks inventory usage in real-time, and minimizes food waste.",
      deliverables: [
        "Hands-free touchscreen interface built for busy kitchen lines",
        "Step-by-step recipe scaling and prep checklists",
        "Simple inventory tracking tied directly to orders",
        "Daily food prep and waste summary for kitchen managers",
      ],
      impactStats: [
        { label: "TARGET PREP TIME", value: "30% FASTER" },
        { label: "FOOD SAVINGS", value: "~15-20%" },
        { label: "SETUP TIME", value: "1 DAY" },
      ],
    },
    {
      id: "youre-store-here",
      tag: "AUTONOMOUS COMMERCE INFRASTRUCTURE",
      name: "YOURESTOREHERE",
      badge: "LIVE DEPLOYMENT",
      color: "#b3cde3",
      accent: "#0c0c0d",
      headline: "Zero-Click Instant Storefront & Merchant Onboarding Engine",
      link: "https://yourstorehere.vercel.app",
      linkDisplay: "YOURSTOREHERE.VERCEL.APP",
      statusNote: "LIVE DEPLOYMENT • PROD CLUSTER ACTIVE",
      image: "/yourstorehere.png",
      problem:
        "Traditional ecommerce onboarding takes weeks of catalog syncing, manual design adjustments, payment configuration, and high abandonment before the first sale.",
      solution:
        "Architected youreStorehere from the ground up: an instant merchant provisioning engine. Merchants input a social link, product sheet, or brand guidelines, and within 60 seconds, an automated multi-tenant Next.js storefront is generated, deployed to the edge, wired with Stripe Connect, and populated with high-converting brutalist typography and photography.",
      deliverables: [
        "Headless multi-tenant engine supporting 1,000+ isolated subdomains",
        "Automated product catalog ingestion from CSV, Instagram & Shopify",
        "Edge-cached Next.js pages loading under 180ms worldwide",
        "Self-service merchant analytics with integrated payout ledger",
      ],
      impactStats: [
        { label: "ONBOARDING TIME", value: "60 SECONDS" },
        { label: "STORE CONVERSION", value: "+38% LIFT" },
        { label: "EDGE LATENCY", value: "120 MS" },
      ],
    },
    {
      id: "caller-work",
      tag: "VOICE AGENT & CALL PIPELINE",
      name: "CALLER.WORK",
      badge: "PRODUCTION SCALE",
      color: "#c59eb9",
      accent: "#0c0c0d",
      headline: "Ultra-Low Latency Conversational Voice Agents for Inbound & Outbound Ops",
      link: "https://caller.work",
      linkDisplay: "CALLER.WORK",
      statusNote: "SCALE PRODUCTION • SUB-400MS LATENCY",
      image: "/caller_work.png",
      problem:
        "Inbound sales and dispatch support lines suffer from long hold times, missed high-ticket leads during off-hours, and high payroll costs for manual call center operations.",
      solution:
        "Built caller.work: a resilient, bidirectional voice streaming infrastructure running custom telephony pipelines (SIP/WebRTC). The agents sound indistinguishable from humans, understand accents and interruptions naturally, query live CRM inventory mid-call, and automatically book appointments or process payments directly over the phone.",
      deliverables: [
        "Sub-400ms end-to-end voice latency pipeline with interruption handling",
        "Direct bidirectional synchronization with Salesforce, HubSpot & Cal.com",
        "Automatic call transcript sentiment analysis & CRM deal tagging",
        "Smart human handover escalation protocol when edge cases occur",
      ],
      impactStats: [
        { label: "CALL ANSWER TIME", value: "0.2 SECONDS" },
        { label: "OFF-HOUR LEADS CAPTURED", value: "100%" },
        { label: "VOICE PIPELINE LATENCY", value: "380 MS" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0c0c0d] text-white flex flex-col items-center justify-start selection:bg-[#fbda03] selection:text-black">

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
      <header className="sticky top-0 z-50 w-full bg-[#0c0c0d] px-6 sm:px-12 py-5 sm:py-6 flex items-center justify-between">
        {/* Large Bold Brand Wordmark (Clean Text Only) */}
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center group cursor-pointer select-none"
            aria-label="Need Help Building Home"
          >
            <span className="font-anton text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none uppercase group-hover:text-[#fbda03] transition-colors">
              NEED HELP BUILDING<span className="text-[#fbda03]">?</span>
            </span>
          </a>
        </div>

        {/* Fatter Bold Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {[
            { label: "SERVICES", href: "#capabilities" },
            { label: "WORK", href: "#case-studies" },
            { label: "STARTUPS & CTO", href: "#startups-cto" },
            { label: "TESTIMONIALS", href: "#testimonials" },
            { label: "REFERRAL [10%]", href: "#referral" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => navigateToSection(item.href, item.label)}
              className="font-anton text-lg xl:text-xl tracking-wider uppercase text-white hover:text-[#fbda03] transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Big Bold Eye Asset & Action */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => navigateToSection("#contact", "WORK WITH US")}
            className="hidden sm:inline-block bg-[#fbda03] text-black border-[3px] border-black px-6 py-2.5 font-anton text-base sm:text-lg uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
          >
            LET'S TALK ↗
          </button>

          {/* LARGE PROMINENT ILLUMINATING EYE ASSET */}
          <div className="relative w-24 sm:w-28 h-12 sm:h-14 flex items-center justify-center select-none pointer-events-none">
            <div className="relative w-24 sm:w-28 h-12 sm:h-14 bg-white rounded-[50%] border-[3px] border-black flex items-center justify-center overflow-hidden shadow-[4px_4px_0px_0px_#fbda03]">
              <div className="relative w-10 sm:w-12 h-10 sm:h-12 bg-[#c59eb9] rounded-full border-[2.5px] border-black flex items-center justify-center animate-eye-pupil">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 sm:w-6 h-5 sm:h-6 fill-black animate-star-spin"
                >
                  <path d="M12 0 C12 6 6 12 0 12 C6 12 12 18 12 24 C12 18 18 12 24 12 C18 12 12 6 12 0 Z" />
                </svg>
              </div>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-black font-anton text-sm uppercase bg-[#fbda03] border-[2.5px] border-black px-3.5 py-1.5 cursor-pointer shadow-[3px_3px_0px_0px_#fff]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

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

          <div className="flex flex-col gap-3 my-auto">
            {[
              { label: "01. WHAT WE BUILD", href: "#capabilities", title: "WHAT WE BUILD" },
              { label: "02. CASE STUDIES", href: "#case-studies", title: "CASE STUDIES" },
              { label: "03. STARTUPS & CTO", href: "#startups-cto", title: "STARTUPS & CTO" },
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
                className="font-anton text-3xl sm:text-4xl text-left py-3 px-4 border-[3px] border-black bg-[#18181b] text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
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
      <section className="relative w-full min-h-[calc(100vh-90px)] flex flex-col justify-between border-b-[8px] border-[#fbda03] overflow-hidden p-4 sm:p-8 lg:p-12">

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

          {/* TWO VERTICAL READABLE YELLOW STEEL MOUNTING RODS EXTENDING TO MARQUEE */}
          {/* Left Vertical Rod */}
          <div
            className="absolute left-[12%] sm:left-[16%] md:left-[20%] top-0 bottom-[-9999px] w-3.5 sm:w-4.5 bg-[#fbda03] border-x-[3px] border-black z-0 pointer-events-none shadow-[2px_0_0_0_#000000]"
            aria-hidden="true"
          >
            <div className="w-full h-full opacity-35 bg-[repeating-linear-gradient(0deg,#000,#000_4px,transparent_4px,transparent_16px)]" />
          </div>

          {/* Right Vertical Rod */}
          <div
            className="absolute right-[12%] sm:right-[16%] md:right-[20%] top-0 bottom-[-9999px] w-3.5 sm:w-4.5 bg-[#fbda03] border-x-[3px] border-black z-0 pointer-events-none shadow-[2px_0_0_0_#000000]"
            aria-hidden="true"
          >
            <div className="w-full h-full opacity-35 bg-[repeating-linear-gradient(0deg,#000,#000_4px,transparent_4px,transparent_16px)]" />
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

            <h1 className="font-anton text-[55px] sm:text-[105px] lg:text-[140px] leading-[0.88] tracking-[-0.02em] uppercase text-center select-none">
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

            <h2 className="font-anton text-[52px] sm:text-[98px] lg:text-[132px] leading-[0.85] tracking-[-0.01em] uppercase text-center flex items-center justify-center select-none">
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
          <div className="relative mt-5 sm:mt-8 z-20 select-none pointer-events-none">
            <div className="relative bg-[#b3cde3] border-[3.5px] border-black rounded-full px-8 sm:px-14 py-2 sm:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-1.5deg]">
              {/* Screws on blue signboard pill */}
              <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-5 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-1.5 sm:w-2 h-[1.5px] bg-black rotate-45" />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-1.5 sm:w-2 h-[1.5px] bg-black -rotate-45" />
              </div>

              <span className="font-archivo text-[18px] sm:text-[30px] tracking-wider uppercase text-black font-extrabold">
                WEBSITES • WEB DESIGN • AUTOMATIONS • SYSTEMS
              </span>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-300 text-sm sm:text-lg max-w-3xl font-medium tracking-wide z-10">
            We build websites, custom web designs, business automations, and intelligent digital systems. From high-converting storefronts and custom web applications to automated operations that run your business on autopilot.
          </p>
        </div>

        {/* HERO LOWER BAR */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
          <div className="relative flex items-center gap-4 select-none w-full md:w-auto">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 animate-pin-wiggle origin-bottom">
                <svg width="28" height="34" viewBox="0 0 28 34" fill="none">
                  <path
                    d="M 5 6 C 5 2 23 2 23 6 C 23 10 20 12 20 18 C 24 20 25 24 25 25 L 3 25 C 3 24 4 20 8 18 C 8 12 5 10 5 6 Z"
                    fill="#c59eb9"
                    stroke="#000"
                    strokeWidth="2.5"
                  />
                  <path d="M 14 25 L 11 33" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              <div className="bg-[#fbda03] border-[3px] border-black p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
                <div className="font-anton text-black text-[28px] sm:text-[34px] leading-[0.92] uppercase tracking-tight">
                  OUR
                  <br />
                  SERVICES
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 flex-1">
              {[
                "01 WEBSITES & WEB APPLICATIONS",
                "02 BESPOKE WEB DESIGN & UI/UX",
                "03 END-TO-END AUTOMATIONS",
                "04 FRACTIONAL CTO FOR STARTUPS",
              ].map((s) => (
                <div key={s} className="border-b border-white/30 pb-1 flex items-center gap-2">
                  <span className="text-[11px] font-bold tracking-wider text-gray-200">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Slot: BOOK NOW button (No yellow bottom shadow, no website name below) */}
          <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
            <button
              onClick={() => navigateToSection("#contact", "WORK WITH US")}
              className="w-full md:w-auto min-w-[240px] sm:min-w-[280px] bg-white text-black border-[3.5px] border-black py-3 px-8 active:translate-x-1 active:translate-y-1 hover:bg-[#fbda03] transition-colors cursor-pointer text-center"
            >
              <span className="font-anton text-[32px] sm:text-[38px] leading-none tracking-normal uppercase block">
                {isBooked ? "WE GOT YOUR SPOT!" : "BOOK NOW"}
              </span>
            </button>
          </div>
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
          <h2 className="font-anton text-5xl sm:text-7xl leading-[0.9] uppercase tracking-tight">
            WEBSITES. BESPOKE DESIGNS. AUTOMATIONS.
          </h2>
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

          <div className="flex flex-wrap gap-2">
            {caseStudies.map((cs, idx) => (
              <button
                key={cs.id}
                onClick={() => setActiveCaseStudy(idx)}
                className={`px-4 py-2 font-anton text-sm uppercase tracking-wider border-[2.5px] border-black transition-colors cursor-pointer ${activeCaseStudy === idx
                  ? "bg-[#fbda03] text-black shadow-[4px_4px_0px_0px_#ffffff]"
                  : "bg-[#18181b] text-gray-300 hover:text-white hover:border-[#fbda03]"
                  }`}
              >
                {cs.name}
              </button>
            ))}
          </div>
        </div>

        {/* ACTIVE CASE STUDY CARD WITH SMOOTH MORPH TRANSITION */}
        {(() => {
          const cs = caseStudies[activeCaseStudy];
          return (
            <div className="relative w-full">
              {/* Left Navigation Arrow Icon on the Side of the Large Preview Card */}
              <button
                onClick={() => setActiveCaseStudy((activeCaseStudy - 1 + caseStudies.length) % caseStudies.length)}
                aria-label="Previous project"
                className="absolute -left-4 sm:-left-7 top-1/2 -translate-y-1/2 z-40 w-12 sm:w-14 h-12 sm:h-14 bg-[#fbda03] hover:bg-white text-black border-[3.5px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Right Navigation Arrow Icon on the Side of the Large Preview Card */}
              <button
                onClick={() => setActiveCaseStudy((activeCaseStudy + 1) % caseStudies.length)}
                aria-label="Next project"
                className="absolute -right-4 sm:-right-7 top-1/2 -translate-y-1/2 z-40 w-12 sm:w-14 h-12 sm:h-14 bg-[#fbda03] hover:bg-white text-black border-[3.5px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              <div
                key={cs.id}
                style={{ backgroundColor: cs.color }}
                className="w-full border-[5px] border-black p-6 sm:p-10 lg:p-12 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.9)] text-black flex flex-col justify-between gap-8 animate-morph-section"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-[3px] border-black">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-black text-white text-xs font-black uppercase px-3 py-1 tracking-wider">
                      {cs.tag}
                    </span>
                    <span className="border-[2px] border-black text-xs font-black uppercase px-3 py-0.5 tracking-wider bg-white">
                      {cs.badge}
                    </span>
                    <span className="text-[11px] font-black tracking-wider uppercase text-black/75">
                      {cs.statusNote}
                    </span>
                  </div>

                  <div>
                    {cs.link ? (
                      <a
                        href={cs.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-black text-white hover:bg-white hover:text-black border-[2.5px] border-black px-4 py-1.5 font-anton text-sm uppercase tracking-wider transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                      >
                        <span>VISIT LIVE: {cs.linkDisplay}</span>
                        <span>↗</span>
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 bg-[#111] text-[#fbda03] border-[2.5px] border-black px-4 py-1.5 font-anton text-sm uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-[#fbda03]" />
                        <span>WORK IN PROGRESS</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-anton text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88] mb-3">
                    {cs.name}
                  </h3>
                  <p className="font-archivo text-xl sm:text-2xl uppercase tracking-tight text-black/90 max-w-4xl">
                    {cs.headline}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                  {/* Screenshot Container */}
                  <div className="lg:col-span-6 flex flex-col gap-3">
                    <div className="border-[3.5px] border-black bg-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                      <div className="bg-[#1a1a1c] text-white px-3 py-1.5 flex items-center justify-between border-b border-white/20 mb-2 font-mono text-[11px]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
                          <span className="ml-2 text-gray-400 font-bold uppercase tracking-wider">
                            {cs.name}.SYSTEM
                          </span>
                        </div>
                        <span className="text-gray-400">
                          {cs.link ? cs.linkDisplay : "SOUS-CHEF.LABS"}
                        </span>
                      </div>

                      <div className="relative w-full aspect-video sm:aspect-[16/10] bg-[#111] overflow-hidden border border-black flex items-center justify-center">
                        <Image
                          src={cs.image}
                          alt={`${cs.name} Screenshot Preview`}
                          fill
                          className="object-cover object-top"
                        />

                        {/* Clean Eye Inside Demo Screen For Sous Chef */}
                        {cs.id === "sous-chef" && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] z-20 select-none">
                            <div className="relative w-28 sm:w-36 h-14 sm:h-18 bg-white rounded-[50%] border-[3.5px] border-black flex items-center justify-center overflow-hidden shadow-[5px_5px_0px_0px_#fbda03]">
                              <div className="relative w-12 sm:w-16 h-12 sm:h-16 bg-[#fbda03] rounded-full border-[2.5px] border-black flex items-center justify-center animate-eye-pupil">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="w-6 sm:w-8 h-6 sm:h-8 fill-black animate-star-spin"
                                >
                                  <path d="M12 0 C12 6 6 12 0 12 C6 12 12 18 12 24 C12 18 18 12 24 12 C18 12 12 6 12 0 Z" />
                                </svg>
                              </div>
                            </div>
                            <div className="mt-3 bg-black text-[#fbda03] border-[2px] border-black px-3 py-1 font-anton text-xs sm:text-sm tracking-wider uppercase">
                              WORK IN PROGRESS
                            </div>
                          </div>
                        )}

                        <div className="absolute bottom-2 left-2 bg-black/85 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-white/30 z-20">
                          {cs.link ? "PRODUCTION PREVIEW" : "WORK IN PROGRESS"}
                        </div>
                      </div>
                    </div>

                  {cs.link && (
                    <a
                      href={cs.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-black uppercase text-black hover:underline tracking-wider flex items-center gap-1"
                    >
                      OPEN {cs.linkDisplay} IN NEW TAB ↗
                    </a>
                  )}
                </div>

                {/* Problem vs Solution */}
                <div className="lg:col-span-6 flex flex-col gap-4">
                  <div className="bg-white border-[3px] border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="block font-anton text-base tracking-wider uppercase text-black mb-1 pb-1 border-b border-black">
                      THE BOTTLENECK / CHALLENGE
                    </span>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-black/85">
                      {cs.problem}
                    </p>
                  </div>

                  <div className="bg-[#0c0c0d] text-white border-[3px] border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="block font-anton text-base tracking-wider uppercase text-[#fbda03] mb-1 pb-1 border-b border-white/20">
                      WHAT WE ENGINEERED & DEPLOYED
                    </span>
                    <p className="text-xs sm:text-sm font-normal leading-relaxed text-gray-200">
                      {cs.solution}
                    </p>
                  </div>
                </div>

              </div>

              {/* Deliverables & Impact */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 items-center">
                <div className="lg:col-span-7 flex flex-col gap-2">
                  <span className="font-anton text-base uppercase tracking-wider text-black">
                    SYSTEM DELIVERABLES INCLUDED:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cs.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-2 bg-black/5 p-2 border border-black/20">
                        <span className="font-anton text-sm">→</span>
                        <span className="text-xs font-bold uppercase leading-tight">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-3 gap-3 bg-black text-white p-4 border-[3px] border-black">
                  {cs.impactStats.map((stat, i) => (
                    <div key={i} className="flex flex-col text-center">
                      <span className="font-anton text-2xl sm:text-3xl text-[#fbda03]">
                        {stat.value}
                      </span>
                      <span className="text-[9px] font-black uppercase text-gray-300 tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          );
        })()}

        {/* Switcher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {caseStudies.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveCaseStudy(idx)}
              style={{ backgroundColor: item.color }}
              className={`p-6 border-[3.5px] border-black text-black cursor-pointer transition-colors ${activeCaseStudy === idx
                ? "shadow-[6px_6px_0px_0px_#ffffff]"
                : "opacity-90 hover:opacity-100"
                }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase bg-black text-white px-2 py-0.5">
                  {item.badge}
                </span>
                <span className="font-anton text-lg">0{idx + 1}</span>
              </div>
              <h4 className="font-anton text-3xl uppercase tracking-tight mb-1">
                {item.name}
              </h4>
              <p className="text-xs font-semibold line-clamp-2 text-black/80 mb-3">
                {item.headline}
              </p>
              <div className="pt-2 border-t border-black/30 flex items-center justify-between font-anton text-xs">
                <span>{item.link ? item.linkDisplay : "IN PROGRESS"}</span>
                <span>↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: STARTUPS & AGENCY CTO (EQUITY PARTNERSHIP)        */}
      {/* ============================================================ */}
      <section id="startups-cto" className="relative w-full max-w-7xl px-4 sm:px-8 py-20 lg:py-28 border-t-[6px] border-[#fbda03] flex flex-col gap-12 overflow-hidden">

        {/* Abstract Background Graphic Ribbon (Echoing Hero Design) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 150 C 300 50 650 350 1300 200"
            stroke="#fbda03"
            strokeWidth="70"
            strokeLinecap="round"
          />
          <path
            d="M 200 850 C 500 500 850 750 1350 450"
            stroke="#9bb8d3"
            strokeWidth="60"
            strokeLinecap="round"
          />
        </svg>

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
          <div className="relative w-full bg-white text-black border-[4px] border-black px-6 sm:px-12 py-6 sm:py-8 shadow-[10px_10px_0px_0px_#fbda03]">
            {/* 4 Flat Corner Screws */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-2 h-[1.5px] bg-black rotate-45" />
            </div>
            <div className="absolute top-3 right-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-2 h-[1.5px] bg-black -rotate-45" />
            </div>
            <div className="absolute bottom-3 left-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-2 h-[1.5px] bg-black -rotate-45" />
            </div>
            <div className="absolute bottom-3 right-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
              <div className="w-2 h-[1.5px] bg-black rotate-45" />
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

            <h3 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.88] select-none">
              WE BECOME YOUR <span className="bg-[#fbda03] px-2 py-0.5 border-[3px] border-black inline-block mt-1 sm:mt-0">TECHNICAL CO-FOUNDER</span> &amp; CTO.
            </h3>
          </div>

          {/* Under-signboard Abstract Pill */}
          <div className="relative -mt-4 z-20">
            <div className="bg-[#b3cde3] border-[3px] border-black rounded-full px-6 sm:px-10 py-1.5 sm:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[1.5deg]">
              <span className="font-archivo text-xs sm:text-base tracking-widest uppercase text-black font-extrabold">
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

            <div className="bg-[#fbda03] text-black border-[4.5px] border-black p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.9)] h-full">
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
                  PITCH YOUR STARTUP VIA EMAIL ↗
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
      {/* SECTION 5: CLIENT TESTIMONIALS (FULL PAGED WITH 100% OPACITY CURVES) */}
      {/* ============================================================ */}
      <section id="testimonials" className="relative w-full min-h-screen px-4 sm:px-8 py-20 lg:py-24 border-t-[6px] border-[#fbda03] flex flex-col justify-center items-center gap-12 overflow-hidden bg-[#0c0c0d]">

        {/* Abstract Vibrant Ribbon Waves with 100% Opacity */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-100 z-0"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 250 C 350 650 850 150 1550 500"
            stroke="#fbda03"
            strokeWidth="70"
            strokeLinecap="round"
          />
          <path
            d="M -100 680 C 450 300 950 850 1550 320"
            stroke="#9bb8d3"
            strokeWidth="36"
            strokeLinecap="round"
          />
        </svg>

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

            <div className="relative bg-white text-black border-[4px] border-black p-6 sm:p-10 shadow-[10px_10px_0px_0px_#fbda03] rotate-[-1deg] flex flex-col justify-between gap-6 transition-transform hover:rotate-0">
              {/* 4 Corner Screws */}
              <div className="absolute top-3 left-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-2 h-[1.5px] bg-black rotate-45" />
              </div>
              <div className="absolute top-3 right-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-2 h-[1.5px] bg-black -rotate-45" />
              </div>
              <div className="absolute bottom-3 left-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-2 h-[1.5px] bg-black -rotate-45" />
              </div>
              <div className="absolute bottom-3 right-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
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

            <div className="relative bg-[#fbda03] text-black border-[4px] border-black p-6 sm:p-10 shadow-[10px_10px_0px_0px_#ffffff] rotate-[1.5deg] flex flex-col justify-between gap-6 transition-transform hover:rotate-0">
              {/* 4 Corner Screws */}
              <div className="absolute top-3 left-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-2 h-[1.5px] bg-black rotate-45" />
              </div>
              <div className="absolute top-3 right-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-2 h-[1.5px] bg-black -rotate-45" />
              </div>
              <div className="absolute bottom-3 left-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
                <div className="w-2 h-[1.5px] bg-black -rotate-45" />
              </div>
              <div className="absolute bottom-3 right-3 w-3.5 h-3.5 rounded-full bg-white border-[2px] border-black flex items-center justify-center">
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
      {/* SECTION 5.5: OLD CUSTOMER REFERRAL SCHEME (FULL PAGED)       */}
      {/* ============================================================ */}
      <section id="referral" className="relative w-full min-h-screen px-4 sm:px-8 py-20 lg:py-24 border-t-[6px] border-[#fbda03] flex flex-col justify-center items-center overflow-hidden bg-[#0c0c0d]">

        {/* Abstract Wavy Ribbon Curves with 100% Opacity */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-100 z-0"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 450 C 400 100 800 850 1550 400"
            stroke="#fbda03"
            strokeWidth="70"
            strokeLinecap="round"
          />
          <path
            d="M -100 200 C 500 700 900 200 1550 750"
            stroke="#b3cde3"
            strokeWidth="35"
            strokeLinecap="round"
          />
        </svg>

        {/* Abstract Referral Card Box */}
        <div className="relative z-10 w-full max-w-6xl bg-[#18181b] border-[4px] border-black p-8 sm:p-12 lg:p-16 shadow-[14px_14px_0px_0px_#fbda03] flex flex-col lg:flex-row items-center justify-between gap-10">

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
              INTRODUCE A CLIENT VIA EMAIL ↗
            </a>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: EXACT SCREENSHOT FOOTER SECTION                   */}
      {/* ============================================================ */}
      <footer id="contact" className="w-full bg-[#fbda03] text-black border-t-[8px] border-black pt-20 sm:pt-28 pb-12 px-4 sm:px-8 flex flex-col items-center justify-between min-h-[85vh]">
        <div className="max-w-5xl w-full flex flex-col items-center text-center my-auto">

          {/* Top Pill Badge: "READY TO SCALE AUTOMATICALLY?" */}
          <div className="bg-white border-[3px] border-black px-6 py-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-0.5deg]">
            <span className="font-anton text-lg sm:text-xl tracking-wider uppercase text-black">
              READY TO SCALE AUTOMATICALLY?
            </span>
          </div>

          {/* Main Giant Headline: "LET'S BUILD YOUR SYSTEMS." */}
          <h2 className="mt-8 font-anton text-[68px] sm:text-[110px] lg:text-[145px] leading-[0.88] uppercase tracking-tight text-black select-none">
            LET'S BUILD YOUR
            <br />
            SYSTEMS.
          </h2>

          {/* Description Paragraph */}
          <p className="mt-8 font-sans font-bold text-black text-base sm:text-lg max-w-2xl leading-relaxed tracking-tight">
            Tell us what you want to build or automate. We will review your requirements, design the architecture, and get your project into development immediately.
          </p>

          {/* Large Brutalist Button: "START YOUR PROJECT NOW" */}
          <button
            onClick={() => setIsBooked(!isBooked)}
            className="mt-10 bg-black text-white hover:bg-white hover:text-black border-[4px] border-black py-4 sm:py-5 px-8 sm:px-14 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer font-anton text-2xl sm:text-4xl lg:text-5xl uppercase tracking-wider block"
          >
            {isBooked ? "PROJECT REQUEST SENT — TALK SOON!" : "START YOUR PROJECT NOW ↗"}
          </button>

        </div>

        {/* Footer Bottom Bar: Direct Typography (No Boxes) & Real Social Icons */}
        <div className="w-full max-w-7xl mt-16 sm:mt-24 pt-6 border-t-[3.5px] border-black flex flex-col md:flex-row items-center justify-between gap-6 font-anton tracking-wider uppercase">

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

    </main>
  );
}
