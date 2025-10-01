import RightButtons from "./components/common/RightButtons";
import GithubButton from "./components/common/GithubButton";
import Navbar from "./components/common/Navbar/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResumeDownloadButton from "./components/common/Navbar/ResumeDownloadButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nevil Krishna K | Frontend Engineer & React Developer",
  description:
    "Portfolio of Nevil Krishna K, a frontend engineer specializing in React.js, high-performance UIs, and open-source projects.",
  keywords: [
    "Nevil Krishna K",
    "React Developer",
    "Frontend Engineer",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Nevil Krishna K | React Developer",
    description:
      "Frontend engineer portfolio specializing in React.js and performance optimization.",
    url: "https://www.nevil.dev",
    siteName: "Nevil Krishna Portfolio",
    images: [
      {
        url: "https://www.nevil.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nevil Krishna Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nevil Krishna K | React Developer",
    description:
      "Frontend engineer portfolio specializing in React.js and performance optimization.",
    images: ["https://www.nevil.dev/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`text-primary bg-background ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar>
          <ResumeDownloadButton />
        </Navbar>
        {children}
        <GithubButton />
        <RightButtons />
      </body>
    </html>
  );
}
