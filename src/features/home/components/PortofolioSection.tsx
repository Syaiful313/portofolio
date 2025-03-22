"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/projects";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects");
      if (element) {
        const position = element.getBoundingClientRect();
        setIsVisible(position.top < window.innerHeight && position.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900 py-32 text-[#d9c5a7] mx-4 md:mx-0"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="bg-grid-pattern absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#c4b5a0]/20"
          animate={{
            x: ["0%", `${Math.random() * 100}%`],
            y: ["0%", `${Math.random() * 100}%`],
            scale: [1, Math.random() + 0.5, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            My Portfolio
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-[#d9c5a7]"></div>
          <p className="mx-auto mb-8 max-w-2xl font-light text-foreground/80">
            Explore my recent projects showcasing my expertise in full-stack web
            development. Each project demonstrates my problem-solving approach
            and technical skills.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-2 font-sans">
            <Button
              variant="outline"
              onClick={() => setFilter("all")}
              className={`rounded-full border-[#d9c5a7] hover:bg-[#d9c5a7]/20 ${
                filter === "all"
                  ? "text-[#d9c5a7]"
                  : "bg-[#d9c5a7]/30 text-foreground hover:text-foreground"
              }`}
            >
              All Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => setFilter("frontend")}
              className={`rounded-full border-[#d9c5a7] hover:bg-[#d9c5a7]/20 ${
                filter === "frontend"
                  ? "text-[#d9c5a7]"
                  : "bg-[#d9c5a7]/30 text-foreground hover:text-foreground"
              }`}
            >
              Frontend
            </Button>
            <Button
              variant="outline"
              onClick={() => setFilter("backend")}
              className={`rounded-full border-[#d9c5a7] hover:bg-[#d9c5a7]/20 ${
                filter === "backend"
                  ? "text-[#d9c5a7]"
                  : "bg-[#d9c5a7]/30 text-foreground hover:text-foreground"
              }`}
            >
              Backend
            </Button>
            <Button
              variant="outline"
              onClick={() => setFilter("fullstack")}
              className={`rounded-full border-[#d9c5a7] hover:bg-[#d9c5a7]/20 ${
                filter === "fullstack"
                  ? "text-[#d9c5a7]"
                  : "bg-[#d9c5a7]/30 text-foreground hover:text-foreground"
              }`}
            >
              Full-Stack
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-md shadow-[#d9c5a7] transition-all hover:shadow-lg hover:shadow-[#d9c5a7]">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    height={600}
                    width={800}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">{project.title}</CardTitle>
                  <CardDescription className="font-sans text-[#d9c5a7]/90 line-clamp-2">
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
                <CardFooter className="flex justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        aria-label={`View details for ${project.title}`}
                        className="rounded-xl border-[#d9c5a7] hover:bg-[#d9c5a7]/20"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-h-[90vh] max-w-xl overflow-y-auto bg-black text-[#d9c5a7]/80">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="mt-2 font-sans text-base text-foreground/70">
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="mt-6">
                        {/* Project Image */}
                        <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={`Screenshot of ${project.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 768px"
                            priority
                            className="object-cover"
                          />
                        </div>

                        <div className="space-y-6">
                          {/* STAR Method Cards */}
                          <div className="grid grid-cols-1 gap-6">
                            <div className="rounded-lg bg-muted/50 p-4 transition-all hover:bg-muted/70">
                              <h4 className="mb-2 font-serif text-lg text-primary">
                                Situation
                              </h4>
                              <p className="text-foreground/80">
                                {project.details?.situation}
                              </p>
                            </div>

                            <div className="rounded-lg bg-muted/50 p-4 transition-all hover:bg-muted/70">
                              <h4 className="mb-2 font-serif text-lg text-primary">
                                Task
                              </h4>
                              <p className="text-foreground/80">
                                {project.details?.task}
                              </p>
                            </div>

                            <div className="rounded-lg bg-muted/50 p-4 transition-all hover:bg-muted/70">
                              <h4 className="mb-2 font-serif text-lg text-primary">
                                Action
                              </h4>
                              <p className="text-foreground/80">
                                {project.details?.action}
                              </p>
                            </div>

                            <div className="rounded-lg bg-muted/50 p-4 transition-all hover:bg-muted/70">
                              <h4 className="mb-2 font-serif text-lg text-primary">
                                Result
                              </h4>
                              <p className="text-foreground/80">
                                {project.details?.result}
                              </p>
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="mt-6">
                            <h4 className="mb-3 font-serif text-lg">
                              Technologies Used:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {(project.technologies || []).map(
                                (tech, techIndex) => (
                                  <Badge
                                    key={`${tech}-${techIndex}`}
                                    variant="secondary"
                                    className="text-sm"
                                  >
                                    {tech}
                                  </Badge>
                                ),
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="mt-8 flex items-center justify-between gap-4 border-t pt-4">
                          <DialogClose asChild>
                            <Button variant="outline">Close</Button>
                          </DialogClose>

                          <div className="flex gap-2">
                            {project.liveUrl && (
                              <Button variant="default" size="sm" asChild>
                                <Link
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label="View live demo"
                                >
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Live Demo
                                </Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
