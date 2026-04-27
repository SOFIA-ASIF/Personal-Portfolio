"use client";

import { motion } from "framer-motion";
import { TextSplit } from "@/components/ui/split-text";
import { Award, Shield, Network, Server, ShieldCheck, Lock } from "lucide-react";

const certifications = [
  {
    title: "Certified Ethical Hacker (CEH) Training",
    issuer: "NAVTTC",
    status: "Ongoing",
    icon: Shield,
    color: "#00D4AA",
  },
  {
    title: "CCNA Training",
    issuer: "Cisco Networking Academy",
    icon: Network,
    color: "#1BA0D7",
  },
  {
    title: "IBM Security Analyst Professional Certificate",
    issuer: "IBM",
    description: "14 Courses",
    icon: Server,
    color: "#054ADA",
  },
  {
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    year: "2024",
    icon: ShieldCheck,
    color: "#00D4AA",
  },
  {
    title: "Network Security",
    issuer: "Cisco Networking Academy",
    icon: Lock,
    color: "#1BA0D7",
  },
  {
    title: "CyberOps Associate",
    issuer: "Cisco Networking Academy",
    icon: Network,
    color: "#1BA0D7",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${cert.color}20` }}
                >
                  <cert.icon
                    className="w-6 h-6"
                    style={{ color: cert.color }}
                  />
                </div>
                {cert.status === "Ongoing" && (
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                    Ongoing
                  </span>
                )}
                {cert.year && (
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {cert.year}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              {cert.description && (
                <p className="text-xs text-primary mt-2">{cert.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
