import type { Metadata } from "next";

const CONTACT_URL = "https://muhammad-syaiful.site/contact";
const title = "Hubungi Muhammad Syaiful Mu'min";
const description =
  "Hubungi Muhammad Syaiful Mu'min untuk kolaborasi atau proyek full-stack Next.js, TypeScript, dan Tailwind.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: CONTACT_URL },
  openGraph: {
    type: "website",
    url: CONTACT_URL,
    title,
    description,
    images: [
      {
        url: "https://muhammad-syaiful.site/og/og-cover.png",
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
    images: ["https://muhammad-syaiful.site/og/og-cover.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
