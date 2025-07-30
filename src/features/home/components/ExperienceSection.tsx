"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experiences } from "@/utils/experiences";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export default function Experience() {
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
      const element = document.getElementById("experience");
      if (element) {
        const position = element.getBoundingClientRect();
        setIsVisible(position.top < window.innerHeight && position.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
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
            Work Experience
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-[#d9c5a7]"></div>
          <p className="mx-auto max-w-2xl font-light text-[#d9c5a7]/80">
            My professional journey in web development, showcasing my growth and
            the diverse projects I've contributed to throughout my career.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-[#d9c5a7]/30 md:block"></div>

          <div className="space-y-6 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute left-1/2 top-0 z-10 hidden h-4 w-4 -translate-x-1/2 transform rounded-full bg-[#d9c5a7] md:block"></div>

                <div className="relative gap-8 md:grid md:grid-cols-2">
                  <div className="hidden md:block">
                    {index % 2 === 1 && (
                      <Card className="group h-full overflow-hidden border border-[#d9c5a7]/20 bg-black/40 shadow-lg shadow-[#d9c5a7]/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#d9c5a7]/40 hover:shadow-xl hover:shadow-[#d9c5a7]/20">
                        <CardContent className="p-6">
                          <CardTitle className="mb-1 text-right font-serif text-xl font-semibold text-[#d9c5a7]">
                            {exp.title}
                          </CardTitle>
                          <div className="mb-2 flex items-center justify-end">
                            <span className="mr-2 text-[#d9c5a7]/70">
                              {exp.company}
                            </span>
                            <Briefcase className="h-4 w-4 text-[#d9c5a7]" />
                          </div>
                          <div className="mb-4 flex items-center justify-end">
                            <span className="mr-2 text-[#d9c5a7]/70">
                              {exp.period}
                            </span>
                            <Calendar className="h-4 w-4 text-[#d9c5a7]" />
                          </div>
                          <CardDescription className="mb-4 text-right text-[#d9c5a7]/80">
                            {exp.description}
                          </CardDescription>
                          <h4 className="mb-2 text-right font-semibold text-[#d9c5a7]">
                            Teknologi:
                          </h4>
                          <div className="flex flex-wrap justify-end gap-2">
                            {exp.technologies.map((tech, techIndex) => (
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
                      </Card>
                    )}
                  </div>

                  <div className="col-start-2 hidden md:block">
                    {index % 2 === 0 && (
                      <Card className="group h-full overflow-hidden border border-[#d9c5a7]/20 bg-black/40 shadow-lg shadow-[#d9c5a7]/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#d9c5a7]/40 hover:shadow-xl hover:shadow-[#d9c5a7]/20">
                        <CardContent className="p-6">
                          <CardTitle className="mb-1 font-serif text-xl font-semibold text-[#d9c5a7]">
                            {exp.title}
                          </CardTitle>
                          <div className="mb-2 flex items-center">
                            <Briefcase className="mr-2 h-4 w-4 text-[#d9c5a7]" />
                            <span className="text-[#d9c5a7]/70">
                              {exp.company}
                            </span>
                          </div>
                          <div className="mb-4 flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-[#d9c5a7]" />
                            <span className="text-[#d9c5a7]/70">
                              {exp.period}
                            </span>
                          </div>
                          <CardDescription className="mb-4 text-[#d9c5a7]/80">
                            {exp.description}
                          </CardDescription>
                          <h4 className="mb-2 font-semibold text-[#d9c5a7]">
                            Teknologi:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
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
                      </Card>
                    )}
                  </div>

                  <div className="block w-full md:hidden">
                    <Card className="group h-full overflow-hidden border border-[#d9c5a7]/20 bg-black/40 shadow-lg shadow-[#d9c5a7]/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-[#d9c5a7]/40 hover:shadow-xl hover:shadow-[#d9c5a7]/20">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-[#d9c5a7]">
                          {exp.title}
                        </CardTitle>
                        <div className="flex items-center">
                          <Briefcase className="mr-2 h-4 w-4 text-[#d9c5a7]" />
                          <span className="text-[#d9c5a7]/70">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-[#d9c5a7]" />
                          <span className="text-[#d9c5a7]/70">
                            {exp.period}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-3 text-[#d9c5a7]/80">
                          {exp.description}
                        </CardDescription>
                        <h4 className="mb-2 font-semibold text-[#d9c5a7]">
                          Teknologi:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
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
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
