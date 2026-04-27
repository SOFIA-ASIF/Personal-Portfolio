"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactCard } from "@/components/ui/contact-card";
import { TextSplit } from "@/components/ui/split-text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedDock } from "@/components/ui/animated-dock";

export default function ContactPage() {
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
              Get In Touch
            </TextSplit>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              Have a project in mind or want to discuss cybersecurity? I&apos;d
              love to hear from you.
            </p>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactCard
              title="Let&apos;s Connect"
              description="Whether you have a question about cybersecurity, need help with a project, or just want to say hello, feel free to reach out. I typically respond within 24 hours."
              className="rounded-xl"
              contactInfo={[
                {
                  icon: MailIcon,
                  label: "Email",
                  value: "suufiyasif007@gmail.com",
                },
                {
                  icon: PhoneIcon,
                  label: "Phone",
                  value: "+92 321 5893959",
                },
                {
                  icon: MapPinIcon,
                  label: "Location",
                  value: "Karachi, Pakistan",
                },
              ]}
            >
              <form className="w-full space-y-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                  />
                </div>
                <Button className="w-full" type="button">
                  Send Message
                </Button>
              </form>
            </ContactCard>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Or connect with me on social media
            </p>
            <div className="flex justify-center">
              <AnimatedDock
                items={[
                  {
                    link: "https://github.com/sofiaasif",
                    target: "_blank",
                    Icon: <Github size={20} />,
                    label: "GitHub",
                  },
                  {
                    link: "https://linkedin.com/in/sofiaasif",
                    target: "_blank",
                    Icon: <Linkedin size={20} />,
                    label: "LinkedIn",
                  },
                  {
                    link: "mailto:suufiyasif007@gmail.com",
                    Icon: <MailIcon size={20} />,
                    label: "Email",
                  },
                ]}
              />
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">
                Available For
              </h3>
              <p className="text-muted-foreground text-sm">
                Security internships, freelance projects, and collaborative
                opportunities
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">
                Response Time
              </h3>
              <p className="text-muted-foreground text-sm">
                I typically respond within 24-48 hours during weekdays
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Time Zone</h3>
              <p className="text-muted-foreground text-sm">
                Pakistan Standard Time (PKT) - UTC+5
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
