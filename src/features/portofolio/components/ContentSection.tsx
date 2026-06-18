import { Badge } from "@/components/ui/badge";
import type { Project } from "@/utils/projects";
import { ArrowUpRight, CheckCircle2, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";

const ContentSection = ({ project }: { project: Project }) => {
  return (
    <section className="section-shell pb-20">
      <div className="section-divider pb-10" />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="space-y-6">
          <div className="rounded-[8px] border border-[color:var(--color-olive-stone)] p-6">
            <p className="section-eyebrow">{`{ Category }`}</p>
            <h2 className="mt-3 text-2xl leading-[1.05] tracking-[-0.03em]">
              {project.category}
            </h2>
          </div>

          <div className="rounded-[8px] border border-[color:var(--color-olive-stone)] p-6">
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-[color:var(--color-pulse-green)]" />
              <h3 className="text-xl tracking-[-0.03em]">Technologies</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl !== "#" && (
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pill-link">
                Live demo <ExternalLink aria-hidden="true" />
              </Link>
            )}
            {project.githubUrl !== "#" && (
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="pill-link">
                Source code <ArrowUpRight aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {[
            ["Situation", project.details.situation],
            ["Task", project.details.task],
            ["Action", project.details.action],
            ["Result", project.details.result],
          ].map(([label, value]) => (
            <article
              key={label}
              className="rounded-[8px] border border-[color:var(--color-olive-stone)] p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[color:var(--color-pulse-green)]" />
                <h3 className="text-lg tracking-[-0.03em]">{label}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[color:var(--color-ash-gray)] sm:text-base">
                {value}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
