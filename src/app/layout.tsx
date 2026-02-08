import "@styles/globals.css";
import { Inter } from "next/font/google";
import GoogleAnalytics from "../components/google-analtyics";
import { ThemeProvider } from "../components/theme-provider";

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
  themeColor: "#2563eb",
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
  const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>

        {GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics MEASUREMENTID={GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
