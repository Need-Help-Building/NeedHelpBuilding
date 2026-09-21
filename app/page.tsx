"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Eye,
  Play,
  Send,
  ExternalLink,
  Bot,
  PhoneCall,
  Zap,
  Layers,
  ArrowUpRight,
  Quote,
  CheckCircle2,
  Menu,
  X,
  Code2,
  Palette,
  Sparkles,
  Users
} from "lucide-react";

import InstantStoreGenerator from "@/components/InstantStoreGenerator";
import { sound } from "@/components/SoundEffects";
import { translations, SupportedLanguage } from "@/lib/translations";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>("EN");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [blueprintMode, setBlueprintMode] = useState<Record<string, boolean>>({
    yourstorehere: false,
    "caller-work": false
  });

  const languages = ["EN", "DE", "FR", "ES"];

  const toggleBlueprint = (id: string) => {
    sound.playClick();
    setBlueprintMode((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const projects = [
    {
      id: "yourstorehere",
      title: "YourStoreHere",
      badge: "AI-Powered Autonomous E-Commerce",
      desc: "An intelligent autonomous commerce platform that generates dynamic storefronts, instant product catalogs, and automated checkout pipelines without manual inventory configuration.",
      url: "https://yourstorehere.vercel.app",
      domain: "yourstorehere.vercel.app",
      tags: ["Next.js 15", "Autonomous Agents", "Dynamic Storefront", "Vercel"],
      metrics: ["4.2x Higher Conversion", "<80ms Catalog Generation", "Zero Config Setup"],
      gradient: "from-blue-600/10 via-indigo-500/5 to-transparent",
      accent: "#3B82F6",
      blueprint: [
        "Prompt Input / Product CSV Stream",
        "NLP Feature Extractor & Tag Generator",
        "Real-Time Layout Synthesis Engine",
        "Edge-Rendered SSR via Vercel",
        "Stripe Autonomous Payment Dispatcher"
      ]
    },
    {
      id: "caller-work",
      title: "Caller.work",
      badge: "Enterprise Autonomous Voice Agent",
      desc: "Ultra-low latency conversational AI voice infrastructure. Automates high-volume outbound qualifying, inbound customer dispatch, appointment bookings, and CRM auto-sync in real time.",
      url: "https://caller.work",
      domain: "caller.work",
      tags: ["Voice AI", "WebRTC", "Sub-300ms Latency", "CRM Automation"],
      metrics: ["99.2% Intent Accuracy", "Sub-300ms Audio Response", "24/7 Scalable Lines"],
      gradient: "from-amber-600/10 via-orange-500/5 to-transparent",
      accent: "#F59E0B",
      blueprint: [
        "Inbound SIP / WebRTC Audio Stream",
        "Neural Streaming Speech-to-Speech",
        "Intent Recognition & Dynamic Context Router",
        "40ms Interruption Halt Logic",
        "Real-Time Salesforce / HubSpot Webhook Sync"
      ]
    }
  ];

  const services = [
    {
      icon: Palette,
      title: "Brand Systems & Identity",
      desc: "Distinctive digital-first visual identities, design languages, typography systems, and dynamic creative assets engineered to stand out in crowded tech markets.",
      badge: "Creative Direction"
    },
    {
      icon: Layers,
      title: "Autonomous Web & Platforms",
      desc: "Ultra-fast Next.js architectures with dynamic AI personalization and instant asset synthesis, inspired by yourstorehere.",
      badge: "Full-Stack Dev"
    },
    {
      icon: PhoneCall,
      title: "AI Voice & Telephony",
      desc: "Custom implementations of human-quality voice dispatchers powered by technologies like Caller.work for customer support and sales.",
      badge: "Voice Engineering"
    },
    {
      icon: Zap,
      title: "Systems Consulting & Training",
      desc: "Deep operational audits, custom LangGraph agent loops, API integration, and hands-on team enablement for enterprise automation cutovers.",
      badge: "Architecture & Ops"
    }
  ];

  const team = [
    {
      name: "Govind Verma",
      role: "Founder & CEO",
      focus: "Strategic Architecture & Venture Engineering",
      status: "Active // Systems Lead",
      initials: "GV"
    },
    {
      name: "Ankur Kumar",
      role: "Creative Director",
      focus: "Brand Identity, Narrative & Motion Systems",
      status: "Studio // Design Craft",
      initials: "AK"
    },
    {
      name: "Vaibhav Singh",
      role: "Lead Systems Developer",
      focus: "Full-Stack Next.js, WebRTC & Edge Pipelines",
      status: "Engineering // Core Stack",
      initials: "VS"
    },
    {
      name: "Suyash Shukla",
      role: "Design & Experience Lead",
      focus: "UI/UX Engineering, Interaction Design & Prototyping",
      status: "Experience // Prototyping",
      initials: "SS"
    },
    {
      name: "Divyanshu Natha Tripathi",
      role: "Growth & Optimization Specialist",
      focus: "Technical SEO, Telemetry Analytics & Conversion Ops",
      status: "Growth // Telemetry",
      initials: "DT"
    }
  ];

  const testimonials = [
    {
      quote: "Integrating Caller.work into our support pipeline slashed our response times to zero and handled 12,000 inbound calls without a single human dispatcher.",
      author: "Julian Vance",
      role: "VP of Customer Operations",
      company: "Aura Logistics"
    },
    {
      quote: "The speed and architecture delivered on our AI storefront platform was staggering. It converts 38% better than our legacy Shopify setup.",
      author: "Elena Rostova",
      role: "Founder & CEO",
      company: "Verve Retail Labs"
    },
    {
      quote: "Future Automations combined deep brand storytelling with an autonomous engineering engine. The ROI showed up in week two.",
      author: "Marcus Chen",
      role: "Chief Technology Officer",
      company: "Synapse Grid"
    }
  ];

  const faqs = [
    {
      q: "How do your AI agents integrate with existing software stacks?",
      a: "Our systems connect via standard REST/GraphQL APIs, webhooks, and direct database adapters. Whether you run PostgreSQL, Salesforce, HubSpot, or bespoke internal tooling, our agents execute tasks safely inside your permissions boundary."
    },
    {
      q: "What makes Caller.work voice agents different from traditional IVR?",
      a: "Traditional IVR forces callers into rigid number trees. Caller.work uses sub-300ms neural streaming speech-to-speech models that understand human cadence, interruptions, nuance, and intent with near-instant conversational reasoning."
    },
    {
      q: "Can you customize solutions like YourStoreHere for private enterprise cataloging?",
      a: "Yes. YourStoreHere's autonomous catalog generation and instant storefront engine can be whitelabeled and connected to internal PIM systems, supply chain feeds, or B2B wholesaler databases."
    },
    {
      q: "What is the typical deployment timeframe?",
      a: "Targeted workflow automations go live in 5 to 7 business days. Complex agentic platforms and voice infrastructures are deployed within 2 to 3 weeks with full regression testing and team training."
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      sound.playChime();
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#EDEDF0] text-[#0A0A0C] font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* 
        HERO SECTION - RECONSTRUCTED COMPONENT-BY-COMPONENT (NO TEMPLATE BG)
        1. Clean studio alabaster background
        2. Misty dark craggy mountains foreground layer
        3. Cyborg robot (hero.png) positioned precisely, scaled +20%, anchored right
        4. Translucent amber HUD glass frame (ANALYZE / AUTOMATE / SCALE)
        5. Exact typography, buttons, "Our Focus" card, bottom quote and scroll mouse
      */}
      <div className="relative w-full min-h-[960px] lg:min-h-[1020px] bg-[#E8E9EC] overflow-hidden">
        {/* Layer 1: Clean background base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EDEDF0] via-[#EDEDF0] to-[#E5E6E9] pointer-events-none z-0"></div>

        {/* Layer 2: Misty craggy mountain rocks foreground */}
        <div className="absolute -bottom-6 left-0 right-0 h-[360px] sm:h-[440px] w-full z-10 pointer-events-none opacity-85 mix-blend-multiply">
          <Image
            src="/mountain_backdrop.jpg"
            alt="Misty craggy mountain rocks"
            fill
            priority
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#EDEDF0] via-transparent to-transparent h-40 bottom-0"></div>
        </div>

        {/* Layer 3: Cyborg Robot (hero.png) positioned smoothly with alpha edge feathering */}
        <div className="absolute top-[2%] sm:top-[0%] md:top-[1%] right-[-6%] sm:right-[1%] lg:right-[3%] xl:right-[5%] w-[90%] sm:w-[70%] lg:w-[56%] xl:w-[52%] h-[92%] min-h-[740px] max-h-[1050px] z-10 flex items-center justify-end pointer-events-none select-none">
          <div className="relative w-full h-full hero-cyborg-mask">
            <Image
              src="/hero.png"
              alt="Futuristic AI android cyborg"
              fill
              priority
              className="object-contain object-right-bottom drop-shadow-[0_24px_50px_rgba(0,0,0,0.08)] scale-110 sm:scale-120 origin-bottom-right"
            />
          </div>
        </div>

        {/* Layer 4: Crisp Floating Holographic HUD Card (ANALYZE / AUTOMATE / SCALE) */}
        <div className="absolute top-[32%] sm:top-[34%] lg:top-[36%] right-[10%] sm:right-[14%] lg:right-[18%] xl:right-[20%] z-20 pointer-events-none select-none">
          <div className="w-[210px] sm:w-[230px] rounded-2xl p-4 sm:p-5 hud-floating-pill relative border border-white/90">
            {/* Ambient amber top & corner accent */}
            <div className="absolute -top-[1.5px] right-6 w-14 h-[2px] bg-amber-400 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.9)]"></div>
            <div className="absolute -left-[1.5px] top-6 h-8 w-[2px] bg-amber-400/80 rounded-full"></div>

            <div className="space-y-3.5 text-left font-mono">
              <div>
                <div className="text-[11px] tracking-widest text-[#111216] font-bold mb-1 flex items-center justify-between">
                  <span>{translations[currentLang].hud.analyze}</span>
                  <span className="text-[10px] text-amber-600 font-semibold">92%</span>
                </div>
                <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-gradient-to-r from-amber-500 to-amber-300 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                </div>
              </div>

              <div>
                <div className="text-[11px] tracking-widest text-[#111216] font-bold mb-1 flex items-center justify-between">
                  <span>{translations[currentLang].hud.automate}</span>
                  <span className="text-[10px] text-black/60 font-semibold">78%</span>
                </div>
                <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-black/80 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="text-[11px] tracking-widest text-[#111216] font-bold mb-1 flex items-center justify-between">
                  <span>{translations[currentLang].hud.scale}</span>
                  <span className="text-[10px] text-black/60 font-semibold">100%</span>
                </div>
                <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-black/70 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient background circular halos */}
        <div className="absolute top-[16%] right-[12%] w-[440px] h-[440px] rounded-full border border-white/60 pointer-events-none opacity-30 z-0"></div>
        <div className="absolute top-[8%] right-[5%] w-[640px] h-[640px] rounded-full border border-amber-300/15 pointer-events-none opacity-40 z-0"></div>

        {/* TOP NAVIGATION BAR */}
        <header className="relative z-30 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-8 pb-4">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8 2.2L2.5 22.8C2.1 23.5 2.6 24.5 3.4 24.5H10.5C11.1 24.5 11.7 24.2 12.0 23.6L16.2 16.0C16.5 15.4 17.4 15.4 17.7 16.0L21.9 23.6C22.2 24.2 22.8 24.5 23.4 24.5H24.5C25.3 24.5 25.8 23.5 25.4 22.8L14.2 2.2C13.8 1.5 12.8 1.5 12.4 2.2"
                    fill="#0A0A0C"
                  />
                  <path
                    d="M7.8 24.5L14 13.5L20.2 24.5H7.8Z"
                    fill="#0A0A0C"
                    opacity="0.22"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-[1.02]">
                <span className="font-bold text-[17px] tracking-tight text-[#0A0A0C]">
                  future
                </span>
                <span className="font-semibold text-[17px] tracking-tight text-[#0A0A0C]">
                  automations
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[13.5px] font-medium text-[#2A2C35]">
              <Link
                href="/services"
                className="hover:text-black transition-colors"
              >
                {translations[currentLang].nav.services}
              </Link>
              <Link
                href="/work"
                className="hover:text-black transition-colors"
              >
                {translations[currentLang].nav.work}
              </Link>
              <Link
                href="/process"
                className="hover:text-black transition-colors"
              >
                {translations[currentLang].nav.process}
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-black transition-colors"
              >
                {translations[currentLang].nav.about}
              </Link>
              <Link
                href="#team"
                className="hover:text-black transition-colors"
              >
                {translations[currentLang].nav.team}
              </Link>
              <Link
                href="#contact"
                className="hover:text-black transition-colors"
              >
                {translations[currentLang].nav.contact}
              </Link>

              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/5 hover:bg-black/10 hover:text-black transition-colors focus:outline-none text-[12.5px] font-mono font-semibold"
                >
                  <span>{currentLang}</span>
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg py-1 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLang(lang as SupportedLanguage);
                          setLangDropdownOpen(false);
                          sound.playClick();
                        }}
                        className={`w-full text-left px-3.5 py-1.5 text-xs hover:bg-gray-100 transition-colors flex items-center justify-between ${
                          currentLang === lang ? "font-bold text-black bg-gray-50" : "text-gray-600"
                        }`}
                      >
                        <span>{lang}</span>
                        {currentLang === lang && <span className="w-1.5 h-1.5 rounded-full bg-black"></span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Right "Let's Talk" Capsule Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A0A0C] text-white text-[13.5px] font-medium shadow-sm hover:bg-[#202228] transition-all group"
              >
                <span>{translations[currentLang].nav.letsTalk}</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-800 hover:text-black"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl space-y-4">
              <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-800">
                <Link href="/services" onClick={() => setMobileMenuOpen(false)}>{translations[currentLang].nav.services}</Link>
                <Link href="/work" onClick={() => setMobileMenuOpen(false)}>{translations[currentLang].nav.work}</Link>
                <Link href="/process" onClick={() => setMobileMenuOpen(false)}>{translations[currentLang].nav.process}</Link>
                <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)}>{translations[currentLang].nav.about}</Link>
                <Link href="#team" onClick={() => setMobileMenuOpen(false)}>{translations[currentLang].nav.team}</Link>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>{translations[currentLang].nav.contact}</Link>
              </nav>
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">Language:</span>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang as SupportedLanguage);
                        sound.playClick();
                      }}
                      className={`px-2 py-1 text-xs font-mono rounded ${currentLang === lang ? "bg-black text-white" : "bg-gray-100 text-gray-700"}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </header>

        {/* HERO SECTION MAIN CONTENT */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pt-8 sm:pt-14 pb-8 min-h-[calc(100vh-90px)] flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 xl:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-3 mb-5 sm:mb-6">
                <span className="text-[12px] sm:text-[13px] font-mono uppercase tracking-[0.25em] text-[#555865] font-medium">
                  {translations[currentLang].hero.badge}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/5 border border-black/10 text-[11px] font-mono text-gray-800 font-semibold shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {translations[currentLang].hero.proofPill}
                </span>
              </div>

              <h1 className="text-[44px] sm:text-[62px] md:text-[74px] lg:text-[78px] font-normal leading-[1.04] tracking-[-0.035em] text-[#0A0A0C] mb-6">
                {translations[currentLang].hero.titleLine1}<br />
                {translations[currentLang].hero.titleLine2}<br />
                {translations[currentLang].hero.titleLine3}
              </h1>

              <p className="text-[15px] sm:text-[16.5px] leading-[1.6] text-[#4A4E5A] max-w-lg mb-8 font-normal">
                {translations[currentLang].hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-5 sm:gap-7 mb-12">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0A0A0C] text-white text-[14px] font-medium tracking-wide shadow-md hover:bg-[#1C1E24] transition-all"
                >
                  {translations[currentLang].hero.startProject}
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-[#181A22] hover:text-black group transition-all"
                >
                  <span>{translations[currentLang].hero.seeWork}</span>
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5 font-light">→</span>
                </Link>
              </div>

              {/* "Our Focus" Glassmorphic Feature Card */}
              <div className="w-full max-w-[340px] sm:max-w-[360px] hud-glass-card rounded-[22px] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.04)] border border-white/90 hover:border-white transition-all duration-300 group cursor-default">
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 border border-gray-200/70 shadow-2xs">
                    <span className="text-xs font-semibold text-[#181920]">
                      {translations[currentLang].hero.focusTitle}
                    </span>
                  </div>
                  <div className="text-gray-400 group-hover:text-black transition-colors p-1">
                    <Eye size={17} strokeWidth={1.75} />
                  </div>
                </div>
                <p className="text-[12.5px] leading-[1.65] text-[#525663]">
                  {translations[currentLang].hero.focusDesc}
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION: QUOTE + MOUSE SCROLL INDICATOR */}
          <div className="w-full pt-10 pb-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-gray-300/60 mt-10">
            <div className="flex items-center gap-4 group">
              <button
                onClick={() => {
                  sound.playClick();
                  setVideoModalOpen(true);
                }}
                className="relative w-20 h-13 rounded-xl overflow-hidden cursor-pointer shadow-md border border-white/90 group-hover:scale-105 transition-all duration-300 focus:outline-none"
                aria-label="Play agency showreel"
              >
                <Image
                  src="/mountain_thumb.jpg"
                  alt="Agency showreel overview"
                  fill
                  className="object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-amber-400 transition-colors">
                    <Play size={12} className="fill-black text-black ml-0.5" />
                  </div>
                </div>
              </button>

              <div className="flex flex-col select-none">
                <p className="text-[12.5px] sm:text-[13px] text-[#22242B] font-medium leading-tight tracking-tight">
                  &ldquo;{translations[currentLang].hero.quoteLine1}
                </p>
                <p className="text-[12.5px] sm:text-[13px] text-[#22242B] font-medium leading-tight tracking-tight">
                  {translations[currentLang].hero.quoteLine2}&rdquo;
                </p>
              </div>
            </div>

            <Link
              href="#metrics"
              className="flex items-center gap-2.5 text-[12px] font-mono text-[#2B2D35] select-none group hover:text-black transition-colors"
            >
              <div className="w-4 h-6 rounded-full border-[1.5px] border-[#0A0A0C] flex items-start justify-center pt-1 group-hover:border-black transition-colors">
                <div className="w-1 h-1.5 bg-[#0A0A0C] rounded-full animate-scroll-wheel"></div>
              </div>
              <span className="tracking-tight font-medium">{translations[currentLang].hero.scrollToStart}</span>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDEBAR: VERTICAL SLIDER PAGINATION WITH TOOLTIPS */}
        <div className="hidden lg:flex fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-30 flex-col items-center space-y-4 select-none">
          <span className="text-[11px] font-mono text-gray-500 font-semibold">01</span>
          {[
            { idx: 0, label: translations[currentLang].sections.hero, href: "#" },
            { idx: 1, label: translations[currentLang].sections.metrics, href: "#metrics" },
            { idx: 2, label: translations[currentLang].sections.work, href: "#work" },
            { idx: 3, label: translations[currentLang].sections.services, href: "#services" },
            { idx: 4, label: translations[currentLang].sections.team, href: "#team" },
            { idx: 5, label: translations[currentLang].sections.contact, href: "#contact" }
          ].map((step) => {
            const isActive = activeStep === step.idx;
            return (
              <a
                key={step.idx}
                href={step.href}
                onClick={() => setActiveStep(step.idx)}
                className="relative w-4 h-4 flex items-center justify-center group focus:outline-none transition-transform"
                aria-label={step.label}
              >
                {/* Tooltip on hover */}
                <div className="absolute right-7 px-2.5 py-1 bg-black text-white text-[11px] font-mono rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md">
                  {step.label}
                </div>
                {isActive ? (
                  <>
                    <span className="absolute w-4 h-4 rounded-full border border-black group-hover:scale-110 transition-transform"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  </>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-gray-400/80 group-hover:bg-black group-hover:scale-125 transition-all"></span>
                )}
              </a>
            );
          })}
          <span className="text-[11px] font-mono text-gray-500 font-semibold">06</span>
        </div>
      </div>

      {/* METRICS STRIP */}
      <section id="metrics" className="relative z-20 w-full border-y border-gray-300/70 bg-white/50 backdrop-blur-md py-8">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="border-r border-gray-200/80 last:border-none pr-4">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0C] font-mono">
              99.4%
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{translations[currentLang].metrics.taskAccuracy}</p>
          </div>
          <div className="border-r border-gray-200/80 last:border-none pr-4">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0C] font-mono">
              &lt;&nbsp;300ms
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{translations[currentLang].metrics.audioLatency}</p>
          </div>
          <div className="border-r border-gray-200/80 last:border-none pr-4">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0C] font-mono">
              18,400+
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{translations[currentLang].metrics.hoursSaved}</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0C] font-mono">
              4.8x
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{translations[currentLang].metrics.clientRoi}</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS WITH ARCHITECTURAL BLUEPRINT FLIP MODES */}
      <section id="work" className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#0A0A0C]">
              {translations[currentLang].work.title}
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:opacity-75 transition-opacity"
          >
            <span>{translations[currentLang].work.exploreAll}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((proj) => {
            const isBlueprint = blueprintMode[proj.id];
            return (
              <div
                key={proj.id}
                className="group relative rounded-3xl hud-glass-card p-8 sm:p-10 border border-white/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${proj.gradient} rounded-full blur-3xl pointer-events-none`}></div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-[11.5px] font-mono uppercase tracking-wider text-gray-500 font-semibold">
                      {proj.badge}
                    </span>
                    <button
                      onClick={() => toggleBlueprint(proj.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium transition-all ${
                        isBlueprint
                          ? "bg-black text-white"
                          : "bg-black/5 hover:bg-black/10 text-gray-800"
                      }`}
                    >
                      <Code2 size={13} />
                      <span>{isBlueprint ? translations[currentLang].work.closeArch : translations[currentLang].work.inspectArch}</span>
                    </button>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#0A0A0C] mb-4">
                    {proj.title}
                  </h3>

                  {isBlueprint ? (
                    <div className="p-5 rounded-2xl bg-[#0A0A0C] text-white font-mono text-xs space-y-3 mb-8 animate-fade-in shadow-inner">
                      <div className="text-[11px] text-gray-400 uppercase tracking-wider pb-2 border-b border-white/10">
                        PRODUCTION DATA-FLOW TOPOLOGY
                      </div>
                      {proj.blueprint.map((node, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-blue-400 font-bold">[{i + 1}]</span>
                          <span className="text-gray-200">{node}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="text-[14.5px] leading-relaxed text-gray-600 mb-8 font-normal">
                        {proj.desc}
                      </p>

                      <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-white/70 border border-gray-200/60 shadow-2xs">
                        {proj.metrics.map((m, idx) => (
                          <div key={idx} className="text-center">
                            <span className="text-xs sm:text-[13px] font-semibold text-gray-900 block font-mono">
                              {m}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200/70">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/90 border border-gray-200/70 text-[11px] font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all shadow-sm"
                  >
                    <span>Launch Live Platform ({proj.domain})</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTERACTIVE INSTANT STOREFRONT GENERATOR */}
      <section id="interactive-labs" className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#0A0A0C] mb-4">
            Test our autonomous engines live
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Experience instant product catalog synthesis and storefront rendering directly in your browser.
          </p>
        </div>

        <InstantStoreGenerator />
      </section>

      {/* CORE SERVICES SECTION */}
      <section id="services" className="relative z-20 w-full border-t border-gray-300/70 bg-white/40 py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#0A0A0C] mb-4">
              Autonomous architectures tailored to your enterprise
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We eliminate manual human bottlenecks by engineering autonomous software layers that communicate directly with your existing infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="hud-glass-card rounded-2xl p-7 border border-white/80 hover:border-black/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6 shadow-sm">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold mb-2 block">
                      {srv.badge}
                    </span>
                    <h3 className="text-xl font-medium tracking-tight text-[#0A0A0C] mb-3">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-200/60">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-black inline-flex items-center gap-1 group"
                    >
                      <span>Explore specs</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section id="testimonials" className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#0A0A0C]">
            Trusted by founders and operational leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="hud-glass-card rounded-3xl p-8 border border-white/80 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <Quote className="text-black/30 mb-5" size={28} />
                <p className="text-[15px] leading-relaxed text-gray-700 font-normal mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/70">
                <div className="font-semibold text-sm text-[#0A0A0C]">{t.author}</div>
                <div className="text-xs text-gray-500 mt-0.5">{t.role} · <span className="text-black font-medium">{t.company}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE STUDIO & LEADERSHIP SECTION (INSPIRED BY LATERALLY INVERTED STUDIO) */}
      <section id="team" className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-24 border-t border-gray-300/70">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#555865] mb-3 font-semibold">
              {translations[currentLang].team.badge}
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#0A0A0C] mb-4">
              {translations[currentLang].team.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {translations[currentLang].team.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-500 bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-2xs">
              CORE COLLECTIVE // 5 LEADS
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="hud-glass-card rounded-3xl p-7 border border-white/80 hover:border-black/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-black text-white font-mono font-bold text-sm flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {member.initials}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-600 bg-black/5 px-2.5 py-1 rounded-md font-semibold">
                    {member.status}
                  </span>
                </div>

                <h3 className="text-xl font-medium tracking-tight text-[#0A0A0C] mb-1">
                  {member.name}
                </h3>
                <div className="text-xs font-mono font-semibold text-blue-700 mb-3">
                  {member.role}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {member.focus}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>// studio_member_{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
              </div>
            </div>
          ))}

          {/* 6th Card: Join Studio / Culture Card */}
          <div className="hud-glass-card rounded-3xl p-7 border border-dashed border-gray-300 bg-white/40 flex flex-col justify-between hover:border-black/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-2xs text-black">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-medium tracking-tight text-[#0A0A0C] mb-2">
                Join the Collective
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                We are constantly looking for talented systems developers, brand designers, and prompt engineers to collaborate on global enterprise builds.
              </p>
            </div>
            <div className="pt-5 border-t border-gray-200/60">
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:underline"
              >
                <span>Inquire about open roles</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative z-20 w-full border-t border-gray-300/70 bg-white/40 py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#0A0A0C] mb-4">
              Answers to technical and strategic queries
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Need architectural clarification on voice agent latency, API security boundaries, or custom models?
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:underline"
            >
              <span>Schedule technical audit</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => {
                      sound.playClick();
                      setOpenFaq(isOpen ? null : idx);
                    }}
                    className="w-full flex justify-between items-center px-6 py-4.5 text-left font-medium text-gray-900 hover:text-black"
                  >
                    <span className="text-sm sm:text-[15px] font-medium pr-4">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`transform transition-transform duration-200 text-gray-500 shrink-0 ${
                        isOpen ? "rotate-180 text-black" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLEAN FOOTER */}
      <footer id="contact" className="relative z-20 border-t border-gray-300/70 bg-[#E6E7EA] py-16">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-300/70">
            <div className="lg:col-span-6">
              <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-[#0A0A0C] mb-4">
                Ready to automate your enterprise advantage?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base max-w-md mb-8">
                Reach our engineering team directly for custom integrations, architectural assessments, or agentic deployments.
              </p>

              <form onSubmit={handleSubscribe} className="relative w-full max-w-md">
                <div className="flex items-center bg-white rounded-full shadow-sm overflow-hidden border border-gray-300/80 p-1.5 focus-within:ring-2 focus-within:ring-black transition-all">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="grow min-w-0 px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all shrink-0 text-xs sm:text-sm font-medium flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Request Brief</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
                {subscribed && (
                  <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-emerald-800 text-xs font-medium animate-fade-in shadow-sm">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Inquiry received! An engineering lead will reach out to your inbox within 2 hours.</span>
                  </div>
                )}
              </form>
            </div>

            <div className="lg:col-span-6 flex justify-start lg:justify-end">
              <div className="grid grid-cols-3 gap-8 sm:gap-16 text-left">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
                    Solutions
                  </h4>
                  <nav className="space-y-2 text-sm text-gray-700">
                    <a href="https://yourstorehere.vercel.app" target="_blank" rel="noopener noreferrer" className="block hover:text-black transition-colors">YourStoreHere</a>
                    <a href="https://caller.work" target="_blank" rel="noopener noreferrer" className="block hover:text-black transition-colors">Caller.work</a>
                    <Link href="/services" className="block hover:text-black transition-colors">Agentic Systems</Link>
                    <Link href="/services" className="block hover:text-black transition-colors">Voice Engine</Link>
                  </nav>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
                    Company
                  </h4>
                  <nav className="space-y-2 text-sm text-gray-700">
                    <Link href="/work" className="block hover:text-black transition-colors">Case Studies</Link>
                    <Link href="/process" className="block hover:text-black transition-colors">Methodology</Link>
                    <Link href="#testimonials" className="block hover:text-black transition-colors">Client Reviews</Link>
                    <Link href="/services" className="block hover:text-black transition-colors">Capabilities</Link>
                  </nav>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-4">
                    Connect
                  </h4>
                  <nav className="space-y-2 text-sm text-gray-700">
                    <a href="mailto:contact@futureautomations.com" className="block hover:text-black transition-colors">Direct Email</a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="block hover:text-black transition-colors">X / Twitter</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block hover:text-black transition-colors">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block hover:text-black transition-colors">LinkedIn</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
            <div>future automations &copy; {new Date().getFullYear()}</div>
            <div className="text-gray-400">Next-Gen Autonomous Systems // Production Infrastructure</div>
          </div>
        </div>
      </footer>

      {/* SHOWREEL VIDEO MODAL */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#0F1015] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold">
                  Autonomous Systems Showcase Reel
                </span>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  setVideoModalOpen(false);
                }}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
                aria-label="Close showreel"
              >
                <X size={16} />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/aircAruvnKk?autoplay=1&rel=0&modestbranding=1"
                title="Future Automations Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
