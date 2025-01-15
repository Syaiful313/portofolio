"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const socialLinks = [
  { 
    href: "#", 
    icon: FaFacebook, 
    name: "Facebook",
    color: "#1877f2",
    delay: 0.1
  },
  { 
    href: "#", 
    icon: FaLinkedin, 
    name: "LinkedIn",
    color: "#0077b5",
    delay: 0.2
  },
  { 
    href: "#", 
    icon: FaTwitter, 
    name: "Twitter",
    color: "#1da1f2",
    delay: 0.3
  },
  { 
    href: "#", 
    icon: FaGithub, 
    name: "GitHub",
    color: "#333",
    delay: 0.4
  },
];

const skills = [
  "HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS","Node.js", "Express"
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

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
      className="relative min-h-screen bg-gradient-to-b from-black via-black to-zinc-900 flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#c4b5a0]/20 rounded-full"
          animate={{
            x: ['0%', `${Math.random() * 100}%`],
            y: ['0%', `${Math.random() * 100}%`],
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
      
      <div className="container relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column */}
          <motion.div 
            className="text-center md:text-left space-y-6"
            style={{ y: textY }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#c4b5a0] leading-tight">
                A website that leaves
                <span className="block mt-2 italic text-[#d9c5a7] relative">
                  a lasting impression!
                  <motion.svg 
                    className="absolute -bottom-3 left-1/2 md:left-0 w-32 h-2 text-[#c4b5a0]/30 transform -translate-x-1/2 md:translate-x-0"
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

            {/* Skills Tags */}
            <motion.div 
              className="flex flex-wrap gap-3 justify-center md:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-[#c4b5a0]/10 rounded-full text-sm text-[#d9c5a7] border border-[#c4b5a0]/20 hover:bg-[#c4b5a0]/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="text-center md:text-left space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <p className="text-lg md:text-xl text-[#d9c5a7] leading-relaxed">
                Hey! I'm <span className="font-semibold text-white relative inline-block">
                  Muhammad Syaiful Mu'min
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c4b5a0]/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isVisible ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>. 
                I'm a web developer focused on creating responsive and user-friendly digital experiences, 
                with expertise in modern web technologies. I enjoy combining 
                functional design with optimal performance to bring creative ideas to life.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-8">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: link.delay }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    aria-label={link.name}
                    className="group relative w-14 h-14 rounded-full flex items-center justify-center bg-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-700/50 hover:shadow-lg hover:shadow-[#c4b5a0]/10"
                  >
                    <link.icon
                      size={26}
                      className="text-[#d9c5a7] transition-colors duration-300 group-hover:text-white"
                    />
                    {/* Enhanced Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs text-white bg-zinc-800/90 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10 shadow-xl">
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