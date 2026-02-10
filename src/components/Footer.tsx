"use client";
import { socialLinks } from "@/utils/sosialLink";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaCode,
  FaEnvelope,
  FaHeart,
  FaMapMarkerAlt,
  FaRocket,
} from "react-icons/fa";
import CountUp from "./CountUp";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copyFeedback, setCopyFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [email, setEmail] = useState("");
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const subscribeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const scrollFrameRef = useRef<number | null>(null);

  const services = [
    {
      icon: FaCode,
      name: "Web Development",
      desc: "Custom websites and applications",
    },
    { icon: FaRocket, name: "Performance", desc: "Speed optimization and SEO" },
  ];

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolios" },
    { name: "Contact", href: "#contact" },
  ];

  const showCopyFeedback = (
    feedback: { type: "success" | "error"; message: string },
    duration = 2000,
  ) => {
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    setCopyFeedback(feedback);
    copyTimeoutRef.current = setTimeout(() => {
      setCopyFeedback(null);
    }, duration);
  };

  const handleEmailClick = async () => {
    if (!navigator?.clipboard?.writeText) {
      showCopyFeedback({
        type: "error",
        message: "Clipboard tidak tersedia. Silakan salin manual.",
      });
      return;
    }

    try {
      await navigator.clipboard.writeText("mthitz313@gmail.com");
      showCopyFeedback({
        type: "success",
        message: "Email berhasil disalin!",
      });
    } catch {
      showCopyFeedback(
        {
          type: "error",
          message: "Gagal menyalin email. Silakan salin manual.",
        },
        3000,
      );
    }
  };

  const handleSubscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email) {
      if (subscribeTimeoutRef.current) {
        clearTimeout(subscribeTimeoutRef.current);
      }
      setShowNotification(true);
      setEmail("");
      subscribeTimeoutRef.current = setTimeout(
        () => setShowNotification(false),
        3000,
      );
    }
  };

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      if (subscribeTimeoutRef.current) {
        clearTimeout(subscribeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollFrameRef.current !== null) {
        return;
      }

      scrollFrameRef.current = window.requestAnimationFrame(() => {
        const shouldShow = window.pageYOffset > 300;
        setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
        scrollFrameRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = null;
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-black to-[#111111] pb-8 pt-20 text-white">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #d9c5a7 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            backgroundPosition: "0 0",
          }}
        >
          <motion.div
            className="h-full w-full bg-transparent"
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9c5a7] to-transparent opacity-50" />
      <motion.div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #d9c5a7, transparent)",
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-[#d9c5a7]">
                Muhammad Syaiful Mu'min
              </h2>
              <p className="mb-6 leading-relaxed text-gray-400">
                Transforming ideas into exceptional digital experiences.
                Specializing in modern web development and creative solutions.
              </p>

              <div className="grid grid-cols-3 gap-4 border-b border-t border-gray-800 py-6">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <CountUp
                    from={0}
                    to={1}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text block text-2xl font-bold text-[#d9c5a7]"
                  />
                  <span className="text-sm text-gray-400">Years Exp.</span>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <CountUp
                    from={0}
                    to={5}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text block text-2xl font-bold text-[#d9c5a7]"
                  />
                  <span className="text-sm text-gray-400">Projects</span>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text block text-2xl font-bold text-[#d9c5a7]"
                  />
                  <span className="text-sm text-gray-400">Clients</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-[#d9c5a7]/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#d9c5a7]"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ type: "tween" }}
                  />
                  <social.icon className="relative z-10 h-5 w-5 text-[#d9c5a7] transition-colors duration-300 group-hover:text-black" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="space-y-8 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-6 text-xl font-semibold text-[#d9c5a7]">
                Services
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#d9c5a7]/10 transition-colors duration-300 group-hover:bg-[#d9c5a7]">
                      <service.icon className="h-5 w-5 text-[#d9c5a7] transition-colors duration-300 group-hover:text-black" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#d9c5a7]">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-400">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="mb-6 text-xl font-semibold text-[#d9c5a7]">
                Quick Links
              </h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-[#d9c5a7]"
                      >
                        <span className="h-0.5 w-2 bg-[#d9c5a7]/50 transition-all duration-300 group-hover:w-4" />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </div>

          <div className="space-y-8 lg:col-span-4">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-6 text-xl font-semibold text-[#d9c5a7]">
                  Stay Updated
                </h3>
                <p className="mb-6 text-gray-400">
                  Subscribe to our newsletter for the latest updates and
                  insights.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-lg bg-[#d9c5a7]/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d9c5a7]/50"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-lg bg-[#d9c5a7] px-4 py-3 font-medium text-black"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Subscribe</span>
                    <motion.div
                      className="absolute inset-0 bg-black"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "tween" }}
                    />
                  </motion.button>
                </form>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="mb-6 text-xl font-semibold text-[#d9c5a7]">
                Contact
              </h3>
              <div className="space-y-4">
                <motion.button
                  onClick={handleEmailClick}
                  className="group flex w-full items-center gap-3 text-gray-400 transition-colors duration-300 hover:text-[#d9c5a7]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#d9c5a7]/10 transition-colors duration-300 group-hover:bg-[#d9c5a7]">
                    <FaEnvelope className="h-5 w-5 text-[#d9c5a7] transition-colors duration-300 group-hover:text-black" />
                  </div>
                  <span>mthitz313@gmail.com</span>
                  <AnimatePresence>
                    {copyFeedback && (
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`ml-2 rounded px-2 py-1 text-sm ${
                          copyFeedback.type === "success"
                            ? "bg-[#d9c5a7]/10 text-[#d9c5a7]"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {copyFeedback.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <motion.div
                  className="group flex w-full items-center gap-3 rounded-xl text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#d9c5a7]/10 transition-colors duration-300 group-hover:bg-[#d9c5a7]">
                    <FaMapMarkerAlt className="h-5 w-5 text-[#d9c5a7] transition-colors duration-300 group-hover:text-black" />
                  </div>
                  <span>Temanggung, Jawa Tengah, Indonesia</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 left-1/2 flex -translate-x-1/2 transform items-center gap-2 rounded-lg bg-[#d9c5a7] px-6 py-3 text-black shadow-lg"
            >
              <FaRocket className="h-5 w-5" />
              <span>Thanks for subscribing!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="mt-8 border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Muhammad Syaiful. All rights reserved.
            </p>
            <motion.p
              className="flex items-center gap-2 text-sm text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              Crafted with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#d9c5a7", "#ff6b6b", "#d9c5a7"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <FaHeart className="inline" />
              </motion.span>
              in Indonesia
            </motion.p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#d9c5a7] text-black shadow-lg transition-colors duration-300 hover:bg-[#c4b5a0]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
