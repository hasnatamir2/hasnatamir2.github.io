"use client";

import { useEffect } from "react";
import Sidebar from "../components/sidebar";
import Hero from "../components/hero";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";
import MobileNav from "../components/mobile-nav";

export default function Home() {
  useEffect(() => {
    // Smooth scroll polyfill for better cross-browser support
    if (typeof window !== "undefined") {
      const smoothScroll = (e: Event) => {
        const target = e.target as HTMLAnchorElement;
        if (target.hash) {
          e.preventDefault();
          const element = document.querySelector(target.hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      };

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", smoothScroll);
      });

      return () => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.removeEventListener("click", smoothScroll);
        });
      };
    }
  }, []);

  return (
    <div className="relative">
      {/* Sidebar - Hidden on mobile, sticky on desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="lg:ml-72 pb-24 lg:pb-0">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />

        {/* Footer */}
        <Footer />
      </main>

      {/* Mobile Navigation - Sticky bottom bar */}
      <MobileNav />
    </div>
  );
}
