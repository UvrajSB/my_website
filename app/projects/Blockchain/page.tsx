"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Tag, User, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { BackgroundPattern } from "@/components/background-pattern"

const blockchainProjects = [
  {
    id: "consent-on-chain",
    title: "Consent-on-Chain – Verifiable Consent Management with Smart Contracts",
    description: "An Ethereum-based system to manage, validate, and audit digital consent artifacts directly on the blockchain.",
    date: "February 2025",
    client: "Self-initiated",
    role: "Full-stack Blockchain Developer",
    tags: ["Blockchain", "Ethereum", "Smart Contracts", "Consent Management", "APIs"],
    website: "https://github.com/UvrajSB/Consent-on-chain",
    github: "https://github.com/UvrajSB/Consent-on-chain",
    coverImage: "/images/consent-onchain.png",
    content: [
      {
        type: "heading",
        content: "Overview",
      },
      {
        type: "paragraph",
        content:
          "Consent-on-Chain is a smart contract-backed system for secure consent artifact lifecycle management. It provides API endpoints for uploading, validating, downloading, revoking, and auditing user consents via the blockchain, ensuring tamper-proof verification and compliance transparency.",
      },
      {
        type: "heading",
        content: "Key Features",
      },
      {
        type: "table",
        headers: ["Function", "Description"],
        rows: [
          ["Upload Consent", "Records hashed consent artifacts to the smart contract"],
          ["Verify Consent", "Validates if a consent artifact exists and is active"],
          ["Revoke Consent", "Marks a consent as revoked with timestamp logging"],
          ["Download & Logs", "Provides all historical records for auditing purposes"],
        ],
      },
      {
        type: "heading",
        content: "Tech Stack",
      },
      {
        type: "table",
        headers: ["Tech", "Usage"],
        rows: [
          ["Solidity", "Smart contract development"],
          ["Node.js & Express", "API integration with blockchain"],
          ["Hardhat", "Testing and deployment framework"],
          ["Polygon Amoy Testnet", "Deployment network"],
        ],
      },
    ],
  },
  {
    id: "warranty-nft",
    title: "Warranty-on-Chain – NFT-Backed Warranty System for eCommerce",
    description: "A blockchain-based warranty tracking system using NFTs, built for Flipkart Grid 5.0 by Team Devloopers.",
    date: "October 2024",
    client: "Flipkart Grid Hackathon",
    role: "Blockchain Engineer & Architect",
    tags: ["Blockchain", "NFT", "eCommerce", "Warranty", "Hackathon"],
    website: "https://github.com/pranayvarshney/Flipkart-Grid",
    github: "https://github.com/pranayvarshney/Flipkart-Grid",
    coverImage: "/images/warranty-nft-cover.png",
    content: [
      {
        type: "heading",
        content: "Overview",
      },
      {
        type: "paragraph",
        content:
          "Warranty-on-Chain is a full-stack solution that issues warranty cards as NFTs upon product purchase. These NFTs store product details, ownership history, and warranty validity directly on-chain, ensuring trust, transparency, and easy claim handling for users and retailers alike.",
      },
      {
        type: "heading",
        content: "Key Features",
      },
      {
        type: "table",
        headers: ["Feature", "Benefit"],
        rows: [
          ["NFT Warranty Cards", "Track ownership, claims, and serial numbers on-chain"],
          ["OTP Verification", "Authenticates customers using phone + serial combo"],
          ["Warranty Claiming", "Allows users to raise, extend, and track claims"],
          ["Gamification", "SuperCoins and leaderboard for incentivization"],
          ["Soulbound NFTs", "Loyalty-based non-transferable rewards"],
        ],
      },
      {
        type: "heading",
        content: "Use Cases",
      },
      {
        type: "paragraph",
        content:
          "- P0: Prove ownership of products via blockchain\n- P1: View live warranty status and claim history\n- P3: Raise or extend claims via smart contract\n- P5: Transfer product NFTs during resale\n- P10: View SuperCoin leaderboard for rewards",
      },
      {
        type: "heading",
        content: "Tech Stack",
      },
      {
        type: "table",
        headers: ["Technology", "Purpose"],
        rows: [
          ["Solidity", "Smart contract for NFT-based warranties"],
          ["Chainlink Keepers", "Automated warranty expiry checks"],
          ["React + Node.js", "Web portals for retailers and users"],
          ["IPFS + Rinkeby", "Metadata storage and testnet deployment"],
        ],
      },
    ],
  },
]

export default function BlockchainProjectsPage() {
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
            {blockchainProjects.map((project, index) => (
              <div key={project.id}>
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
                          <AnimatedSection key={index} delay={0.05 * index} className="text-gray-500 dark:text-gray-400 whitespace-pre-line">
                            <p>{section.content}</p>
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
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
