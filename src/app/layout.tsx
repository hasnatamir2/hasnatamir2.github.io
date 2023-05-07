import "@styles/globals.css";
import { Inter } from "next/font/google";
import GoogleAnaltyics from "./components/common/google-analtyics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Hasnat - Devfolio",
    description: "All the things I wish to share with you are here",
    icons: []
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <GoogleAnaltyics GA_MEASUREMENT_ID={"G-X782FHVLGM"} />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
