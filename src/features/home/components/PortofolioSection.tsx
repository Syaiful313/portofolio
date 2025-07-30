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
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      top: number;
      animateX: number;
      animateY: number;
      scale: number;
      duration: number;
    }>
  >([]);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const particlesY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animateX: (Math.random() - 0.5) * 20,
        animateY: (Math.random() - 0.5) * 20,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 10 + 10,
      }));
    };

    setParticles(generateParticles());
  }, []);

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
      className="relative overflow-hidden bg-black py-32 text-[#d9c5a7]"
    >
      {/* Static Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(217, 197, 167, 0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Background Overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(217, 197, 167, 0.1) 25%, transparent 25%), 
                             linear-gradient(-45deg, rgba(217, 197, 167, 0.1) 25%, transparent 25%), 
                             linear-gradient(45deg, transparent 75%, rgba(217, 197, 167, 0.1) 75%), 
                             linear-gradient(-45deg, transparent 75%, rgba(217, 197, 167, 0.1) 75%)`,
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0px",
          }}
        />
      </motion.div>

      {/* Subtle Overlays */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-zinc-900/20" />

      {/* Floating Particles with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: particlesY }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute h-1 w-1 rounded-full bg-[#d9c5a7]/15"
            animate={{
              x: [0, particle.animateX, -particle.animateX, 0],
              y: [0, particle.animateY, -particle.animateY, 0],
              scale: [1, particle.scale, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Glowing orbs for ambient lighting */}
      <div className="bg-[#d9c5a7]/4 absolute left-1/4 top-1/4 h-56 w-56 rounded-full blur-3xl" />
      <div className="bg-[#c4b5a0]/4 absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
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
          <p className="mx-auto mb-8 max-w-2xl font-light text-[#d9c5a7]/80">
            Explore my recent projects showcasing my expertise in full-stack web
            development. Each project demonstrates my problem-solving approach
            and technical skills.
          </p>
        </motion.div>

        <div className="grid gap-8 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border border-[#d9c5a7]/20 bg-black/40 shadow-lg shadow-[#d9c5a7]/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#d9c5a7]/40 hover:shadow-xl hover:shadow-[#d9c5a7]/20">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    height={600}
                    width={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-[#d9c5a7]">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 font-sans text-[#d9c5a7]/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="rounded-full border border-[#d9c5a7]/30 bg-[#d9c5a7]/10 font-sans text-[#d9c5a7]/90 transition-colors hover:bg-[#d9c5a7]/20"
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
                      className="rounded-xl border-[#d9c5a7]/60 bg-transparent text-[#d9c5a7] transition-all hover:scale-105 hover:border-[#d9c5a7] hover:bg-[#d9c5a7]/20"
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
