"use client";

import { useEffect } from "react";
import Sidebar from "../components/sidebar";
import Hero from "../components/hero";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";

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
      <main className="lg:ml-72">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />

        {/* Footer */}
        <Footer />
      </main>

      {/* Mobile Navigation - Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 px-6 py-4 backdrop-blur-sm lg:hidden">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">Hasnat Amir</div>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">
            Menu
          </button>
        </div>
      </div>
    </div>
  );
}
