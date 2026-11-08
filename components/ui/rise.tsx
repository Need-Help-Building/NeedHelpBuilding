"use client"

import { useEffect, useRef, useState } from "react"

/** Masked line reveal: text rises from below its own baseline when scrolled into view. */
export function Rise({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: "div" | "span" | "h1" | "h2" | "h3" | "p"
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="nx-mask">
      <Tag
        className={`nx-rise ${seen ? "nx-rise-in" : ""} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </Tag>
    </div>
  )
}
