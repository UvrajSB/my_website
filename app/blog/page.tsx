"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundGradient } from "@/components/background-gradient"
import { BackgroundShapes } from "@/components/background-shapes"
import { AnimatedCard } from "@/components/animated-card"

export default function BlogPage() {
  // Sample blog post data - in a real app, this would come from a database or CMS
  const posts = [
    {
      id: 1,
      title: "Protecting Privacy in Menstrual Health Apps: What, Why and How?",
      excerpt:
        "Explores the privacy concerns associated with menstrual health apps and discusses how federated learning can offer solutions.",
      date: "December 7, 2024",
      readTime: "4 min read",
      image: "/menstrual.png",
      link: "https://medium.com/@yuvraj.s.bhadauria/protecting-privacy-in-menstrual-health-apps-what-why-and-how-b8be5e91cb27",
    },
    {
      id: 2,
      title: "Internet In Privacy Out? Connected Cars Could Become a Privacy Nightmare",
      excerpt:
        "Analyzes the privacy implications of connected vehicles and the potential misuse of personal data collected by car manufacturers.",
      date: "December 6, 2024",
      readTime: "2 min read",
      image: "/cars.png",
      link: "https://medium.com/@yuvraj.s.bhadauria/internet-in-privacy-out-connected-cars-could-become-a-privacy-nightmare-e52f85ca7977",
    },
    {
      id: 3,
      title: "An Introduction to Non-IID Data and the Challenges of Data Heterogeneity",
      excerpt:
        "Discusses the concept of Non-IID data, its challenges in machine learning, and how data heterogeneity affects model training.",
      date: "November 5, 2024",
      readTime: "5 min read",
      image: "/fl.png",
      link: "https://medium.com/@yuvraj.s.bhadauria/an-introduction-to-non-iid-data-and-the-challenges-of-data-heterogeneity-035baaaa5939",
    },
    {
      id: 4,
      title: "Federated Learning Adoption Explained: A discussion with Salman Toor at FL-vCafe",
      excerpt:
        "Presents insights from a discussion with Dr. Salman Toor on the adoption of federated learning and its impact on data privacy.",
      date: "October 25, 2024",
      readTime: "4 min read",
      image: "/salman.png",
      link: "https://medium.com/@yuvraj.s.bhadauria/federated-learning-adoption-explained-a-discussion-with-salman-toor-at-fl-vcafe-4c5d9f3e8f2e",
    },
    {
      id: 5,
      title: "Data Silos: The Hidden Barriers to AI Innovation",
      excerpt:
        "Examines how data silos hinder AI development and the importance of data accessibility for innovation.",
      date: "October 14, 2024",
      readTime: "4 min read",
      image: "/datasilos.png",
      link: "https://medium.com/@yuvraj.s.bhadauria/data-silos-the-hidden-barriers-to-ai-innovation-5d08c97797f1",
    },
  ];
  
  

  return (
    <PageTransition>
      <div className="relative">
        <BackgroundGradient variant="secondary" />
        <BackgroundShapes variant="circles" count={6} />
        <div className="container px-4 py-12 md:px-6 md:py-24 relative z-10">
          <AnimatedSection className="flex flex-col items-start gap-4">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold tracking-tight">My Blog</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
              Thoughts, insights, and lessons from my entrepreneurial journey. I write about business, innovation,
              personal growth, and more.
            </p>
          </AnimatedSection>
  
          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-2">
  {posts.map((post, index) => (
    <div className="w-full max-w-[480px] mx-auto" key={post.id}>
      <AnimatedCard
        delay={0.05 * index}
        className="flex flex-col h-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div className="w-full overflow-hidden max-h-[200px]">
          <motion.img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="object-contain w-full max-h-[220px] mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex flex-col flex-grow p-5">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-xl font-bold mt-2">{post.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 flex-grow">
            {post.excerpt}
          </p>
          <Link href={post.link} className="mt-auto">
            <Button variant="outline" className="w-full mt-6 relative overflow-hidden group">
              <span className="relative z-10">Read Full Article</span>
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </Link>
        </div>
      </AnimatedCard>
    </div>
  ))}
</div>


        </div>
      </div>
    </PageTransition>
  )
}