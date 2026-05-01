"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TextSplit } from "@/components/ui/split-text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { InteractiveGlobe } from "@/components/ui/interactive-globe";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type SubmissionState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailjsAutoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

function sanitizeName(value: string) {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
}

function sanitizeEmail(value: string) {
  return value.replace(/[\u0000-\u001F\u007F\s]/g, "").toLowerCase().trim();
}

function sanitizeMessage(value: string) {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]*\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n");
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSending, setIsSending] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    type: "idle",
    message: "",
  });

  const handleInputChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue = event.target.value;

      setFormData((current) => {
        if (field === "name") {
          return { ...current, name: sanitizeName(nextValue) };
        }

        if (field === "email") {
          return { ...current, email: sanitizeEmail(nextValue) };
        }

          return { ...current, message: nextValue };
      });

      if (submissionState.type !== "idle") {
        setSubmissionState({ type: "idle", message: "" });
      }
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = sanitizeName(formData.name);
    const email = sanitizeEmail(formData.email);
    const message = sanitizeMessage(formData.message).trim();

    if (!name || !email || !message) {
      setSubmissionState({
        type: "error",
        message: "Please fill in your name, email, and message.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmissionState({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey || !emailjsAutoReplyTemplateId) {
      setSubmissionState({
        type: "error",
        message:
          "Email delivery is not configured yet. Add the EmailJS environment variables first.",
      });
      return;
    }

    setIsSending(true);
    setSubmissionState({ type: "idle", message: "" });

    try {
      // Send email to admin
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          to_name: "Sofia Asif",
          to_email: "suufiyasif007@gmail.com",
          message,
        },
        {
          publicKey: emailjsPublicKey,
        }
      );

      // Send auto-reply to user
      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          from_name: "Sofia Asif",
          from_email: "suufiyasif007@gmail.com",
          to_name: name,
          to_email: email,
          reply_to: "suufiyasif007@gmail.com",
          message,
          // auto_reply_message: "Thank you for reaching out! I have received your message and will get back to you as soon as possible. I typically respond within 24-48 hours.",
        },
        {
          publicKey: emailjsPublicKey,
        }
      );

      setSubmissionState({
        type: "success",
        message: "Your message was sent successfully. Check your email for a confirmation.",
      });
      setFormData(initialFormState);
    } catch {
      setSubmissionState({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

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
          <div className="relative rounded-3xl border border-border overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d2137] to-[#071320]">
            {/* Globe - Positioned on the right side */}
            <div className="absolute top-1/2 right-[-100px] md:right-[-50px] lg:right-[50px] -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] opacity-70 md:opacity-90 pointer-events-none md:pointer-events-auto">
              <InteractiveGlobe 
                size={600}
                dotColor="rgba(103, 192, 144, ALPHA)"
                arcColor="rgba(38, 102, 127, 0.7)"
                markerColor="rgba(103, 192, 144, 1)"
                autoRotateSpeed={0.003}
              />
            </div>
            
            {/* Multiple ambient glows for depth - adjusted for right-side globe */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#67C090]/20 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-[10%] w-[300px] h-[300px] rounded-full bg-[#26667F]/30 blur-[80px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-[#124170]/20 blur-[60px] pointer-events-none" />

            <div className="flex flex-col md:flex-row min-h-[650px]">
              {/* Left Content - Contact Form */}
              <div className="flex-1 flex flex-col justify-center p-8 md:p-14 relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#67C090]/30 bg-[#67C090]/10 px-3 py-1 text-xs text-[#67C090] mb-6 w-fit backdrop-blur-sm">
                  <span className="size-1.5 rounded-full bg-[#67C090] animate-pulse" />
                  Available for opportunities
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Let&apos;s Connect
                </h2>
                <p className="text-[#9fcab5] text-sm mb-8 max-w-md">
                  Whether you have a question about cybersecurity, need help with a project, or just want to say hello, feel free to reach out.
                </p>

                <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-[#DDF4E7]">Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={handleInputChange("name")}
                      autoComplete="name"
                      maxLength={100}
                      required
                      className="bg-[#0d2137]/80 border-[#26667F]/50 text-white placeholder:text-[#67C090]/50 focus:border-[#67C090] backdrop-blur-sm" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-[#DDF4E7]">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      autoComplete="email"
                      maxLength={254}
                      required
                      className="bg-[#0d2137]/80 border-[#26667F]/50 text-white placeholder:text-[#67C090]/50 focus:border-[#67C090] backdrop-blur-sm" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-[#DDF4E7]">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange("message")}
                      maxLength={4000}
                      required
                      className="bg-[#0d2137]/80 border-[#26667F]/50 text-white placeholder:text-[#67C090]/50 focus:border-[#67C090] backdrop-blur-sm"
                    />
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#67C090] to-[#26667F] hover:from-[#67C090]/90 hover:to-[#26667F]/90 text-white font-semibold shadow-lg shadow-[#67C090]/20" 
                    type="submit"
                    disabled={isSending}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSending ? "Sending..." : "Send Message"}
                  </Button>
                  <p
                    className={`text-sm ${
                      submissionState.type === "success"
                        ? "text-[#67C090]"
                        : submissionState.type === "error"
                          ? "text-red-300"
                          : "text-[#9fcab5]"
                    }`}
                    aria-live="polite"
                  >
                    {submissionState.message ||
                      "Messages are sent directly through EmailJS after light client-side sanitization."}
                  </p>
                </form>

                {/* Contact Info */}
                <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-[#26667F]/30">
                  <div className="flex items-center gap-2">
                    <MailIcon className="w-4 h-4 text-[#67C090]" />
                    <span className="text-sm text-[#9fcab5]">suufiyasif007@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-[#67C090]" />
                    <span className="text-sm text-[#9fcab5]">Karachi, Pakistan</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Spacer for globe */}
              <div className="hidden md:flex flex-1 items-center justify-center relative z-0">
                {/* Globe is positioned absolutely */}
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
              href="https://github.com/SOFIA-ASIF"
              target="_blank"
              className="p-4 rounded-full border border-border bg-card hover:bg-gradient-to-r hover:from-[#67C090] hover:to-[#26667F] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-[#67C090]/30"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sofia-asif/"
              target="_blank"
              className="p-4 rounded-full border border-border bg-card hover:bg-gradient-to-r hover:from-[#67C090] hover:to-[#26667F] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-[#67C090]/30"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:suufiyasif007@gmail.com"
              className="p-4 rounded-full border border-border bg-card hover:bg-gradient-to-r hover:from-[#67C090] hover:to-[#26667F] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-[#67C090]/30"
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
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-[#67C090]/50 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">
                Available For
              </h3>
              <p className="text-muted-foreground text-sm">
                Security internships, freelance projects, and collaborative
                opportunities
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-[#67C090]/50 transition-colors">
              <h3 className="font-semibold text-foreground mb-2">
                Response Time
              </h3>
              <p className="text-muted-foreground text-sm">
                I typically respond within 24-48 hours during weekdays
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-[#67C090]/50 transition-colors">
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
