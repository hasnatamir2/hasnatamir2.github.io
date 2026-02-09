"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import type { PersonalInfo } from "../types/content";
import { useTheme } from "./theme-provider";
import Logo from "./logo";
import { GithubIcon, LinkedinIcon, EnvelopeIcon } from '@sanity/icons'

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function MobileNav({ personalInfo }: { personalInfo: PersonalInfo }) {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-border bg-background/95 ">
      <div className="border-t border-blue-500 bg-background/95 px-4 py-3 backdrop-blur-sm sm:px-6 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium tracking-wide flex items-center gap-2">
            <Logo variant='terminal' size={50} /> {personalInfo.name}
          </div>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 border border-border px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
          >
            {open ? (
              <>
                <X className="h-4 w-4" />
                Close
              </>
            ) : (
              <>
                <Menu className="h-4 w-4" />
                Menu
              </>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-panel"
        className={`border-t border-border bg-background/95 px-4 backdrop-blur-sm transition-all duration-300 ${
          open ? "max-h-[70dvh] opacity-100 pt-4  pb-6" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="grid grid-cols-2 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
            Theme
          </button>
        </div>
      </div>
    </div>
  );
}
