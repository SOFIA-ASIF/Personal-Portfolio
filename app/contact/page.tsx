"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TextSplit } from "@/components/ui/split-text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { InteractiveGlobe } from "@/components/ui/interactive-globe";

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

          {/* Main Content with Globe Background */}
          <div className="relative rounded-3xl border border-border bg-card overflow-hidden">
            {/* Globe Background */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 md:opacity-50 pointer-events-none md:pointer-events-auto">
              <InteractiveGlobe size={600} />
            </div>
            
            {/* Ambient glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#67C090]/10 blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row min-h-[600px]">
              {/* Left Content - Contact Form */}
              <div className="flex-1 flex flex-col justify-center p-8 md:p-14 relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground mb-6 w-fit">
                  <span className="size-1.5 rounded-full bg-[#67C090] animate-pulse" />
                  Available for opportunities
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Let&apos;s Connect
                </h2>
                <p className="text-muted-foreground text-sm mb-8 max-w-md">
                  Whether you have a question about cybersecurity, need help with a project, or just want to say hello, feel free to reach out.
                </p>

                <form className="space-y-4 max-w-md">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="Your name" className="bg-background" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="bg-background" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={4}
                      className="bg-background"
                    />
                  </div>
                  <Button className="w-full" type="button" style={{ backgroundColor: '#124170' }}>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                {/* Contact Info */}
                <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-border">
                  <div className="flex items-center gap-2">
                    <MailIcon className="w-4 h-4 text-[#67C090]" />
                    <span className="text-sm text-muted-foreground">suufiyasif007@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-[#67C090]" />
                    <span className="text-sm text-muted-foreground">Karachi, Pakistan</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Globe visible on larger screens */}
              <div className="hidden md:flex flex-1 items-center justify-center relative z-0">
                {/* Globe is positioned absolutely covering this area */}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex justify-center gap-4"
          >
            <Link
              href="https://github.com/sofiaasif"
              target="_blank"
              className="p-4 rounded-full border border-border bg-card hover:bg-[#124170] hover:text-white hover:border-[#124170] transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/sofiaasif"
              target="_blank"
              className="p-4 rounded-full border border-border bg-card hover:bg-[#124170] hover:text-white hover:border-[#124170] transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:suufiyasif007@gmail.com"
              className="p-4 rounded-full border border-border bg-card hover:bg-[#124170] hover:text-white hover:border-[#124170] transition-all duration-300"
            >
              <MailIcon className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
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
