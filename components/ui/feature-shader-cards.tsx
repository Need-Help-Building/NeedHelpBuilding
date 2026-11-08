"use client"

import type React from "react"
import { Star, Zap, Wrench, Smartphone, CheckCircle2 } from "lucide-react"
import { ShaderCard } from "./shader-card"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const iconCls = "w-12 h-12 text-white"

const features: Feature[] = [
  {
    title: "Elegant Design",
    description:
      "Beautiful shader effects that enhance your content without overwhelming it. Perfect for modern web experiences.",
    icon: <Star className={iconCls} />,
  },
  {
    title: "High Performance",
    description: "Optimized WebGL shaders that run smoothly on all devices while maintaining stunning visual quality.",
    icon: <Zap className={iconCls} />,
  },
  {
    title: "Easy Integration",
    description: "Simple React components that can be dropped into any project with minimal configuration required.",
    icon: <Wrench className={iconCls} />,
  },
  {
    title: "Customizable",
    description: "Extensive customization options to match your brand colors, animations, and visual style perfectly.",
    icon: <Star className={iconCls} />,
  },
  {
    title: "Responsive",
    description: "Fully responsive design that looks great on desktop, tablet, and mobile devices of all sizes.",
    icon: <Smartphone className={iconCls} />,
  },
  {
    title: "Modern Tech",
    description: "Built with the latest web technologies including WebGL, React, and TypeScript for reliability.",
    icon: <CheckCircle2 className={iconCls} />,
  },
]

export default function FeaturesCards() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-background dark:to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">Powerful Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to create stunning visual experiences with elegant shader backgrounds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ShaderCard key={index} variant={index} className="h-80" innerClassName="p-8">
              <div className="mb-6 filter drop-shadow-lg">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="leading-relaxed flex-grow text-gray-100 font-medium">{feature.description}</p>
              <div className="mt-6 flex items-center text-sm font-bold text-gray-200">
                <span className="mr-2">Learn more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </ShaderCard>
          ))}
        </div>
      </div>
    </section>
  )
}
