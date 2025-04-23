"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface BackgroundPatternProps {
  className?: string
  variant?: "dots" | "grid" | "waves"
  opacity?: number
}

export function BackgroundPattern({ className = "", variant = "dots", opacity = 0.05 }: BackgroundPatternProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"
  const color = isDark ? "255, 255, 255" : "0, 0, 0"

  const getPattern = () => {
    switch (variant) {
      case "dots":
        return {
          backgroundImage: `radial-gradient(rgba(${color}, ${opacity}) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }
      case "grid":
        return {
          backgroundImage: `linear-gradient(to right, rgba(${color}, ${opacity}) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(${color}, ${opacity}) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }
      case "waves":
        // Simplified wave pattern to avoid truncation issues
        return {
          backgroundImage: `linear-gradient(135deg, rgba(${color}, ${opacity * 0.5}) 25%, transparent 25%), 
                            linear-gradient(225deg, rgba(${color}, ${opacity * 0.5}) 25%, transparent 25%), 
                            linear-gradient(315deg, rgba(${color}, ${opacity * 0.5}) 25%, transparent 25%), 
                            linear-gradient(45deg, rgba(${color}, ${opacity * 0.5}) 25%, transparent 25%)`,
          backgroundSize: "30px 30px",
        }
    }
  }

  return <div className={`absolute inset-0 ${className}`} style={getPattern()} />
}
