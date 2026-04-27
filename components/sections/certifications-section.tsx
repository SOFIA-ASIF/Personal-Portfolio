"use client";

import { motion } from "framer-motion";
import { TextSplit } from "@/components/ui/split-text";
import { PlusCard } from "@/components/ui/plus-card";

// Custom Certification Icons - Fun and Professional
const CEHBadgeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    {/* Badge outer ring */}
    <circle cx="24" cy="24" r="20" fill="url(#cehGrad)" stroke="#00D4AA" strokeWidth="2" />
    {/* Inner shield */}
    <path
      d="M24 10l-10 6v8c0 7.4 5.1 14.3 10 16 4.9-1.7 10-8.6 10-16v-8l-10-6z"
      fill="#0a1a14"
      stroke="#00D4AA"
      strokeWidth="1.5"
    />
    {/* Skull icon (ethical hacker symbol) */}
    <circle cx="24" cy="22" r="6" fill="#00D4AA" />
    <circle cx="21" cy="21" r="1.5" fill="#0a1a14" />
    <circle cx="27" cy="21" r="1.5" fill="#0a1a14" />
    <path d="M22 25h4" stroke="#0a1a14" strokeWidth="1" />
    <path d="M22 26v2M24 26v2M26 26v2" stroke="#0a1a14" strokeWidth="0.8" />
    {/* Binary ring */}
    <text x="6" y="8" fill="#00D4AA" fontSize="4" opacity="0.6">01</text>
    <text x="38" y="12" fill="#00D4AA" fontSize="4" opacity="0.6">10</text>
    <text x="40" y="40" fill="#00D4AA" fontSize="4" opacity="0.6">01</text>
    <text x="4" y="38" fill="#00D4AA" fontSize="4" opacity="0.6">11</text>
    <defs>
      <linearGradient id="cehGrad" x1="4" y1="4" x2="44" y2="44">
        <stop offset="0%" stopColor="#0a1a14" />
        <stop offset="100%" stopColor="#1a2e28" />
      </linearGradient>
    </defs>
  </svg>
);

const CiscoBadgeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    {/* Background */}
    <rect x="4" y="8" width="40" height="32" rx="6" fill="url(#ciscoGrad)" stroke="#1BA0D7" strokeWidth="2" />
    {/* Cisco bridge lines */}
    <rect x="10" y="18" width="4" height="12" rx="1" fill="#1BA0D7" />
    <rect x="16" y="14" width="4" height="16" rx="1" fill="#1BA0D7" />
    <rect x="22" y="12" width="4" height="18" rx="1" fill="#1BA0D7" />
    <rect x="28" y="14" width="4" height="16" rx="1" fill="#1BA0D7" />
    <rect x="34" y="18" width="4" height="12" rx="1" fill="#1BA0D7" />
    {/* Network dots */}
    <circle cx="12" cy="34" r="2" fill="#00D4FF">
      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="24" cy="36" r="2" fill="#00D4FF">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="36" cy="34" r="2" fill="#00D4FF">
      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <defs>
      <linearGradient id="ciscoGrad" x1="4" y1="8" x2="44" y2="40">
        <stop offset="0%" stopColor="#0d2137" />
        <stop offset="100%" stopColor="#1a3a52" />
      </linearGradient>
    </defs>
  </svg>
);

const IBMCloudIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    {/* Cloud shape */}
    <path
      d="M38 28c0-3.3-2.7-6-6-6 0-5.5-4.5-10-10-10s-10 4.5-10 10c-3.3 0-6 2.7-6 6s2.7 6 6 6h20c3.3 0 6-2.7 6-6z"
      fill="url(#ibmGrad)"
      stroke="#054ADA"
      strokeWidth="2"
    />
    {/* Security shield inside */}
    <path
      d="M24 16l-6 3v4c0 4.5 2.6 8.7 6 10 3.4-1.3 6-5.5 6-10v-4l-6-3z"
      fill="#054ADA"
      stroke="#DDF4E7"
      strokeWidth="1"
    />
    {/* Lock */}
    <rect x="22" y="24" width="4" height="4" rx="0.5" fill="#DDF4E7" />
    <path d="M22 24v-1.5a2 2 0 0 1 4 0V24" stroke="#DDF4E7" strokeWidth="1" fill="none" />
    {/* Data streams */}
    <line x1="10" y1="36" x2="10" y2="42" stroke="#054ADA" strokeWidth="2" strokeDasharray="2 2">
      <animate attributeName="y1" values="36;38;36" dur="1s" repeatCount="indefinite" />
    </line>
    <line x1="24" y1="38" x2="24" y2="44" stroke="#054ADA" strokeWidth="2" strokeDasharray="2 2">
      <animate attributeName="y1" values="38;40;38" dur="1s" repeatCount="indefinite" begin="0.3s" />
    </line>
    <line x1="38" y1="36" x2="38" y2="42" stroke="#054ADA" strokeWidth="2" strokeDasharray="2 2">
      <animate attributeName="y1" values="36;38;36" dur="1s" repeatCount="indefinite" begin="0.6s" />
    </line>
    <defs>
      <linearGradient id="ibmGrad" x1="6" y1="12" x2="38" y2="34">
        <stop offset="0%" stopColor="#054ADA" />
        <stop offset="100%" stopColor="#0062FF" />
      </linearGradient>
    </defs>
  </svg>
);

const ISC2BadgeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    {/* Hexagon badge */}
    <path
      d="M24 4L42 14v20L24 44 6 34V14L24 4z"
      fill="url(#isc2Grad)"
      stroke="#00D4AA"
      strokeWidth="2"
    />
    {/* Inner hexagon */}
    <path
      d="M24 10L36 17v14L24 38 12 31V17L24 10z"
      fill="none"
      stroke="#00D4AA"
      strokeWidth="1"
      opacity="0.5"
    />
    {/* Check mark */}
    <path
      d="M18 24l4 4 8-8"
      stroke="#00D4AA"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Sparkles */}
    <circle cx="24" cy="4" r="2" fill="#00D4AA" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
    </circle>
    <defs>
      <linearGradient id="isc2Grad" x1="6" y1="4" x2="42" y2="44">
        <stop offset="0%" stopColor="#0a1a14" />
        <stop offset="100%" stopColor="#1a3028" />
      </linearGradient>
    </defs>
  </svg>
);

const NetworkSecurityIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    {/* Firewall blocks */}
    <rect x="6" y="6" width="10" height="10" rx="2" fill="#1BA0D7" opacity="0.8" />
    <rect x="19" y="6" width="10" height="10" rx="2" fill="#1BA0D7" />
    <rect x="32" y="6" width="10" height="10" rx="2" fill="#1BA0D7" opacity="0.8" />
    <rect x="6" y="19" width="10" height="10" rx="2" fill="#1BA0D7" />
    <rect x="19" y="19" width="10" height="10" rx="2" fill="url(#netsecGrad)" stroke="#67C090" strokeWidth="1" />
    <rect x="32" y="19" width="10" height="10" rx="2" fill="#1BA0D7" />
    <rect x="6" y="32" width="10" height="10" rx="2" fill="#1BA0D7" opacity="0.8" />
    <rect x="19" y="32" width="10" height="10" rx="2" fill="#1BA0D7" />
    <rect x="32" y="32" width="10" height="10" rx="2" fill="#1BA0D7" opacity="0.8" />
    {/* Central lock */}
    <rect x="22" y="22" width="4" height="5" rx="0.5" fill="#DDF4E7" />
    <path d="M22 22v-1a2 2 0 0 1 4 0v1" stroke="#DDF4E7" strokeWidth="1" fill="none" />
    {/* Connection lines */}
    <line x1="24" y1="16" x2="24" y2="19" stroke="#67C090" strokeWidth="1" />
    <line x1="24" y1="29" x2="24" y2="32" stroke="#67C090" strokeWidth="1" />
    <line x1="16" y1="24" x2="19" y2="24" stroke="#67C090" strokeWidth="1" />
    <line x1="29" y1="24" x2="32" y2="24" stroke="#67C090" strokeWidth="1" />
    <defs>
      <linearGradient id="netsecGrad" x1="19" y1="19" x2="29" y2="29">
        <stop offset="0%" stopColor="#26667F" />
        <stop offset="100%" stopColor="#1BA0D7" />
      </linearGradient>
    </defs>
  </svg>
);

const CyberOpsIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    {/* Monitor */}
    <rect x="6" y="6" width="36" height="28" rx="3" fill="url(#opsGrad)" stroke="#1BA0D7" strokeWidth="2" />
    {/* Screen content - dashboard */}
    <rect x="10" y="10" width="28" height="20" rx="1" fill="#0a1628" />
    {/* Charts */}
    <path d="M12 26 L16 22 L20 24 L24 18 L28 20 L32 16 L36 18" stroke="#00D4FF" strokeWidth="1.5" fill="none" />
    {/* Alert indicators */}
    <circle cx="14" cy="14" r="2" fill="#ef4444">
      <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
    </circle>
    <circle cx="20" cy="14" r="2" fill="#22c55e" />
    <circle cx="26" cy="14" r="2" fill="#22c55e" />
    {/* Stand */}
    <rect x="20" y="34" width="8" height="4" fill="#1BA0D7" />
    <rect x="16" y="38" width="16" height="2" rx="1" fill="#1BA0D7" />
    {/* Eye symbol */}
    <ellipse cx="32" cy="14" rx="3" ry="2" fill="none" stroke="#00D4FF" strokeWidth="1" />
    <circle cx="32" cy="14" r="1" fill="#00D4FF" />
    <defs>
      <linearGradient id="opsGrad" x1="6" y1="6" x2="42" y2="34">
        <stop offset="0%" stopColor="#1a3a52" />
        <stop offset="100%" stopColor="#0d2137" />
      </linearGradient>
    </defs>
  </svg>
);

const certifications = [
  {
    title: "Certified Ethical Hacker (CEH) Training",
    issuer: "NAVTTC",
    description: "Comprehensive training on ethical hacking methodologies, penetration testing, and vulnerability assessment.",
    status: "Ongoing",
    icon: CEHBadgeIcon,
  },
  {
    title: "CCNA Training",
    issuer: "Cisco Networking Academy",
    description: "Industry-recognized certification covering networking fundamentals, routing, switching, and security basics.",
    icon: CiscoBadgeIcon,
  },
  {
    title: "IBM Security Analyst Professional Certificate",
    issuer: "IBM",
    description: "Comprehensive 14-course program covering threat intelligence, incident response, and security operations.",
    icon: IBMCloudIcon,
  },
  {
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    description: "Foundation-level certification validating core cybersecurity knowledge and best practices.",
    year: "2024",
    icon: ISC2BadgeIcon,
  },
  {
    title: "Network Security",
    issuer: "Cisco Networking Academy",
    description: "Specialized training in network security principles, firewall management, and secure network design.",
    icon: NetworkSecurityIcon,
  },
  {
    title: "CyberOps Associate",
    issuer: "Cisco Networking Academy",
    description: "Security operations center fundamentals including monitoring, detection, and incident analysis.",
    icon: CyberOpsIcon,
  },
];

export function CertificationsSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <TextSplit
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            maxMove={100}
            falloff={0.15}
          >
            Certifications
          </TextSplit>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={
                index === 0 ? "lg:col-span-3 lg:row-span-2" :
                index === 1 ? "lg:col-span-3 lg:row-span-1" :
                index === 2 ? "lg:col-span-3 lg:row-span-1" :
                index === 3 ? "lg:col-span-2 lg:row-span-1" :
                index === 4 ? "lg:col-span-2 lg:row-span-1" :
                "lg:col-span-2 lg:row-span-1"
              }
            >
              <PlusCard
                title={cert.title}
                description={cert.description}
                className="h-full"
                icon={
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-card to-secondary/50 border border-border/50 shadow-lg">
                      <cert.icon />
                    </div>
                    {cert.status === "Ongoing" && (
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium animate-pulse">
                        Ongoing
                      </span>
                    )}
                    {cert.year && (
                      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {cert.year}
                      </span>
                    )}
                  </div>
                }
              >
                <p className="text-sm text-muted-foreground mt-2">
                  Issued by <span className="text-primary font-medium">{cert.issuer}</span>
                </p>
              </PlusCard>
            </motion.div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="max-w-2xl ml-auto text-right px-4 mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Committed to continuous growth.
          </h2>
          <p className="text-muted-foreground">
            Pursuing industry-recognized certifications to stay at the forefront of cybersecurity excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
