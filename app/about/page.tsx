import Link from "next/link"
import { ArrowLeft, Award, BookOpen, Briefcase, GraduationCap, Heart, Mail, MapPin, Phone } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-start gap-4">
        <Link href="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
      </div>

      <div className="grid gap-12 mt-12 lg:grid-cols-3">
        <div className="col-span-1">
          <div className="sticky top-24 space-y-6 ">
            <div className="aspect-[3/4.5] max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] mx-auto overflow-hidden rounded-xl ">
              <img
                src="/mypic2.png?&text=Profile+Photo"
                alt="Profile Photo"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Yuvraj Singh Bhadauria</h2>
              <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Bengaluru, Karnataka, India
              </p>
              <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 7453820041
              </p>
              <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                yuvraj.s.bhadauria@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 space-y-12">
          <section className="space-y-4">
            <h2 className="text-3xl font-bold">My Story</h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400">
              <p>
              Hello, I’m Yuvraj. I’m a generalist with experience across the stack—from hardware to software, and from edge to cloud. I’ve worked on research projects that led to top-tier publications at one of the best labs in the world, and I’ve also built software and services that handle millions of requests in production at an early-stage startup.
              </p>
              <p>
              I’m passionate about bringing state-of-the-art technology into real-world products in meaningful ways. I’ve worked across a broad range of technologies, including privacy-centric ML, IoT sensing systems, performance oriented service development, model optimizations for edge, and agentic AI. Currently, I’m exploring different combinations of these technologies for some exciting and impactful applications that solves real world problems.
              </p>
              <p>
              I believe in focusing only on long-term, ambitious goals, and my journey is shaped by that mindset. I’m always looking to connect with passionate people. If you're working on or interested in similar tech and ideas, feel free to reach out.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Education</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">B.E. Computer Science</h3>
                  <p className="text-gray-500 dark:text-gray-300">Birla Institute of Technology and Science, Pilani, Goa Campus [2020-2024]</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Early member of Data Systems and HPC lab, Coordinator of Software Development Club, Startup Manager for Consulting club [ShARE], TAships for App Development and OOP.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Leadership Programme of Excellence</h3>
                  <p className="text-gray-500 dark:text-gray-300">ShARE [2021-2023]</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                  ShARE is a global program blending education and consulting to develop students into impactful, socially conscious leaders. It equips them with leadership, corporate, and cross-cultural collaboration skills to drive sustainable change
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Professional Experience</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">FlintX - Co-Founder & CTO</h3>
                  <p className="text-gray-500 dark:text-gray-400">[Oct 2024-Present]</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Working on idea validations and market research for viability of SOTA tech for the privacy focused markets like healthcare, finance and defence.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Adster - Product Engineer</h3>
                  <p className="text-gray-500 dark:text-gray-400">[March 2024 - Sept 2024]</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                  As a Product Engineer, I participated in feature scoping and implementation design. I dealt with low-latency systems with high throughput, processing millions of requests on daily basis. From writing the code to deploying it on our clusters, I was responsible for taking my pieces from conception to production and optimizing them. My day-to-day work used to revolve around BigQuery, GCP, Kubernetes, Go, and MongoDB.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">National University of Singapore - Visiting Research Intern</h3>
                  <p className="text-gray-500 dark:text-gray-400">[May 2023 - Jan 2024]</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                  I played a pivotal role in developing battery-free IoT sensing and communication systems using tunnel diodes, resulting in a poster presentation at IPSN 2024 and a published paper in IEEE RFID 2024. This research emphasizes efficient and sustainable solutions for IoT, particularly in low-power consumption, marking a significant contribution to the field of ubiquitous sensing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Business Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Strategic planning, market analysis, growth hacking
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Leadership</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Team building, mentoring, organizational management
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Product Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  User research, prototyping, agile methodologies
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Technical Skills</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Go, Python, Kotlin, GCP, BQ, Mongo, Langgraph, LLMs, Android, Blockchain
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Personal Interests</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                  When I need to disconnect, I turn to the road, sunrise views, a bit of dancing, and throwing punches at the bag.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Grants & Publications</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">[Grant] HKSTP Ideation Grant</h3>
                  <p className="text-gray-500 dark:text-gray-400">Hong Kong Science Tech Park, 2025</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">[Paper] UnifyFL: Enabling Decentralized Cross-Silo Federated Learning</h3>
                  <p className="text-gray-500 dark:text-gray-400">26th ACM/IFIP International Middleware Conference (MIDDLEWARE 2025)</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">[Poster] Enabling Non-contact, Low-Power Sensing using Tunnel Diodes</h3>
                  <p className="text-gray-500 dark:text-gray-400">International Conference on Information Processing in Sensor Networks (IPSN), 2024</p>
                </div>
              </div>              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">[Paper] TunnelSense: Low-power, Non-Contact Sensing using Tunnel Diodes</h3>
                  <p className="text-gray-500 dark:text-gray-400">IEEE International Conference on RFID, 2024</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">[Poster] EkatraFL: Enabling Decentralized Cross-Silo Federated Learning</h3>
                  <p className="text-gray-500 dark:text-gray-400">IEEE International Conference on High Performance Computing, Data, and Analytics, 2023</p>
                </div>
              </div>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
