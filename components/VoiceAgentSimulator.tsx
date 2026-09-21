"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, PhoneOff, Mic, Sparkles, Volume2, ShieldAlert } from "lucide-react";
import { sound } from "./SoundEffects";

export default function VoiceAgentSimulator() {
  const [callActive, setCallActive] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [latency, setLatency] = useState(240);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const dialogue = [
    {
      speaker: "agent",
      text: "Hello, this is Aura from Enterprise Operations. I noticed you requested an architecture review for 10,000 monthly automated support calls. Is now a good time?",
      latency: "214ms"
    },
    {
      speaker: "user",
      text: "Yes! We need to verify if your telephony handles natural interruptions and syncs with Salesforce.",
      latency: "Real-Time User Input"
    },
    {
      speaker: "agent",
      text: "Absolutely. We stream dual-channel WebRTC audio with sub-300ms speech-to-speech models. Any customer interruption triggers an instant 40ms halt, and all extracted entities push to Salesforce webhooks automatically.",
      latency: "268ms"
    },
    {
      speaker: "user",
      text: "That sounds incredible. Can you schedule a migration audit for tomorrow at 2 PM?",
      latency: "Real-Time User Input"
    },
    {
      speaker: "agent",
      text: "Slot confirmed for 2:00 PM tomorrow. I've sent the calendar invite and pre-meeting technical brief to your inbox. Anything else I can assist with?",
      latency: "220ms"
    }
  ];

  // Call timer and dialogue stepper
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (callActive) {
      timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
        setLatency(220 + Math.floor(Math.sin(Date.now()) * 40));
      }, 1000);
    } else {
      setCallDuration(0);
      setCurrentStep(0);
    }
    return () => clearInterval(timer);
  }, [callActive]);

  useEffect(() => {
    if (!callActive) return;
    if (currentStep < dialogue.length - 1) {
      const stepTimer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        sound.playClick();
      }, 3500);
      return () => clearTimeout(stepTimer);
    }
  }, [callActive, currentStep, dialogue.length]);

  // Animated Waveform Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;

      if (callActive) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#F59E0B";
        ctx.beginPath();

        for (let x = 0; x < width; x += 3) {
          const freq = 0.05;
          const amplitude = (height / 3) * (Math.sin(phase * 2 + x * 0.05) * 0.5 + 0.5);
          const y = height / 2 + Math.sin(x * freq + phase) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        phase += 0.12;
      } else {
        // Idle flatline
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "rgba(0,0,0,0.15)";
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [callActive]);

  const toggleCall = () => {
    sound.playClick();
    setCallActive(!callActive);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full rounded-3xl hud-glass-card border border-white/85 p-6 sm:p-10 shadow-lg overflow-hidden relative">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200/70">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
              Caller.work Voice Engine // Live Simulator
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-normal text-[#0A0A0C]">
            Interactive Conversational Telephony
          </h3>
        </div>

        {/* Action Button */}
        <button
          onClick={toggleCall}
          data-cursor={callActive ? "// END CALL" : "// START CALL"}
          className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md ${
            callActive
              ? "bg-rose-600 hover:bg-rose-700 text-white"
              : "bg-[#0A0A0C] hover:bg-black text-white hover:scale-105"
          }`}
        >
          {callActive ? (
            <>
              <PhoneOff size={15} />
              <span>Disconnect Telephony</span>
            </>
          ) : (
            <>
              <Phone size={15} />
              <span>Test Simulated Call</span>
            </>
          )}
        </button>
      </div>

      {/* Simulator Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Column: Waveform & Telemetry */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-white/70 border border-gray-200/70">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-4">
              <span>AUDIO BUFFER</span>
              <span className="font-semibold text-black">
                {callActive ? `${latency}ms RESPONSE` : "STANDBY"}
              </span>
            </div>

            {/* Waveform Canvas */}
            <div className="h-28 w-full bg-black/5 rounded-xl flex items-center justify-center p-2 mb-6">
              <canvas
                ref={canvasRef}
                width={360}
                height={100}
                className="w-full h-full"
              />
            </div>

            {/* Telemetry Metrics */}
            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-3 rounded-xl bg-white/90 border border-gray-200/60 shadow-2xs">
                <span className="text-[10px] font-mono text-gray-500 uppercase block">
                  Active Call
                </span>
                <span className="text-base font-bold font-mono text-black">
                  {callActive ? formatTime(callDuration) : "00:00"}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/90 border border-gray-200/60 shadow-2xs">
                <span className="text-[10px] font-mono text-gray-500 uppercase block">
                  Codec / Protocol
                </span>
                <span className="text-base font-bold font-mono text-black">
                  Opus // WebRTC
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-[11px] font-mono text-gray-500">
            <span>DISPATCH STATUS</span>
            <span className={callActive ? "text-emerald-600 font-bold" : "text-gray-400"}>
              {callActive ? "● 100% SYNCHRONIZED" : "○ READY TO TEST"}
            </span>
          </div>
        </div>

        {/* Right Column: Live Transcript Dialogue Stream */}
        <div className="lg:col-span-7 flex flex-col justify-between h-[360px] p-6 rounded-2xl bg-white/80 border border-gray-200/70 overflow-y-auto no-scrollbar">
          <div className="space-y-4">
            {dialogue.slice(0, currentStep + 1).map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  msg.speaker === "agent" ? "items-start" : "items-end"
                } animate-fade-in`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10.5px] font-mono font-semibold uppercase text-gray-500">
                    {msg.speaker === "agent" ? "Caller.work Voice AI" : "Enterprise Prospect"}
                  </span>
                  <span className="text-[9.5px] font-mono text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                    {msg.latency}
                  </span>
                </div>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.speaker === "agent"
                      ? "bg-[#0A0A0C] text-white rounded-tl-sm"
                      : "bg-gray-100 text-gray-800 rounded-tr-sm border border-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {!callActive && (
            <div className="text-center py-12 text-gray-400 text-xs font-mono">
              [ Tap &quot;Test Simulated Call&quot; above to launch real-time speech dialogue ]
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
