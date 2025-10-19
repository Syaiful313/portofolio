import type { Metadata } from "next";
import HomePage from "@/features/home";

const HOME_URL = "https://muhammad-syaiful.site";

const title = "Full-Stack Web Developer Indonesia";
const description =
  "Portofolio Muhammad Syaiful Mu'min, full-stack web developer Next.js & TypeScript yang membangun aplikasi modern dengan performa tinggi.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: HOME_URL },
  keywords: [
    "Muhammad Syaiful Mu'min",
    "Full-Stack Web Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Software Engineer Indonesia",
  ],
  openGraph: {
    type: "website",
    url: HOME_URL,
    title,
    description,
    siteName: "Portfolio – Muhammad Syaiful Mu'min",
    images: [
      {
        url: `${HOME_URL}/og/og-cover.png`,
        width: 1200,
        height: 630,
        alt: "Portfolio – Muhammad Syaiful Mu'min",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${HOME_URL}/og/og-cover.png`],
  },
};

const page = () => {
  return <HomePage />;
};

export default page;
