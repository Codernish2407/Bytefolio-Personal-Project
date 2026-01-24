"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

// Helper function to get CSS variable values
const getCssVar = (varName: string): string => {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
};

export const InteractiveBackground = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [themeColors, setThemeColors] = useState({ particle: '', line: '' });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const primaryHsl = getCssVar('--primary');
    const h = primaryHsl.split(' ')[0];

    if (h) {
      setThemeColors({
        particle: `hsla(${h}, 50%, 60%, 0.4)`,
        line: `hsla(${h}, 50%, 60%, 0.1)`,
      });
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isReducedMotion || !themeColors.particle) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150,
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      dx = 0;
      dy = 0;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.size = Math.random() * 1.5 + 1;
      }

      draw() {
        ctx!.fillStyle = themeColors.particle;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }

      update() {
        const distanceX = this.x - mouse.x;
        const distanceY = this.y - mouse.y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < mouse.radius) {
          const forceDirectionX = distanceX / distance;
          const forceDirectionY = distanceY / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          this.dx += forceDirectionX * force * 0.5;
          this.dy += forceDirectionY * force * 0.5;
        }

        this.dx += (this.originX - this.x) * 0.05;
        this.dy += (this.originY - this.y) * 0.05;

        this.dx *= 0.95;
        this.dy *= 0.95;

        this.x += this.dx;
        this.y += this.dy;
      }
    }

    const init = () => {
      particles = [];
      const density = 40;
      for (let x = 0; x < canvas.width; x += density) {
        for (let y = 0; y < canvas.height; y += density) {
          particles.push(new Particle(x, y));
        }
      }
    };

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      ctx.strokeStyle = themeColors.line;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 60) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        canvas.width = entry.contentRect.width;
        canvas.height = entry.contentRect.height;
        init();
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas.parentElement) {
        resizeObserver.unobserve(canvas.parentElement);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isReducedMotion, themeColors]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        'absolute inset-0 -z-20 h-full w-full',
        className
      )}
    />
  );
};
