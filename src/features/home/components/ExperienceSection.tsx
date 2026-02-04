"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/utils/experiences";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

type Viewport = "mobile" | "tablet" | "desktop";

const ExperienceSection = () => {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [particles, setParticles] = useState<
    Array<{
      left: number;
      top: number;
      xTo: number;
      yTo: number;
      scale: number;
      duration: number;
    }>
  >([]);
  const { scrollYProgress } = useScroll();

  const isMobile = viewport === "mobile";
  const isTablet = viewport === "tablet";

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "40%" : isTablet ? "70%" : "100%"],
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "18%" : isTablet ? "35%" : "50%"],
  );

  useEffect(() => {
    const resolveViewport = (width: number): Viewport => {
      if (width < 768) return "mobile";
      if (width < 1024) return "tablet";
      return "desktop";
    };

    const updateViewport = () => {
      setViewport(resolveViewport(window.innerWidth));
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    const particleCount =
      viewport === "mobile" ? 8 : viewport === "tablet" ? 14 : 20;
    const baseDuration =
      viewport === "mobile" ? 3.5 : viewport === "tablet" ? 4.5 : 6;
    const driftRange =
      viewport === "mobile" ? 2 : viewport === "tablet" ? 3 : 4;

    const newParticles = Array.from({ length: particleCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      xTo: Math.random() * 60 + 20,
      yTo: Math.random() * 60 + 20,
      scale: Math.random() * 0.6 + 0.7,
      duration: Math.random() * driftRange + baseDuration,
    }));
    setParticles(newParticles);
  }, [viewport]);

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-black py-24 text-[#d9c5a7] sm:py-28"
    >
      <div className="container relative mx-auto px-4 md:px-8">
        {/* Animated Background */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{ y: backgroundY }}
        >
          <div className="bg-grid-pattern pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black to-transparent" />
        </motion.div>

        {/* Floating Particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#c4b5a0]/20"
            animate={{
              x: ["0%", `${particle.xTo}%`],
              y: ["0%", `${particle.yTo}%`],
              scale: [1, particle.scale, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
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
          className="mb-12 text-center sm:mb-16"
          style={{ y: textY }}
        >
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Work Experience
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-[#d9c5a7] sm:mb-8" />
          <p className="mx-auto max-w-2xl text-sm text-[#d9c5a7]/80 sm:text-base">
            My professional journey in web development, showcasing my growth and
            the diverse projects I've contributed to throughout my career.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-[#d9c5a7]/30 lg:block"></div>

          <div className="space-y-6 sm:space-y-10 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: isMobile ? 0 : index * 0.1,
                }}
                className="relative"
              >
                <div className="absolute left-1/2 top-0 z-10 hidden h-4 w-4 -translate-x-1/2 transform rounded-full bg-[#d9c5a7] shadow-[0_0_12px_rgba(217,197,167,0.45)] lg:block" />

                <div className="relative gap-8 lg:grid lg:grid-cols-2">
                  <div className="hidden lg:block">
                    {index % 2 === 1 && (
                      <Card className="border border-[#d9c5a7]/15 bg-black/40 shadow-lg shadow-black/25 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-[#d9c5a7]/20">
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
                          <h4 className="mb-2 text-right font-semibold">
                            Key Responsibilities:
                          </h4>
                          <ul className="mb-4 list-disc space-y-2 text-right text-foreground/80 [direction:rtl]">
                            {exp.description.map((item, i) => (
                              <li key={i} className="[direction:ltr]">
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap justify-end gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="rounded-full border-[#d9c5a7]/40 px-3 py-1 text-xs text-[#d9c5a7]"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="col-start-2 hidden lg:block">
                    {index % 2 === 0 && (
                      <Card className="border border-[#d9c5a7]/15 bg-black/40 shadow-lg shadow-black/25 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-[#d9c5a7]/20">
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
                          <h4 className="mb-2 font-semibold">
                            Key Responsibilities:
                          </h4>
                          <ul className="mb-4 list-disc space-y-2 pl-5 text-foreground/80">
                            {exp.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="rounded-full border-[#d9c5a7]/40 px-3 py-1 text-xs text-[#d9c5a7]"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="block w-full lg:hidden">
                    <Card className="border border-[#d9c5a7]/15 bg-black/40 shadow-lg shadow-black/25 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-[#d9c5a7]/20">
                      <CardHeader className="space-y-3">
                        <CardTitle className="text-xl font-semibold">
                          {exp.title}
                        </CardTitle>
                        <div className="flex flex-col items-start gap-1 text-sm text-[#d9c5a7]/80">
                          <span className="flex items-center">
                            <Briefcase className="mr-2 h-4 w-4 text-primary" />
                            {exp.company}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-primary" />
                            {exp.period}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-[#d9c5a7]">
                            Key Responsibilities:
                          </h4>
                          <ul className="mb-2 list-disc space-y-2 pl-5 text-sm text-[#d9c5a7]/80">
                            {exp.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="rounded-full border-[#d9c5a7]/40 px-3 py-1 text-xs text-[#d9c5a7]"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
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
};

export default ExperienceSection;
