import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {GoogleAnalytics} from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhammad Syaiful Mu'min | Portfolio",
  description:
    "Personal portfolio and professional showcase of Muhammad Syaiful Mu'min, featuring web development projects, skills, and experience",
  keywords: [
    "Muhammad Syaiful Mu'min",
    "web developer",
    "portfolio",
    "frontend developer",
    "full stack developer",
    "React developer",
    "Next.js developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
      <GoogleAnalytics gaId="G-WXKZ979N81" />
    </html>
  );
}
