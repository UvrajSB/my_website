"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface BackgroundShapesProps {
  className?: string
  variant?: "circles" | "squares" | "triangles"
  count?: number
}

export function BackgroundShapes({ className = "", variant = "circles", count = 5 }: BackgroundShapesProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"
  const color = isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"
  const shapes = Array.from({ length: count }, (_, i) => i)

  const getRandomPosition = () => {
    return {
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
    }
  }

  const getRandomSize = () => {
    return `${50 + Math.random() * 150}px`
  }

  const renderShape = (index: number) => {
    const position = getRandomPosition()
    const size = getRandomSize()

    switch (variant) {
      case "circles":
        return (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              left: position.x,
              top: position.y,
              width: size,
              height: size,
              backgroundColor: color,
              zIndex: 0,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 10 + Math.random() * 20,
            }}
          />
        )
      case "squares":
        return (
          <motion.div
            key={index}
            className="absolute rounded-md"
            style={{
              left: position.x,
              top: position.y,
              width: size,
              height: size,
              backgroundColor: color,
              zIndex: 0,
              transform: `rotate(${Math.random() * 45}deg)`,
            }}
            animate={{
              rotate: [Math.random() * 45, Math.random() * 45 + 15],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 10 + Math.random() * 20,
            }}
          />
        )
      case "triangles":
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: position.x,
              top: position.y,
              width: 0,
              height: 0,
              borderLeft: `${Number.parseInt(size) / 2}px solid transparent`,
              borderRight: `${Number.parseInt(size) / 2}px solid transparent`,
              borderBottom: `${Number.parseInt(size)}px solid ${color}`,
              zIndex: 0,
            }}
            animate={{
              rotate: [Math.random() * 45, Math.random() * 45 + 15],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 10 + Math.random() * 20,
            }}
          />
        )
    }
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {shapes.map((_, index) => renderShape(index))}
    </div>
  )
}
