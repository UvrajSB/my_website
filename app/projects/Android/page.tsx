"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Tag, User, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundPattern } from "@/components/background-pattern"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from a CMS or database
  const project = {
    id: params.id,
    title: `Project ${params.id}`,
    description: "A comprehensive case study of this innovative project that solved real-world problems.",
    date: "April 2023",
    client: "Client Name",
    role: "Lead Developer & Product Strategist",
    tags: ["Web Development", "UX Design", "E-commerce", "React", "Node.js"],
    website: "https://example.com",
    github: "https://github.com/yourusername/project",
    coverImage: `/placeholder.svg?height=600&width=1200&text=Project+${params.id}+Cover`,
    content: [
      {
        type: "heading",
        content: "Project Overview",
      },
      {
        type: "paragraph",
        content:
          "This project was developed to address specific challenges in the industry. The client needed a solution that would streamline their operations while providing an exceptional user experience for their customers.",
      },
      {
        type: "image",
        url: `/placeholder.svg?height=400&width=800&text=Project+Image+1`,
        caption: "Early wireframes and design concepts for the project",
      },
      {
        type: "heading",
        content: "The Challenge",
      },
      {
        type: "paragraph",
        content:
          "The main challenges we faced included integrating with legacy systems, ensuring scalability for future growth, and creating an intuitive interface that would require minimal training for end users.",
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        caption: "Demo video showcasing the project functionality",
      },
      {
        type: "heading",
        content: "The Solution",
      },
      {
        type: "paragraph",
        content:
          "We developed a comprehensive solution using modern technologies and best practices. The architecture was designed to be modular and scalable, allowing for easy maintenance and future enhancements.",
      },
      {
        type: "image",
        url: `/placeholder.svg?height=400&width=800&text=Project+Image+2`,
        caption: "Final design and implementation of the main dashboard",
      },
      {
        type: "heading",
        content: "Technical Details",
      },
      {
        type: "table",
        headers: ["Technology", "Purpose", "Benefits"],
        rows: [
          ["React", "Frontend Framework", "Component-based architecture, reusable UI elements"],
          ["Node.js", "Backend Server", "Asynchronous processing, excellent performance"],
          ["PostgreSQL", "Database", "Relational data structure, ACID compliance"],
          ["AWS", "Cloud Infrastructure", "Scalability, reliability, global reach"],
        ],
      },
      {
        type: "heading",
        content: "Results & Impact",
      },
      {
        type: "paragraph",
        content:
          "The project resulted in a 40% increase in operational efficiency and a 25% reduction in customer support inquiries. User satisfaction scores improved by 35% within the first three months of deployment.",
      },
      {
        type: "image",
        url: `/placeholder.svg?height=400&width=800&text=Project+Image+3`,
        caption: "Analytics dashboard showing performance improvements after implementation",
      },
      {
        type: "heading",
        content: "Lessons Learned",
      },
      {
        type: "paragraph",
        content:
          "Throughout this project, we learned valuable lessons about user research, iterative development, and stakeholder communication. These insights have informed our approach to subsequent projects and continue to shape our methodology.",
      },
    ],
  }

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

          <div className="mt-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">{project.description}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="mt-8">
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <motion.img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
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
                      <AnimatedSection key={index} delay={0.05 * index} className="mt-8">
                        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{section.content}</h2>
                      </AnimatedSection>
                    )
                  case "paragraph":
                    return (
                      <AnimatedSection key={index} delay={0.05 * index} className="text-gray-500 dark:text-gray-400">
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
                  case "video":
                    return (
                      <AnimatedSection key={index} delay={0.05 * index}>
                        <figure className="my-8">
                          <div className="overflow-hidden rounded-lg aspect-video">
                            <iframe
                              src={section.url}
                              title="Video"
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
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
        </div>
      </div>
    </PageTransition>
  )
}
