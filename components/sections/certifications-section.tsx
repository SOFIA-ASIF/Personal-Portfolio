"use client";

import { motion } from "framer-motion";
import { TextSplit } from "@/components/ui/split-text";
import { PlusCard } from "@/components/ui/plus-card";

const certifications = [
  {
    title: "Certified Ethical Hacker (CEH) Training",
    issuer: "NAVTTC",
    description: "Comprehensive training on ethical hacking methodologies, penetration testing, and vulnerability assessment.",
    status: "Ongoing",
    image: "/EC-council.jpeg",
  },
  {
    title: "CCNA Training",
    issuer: "Cisco Networking Academy",
    description: "Industry-recognized certification covering networking fundamentals, routing, switching, and security basics.",
    image: "/cCna.jpeg",
  },
  {
    title: "IBM Security Analyst Professional Certificate",
    issuer: "IBM",
    description: "Comprehensive 14-course program covering threat intelligence, incident response, and security operations.",
    image: "/IBM.jpeg",
  },
  {
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    description: "Foundation-level certification validating core cybersecurity knowledge and best practices.",
    year: "2024",
    image: "/CC.jpeg",
  },
  {
    title: "Network Security",
    issuer: "Cisco Networking Academy",
    description: "Specialized training in network security principles, firewall management, and secure network design.",
    image: "/cisco network sec badge.jpeg",
  },
  {
    title: "CyberOps Associate",
    issuer: "Cisco Networking Academy",
    description: "Security operations center fundamentals including monitoring, detection, and incident analysis.",
    image: "/Cyber Ops.jpeg",
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
                      {cert.image ? (
                        <img src={cert.image} alt={`${cert.title} badge`} className="w-8 h-8 object-contain" />
                      ) : null}
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
