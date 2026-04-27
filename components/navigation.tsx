"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/sofiaasif", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/sofiaasif", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:suufiyasif007@gmail.com", icon: Mail, label: "Email" },
];

// Puffer Fish Logo Component
const PufferFishLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Body */}
    <ellipse cx="32" cy="32" rx="20" ry="18" fill="url(#fishGradient)" />
    {/* Spikes */}
    <circle cx="14" cy="24" r="3" fill="#67C090" />
    <circle cx="12" cy="32" r="3" fill="#67C090" />
    <circle cx="14" cy="40" r="3" fill="#67C090" />
    <circle cx="50" cy="24" r="3" fill="#67C090" />
    <circle cx="52" cy="32" r="3" fill="#67C090" />
    <circle cx="50" cy="40" r="3" fill="#67C090" />
    <circle cx="24" cy="16" r="2.5" fill="#67C090" />
    <circle cx="32" cy="14" r="2.5" fill="#67C090" />
    <circle cx="40" cy="16" r="2.5" fill="#67C090" />
    <circle cx="24" cy="48" r="2.5" fill="#67C090" />
    <circle cx="32" cy="50" r="2.5" fill="#67C090" />
    <circle cx="40" cy="48" r="2.5" fill="#67C090" />
    {/* Eyes */}
    <circle cx="26" cy="28" r="5" fill="white" />
    <circle cx="38" cy="28" r="5" fill="white" />
    <circle cx="27" cy="29" r="2.5" fill="#124170" />
    <circle cx="39" cy="29" r="2.5" fill="#124170" />
    {/* Mouth */}
    <ellipse cx="32" cy="38" rx="4" ry="2" fill="#26667F" />
    {/* Fins */}
    <ellipse cx="8" cy="32" rx="4" ry="6" fill="#26667F" />
    <ellipse cx="56" cy="32" rx="4" ry="6" fill="#26667F" />
    {/* Tail */}
    <path d="M52 32 L62 24 L62 40 Z" fill="#26667F" />
    <defs>
      <linearGradient id="fishGradient" x1="12" y1="14" x2="52" y2="50">
        <stop offset="0%" stopColor="#67C090" />
        <stop offset="100%" stopColor="#26667F" />
      </linearGradient>
    </defs>
  </svg>
);

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "border-b border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-lg" 
        : "bg-white/5 dark:bg-black/5 backdrop-blur-sm"
    )}>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-1 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm group-hover:scale-105 transition-transform">
            <PufferFishLogo className="w-10 h-10" />
          </div>
          <span className="font-bold text-xl text-foreground">Sofia Asif</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Nav Links */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-card border border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  pathname === link.href
                    ? "bg-[#124170] text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-1">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
          
          <Button asChild size="sm" style={{ backgroundColor: '#124170' }}>
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/20 bg-white/10 dark:bg-black/20 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            {/* Nav Links */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-[#124170] text-white"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 py-4 border-t border-border">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-full border border-border bg-card hover:bg-[#124170] hover:text-white hover:border-[#124170] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            <Button asChild className="w-full" style={{ backgroundColor: '#124170' }}>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Hire Me
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
