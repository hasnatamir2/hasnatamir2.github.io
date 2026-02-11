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

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

      <main className="lg:ml-72 md:pb-24 pb-14 lg:pb-0">
        <Hero personalInfo={siteSettings.data} stats={siteSettings?.data.stats} />
        <Projects projects={projects?.data} />
        <Experience experiences={experiences?.data} />
        <Skills skills={skills?.data} />
        <Contact personalInfo={siteSettings.data} />

        <Footer personalInfo={siteSettings.data} />
      </main>

      <MobileNav personalInfo={siteSettings.data} />
      <SanityLive />
    </div>
  );
}
