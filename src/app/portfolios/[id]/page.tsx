import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortofolioDetailPage from "@/features/portofolio/PortofolioDetail";
import { projects } from "@/utils/projects";

const BASE_URL = "https://muhammad-syaiful.site";

type PortfolioPageProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const project = projects.find((item) => item.id.toString() === params.id);

  if (!project) {
    return {
      title: "Project tidak ditemukan",
      description: "Proyek yang Anda cari tidak tersedia.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${project.title} | Portfolio Project Detail`;
  const description = project.description;
  const url = `${BASE_URL}/portfolios/${project.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [
        {
          url: project.image ? `${BASE_URL}${project.image}` : `${BASE_URL}/og/og-cover.png`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        project.image
          ? `${BASE_URL}${project.image}`
          : `${BASE_URL}/og/og-cover.png`,
      ],
    },
  };
}

export default function Portfolio({ params }: PortfolioPageProps) {
  const project = projects.find((item) => item.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  return <PortofolioDetailPage project={project} />;
}
