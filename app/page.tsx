import Cursor from "@components/cursor";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
    return (
        <>
            <Cursor />
            <Navbar />
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>
                hello world
            </main>
            <Footer />
        </>
    );
}
