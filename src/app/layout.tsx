import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navigation/navbar";
import { ScrollProvider } from "../context/scroll-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mohammed Al-Najjar | Software Engineer & Data Specialist",
    template: "%s | Mohammed Al-Najjar",
  },
  description: "Welcome! I'm Mohammed Al-Najjar, an enthusiastic Software Engineer & Data Specialist bringing fresh ideas to the web. Explore my dev journey, projects, and let's have a chat!",
  keywords: ["Mohammed Al-Najjar", "Portfolio", "Full-Stack Developer", "Python Developer", "Data and AI", "Data Analysis", "Data Scientist", "Next.js", "React"],
  authors: [{ name: "Mohammed Al-Najjar" }],
  creator: "Mohammed Al-Najjar",
  metadataBase: new URL("https://mohammedalnajjar.site"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammedalnajjar.site",
    title: "Mohammed Al-Najjar | Portfolio",
    description: "Welcome! I'm Mohammed Al-Najjar, an enthusiastic Software Engineer & Data Specialist bringing fresh ideas to the web. Explore my dev journey, projects, and let's have a chat!",
    siteName: "Mohammed Al-Najjar Portfolio",
    images: [
      {
        url: "/images/profile.webp", // Put a default share image in your /public folder
        width: 1200,
        height: 630,
        alt: "Mohammed Al-Najjar Portfolio Preview",
      },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="flex flex-col">
        <ScrollProvider>
          <Navbar />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}