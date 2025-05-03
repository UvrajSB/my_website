"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundPattern } from "@/components/background-pattern"

export default function TimelinePage() {
  // Sample timeline data - in a real app, this would come from a database or CMS
  const timelineEvents = [
    {
      id: 1,
      year: "2025",
      title: "Paper Accepted: UnifyFL: Enabling Decentralized Cross-Silo Federated Learning",
      description:
        "ACM/IFIP International Middleware Conference (MIDDLEWARE 2025)",
      image: "/placeholder.svg?height=20&width=20&text=2023",
    },
    {
      id: 1,
      year: "2025",
      title: "Received first grant: HKSTP",
      description:
        "Ideation grant from Hong Kong Science Tech Park for supporting out venture FlintX in developing deep tech solutions",
      image: "/placeholder.svg?height=20&width=20&text=2023",
    },
    {
      id: 1,
      year: "2024",
      title: "Founded my first startup: FlintX",
      description:
        "Successfully launched my first venture, focused on privacy centric AI technology solutions.",
      image: "/placeholder.svg?height=20&width=20&text=2023",
    },
    {
      id: 1,
      year: "2024",
      title: "Started Working as Product Engineer: Adster",
      description:
        "Designing, developing, and deploying features for high-throughput, low-latency systems to power real-time performance at scale.",
      image: "/placeholder.svg?height=20&width=20&text=2023",
    },
    {
      id: 2,
      year: "2024",
      title: "Early Graduation: BITS, CS",
      description:
        "Graduated a semester earlier to dive into the real world sooner and start building what matters.",
      image: "/placeholder.svg?height=20&width=20&text=2022",
    },
    {
      id: 3,
      year: "2024",
      title: "Paper Accepted: TunnelSense: Low-power, Non-Contact Sensing using Tunnel Diodes",
      description:
        "IEEE International Conference on RFID, 2024",
      image: "/placeholder.svg?height=20&width=20&text=2021",
    },
    {
      id: 3,
      year: "2024",
      title: "Poster Accepted: Enabling Non-contact, Low-Power Sensing using Tunnel Diodes",
      description:
        "International Conference on Information Processing in Sensor Networks (IPSN), 2024",
      image: "/placeholder.svg?height=20&width=20&text=2021",
    },
    {
      id: 3,
      year: "2023",
      title: "Working Abroad: National University Singapore",
      description:
        "Spent 7 months working at the NUS with amazing people, exciting projects, and research that led to top-teir publications.",
      image: "/placeholder.svg?height=20&width=20&text=2021",
    },
    {
      id: 3,
      year: "2023",
      title: "Poster Accepted: EkatraFL, Enabling Decentralized Cross-Silo Federated Learning",
      description:
        "IEEE International Conference on High Performance Computing, Data, and Analytics, 2023",
      image: "/placeholder.svg?height=20&width=20&text=2021",
    },
    {
      id: 4,
      year: "2022",
      title: "First International Research Collab: University of Minnesota",
      description:
        "Worked under the guidance of Dr. Ali Anwar from University of Minnesota for exploring use of HE and DP in Federated learning ",
      image: "/placeholder.svg?height=100&width=100&text=2020",
    },
    {
      id: 5,
      year: "2022",
      title: "Starting of Research Interest: DaSH lab",
      description: "Started working on cluster of resource constrained devices for federated learning",
      image: "/placeholder.svg?height=100&width=100&text=2019",
    },
    {
      id: 6,
      year: "2022",
      title: "Mentorship: Android Dev",
      description:
        "Taught 5 courses on native Android development to students and professionals, led the app dev vertical of a 100+ member developer club.",
      image: "/placeholder.svg?height=100&width=100&text=2018",
    },
    {
      id: 6,
      year: "2021 - 2022",
      title: "Completed my first internship: Abtris",
      description:
        "Developed a mindset development app from scratch using then latest design paradigm (Neumorphic design)",
      image: "/placeholder.svg?height=100&width=100&text=2018",
    },

    {
      id: 7,
      year: "2021",
      title: "Published first MVP on playstore: Forget'it",
      description:
        "Worked on a startup idea for a reminder-sharing app for friends and family.",
      image: "/placeholder.svg?height=100&width=100&text=2017",
    },
    {
      id: 8,
      year: "2020",
      title: "Created my first community: Coderzz",
      description: "Built a 30-member community of pre-college students to create Python automation projects.",
      image: "/placeholder.svg?height=100&width=100&text=2016",
    },
  ]

  return (
    <PageTransition>
      <div className="relative">
        <BackgroundPattern variant="dots" />
        <div className="container px-4 py-12 md:px-6 md:py-24 relative z-10">
          <AnimatedSection className="flex flex-col items-start gap-4">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold tracking-tight">My Journey</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
              A chronological timeline of key milestones, achievements, and pivotal moments in my entrepreneurial and
              personal journey.
            </p>
          </AnimatedSection>
          <div className="relative mt-12 border-l border-gray-200 dark:border-gray-700 ml-4 md:ml-6">
            {timelineEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={0.05 * index} direction="right" className="mb-10 ml-6">
                <motion.div
                  className="absolute -left-6 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 ring-1 ring-white dark:ring-gray-900 overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={event.image || "/placeholder.svg"} alt={event.year} className="rounded-full" />
                </motion.div>
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    className="text-sm font-medium text-primary"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {event.year}
                  </motion.span>
                  <motion.h3
                    className="text-xl font-semibold"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {event.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-500 dark:text-gray-400 max-w-2xl"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index + 0.4 }}
                    viewport={{ once: true }}
                  >
                    {event.description}
                  </motion.p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
