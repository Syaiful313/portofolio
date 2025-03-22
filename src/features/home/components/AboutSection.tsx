"use client";
import { skills } from "@/utils/skills";
import { socialLinks } from "@/utils/sosialLink";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "50%" : "100%"],
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isMobile ? "25%" : "50%"],
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const getAnimationConfig = () => {
    return {
      duration: isMobile ? 0.5 : 0.8,
      damping: isMobile ? 15 : 10,
      stiffness: isMobile ? 100 : 50,
    };
  };

  const config = getAnimationConfig();

  const particleCount = isMobile ? 10 : 20;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-black"
    >
      <div className="container mx-auto">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{ y: backgroundY }}
        >
          <div className="bg-grid-pattern absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
        </motion.div>

        {[...Array(particleCount)].map((_, i) => (
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
              duration: Math.random() * (isMobile ? 3 : 5) + (isMobile ? 3 : 5),
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: config.duration }}
            className="my-24 grid grid-cols-1 items-center gap-8 md:my-56 md:grid-cols-2 md:gap-12"
          >
            <motion.div
              className="space-y-6 text-center md:text-left"
              style={{ y: textY }}
            >
              <motion.div
                initial={{ opacity: 0, x: isMobile ? -20 : -50 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : isMobile ? -20 : -50,
                }}
                transition={{
                  duration: config.duration,
                  delay: 0.1,
                  type: "spring",
                  damping: config.damping,
                  stiffness: config.stiffness,
                }}
              >
                <h2 className="font-serif text-3xl leading-tight text-[#c4b5a0] sm:text-5xl md:text-6xl">
                  A website that leaves
                  <span className="relative mt-2 block italic text-[#d9c5a7]">
                    a lasting impression!
                    <motion.svg
                      className="absolute -bottom-3 left-1/2 h-2 w-32 -translate-x-1/2 transform text-[#c4b5a0]/30 md:left-0 md:translate-x-0"
                      viewBox="0 0 100 8"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isVisible ? 1 : 0 }}
                      transition={{
                        duration: isMobile ? 1 : 1.5,
                        delay: isMobile ? 0.3 : 0.5,
                      }}
                    >
                      <motion.path
                        d="M0 4 Q25 0, 50 4 T100 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </motion.svg>
                  </span>
                </h2>
              </motion.div>

              <motion.div
                className="mt-6 flex flex-wrap justify-center gap-2 md:mt-8 md:justify-start md:gap-3"
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : isMobile ? 10 : 20,
                }}
                transition={{
                  duration: config.duration,
                  delay: isMobile ? 0.2 : 0.4,
                  type: "spring",
                  damping: config.damping,
                }}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="rounded-full border border-[#c4b5a0]/20 bg-[#c4b5a0]/10 px-3 py-1 text-xs text-[#d9c5a7] transition-all duration-300 hover:bg-[#c4b5a0]/20 md:px-4 md:py-2 md:text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      scale: isVisible ? 1 : 0.8,
                    }}
                    transition={{
                      duration: isMobile ? 0.3 : 0.5,
                      delay:
                        (isMobile ? 0.3 : 0.6) +
                        index * (isMobile ? 0.05 : 0.1),
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6 text-center md:space-y-8 md:text-left"
              initial={{ opacity: 0, x: isMobile ? 20 : 50 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : isMobile ? 20 : 50,
              }}
              transition={{
                duration: config.duration,
                delay: isMobile ? 0.15 : 0.3,
                type: "spring",
                damping: config.damping,
                stiffness: config.stiffness,
              }}
            >
              <div className="relative">
                <p className="text-base leading-relaxed text-[#d9c5a7] md:text-xl">
                  Hey! I'm{" "}
                  <span className="relative inline-block font-serif font-bold">
                    Muhammad Syaiful Mu'min
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#c4b5a0]/30"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isVisible ? 1 : 0 }}
                      transition={{
                        duration: isMobile ? 0.6 : 1,
                        delay: isMobile ? 0.4 : 0.8,
                      }}
                    />
                  </span>
                  . I'm a web developer focused on creating responsive and
                  user-friendly digital experiences, with expertise in modern
                  web technologies. I enjoy combining functional design with
                  optimal performance to bring creative ideas to life.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8 md:justify-start md:gap-6">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : isMobile ? 10 : 20,
                    }}
                    transition={{
                      duration: isMobile ? 0.3 : 0.5,
                      delay: link.delay * (isMobile ? 0.7 : 1),
                      type: "spring",
                      damping: isMobile ? 20 : 10,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      aria-label={link.name}
                      className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-700/50 hover:shadow-lg hover:shadow-[#c4b5a0]/10 md:h-14 md:w-14"
                    >
                      <link.icon
                        size={isMobile ? 22 : 26}
                        className="text-[#d9c5a0] transition-colors duration-300 group-hover:text-white"
                      />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-lg border border-white/10 bg-zinc-800/90 px-2 py-1 text-xs text-white opacity-0 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 md:px-3 md:py-1.5">
                        {link.name}
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-zinc-800/90" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
