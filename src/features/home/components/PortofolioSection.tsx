import { Badge } from "@/components/ui/badge";
import { projects } from "@/utils/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const accentByIndex = [
  "text-[color:var(--color-candy-pink)]",
  "text-[color:var(--color-ember-orange)]",
  "text-[color:var(--color-pulse-green)]",
  "text-[color:var(--color-electric-violet)]",
  "text-[color:var(--color-signal-blue)]",
  "text-[color:var(--color-lime-flash)]",
];

const PortfolioSection = () => {
  return (
    <section id="portfolios" className="scroll-mt-24">
      <div className="section-shell py-20 sm:py-24">
        <div className="section-divider pb-10" />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="curly-label">{`{ Selected projects }`}</p>
            <h2 className="text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Project yang saya pilih bukan cuma visual, tapi juga menunjukkan
              cara saya berpikir soal sistem dan detail.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[color:var(--color-ash-gray)] sm:text-base">
            Setiap kartu di bawah dirancang seperti studi kasus ringkas: ada
            konteks, teknologi, dan arah implementasi yang jelas.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {projects.map((project, index) => {
            const accentClass = accentByIndex[index % accentByIndex.length];

            return (
              <article
                key={project.id}
                className="grid gap-0 overflow-hidden rounded-[8px] border border-[color:var(--color-olive-stone)] lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div className="relative min-h-[18rem] border-b border-[color:var(--color-olive-stone)] lg:border-b-0 lg:border-r">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="rounded-[8px] object-cover"
                  />
                  <div className="absolute inset-0 rounded-[8px] bg-[linear-gradient(180deg,rgba(14,16,15,0.06),rgba(14,16,15,0.66))]" />
                  <div className="absolute left-4 top-4 rounded-full border border-[color:var(--color-cream-glow)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-cream-glow)]">
                    {project.category}
                  </div>
                </div>

                <div className="space-y-6 p-6 sm:p-8">
                  <div className="space-y-3">
                    <p className="section-eyebrow">{`{ Project ${index + 1} }`}</p>
                    <h3 className={`text-3xl leading-[1] tracking-[-0.04em] ${accentClass}`}>
                      {project.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-relaxed text-[color:var(--color-cream-glow)] sm:text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href={`/portfolios/${project.id}`} className="pill-link">
                      View details
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                    {project.liveUrl !== "#" && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-link"
                      >
                        Live site
                      </Link>
                    )}
                    {project.githubUrl !== "#" && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill-link"
                      >
                        Code
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/contact" className="pill-link">
            Need a similar build?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
