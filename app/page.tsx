import Cursor from "@components/cursor";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Hero from "@components/hero";
import Portfolio from "@components/portfolio";
import Skills from "@components/skills";
import Experience from "@components/experience";
import Contact from "@components/contact";

export default function Home() {
    return (
        <>
            <Cursor />
            <Navbar />
            <main className=' min-h-screen'>
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
