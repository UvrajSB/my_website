"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Tag, User, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundPattern } from "@/components/background-pattern"

const androidProjects = [
  {
    id: "abtris-app",
    title: "Unstoppable – Native Android App for Abtris",
    description: "Designed and built a production-ready Android app from scratch for Abtris, featuring a neumorphic UI and modern native architecture.",
    date: "2023",
    client: "Abtris (Startup)",
    role: "Android Developer Intern",
    tags: ["Android", "Kotlin", "UI/UX", "Neumorphism", "Internship"],
    website: "https://play.google.com/store/apps/details?id=so.dev.unstoppable",
    github: "",
    content: [
      {
        type: "heading",
        content: "Overview",
      },
      {
        type: "image",
        url: "/abtris.png",
        caption: "",
      },
      {
        type: "paragraph",
        content:
          "As part of my internship at Abtris, I developed the Unstoppable app from the ground up using modern native Android tools. A key challenge was implementing a Neumorphic UI — a design trend with very limited library support at the time — which required several custom UI workarounds to maintain performance and style integrity.",
      },
      {
        type: "heading",
        content: "Highlights",
      },
      {
        type: "table",
        headers: ["Feature", "Description"],
        rows: [
          ["Neumorphic UI", "Created custom widgets to implement soft shadows and raised effects"],
          ["Kotlin + Jetpack", "Used ViewModel, LiveData, and Navigation components"],
          ["Production Release", "Live on Google Play Store and used by real users"],
        ],
      },
    ],
  },
  {
    id: "android-teaching",
    title: "Android Dev Educator – 500+ Learners Taught",
    description: "Led sessions and tutorials on Android development for students and professionals across India.",
    date: "2020 – 2024",
    client: "Developer Communities",
    role: "Instructor & Mentor",
    tags: ["Android", "Teaching", "Workshops", "YouTube", "Community"],
    website: "https://www.youtube.com/live/RIQN356dJ3k?si=Mum-AvlLCGcp_Qto",
    github: "",
    content: [
      {
        type: "heading",
        content: "Overview",
      },
      {
        type: "paragraph",
        content:
          "I've delivered hands-on Android development sessions to over 500 students and professionals through workshops, livestreams, and structured tutorials. My focus has always been on real-world application, clean architecture, and demystifying modern Android concepts.",
      },
      {
        type: "heading",
        content: "Notable Session",
      },
      {
        type: "paragraph",
        content:
          "• Topic: Getting Started with Android UI\n• Duration: 2.5 hours\n• Format: Live Demo + Q&A\n• Audience: University students + working developers\n• Link: See full session on [YouTube](https://www.youtube.com/live/RIQN356dJ3k?si=Mum-AvlLCGcp_Qto)",
      },
    ],
  },
  {
    id: "ankidroid",
    title: "Open Source Contributor – AnkiDroid",
    description: "Contributed to the widely-used AnkiDroid flashcards app by helping improve core functionality and UI consistency.",
    date: "2022",
    client: "AnkiDroid Open Source",
    role: "Contributor",
    tags: ["Android", "Open Source", "Contributions", "Anki", "Java"],
    website: "https://play.google.com/store/apps/details?id=com.ichi2.anki",
    github: "",
    coverImage: "/images/ankidroid-cover.png",
    content: [
      {
        type: "heading",
        content: "Overview",
      },
      {
        type: "image",
        url: "/anki.png",
      },
      {
        type: "paragraph",
        content:
          "AnkiDroid is a popular open-source Android app for spaced-repetition learning. I contributed to improving layout bugs and UI edge cases in the review screen. These fixes helped improve usability across a variety of Android devices.",
      },
    ],
  },
  {
    id: "jewellery-app",
    title: "JewelleryApp – Android Shopping App",
    description: "A sleek, Firebase-backed shopping app for showcasing and purchasing items — built as a personal side project.",
    date: "2022",
    client: "Personal Project",
    role: "Designer & Developer",
    tags: ["Android", "Firebase", "MVVM", "Personal Project"],
    website: "https://github.com/UvrajSB/JewelleryApp",
    github: "https://github.com/UvrajSB/JewelleryApp",
    content: [
      {
        type: "heading",
        content: "Overview",
      },
      {
        type: "image",
        url: "/shoppingapp.png",
      },
      {
        type: "paragraph",
        content:
          "This shopping app demonstrates end-to-end Android development — from user login to product browsing and basic cart operations. The app uses Firebase for authentication and backend services and focuses on creating a clean, user-friendly shopping experience.",
      },
      {
        type: "heading",
        content: "Tech Highlights",
      },
      {
        type: "table",
        headers: ["Feature", "Usage"],
        rows: [
          ["Firebase Auth + Firestore", "User login and product data storage"],
          ["Custom UI", "Designed item cards, navigation, and clean product views"],
          ["Jetpack Navigation", "Screen routing with back stack management"],
        ],
      },
    ],
  },
]

export default function AndroidProjectsPage() {
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
            {androidProjects.map((project, index) => (
              <div key={project.id}>
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
