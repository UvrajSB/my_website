"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Tag, User, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundPattern } from "@/components/background-pattern"

const projects = [
{
    id: "privagent",
    title: "PrivAgents",
    description: "Agents utilising Privacy Enhancement Techniques tools for secure interaction with MCP servers",
    date: "April 2025",
    client: "Personal Project",
    role: "Creator & Developer",
    tags: ["LLM", "Privacy", "Homomorphic Encryption", "Secure Computation"],
    website: "https://github.com/UvrajSB/PrivAgent",
    github: "https://github.com/UvrajSB/PrivAgent",
    content: [
        { type: "heading", content: "Overview" },
        {
            type: "paragraph",
            content: "Take Homomorphic Encryption for example. Agents can offload compute to MCP servers that are equipped to work with encrypted data. This not only allows us to build MCP servers for private data in general but also paves the way for on-device AI. Lightweight agentic frameworks can rely on MCP servers for computationally expensive tasks by sharing data in encrypted form, leading to highly functional, privacy-preserving on-device AI systems."
        },
        { type: "heading", content: "Why PrivAgent" },
        {
            type: "table",
            headers: ["Feature", "Description"],
            rows: [
                ["Agent Flexibility", "On-device or cloud-based agents to suit your compute and trust needs"],
                ["Data Privacy", "Homomorphic encryption ensures data remains private during processing"],
                ["Modular Backend", "Modular MCP server performs encrypted similarity calculations on the backend"],
                ["Secure Pipeline", "End-to-end encrypted pipeline for secure data interaction"]
            ]
        },
        { type: "heading", content: "Supported Agents" },
        {
            type: "table",
            headers: ["Agent", "Description"],
            rows: [
                ["Ollama Agent", "For on-device reasoning using local models"],
                ["OpenAI Agent", "For cloud-based intelligence via API"]
            ]
        },
        { type: "heading", content: "Architecture Overview" },
        { type: "image", url: "/privagent.png" },
        {
            type: "paragraph",
            content: "The architecture involves a user device handling agent and encryption tasks, communicating over a secure channel with an MCP server for encrypted similarity calculations, and returning encrypted results to the user device for decryption."
        },
        { type: "heading", content: "Movie Preference Matching" },
        {
          type: "paragraph",
          content: "The Movie Preference Matching use case is a practical demonstration of a privacy-preserving recommendation system powered by homomorphic encryption. It allows users to receive personalized movie recommendations without exposing their preferences in plaintext, ensuring complete data confidentiality throughout the process. The workflow involves encrypting user preferences on their device, performing secure computations on the MCP server, and decrypting results locally to deliver tailored recommendations."
      },
      {
          type: "table",
          headers: ["Step", "Description"],
          rows: [
              ["User Input", "The user provides a movie interest vector, rating genres like Action, Romance, and Sci-Fi (e.g., [8, 2, 9] for high preference in Action and Sci-Fi, low in Romance)."],
              ["Encryption", "The agent (Ollama or OpenAI) uses the TenSEAL library with the BFV homomorphic encryption scheme to encrypt the interest vector into an unreadable tensor."],
              ["Server Processing", "The MCP server, holding plaintext movie profiles (e.g., Inception: [9, 1, 8]), computes encrypted similarity scores using dot products between the encrypted user vector and each movie profile, without ever decrypting the user data."],
              ["Result Storage", "Encrypted similarity scores for all movies are saved to a file (e.g., data/interest_results) and sent back to the user device."],
              ["Decryption", "The agent decrypts the similarity scores locally using the original encryption context and keys, revealing how closely each movie matches the user's preferences."],
              ["Recommendation", "The agent sorts the decrypted scores and presents the top movie recommendations, ensuring the entire process is secure and private."]
          ]
      },
      {
          type: "paragraph",
          content: "This use case highlights the power of homomorphic encryption in enabling secure, personalized recommendations. By keeping user data encrypted during server-side computations, PrivAgents ensures zero trust is required from the server, making it ideal for sensitive applications like movie recommendations, where user preferences could reveal personal tastes or behaviors."
      },
     
        { type: "heading", content: "Benefits" },
        {
            type: "table",
            headers: ["Benefit", "Description"],
            rows: [
                ["Zero Trust", "Server never sees user data"],
                ["Agent Agnostic", "Works with both on-device and cloud-based agents"],
                ["Extendable", "Can support more complex user profiles or additional domains (like music, shopping, healthcare)"],
                ["Educational", "Demonstrates how homomorphic encryption works in a practical context"]
            ]
        },
        { 
          type: "hr"},
    ]
},
]

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="relative">
        <BackgroundPattern variant="grid" opacity={0.03} />
        <div className="container px-4 py-12 md:px-6 md:py-24 relative z-10">
          <AnimatedSection className="flex flex-col items-start gap-4">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
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
                              <div className="overflow-hidden rounded-lg">
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
