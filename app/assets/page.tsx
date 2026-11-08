"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AssetsPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<
    "all" | "optics" | "pop-culture" | "interactive" | "hardware" | "cyber"
  >("all");

  // Interactive demo states
  const [stampActive, setStampActive] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [radarCount, setRadarCount] = useState(42);
  const [lensFocus, setLensFocus] = useState(false);
  const [sliderVal, setSliderVal] = useState(72);
  const [lockOpen, setLockOpen] = useState(false);
  const [cyberDeckKey, setCyberDeckKey] = useState("EXEC_ROOT");
  const [matrixScan, setMatrixScan] = useState(true);

  const copySnippet = (snippet: string, index: number) => {
    navigator.clipboard.writeText(snippet);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  const assets = [
    // =============================================================
    // 1 - 10: ICONIC HERO & INTERACTIVE CORE (NO BASIC ELEMENTS)
    // =============================================================

    // 01. Illuminating Animated Eye
    {
      id: "illuminating-eye",
      title: "01. Illuminating Animated Eye",
      category: "interactive",
      desc: "Floating eyeball with responsive multi-direction gaze keyframes and 360° rotating star pupil.",
      component: (
        <div className="relative w-24 h-12 bg-white rounded-[50%] border border-black flex items-center justify-center overflow-hidden">
          <div className="relative w-11 h-11 bg-[#ff8a4c] rounded-full border border-black flex items-center justify-center animate-eye-pupil">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black animate-star-spin">
              <path d="M12 0 C12 6 6 12 0 12 C6 12 12 18 12 24 C12 18 18 12 24 12 C18 12 12 6 12 0 Z" />
            </svg>
          </div>
        </div>
      ),
    },

    // 02. Duo Alien Eyes Mascot
    {
      id: "double-eye-mascot",
      title: "02. Duo Alien Eyes Mascot",
      category: "interactive",
      desc: "Twin cartoon brutalist eyes with synchronized pupil tracking and thick offset stroke.",
      component: (
        <div className="flex items-center -space-x-2">
          <div className="w-12 h-14 bg-white rounded-[50%] border border-black flex items-center justify-center overflow-hidden">
            <div className="w-6 h-6 bg-[#ff5a1f] rounded-full border border-black flex items-center justify-center animate-eye-pupil">
              <div className="w-2.5 h-2.5 bg-black rounded-full" />
            </div>
          </div>
          <div className="w-12 h-14 bg-white rounded-[50%] border border-black flex items-center justify-center overflow-hidden">
            <div className="w-6 h-6 bg-[#ff5a1f] rounded-full border border-black flex items-center justify-center animate-eye-pupil">
              <div className="w-2.5 h-2.5 bg-black rounded-full" />
            </div>
          </div>
        </div>
      ),
    },

    // 03. Heavy Pendulum Wiggle Pushpin
    {
      id: "wiggle-pushpin",
      title: "03. Brutalist Wiggle Pushpin",
      category: "hardware",
      desc: "Rotational pendulum wiggle animation on hover, styled as an industrial drafting pin.",
      component: (
        <div className="relative p-2 animate-pin-wiggle origin-bottom cursor-pointer">
          <svg width="34" height="40" viewBox="0 0 28 34" fill="none">
            <path
              d="M 5 6 C 5 2 23 2 23 6 C 23 10 20 12 20 18 C 24 20 25 24 25 25 L 3 25 C 3 24 4 20 8 18 C 8 12 5 10 5 6 Z"
              fill="#ff5a1f"
              stroke="#000"
              strokeWidth="2.5"
            />
            <path d="M 14 25 L 11 33" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <circle cx="14" cy="10" r="3" fill="#000" />
          </svg>
        </div>
      ),
    },

    // 04. Braided Rope & Iron Ring Anchor
    {
      id: "hanging-rope",
      title: "04. Braided Rope & Iron Cleat Ring",
      category: "hardware",
      desc: "Ceiling mounting flange, braided heavy-duty rope fibers, and iron cleat ring.",
      component: (
        <div className="h-28 w-12 flex flex-col items-center">
          <div className="w-7 h-3 bg-[#111] border-2 border-[#ff5a1f] rounded-b-sm flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
          </div>
          <div className="w-3 flex-1 bg-[#d8b068] border-x border-black relative overflow-hidden">
            <div className="w-full h-full opacity-60 bg-[repeating-linear-gradient(45deg,#8c5d28,#8c5d28_3px,#f3db98_3px,#f3db98_6px)]" />
          </div>
          <div className="w-6 h-6 rounded-full border border-black bg-[#ff5a1f] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-black" />
          </div>
        </div>
      ),
    },

    // 05. Heavy Mechanical Toggle Switch
    {
      id: "brutalist-switch",
      title: "05. Heavy Toggle Power Switch",
      category: "interactive",
      desc: "Chunky physical toggle control with mechanical latch feedback and color flip.",
      component: (
        <div
          onClick={() => setSwitchOn(!switchOn)}
          className="w-16 h-8 bg-black border border-black rounded-full p-1 cursor-pointer flex items-center"
        >
          <div
            className={`w-6 h-6 rounded-full border border-black transition-all transform ${
              switchOn ? "translate-x-7 bg-[#ff5a1f]" : "translate-x-0 bg-white"
            }`}
          />
        </div>
      ),
    },

    // 06. Live Production Radar Pulse Node
    {
      id: "neon-status-bulb",
      title: "06. Live Pulse Production Node",
      category: "interactive",
      desc: "Continuous green radar glow indicating live production status with brutalist frame.",
      component: (
        <div className="inline-flex items-center gap-2.5 bg-black border border-white/20 px-3.5 py-1.5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff66] border border-black" />
          </span>
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">SYSTEM ONLINE</span>
        </div>
      ),
    },

    // 07. Curly Hand-Drawn Annotation Arrow
    {
      id: "curly-annotator-arrow",
      title: "07. Curly Hand-Drawn Arrow",
      category: "hardware",
      desc: "Dashed hand-drawn curved trajectory with custom arrowhead and annotation label.",
      component: (
        <div className="relative w-36 h-16 flex items-center justify-center">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 140 60" fill="none">
            <path
              d="M 10 40 C 35 10, 65 55, 95 20 C 110 5, 120 15, 130 35"
              stroke="#ff5a1f"
              strokeWidth="3.5"
              strokeDasharray="6 3"
              strokeLinecap="round"
              fill="none"
            />
            <polygon points="124 35, 134 38, 131 28" fill="#ff5a1f" stroke="#000" strokeWidth="1" />
          </svg>
          <span className="font-handwritten text-lg font-bold text-[#ff5a1f] absolute -top-1 right-0">Look here!</span>
        </div>
      ),
    },

    // 08. Retro Mini OS Terminal Window
    {
      id: "terminal-window-frame",
      title: "08. Brutalist Mini Window",
      category: "hardware",
      desc: "Retro operating system title bar with control buttons and code console.",
      component: (
        <div className="w-48 bg-[#141210] border border-black overflow-hidden">
          <div className="bg-black text-white px-2 py-1 flex items-center justify-between border-b border-black">
            <span className="font-mono text-[10px] font-bold text-[#ff5a1f]">bash: ~agency</span>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="w-2 h-2 rounded-full bg-[#ff5a1f]" />
              <span className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          </div>
          <div className="p-2 font-mono text-[10px] text-green-400">
            $ npm run deploy<br />
            ✓ Ready in 420ms
          </div>
        </div>
      ),
    },

    // 09. Tape-Secured Post-it Card
    {
      id: "handwritten-postit",
      title: "09. Tape-Secured Post-it Card",
      category: "hardware",
      desc: "Angled note card topped with translucent frosted masking tape.",
      component: (
        <div className="relative bg-white text-black border border-black p-3 pt-4 max-w-[200px]">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/70 border border-black/30 backdrop-blur-xs -rotate-2" />
          <p className="font-handwritten text-lg leading-tight font-bold">
            &ldquo;Ship code fast, break client expectations.&rdquo;
          </p>
        </div>
      ),
    },

    // 10. Concentric Target Crosshair
    {
      id: "radar-pulse-target",
      title: "10. Concentric Target Crosshair",
      category: "interactive",
      desc: "Clickable target coordinate with expanding sonar ring animation.",
      component: (
        <button
          onClick={() => setRadarCount((c) => c + 1)}
          className="relative w-14 h-14 flex items-center justify-center group cursor-pointer"
        >
          <div className="absolute inset-1 rounded-full border border-white/30 group-hover:border-[#ff5a1f] group-hover:scale-125 transition-all duration-300" />
          <div className="absolute inset-3 rounded-full border border-dashed border-[#ff5a1f] animate-star-spin" />
          <div className="w-4 h-4 bg-[#ff5a1f] rounded-full border-2 border-black flex items-center justify-center font-mono text-[8px] font-bold text-black">
            {radarCount % 10}
          </div>
        </button>
      ),
    },

    // =============================================================
    // 11 - 25: UFOS, RETRO TECH, AUDIO & POP-CULTURE
    // =============================================================

    // 11. Hovering UFO Abduction Saucer
    {
      id: "hovering-ufo",
      title: "11. Hovering UFO Abduction Saucer",
      category: "pop-culture",
      desc: "Architectural vector flying saucer with cyan dome pilot, flashing perimeter diodes, and animated scanning beam.",
      component: (
        <div className="relative flex flex-col items-center justify-center animate-float-bob">
          <svg width="150" height="95" viewBox="0 0 150 95" fill="none" className="overflow-visible">
            <defs>
              <linearGradient id="ufo-beam-grad" x1="75" y1="36" x2="75" y2="95" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ff5a1f" stopOpacity="0.85" />
                <stop offset="0.6" stopColor="#ff5a1f" stopOpacity="0.3" />
                <stop offset="1" stopColor="#ff5a1f" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <polygon
              points="60,38 90,38 128,95 22,95"
              fill="url(#ufo-beam-grad)"
              stroke="#ff5a1f"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              className="animate-beam-scan origin-top"
            />
            <path d="M 52 26 C 52 10 98 10 98 26 Z" fill="#ffb347" stroke="#000" strokeWidth="3" />
            <circle cx="75" cy="18" r="3.5" fill="#000" />
            <circle cx="76" cy="17" r="1.2" fill="#fff" />
            <ellipse cx="75" cy="28" rx="64" ry="12" fill="#ff5a1f" stroke="#000" strokeWidth="3.5" />
            <ellipse cx="75" cy="34" rx="32" ry="6" fill="#000" stroke="#000" strokeWidth="2.5" />
            <circle cx="26" cy="28" r="2.5" fill="#000" />
            <circle cx="48" cy="30" r="3" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <circle cx="75" cy="31" r="3.5" fill="#000" />
            <circle cx="102" cy="30" r="3" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <circle cx="124" cy="28" r="2.5" fill="#000" />
          </svg>
        </div>
      ),
    },

    // 12. Tactical Field Binoculars
    {
      id: "tactical-binoculars",
      title: "12. Heavy Military Field Binoculars",
      category: "optics",
      desc: "Ergonomic dual-prism optical binoculars with center focus knurl dial, strap brackets, and reflection glints.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="130" height="90" viewBox="0 0 130 90" fill="none">
            <rect x="53" y="16" width="24" height="42" rx="3" fill="#000" stroke="#000" strokeWidth="2.5" />
            <rect x="58" y="24" width="14" height="14" rx="2" fill="#ff5a1f" stroke="#000" strokeWidth="2" />
            <line x1="58" y1="28" x2="72" y2="28" stroke="#000" strokeWidth="1.5" />
            <line x1="58" y1="34" x2="72" y2="34" stroke="#000" strokeWidth="1.5" />
            <rect x="20" y="4" width="22" height="12" rx="2" fill="#000" stroke="#000" strokeWidth="2" />
            <path d="M 18 16 L 44 16 L 48 64 L 8 64 Z" fill="#ff5a1f" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
            <rect x="6" y="64" width="44" height="14" rx="3" fill="#000" stroke="#000" strokeWidth="3" />
            <ellipse cx="28" cy="71" rx="16" ry="4" fill="#ffb347" />
            <ellipse cx="24" cy="70" rx="6" ry="1.5" fill="#fff" />
            <rect x="88" y="4" width="22" height="12" rx="2" fill="#000" stroke="#000" strokeWidth="2" />
            <path d="M 86 16 L 112 16 L 122 64 L 82 64 Z" fill="#ff5a1f" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
            <rect x="80" y="64" width="44" height="14" rx="3" fill="#000" stroke="#000" strokeWidth="3" />
            <ellipse cx="102" cy="71" rx="16" ry="4" fill="#ffb347" />
            <ellipse cx="98" cy="70" rx="6" ry="1.5" fill="#fff" />
          </svg>
        </div>
      ),
    },

    // 13. Retro Wayfarer Sunglasses
    {
      id: "retro-sunglasses",
      title: "13. Thick Wayfarer Sunglasses",
      category: "optics",
      desc: "Geometric acetate sunglasses with dark gradient lenses and pop-art reflection slashes.",
      component: (
        <div className="relative flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
          <svg width="150" height="60" viewBox="0 0 150 60" fill="none">
            <path d="M 4 20 L 16 16 L 16 26 Z" fill="#ff5a1f" stroke="#000" strokeWidth="3" />
            <path d="M 146 20 L 134 16 L 134 26 Z" fill="#ff5a1f" stroke="#000" strokeWidth="3" />
            <path d="M 64 20 Q 75 16 86 20" stroke="#000" strokeWidth="7" strokeLinecap="round" />
            <path d="M 64 20 Q 75 16 86 20" stroke="#ff5a1f" strokeWidth="3" strokeLinecap="round" />
            <path d="M 16 16 L 68 18 L 62 48 C 55 54 25 54 18 44 Z" fill="#0a0908" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
            <line x1="28" y1="24" x2="42" y2="44" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            <line x1="38" y1="24" x2="46" y2="36" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M 82 18 L 134 16 L 132 44 C 125 54 95 54 88 48 Z" fill="#0a0908" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
            <line x1="94" y1="24" x2="108" y2="44" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            <line x1="104" y1="24" x2="112" y2="36" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M 16 16 L 68 18" stroke="#ff5a1f" strokeWidth="2.5" />
            <path d="M 82 18 L 134 16" stroke="#ff5a1f" strokeWidth="2.5" />
          </svg>
        </div>
      ),
    },

    // 14. Precision Optical Magnifier
    {
      id: "spy-magnifier",
      title: "14. Precision Optical Magnifier",
      category: "optics",
      desc: "Round glass magnifying lens with stepped metal bezel, knurled handle, and 10x focus reticle.",
      component: (
        <div
          onClick={() => setLensFocus(!lensFocus)}
          className={`relative cursor-pointer transition-transform duration-200 ${
            lensFocus ? "scale-115" : "hover:rotate-6"
          }`}
        >
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
            <rect x="58" y="68" width="14" height="36" rx="4" transform="rotate(-45 58 68)" fill="#ff5a1f" stroke="#000" strokeWidth="3.5" />
            <rect x="52" y="62" width="14" height="8" rx="2" transform="rotate(-45 52 62)" fill="#000" stroke="#000" strokeWidth="2" />
            <circle cx="44" cy="44" r="34" fill="#000" stroke="#000" strokeWidth="3.5" />
            <circle cx="44" cy="44" r="30" fill="#ffb347" stroke="#000" strokeWidth="2.5" />
            <path d="M 22 34 C 28 22 52 20 62 26" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
            <circle cx="44" cy="44" r="8" stroke="#000" strokeWidth="2" fill="none" strokeDasharray="3 2" />
            <line x1="44" y1="30" x2="44" y2="58" stroke="#000" strokeWidth="1.5" />
            <line x1="30" y1="44" x2="58" y2="44" stroke="#000" strokeWidth="1.5" />
          </svg>
        </div>
      ),
    },

    // 15. Pocket 8-Bit Game Console
    {
      id: "retro-gameboy",
      title: "15. Pocket 8-Bit Game Console",
      category: "pop-culture",
      desc: "Scaled handheld console with screen speaker grills, cross D-pad, and offset action buttons.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="84" height="125" viewBox="0 0 84 125" fill="none">
            <path d="M 6 4 L 78 4 C 81 4 82 7 82 10 L 82 104 C 82 118 70 122 56 122 L 6 122 C 3 122 2 119 2 116 L 2 10 C 2 7 3 4 6 4 Z" fill="#e4e4e7" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
            <rect x="10" y="14" width="64" height="46" rx="4" fill="#3f3f46" stroke="#000" strokeWidth="2.5" />
            <rect x="20" y="20" width="44" height="34" rx="2" fill="#8c9f7a" stroke="#000" strokeWidth="1.5" />
            <circle cx="15" cy="30" r="1.5" fill="#ef4444" />
            <rect x="18" y="74" width="8" height="22" rx="1.5" fill="#000" />
            <rect x="11" y="81" width="22" height="8" rx="1.5" fill="#000" />
            <circle cx="68" cy="78" r="5" fill="#dc2626" stroke="#000" strokeWidth="2" />
            <circle cx="56" cy="85" r="5" fill="#dc2626" stroke="#000" strokeWidth="2" />
          </svg>
        </div>
      ),
    },

    // 16. Mixtape Audio Cassette
    {
      id: "cassette-tape",
      title: "16. Mixtape Audio Cassette",
      category: "pop-culture",
      desc: "Vintage magnetic tape cassette with dual revolving spools, write-in paper label, and exposed tape.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="120" height="78" viewBox="0 0 120 78" fill="none">
            <rect x="2" y="2" width="116" height="74" rx="6" fill="#141210" stroke="#000" strokeWidth="3.5" />
            <rect x="14" y="10" width="92" height="42" rx="3" fill="#ff5a1f" stroke="#000" strokeWidth="2.5" />
            <text x="20" y="16" fill="#000" fontSize="7" fontFamily="monospace" fontWeight="bold">SIDE A: SHIPS 24/7</text>
            <rect x="30" y="24" width="60" height="22" rx="3" fill="#ffb347" stroke="#000" strokeWidth="2" />
            <circle cx="44" cy="35" r="7" fill="#fff" stroke="#000" strokeWidth="2" />
            <circle cx="76" cy="35" r="7" fill="#fff" stroke="#000" strokeWidth="2" />
            <path d="M 28 76 L 36 58 L 84 58 L 92 76 Z" fill="#0a0908" stroke="#000" strokeWidth="2.5" />
          </svg>
        </div>
      ),
    },

    // 17. 3.5-Inch Save Diskette
    {
      id: "floppy-disk",
      title: "17. 3.5-Inch Save Diskette",
      category: "hardware",
      desc: "1.44MB micro floppy diskette with sliding aluminum shutter and write-protect notch.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="86" height="86" viewBox="0 0 86 86" fill="none">
            <path d="M 4 4 L 74 4 L 82 12 L 82 82 L 4 82 Z" fill="#ff5a1f" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
            <rect x="22" y="4" width="42" height="34" rx="2" fill="#fff" stroke="#000" strokeWidth="2.5" />
            <rect x="32" y="10" width="8" height="18" rx="1.5" fill="#000" />
            <rect x="14" y="44" width="58" height="32" rx="2" fill="#fff" stroke="#000" strokeWidth="2" />
            <line x1="20" y1="52" x2="66" y2="52" stroke="#dc2626" strokeWidth="2" />
            <text x="20" y="64" fill="#000" fontSize="7" fontFamily="monospace" fontWeight="bold">PROD_RELEASE</text>
          </svg>
        </div>
      ),
    },

    // 18. Bulbous CRT Computer Terminal
    {
      id: "crt-monitor",
      title: "18. Bulbous CRT Terminal",
      category: "hardware",
      desc: "Curved 1980s computer monitor with phosphor green terminal command line and vents.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="100" height="90" viewBox="0 0 100 90" fill="none">
            <rect x="4" y="4" width="92" height="74" rx="8" fill="#27272a" stroke="#000" strokeWidth="3.5" />
            <rect x="12" y="10" width="76" height="52" rx="6" fill="#000" stroke="#000" strokeWidth="2.5" />
            <text x="18" y="26" fill="#00ff66" fontSize="8" fontFamily="monospace" fontWeight="bold">&gt; AI_BUILDER</text>
            <text x="18" y="38" fill="#00ff66" fontSize="7" fontFamily="monospace">&gt; READY: 100%</text>
            <rect x="74" y="30" width="5" height="8" fill="#00ff66" className="animate-pulse" />
            <circle cx="20" cy="70" r="2.5" fill="#ff5a1f" stroke="#000" strokeWidth="1" />
            <path d="M 28 78 L 72 78 L 78 86 L 22 86 Z" fill="#141210" stroke="#000" strokeWidth="3" />
          </svg>
        </div>
      ),
    },

    // 19. Steampunk Welding Goggles
    {
      id: "cyber-goggles",
      title: "19. Steampunk Welding Goggles",
      category: "optics",
      desc: "Industrial circular dual eyepieces held by an adjustable strap with ventilation rivets.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="130" height="60" viewBox="0 0 130 60" fill="none">
            <line x1="2" y1="30" x2="128" y2="30" stroke="#000" strokeWidth="8" strokeLinecap="round" />
            <line x1="2" y1="30" x2="128" y2="30" stroke="#ff5a1f" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />
            <circle cx="42" cy="30" r="20" fill="#ff5a1f" stroke="#000" strokeWidth="4" />
            <circle cx="42" cy="30" r="14" fill="#0a0908" stroke="#000" strokeWidth="2.5" />
            <circle cx="42" cy="30" r="6" fill="#ffb347" />
            <rect x="58" y="27" width="14" height="6" rx="2" fill="#000" stroke="#000" strokeWidth="2" />
            <circle cx="88" cy="30" r="20" fill="#ff5a1f" stroke="#000" strokeWidth="4" />
            <circle cx="88" cy="30" r="14" fill="#0a0908" stroke="#000" strokeWidth="2.5" />
            <circle cx="88" cy="30" r="6" fill="#ffb347" />
          </svg>
        </div>
      ),
    },

    // 20. Hotline Telephone Handset
    {
      id: "rotary-phone",
      title: "20. Hotline Telephone Handset",
      category: "pop-culture",
      desc: "Classic rotary dial phone with heavy contoured handset resting securely on an angled base.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="100" height="90" viewBox="0 0 100 90" fill="none">
            <path d="M 18 36 L 82 36 L 90 82 L 10 82 Z" fill="#ff5a1f" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
            <circle cx="50" cy="58" r="16" fill="#fff" stroke="#000" strokeWidth="3" />
            <circle cx="50" cy="58" r="6" fill="#ff5a1f" stroke="#000" strokeWidth="2" />
            <path d="M 6 22 C 6 12 28 8 36 18 L 64 18 C 72 8 94 12 94 22 C 94 28 82 28 80 20 L 20 20 C 18 28 6 28 6 22 Z" fill="#000" stroke="#000" strokeWidth="2.5" />
          </svg>
        </div>
      ),
    },

    // 21. Wireframe Detective Monocle
    {
      id: "gentleman-monocle",
      title: "21. Wireframe Detective Monocle",
      category: "optics",
      desc: "Gold-rimmed single optical glass with hanging looped link chain.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="90" height="100" viewBox="0 0 90 100" fill="none">
            <circle cx="45" cy="40" r="28" fill="#ffb347" fillOpacity="0.4" stroke="#ff5a1f" strokeWidth="5" />
            <circle cx="45" cy="40" r="28" stroke="#000" strokeWidth="2" />
            <path d="M 28 28 C 36 20 54 20 62 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            <circle cx="73" cy="40" r="3" fill="#000" />
            <path d="M 73 43 C 78 55, 68 70, 72 94" stroke="#ff5a1f" strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round" />
          </svg>
        </div>
      ),
    },

    // 22. Broadcast Bullhorn Megaphone
    {
      id: "action-megaphone",
      title: "22. Broadcast Bullhorn Megaphone",
      category: "pop-culture",
      desc: "Announcement horn with grip handle, trigger switch, and pulsing blast ripples.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
            <path d="M 32 44 L 24 74 L 34 74 L 40 44 Z" fill="#000" stroke="#000" strokeWidth="2.5" />
            <path d="M 24 30 L 78 12 L 78 60 L 24 44 Z" fill="#ff5a1f" stroke="#000" strokeWidth="3.5" />
            <ellipse cx="78" cy="36" rx="6" ry="24" fill="#e4e4e7" stroke="#000" strokeWidth="3" />
            <path d="M 90 22 C 96 28 96 44 90 50" stroke="#ff5a1f" strokeWidth="3.5" strokeLinecap="round" className="animate-pulse" />
            <path d="M 98 14 C 108 24 108 48 98 58" stroke="#ff5a1f" strokeWidth="3.5" strokeLinecap="round" className="animate-pulse delay-100" />
          </svg>
        </div>
      ),
    },

    // 23. Stargazer Refractor Telescope
    {
      id: "stargazer-telescope",
      title: "23. Stargazer Refractor Telescope",
      category: "optics",
      desc: "Brass astronomical telescope mounted on an industrial balanced tripod.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
            <line x1="60" y1="52" x2="24" y2="95" stroke="#000" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="60" y1="52" x2="60" y2="95" stroke="#000" strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="52" x2="96" y2="95" stroke="#000" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="60" cy="52" r="5" fill="#ff5a1f" stroke="#000" strokeWidth="2.5" />
            <g transform="rotate(-30 60 52)">
              <rect x="18" y="47" width="14" height="8" rx="2" fill="#000" stroke="#000" strokeWidth="2" />
              <rect x="32" y="44" width="70" height="14" rx="3" fill="#ff5a1f" stroke="#000" strokeWidth="3.5" />
              <rect x="100" y="42" width="16" height="18" rx="2" fill="#000" stroke="#000" strokeWidth="3" />
              <ellipse cx="116" cy="51" rx="2" ry="9" fill="#ffb347" />
            </g>
          </svg>
        </div>
      ),
    },

    // 24. 80s Ghetto Boombox
    {
      id: "retro-boombox",
      title: "24. 80s Ghetto Boombox",
      category: "pop-culture",
      desc: "Twin pulsing woofers, top carry handle, and center tape compartment.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="120" height="82" viewBox="0 0 120 82" fill="none">
            <line x1="20" y1="14" x2="45" y2="2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 38 14 L 38 6 L 82 6 L 82 14" stroke="#000" strokeWidth="4" strokeLinejoin="round" fill="none" />
            <rect x="8" y="14" width="104" height="64" rx="6" fill="#141210" stroke="#000" strokeWidth="3.5" />
            <circle cx="32" cy="48" r="16" fill="#000" stroke="#ff5a1f" strokeWidth="3" />
            <circle cx="32" cy="48" r="7" fill="#ff5a1f" stroke="#000" strokeWidth="2" className="animate-pulse" />
            <circle cx="88" cy="48" r="16" fill="#000" stroke="#ff5a1f" strokeWidth="3" />
            <circle cx="88" cy="48" r="7" fill="#ff5a1f" stroke="#000" strokeWidth="2" className="animate-pulse" />
            <rect x="52" y="36" width="16" height="24" rx="2" fill="#ff5a1f" stroke="#000" strokeWidth="2" />
          </svg>
        </div>
      ),
    },

    // 25. Maritime Sonar Scope
    {
      id: "sonar-sweeper",
      title: "25. Maritime Sonar Scope",
      category: "optics",
      desc: "Circular sweep scanner tracing coordinates with rotating green radial beam.",
      component: (
        <div className="relative w-20 h-20 rounded-full bg-[#06200d] border border-black flex items-center justify-center overflow-hidden">
          <div className="absolute inset-2 rounded-full border border-green-500/30" />
          <div className="absolute inset-4 rounded-full border border-dashed border-green-500/40" />
          <div className="absolute inset-x-0 h-[1px] bg-green-500/40" />
          <div className="absolute inset-y-0 w-[1px] bg-green-500/40" />
          <div className="absolute inset-0 flex items-center justify-center animate-star-spin">
            <div className="w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#00ff66] to-[#00ff66] translate-x-1/2 origin-left" />
          </div>
          <div className="absolute top-4 right-5 w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
        </div>
      ),
    },

    // =============================================================
    // 26 - 50: PRESERVED USER FAVORITES & HIGH-OCTANE OVERHAUL
    // =============================================================

    // 26. Roswell Grey Alien Mask (User Explicit Favorite)
    {
      id: "alien-mascot-head",
      title: "26. Roswell Grey Alien Mask",
      category: "pop-culture",
      desc: "Inverted triangular extraterrestrial face with glossy almond eyes.",
      component: (
        <div className="relative w-16 h-20 bg-[#ff5a1f] border border-black rounded-t-[50%] rounded-b-[40%] flex flex-col items-center pt-5">
          <div className="flex gap-2">
            <div className="w-4 h-7 bg-black rounded-full flex items-start justify-end p-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <div className="w-4 h-7 bg-black rounded-full flex items-start justify-start p-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>
          <div className="w-1.5 h-1 bg-black rounded-full mt-2" />
        </div>
      ),
    },

    // 27. Apollo Propulsion Rocket
    {
      id: "launch-rocket",
      title: "27. Apollo Propulsion Rocket",
      category: "pop-culture",
      desc: "Streamlined launch rocket with stabilizing fins, capsule porthole, and exhaust plume.",
      component: (
        <div className="relative flex flex-col items-center animate-float-bob">
          <svg width="70" height="100" viewBox="0 0 70 100" fill="none">
            <path d="M 27 68 C 22 84 35 96 35 96 C 35 96 48 84 43 68 Z" fill="#ef4444" className="animate-pulse" />
            <path d="M 30 68 C 28 80 35 88 35 88 C 35 88 42 80 40 68 Z" fill="#ff5a1f" />
            <path d="M 23 48 L 8 68 L 23 66 Z" fill="#ff5a1f" stroke="#000" strokeWidth="2.5" />
            <path d="M 47 48 L 62 68 L 47 66 Z" fill="#ff5a1f" stroke="#000" strokeWidth="2.5" />
            <path d="M 35 4 C 20 24 22 66 22 66 L 48 66 C 48 66 50 24 35 4 Z" fill="#ffffff" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
            <circle cx="35" cy="30" r="6" fill="#ffb347" stroke="#000" strokeWidth="2" />
            <circle cx="37" cy="28" r="2" fill="#fff" />
            <path d="M 35 4 C 30 14 30 18 30 18 L 40 18 C 40 18 40 14 35 4 Z" fill="#dc2626" />
          </svg>
        </div>
      ),
    },

    // 28. Cinema 3D Red-Cyan Glasses
    {
      id: "anaglyph-3d-glasses",
      title: "28. Cinema 3D Red-Cyan Glasses",
      category: "optics",
      desc: "Iconic cardboard movie theater 3D glasses with dual complementary filtered lenses.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
            <rect x="2" y="10" width="16" height="12" fill="#fff" stroke="#000" strokeWidth="2.5" />
            <rect x="122" y="10" width="16" height="12" fill="#fff" stroke="#000" strokeWidth="2.5" />
            <path d="M 16 8 L 124 8 L 124 38 L 82 38 C 76 28 64 28 58 38 L 16 38 Z" fill="#ffffff" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
            <rect x="24" y="14" width="34" height="20" rx="3" fill="#dc2626" stroke="#000" strokeWidth="2" />
            <text x="36" y="27" fill="#fff" fontSize="8" fontFamily="monospace" fontWeight="bold">3D</text>
            <rect x="82" y="14" width="34" height="20" rx="3" fill="#06b6d4" stroke="#000" strokeWidth="2" />
            <text x="94" y="27" fill="#000" fontSize="8" fontFamily="monospace" fontWeight="bold">3D</text>
          </svg>
        </div>
      ),
    },

    // 29. Submarine Periscope Viewer
    {
      id: "nautical-periscope",
      title: "29. Submarine Periscope Viewer",
      category: "optics",
      desc: "Nautical dual-prism observation periscope with optical glass reflection and water ripples.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M 4 82 Q 25 74 50 82 T 96 82" stroke="#ffb347" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 28 16 L 72 16 L 72 32 L 54 32 L 54 86 L 38 86 L 38 32 L 28 32 Z" fill="#ff5a1f" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
            <ellipse cx="72" cy="24" rx="4" ry="8" fill="#ffb347" stroke="#000" strokeWidth="2" />
            <line x1="70" y1="18" x2="74" y2="30" stroke="#fff" strokeWidth="2" />
            <line x1="38" y1="46" x2="54" y2="46" stroke="#000" strokeWidth="3" />
            <line x1="38" y1="62" x2="54" y2="62" stroke="#000" strokeWidth="3" />
          </svg>
        </div>
      ),
    },

    // 30. Cabinet Arcade Joystick
    {
      id: "arcade-joystick",
      title: "30. Cabinet Arcade Joystick",
      category: "pop-culture",
      desc: "Precision microswitch ball-top arcade stick with chrome shaft and dust washer.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="90" height="95" viewBox="0 0 90 95" fill="none">
            <rect x="15" y="70" width="60" height="18" rx="3" fill="#ff5a1f" stroke="#000" strokeWidth="3" />
            <circle cx="23" cy="79" r="2" fill="#000" />
            <circle cx="67" cy="79" r="2" fill="#000" />
            <ellipse cx="45" cy="70" rx="20" ry="7" fill="#000" stroke="#000" strokeWidth="2" />
            <rect x="42" y="30" width="6" height="40" rx="1" fill="#e4e4e7" stroke="#000" strokeWidth="2" />
            <circle cx="45" cy="24" r="16" fill="#dc2626" stroke="#000" strokeWidth="3.5" />
            <circle cx="40" cy="18" r="4" fill="#fff" />
          </svg>
        </div>
      ),
    },

    // 31. Analog Voltage Needle Gauge
    {
      id: "analog-voltmeter",
      title: "31. Analog Voltage Needle Gauge",
      category: "hardware",
      desc: "Vintage power meter with arc measurement dial, redline hazard sector, and pivoted needle.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="105" height="85" viewBox="0 0 105 85" fill="none">
            <rect x="4" y="4" width="97" height="77" rx="6" fill="#ffffff" stroke="#000" strokeWidth="3.5" />
            <path d="M 20 54 A 36 36 0 0 1 85 54" stroke="#000" strokeWidth="2" fill="none" />
            <path d="M 68 30 A 36 36 0 0 1 85 54" stroke="#dc2626" strokeWidth="4" fill="none" />
            <text x="18" y="66" fill="#000" fontSize="7" fontFamily="monospace" fontWeight="bold">0V</text>
            <text x="50" y="32" fill="#000" fontSize="7" fontFamily="monospace" fontWeight="bold">50V</text>
            <text x="76" y="66" fill="#dc2626" fontSize="7" fontFamily="monospace" fontWeight="bold">MAX</text>
            <line x1="52" y1="68" x2="72" y2="34" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />
            <circle cx="52" cy="68" r="6" fill="#000" />
            <circle cx="52" cy="68" r="2" fill="#ff5a1f" />
          </svg>
        </div>
      ),
    },

    // 32. Mechanical Vault Combination Dial
    {
      id: "vault-safe-dial",
      title: "32. Mechanical Vault Combination Dial",
      category: "hardware",
      desc: "Precision safe dial with etched calibration ticks, center drive wheel, and alignment marker.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
            <polygon points="45,2 41,8 49,8" fill="#dc2626" stroke="#000" strokeWidth="1" />
            <circle cx="45" cy="48" r="36" fill="#141210" stroke="#000" strokeWidth="4" />
            <circle cx="45" cy="48" r="28" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1={45 + 23 * Math.cos((deg * Math.PI) / 180)}
                y1={48 + 23 * Math.sin((deg * Math.PI) / 180)}
                x2={45 + 28 * Math.cos((deg * Math.PI) / 180)}
                y2={48 + 28 * Math.sin((deg * Math.PI) / 180)}
                stroke="#000"
                strokeWidth={deg % 90 === 0 ? "2.5" : "1.5"}
              />
            ))}
            <circle cx="45" cy="48" r="14" fill="#ff5a1f" stroke="#000" strokeWidth="2.5" />
            <rect x="42" y="38" width="6" height="20" rx="1.5" fill="#000" />
          </svg>
        </div>
      ),
    },

    // 33. Neon Audio Frequency Equalizer
    {
      id: "neon-sound-eq",
      title: "33. Neon Audio Spectrum Equalizer",
      category: "interactive",
      desc: "Live audio spectrum visualizer with signal peak bars and brutalist bounding frame.",
      component: (
        <div className="w-36 h-20 bg-black border border-black p-2 flex items-end justify-between">
          {[
            { h: "h-8", bg: "bg-[#ff5a1f]" },
            { h: "h-14", bg: "bg-[#ff5a1f]" },
            { h: "h-11", bg: "bg-[#ffb347]" },
            { h: "h-16", bg: "bg-[#ff5a1f]" },
            { h: "h-6", bg: "bg-[#ffb347]" },
            { h: "h-12", bg: "bg-[#ff5a1f]" },
          ].map((bar, i) => (
            <div key={i} className="flex flex-col items-center gap-1 w-3.5">
              <span className="w-full h-1 bg-white animate-pulse" />
              <div className={`w-full ${bar.h} ${bar.bg} border border-black animate-pulse`} />
            </div>
          ))}
        </div>
      ),
    },

    // 34. Digital Keypad PIN Grid
    {
      id: "brutalist-pinpad",
      title: "34. Digital Keypad PIN Grid",
      category: "interactive",
      desc: "Tactile high-security numeric keypad with LED authorization indicator.",
      component: (
        <div className="bg-[#141210] border border-black p-2.5">
          <div className="flex items-center justify-between border-b border-white/20 pb-1.5 mb-2">
            <span className="font-mono text-[8px] text-[#ff5a1f] font-bold">ACCESS PIN</span>
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <button
                key={n}
                className="w-6 h-6 bg-black hover:bg-[#ff5a1f] hover:text-black text-white font-mono text-[10px] font-black border border-white/30 flex items-center justify-center transition-colors cursor-pointer"
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      ),
    },

    // 35. Pan-Tilt CCTV Surveillance Cam
    {
      id: "security-cctv",
      title: "35. Pan-Tilt CCTV Surveillance Cam",
      category: "hardware",
      desc: "Wall-mounted high-security surveillance camera with flashing red recording diode.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="110" height="80" viewBox="0 0 110 80" fill="none">
            <rect x="8" y="10" width="8" height="40" rx="2" fill="#000" />
            <path d="M 16 30 L 42 30" stroke="#000" strokeWidth="6" strokeLinecap="round" />
            <g transform="rotate(18 55 35)">
              <rect x="36" y="22" width="48" height="24" rx="4" fill="#ffffff" stroke="#000" strokeWidth="3.5" />
              <path d="M 32 18 L 88 18 L 84 22 L 34 22 Z" fill="#ff5a1f" stroke="#000" strokeWidth="2.5" />
              <rect x="80" y="24" width="8" height="20" rx="2" fill="#000" />
              <circle cx="84" cy="34" r="3" fill="#ffb347" />
              <circle cx="44" cy="28" r="2.5" fill="#dc2626" className="animate-ping" />
            </g>
          </svg>
        </div>
      ),
    },

    // 36. Astronaut Spacewalk Helmet
    {
      id: "astronaut-helmet",
      title: "36. Apollo Extravehicular Helmet",
      category: "optics",
      desc: "Heavy spacesuit bubble visor with gold mirrored tint, audio mic, and dual oxygen couplings.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="100" height="96" viewBox="0 0 100 96" fill="none">
            <circle cx="50" cy="46" r="40" fill="#ffffff" stroke="#000" strokeWidth="4" />
            <rect x="18" y="22" width="64" height="46" rx="23" fill="#ff5a1f" stroke="#000" strokeWidth="3" />
            <path d="M 28 32 C 34 26 66 26 72 32" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
            <rect x="4" y="38" width="10" height="18" rx="3" fill="#000" />
            <rect x="86" y="38" width="10" height="18" rx="3" fill="#000" />
            <rect x="30" y="80" width="40" height="12" rx="3" fill="#ffb347" stroke="#000" strokeWidth="2.5" />
          </svg>
        </div>
      ),
    },

    // 37. Vintage TLR Dual-Lens Camera
    {
      id: "tlr-vintage-camera",
      title: "37. Vintage Dual-Lens TLR Camera",
      category: "optics",
      desc: "Twin-lens reflex camera with viewing finder, taking optic, knurled film winder, and brass strap lugs.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="90" height="110" viewBox="0 0 90 110" fill="none">
            <rect x="14" y="12" width="62" height="88" rx="6" fill="#141210" stroke="#000" strokeWidth="3.5" />
            <rect x="22" y="4" width="46" height="8" rx="2" fill="#ff5a1f" stroke="#000" strokeWidth="2" />
            <circle cx="45" cy="38" r="14" fill="#000" stroke="#ff5a1f" strokeWidth="2.5" />
            <circle cx="45" cy="38" r="8" fill="#ffb347" />
            <circle cx="45" cy="74" r="16" fill="#000" stroke="#ff5a1f" strokeWidth="3" />
            <circle cx="45" cy="74" r="9" fill="#ffb347" />
            <circle cx="42" cy="71" r="2.5" fill="#fff" />
            <rect x="76" y="52" width="8" height="18" rx="2" fill="#000" />
          </svg>
        </div>
      ),
    },

    // 38. Tactical Night-Vision Monocular
    {
      id: "night-vision-goggle",
      title: "38. Tactical Night-Vision Monocular",
      category: "optics",
      desc: "Phosphor-green night sight with focus dial, battery housing, and luminescent ocular glow.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
            <rect x="10" y="28" width="22" height="24" rx="3" fill="#000" stroke="#000" strokeWidth="2.5" />
            <circle cx="21" cy="40" r="7" fill="#00ff66" className="animate-pulse" />
            <path d="M 32 24 L 84 20 L 92 60 L 32 56 Z" fill="#1f2937" stroke="#000" strokeWidth="3.5" />
            <rect x="92" y="16" width="18" height="48" rx="4" fill="#000" stroke="#000" strokeWidth="3" />
            <circle cx="101" cy="40" r="12" fill="#00ff66" />
            <circle cx="98" cy="36" r="3" fill="#fff" />
          </svg>
        </div>
      ),
    },

    // 39. Mechanical Padlock & Shackle
    {
      id: "heavy-security-padlock",
      title: "39. Mechanical Heavy Padlock",
      category: "hardware",
      desc: "Interlocking hardened steel shackle with brass tumbler body and keyhole.",
      component: (
        <div
          onClick={() => setLockOpen(!lockOpen)}
          className="relative cursor-pointer flex flex-col items-center group"
        >
          <svg width="80" height="96" viewBox="0 0 80 96" fill="none">
            <path
              d={lockOpen ? "M 22 44 L 22 22 C 22 8 58 8 58 14" : "M 22 44 L 22 22 C 22 8 58 8 58 22 L 58 44"}
              stroke="#000"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
              className="transition-all duration-300"
            />
            <rect x="10" y="40" width="60" height="50" rx="6" fill="#ff5a1f" stroke="#000" strokeWidth="4" />
            <circle cx="40" cy="62" r="5" fill="#000" />
            <polygon points="38,62 42,62 44,74 36,74" fill="#000" />
          </svg>
          <span className="font-mono text-[9px] uppercase font-bold text-[#ff5a1f] mt-1">
            {lockOpen ? "UNLOCKED" : "CLICK TO UNLOCK"}
          </span>
        </div>
      ),
    },

    // 40. High-Voltage Circuit Knife Switch
    {
      id: "knife-blade-switch",
      title: "40. High-Voltage Blade Switch",
      category: "hardware",
      desc: "Industrial dual-jaw electrical knife contact with insulated throwing lever.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="110" height="90" viewBox="0 0 110 90" fill="none">
            <rect x="12" y="66" width="86" height="18" rx="2" fill="#3f3f46" stroke="#000" strokeWidth="3" />
            <rect x="24" y="52" width="10" height="14" fill="#ff5a1f" stroke="#000" strokeWidth="2" />
            <rect x="76" y="52" width="10" height="14" fill="#ff5a1f" stroke="#000" strokeWidth="2" />
            <line x1="29" y1="58" x2="68" y2="24" stroke="#dc2626" strokeWidth="6" strokeLinecap="round" />
            <circle cx="68" cy="24" r="6" fill="#000" stroke="#000" strokeWidth="2" />
            <circle cx="29" cy="58" r="4" fill="#000" />
          </svg>
        </div>
      ),
    },

    // 41. Retractable Swiss Utility Knife
    {
      id: "tactical-utility-blade",
      title: "41. Retractable Utility Knife",
      category: "hardware",
      desc: "Brutalist sliding box-cutter with segmented break-off steel razor blade.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
            <polygon points="12,18 36,18 20,42 4,42" fill="#e4e4e7" stroke="#000" strokeWidth="2.5" />
            <line x1="22" y1="26" x2="16" y2="34" stroke="#000" strokeWidth="1.5" />
            <path d="M 28 20 L 114 20 C 117 20 118 24 116 28 L 110 40 L 24 40 Z" fill="#ff5a1f" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
            <rect x="52" y="24" width="14" height="12" rx="2" fill="#000" />
            <line x1="56" y1="27" x2="62" y2="27" stroke="#ff5a1f" strokeWidth="1.5" />
          </svg>
        </div>
      ),
    },

    // 42. Cyberdeck Root Terminal Key
    {
      id: "cyberdeck-key",
      title: "42. Cyberdeck Root Security Key",
      category: "cyber",
      desc: "Hardware USB authentication dongle with glowing cyan crypto trace lines.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
            <rect x="6" y="20" width="22" height="20" rx="2" fill="#e4e4e7" stroke="#000" strokeWidth="2.5" />
            <rect x="12" y="24" width="4" height="12" fill="#000" />
            <rect x="20" y="24" width="4" height="12" fill="#000" />
            <path d="M 28 14 L 92 14 L 92 46 L 28 46 Z" fill="#0a0908" stroke="#ff5a1f" strokeWidth="3" />
            <line x1="38" y1="30" x2="80" y2="30" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="82" cy="30" r="3" fill="#06b6d4" className="animate-ping" />
          </svg>
        </div>
      ),
    },

    // 43. Biometric Thumbprint Scanner
    {
      id: "biometric-fingerprint",
      title: "43. Biometric Thumbprint Scanner",
      category: "cyber",
      desc: "Optic fingerprint verification pad with vertical green laser scan bar.",
      component: (
        <div className="relative w-20 h-24 bg-[#111] border border-black p-2 flex flex-col items-center justify-center overflow-hidden">
          <svg width="48" height="60" viewBox="0 0 48 60" fill="none">
            <path d="M 14 36 C 14 20 34 20 34 36" stroke="#00ff66" strokeWidth="2" strokeLinecap="round" />
            <path d="M 8 38 C 8 14 40 14 40 38" stroke="#00ff66" strokeWidth="2" strokeLinecap="round" />
            <path d="M 20 40 C 20 28 28 28 28 40" stroke="#00ff66" strokeWidth="2" strokeLinecap="round" />
            <path d="M 24 42 L 24 54" stroke="#00ff66" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-x-0 h-[2px] bg-white animate-pulse" />
        </div>
      ),
    },

    // 44. Retro Silicon Microchip CPU
    {
      id: "silicon-microchip",
      title: "44. Ceramic Silicon Microchip",
      category: "cyber",
      desc: "Surface-mount quad flat pack microprocessor with gold heat spreader and perimeter pins.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
            <rect x="18" y="18" width="54" height="54" rx="4" fill="#141210" stroke="#000" strokeWidth="3.5" />
            <rect x="28" y="28" width="34" height="34" rx="2" fill="#ff5a1f" stroke="#000" strokeWidth="2" />
            <circle cx="24" cy="24" r="2" fill="#fff" />
            <text x="32" y="48" fill="#000" fontSize="9" fontFamily="monospace" fontWeight="black">AI_CORE</text>
            {[24, 34, 44, 54, 64].map((pos) => (
              <React.Fragment key={pos}>
                <line x1={pos} y1="8" x2={pos} y2="18" stroke="#ff5a1f" strokeWidth="2.5" />
                <line x1={pos} y1="72" x2={pos} y2="82" stroke="#ff5a1f" strokeWidth="2.5" />
                <line x1="8" y1={pos} x2="18" y2={pos} stroke="#ff5a1f" strokeWidth="2.5" />
                <line x1="72" y1={pos} x2="82" y2={pos} stroke="#ff5a1f" strokeWidth="2.5" />
              </React.Fragment>
            ))}
          </svg>
        </div>
      ),
    },

    // 45. Broadcast Radio Transceiver Walkie-Talkie
    {
      id: "walkie-talkie-radio",
      title: "45. VHF Field Walkie-Talkie",
      category: "pop-culture",
      desc: "Tactical two-way radio with whip antenna, channel selector knob, and push-to-talk button.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="80" height="115" viewBox="0 0 80 115" fill="none">
            <line x1="24" y1="4" x2="24" y2="44" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            <rect x="44" y="36" width="12" height="8" rx="2" fill="#000" stroke="#000" strokeWidth="2" />
            <path d="M 12 44 L 68 44 C 72 44 74 47 74 50 L 70 108 C 70 111 67 113 64 113 L 16 113 C 13 113 10 111 10 108 L 6 50 C 6 47 8 44 12 44 Z" fill="#27272a" stroke="#000" strokeWidth="3.5" strokeLinejoin="round" />
            <rect x="18" y="52" width="44" height="20" rx="3" fill="#8c9f7a" stroke="#000" strokeWidth="2" />
            <text x="24" y="65" fill="#000" fontSize="8" fontFamily="monospace" fontWeight="bold">CH: 09</text>
            <circle cx="28" cy="88" r="8" fill="#141210" stroke="#000" strokeWidth="1.5" />
            <circle cx="52" cy="88" r="8" fill="#141210" stroke="#000" strokeWidth="1.5" />
          </svg>
        </div>
      ),
    },

    // 46. Mechanical Speedometer Dashboard Gauge
    {
      id: "speedometer-gauge",
      title: "46. Velocity Speedometer Gauge",
      category: "hardware",
      desc: "Circular cockpit speed indicator with high-contrast km/h markings and orange peak needle.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="95" height="95" viewBox="0 0 95 95" fill="none">
            <circle cx="47" cy="47" r="42" fill="#0a0908" stroke="#000" strokeWidth="4" />
            <circle cx="47" cy="47" r="36" fill="#141210" stroke="#ff5a1f" strokeWidth="2" strokeDasharray="6 3" />
            <text x="40" y="32" fill="#ff5a1f" fontSize="8" fontFamily="monospace" fontWeight="bold">KM/H</text>
            <text x="34" y="62" fill="#fff" fontSize="16" fontFamily="var(--font-anton)" fontWeight="bold">240</text>
            <line x1="47" y1="47" x2="68" y2="28" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
            <circle cx="47" cy="47" r="5" fill="#fff" stroke="#000" strokeWidth="1.5" />
          </svg>
        </div>
      ),
    },

    // 47. Industrial Warning Klaxon Beacon
    {
      id: "warning-siren-beacon",
      title: "47. Industrial Warning Klaxon Beacon",
      category: "hardware",
      desc: "Emergency rotating beacon with fluted Fresnel dome and heavy protective cage.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="85" height="95" viewBox="0 0 85 95" fill="none">
            <rect x="14" y="64" width="56" height="24" rx="4" fill="#000" stroke="#000" strokeWidth="3.5" />
            <path d="M 20 64 C 20 28 64 28 64 64 Z" fill="#ff5a1f" stroke="#000" strokeWidth="3.5" />
            <line x1="42" y1="28" x2="42" y2="64" stroke="#000" strokeWidth="2.5" />
            <path d="M 28 36 C 36 32 48 32 56 36" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            <path d="M 10 32 L 20 40" stroke="#ff5a1f" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
            <path d="M 74 32 L 64 40" stroke="#ff5a1f" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
          </svg>
        </div>
      ),
    },

    // 48. Linear Slide Fader Potentiometer
    {
      id: "audio-slider-fader",
      title: "48. Studio Linear Slide Fader",
      category: "interactive",
      desc: "Mixer console slider track with calibrated decibel notches and textured sliding knob.",
      component: (
        <div className="relative w-36 py-3 flex flex-col items-center select-none">
          <div className="w-full flex justify-between text-[8px] font-mono font-bold text-gray-400 mb-1">
            <span>-∞</span>
            <span>-10</span>
            <span>0dB</span>
            <span>+6dB</span>
          </div>
          <div className="relative w-full h-4 bg-black border border-black flex items-center">
            <div className="w-full h-1 bg-[#27272a] mx-2" />
            <div
              style={{ left: `${sliderVal}%` }}
              className="absolute -translate-x-1/2 w-6 h-8 bg-[#ff5a1f] border border-black rounded-xs flex items-center justify-center cursor-pointer"
            >
              <div className="w-1 h-4 bg-black" />
            </div>
          </div>
        </div>
      ),
    },

    // 49. Flight Black Box Flight Recorder
    {
      id: "flight-blackbox",
      title: "49. Flight Telemetry Data Box",
      category: "hardware",
      desc: "High-impact fluorescent orange survival canister with beacon transponder and safety stencil.",
      component: (
        <div className="relative flex items-center justify-center">
          <svg width="110" height="80" viewBox="0 0 110 80" fill="none">
            <rect x="8" y="14" width="94" height="54" rx="4" fill="#f97316" stroke="#000" strokeWidth="3.5" />
            <rect x="18" y="24" width="74" height="34" rx="2" fill="#fff" stroke="#000" strokeWidth="2" />
            <text x="22" y="38" fill="#000" fontSize="8" fontFamily="monospace" fontWeight="black">FLIGHT RECORDER</text>
            <text x="22" y="48" fill="#000" fontSize="7" fontFamily="monospace" fontWeight="bold">DO NOT OPEN</text>
            <circle cx="82" cy="41" r="5" fill="#000" />
            <circle cx="82" cy="41" r="2" fill="#f97316" />
          </svg>
        </div>
      ),
    },

    // 50. Cyber Matrix QR Cryptogram
    {
      id: "matrix-qr-cryptogram",
      title: "50. Cyber Matrix QR Cryptogram",
      category: "cyber",
      desc: "High-density optical data matrix with targeting corner locators and security hash.",
      component: (
        <div className="relative p-2.5 bg-white border border-black">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect x="4" y="4" width="18" height="18" fill="#000" />
            <rect x="7" y="7" width="12" height="12" fill="#fff" />
            <rect x="10" y="10" width="6" height="6" fill="#000" />
            <rect x="38" y="4" width="18" height="18" fill="#000" />
            <rect x="41" y="7" width="12" height="12" fill="#fff" />
            <rect x="44" y="10" width="6" height="6" fill="#000" />
            <rect x="4" y="38" width="18" height="18" fill="#000" />
            <rect x="7" y="41" width="12" height="12" fill="#fff" />
            <rect x="10" y="44" width="6" height="6" fill="#000" />
            <rect x="26" y="8" width="8" height="8" fill="#000" />
            <rect x="26" y="24" width="8" height="8" fill="#000" />
            <rect x="38" y="26" width="6" height="14" fill="#000" />
            <rect x="46" y="42" width="10" height="10" fill="#000" />
            <rect x="26" y="44" width="8" height="8" fill="#000" />
          </svg>
        </div>
      ),
    },
  ];

  const filtered = activeTab === "all" ? assets : assets.filter((a) => a.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0a0908] text-white selection:bg-[#ff5a1f] selection:text-black">
      {/* Top Navbar Header */}
      <header className="sticky top-0 z-50 bg-[#0a0908]/90 backdrop-blur-md border-b border-[#ff5a1f] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="bg-[#ff5a1f] text-black border border-black px-3 py-1 font-anton text-xs sm:text-sm uppercase tracking-wider hover:bg-white transition-colors"
          >
            ← BACK TO HOME
          </Link>
          <span className="font-anton text-xl sm:text-2xl tracking-wide uppercase text-white">
            DESIGN SYSTEM &bull; <span className="text-[#ff5a1f]">ASSETS WORKBENCH</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block font-mono text-xs text-gray-400">
            50 CURATED VECTOR ASSETS
          </span>
          <div className="w-3 h-3 rounded-full bg-[#ff5a1f] animate-pulse" />
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
        {/* Intro Hero */}
        <div className="mb-10 border border-black bg-[#141210] p-6 sm:p-8 relative">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase bg-[#ff5a1f] text-black font-black px-2 py-0.5 border border-black">
                COMPONENT SUITE [50 TOTAL]
              </span>
              <span className="font-mono text-xs text-gray-400">
                UFOS &bull; BINOCULARS &bull; SUNGLASSES &bull; CAMERAS &bull; CYBER &bull; HARDWARE
              </span>
            </div>

            <h1 className="font-anton text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none text-white">
              50 BRUTALIST &amp; <span className="text-[#ff5a1f]">INTERACTIVE ASSETS</span>.
            </h1>

            <p className="text-gray-300 font-sans text-sm sm:text-base max-w-3xl leading-relaxed">
              Purged of generic placeholders. Engineered with high-precision vector SVG geometry, interactive micro-actions, tactile feedback, and authentic neo-brutalist palettes.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/20">
            {[
              { id: "all", label: `ALL ASSETS (${assets.length})` },
              { id: "optics", label: `OPTICS & GLASSES (${assets.filter(a => a.category === "optics").length})` },
              { id: "pop-culture", label: `UFOS & RETRO TECH (${assets.filter(a => a.category === "pop-culture").length})` },
              { id: "cyber", label: `CYBER & SECURITY (${assets.filter(a => a.category === "cyber").length})` },
              { id: "interactive", label: `INTERACTIVE NODES (${assets.filter(a => a.category === "interactive").length})` },
              { id: "hardware", label: `STRUCTURAL HARDWARE (${assets.filter(a => a.category === "hardware").length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`font-anton text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1.5 border border-black transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#ff5a1f] text-black"
                    : "bg-[#27272a] text-gray-300 hover:bg-white hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 50 Assets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#141210] border border-black p-5 flex flex-col justify-between transition-all group"
            >
              {/* Header Title */}
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4">
                  <span className="font-anton text-sm uppercase tracking-wide text-white group-hover:text-[#ff5a1f] transition-colors">
                    {item.title}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest bg-white/10 px-2 py-0.5 text-gray-300 border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Stage Canvas */}
                <div className="w-full h-36 bg-[#0a0908] border border-black flex items-center justify-center p-4 relative overflow-hidden group-hover:border-[#ff5a1f]/50 transition-colors">
                  {/* Subtle Grid dots */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px] pointer-events-none" />
                  <div className="relative z-10">{item.component}</div>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-gray-400 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Copy / Integration Button */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[10px] text-gray-500 uppercase">
                  ID: {item.id}
                </span>

                <button
                  onClick={() => copySnippet(`<Asset id="${item.id}" />`, index)}
                  className="font-mono text-[11px] font-bold uppercase bg-black text-[#ff5a1f] hover:bg-[#ff5a1f] hover:text-black border border-black px-2.5 py-1 transition-colors cursor-pointer"
                >
                  {copiedIndex === index ? "COPIED! ✓" : "COPY TAG"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Guidance */}
        <div className="mt-14 p-6 bg-[#ff5a1f] text-black border border-black flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-anton text-2xl uppercase tracking-tight">50 CURATED VECTOR ASSETS READY</h3>
            <p className="font-sans text-xs sm:text-sm font-semibold text-black/85 mt-0.5">
              Zero generic placeholders. All components are responsive, styled with neo-brutalist palettes, and ready for deployment.
            </p>
          </div>

          <Link
            href="/"
            className="w-full sm:w-auto bg-black text-white hover:bg-white hover:text-black font-anton text-sm uppercase px-6 py-3 border border-black transition-colors text-center whitespace-nowrap"
          >
            RETURN TO HOMEPAGE →
          </Link>
        </div>
      </main>
    </div>
  );
}
