"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundGradient } from "@/components/background-gradient"
import { BackgroundPattern } from "@/components/background-pattern"
import { BackgroundShapes } from "@/components/background-shapes"
import { AnimatedCard } from "@/components/animated-card"

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20 relative overflow-hidden">
            <BackgroundGradient variant="accent" />
            <BackgroundShapes variant="circles" count={8} />
            <div className="container px-4 md:px-6 relative z-10">
              <div className="grid gap-8 md:gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <AnimatedSection className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl/none">
                      Hi, I'm Yuvraj
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400">
                      I'm a generalist who loves diving into new tech and figuring out how it fits into the market and the world.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/projects">
                      <Button className="w-full min-[400px]:w-auto px-4 py-2 relative overflow-hidden group">
                        <span className="relative z-10">View My Projects</span>
                        <motion.div
                          className="absolute inset-0 bg-primary/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                      </Button>
                    </Link>
                    <Link href="/blog">
                      <Button variant="outline" className="w-full min-[400px]:w-auto px-4 py-2 relative overflow-hidden group">
                        <span className="relative z-10">Read My Blog</span>
                        <motion.div
                          className="absolute inset-0 bg-primary/10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </Link>
                  </div>
                  <motion.div
                    className="flex items-center gap-4 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Link href="https://twitter.com/yourusername" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="https://github.com/UvrajSB" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="https://linkedin.com/in/yuvrajbhadauria" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection delay={0.3} direction="left" className="flex items-center justify-center order-1 lg:order-2">
                  <motion.div
                    className="relative w-full max-w-[200px] md:max-w-[350px] aspect-[3/4.5] overflow-hidden rounded-xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src="mypic2.png" alt="Profile" className="object-cover w-full h-full" />
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
            <BackgroundPattern variant="grid" />
            <div className="container px-4 md:px-6 relative z-10">
              <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Check out some of my recent works.
                  </p>
                </div>
              </AnimatedSection>

              <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:grid-cols-3">
                {[
                  {
                    id: "privagent",
                    title: "Privacy Centric AI Systems",
                    description: "Developing privacy-centric AI systems with Federated learning & Privacy-Enhancement Techniques for the past 3 years.",
                    image: "/p2.jpg",
                    href: "/projects/Privacy",
                  },
                  {
                    id: "llm",
                    title: "LLMs",
                    description: "Working with agentic frameworks, on-device deployment and optimisations of Small language models for edge.",
                    image: "/p3.jpg",
                    href: "/projects/llm",
                  },
                  {
                    id: "rf",
                    title: "RF Sensing",
                    description: "Developed batterless IoT sensing system using tunnel diodes for unintrusive respiratory rate monitoring.",
                    image: "p1.jpg",
                    href: "/projects/RF",
                  },
                ].map((project, index) => (
                  <AnimatedCard key={project.id} delay={0.2 * index} className="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col justify-between">
                    <div className="p-6 flex flex-col h-full">
                      <div className="space-y-4 flex-1">
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                      </div>
                      <Link href={project.href} className="mt-4">
                        <Button variant="outline" className="w-full relative overflow-hidden group">
                          <span className="relative z-10">View Project</span>
                          <motion.div
                            className="absolute inset-0 bg-primary/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </Button>
                      </Link>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              <AnimatedSection delay={0.6} className="flex justify-center">
                <Link href="/projects">
                  <Button variant="outline" className="relative overflow-hidden group">
                    <span className="relative z-10">View All Projects</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
            <BackgroundGradient variant="secondary" />
            <BackgroundShapes variant="squares" count={6} />
            <div className="container px-4 md:px-6 relative z-10">
              <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Blog Posts</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Insights, thoughts, and lessons from my journey.
                  </p>
                </div>
              </AnimatedSection>

              <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 lg:grid-cols-2">
                {[
                    {

                      title: "Protecting Privacy in Menstrual Health Apps: What, Why and How?",
                      description: "Explores the privacy concerns associated with menstrual health apps and discusses how federated learning can offer solutions.",
                      date: "December 7, 2024",
                      slug: "https://medium.com/@yuvraj.s.bhadauria/protecting-privacy-in-menstrual-health-apps-what-why-and-how-b8be5e91cb27",
                    },
                    {
                      title: "Internet In Privacy Out? Connected Cars Could Become a Privacy Nightmare",
                      description: "Analyzes the privacy implications of connected vehicles and the potential misuse of personal data collected by car manufacturers.",
                      date: "December 6, 2024",
                      slug: "https://medium.com/@yuvraj.s.bhadauria/internet-in-privacy-out-connected-cars-could-become-a-privacy-nightmare-e52f85ca7977",
                    },
                ].map((post, index) => (
                  <AnimatedCard key={post.slug} delay={0.2 * index} className="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col justify-between">
                    <div className="p-6 flex flex-col h-full">
                      <div className="space-y-4 flex-1">
                        <h3 className="text-2xl font-bold">{post.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Published on {post.date}</p>
                        <p className="text-gray-500 dark:text-gray-400">{post.description}</p>
                      </div>
                      <Link href={`${post.slug}`} className="mt-4">
                        <Button variant="outline" className="w-full relative overflow-hidden group">
                          <span className="relative z-10">Read More</span>
                          <motion.div
                            className="absolute inset-0 bg-primary/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </Button>
                      </Link>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              <AnimatedSection delay={0.6} className="flex justify-center">
                <Link href="/blog">
                  <Button variant="outline" className="relative overflow-hidden group">
                    <span className="relative z-10">View All Posts</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </section>
        </main>

        <footer className="w-full border-t py-6 relative">
          <BackgroundPattern variant="dots" opacity={0.03} />
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6 relative z-10">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Yuvraj S Bhadauria. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/about" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                About
              </Link>
              <Link href="/timeline" className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                Timeline
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  )
}
