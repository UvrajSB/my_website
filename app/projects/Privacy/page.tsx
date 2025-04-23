"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Tag, User, ExternalLink, Github } from "lucide-react"
import { color, motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundPattern } from "@/components/background-pattern"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from a CMS or database
  const project = {
    id: params.id,
    title: `Privacy Centric AI`,
    description: "Building systems to train ML models without compromising privacy of training datasets.",
    tags: ["Federated Learning", "Differential Privacy", "Homomorphic Encryption", "Recursive AI", "Edge AI"],
    github: "https://github.com/yourusername/project",
    coverImage: `/placeholder.svg?height=600&width=1200&text=Project+${params.id}+Cover`,
    content: [
      {
        type: "heading",
        content: "Overview",
      },
      {
        type: "paragraph",
        content:
          "I have been working on privacy-centric AI for the past 3 years in different capacities, most recently as CTO at FlintX and for a very long time as a researcher at the Data, Systems and HPC (DaSH) lab at BITS. My work in this area includes both technical and business exploration in depth. My research work in the area got published in a Core A conference, and my startup has received the support of the Hong Kong Science and Technology Park to work in this domain through a grant. I have worked on figuring out the needs of privacy-centric AI model training technologies in the market and have contributed to publications to strengthen privacy-centric research."
        },
      // {
      //   type: "image",
      //   url: `/placeholder.svg?height=400&width=800&text=Project+Image+1`,
      //   caption: "Early wireframes and design concepts for the project",
      // },
      {
        type: "heading",
        content: "FlintX",
      },
      {
        type: "paragraph",
        content:
          "Over the past 8 to 10 months at FlintX, I’ve been deeply involved in market research and user validation across a range of ideas, including the use of Federated Learning (FL) in virtual nurse support for cancer patients and its potential applications in the autonomous vehicle industry.",
      },
      {
        type: "paragraph",
        content:
          "While the technology showed promise, our exploration revealed that the market wasn’t yet favorable for offering Federated Learning as a standalone product. This led us to pivot and explore a new direction: recursive AI, or AI that builds AI.",
      },
      {
        type: "paragraph",
        content:
          "We envisioned a multi-agent AI framework that could be deployed within an organization’s infrastructure, capable of generating custom AI models based on local needs, while ensuring that sensitive data remains securely on-premise.",
      },
      {
        type: "separator",
        className: "my-6 bg-gray-100", // optional custom styles
      },
      
      {
        type: "video",
        url: "https://www.youtube.com/embed/ndwwIAu6OIM",
        caption: "Get to know more about our privacy-preserving, on-premise AI agent framework.",
      },
      {
        type: "hr",
      },
      {
        type: "custom",
        content: "──────────────",
        className: "text-center text-gray-400 text-sm my-6",
      },
      
      // {
      //   type: "image",
      //   url: "/flintx.png",
      //   caption: "On-premise, multi-agent frameworks deployed across different organizations for their ML model building needs, collaborating at the knowledge level through federated learning.",
      // },

        {
          type: "heading",
          content: "UnifyFL: Trust-Based Cross-Silo Federated Learning",
        },
        {
          type: "paragraph",
          content:
            "UnifyFL is a decentralized framework designed to enable collaboration between organizations using Federated Learning (FL), without depending on a centralized aggregator.",
        },
        {
          type: "paragraph",
          content:
            "In typical FL setups, machine learning models are trained on private data across different devices or organizations and then sent to a central node (aggregator) for combination. This keeps the data private, but often prevents collaboration between organizations due to trust issues or resource limitations.",
        },
        {
          type: "paragraph",
          content: "UnifyFL addresses this problem by offering a new approach that:",
        },
        {
          type: "paragraph",
          content: "• Eliminates the need for a trusted third-party aggregator.",
        },
        {
          type: "paragraph",
          content: "• Uses decentralized orchestration and distributed storage to ensure secure collaboration.",
        },
        {
          type: "paragraph",
          content: "• Supports both synchronous and asynchronous training modes to handle slow or delayed participants (stragglers).",
        },
        {
          type: "paragraph",
          content:
            "With this design, UnifyFL empowers organizations to collaboratively build models while maintaining control over their data and optimizing resource usage.",
        },
        {
          type: "paragraph",
          content:
            "Our evaluations show that UnifyFL delivers performance comparable to centralized FL systems, but with greater trust and flexibility.",
        },
        {
          type: "heading",
          content: "Related Publications",
        },
        {
          type: "paragraph",
          content:
            "• EkatraFL: Enabling Decentralized Cross-Silo Federated Learning | IEEE International Conference on High Performance Computing, Data, and Analytics, 2023",
        }
      
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

            {/* <AnimatedSection delay={0.1} className="mt-8">
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
            </AnimatedSection> */}

            <AnimatedSection delay={0.2} className="mt-8 space-y-8">
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
