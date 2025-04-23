"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Tag, User, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundPattern } from "@/components/background-pattern"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = {
    id: params.id,
    title: "TunnelSense – Noncontact Motion Sensing with Tunnel Diode Oscillators",
    description:
      "A low-power, noncontact motion sensing system leveraging tunnel diode oscillators to detect movement through electromagnetic field variations. Developed as part of my Bachelor’s thesis at NUS under Prof. Ambuj Varshney.",
    date: "2023",
    client: "National University of Singapore – WEISER Group",
    role: "Visiting Research Intern",
    tags: ["Embedded Systems", "Sensing", "Low-Power Design", "IoT", "Thesis"],
    content: [
      {
        type: "heading",
        content: "Project Overview",
      },
      {
        type: "paragraph",
        content:
          "TunnelSense explores a novel, low-power approach to motion sensing using tunnel diode oscillators. Unlike traditional contact-based sensors, this system enables motion tracking without any physical contact, making it ideal for applications in healthcare, smart environments, and industry.",
      },
      {
        type: "heading",
        content: "The Problem",
      },
      {
        type: "paragraph",
        content:
          "Most motion-sensing solutions require either direct attachment to objects or rely on high-power, complex systems. These constraints make it hard to deploy sensing in energy-constrained or contact-sensitive environments.",
      },
      {
        type: "heading",
        content: "The Solution",
      },
      {
        type: "paragraph",
        content:
          "TunnelSense leverages tunnel diode oscillators, which are extremely sensitive to electromagnetic changes. When a nearby object moves, the oscillator's frequency shifts, allowing noncontact detection. These tags operate on less than 100 µW and require only 70 mV to function, enabling long-term use on harvested energy.",
      },
      {
        type: "image",
        url: `/tunnel.png?height=400&width=800&text=TunnelSense+Prototype`,
        caption: "Prototype setup of TunnelSense tag for breathing detection",
      },
      {
        type: "heading",
        content: "Contributions",
      },
      {
        type: "paragraph",
        content:
          "- Designed and developed the TDO-based noncontact sensing system\n- Achieved real-time breathing detection up to 30 cm\n- Enabled ultra-low power operation for prolonged field use",
      },
      {
        type: "heading",
        content: "Impact",
      },
      {
        type: "paragraph",
        content:
          "TunnelSense demonstrates the feasibility of deploying noncontact sensors in real-world applications where power and contact are constraints. The work contributes toward future ubiquitous sensing deployments in healthcare and industrial automation.",
      },
      {
        type: "heading",
        content: "Publications",
      },
      {
        type: "paragraph",
        content:
        "- Enabling Non-contact, Low-Power Sensing using Tunnel Diodes | International Conference on Information Processing in Sensor Networks (IPSN), 2024"
      },
      {
        type: "paragraph",
        content:
        "- TunnelSense: Low-power, Non-Contact Sensing using Tunnel Diodes | IEEE International Conference on RFID, 2024"
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
