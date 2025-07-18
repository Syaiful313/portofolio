import Image from "next/image";

const HeroSection = ({ project }: { project: any }) => (
  <section className="container mx-auto px-4 pt-28 md:pt-36">
    <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
    <p className="mt-2 md:mt-4 text-sm md:text-lg">{project.description}</p>
    <Image
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      width={800}
      height={600}
      className="mt-8 w-full rounded-xl object-cover "
    />
  </section>
);

export default HeroSection;
