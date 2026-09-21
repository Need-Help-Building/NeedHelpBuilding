"use client";

import { useEffect, useState } from "react";
import { Globe, Cpu, Radio, ShieldCheck } from "lucide-react";

export default function GlobalTelemetryBar() {
  const [times, setTimes] = useState({ sf: "", london: "", tokyo: "" });
  const [activeNodes, setActiveNodes] = useState(142);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const format = (tz: string) =>
        new Intl.DateTimeFormat("en-US", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);

      setTimes({
        sf: format("America/Los_Angeles"),
        london: format("Europe/London"),
        tokyo: format("Asia/Tokyo"),
      });

      // Subtle simulated node count shift
      setActiveNodes(140 + Math.floor(Math.sin(Date.now() / 3000) * 6));
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-t border-gray-300/80 bg-[#E2E3E7] py-3.5 px-6 sm:px-12 text-xs font-mono text-gray-600 select-none">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Global Hub Clocks */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-semibold text-gray-800">GLOBAL NODES:</span>
          </div>
          <div>
            <span className="text-gray-400">SF: </span>
            <span className="text-black font-semibold">{times.sf || "04:12:40"}</span>
          </div>
          <div>
            <span className="text-gray-400">LON: </span>
            <span className="text-black font-semibold">{times.london || "12:12:40"}</span>
          </div>
          <div>
            <span className="text-gray-400">TYO: </span>
            <span className="text-black font-semibold">{times.tokyo || "20:12:40"}</span>
          </div>
        </div>

        {/* Right: Telemetry stream */}
        <div className="flex items-center gap-6 text-[11px]">
          <div className="flex items-center gap-1.5">
            <Cpu size={12} className="text-blue-600" />
            <span>ACTIVE AGENT PIPELINES: <strong className="text-black">{activeNodes}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Radio size={12} className="text-amber-600 animate-pulse" />
            <span>STREAM LATENCY: <strong className="text-black">&lt;14ms</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
