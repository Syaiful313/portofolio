import type { Metadata } from "next";
import { BreadcrumbSchema, CollectionPageSchema } from "@/components/JsonLd";
import HomePage from "@/features/home";

const HOME_URL = "https://muhammad-syaiful.site";

const title = "Full-Stack Web Developer Indonesia";
const description =
  "Portofolio Muhammad Syaiful Mu'min, full-stack web developer di Indonesia. Ahli membangun aplikasi web modern dengan Next.js, React, dan TypeScript berperforma tinggi.";
const ogImage = `${HOME_URL}/og/og-cover.png`;

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
    siteName: "Portofolio - Muhammad Syaiful Mu'min",
    locale: "id_ID",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Portofolio - Muhammad Syaiful Mu'min",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

const Page = () => {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Beranda", url: HOME_URL }]} />
      <CollectionPageSchema />
      <HomePage />
    </>
  );
};

export default Page;
