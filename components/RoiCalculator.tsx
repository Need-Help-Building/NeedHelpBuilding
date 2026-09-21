"use client";

import { useState } from "react";
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react";
import { sound } from "./SoundEffects";

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(15);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(12);
  const [hourlyCost, setHourlyCost] = useState(65);

  // Calculations
  const weeklyWastedHours = teamSize * manualHoursPerWeek;
  const annualWastedCapital = weeklyWastedHours * 52 * hourlyCost;
  const automatedSavings = Math.round(annualWastedCapital * 0.78);
  const reclaimedHours = Math.round(weeklyWastedHours * 52 * 0.78);
  const paybackWeeks = Math.max(1, Math.round(25000 / (annualWastedCapital / 52)));

  return (
    <div className="w-full rounded-3xl hud-glass-card border border-white/85 p-6 sm:p-10 shadow-lg overflow-hidden relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200/70">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Autonomous Systems // ROI Engine
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-normal text-[#0A0A0C]">
            Calculate Your Organization&apos;s Annual Capital Leverage
          </h3>
        </div>
        <span className="text-xs font-mono text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-2xs self-start sm:self-auto">
          MODEL: 78% REDUCTION COEFFICIENT
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 items-center">
        {/* Left: Dynamic Sliders */}
        <div className="lg:col-span-6 space-y-7">
          {/* Slider 1: Team Size */}
          <div>
            <div className="flex justify-between items-center text-sm font-medium mb-2">
              <span className="text-gray-700">Operational Team Size</span>
              <span className="font-mono font-bold text-base text-black bg-white px-2.5 py-0.5 rounded border border-gray-200">
                {teamSize} people
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="150"
              value={teamSize}
              onChange={(e) => {
                setTeamSize(Number(e.target.value));
                sound.playHover();
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
            />
            <div className="flex justify-between text-[10px] font-mono text-gray-400 mt-1">
              <span>2 members</span>
              <span>150 members</span>
            </div>
          </div>

          {/* Slider 2: Hours wasted per person */}
          <div>
            <div className="flex justify-between items-center text-sm font-medium mb-2">
              <span className="text-gray-700">Manual Hours Wasted / Member / Wk</span>
              <span className="font-mono font-bold text-base text-black bg-white px-2.5 py-0.5 rounded border border-gray-200">
                {manualHoursPerWeek} hrs/wk
              </span>
            </div>
            <input
              type="range"
              min="3"
              max="35"
              value={manualHoursPerWeek}
              onChange={(e) => {
                setManualHoursPerWeek(Number(e.target.value));
                sound.playHover();
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
            />
            <div className="flex justify-between text-[10px] font-mono text-gray-400 mt-1">
              <span>3 hrs/wk</span>
              <span>35 hrs/wk</span>
            </div>
          </div>

          {/* Slider 3: Hourly Wage */}
          <div>
            <div className="flex justify-between items-center text-sm font-medium mb-2">
              <span className="text-gray-700">Blended Hourly Labor Cost</span>
              <span className="font-mono font-bold text-base text-black bg-white px-2.5 py-0.5 rounded border border-gray-200">
                ${hourlyCost}/hr
              </span>
            </div>
            <input
              type="range"
              min="25"
              max="250"
              step="5"
              value={hourlyCost}
              onChange={(e) => {
                setHourlyCost(Number(e.target.value));
                sound.playHover();
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
            />
            <div className="flex justify-between text-[10px] font-mono text-gray-400 mt-1">
              <span>$25/hr</span>
              <span>$250/hr</span>
            </div>
          </div>
        </div>

        {/* Right: Real-time Calculated ROI Output Dashboard */}
        <div className="lg:col-span-6">
          <div className="p-8 rounded-3xl bg-[#0A0A0C] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2 block">
              Estimated Net Annual Savings
            </span>
            <div className="text-4xl sm:text-5xl font-bold font-mono text-white tracking-tight mb-6">
              ${automatedSavings.toLocaleString()}
            </div>

            <div className="grid grid-cols-2 gap-4 pb-6 mb-6 border-b border-white/15">
              <div>
                <span className="text-[11px] font-mono text-gray-400 uppercase block mb-1">
                  Reclaimed Team Hours
                </span>
                <span className="text-2xl font-bold font-mono text-white">
                  {reclaimedHours.toLocaleString()} hrs
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-gray-400 uppercase block mb-1">
                  Sprint Payback Window
                </span>
                <span className="text-2xl font-bold font-mono text-emerald-400">
                  ~{paybackWeeks} {paybackWeeks === 1 ? "Week" : "Weeks"}
                </span>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => sound.playClick()}
              data-cursor="// LOCK ESTIMATE"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors shadow"
            >
              <span>Build This System For Your Team</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
