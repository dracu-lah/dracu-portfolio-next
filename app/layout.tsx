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
  title: "Nevil | DVLPR",
  description: "Portfolio website of a frontend developer",
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
