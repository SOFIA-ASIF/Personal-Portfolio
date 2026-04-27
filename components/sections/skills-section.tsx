"use client";

import { motion } from "framer-motion";
import { TextSplit } from "@/components/ui/split-text";
import { PlusCard } from "@/components/ui/plus-card";
import { Shield, Network, Code, Brain, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "from-emerald-500 to-teal-500",
    description: "Expert in penetration testing, vulnerability assessment, and security monitoring using industry-standard tools.",
    skills: [
      "Kali Linux",
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "Ettercap",
      "Aircrack-ng",
      "Autopsy",
      "FTK Imager",
      "Wazuh",
      "Splunk",
      "Suricata",
      "YARA Rules",
      "Sysmon",
      "Metasploit",
      "OSINT",
    ],
  },
  {
    title: "Networking",
    icon: Network,
    color: "from-blue-500 to-cyan-500",
    description: "Proficient in network architecture, protocols, and security configuration for enterprise environments.",
    skills: [
      "TCP/IP",
      "VLANs",
      "OSPF",
      "Switching",
      "Network Protocols",
      "Cisco Packet Tracer",
      "Firewall Configuration",
      "Network Analysis",
    ],
  },
  {
    title: "Programming",
    icon: Code,
    color: "from-orange-500 to-amber-500",
    description: "Full-stack development capabilities with modern frameworks and deployment pipelines.",
    skills: [
      "Python",
      "Java",
      "C++",
      "Web Development",
      "MongoDB",
      "MySQL",
      "Sanity CMS",
      "Git",
      "GitHub",
      "Docker",
      "Jenkins",
      "Vercel",
      "Netlify",
      "VPS Deployment",
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    color: "from-pink-500 to-rose-500",
    description: "Exploring cutting-edge AI technologies including computer vision and generative models.",
    skills: [
      "OpenCV",
      "Machine Learning Basics",
      "Generative AI",
      "Agentic AI",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "from-indigo-500 to-purple-500",
    description: "Strong interpersonal abilities that drive effective collaboration and leadership.",
    skills: ["Communication", "Team Coordination", "Mentoring", "Decision-Making"],
  },
];

export function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <TextSplit
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            maxMove={100}
            falloff={0.15}
          >
            Skills & Expertise
          </TextSplit>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for tackling modern security challenges
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={
                categoryIndex === 0 ? "lg:col-span-3 lg:row-span-2" :
                categoryIndex === 1 ? "lg:col-span-3 lg:row-span-2" :
                categoryIndex === 2 ? "lg:col-span-4 lg:row-span-1" :
                categoryIndex === 3 ? "lg:col-span-2 lg:row-span-1" :
                "lg:col-span-6 lg:row-span-1"
              }
            >
              <PlusCard
                title={category.title}
                description={category.description}
                className="h-full"
                icon={
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} w-fit`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                }
              >
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground border border-border hover:border-primary hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </PlusCard>
            </motion.div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="max-w-2xl ml-auto text-right px-4 mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Built for security. Designed for excellence.
          </h2>
          <p className="text-muted-foreground">
            Each skill is honed through hands-on experience and continuous learning, 
            ensuring robust solutions for complex challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
