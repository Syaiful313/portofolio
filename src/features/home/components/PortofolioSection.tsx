"use client";

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
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      className="relative mx-4 overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900 py-32 text-[#d9c5a7] md:mx-0"
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
                  <Link
                    href={`/portfolios/${project.id}`}
                    passHref
                    legacyBehavior
                  >
                    <Button
                      variant="outline"
                      className="rounded-xl border-[#d9c5a7] hover:bg-[#d9c5a7]/20"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
