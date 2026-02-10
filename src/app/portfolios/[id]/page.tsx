import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbSchema, ProjectSchema } from "@/components/JsonLd";
import PortofolioDetailPage from "@/features/portofolio/PortofolioDetail";
import { projects } from "@/utils/projects";

const BASE_URL = "https://muhammad-syaiful.site";

// --- Tipe untuk generateMetadata (params: Promise)
type MetadataProps = { params: Promise<{ id: string }> };

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id.toString() === id);

  if (!project) {
    return {
      title: "Project tidak ditemukan",
      description: "Proyek yang Anda cari tidak tersedia.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${project.title} – Proyek ${project.category === "fullstack" ? "Full-Stack" : "Frontend"}`;
  const description = `${project.description} Dibangun dengan ${project.technologies.slice(0, 3).join(", ")}. Lihat detail proyek oleh Muhammad Syaiful Mu'min.`;
  const url = `${BASE_URL}/portfolios/${project.id}`;
  const ogImage = project.image
    ? `${BASE_URL}${project.image}`
    : `${BASE_URL}/og/og-cover.png`;

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      project.title,
      ...project.technologies,
      project.category,
      "Muhammad Syaiful Mu'min",
      "web developer Indonesia",
    ],
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Portofolio – Muhammad Syaiful Mu'min",
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// --- Tipe untuk PAGE component (params: Promise)
type PageProps = { params: Promise<{ id: string }> };

export default async function Portfolio({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id.toString() === id);
  if (!project) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Beranda", url: BASE_URL },
          { name: "Portofolio", url: `${BASE_URL}/#portfolios` },
          { name: project.title, url: `${BASE_URL}/portfolios/${project.id}` },
        ]}
      />
      <ProjectSchema projectId={project.id} />
      <PortofolioDetailPage project={project} />
    </>
  );
}

// (opsional) SSG bila perlu:
export async function generateStaticParams() {
  const ids = projects.map((p) => p.id.toString());
  return ids.map((id) => ({ id }));
}
