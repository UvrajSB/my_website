"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundPattern } from "@/components/background-pattern"
import { AnimatedCard } from "@/components/animated-card"

export default function ProjectsPage() {
  // Sample project data - in a real app, this would come from a database or CMS
  const projects = [
    {
      id: 1,
      title: "Privacy Centric AI",
      description:
        "Developing privacy-centric AI systems with Federated learning & Privacy-Enhancement Techniques for the past 3 years.",
      image: "/p2.jpg?height=300&width=500&text=LLM",
      tags: ["Pytorch", "Distributed ML", "Edge", "PETs"],
      link: "/projects/Privacy",
    },
    {
      id: 2,
      title: "PrivAgent",
      description:
        "Agents utilising Privacy Enhancement Techniques tools for secure interaction with MCP servers.",
      image: "/privagent.png",
      tags: ["Ollama", "Langgraph", "Edge"],
      link: "/projects/privagent",
    },
    {
      id: 3,
      title: "Interface",
      description:
        "A secure interface for interacting with cloud-based agents that leverages local on-device models to ensure user data privacy.",
      image: "/interfacebw.png",
      tags: ["Privacy", "Edge AI", "On-Device", "SLM", "Agent Framework"],
      link: "/projects/interface",
    },
    {
      id: 4,
      title: "RF Sensing",
      description:
        "Developed batterless IoT sensing system using tunnel diodes for unintrusive respiratory rate monitoring.",
      image: "/p1.jpg?height=300&width=500&text=Project+Three",
      tags: ["Healthcare", "IoT", "Ubiquitous Computing"],
      link: "/projects/RF",
    },
    {
      id: 5,
      title: "Blockchain",
      description:
      "Developed PoCs for blockchain-based product warranty systems and consent management solutions.",
      image: "/p5.jpg?height=300&width=500&text=Project+Four",
      tags: ["Solidity", "Smart Contracts", "Web3"],
      link: "/projects/Blockchain",
    },
    {
      id: 6,
      title: "Android",
      description:
      "Built several apps using native Android and shared my knowledge by teaching app development to over 500 people.",
      image: "/p4.jpg?height=300&width=500&text=Project+Five",
      tags: ["Android", "Kotlin", "Teaching"],
      link: "/projects/Android",
    },
    {
      id: 7,
      title: "Backend",
      description:
      "Worked on building a content delivery platform using a microservices architecture, serving millions of requests a day.",
      image: "/p6.png?height=300&width=500&text=Project+Six",
      tags: ["Go", "GCP", "MongoDB"],
      link: "/projects/Backend",
    },
  ]
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
            <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
              A collection of entrepreneurial ventures, products, and initiatives I've created or been involved with
              throughout my journey.
            </p>
          </AnimatedSection>
  
          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <AnimatedCard
                key={project.id}
                delay={0.05 * index}
                className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <Link href={project.link} className="mt-auto">
                    <Button className="w-full mt-6 relative overflow-hidden group">
                      <span className="relative z-10">View Project Details</span>
                      <motion.div
                        className="absolute inset-0 bg-primary/20"
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
        </div>
      </div>
    </PageTransition>
  )
  
}