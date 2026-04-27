"use client";

import { motion } from "framer-motion";
import { TextSplit } from "@/components/ui/split-text";
import { Shield, Network, Code, Brain, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "from-emerald-500 to-teal-500",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98, rotate: "-0.5deg" }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
