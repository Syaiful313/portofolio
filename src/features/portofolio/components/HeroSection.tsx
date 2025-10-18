import type { Project } from "@/utils/projects";
import Image from "next/image";

const HeroSection = ({ project }: { project: Project }) => (
  <section className="container mx-auto max-w-6xl px-4 pt-28 md:pt-36">
    <h1 className="text-4xl font-bold md:text-6xl">{project.title}</h1>
    <p className="mt-2 text-sm md:mt-4 md:text-lg">{project.description}</p>
    <Image
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      width={800}
      height={600}
      sizes="100vw"
      priority
      className="mt-8 w-full rounded-xl object-cover"
    />
  </section>
);

export default HeroSection;
