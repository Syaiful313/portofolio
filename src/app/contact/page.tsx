import type { Metadata } from "next";
import ContactPage from "@/features/contact";

const CONTACT_URL = "https://muhammad-syaiful.site/contact";
const title = "Hubungi Saya - Kolaborasi & Proyek Web";
const description =
  "Hubungi Muhammad Syaiful Mu'min untuk kolaborasi, proyek freelance, atau konsultasi pembuatan website. Full-stack developer Next.js, TypeScript, dan Tailwind CSS.";
const ogImage = "https://muhammad-syaiful.site/og/og-cover.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: CONTACT_URL },
  openGraph: {
    type: "website",
    url: CONTACT_URL,
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
  return <ContactPage />;
};

export default Page;
