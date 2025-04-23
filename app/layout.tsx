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
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const storedTheme = localStorage.getItem('theme')
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                const theme = storedTheme || systemTheme
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark')
                }
              } catch (e) {}
            })()
          `
        }} />
      </head>
      <body className={`${inter.className} w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
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