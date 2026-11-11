"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { CACTI, CLOUD, CLOUD_SMALL, DINO, FOOTPRINT, PTERO_DOWN, PTERO_UP, SUN } from "@/lib/pixel-sprites";
import { cn } from "@/lib/cn";
import PixelArt from "./PixelArt";

/**
 * Decorative pixel pieces from the business card. All aria-hidden, all pointer-events-none, all positioned by
 * the caller. Motion is CSS-only and switches off under prefers-reduced-motion (see globals.css).
 */

export function PixelCloud({
  small = false,
  scale = 4,
  drift = 24,
  duration = 14,
  className,
  style,
}: {
  small?: boolean;
  scale?: number;
  /** Horizontal drift in px (0 to keep still). */
  drift?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute", drift !== 0 && "pixel-drift", className)}
      style={{ ...style, ["--drift" as string]: `${drift}px`, ["--drift-duration" as string]: `${duration}s` }}
    >
      <PixelArt sprite={small ? CLOUD_SMALL : CLOUD} scale={scale} />
    </div>
  );
}

/** The card's sun: a yellow pixel disc with a grey cloud across its lower edge. */
export function PixelSun({ scale = 5, className, style }: { scale?: number; className?: string; style?: CSSProperties }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute", className)} style={style}>
      <PixelArt sprite={SUN} scale={scale} />
      <div className="absolute" style={{ left: -scale * 5, top: scale * 8 }}>
        <PixelArt sprite={CLOUD_SMALL} scale={scale} colors={{ g: "#d7d4cc" }} />
      </div>
    </div>
  );
}

export function PixelCactus({
  variant = 1,
  scale = 4,
  className,
  style,
  color,
}: {
  variant?: 0 | 1 | 2;
  scale?: number;
  className?: string;
  style?: CSSProperties;
  color?: string;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none", className)} style={style}>
      <PixelArt sprite={CACTI[variant]} scale={scale} colors={color ? { "#": color } : undefined} />
    </div>
  );
}

export function PixelDino({ scale = 3, className, pose = "stand" }: { scale?: number; className?: string; pose?: keyof typeof DINO }) {
  return (
    <div aria-hidden className={cn("pointer-events-none", className)}>
      <PixelArt sprite={DINO[pose]} scale={scale} />
    </div>
  );
}

/**
 * A pterodactyl that glides across its (relative, overflow-hidden) parent now and then, flapping in two frames.
 * Starts when scrolled into view; hidden entirely under reduced motion.
 */
export function PixelPterodactyl({
  scale = 3,
  className,
  duration = 26,
  delay = 2,
  color,
}: {
  scale?: number;
  className?: string;
  /** Seconds per cycle; the bird is on screen for roughly the first half. */
  duration?: number;
  delay?: number;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => el.toggleAttribute("data-fly", entry.isIntersecting), { threshold: 0 });
    io.observe(el.parentElement ?? el);
    return () => io.disconnect();
  }, []);
  const colors = color ? { "#": color } : undefined;
  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pixel-ptero pointer-events-none absolute left-0", className)}
      style={{ ["--fly-duration" as string]: `${duration}s`, ["--fly-delay" as string]: `${delay}s` }}
    >
      <div className="pixel-ptero-up">
        <PixelArt sprite={PTERO_UP} scale={scale} colors={colors} />
      </div>
      <div className="pixel-ptero-down absolute inset-0">
        <PixelArt sprite={PTERO_DOWN} scale={scale} colors={colors} />
      </div>
    </div>
  );
}

/** A tiny patch of desert: a cactus on a short yellow ground line, for section edges. */
export function CactusPatch({ className, variant = 1, flip = false }: { className?: string; variant?: 0 | 1 | 2; flip?: boolean }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute flex flex-col items-center", className)}>
      <div className={cn("flex items-end gap-2", flip && "flex-row-reverse")}>
        <PixelArt sprite={CACTI[variant]} scale={3} />
        <PixelArt sprite={CACTI[0]} scale={2} />
      </div>
      <svg width="96" height="6" viewBox="0 0 48 3" shapeRendering="crispEdges" className="mt-0">
        <rect x="0" y="0" width="48" height="2" fill="#ffd000" />
        <rect x="6" y="2" width="3" height="1" fill="#171717" />
        <rect x="21" y="2" width="2" height="1" fill="#171717" />
        <rect x="37" y="2" width="4" height="1" fill="#171717" />
      </svg>
    </div>
  );
}

/** A small, hand-placed cluster of yellow pixels — the accent for dark sections. */
export function PixelDust({ className, color = "#ffd000" }: { className?: string; color?: string }) {
  const px: [number, number, number][] = [
    [0, 4, 1],
    [2, 0, 0.9],
    [4, 6, 0.5],
    [7, 2, 1],
    [9, 7, 0.35],
    [11, 1, 0.6],
    [14, 4, 0.8],
    [17, 0, 0.3],
  ];
  return (
    <svg
      aria-hidden
      viewBox="0 0 18 8"
      width={18 * 6}
      height={8 * 6}
      shapeRendering="crispEdges"
      className={cn("pointer-events-none absolute", className)}
    >
      {px.map(([x, y, o]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={color} opacity={o} />
      ))}
    </svg>
  );
}

/** A short trail of dino footprints, stepping left to right. */
export function Footprints({ count = 5, scale = 2, className }: { count?: number; scale?: number; className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none flex items-end gap-5", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{ transform: `translateY(${i % 2 ? -6 : 0}px) rotate(90deg)`, opacity: 0.25 + (i / count) * 0.6 }}>
          <PixelArt sprite={FOOTPRINT} scale={scale} colors={{ "#": "#b8b8b8" }} />
        </div>
      ))}
    </div>
  );
}

/**
 * The card's horizon: a stepped black silhouette with a yellow crust, sitting on the bottom edge of a section so
 * it flows into a dark section below (e.g. the footer). Optionally carries cacti and a small dino that runs
 * across once when the horizon scrolls into view.
 */
export function PixelHorizon({
  className,
  runner = true,
  cacti = true,
  crust = "#ffd000",
}: {
  className?: string;
  runner?: boolean;
  cacti?: boolean;
  crust?: string;
}) {
  const runnerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = runnerRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-run", "");
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Stepped skyline: heights (in 4px steps) of 24px-wide columns, repeated across the width.
  const steps = [3, 3, 4, 4, 5, 4, 4, 3, 2, 2, 3, 3, 3, 4, 5, 5, 4, 3, 3, 2];
  const col = 24;
  const unit = 4;
  const width = steps.length * col;
  const height = 6 * unit;
  let path = `M0 ${height}`;
  steps.forEach((s, i) => {
    path += ` L${i * col} ${height - s * unit} L${(i + 1) * col} ${height - s * unit}`;
  });
  path += ` L${width} ${height} Z`;
  let crustPath = "";
  steps.forEach((s, i) => {
    crustPath += `M${i * col} ${height - s * unit}h${col}v${unit}h-${col}z`;
  });

  return (
    <div aria-hidden className={cn("pointer-events-none relative h-16 w-full overflow-hidden", className)}>
      <svg className="absolute inset-x-0 bottom-0 w-full" height={height} shapeRendering="crispEdges">
        <defs>
          <pattern id="nhb-horizon" width={width} height={height} patternUnits="userSpaceOnUse">
            <path d={path} fill="#171717" />
            <path d={crustPath} fill={crust} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nhb-horizon)" />
      </svg>
      {cacti && (
        <>
          <PixelCactus variant={1} scale={2} className="absolute bottom-[14px] left-[18%]" />
          <PixelCactus variant={0} scale={2} className="absolute bottom-[10px] left-[63%]" />
          <PixelCactus variant={2} scale={2} className="absolute bottom-[14px] left-[86%] hidden sm:block" />
        </>
      )}
      {runner && (
        <div ref={runnerRef} className="pixel-runner absolute bottom-[14px] left-0" style={{ ["--run-duration" as string]: "10s" }}>
          <PixelArt sprite={DINO.runA} scale={1.5} />
        </div>
      )}
    </div>
  );
}
