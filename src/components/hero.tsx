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
      className="min-h-screen flex items-center justify-center px-16 py-24 section-fade visible"
    >
      <div className="max-w-4xl">
        <p className="mb-8 text-blue-400 text-sm font-light tracking-wider uppercase">
          AVAILABLE FOR SELECT PROJECTS
        </p>

        <h2
          ref={titleRef}
          className="text-6xl font-light leading-tight mb-8"
        >
          I build <span className="font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">scalable systems</span> that
          solve real problems
        </h2>

        <div
          ref={subtitleRef}
          className="max-w-2xl space-y-6 text-lg text-muted-foreground"
        >
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-4">
            Lead Full-Stack Engineer with 6+ years crafting high-performance
            applications. I specialize in turning complex technical challenges
            into elegant, maintainable solutions.
          </p>
          <p className="text-lg text-gray-500 font-light leading-relaxed mb-12">
            From architecting microservices to optimizing database queries, I
            approach every problem with systems thinking and a focus on
            long-term sustainability.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium tracking-wide"
          >
            View Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border border-gray-700 hover:border-blue-500 transition-colors font-medium tracking-wide"
          >
            Get in Touch
          </Link>
        </div>

        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-border pt-12"
        >
          <div>
            <div className="text-4xl font-light text-blue-400 mb-2">
              {stats.yearsExperience}
            </div>
            <div className="text-sm text-gray-500">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-4xl font-light text-blue-400 mb-2">
              {stats.projectsDelivered}
            </div>
            <div className="text-sm text-gray-500">
              Projects Delivered
            </div>
          </div>
          <div>
            <div className="text-4xl font-light text-blue-400 mb-2">
              {stats.technologiesMastered}
            </div>
            <div className="text-sm text-gray-500">
              Technologies Mastered
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
