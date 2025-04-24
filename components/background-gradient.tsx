"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface BackgroundGradientProps {
  className?: string
  variant?: "primary" | "secondary" | "accent"
}

export function BackgroundGradient({ className = "", variant = "primary" }: BackgroundGradientProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !resolvedTheme) return null

  const getGradient = () => {
    const isDark = resolvedTheme === "dark"

    switch (variant) {
      case "primary":
        return isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      case "secondary":
        return isDark ? "bg-gradient-to-r from-gray-900 to-gray-800" : "bg-gradient-to-r from-gray-50 to-white"
      case "accent":
        return isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800/50 to-gray-900"
          : "bg-gradient-to-br from-white via-gray-100 to-white"
    }
  }

  return <div className={`absolute inset-0 ${getGradient()} ${className}`} />
}
