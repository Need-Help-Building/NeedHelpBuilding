"use client";

import React, { useEffect, useState, useCallback } from "react";

declare global {
  interface Window {
    __swarmRebuild?: {
      toggle: () => void;
      start: () => void;
      stop: (reveal?: boolean) => void;
      app: any;
    };
  }
}

interface SwarmRebuildLauncherProps {
  /** Optional custom button label */
  label?: string;
  /** Optional custom styling classes */
  className?: string;
  /** Automatically bind hotkey Alt+Shift+S (matching the original extension) */
  enableHotkey?: boolean;
}

export function triggerSwarmRebuild() {
  if (typeof window === "undefined") return;

  if (window.__swarmRebuild) {
    window.__swarmRebuild.toggle();
    return;
  }

  // Inject the script on demand so it snapshots the fully-rendered live DOM
  const script = document.createElement("script");
  script.src = "/swarm/swarm.js";
  script.async = true;
  script.onload = () => {
    // swarm.js calls start() automatically on initialization
  };
  script.onerror = (e) => {
    console.error("[SwarmRebuild] Failed to load swarm.js", e);
  };
  document.body.appendChild(script);
}

export default function SwarmRebuildLauncher({
  label = "Rebuild Page",
  className = "",
  enableHotkey = true,
}: SwarmRebuildLauncherProps) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = useCallback(() => {
    triggerSwarmRebuild();
    setIsActive((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!enableHotkey) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Hotkey: Alt+Shift+S (matches chrome extension) or Ctrl+Shift+S
      if (e.altKey && e.shiftKey && (e.key === "S" || e.key === "s")) {
        e.preventDefault();
        handleToggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enableHotkey, handleToggle]);

  return (
    <button
      onClick={handleToggle}
      type="button"
      title="Multiplayer Cursors Rebuild (Alt+Shift+S)"
      aria-label="Rebuild website using Swarm Cursors"
      className={
        className ||
        "fixed bottom-6 left-6 z-40 flex items-center gap-2.5 bg-[#fbda03] text-black font-anton text-xs sm:text-sm uppercase tracking-wider px-4 py-2.5 rounded-full border-[2.5px] border-black shadow-[4px_4px_0_0_#fff] hover:bg-white hover:shadow-[4px_4px_0_0_#fbda03] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer group select-none"
      }
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black" />
      </span>
      <span>{label}</span>
      <span className="hidden sm:inline-block font-mono text-[10px] font-bold bg-black text-[#fbda03] px-2 py-0.5 rounded-full border border-black">
        ⌥⇧S
      </span>
    </button>
  );
}

