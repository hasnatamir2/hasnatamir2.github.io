import "@styles/globals.css";
import { Inter } from "next/font/google";
import GoogleAnaltyics from "./components/common/google-analtyics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hasnat - Devfolio",
  description: "All the things I wish to share with you are here",
  keywords: [
    "Hasnat Amir",
    "Full Stack Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Web Development",
    "Web Developer",
    "ReactJs",
    "NodeJs",
    "MERN",
  ],
  authors: [
    {
      name: "Hasnat Amir",
      url: "https://hasnat.dev",
    },
  ],
  colorScheme: "dark",
  themeColor: "#8E54E9",
  manifest: "/site.webmanifest",
  creator: "Hasnat Amir",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/png" },
      new URL("/favicon.ico", "https://hasnatdev.com"),
    ],
    apple: { url: "/favicon.ico", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    type: "website",
    title: "Hasnat - Devfolio",
    description: "All the things I wish to share with you are here",
    url: "https://hasnat.dev",
    siteName: "Hasnat - Devfolio",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/duiggbjad/image/upload/v1684662792/hasnat-devfolio_j7hehj.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasnat - Devfolio",
    description: "All the things I wish to share with you are here",
    site: "@hasnatamir2",
    creator: "@hasnatamir2",
    images: [
      {
        url: "https://res.cloudinary.com/duiggbjad/image/upload/v1684662792/hasnat-devfolio_j7hehj.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnaltyics MEASUREMENTID={"G-X782FHVLGM"} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
