import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-syaiful.site"),
  title: {
    default: "Muhammad Syaiful Mu'min | Portfolio",
    template: "%s | Muhammad Syaiful Mu'min",
  },
  description:
    "Portfolio full-stack web developer: Next.js, TypeScript, Tailwind, Express, Prisma, PostgreSQL.",
  openGraph: {
    type: "website",
    url: "https://muhammad-syaiful.site",
    siteName: "Portfolio – Muhammad Syaiful Mu'min",
    images: [
      {
        url: "/og/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Portfolio – Muhammad Syaiful Mu'min",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
      <GoogleAnalytics gaId="G-WXKZ979N81" />
      <Analytics />
    </html>
  );
}
