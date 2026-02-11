"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from 'next-themes'
import type { PersonalInfo } from "../types/content";
import Link from "next/link";
import Logo from "./logo";
import { GithubIcon, LinkedinIcon, EnvelopeIcon } from '@sanity/icons'

const navigation = [
  { name: "HOME", href: "#home" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "CONTACT", href: "#contact" },
];

export default function Sidebar({ personalInfo }: { personalInfo: PersonalInfo }) {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((nav) => nav.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col justify-between border-r border-border bg-background p-8">
      <div className="space-y-5">
        <div>
          <Logo variant='terminal' size={90} />
          <h1 className="text-2xl font-bold tracking-tight">
             {personalInfo.name}
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {personalInfo.title}
          </p>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground">
          {personalInfo.tagline}
        </p>

        <nav className="space-y-1 pt-4">
          {navigation.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-3 py-2 text-sm transition-colors text-muted-foreground ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <span
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground"
                  }`}
                />
                <span className="font-mono text-xs uppercase tracking-wider">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </Link>
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-6 w-6" />
          </Link>
          <Link
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <EnvelopeIcon className="h-6 w-6" />
          </Link>
        </div>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Toggle theme"
          role="button"
        >
          {theme === "dark" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
          <span className="font-mono text-xs">{theme === 'dark' ? 'Dark' : 'Light'} Mode</span>
        </button>
      </div>
    </aside>
  );
}
