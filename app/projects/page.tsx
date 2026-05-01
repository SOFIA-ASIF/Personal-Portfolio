"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TextSplit } from "@/components/ui/split-text";
import { motion } from "framer-motion";
import {
  Shield,
  ShoppingCart,
  FileText,
  Lock,
  Github,
  ExternalLink,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  image: string;
  githubUrl: string;
  deployedUrl: string;
  gradient: string;
  featured?: boolean;
  status?: string;
}

const projects: Project[] = [
  {
    title: "Wazuh SIEM Deployment on VPS",
    description:
      "Deployed and configured Wazuh on a Virtual Private Server for endpoint and network security monitoring. Integrated Suricata for network intrusion detection and Sysmon for Windows endpoint telemetry.",
    icon: Shield,
    tags: ["Wazuh", "SIEM", "Suricata", "Sysmon", "YARA"],
    image: "/wazuh.jpeg",
    githubUrl: "https://github.com/sofiaasif/wazuh-siem",
    deployedUrl: "#",
    gradient: "from-[#67C090] to-[#26667F]",
    featured: true,
  },
  {
    title: "Multi-Tenant E-Commerce Platform",
    description:
      "Building a multi-tenant e-commerce platform using Next.js, TypeScript, and MongoDB Atlas with per-vendor domain affiliation and secure role-based authentication.",
    icon: ShoppingCart,
    tags: ["Next.js", "TypeScript", "MongoDB", "Authentication"],
    image: "/multi-tenant.jpeg",
    githubUrl: "https://github.com/sofiaasif/ecommerce-platform",
    deployedUrl: "#",
    gradient: "from-[#26667F] to-[#124170]",
    status: "Ongoing",
  },
  {
    title: "Furniro: E-Commerce Website",
    description:
      "Built a responsive e-commerce platform using Next.js, TypeScript, Tailwind CSS, and Sanity CMS. Implemented product browsing, search, and checkout with a mocked payment gateway.",
    icon: ShoppingCart,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    image: "/furnir.png",
    githubUrl: "https://github.com/sofiaasif/furniro",
    deployedUrl: "#",
    gradient: "from-[#124170] to-[#67C090]",
  },
  {
    title: "AI-Native Robotics Documentation",
    description:
      "Built a documentation platform using Docusaurus and Claude Code focused on system architecture for physical AI and humanoid robotics.",
    icon: FileText,
    tags: ["Docusaurus", "AI", "Documentation", "Robotics"],
    image: "robotics.png",
    githubUrl: "https://github.com/sofiaasif/robotics-docs",
    deployedUrl: "#",
    gradient: "from-[#67C090] to-[#124170]",
  },
  {
    title: "Secure Data Encryption Tool",
    description:
      "Developed a Python-based encryption tool that protects sensitive data using user-defined keys, allowing decryption only with the correct key via cryptography libraries.",
    icon: Lock,
    tags: ["Python", "Cryptography", "Security", "Encryption"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/sofiaasif/encryption-tool",
    deployedUrl: "#",
    gradient: "from-[#26667F] to-[#67C090]",
  },
];

interface ProjectCardProps {
  project: Project;
  className?: string;
  isWide?: boolean;
}

const ProjectCard = ({ project, className = "", isWide = false }: ProjectCardProps) => {
  const IconComponent = project.icon;
  
  return (
    <motion.div
      whileHover={{ scale: 0.98, rotate: "-0.5deg" }}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-card border border-border min-h-[400px] ${className}`}
    >
      <Link href={project.deployedUrl} className="block h-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#67C090]/20">
                <IconComponent className="w-5 h-5 text-[#67C090]" />
              </div>
              {project.featured && (
                <span className="text-xs px-3 py-1 rounded-full bg-primary text-primary-foreground font-medium">
                  Featured
                </span>
              )}
              {project.status && (
                <span className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                  {project.status}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <Link
                href={project.githubUrl}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
              <span className="p-2 rounded-lg bg-secondary">
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </div>
          <h3 className={`font-bold text-foreground mb-2 ${isWide ? 'text-2xl' : 'text-xl'}`}>
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, isWide ? 5 : 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`absolute bottom-0 left-4 right-4 top-48 translate-y-8 rounded-t-2xl bg-gradient-to-br ${project.gradient} p-4 transition-transform duration-300 group-hover:translate-y-4 group-hover:rotate-[1deg] overflow-hidden`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg opacity-90"
          />
        </div>
      </Link>
    </motion.div>
  );
};

const WideProjectCard = ({ project }: { project: Project }) => {
  const IconComponent = project.icon;
  
  return (
    <motion.div
      whileHover={{ scale: 0.98, rotate: "-0.5deg" }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card border border-border min-h-[350px] col-span-12"
    >
      <Link href={project.deployedUrl} className="block h-full">
        <div className="p-6 md:w-1/2">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-[#26667F]/20">
              <IconComponent className="w-5 h-5 text-[#26667F]" />
            </div>
            <div className="flex gap-2">
              <Link
                href={project.githubUrl}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
              <span className="p-2 rounded-lg bg-secondary">
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`absolute bottom-0 right-0 top-0 w-1/2 hidden md:block bg-gradient-to-br ${project.gradient} transition-transform duration-300 group-hover:scale-[1.02] overflow-hidden`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div
          className={`absolute bottom-0 left-4 right-4 top-52 md:hidden translate-y-8 rounded-t-2xl bg-gradient-to-br ${project.gradient} p-4 transition-transform duration-300 group-hover:translate-y-4 group-hover:rotate-[1deg] overflow-hidden`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg opacity-90"
          />
        </div>
      </Link>
    </motion.div>
  );
};

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

          {/* Projects Grid - Bouncy Cards Style */}
          <div className="mb-8 grid grid-cols-12 gap-6">
            {/* Featured Project - Large */}
            <ProjectCard project={projects[0]} className="col-span-12 md:col-span-7" isWide />
            {/* Second Project */}
            <ProjectCard project={projects[1]} className="col-span-12 md:col-span-5" />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-12 gap-6 mb-8">
            {/* Third Project */}
            <ProjectCard project={projects[2]} className="col-span-12 md:col-span-5" />
            {/* Fourth Project */}
            <ProjectCard project={projects[3]} className="col-span-12 md:col-span-7" isWide />
          </div>

          {/* Fifth Project - Full Width */}
          <div className="grid grid-cols-12 gap-6">
            <WideProjectCard project={projects[4]} />
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#124170] text-white font-medium hover:bg-[#26667F] transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                href="https://github.com/SOFIA-ASIF"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#124170] text-[#124170] font-medium hover:bg-[#124170] hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                View GitHub
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
