"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Puffer Fish Logo Component
const PufferFishLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Body */}
    <ellipse cx="32" cy="32" rx="20" ry="18" fill="url(#footerFishGradient)" />
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
      <linearGradient id="footerFishGradient" x1="12" y1="14" x2="52" y2="50">
        <stop offset="0%" stopColor="#67C090" />
        <stop offset="100%" stopColor="#26667F" />
      </linearGradient>
    </defs>
  </svg>
);

// Cinematic Footer Styles
const FOOTER_STYLES = `
@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.5)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.8)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(103, 192, 144, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(103, 192, 144, 0.05) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(103, 192, 144, 0.15) 0%, 
    rgba(38, 102, 127, 0.1) 40%, 
    transparent 70%
  );
}

.footer-glass-pill {
  background: linear-gradient(145deg, rgba(103, 192, 144, 0.1) 0%, rgba(38, 102, 127, 0.05) 100%);
  box-shadow: 
      0 10px 30px -10px rgba(0, 0, 0, 0.2), 
      inset 0 1px 1px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(103, 192, 144, 0.2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, rgba(103, 192, 144, 0.2) 0%, rgba(38, 102, 127, 0.1) 100%);
  border-color: rgba(103, 192, 144, 0.4);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
}

.footer-giant-bg-text {
  font-size: 20vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(103, 192, 144, 0.1);
  background: linear-gradient(180deg, rgba(103, 192, 144, 0.15) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, var(--foreground) 0%, rgba(103, 192, 144, 0.6) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px rgba(103, 192, 144, 0.3));
}
`;

// Magnetic Button Component
const MagneticButton = React.forwardRef<
  HTMLElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      as?: React.ElementType;
    }
>(({ className, children, as: Component = "button", ...props }, forwardedRef) => {
  const localRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const element = localRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const h = rect.width / 2;
        const w = rect.height / 2;
        const x = e.clientX - rect.left - h;
        const y = e.clientY - rect.top - w;

        gsap.to(element, {
          x: x * 0.4,
          y: y * 0.4,
          rotationX: -y * 0.15,
          rotationY: x * 0.15,
          scale: 1.05,
          ease: "power2.out",
          duration: 0.4,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          ease: "elastic.out(1, 0.3)",
          duration: 1.2,
        });
      };

      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <Component
      ref={(node: HTMLElement) => {
        (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef)
          (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </Component>
  );
});
MagneticButton.displayName = "MagneticButton";

// Marquee Item
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Cybersecurity Expert</span> <span className="text-primary/60">✦</span>
    <span>Penetration Testing</span> <span className="text-secondary/60">✦</span>
    <span>Network Security</span> <span className="text-primary/60">✦</span>
    <span>Ethical Hacking</span> <span className="text-secondary/60">✦</span>
    <span>Security Analysis</span> <span className="text-primary/60">✦</span>
  </div>
);

export function Footer() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FOOTER_STYLES }} />

      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-background text-foreground">
          {/* Ambient Light & Grid Background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            SOFIA
          </div>

          {/* Diagonal Sleek Marquee */}
          <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-border/30 bg-background/60 backdrop-blur-md py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            {/* Puffer Fish Logo */}
            <div className="mb-8">
              <PufferFishLogo className="w-24 h-24 animate-float" />
            </div>

            <h2
              ref={headingRef}
              className="text-4xl md:text-6xl lg:text-7xl font-black footer-text-glow tracking-tighter mb-8 text-center"
            >
              Let&apos;s Connect
            </h2>

            {/* Interactive Magnetic Links */}
            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <MagneticButton
                  as="a"
                  href="https://github.com/SOFIA-ASIF"
                  target="_blank"
                  className="footer-glass-pill px-8 py-4 rounded-full text-foreground font-bold text-sm md:text-base flex items-center gap-3 group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  GitHub
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="https://www.linkedin.com/in/sofia-asif/"
                  target="_blank"
                  className="footer-glass-pill px-8 py-4 rounded-full text-foreground font-bold text-sm md:text-base flex items-center gap-3 group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  LinkedIn
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="mailto:suufiyasif007@gmail.com"
                  className="footer-glass-pill px-8 py-4 rounded-full text-foreground font-bold text-sm md:text-base flex items-center gap-3 group"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  Email
                </MagneticButton>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 w-full mt-2">
                <MagneticButton
                  as={Link}
                  href="/"
                  className="footer-glass-pill px-6 py-3 rounded-full text-muted-foreground font-medium text-xs md:text-sm hover:text-foreground"
                >
                  Home
                </MagneticButton>
                <MagneticButton
                  as={Link}
                  href="/projects"
                  className="footer-glass-pill px-6 py-3 rounded-full text-muted-foreground font-medium text-xs md:text-sm hover:text-foreground"
                >
                  Projects
                </MagneticButton>
                <MagneticButton
                  as={Link}
                  href="/contact"
                  className="footer-glass-pill px-6 py-3 rounded-full text-muted-foreground font-medium text-xs md:text-sm hover:text-foreground"
                >
                  Contact
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-muted-foreground text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              {new Date().getFullYear()} Sofia Asif. All rights reserved.
            </div>

            {/* Made with Love Badge
            <div className="footer-glass-pill px-6 py-3 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default border-border/50">
              <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Crafted with
              </span>
              <span className="animate-footer-heartbeat text-sm md:text-base text-red-500">
                ❤
              </span>
              <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">
                in Karachi
              </span>
            </div> */}

            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center text-muted-foreground hover:text-foreground group order-3"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
