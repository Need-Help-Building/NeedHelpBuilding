"use client"

import type React from "react"
import { Warp } from "@paper-design/shaders-react"

export const SHADER_CONFIGS = [
  {
    proportion: 0.3,
    softness: 0.8,
    distortion: 0.15,
    swirl: 0.6,
    swirlIterations: 8,
    shape: "checks" as const,
    shapeScale: 0.08,
    colors: ["hsl(10, 100%, 10%)", "hsl(14, 100%, 48%)", "hsl(24, 100%, 54%)", "hsl(34, 100%, 60%)"],
  },
  {
    proportion: 0.4,
    softness: 1.2,
    distortion: 0.2,
    swirl: 0.9,
    swirlIterations: 12,
    shape: "stripes" as const,
    shapeScale: 0.12,
    colors: ["hsl(6, 90%, 9%)", "hsl(2, 85%, 42%)", "hsl(16, 100%, 52%)", "hsl(28, 100%, 62%)"],
  },
  {
    proportion: 0.35,
    softness: 0.9,
    distortion: 0.18,
    swirl: 0.7,
    swirlIterations: 10,
    shape: "checks" as const,
    shapeScale: 0.1,
    colors: ["hsl(20, 80%, 8%)", "hsl(18, 100%, 46%)", "hsl(30, 100%, 50%)", "hsl(40, 100%, 62%)"],
  },
  {
    proportion: 0.45,
    softness: 1.1,
    distortion: 0.22,
    swirl: 0.8,
    swirlIterations: 15,
    shape: "stripes" as const,
    shapeScale: 0.09,
    colors: ["hsl(12, 90%, 9%)", "hsl(8, 100%, 40%)", "hsl(20, 100%, 50%)", "hsl(32, 100%, 58%)"],
  },
  {
    proportion: 0.38,
    softness: 0.95,
    distortion: 0.16,
    swirl: 0.85,
    swirlIterations: 11,
    shape: "checks" as const,
    shapeScale: 0.11,
    colors: ["hsl(16, 85%, 8%)", "hsl(10, 95%, 44%)", "hsl(26, 100%, 52%)", "hsl(36, 100%, 64%)"],
  },
  {
    proportion: 0.42,
    softness: 1.0,
    distortion: 0.19,
    swirl: 0.75,
    swirlIterations: 9,
    shape: "stripes" as const,
    shapeScale: 0.13,
    colors: ["hsl(4, 90%, 10%)", "hsl(14, 100%, 40%)", "hsl(22, 100%, 48%)", "hsl(30, 100%, 56%)"],
  },
]

export function ShaderBackdrop({ variant = 0, className = "" }: { variant?: number; className?: string }) {
  const c = SHADER_CONFIGS[variant % SHADER_CONFIGS.length]
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      <Warp
        style={{ height: "100%", width: "100%" }}
        proportion={c.proportion}
        softness={c.softness}
        distortion={c.distortion}
        swirl={c.swirl}
        swirlIterations={c.swirlIterations}
        shape={c.shape}
        shapeScale={c.shapeScale}
        scale={1}
        rotation={0}
        speed={0.55}
        colors={c.colors}
      />
    </div>
  )
}

/** Rounded card: animated colorful shader behind a dark glass panel. */
export function ShaderCard({
  variant = 0,
  className = "",
  innerClassName = "",
  children,
}: {
  variant?: number
  className?: string
  innerClassName?: string
  children: React.ReactNode
}) {
  return (
    <div className={`nhb-card relative ${className}`}>
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <ShaderBackdrop variant={variant} />
      </div>
      <div
        className={`relative z-10 h-full rounded-3xl bg-[#0a0908]/80 border border-[#f1ebe0]/10 p-6 sm:p-8 flex flex-col text-[#f1ebe0] ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  )
}
