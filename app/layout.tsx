import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { AnimationProvider } from "@/components/animation-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yuvraj S Bhadauria - Entrepreneur & Creator",
  description: "Personal portfolio and blog showcasing my entrepreneurial journey, projects, and thoughts.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} w-full`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnimationProvider>
            <Header />
            <main className="w-full flex justify-center">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {children}
              </div>
            </main>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}




import './globals.css'