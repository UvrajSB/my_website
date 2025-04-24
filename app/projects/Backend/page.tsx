"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Tag, User, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundPattern } from "@/components/background-pattern"

const backendProjects = [
  {
    id: "adster-backend",
    title: "Adster – High-Performance Backend Systems for Ad Delivery",
    description: "Designed scalable, low-latency backend systems at Adster to support intelligent ad delivery and categorization using GenAI and Google Cloud.",
    date: "2024",
    client: "Adster",
    role: "Product Engineer",
    tags: ["Backend", "Go", "BigQuery", "MongoDB", "GCP", "GenAI"],
    website: "",
    github: "",
    coverImage: "/adster.png",
    content: [
      {
        type: "heading",
        content: "Overview",
      },
      {
        type: "paragraph",
        content:
          "At Adster, I worked on backend services powering real-time ad delivery pipelines that handled millions of requests with strict latency and throughput requirements. My role involved building, scaling, and optimizing these services using Go, Google Cloud Functions, BigQuery, and MongoDB.",
      },
      {
        type: "heading",
        content: "GenAI-Driven Ad Categorization",
      },
      {
        type: "paragraph",
        content:
          "One of my most impactful projects was building a content delivery platform where ad descriptions were processed using Gemini (GenAI) to extract categories. These were then matched with user interests to prioritize and personalize ad delivery in real time.",
      },
      {
        type: "heading",
        content: "Tech Stack Highlights",
      },
      {
        type: "table",
        headers: ["Tech", "Purpose"],
        rows: [
          ["Go", "Core backend development and performance-critical endpoints"],
          ["Google Cloud Functions", "Serverless compute for event-based triggers"],
          ["BigQuery", "Handling large-scale analytics and segmentation"],
          ["MongoDB", "User profiles, metadata, and content storage"],
          ["Gemini / GenAI", "Ad content parsing and categorization"],
        ],
      },
    ],
  },
]

export default function BackendProjectsPage() {
  return (
    <PageTransition>
      <div className="relative">
        <BackgroundPattern variant="grid" opacity={0.03} />
        <div className="container px-4 py-12 md:px-6 md:py-24 relative z-10">
          <AnimatedSection className="flex flex-col items-start gap-4">
            <Link href="/projects">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </AnimatedSection>

          <div className="mt-8 max-w-4xl mx-auto space-y-16">
            {backendProjects.map((project, index) => (
              <div key={project.id}>
                <AnimatedSection>
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
                  <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">{project.description}</p>
                </AnimatedSection>

                <AnimatedSection delay={0.1} className="mt-8">
                  <div className="w-full overflow-hidden rounded-lg">
                    <motion.img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-contain"
                      initial={{ scale: 1.05, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2} className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-gray-500 dark:text-gray-400">Date: {project.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      <span className="text-gray-500 dark:text-gray-400">Client: {project.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="h-5 w-5 text-primary" />
                      <span className="text-gray-500 dark:text-gray-400">Role: {project.role}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      {project.website && (
                        <Link href={project.website} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Visit Website
                          </Button>
                        </Link>
                      )}
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Github className="h-4 w-4" />
                            View Code
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </AnimatedSection>

                <div className="mt-12 space-y-8">
                  {project.content.map((section, index) => {
                    switch (section.type) {
                      case "heading":
                        return (
                          <AnimatedSection key={index} delay={0.1 * index} className="mt-8">
                            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{section.content}</h2>
                          </AnimatedSection>
                        )
                      case "paragraph":
                        return (
                          <AnimatedSection key={index} delay={0.1 * index} className="text-gray-500 dark:text-gray-400 whitespace-pre-line">
                            <p>{section.content}</p>
                          </AnimatedSection>
                        )
                      case "table":
                        return (
                          <AnimatedSection key={index} delay={0.1 * index}>
                            <div className="my-8 overflow-x-auto">
                              <table className="w-full border-collapse">
                                <thead>
                                  <tr className="border-b">
                                    {section.headers.map((header, i) => (
                                      <th key={i} className="px-4 py-2 text-left font-medium">
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {section.rows.map((row, i) => (
                                    <tr key={i} className="border-b">
                                      {row.map((cell, j) => (
                                        <td key={j} className="px-4 py-2 text-gray-500 dark:text-gray-400">
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </AnimatedSection>
                        )
                      default:
                        return null
                    }
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
