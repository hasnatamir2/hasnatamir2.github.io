import Cursor from "@components/cursor";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";

export default function Home() {
    return (
        <>
            <Cursor />
            <Navbar />
            <main className=' min-h-screen'>
                <Hero />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}
