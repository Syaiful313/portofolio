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
    <main className="min-h-screen bg-gradient-to-b from-black via-black to-zinc-900 text-[#d9c5a7]">
      <HeroSection project={project} />
      <ContentSection project={project} />

      {/* Related Projects Section */}
      <section className="container mx-auto max-w-6xl px-4 pb-20">
        <div className="border-t border-[#d9c5a7]/20 pt-16">
          <h2 className="mb-8 font-serif text-2xl font-bold md:text-3xl">
            Proyek Lainnya
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                href={`/portfolios/${p.id}`}
                className="group overflow-hidden rounded-xl border border-[#d9c5a7]/15 bg-black/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d9c5a7]/20"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={p.title}
                    width={400}
                    height={225}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-[#d9c5a7]">
                    {p.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-[#d9c5a7]/70">
                    {p.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/#portfolios"
              className="inline-block rounded-full border border-[#d9c5a7]/40 px-6 py-3 text-sm font-medium text-[#d9c5a7] transition-all hover:bg-[#d9c5a7]/10"
            >
              Lihat Semua Proyek
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortofolioDetailPage;
