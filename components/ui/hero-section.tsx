"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  SiKalilinux, SiWireshark, SiSplunk, SiDocker, SiPython,
  SiLinux, SiMongodb, SiNextdotjs, SiTypescript
} from "react-icons/si";
import { FaShieldAlt, FaNetworkWired, FaServer, FaLock, FaCode, FaDatabase } from "react-icons/fa";

const iconConfigs = [
  { Icon: SiKalilinux, color: "#557C94" },
  { Icon: SiWireshark, color: "#1679A7" },
  { Icon: SiSplunk, color: "#65A637" },
  { Icon: FaShieldAlt, color: "#00D4AA" },
  { Icon: SiDocker, color: "#2496ED" },
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiLinux, color: "#FCC624" },
  { Icon: FaNetworkWired, color: "#00D4AA" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiNextdotjs, color: "#FFFFFF" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaServer, color: "#00D4AA" },
  { Icon: FaLock, color: "#FFD700" },
  { Icon: FaCode, color: "#E34F26" },
  { Icon: FaDatabase, color: "#336791" },
];

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
}

export default function HeroSection({ name, title, description }: HeroSectionProps) {
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative max-w-6xl mx-auto my-16 md:my-32 px-6 md:pl-10 flex flex-col md:flex-row items-center justify-between min-h-[30rem] border border-border bg-card overflow-hidden rounded-3xl">
      {/* Left side: Heading and Text */}
      <div className="w-full md:w-1/2 z-10 py-12 md:py-0">
        <p className="text-primary font-mono text-sm mb-2">Hello, I&apos;m</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-foreground">
          {name}
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation */}
      <div className="relative w-full md:w-1/2 h-[20rem] md:h-full flex items-center justify-center md:justify-start overflow-hidden">
        <div className="relative w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] md:translate-x-[50%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary shadow-lg shadow-primary/20 flex items-center justify-center">
            <FaShieldAlt className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-border"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-card rounded-full p-1.5 shadow-md border border-border"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <cfg.Icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: cfg.color }} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
