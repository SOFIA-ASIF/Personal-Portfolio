'use client';

import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  isOrbiter: boolean;
  orbitRadius: number;
  angle: number;
  speed: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
  update: (ctx: CanvasRenderingContext2D, center: { x: number; y: number }) => void;
}

interface CelestialOrbHeroProps {
  name: string;
  title: string;
  description: string;
}

const CelestialOrbHero = ({ name, title, description }: CelestialOrbHeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const createParticle = (x: number, y: number, radius: number, color: string, isOrbiter = false): Particle => {
      const particle: Particle = {
        x,
        y,
        radius,
        color,
        isOrbiter,
        orbitRadius: Math.random() * 150 + 100,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
        draw(ctx: CanvasRenderingContext2D) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.shadowBlur = 0;
        },
        update(ctx: CanvasRenderingContext2D, center: { x: number; y: number }) {
          if (this.isOrbiter) {
            this.angle += this.speed;
            this.x = center.x + Math.cos(this.angle) * this.orbitRadius;
            this.y = center.y + Math.sin(this.angle) * this.orbitRadius;
          }
          this.draw(ctx);
        }
      };
      return particle;
    };

    const centerPoint = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      targetX: canvas.width / 2,
      targetY: canvas.height / 2,
    };

    const init = () => {
      particles = [];
      // Center particle - using primary color #67C090
      particles.push(createParticle(centerPoint.x, centerPoint.y, 20, 'rgba(103, 192, 144, 0.9)'));
      // Orbiting particles - using color palette
      for (let i = 0; i < 50; i++) {
        const hue = Math.random() * 60 + 140; // Greenish-teal range
        particles.push(
          createParticle(
            0,
            0,
            Math.random() * 3 + 1,
            `hsl(${hue}, 50%, 55%)`,
            true
          )
        );
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      // Light background with trail effect
      ctx.fillStyle = 'rgba(221, 244, 231, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      centerPoint.targetX = mouse.x;
      centerPoint.targetY = mouse.y;
      centerPoint.x += (centerPoint.targetX - centerPoint.x) * 0.05;
      centerPoint.y += (centerPoint.targetY - centerPoint.y) * 0.05;

      particles[0].x = centerPoint.x;
      particles[0].y = centerPoint.y;
      particles[0].draw(ctx);

      for (let i = 1; i < particles.length; i++) {
        particles[i].update(ctx, centerPoint);
      }
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center text-center overflow-hidden" style={{ backgroundColor: '#DDF4E7' }}>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <main className="relative z-10 w-full px-4">
        <p className="font-mono text-sm mb-2" style={{ color: '#26667F' }}>Hello, I&apos;m</p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase" style={{ color: '#124170' }}>
          {name}
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold mt-2" style={{ color: '#67C090' }}>
          {title}
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-lg" style={{ color: '#26667F' }}>
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Button asChild size="lg" style={{ backgroundColor: '#124170', color: '#DDF4E7' }}>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" size="lg" asChild style={{ borderColor: '#124170', color: '#124170' }}>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CelestialOrbHero;
