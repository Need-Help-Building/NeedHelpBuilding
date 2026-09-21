"use client";

import { useEffect, useState } from "react";

export default function MagneticCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if target has custom cursor label
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (target && target.dataset.cursor) {
        setLabel(target.dataset.cursor);
        setIsHovered(true);
      } else {
        setLabel(null);
        const clickable = (e.target as HTMLElement)?.closest("a, button, [role='button']");
        setIsHovered(!!clickable);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Smooth follower loop
    let animationFrameId: number;
    const follow = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };
    animationFrameId = requestAnimationFrame(follow);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos.x, pos.y]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Center pinpoint */}
      <div
        className="fixed w-1.5 h-1.5 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          opacity: isHovered ? 0 : 1,
        }}
      />

      {/* Lagging magnetic outer ring / pill */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/70 flex items-center justify-center transition-all duration-200 ease-out backdrop-blur-[1px] ${
          label
            ? "px-3.5 py-1.5 w-auto h-auto bg-black text-white text-[10.5px] font-mono tracking-widest font-semibold border-black shadow-lg"
            : isHovered
            ? "w-11 h-11 bg-black/10 scale-110 border-black/90"
            : "w-8 h-8 bg-transparent"
        }`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
        }}
      >
        {label && <span className="whitespace-nowrap">{label}</span>}
      </div>
    </div>
  );
}
