"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.instagram.com/fulful.tmg/",
    icon: FaInstagram,
    name: "Facebook",
    color: "#1877f2",
    delay: 0.1,
  },
  {
    href: "https://www.linkedin.com/in/muhammad-syaiful-mu-min-599a27283/",
    icon: FaLinkedin,
    name: "LinkedIn",
    color: "#0077b5",
    delay: 0.2,
  },
  {
    href: "https://x.com/fulful_tmg",
    icon: FaTwitter,
    name: "Twitter",
    color: "#1da1f2",
    delay: 0.3,
  },
  {
    href: "https://github.com/Syaiful313",
    icon: FaGithub,
    name: "GitHub",
    color: "#333",
    delay: 0.4,
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
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
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900"
    >
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="bg-grid-pattern absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </motion.div>

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

      <div className="container relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
        >
          <motion.div
            className="space-y-6 text-center md:text-left"
            style={{ y: textY }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl leading-tight text-[#c4b5a0] sm:text-5xl md:text-6xl">
                A website that leaves
                <span className="relative mt-2 block italic text-[#d9c5a7]">
                  a lasting impression!
                  <motion.svg
                    className="absolute -bottom-3 left-1/2 h-2 w-32 -translate-x-1/2 transform text-[#c4b5a0]/30 md:left-0 md:translate-x-0"
                    viewBox="0 0 100 8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isVisible ? 1 : 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
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
              className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="rounded-full border border-[#c4b5a0]/20 bg-[#c4b5a0]/10 px-4 py-2 text-sm text-[#d9c5a7] transition-all duration-300 hover:bg-[#c4b5a0]/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-8 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <p className="text-lg leading-relaxed text-[#d9c5a7] md:text-xl">
                Hey! I'm{" "}
                <span className="relative inline-block font-semibold text-white">
                  Muhammad Syaiful Mu'min
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#c4b5a0]/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isVisible ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
                . I'm a web developer focused on creating responsive and
                user-friendly digital experiences, with expertise in modern web
                technologies. I enjoy combining functional design with optimal
                performance to bring creative ideas to life.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 md:justify-start">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: link.delay }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    aria-label={link.name}
                    className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-700/50 hover:shadow-lg hover:shadow-[#c4b5a0]/10"
                  >
                    <link.icon
                      size={26}
                      className="text-[#d9c5a7] transition-colors duration-300 group-hover:text-white"
                    />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-lg border border-white/10 bg-zinc-800/90 px-3 py-1.5 text-xs text-white opacity-0 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
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
    </section>
  );
};

export default AboutSection;
