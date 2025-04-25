"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Tag, User, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundPattern } from "@/components/background-pattern"

const projects = [{
  id: "interface",
  title: "Interface",
  description: "A privacy-preserving tool for interacting with cloud-hosted Large Language Models, using on-device Small Language Models and data anonymization",
  date: "April 2025",
  client: "Personal Project",
  role: "Creator & Developer",
  tags: ["LLM", "Privacy", "Data Anonymization", "On-Device AI"],
  website: "https://github.com/UvrajSB/Interface",
  github: "https://github.com/UvrajSB/Interface",
  content: [
      { type: "heading", content: "Overview" },
      { type: "image", url: "/interface.png", caption: "Interface - Privacy-preserving agent interaction tool" },
      {
          type: "paragraph",
          content: "Interface is a privacy-preserving tool designed for secure interaction with cloud-hosted Large Language Models (LLMs). It leverages an on-device Small Language Model (SLM) to process queries locally, routing complex queries to cloud LLMs only when necessary. Sensitive data is anonymized using synthetic data replacements before transmission, and original information is restored upon response, ensuring user privacy throughout."
      },
      { type: "heading", content: "Key Features" },
      {
          type: "table",
          headers: ["Feature", "Description"],
          rows: [
              ["On-Device Processing", "Provides a local SLM for handling queries without external data exposure."],
              ["Intelligent Query Routing", "Automatically forwards complex queries to cloud LLMs only when necessary."],
              ["Privacy Protection", "Anonymizes sensitive data before transmission and restores it upon response."],
              ["Seamless Integration", "Ensures a smooth user experience without compromising security."]
          ]
      },
      { type: "heading", content: "Why Use Interface?" },
      {
          type: "table",
          headers: ["Benefit", "Description"],
          rows: [
              ["Privacy Protection", "Protects user privacy while leveraging powerful cloud-based AI models."],
              ["Resource Efficiency", "Reduces reliance on cloud resources, minimizing costs and latency."],
              ["Data Security", "Ensures sensitive data never leaves the local environment in an identifiable form."]
          ]
      },
      { type: "heading", content: "Getting Started" },
      {
          type: "paragraph",
          content: "To set up Interface, follow these steps to install dependencies, configure API keys, and run the project."
      },
      {
          type: "table",
          headers: ["Step", "Description"],
          rows: [
              ["Install Requirements", "Run `pip install -r requirements.txt` to install necessary dependencies."],
              ["Get Gemini API Key", "Obtain a free API key from Gemini and set it as an environment variable: `export GEMINI_API_KEY=your_api_key_here`."],
              ["Install deepseek-r1:1.5b", "Run `ollama pull deepseek-r1:1.5b` to install the on-device SLM."],
              ["Install en_core_web_lg", "Run `python -m spacy download en_core_web_lg` to install a pretrained English language model for semantic understanding and text classification."],
              ["Run the Project", "Start the project with `python main.py` and begin chatting."]
          ]
      },
      { type: "hr" }, // Horizontal separation line
      { type: "heading", content: "Feature Demo: Secure LLM (Anonymization)" },
      {
          type: "paragraph",
          content: "Interface uses Microsoft's Presidio for data anonymization to protect Personally Identifiable Information (PII) in prompts before they are sent to cloud LLMs. This ensures sensitive information remains private while still allowing powerful cloud models to process the query."
      },
      {
          type: "image",
          url: "/interface_ss.png",
      },
      {
        type: "image",
        url: "/interface_ss3.png",
    },
    {
      type: "image",
      url: "/interface_ss2.png",
  },
  ]
}]
export default function ProjectsPage() {
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
            {projects.map((project, pIndex) => (
              <div key={project.id}>
                <AnimatedSection delay={0.05 * pIndex}>
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
                  <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">{project.description}</p>
                </AnimatedSection>
                <AnimatedSection delay={0.2 * pIndex} className="mt-6 grid gap-6 md:grid-cols-2">
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
                          <AnimatedSection key={index} delay={0.05 * index}>
                            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{section.content}</h2>
                          </AnimatedSection>
                        )
                      case "paragraph":
                        return (
                          <AnimatedSection key={index} delay={0.05 * index} className="text-gray-500 dark:text-gray-400 whitespace-pre-line">
                            <p>{section.content}</p>
                          </AnimatedSection>
                        )
                      case "image":
                        return (
                          <AnimatedSection key={index} delay={0.05 * index}>
                            <figure className="my-8">
                              <div className={`overflow-hidden rounded-lg ${section.url === '/interface.png' ? 'max-w-md mx-auto' : ''}`}>
                                <motion.img
                                  src={section.url}
                                  alt={section.caption || "Project image"}
                                  className="w-full"
                                  whileHover={{ scale: 1.03 }}
                                  transition={{ duration: 0.3 }}
                                />
                              </div>
                              {section.caption && (
                                <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                                  {section.caption}
                                </figcaption>
                              )}
                            </figure>
                          </AnimatedSection>
                        )
                      case "table":
                        return (
                          <AnimatedSection key={index} delay={0.05 * index}>
                            <div className="my-8 overflow-x-auto">
                              <table className="w-full border-collapse text-sm">
                                <thead>
                                  <tr className="border-b">
                                    {section.headers?.map((header, i) => (
                                      <th key={i} className="px-4 py-2 text-left font-medium">
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {section.rows?.map((row, i) => (
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
                      case "hr":
                        return (
                          <AnimatedSection key={index} delay={0.05 * index}>
                            <hr className="my-8 border-t border-gray-200 dark:border-gray-800" />
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