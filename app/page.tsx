"use client";

import React, { useState } from "react";

export default function AgencyPosterPage() {
  const [activeService, setActiveService] = useState<number | null>(0);
  const [isBooked, setIsBooked] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");

  const services = [
    {
      id: "01",
      title: "AI AUTOMATIONS & AGENTS",
      desc: "Autonomous customer care agents, lead qualification pipelines, email triage, and multi-agent workflows that run 24/7 without manual touchpoints.",
      stats: "92% less manual hours",
    },
    {
      id: "02",
      title: "FULLSTACK WEB & PLATFORMS",
      desc: "Pixel-perfect, hyper-fast applications engineered with Next.js, Turbo, and custom high-converting brutalist or modern design systems.",
      stats: "0.2s Avg Page Speed",
    },
    {
      id: "03",
      title: "BUSINESS WORKFLOW ENGINE",
      desc: "Direct integration between CRMs (HubSpot, Salesforce), databases (PostgreSQL, Supabase), Slack/Discord alerts, and payment gateways.",
      stats: "100+ Custom Webhooks",
    },
    {
      id: "04",
      title: "GROWTH & CONVERSION OPT",
      desc: "Data-driven analytics, interactive user acquisition tools (ROI calculators, instant generators), and high-velocity conversion testing.",
      stats: "3.4x Conversion Lift",
    },
  ];

  const projects = [
    {
      tag: "AGENTIC WORKFLOW",
      name: "AUTOLEAD AI",
      client: "Fintech Venture",
      impact: "Autonomous inbound customer qualification with voice & WhatsApp bots, saving 34 hrs/week.",
      color: "#fbda03",
      textColor: "text-black",
      badge: "LIVE IN PROD",
      metric: "34 HRS/WK SAVED",
      linkText: "EXPLORE AGENT",
    },
    {
      tag: "ECOMMERCE SYSTEM",
      name: "NEO-CATALOG",
      client: "D2C Brand",
      impact: "Instant storefront generator that dynamically launches product landing pages based on user intent.",
      color: "#b3cde3",
      textColor: "text-black",
      badge: "SCALE PHASE",
      metric: "4.8X SALES VELOCITY",
      linkText: "VIEW DEPLOYMENT",
    },
    {
      tag: "OPS AUTOMATION",
      name: "SYNC-MATRIX",
      client: "Logistics SaaS",
      impact: "Unified inventory synchronization engine connecting SAP, Shopify, and warehouse barcode systems.",
      color: "#c59eb9",
      textColor: "text-black",
      badge: "ENTERPRISE",
      metric: "0% INVENTORY DESYNC",
      linkText: "READ METRICS",
    },
    {
      tag: "INTELLIGENT BOT",
      name: "PULSE DISPATCH",
      client: "Service Network",
      impact: "Automated invoice dispatching and payment reconciliation bot powered by computer vision OCR.",
      color: "#ffffff",
      textColor: "text-black",
      badge: "AI-OCR",
      metric: "$2.1M PROCESSED",
      linkText: "INSPECT SYSTEM",
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.tag.includes(activeFilter));

  return (
    <main className="min-h-screen bg-[#0c0c0d] text-white flex flex-col items-center justify-start selection:bg-[#fbda03] selection:text-black">
      
      {/* ============================================================ */}
      {/* FULLSCREEN SECTION 1: HERO (POSTER AESTHETIC EXPANDED)       */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-screen flex flex-col justify-between border-b-[8px] border-[#fbda03] overflow-hidden p-4 sm:p-8 lg:p-12">
        
        {/* Subtle halftone/grain background overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px]" />

        {/* ============================================================ */}
        {/* BACKGROUND ABSTRACT CURVED RIBBONS (FULLSCREEN ADAPTIVE)      */}
        {/* ============================================================ */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Giant Bold Yellow Ribbon looping across top right */}
          <path
            className="animate-ribbon-yellow"
            d="M 600 280 C 850 70 1200 40 1320 220 C 1440 380 1200 520 1500 680"
            stroke="#fbda03"
            strokeWidth="90"
            strokeLinecap="round"
            fill="none"
          />

          {/* Curved Sky-Blue Ribbon swooping across bottom left */}
          <path
            className="animate-ribbon-blue"
            d="M -60 520 C 350 400 150 820 480 800 C 600 790 580 680 440 660"
            stroke="#9bb8d3"
            strokeWidth="80"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* TOP BAR / NAVIGATION */}
        <header className="relative z-10 w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* "YOUR PRESENTS" Pill Button */}
            <div className="border-[2px] border-white/80 rounded-full px-5 py-2 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-md">
              <span className="text-[12px] font-bold tracking-widest text-white uppercase group-hover:text-black">
                YOUR PRESENTS
              </span>
            </div>

            <a
              href="#about"
              className="hidden sm:inline-block border-[1.5px] border-white/40 hover:border-white rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider text-gray-300 hover:text-white uppercase transition-all"
            >
              HOW WE BUILD
            </a>
            <a
              href="#projects"
              className="hidden sm:inline-block border-[1.5px] border-white/40 hover:border-white rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wider text-gray-300 hover:text-white uppercase transition-all"
            >
              PROJECTS
            </a>
          </div>

          {/* ILLUMINATING EYE / PSYCHEDELIC VISION SYMBOL */}
          <div className="relative w-28 sm:w-36 h-14 sm:h-16 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
            {/* Outer Eye Sclera Shape */}
            <div className="relative w-28 sm:w-36 h-14 sm:h-16 bg-white rounded-[50%] border-[3px] border-black flex items-center justify-center overflow-hidden shadow-lg">
              {/* Purple Circular Iris with Black Stroke */}
              <div className="relative w-11 sm:w-13 h-11 sm:h-13 bg-[#c59eb9] rounded-full border-[2.5px] border-black flex items-center justify-center animate-eye-pupil">
                {/* 4-Pointed Star Pupil */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 sm:w-7 h-6 sm:h-7 fill-black animate-star-spin"
                >
                  <path d="M12 0 C12 6 6 12 0 12 C6 12 12 18 12 24 C12 18 18 12 24 12 C18 12 12 6 12 0 Z" />
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* HERO TITLE SECTION: "NEED HELP BUILDING?" */}
        <div className="relative z-10 my-auto py-8 flex flex-col items-center justify-center max-w-6xl mx-auto w-full">
          {/* Top Banner Box: "NEED HELP" */}
          <div className="relative w-full bg-white text-black border-[4px] border-black px-4 sm:px-8 py-2 sm:py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <h1 className="font-anton text-[55px] sm:text-[105px] lg:text-[140px] leading-[0.88] tracking-[-0.02em] uppercase text-center select-none">
              NEED HELP
            </h1>
          </div>

          {/* Bottom Banner Box: "BUILDING?" */}
          <div className="relative w-full bg-white text-black border-x-[4px] border-b-[4px] border-black px-4 sm:px-8 py-2 sm:py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <h2 className="font-anton text-[52px] sm:text-[98px] lg:text-[132px] leading-[0.85] tracking-[-0.01em] uppercase text-center flex items-center justify-center select-none">
              BUILDIN
              {/* Pixelated/Dithered 'G?' detail */}
              <span className="inline-block relative">
                G
                <span className="absolute -inset-1 text-black opacity-30 select-none pointer-events-none scale-105 font-pixel">
                  G
                </span>
              </span>
              ?
            </h2>
          </div>

          {/* "AGENCY & AUTOMATIONS" Light-Blue Elliptical Pill Sticker */}
          <div className="relative -mt-5 sm:-mt-8 z-20">
            <div className="bg-[#b3cde3] border-[3.5px] border-black rounded-full px-8 sm:px-14 py-2 sm:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-1.5deg] hover:rotate-1 hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="font-archivo text-[20px] sm:text-[34px] tracking-wider uppercase text-black font-extrabold">
                AUTOMATIONS & WEB
              </span>
            </div>
          </div>

          {/* Hero Subtitle Tagline */}
          <p className="mt-8 text-center text-gray-300 text-sm sm:text-lg max-w-2xl font-medium tracking-wide">
            We architect and deploy autonomous AI agents, business workflow automations,
            and high-performance web systems that eliminate manual work.
          </p>
        </div>

        {/* HERO LOWER BAR: SERVICES SNIPPET + STARBURST + CTA + ADDRESS */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6">
          {/* Post-It Our Services Note */}
          <div className="lg:col-span-4 relative flex items-center gap-4">
            <div className="relative">
              {/* Pushpin */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 animate-pin-wiggle origin-bottom cursor-pointer">
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

              {/* Yellow Note */}
              <div className="bg-[#fbda03] border-[3px] border-black p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="font-anton text-black text-[28px] sm:text-[34px] leading-[0.92] uppercase tracking-tight">
                  OUR
                  <br />
                  SERVICES
                </div>
                <div className="mt-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-black">
                  END-TO-END AUTOMATIONS
                </div>
              </div>
            </div>

            {/* Quick Service Links */}
            <div className="flex flex-col gap-1.5 flex-1">
              {["01 AI AGENTS & BOTS", "02 ENTERPRISE AUTOMATION", "03 CUSTOM WEB APPS"].map(
                (s) => (
                  <div key={s} className="border-b border-white/30 pb-1 flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-wider text-gray-200 hover:text-[#fbda03] cursor-pointer transition-colors">
                      {s}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Middle Spark & CTA */}
          <div className="lg:col-span-5 flex items-center justify-center gap-4">
            {/* Twinkling 8-Point Asterisk */}
            <div className="animate-spark cursor-pointer">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <line x1="12" y1="0" x2="12" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="0" y1="12" x2="24" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="3.5" y1="3.5" x2="20.5" y2="20.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="20.5" y1="3.5" x2="3.5" y2="20.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Yellow Zigzag Squiggle */}
            <div className="animate-squiggle cursor-pointer">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M 2 18 L 6 12 L 10 18 L 14 12 L 18 18 L 22 12"
                  stroke="#fbda03"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Giant Action Button: BOOK NOW */}
            <button
              onClick={() => setIsBooked(!isBooked)}
              className="flex-1 bg-white text-black border-[3.5px] border-black py-2.5 px-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-[#fbda03] transition-all cursor-pointer"
            >
              <span className="font-anton text-[34px] sm:text-[44px] leading-none tracking-normal uppercase block text-center">
                {isBooked ? "WE GOT YOUR SPOT!" : "BOOK NOW"}
              </span>
            </button>
          </div>

          {/* Right Address & URL details */}
          <div className="lg:col-span-3 flex flex-col items-end gap-2">
            <div className="w-full bg-[#c59eb9] border-[3px] border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[1.5deg] hover:rotate-0 transition-transform cursor-pointer">
              <div className="text-[10px] font-bold text-black uppercase leading-[1.25] tracking-tight">
                GLOBAL REMOTE HEADQUARTERS
                <br />
                SAN FRANCISCO & WORLDWIDE
                <br />
                ACTIVE DEPLOYMENTS 24/7
              </div>
              <div className="flex justify-between items-center mt-2 pt-1 border-t border-black/20">
                <span className="text-[9px] font-black text-black uppercase">NEEDHELPBUILDING</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M 6 6 L 18 18 M 18 18 L 8 18 M 18 18 L 18 8"
                    stroke="#000"
                    strokeWidth="3.5"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
            </div>

            {/* Domain */}
            <a
              href="https://needhelpbuilding.com"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] font-bold tracking-widest text-white uppercase hover:text-[#fbda03] transition-colors mt-1"
            >
              WWW.NEEDHELPBUILDING.COM
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TICKER MARQUEE BAR                                           */}
      {/* ============================================================ */}
      <div className="w-full bg-[#fbda03] text-black border-b-[5px] border-black py-3 overflow-hidden whitespace-nowrap select-none font-anton text-2xl tracking-wider flex items-center shadow-lg">
        <div className="animate-marquee flex items-center gap-8">
          {[
            "AI AUTOMATIONS",
            "•",
            "CUSTOM LLM AGENTS",
            "•",
            "NEXT.JS APPS",
            "•",
            "ZERO MANUAL WORK",
            "•",
            "NEEDHELPBUILDING.COM",
            "•",
            "WORKFLOW INTEGRATIONS",
            "•",
            "AI AUTOMATIONS",
            "•",
            "CUSTOM LLM AGENTS",
            "•",
            "NEXT.JS APPS",
            "•",
            "ZERO MANUAL WORK",
            "•",
            "NEEDHELPBUILDING.COM",
            "•",
            "WORKFLOW INTEGRATIONS",
            "•",
          ].map((text, i) => (
            <span key={i} className="hover:scale-110 transition-transform cursor-default">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* SECTION 2: HOW WE BUILD / ABOUT THE AGENCY                   */}
      {/* ============================================================ */}
      <section id="about" className="relative w-full max-w-7xl px-4 sm:px-8 py-20 lg:py-28 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Header Badge & Title */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1 border-[2.5px] border-black font-anton text-lg tracking-wide w-fit rotate-[-1deg]">
              ABOUT THE AGENCY
            </div>
            <h2 className="font-anton text-5xl sm:text-7xl leading-[0.9] uppercase tracking-tight">
              STOP WASTING HOURS ON WORK ROBOTS CAN DO.
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-2 font-normal">
              At <strong className="text-[#fbda03]">needhelpbuilding.com</strong>, we don't just talk about AI—we build customized, battle-tested automations that plug directly into your current CRM, spreadsheets, databases, and customer channels.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              From lead capture and qualification to automated document processing and self-healing backend scripts, we turn chaotic business processes into seamless 24/7 revenue machines.
            </p>
          </div>

          {/* Interactive Services Breakdown */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((srv, idx) => {
                const isActive = activeService === idx;
                return (
                  <div
                    key={srv.id}
                    onClick={() => setActiveService(idx)}
                    className={`p-6 border-[3px] border-black transition-all cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? "bg-white text-black shadow-[6px_6px_0px_0px_#fbda03] translate-x-1 translate-y-1"
                        : "bg-[#141416] text-white hover:border-[#fbda03] shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-anton text-3xl">{srv.id}</span>
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 border border-black uppercase ${
                            isActive ? "bg-[#fbda03] text-black" : "bg-white/10 text-white"
                          }`}
                        >
                          {srv.stats}
                        </span>
                      </div>
                      <h3 className="font-anton text-2xl uppercase tracking-tight mb-2">
                        {srv.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${isActive ? "text-gray-800" : "text-gray-400"}`}>
                        {srv.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-black/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                      <span>{isActive ? "ACTIVE MODULE" : "CLICK TO VIEW"}</span>
                      <span>→</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 3 Step Workflow Process */}
        <div className="mt-8 border-[4px] border-black bg-[#111113] p-8 lg:p-12 shadow-[8px_8px_0px_0px_#fbda03]">
          <h3 className="font-anton text-3xl sm:text-4xl text-center uppercase tracking-wide mb-8">
            HOW WE SHIP IN 3 SIMPLE PHASES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-[2.5px] border-white/20 p-5 bg-[#17171a] flex flex-col gap-3">
              <span className="font-anton text-4xl text-[#fbda03]">PHASE 01</span>
              <h4 className="font-anton text-2xl uppercase">SYSTEM AUDIT & BLUEPRINT</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We deep dive into your current tools, identifying repetitive bottlenecks and mapping out high-leverage automations.
              </p>
            </div>
            <div className="border-[2.5px] border-[#fbda03] p-5 bg-[#17171a] flex flex-col gap-3 shadow-[4px_4px_0px_0px_#fbda03]">
              <span className="font-anton text-4xl text-[#fbda03]">PHASE 02</span>
              <h4 className="font-anton text-2xl uppercase">RAPID BUILD & INTEGRATION</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We write custom logic, deploy LLM agents, and wire API connectors into your stack with real-time test runs.
              </p>
            </div>
            <div className="border-[2.5px] border-white/20 p-5 bg-[#17171a] flex flex-col gap-3">
              <span className="font-anton text-4xl text-[#b3cde3]">PHASE 03</span>
              <h4 className="font-anton text-2xl uppercase">DEPLOY & AUTONOMOUS SCALE</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Full handover with telemetry dashboards, automated monitoring, fail-safes, and continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: PROJECTS (FULLSCREEN ADAPTIVE PORTFOLIO)          */}
      {/* ============================================================ */}
      <section id="projects" className="relative w-full max-w-7xl px-4 sm:px-8 py-20 lg:py-28 border-t-[5px] border-white/20 flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#fbda03] text-black px-3 py-1 border-[2.5px] border-black font-anton text-lg tracking-wide w-fit mb-3">
              PROVEN DEPLOYMENTS
            </div>
            <h2 className="font-anton text-5xl sm:text-7xl uppercase tracking-tight">
              RECENT PROJECTS
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "AGENTIC", "ECOMMERCE", "OPS"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider border-[2px] border-black transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-white text-black shadow-[3px_3px_0px_0px_#fbda03]"
                    : "bg-[#18181b] text-gray-300 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: Designed to fit screen with high-impact brutalist cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div
              key={proj.name}
              style={{ backgroundColor: proj.color }}
              className="border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)] transition-all duration-300 flex flex-col justify-between group cursor-pointer text-black"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-black text-white text-[11px] font-black uppercase px-2.5 py-1 tracking-wider">
                    {proj.tag}
                  </span>
                  <span className="border-[2px] border-black text-[11px] font-black uppercase px-2.5 py-0.5 tracking-wider bg-white">
                    {proj.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-anton text-4xl sm:text-5xl uppercase tracking-tight text-black mb-1 group-hover:scale-[1.02] transition-transform origin-left">
                  {proj.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-black/70 mb-4">
                  CLIENT: {proj.client}
                </p>

                {/* Project Impact Description */}
                <p className="text-sm font-medium leading-relaxed text-black/90 mb-6">
                  {proj.impact}
                </p>
              </div>

              {/* Metric Card & Action link */}
              <div className="pt-4 border-t-[2.5px] border-black flex items-center justify-between">
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-wider text-black/60">
                    KEY RESULT
                  </span>
                  <span className="font-anton text-xl sm:text-2xl uppercase tracking-wide text-black">
                    {proj.metric}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-black text-white px-4 py-2 font-anton text-sm uppercase tracking-wider group-hover:bg-white group-hover:text-black group-hover:border-[2px] group-hover:border-black transition-all">
                  <span>{proj.linkText}</span>
                  <span className="text-base">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: BIG INTERACTIVE BOOKING & CONTACT FOOTER          */}
      {/* ============================================================ */}
      <footer className="w-full bg-[#fbda03] text-black border-t-[8px] border-black p-8 sm:p-14 lg:p-20 flex flex-col items-center">
        <div className="max-w-5xl w-full flex flex-col items-center text-center gap-8">
          
          <div className="border-[3px] border-black bg-white px-4 py-1 font-anton text-xl tracking-wider uppercase rotate-[-1deg]">
            READY TO SCALE AUTOMATICALLY?
          </div>

          <h2 className="font-anton text-5xl sm:text-7xl lg:text-9xl leading-[0.88] uppercase tracking-tight">
            LET'S BUILD YOUR SYSTEMS.
          </h2>

          <p className="text-black font-medium text-base sm:text-xl max-w-2xl">
            Drop us your current challenge or workflow bottleneck. We will review your architecture and send you a custom automation blueprint within 24 hours.
          </p>

          {/* Large CTA button */}
          <button
            onClick={() => setIsBooked(true)}
            className="w-full sm:w-auto bg-black text-white hover:bg-white hover:text-black border-[4px] border-black py-4 px-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
          >
            <span className="font-anton text-3xl sm:text-5xl uppercase tracking-wider block">
              {isBooked ? "REQUEST RECEIVED — TALK SOON!" : "CLAIM YOUR AUTOMATION BLUEPRINT"}
            </span>
          </button>

          {/* Links and Copyright */}
          <div className="mt-8 pt-8 border-t-[3px] border-black w-full flex flex-col sm:flex-row items-center justify-between gap-4 font-bold text-xs sm:text-sm uppercase tracking-wider">
            <span>© 2026 NEED HELP BUILDING? ALL RIGHTS RESERVED.</span>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:underline">ABOUT</a>
              <a href="#projects" className="hover:underline">PROJECTS</a>
              <a href="https://needhelpbuilding.com" target="_blank" rel="noreferrer" className="hover:underline">
                NEEDHELPBUILDING.COM
              </a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
