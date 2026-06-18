import type { Project } from "@/utils/projects";
import Image from "next/image";

const HeroSection = ({ project }: { project: Project }) => (
  <section className="section-shell pb-10 pt-28 sm:pt-32 lg:pt-36">
    <div className="space-y-4">
      <p className="curly-label">{`{ Project detail }`}</p>
      <h1 className="max-w-4xl text-4xl leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
        {project.title}
      </h1>
      <p className="max-w-2xl text-base leading-relaxed text-[color:var(--color-ash-gray)] sm:text-lg">
        {project.description}
      </p>
    </div>

    <div className="relative mt-8 overflow-hidden rounded-[8px] border border-[color:var(--color-olive-stone)]">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={1152}
        height={648}
        sizes="(min-width: 1152px) 1120px, calc(100vw - 2rem)"
        priority
        className="aspect-video w-full object-cover"
      />
    </div>
  </section>
);

export default HeroSection;
