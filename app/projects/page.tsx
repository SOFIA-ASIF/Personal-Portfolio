"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TextSplit } from "@/components/ui/split-text";
import { BorderRotate } from "@/components/ui/animated-gradient-border";
import { motion } from "framer-motion";
import {
  Shield,
  Server,
  ShoppingCart,
  FileText,
  Lock,
  ExternalLink,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Wazuh SIEM Deployment on VPS",
    description:
      "Deployed and configured Wazuh on a Virtual Private Server for endpoint and network security monitoring. Integrated Suricata for network intrusion detection and Sysmon for Windows endpoint telemetry. Implemented automated email and Slack alerts for high-severity events, wrote custom YARA rules for malware detection, and hardened SSH access through firewall configurations.",
    icon: Shield,
    tags: [
      "Wazuh",
      "SIEM",
      "Suricata",
      "Sysmon",
      "YARA",
      "VPS",
      "Security Monitoring",
    ],
    gradient: {
      primary: "#0a3d3d",
      secondary: "#00d4aa",
      accent: "#00f5c8",
    },
    featured: true,
  },
  {
    title: "Multi-Tenant E-Commerce Platform",
    description:
      "Building a multi-tenant e-commerce platform using Next.js, TypeScript, and MongoDB Atlas with per-vendor domain affiliation, payment gateway integration, and secure role-based authentication.",
    icon: ShoppingCart,
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Authentication",
      "E-Commerce",
    ],
    gradient: {
      primary: "#1a1a4e",
      secondary: "#4f46e5",
      accent: "#818cf8",
    },
    status: "Ongoing",
  },
  {
    title: "Furniro: E-Commerce Website",
    description:
      "Built a responsive e-commerce platform using Next.js, TypeScript, Tailwind CSS, and Sanity CMS. Implemented product browsing, search, and checkout with a mocked payment gateway.",
    icon: ShoppingCart,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "E-Commerce"],
    gradient: {
      primary: "#3d2a0a",
      secondary: "#d4a400",
      accent: "#f5c800",
    },
  },
  {
    title: "AI-Native Robotics Documentation Platform",
    description:
      "Built a documentation platform using Docusaurus and Claude Code focused on system architecture for physical AI and humanoid robotics.",
    icon: FileText,
    tags: ["Docusaurus", "AI", "Documentation", "Robotics"],
    gradient: {
      primary: "#2a0a3d",
      secondary: "#a400d4",
      accent: "#c800f5",
    },
  },
  {
    title: "Secure Data Encryption Tool",
    description:
      "Developed a Python-based encryption tool that protects sensitive data using user-defined keys, allowing decryption only with the correct key via cryptography libraries.",
    icon: Lock,
    tags: ["Python", "Cryptography", "Security", "Encryption"],
    gradient: {
      primary: "#0a2a3d",
      secondary: "#0084d4",
      accent: "#00c8f5",
    },
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <TextSplit
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
              maxMove={100}
              falloff={0.15}
            >
              My Projects
            </TextSplit>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              A showcase of my work in cybersecurity, web development, and
              software engineering
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BorderRotate
                  className="p-0 overflow-hidden"
                  animationSpeed={10}
                  gradientColors={project.gradient}
                  backgroundColor="oklch(0.15 0.02 200)"
                  borderRadius={16}
                >
                  <div
                    className={`p-6 md:p-8 ${project.featured ? "md:flex md:gap-8 md:items-center" : ""}`}
                  >
                    <div
                      className={`${project.featured ? "md:flex-1" : ""} space-y-4`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="p-3 rounded-lg"
                            style={{
                              backgroundColor: `${project.gradient.secondary}20`,
                            }}
                          >
                            <project.icon
                              className="w-6 h-6"
                              style={{ color: project.gradient.secondary }}
                            />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                              {project.title}
                            </h3>
                            {project.status && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                                {project.status}
                              </span>
                            )}
                          </div>
                        </div>
                        {project.featured && (
                          <span className="hidden md:inline-block text-xs px-3 py-1 rounded-full bg-primary text-primary-foreground font-medium">
                            Featured
                          </span>
                        )}
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </BorderRotate>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Interested in collaborating or want to see more of my work?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/sofiaasif"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
