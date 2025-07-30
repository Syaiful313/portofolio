import { CheckCircle, Code, ExternalLink, Target, Zap } from "lucide-react";
import Link from "next/link";

const ContentSection = ({ project }: { project: any }) => {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        {/* Category and Live URL Section */}
        <div className="mb-12 flex flex-col items-start justify-between border-b border-[#d9c5a7]/20 pb-8 md:flex-row md:items-center">
          <div>
            <span className="mb-2 inline-block rounded-full bg-[#d9c5a7]/10 px-4 py-2 text-sm font-medium uppercase tracking-wider text-[#d9c5a7]/80">
              {project.category}
            </span>
            <h2 className="text-2xl font-bold md:text-3xl">Project Details</h2>
          </div>

          {project.liveUrl !== "#" && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="group mt-4 flex items-center gap-2 rounded-lg bg-[#d9c5a7] px-6 py-3 font-medium text-[#1a1a1a] transition-all duration-300 hover:bg-[#d9c5a7]/90 hover:shadow-lg md:mt-0"
            >
              <span>View Live Demo</span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Technologies Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#d9c5a7]/10 p-2">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Technologies Used</h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.technologies.map((tech: string, index: number) => (
                <div
                  key={index}
                  className="group rounded-lg border border-[#d9c5a7]/20 bg-[#d9c5a7]/5 p-3 text-center transition-all duration-300 hover:border-[#d9c5a7]/40 hover:bg-[#d9c5a7]/10 hover:shadow-md"
                >
                  <span className="text-sm font-medium text-[#d9c5a7]/90 group-hover:text-[#d9c5a7]">
                    {tech}
                  </span>
                </div>
              ))}
            </div>

            {/* GitHub Link */}
            {project.githubUrl !== "#" && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="inline-flex items-center gap-2 text-[#d9c5a7]/70 transition-colors hover:text-[#d9c5a7]"
              >
                <Code className="h-4 w-4" />
                <span>View Source Code</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            )}
          </div>

          {/* Project Details Section */}
          <div className="space-y-8">
            {/* Situation */}
            <div className="group">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2">
                  <Target className="h-5 w-5 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-[#d9c5a7]">
                  Situation
                </h4>
              </div>
              <p className="leading-relaxed text-[#d9c5a7]/80 transition-colors group-hover:text-[#d9c5a7]/90">
                {project.details.situation}
              </p>
            </div>

            {/* Task */}
            <div className="group">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-yellow-500/10 p-2">
                  <Zap className="h-5 w-5 text-yellow-400" />
                </div>
                <h4 className="text-lg font-semibold text-[#d9c5a7]">Task</h4>
              </div>
              <p className="leading-relaxed text-[#d9c5a7]/80 transition-colors group-hover:text-[#d9c5a7]/90">
                {project.details.task}
              </p>
            </div>

            {/* Action */}
            <div className="group">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-purple-500/10 p-2">
                  <Code className="h-5 w-5 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-[#d9c5a7]">Action</h4>
              </div>
              <p className="leading-relaxed text-[#d9c5a7]/80 transition-colors group-hover:text-[#d9c5a7]/90">
                {project.details.action}
              </p>
            </div>

            {/* Result */}
            <div className="group">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-green-500/10 p-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-[#d9c5a7]">Result</h4>
              </div>
              <p className="leading-relaxed text-[#d9c5a7]/80 transition-colors group-hover:text-[#d9c5a7]/90">
                {project.details.result}
              </p>
            </div>
          </div>
        </div>

        {/* Live URL at bottom for mobile */}
        {project.liveUrl !== "#" && (
          <div className="mt-12 block md:hidden">
            <Link
              href={project.liveUrl}
              target="_blank"
              className="group flex w-full items-center justify-center gap-2 rounded-lg border border-[#d9c5a7]/30 bg-transparent px-6 py-4 font-medium text-[#d9c5a7] transition-all duration-300 hover:border-[#d9c5a7] hover:bg-[#d9c5a7]/5"
            >
              <span>View Live Demo</span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
