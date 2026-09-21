"use client";

import { useState } from "react";
import { Sparkles, ShoppingBag, ArrowRight, Check, RefreshCw } from "lucide-react";
import { sound } from "./SoundEffects";

export default function InstantStoreGenerator() {
  const [prompt, setPrompt] = useState("Minimalist Titanium Chronograph");
  const [isGenerating, setIsGenerating] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [storeData, setStoreData] = useState({
    title: "Minimalist Titanium Chronograph",
    tagline: "Grade 5 Aerospace Titanium · Dual Sapphire Crystal",
    price: "$480.00",
    stock: "14 Units Ready for Dispatch",
    sku: "SKU-YSH-8821",
    tag: "Luxury Horology",
    description: "Engineered with matte DLC-coated aerospace titanium casing, Japanese automatic movement, and a waterproof fluoroelastomer strap."
  });

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    sound.playClick();
    setIsGenerating(true);

    setTimeout(() => {
      sound.playChime();
      const p = prompt.trim();
      setStoreData({
        title: p,
        tagline: `Engineered for high-demand lifestyle · Instant automated catalog`,
        price: `$${(Math.floor(Math.random() * 200) + 49)}.00`,
        stock: `${Math.floor(Math.random() * 40) + 8} Units In Stock`,
        sku: `SKU-YSH-${Math.floor(Math.random() * 9000 + 1000)}`,
        tag: "Autonomous Catalog",
        description: `Automated dynamic specification generated for ${p}. Powered by YourStoreHere AI storefront synthesis engine.`
      });
      setIsGenerating(false);
    }, 450);
  };

  return (
    <div className="w-full rounded-3xl hud-glass-card border border-white/85 p-6 sm:p-10 shadow-lg overflow-hidden relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200/70">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">
              YourStoreHere Engine // Instant Storefront Sandbox
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-normal text-[#0A0A0C]">
            Real-Time AI Commerce Catalog Generator
          </h3>
        </div>
        <span className="text-xs font-mono text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-2xs self-start sm:self-auto">
          SYNTHESIS LATENCY: &lt;80ms
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
        {/* Left: Input Form */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Type any product or merchandise idea below to watch YourStoreHere synthesize a fully structured, checkout-ready storefront SKU card instantly.
          </p>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Ergonomic Walnut Desk Lamp"
                className="w-full px-5 py-3.5 rounded-2xl bg-white border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black shadow-sm font-medium"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["Obsidian Pour-Over Dripper", "Bespoke Cashmere Overshirt", "Noise-Cancelling Studio Monitor"].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setPrompt(preset);
                    sound.playClick();
                  }}
                  className="px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10 text-xs font-medium text-gray-700 transition-colors"
                >
                  {preset}
                </button>
              ))}
            </div>

            <button
              type="submit"
              data-cursor="// GENERATE"
              disabled={isGenerating}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#0A0A0C] hover:bg-black text-white text-sm font-medium transition-all shadow-md disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw size={15} className="animate-spin" />
                  <span>Synthesizing SKU & Layout...</span>
                </>
              ) : (
                <>
                  <Sparkles size={15} className="text-amber-400" />
                  <span>Generate Live Storefront Card</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right: Live Dynamic Generated Storefront Card */}
        <div className="lg:col-span-6">
          <div className="p-7 rounded-3xl bg-white border border-gray-200/80 shadow-xl relative overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md font-bold">
                {storeData.tag}
              </span>
              <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {storeData.stock}
              </span>
            </div>

            <h4 className="text-2xl font-normal tracking-tight text-gray-900 mb-1">
              {storeData.title}
            </h4>
            <p className="text-xs font-mono text-gray-500 mb-4">
              {storeData.sku}
            </p>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
              {storeData.description}
            </p>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono text-gray-400 block">Unit Price</span>
                <span className="text-2xl font-bold font-mono text-[#0A0A0C]">
                  {storeData.price}
                </span>
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  setCheckoutDone(true);
                  setTimeout(() => setCheckoutDone(false), 2500);
                }}
                data-cursor="// CHECKOUT"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all shadow-sm ${
                  checkoutDone
                    ? "bg-emerald-600 text-white"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {checkoutDone ? (
                  <>
                    <Check size={13} className="text-white" />
                    <span>Cart Synthesized!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={13} />
                    <span>Instant Checkout</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
