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
    default: "Mohammed Al-Najjar | Next.js & AI Engineer",
    template: "%s | Mohammed Al-Najjar",
  },
  description: "Portfolio of Mohammed Al-Najjar, featuring web development tools, Python libraries, and recent software projects.",
  keywords: ["Mohammed Al-Najjar", "Portfolio", "Full-Stack Developer", "Python Developer", "AI Engineer", "Next.js", "React"],
  authors: [{ name: "Mohammed Al-Najjar" }],
  creator: "Mohammed Al-Najjar",
  metadataBase: new URL("https://mohammedalnajjar.pages.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammedalnajjar.pages.dev",
    title: "Mohammed Al-Najjar | Portfolio",
    description: "Explore my recent projects, technical stack, and software development journey.",
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