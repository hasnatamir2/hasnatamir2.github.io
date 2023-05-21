import Cursor from "@/src/app/components/cursor";
import Navbar from "@/src/app/components/navbar";
import Footer from "@/src/app/components/footer";
import Hero from "@/src/app/components/hero";
import Portfolio from "@/src/app/components/portfolio";
import Skills from "@/src/app/components/skills";
import Experience from "@/src/app/components/experience";
import Contact from "@/src/app/components/contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className=" min-h-screen">
        <Hero />
        <Portfolio />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
