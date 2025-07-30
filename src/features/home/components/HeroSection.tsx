"use client";
import BlurText from "@/components/BlurText";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  const { scrollYProgress } = useScroll();

  const getScreenSize = useCallback(() => {
    const width = window.innerWidth;
    return {
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024,
    };
  }, []);

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    screenSize.isMobile
      ? ["0%", "30%"]
      : screenSize.isTablet
        ? ["0%", "60%"]
        : ["0%", "100%"],
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    screenSize.isMobile
      ? ["0%", "15%"]
      : screenSize.isTablet
        ? ["0%", "30%"]
        : ["0%", "50%"],
  );

  const animationConfig = useMemo(
    () => ({
      duration: screenSize.isMobile ? 0.4 : screenSize.isTablet ? 0.6 : 0.8,
      damping: screenSize.isMobile ? 20 : screenSize.isTablet ? 15 : 10,
      stiffness: screenSize.isMobile ? 120 : screenSize.isTablet ? 80 : 50,
    }),
    [screenSize],
  );

  const particleCount = useMemo(() => {
    if (screenSize.isMobile) return 8;
    if (screenSize.isTablet) return 15;
    return 25;
  }, [screenSize]);

  useEffect(() => {
    setIsMounted(true);

    const updateScreenSize = () => {
      setScreenSize(getScreenSize());
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: screenSize.isMobile ? 0.1 : 0.2,
        rootMargin: "50px",
      },
    );

    const element = document.getElementById("home");
    if (element) {
      observer.observe(element);
    }

    updateScreenSize();

    let resizeTimeout: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(updateScreenSize, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      window.removeEventListener("resize", handleResize);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
  }, [getScreenSize, screenSize.isMobile]);

  const generateStableParticles = useMemo(() => {
    if (!isMounted) return [];

    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    return [...Array(particleCount)].map((_, i) => ({
      key: i,
      animate: {
        x: ["0%", `${seededRandom(i * 2) * 100}%`],
        y: ["0%", `${seededRandom(i * 3) * 100}%`],
        scale: [1, seededRandom(i * 4) * 0.5 + 0.5, 1],
        opacity: [0, seededRandom(i * 5) * 0.3 + 0.1, 0],
      },
      transition: {
        duration: seededRandom(i * 6) * 4 + (screenSize.isMobile ? 4 : 6),
        repeat: Infinity,
        ease: "linear" as const,
        delay: seededRandom(i * 7) * 2,
      },
      style: {
        left: `${seededRandom(i * 8) * 100}%`,
        top: `${seededRandom(i * 9) * 100}%`,
      },
    }));
  }, [particleCount, screenSize.isMobile, isMounted]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="bg-grid-pattern absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </motion.div>

      {/* Floating Particles - Only render on client */}
      {isMounted &&
        generateStableParticles.map(({ key, animate, transition, style }) => (
          <motion.div
            key={key}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#c4b5a0]/20"
            animate={animate}
            transition={transition}
            style={style}
          />
        ))}

      {/* Main Content Container - Perfect Centering */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: animationConfig.duration }}
            className="flex w-full justify-center"
          >
            <motion.div
              style={{ y: textY }}
              className="flex w-full max-w-5xl flex-col items-center justify-center space-y-4 text-center sm:space-y-6 md:space-y-8"
            >
              {/* Header */}
              <motion.header
                initial={{ opacity: 0, x: screenSize.isMobile ? -20 : -50 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : screenSize.isMobile ? -20 : -50,
                }}
                transition={{
                  duration: animationConfig.duration,
                  delay: 0.2,
                  type: "spring",
                  damping: animationConfig.damping,
                  stiffness: animationConfig.stiffness,
                }}
                className="flex w-full justify-center"
              >
                <h1 className="px-2 text-center font-serif text-2xl leading-tight text-[#c4b5a0] sm:px-0 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  <BlurText
                    text="Muhammad Syaiful Mu'min"
                    delay={500}
                    animateBy="words"
                    direction="top"
                    className="block text-center"
                  />
                </h1>
              </motion.header>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: screenSize.isMobile ? 10 : 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : screenSize.isMobile ? 10 : 20,
                }}
                transition={{
                  duration: animationConfig.duration,
                  delay: 0.4,
                  type: "spring",
                  damping: animationConfig.damping,
                }}
                className="text-center text-lg font-light text-[#d9c5a7] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
              >
                I am Full-Stack Web Developer
              </motion.p>

              {/* Description */}
              <motion.article
                initial={{ opacity: 0, x: screenSize.isMobile ? 20 : 50 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : screenSize.isMobile ? 20 : 50,
                }}
                transition={{
                  duration: animationConfig.duration,
                  delay: 0.3,
                  type: "spring",
                  damping: animationConfig.damping,
                  stiffness: animationConfig.stiffness,
                }}
                className="mx-auto w-full max-w-2xl space-y-3 text-center text-[#d9c5a7] md:space-y-4"
              >
                <p className="text-center text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl">
                  I create stunning and highly functional websites that blend
                  modern design with user-focused functionality. My mission is
                  to turn ideas into digital realities with precision and
                  creativity.
                </p>
                <p className="text-center text-xs italic text-gray-400 sm:text-sm md:text-base">
                  "Bringing your vision to life through code."
                </p>
              </motion.article>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: screenSize.isMobile ? 10 : 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : screenSize.isMobile ? 10 : 20,
                }}
                transition={{
                  duration: screenSize.isMobile ? 0.3 : 0.5,
                  delay: 0.6,
                  type: "spring",
                  damping: screenSize.isMobile ? 20 : 10,
                }}
                className="mt-6 flex justify-center sm:mt-8 md:mt-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Link
                    href="/#projects"
                    className="inline-block rounded-full bg-[#d9c5a7] px-6 py-3 text-sm font-medium text-black shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#c8b397] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#d9c5a7]/50 sm:px-8 sm:py-4 sm:text-base md:text-lg"
                  >
                    Explore My Work
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
