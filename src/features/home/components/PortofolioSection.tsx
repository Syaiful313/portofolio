import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import PortfolioMotionLayer from "./portfolio/PortfolioMotionLayer";
import PortfolioReveal from "./portfolio/PortfolioReveal";

const PortfolioSection = () => {
  return (
    <section
      id="portfolios"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900 px-4 py-32 text-[#d9c5a7] md:px-6 lg:px-0"
    >
      <PortfolioMotionLayer />

      <div className="container relative mx-auto">
        <PortfolioReveal className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-3xl lg:text-4xl">
            My Portfolio
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-[#d9c5a7]"></div>
          <p className="mx-auto mb-8 max-w-2xl font-light text-foreground/80">
            Explore my recent projects showcasing my expertise in full-stack web
            development. Each project demonstrates my problem-solving approach
            and technical skills.
          </p>
        </PortfolioReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <PortfolioReveal key={project.id} delay={index * 0.1}>
              <Card className="h-full overflow-hidden border-none shadow-md shadow-[#d9c5a7] transition-all hover:shadow-lg hover:shadow-[#d9c5a7]">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    height={600}
                    width={800}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2 font-sans text-[#d9c5a7]/90">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="rounded-full border-[#d9c5a7]/80 font-sans"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Link href={`/portfolios/${project.id}`}>
                    <Button
                      variant="outline"
                      className="rounded-xl border-[#d9c5a7] hover:bg-[#d9c5a7]/20"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </PortfolioReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
