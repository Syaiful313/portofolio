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
    Array<{ left: number; top: number }>
  >([]);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    // Generate particles only on client-side
    const newParticles = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setParticles(newParticles);

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
      className="relative mx-4 overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-black py-32 text-[#d9c5a7] md:mx-0"
    >
      <div className="container mx-auto">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{ y: backgroundY }}
        >
          <div className="bg-grid-pattern absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
        </motion.div>

        {/* Floating Particles */}
        {particles.map((particle, i) => (
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
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
          style={{ y: textY }}
        >
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Work Experience
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-[#d9c5a7]"></div>
          <p className="mx-auto max-w-2xl font-sans text-foreground/80">
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
                      <Card className="border border-primary/10 shadow-md transition-shadow hover:shadow-lg">
                        <CardContent className="p-6">
                          <CardTitle className="mb-1 text-right font-serif text-xl font-semibold">
                            {exp.title}
                          </CardTitle>
                          <div className="mb-2 flex items-center justify-end">
                            <span className="mr-2 text-foreground/70">
                              {exp.company}
                            </span>
                            <Briefcase className="h-4 w-4 text-primary" />
                          </div>
                          <div className="mb-4 flex items-center justify-end">
                            <span className="mr-2 text-foreground/70">
                              {exp.period}
                            </span>
                            <Calendar className="h-4 w-4 text-primary" />
                          </div>
                          <CardDescription className="mb-4 text-right text-foreground/80">
                            {exp.description}
                          </CardDescription>
                          <h4 className="mb-2 text-right font-semibold">
                            Key Responsibilities:
                          </h4>

                          <div className="flex flex-wrap justify-end gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="rounded-full"
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
                      <Card className="border border-primary/10 shadow-md transition-shadow hover:shadow-lg">
                        <CardContent className="p-6">
                          <CardTitle className="mb-1 font-serif text-xl font-semibold">
                            {exp.title}
                          </CardTitle>
                          <div className="mb-2 flex items-center">
                            <Briefcase className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-foreground/70">
                              {exp.company}
                            </span>
                          </div>
                          <div className="mb-4 flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            <span className="text-foreground/70">
                              {exp.period}
                            </span>
                          </div>
                          <CardDescription className="mb-4 text-foreground/80">
                            {exp.description}
                          </CardDescription>
                          <h4 className="mb-2 font-semibold">
                            Key Responsibilities:
                          </h4>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="rounded-full"
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
                    <Card className="border border-primary/10 shadow-md transition-shadow hover:shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold">
                          {exp.title}
                        </CardTitle>
                        <div className="flex items-center">
                          <Briefcase className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-foreground/70">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-foreground/70">
                            {exp.period}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-3 text-foreground/80">
                          {exp.description}
                        </CardDescription>
                        <h4 className="mb-2 font-semibold">
                          Key Responsibilities:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="rounded-full"
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
