import Sidebar from "../components/sidebar";
import Hero from "../components/hero";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";
import MobileNav from "../components/mobile-nav";
import {
  getExperiences,
  getProjects,
  getSiteSettings,
  getSkills,
} from "../sanity/lib/data";
import { SanityLive } from "../sanity/lib/live";
import Script from "next/script";

export default async function Home() {
  const [siteSettings, experiences, projects, skills] = await Promise.all([
    getSiteSettings(),
    getExperiences(),
    getProjects(),
    getSkills(),
  ]);

  return (

    <div className="relative">
      <div className="hidden lg:block">
        <Sidebar personalInfo={siteSettings.data} />
      </div>

      <main className="lg:ml-72 pb-24 lg:pb-0">
        <Hero personalInfo={siteSettings.data} stats={siteSettings?.data.stats} />
        <Experience experiences={experiences?.data} />
        <Projects projects={projects?.data} />
        <Skills skills={skills?.data} />
        <Contact personalInfo={siteSettings.data} />

        <Footer personalInfo={siteSettings.data} />
      </main>

      <MobileNav personalInfo={siteSettings.data} />
      <SanityLive />
      <Script
          id='theme-init'
          strategy='beforeInteractive'
          async
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var stored = localStorage.getItem("theme");
                var theme = stored || "system";
                var enableSystem = true;
                var defaultTheme = "dark";
                var resolved = theme;
                if (theme === "system") {
                  resolved = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
                }
                if (!stored && !enableSystem) resolved = defaultTheme;
                var root = document.documentElement;
                root.classList.remove("light", "dark");
                root.classList.add(resolved);
              } catch (e) {}
            })();
          `,
          }}
        />
    </div>
  );
}
