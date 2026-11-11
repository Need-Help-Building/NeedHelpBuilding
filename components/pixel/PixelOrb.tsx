"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Pixel orb: the site's interactive "creature" redrawn as 14×14 pixel art, matching the business-card identity.
 * Eyes follow the pointer, it blinks now and then, squints and hops on hover, and jumps when clicked.
 * Drop-in for the old LiveOrb props (variant / color / eyeColor / size). No blinking or hopping under
 * prefers-reduced-motion.
 */

type Variant = "white" | "black" | "webgl" | "custom";

const N = 14;
const C = 6.5;

function mix(hex: string, target: [number, number, number], amount: number) {
  const n = hex.replace("#", "");
  const full = n.length === 3 ? n.split("").map((c) => c + c).join("") : n;
  const rgb = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
  const out = rgb.map((v, i) => Math.round(v + (target[i] - v) * amount));
  return `#${out.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

function palette(variant: Variant | undefined, color?: string, eyeColor?: string) {
  if (variant === "black") return { body: "#171717", eye: "#f5f3ed", outline: null as string | null };
  if (variant === "white") return { body: "#f5f3ed", eye: "#171717", outline: "#171717" };
  if (variant === "custom" && color) return { body: color, eye: eyeColor ?? "#171717", outline: null };
  return { body: "#ffd000", eye: "#171717", outline: null };
}

/** Pre-computed disc pixels with shade and highlight roles. */
const DISC = (() => {
  const px: { x: number; y: number; role: "body" | "shade" | "light" | "rim" }[] = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const d = Math.hypot(x - C, y - C);
      if (d > 6.75) continue;
      const rim = d > 5.9;
      const lit = (x === 3 && (y === 3 || y === 4)) || (x === 4 && y === 3);
      const shade = x - C + (y - C) > 4.2;
      px.push({ x, y, role: lit ? "light" : rim ? "rim" : shade ? "shade" : "body" });
    }
  }
  return px;
})();

export default function PixelOrb({
  variant,
  color,
  eyeColor,
  size = 48,
  className,
}: {
  variant?: Variant;
  color?: string;
  eyeColor?: string;
  size?: number;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [look, setLook] = useState<[number, number]>([0, 0]);
  const [blink, setBlink] = useState(false);
  const [hover, setHover] = useState(false);
  const [hop, setHop] = useState(0);

  const colors = useMemo(() => {
    const p = palette(variant, color, eyeColor);
    const dark = p.body === "#171717";
    return {
      ...p,
      shade: dark ? "#0b0b0b" : mix(p.body, [0, 0, 0], 0.2),
      light: dark ? "#3a3a3a" : mix(p.body, [255, 255, 255], 0.45),
      rim: p.outline ?? (dark ? "#0b0b0b" : mix(p.body, [0, 0, 0], 0.32)),
    };
  }, [variant, color, eyeColor]);

  // Eyes follow the pointer (one rAF-throttled listener per orb).
  useEffect(() => {
    let frame = 0;
    let px = 0;
    let py = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = px - (r.left + r.width / 2);
      const dy = py - (r.top + r.height / 2);
      const far = Math.hypot(dx, dy) > r.width * 0.6;
      const nx = far ? Math.sign(dx) * (Math.abs(dx) > Math.abs(dy) * 0.4 ? 1 : 0) : 0;
      const ny = far ? Math.sign(dy) * (Math.abs(dy) > Math.abs(dx) * 0.4 ? 1 : 0) : 0;
      // Only re-render when the eyes actually move to a new pixel.
      setLook((prev) => (prev[0] === nx && prev[1] === ny ? prev : [nx, ny]));
    };
    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Occasional blink.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t: number;
    const schedule = () => {
      t = window.setTimeout(() => {
        setBlink(true);
        window.setTimeout(() => setBlink(false), 140);
        schedule();
      }, 2600 + Math.random() * 3600);
    };
    schedule();
    return () => window.clearTimeout(t);
  }, []);

  const [lx, ly] = look;
  const eyeH = blink || hover ? 1 : 3;
  const eyeY = 4 + ly + (blink || hover ? 2 : 0);
  const eyes = [3 + lx, 8 + lx].map((x) => ({ x, y: eyeY, w: 2, h: eyeH }));

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${N} ${N}`}
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onClick={() => setHop((h) => h + 1)}
      className={cn("pixel-orb block cursor-pointer select-none", hover && "pixel-orb-hover", className)}
    >
      <g key={hop} className={hop ? "pixel-orb-jump" : undefined}>
        {DISC.map((p) => (
          <rect key={`${p.x}-${p.y}`} x={p.x} y={p.y} width={1} height={1} fill={colors[p.role === "body" ? "body" : p.role]} />
        ))}
        {eyes.map((e, i) => (
          <rect key={i} x={e.x} y={e.y} width={e.w} height={e.h} fill={colors.eye} />
        ))}
        {hover && <rect x={5 + lx} y={9 + ly} width={4} height={1} fill={colors.eye} />}
      </g>
    </svg>
  );
}
