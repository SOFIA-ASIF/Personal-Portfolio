import Link from "next/link";
import { Shield } from "lucide-react";
import { AnimatedDock } from "@/components/ui/animated-dock";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-full bg-gradient-to-tr from-[#67C090] to-[#26667F]">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">
              Sofia Asif
            </span>
          </Link>

          {/* Social Links Dock */}
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
                Icon: <Mail size={20} />,
                label: "Email",
              },
            ]}
          />

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            {currentYear} Sofia Asif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
