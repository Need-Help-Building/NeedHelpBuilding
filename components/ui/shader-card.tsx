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
    colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
  },
  {
    proportion: 0.4,
    softness: 1.2,
    distortion: 0.2,
    swirl: 0.9,
    swirlIterations: 12,
    shape: "stripes" as const,
    shapeScale: 0.12,
    colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
  },
  {
    proportion: 0.35,
    softness: 0.9,
    distortion: 0.18,
    swirl: 0.7,
    swirlIterations: 10,
    shape: "checks" as const,
    shapeScale: 0.1,
    colors: ["hsl(120, 100%, 25%)", "hsl(140, 100%, 60%)", "hsl(100, 90%, 30%)", "hsl(130, 100%, 70%)"],
  },
  {
    proportion: 0.45,
    softness: 1.1,
    distortion: 0.22,
    swirl: 0.8,
    swirlIterations: 15,
    shape: "stripes" as const,
    shapeScale: 0.09,
    colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"],
  },
  {
    proportion: 0.38,
    softness: 0.95,
    distortion: 0.16,
    swirl: 0.85,
    swirlIterations: 11,
    shape: "checks" as const,
    shapeScale: 0.11,
    colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"],
  },
  {
    proportion: 0.42,
    softness: 1.0,
    distortion: 0.19,
    swirl: 0.75,
    swirlIterations: 9,
    shape: "stripes" as const,
    shapeScale: 0.13,
    colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"],
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
        speed={0.8}
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
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <ShaderBackdrop variant={variant} />
      </div>
      <div
        className={`relative z-10 h-full rounded-3xl bg-black/80 border border-white/15 p-6 sm:p-8 flex flex-col text-white ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  )
}
