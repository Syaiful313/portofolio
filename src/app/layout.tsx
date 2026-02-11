import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PersonSchema, WebSiteSchema } from "@/components/JsonLd";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    default: "Muhammad Syaiful Mu'min | Portofolio",
    template: "%s | Muhammad Syaiful Mu'min",
  },
  description:
    "Saya Muhammad Syaiful Mu'min, Full-Stack Web Developer. Jelajahi portofolio saya dan temukan project web modern yang dibangun dengan teknologi terkini.",
  keywords: [
    "portofolio",
    "web developer",
    "full-stack developer",
    "Muhammad Syaiful Mu'min",
    "web developer Indonesia",
    "jasa pembuatan website",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "freelance developer",
  ],
  authors: [
    { name: "Muhammad Syaiful Mu'min", url: "https://muhammad-syaiful.site" },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://muhammad-syaiful.site",
  },
  openGraph: {
    type: "website",
    url: "https://muhammad-syaiful.site",
    siteName: "Portofolio – Muhammad Syaiful Mu'min",
    images: [
      {
        url: "/og/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Portofolio – Muhammad Syaiful Mu'min",
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
      <head>
        <PersonSchema />
        <WebSiteSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
