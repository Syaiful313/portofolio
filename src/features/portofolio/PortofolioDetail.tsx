import type { Project } from "@/utils/projects";
import { projects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import ContentSection from "./components/ContentSection";
import HeroSection from "./components/HeroSection";

const PortofolioDetailPage = ({ project }: { project: Project }) => {
  if (!project) return <div>Project not found</div>;

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="min-h-screen">
      <HeroSection project={project} />
      <ContentSection project={project} />

      <section className="section-shell pb-20">
        <div className="section-divider pb-10" />
        <div className="flex items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="curly-label">{`{ More work }`}</p>
            <h2 className="text-3xl leading-[1.05] tracking-[-0.04em]">
              Proyek lain yang bisa kamu lihat.
            </h2>
          </div>
          <Link href="/#portfolios" className="pill-link hidden sm:inline-flex">
            Back to projects
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {otherProjects.map((p) => (
            <Link
              key={p.id}
              href={`/portfolios/${p.id}`}
              className="group rounded-[8px] border border-[color:var(--color-olive-stone)] overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-2 p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ash-gray)]">
                  {p.category}
                </p>
                <h3 className="text-xl tracking-[-0.03em]">{p.title}</h3>
                <p className="line-clamp-2 text-sm leading-relaxed text-[color:var(--color-ash-gray)]">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PortofolioDetailPage;
