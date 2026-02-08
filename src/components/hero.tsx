"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { stats } from "../lib/data";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(statsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.4,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 section-fade visible"
    >
      <div className="max-w-4xl">
        <p className="mb-6 text-blue-400 text-xs font-light tracking-wider uppercase sm:mb-8 sm:text-sm">
          AVAILABLE FOR SELECT PROJECTS
        </p>

        <h2
          ref={titleRef}
          className="text-3xl font-light leading-tight mb-6 sm:text-4xl sm:mb-8 lg:text-6xl"
        >
          I build <span className="font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">scalable systems</span> that
          solve real problems
        </h2>

        <div
          ref={subtitleRef}
          className="max-w-2xl space-y-5 text-base text-muted-foreground sm:space-y-6 sm:text-lg"
        >
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-4 sm:text-xl">
            Lead Full-Stack Engineer with 6+ years crafting high-performance
            applications. I specialize in turning complex technical challenges
            into elegant, maintainable solutions.
          </p>
          <p className="text-base text-muted-foreground font-light leading-relaxed mb-10 sm:text-lg sm:mb-12">
            From architecting microservices to optimizing database queries, I
            approach every problem with systems thinking and a focus on
            long-term sustainability.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4">
          <Link
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm font-medium tracking-wide sm:px-8 sm:py-4 sm:text-base"
          >
            View Work
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 border border-border hover:border-primary transition-colors text-sm font-medium tracking-wide sm:px-8 sm:py-4 sm:text-base"
          >
            Get in Touch
          </Link>
        </div>

        <div
          ref={statsRef}
          className="mt-12 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:mt-16 sm:grid-cols-3 sm:gap-8 sm:pt-10 lg:mt-20 lg:pt-12"
        >
          <div>
            <div className="text-3xl font-light text-blue-400 mb-2 sm:text-4xl">
              {stats.yearsExperience}
            </div>
            <div className="text-xs text-muted-foreground sm:text-sm">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-3xl font-light text-blue-400 mb-2 sm:text-4xl">
              {stats.projectsDelivered}
            </div>
            <div className="text-xs text-muted-foreground sm:text-sm">
              Projects Delivered
            </div>
          </div>
          <div>
            <div className="text-3xl font-light text-blue-400 mb-2 sm:text-4xl">
              {stats.technologiesMastered}
            </div>
            <div className="text-xs text-muted-foreground sm:text-sm">
              Technologies Mastered
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-12">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
