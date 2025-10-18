"use client";

import BlurText from "@/components/BlurText";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );
  const [particles, setParticles] = useState<
    Array<{ left: number; top: number }>
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
    const resolveViewport = (width: number) => {
      if (width < 768) return "mobile";
      if (width < 1024) return "tablet";
      return "desktop";
    };

    const updateViewport = () => {
      setViewport(resolveViewport(window.innerWidth));
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

    const element = document.getElementById("home");
    if (element) {
      observer.observe(element);
    }

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    const particleCount =
      viewport === "mobile" ? 8 : viewport === "tablet" ? 14 : 20;
    const newParticles = Array.from({ length: particleCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, [viewport]);

  const getAnimationConfig = () => {
    switch (viewport) {
      case "mobile":
        return { duration: 0.4, damping: 18, stiffness: 120 };
      case "tablet":
        return { duration: 0.6, damping: 14, stiffness: 80 };
      default:
        return { duration: 0.8, damping: 10, stiffness: 50 };
    }
  };

  const config = getAnimationConfig();
  const horizontalOffset = isMobile ? 20 : isTablet ? 35 : 50;
  const verticalOffset = isMobile ? 10 : isTablet ? 16 : 20;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900"
    >
      <div className="container mx-auto">
        {/* Animated Background */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{ y: backgroundY }}
        >
          <div className="bg-grid-pattern pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        </motion.div>

        {/* Floating Particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#c4b5a0]/20"
            animate={{
              x: ["0%", `${Math.random() * 100}%`],
              y: ["0%", `${Math.random() * 100}%`],
              scale: [1, Math.random() + 0.5, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration:
                Math.random() * (isMobile ? 2 : isTablet ? 3 : 4) +
                (isMobile ? 3 : isTablet ? 4 : 5),
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}

        <div className="py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: config.duration }}
            className="relative z-10 my-24 flex flex-col items-center justify-center text-center md:my-56"
          >
            <motion.div style={{ y: textY }} className="space-y-6">
              <motion.header
                className="flex justify-center"
                initial={{ opacity: 0, x: -horizontalOffset }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : -horizontalOffset,
                }}
                transition={{
                  duration: config.duration,
                  delay: 0.2,
                  type: "spring",
                  damping: config.damping,
                  stiffness: config.stiffness,
                }}
              >
                <h1 className="relative mx-auto text-center font-serif text-4xl leading-tight text-[#c4b5a0] sm:text-5xl md:text-6xl lg:text-7xl">
                  <BlurText
                    text="Muhammad Syaiful Mu'min"
                    delay={500}
                    animateBy="words"
                    direction="top"
                    className="inline-flex flex-wrap justify-center text-center"
                  />
                </h1>
              </motion.header>

              <motion.p
                initial={{ opacity: 0, y: verticalOffset }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : verticalOffset,
                }}
                transition={{
                  duration: config.duration,
                  delay: 0.4,
                  type: "spring",
                  damping: config.damping,
                }}
                className="text-xl font-light text-[#d9c5a7] sm:text-2xl md:text-3xl lg:text-4xl"
              >
                I am Full-Stack Web Developer
              </motion.p>

              <motion.article
                initial={{ opacity: 0, x: horizontalOffset }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : horizontalOffset,
                }}
                transition={{
                  duration: config.duration,
                  delay: 0.3,
                  type: "spring",
                  damping: config.damping,
                  stiffness: config.stiffness,
                }}
                className="mx-auto mt-6 max-w-2xl space-y-4 text-[#d9c5a7]"
              >
                <p className="text-base text-[#d9c5a7] sm:text-lg md:text-xl">
                  I create stunning and highly functional websites that blend
                  modern design with user-focused functionality. My mission is
                  to turn ideas into digital realities with precision and
                  creativity.
                </p>
                <p className="mt-4 text-sm italic text-[#cbbfa8] sm:text-base">
                  "Bringing your vision to life through code."
                </p>
              </motion.article>

              <motion.div
                initial={{ opacity: 0, y: verticalOffset }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : verticalOffset,
                }}
                transition={{
                  duration: isMobile ? 0.3 : isTablet ? 0.4 : 0.5,
                  delay: 0.6,
                  type: "spring",
                  damping: isMobile ? 20 : isTablet ? 16 : 10,
                }}
                className="mx-auto mt-10 w-full max-w-[14rem] sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#portfolios"
                  className="block w-full rounded-full bg-[#d9c5a7] px-5 py-2.5 text-xs font-medium text-black shadow-md transition-colors hover:bg-[#c8b397] focus:outline-none focus:ring-4 focus:ring-[#d9c5a7]/50 sm:w-auto sm:px-6 sm:py-3 sm:text-base"
                >
                  Explore My Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
