"use client";

import { motion } from "framer-motion";
import { TextSplit } from "@/components/ui/split-text";
import { PlusCard } from "@/components/ui/plus-card";

// Custom SVG Icons - Fun and Unique
const CyberShieldIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    {/* Shield body */}
    <path
      d="M24 4L6 12v12c0 11.1 7.67 21.48 18 24 10.33-2.52 18-12.9 18-24V12L24 4z"
      fill="url(#cyberGrad)"
      stroke="#67C090"
      strokeWidth="2"
    />
    {/* Digital pattern */}
    <path d="M16 18h4v2h-4zm8 0h4v2h-4zm8 0h4v2h-4z" fill="#DDF4E7" opacity="0.8" />
    <path d="M12 24h6v2h-6zm8 0h8v2h-8zm10 0h6v2h-6z" fill="#DDF4E7" opacity="0.6" />
    <path d="M18 30h4v2h-4zm6 0h6v2h-6z" fill="#DDF4E7" opacity="0.4" />
    {/* Lock icon */}
    <circle cx="24" cy="26" r="4" fill="#124170" />
    <rect x="21" y="26" width="6" height="5" rx="1" fill="#124170" />
    <circle cx="24" cy="28" r="1" fill="#67C090" />
    <defs>
      <linearGradient id="cyberGrad" x1="6" y1="4" x2="42" y2="40">
        <stop offset="0%" stopColor="#26667F" />
        <stop offset="100%" stopColor="#124170" />
      </linearGradient>
    </defs>
  </svg>
);

const NetworkGlobeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    {/* Globe */}
    <circle cx="24" cy="24" r="18" fill="url(#netGrad)" stroke="#67C090" strokeWidth="2" />
    {/* Latitude lines */}
    <ellipse cx="24" cy="24" rx="18" ry="6" fill="none" stroke="#DDF4E7" strokeWidth="1" opacity="0.6" />
    <ellipse cx="24" cy="24" rx="18" ry="12" fill="none" stroke="#DDF4E7" strokeWidth="1" opacity="0.4" />
    {/* Longitude lines */}
    <ellipse cx="24" cy="24" rx="6" ry="18" fill="none" stroke="#DDF4E7" strokeWidth="1" opacity="0.6" />
    {/* Network nodes */}
    <circle cx="14" cy="18" r="2" fill="#67C090" />
    <circle cx="34" cy="20" r="2" fill="#67C090" />
    <circle cx="20" cy="32" r="2" fill="#67C090" />
    <circle cx="30" cy="28" r="2" fill="#67C090" />
    {/* Connection lines */}
    <line x1="14" y1="18" x2="34" y2="20" stroke="#67C090" strokeWidth="1" opacity="0.8" />
    <line x1="34" y1="20" x2="30" y2="28" stroke="#67C090" strokeWidth="1" opacity="0.8" />
    <line x1="20" y1="32" x2="30" y2="28" stroke="#67C090" strokeWidth="1" opacity="0.8" />
    <defs>
      <linearGradient id="netGrad" x1="6" y1="6" x2="42" y2="42">
        <stop offset="0%" stopColor="#1BA0D7" />
        <stop offset="100%" stopColor="#26667F" />
      </linearGradient>
    </defs>
  </svg>
);

const CodeTerminalIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    {/* Terminal window */}
    <rect x="4" y="8" width="40" height="32" rx="4" fill="url(#codeGrad)" stroke="#67C090" strokeWidth="2" />
    {/* Title bar */}
    <rect x="4" y="8" width="40" height="8" fill="#124170" />
    <circle cx="10" cy="12" r="2" fill="#ef4444" />
    <circle cx="17" cy="12" r="2" fill="#eab308" />
    <circle cx="24" cy="12" r="2" fill="#22c55e" />
    {/* Code lines */}
    <text x="8" y="26" fill="#67C090" fontSize="8" fontFamily="monospace">{">"}</text>
    <rect x="14" y="22" width="16" height="2" rx="1" fill="#67C090" />
    <rect x="8" y="30" width="24" height="2" rx="1" fill="#DDF4E7" opacity="0.6" />
    <rect x="8" y="34" width="12" height="2" rx="1" fill="#DDF4E7" opacity="0.4" />
    {/* Cursor blink */}
    <rect x="34" y="22" width="2" height="6" fill="#67C090">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>
    <defs>
      <linearGradient id="codeGrad" x1="4" y1="8" x2="44" y2="40">
        <stop offset="0%" stopColor="#1a1a2e" />
        <stop offset="100%" stopColor="#0f0f1a" />
      </linearGradient>
    </defs>
  </svg>
);

const BrainAIIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    {/* Brain shape */}
    <path
      d="M24 6c-8 0-14 6-14 14 0 4 1.5 7.5 4 10l4 12h12l4-12c2.5-2.5 4-6 4-10 0-8-6-14-14-14z"
      fill="url(#brainGrad)"
      stroke="#67C090"
      strokeWidth="2"
    />
    {/* Neural connections */}
    <circle cx="18" cy="16" r="2" fill="#DDF4E7" />
    <circle cx="30" cy="16" r="2" fill="#DDF4E7" />
    <circle cx="24" cy="22" r="2" fill="#DDF4E7" />
    <circle cx="16" cy="26" r="2" fill="#DDF4E7" />
    <circle cx="32" cy="26" r="2" fill="#DDF4E7" />
    <circle cx="20" cy="32" r="2" fill="#DDF4E7" />
    <circle cx="28" cy="32" r="2" fill="#DDF4E7" />
    {/* Connection lines */}
    <line x1="18" y1="16" x2="24" y2="22" stroke="#67C090" strokeWidth="1" />
    <line x1="30" y1="16" x2="24" y2="22" stroke="#67C090" strokeWidth="1" />
    <line x1="16" y1="26" x2="24" y2="22" stroke="#67C090" strokeWidth="1" />
    <line x1="32" y1="26" x2="24" y2="22" stroke="#67C090" strokeWidth="1" />
    <line x1="20" y1="32" x2="16" y2="26" stroke="#67C090" strokeWidth="1" />
    <line x1="28" y1="32" x2="32" y2="26" stroke="#67C090" strokeWidth="1" />
    {/* Pulse animation */}
    <circle cx="24" cy="22" r="4" fill="none" stroke="#67C090" strokeWidth="1" opacity="0.5">
      <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
    </circle>
    <defs>
      <linearGradient id="brainGrad" x1="10" y1="6" x2="38" y2="42">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

const TeamCollabIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    {/* Central person */}
    <circle cx="24" cy="14" r="6" fill="url(#teamGrad)" stroke="#67C090" strokeWidth="2" />
    <path d="M16 40v-6c0-4 3.5-8 8-8s8 4 8 8v6" fill="url(#teamGrad)" stroke="#67C090" strokeWidth="2" />
    {/* Left person */}
    <circle cx="10" cy="18" r="4" fill="#26667F" />
    <path d="M4 38v-4c0-3 2.5-6 6-6s6 3 6 6v4" fill="#26667F" opacity="0.8" />
    {/* Right person */}
    <circle cx="38" cy="18" r="4" fill="#26667F" />
    <path d="M32 38v-4c0-3 2.5-6 6-6s6 3 6 6v4" fill="#26667F" opacity="0.8" />
    {/* Connection arcs */}
    <path d="M14 20 C18 12 30 12 34 20" stroke="#67C090" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
    {/* Sparkles */}
    <circle cx="20" cy="8" r="1" fill="#67C090">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="28" cy="6" r="1" fill="#67C090">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <defs>
      <linearGradient id="teamGrad" x1="16" y1="8" x2="32" y2="40">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: CyberShieldIcon,
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
    icon: NetworkGlobeIcon,
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
    icon: CodeTerminalIcon,
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
    icon: BrainAIIcon,
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
    icon: TeamCollabIcon,
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
                  <div className="p-2 rounded-xl bg-gradient-to-br from-card to-secondary/50 border border-border/50 shadow-lg">
                    <category.icon />
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
