import type { Metadata } from "next";
import { BreadcrumbSchema, CollectionPageSchema } from "@/components/JsonLd";
import HomePage from "@/features/home";

const HOME_URL = "https://muhammad-syaiful.site";

const title = "Full-Stack Web Developer Indonesia";
const description =
  "Portofolio Muhammad Syaiful Mu'min, full-stack web developer di Indonesia. Ahli membangun aplikasi web modern dengan Next.js, React, dan TypeScript berperforma tinggi.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: HOME_URL },
  keywords: [
    "Muhammad Syaiful Mu'min",
    "Full-Stack Web Developer",
    "web developer Indonesia",
    "jasa pembuatan website",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "portofolio web developer",
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
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Beranda", url: HOME_URL }]} />
      <CollectionPageSchema />
      <HomePage />
    </>
  );
};

export default page;
