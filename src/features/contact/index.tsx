"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFloatingParticles } from "@/hooks/useFloatingParticles";
import { useInView } from "@/hooks/useInView";
import { useViewport } from "@/hooks/useViewport";
import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";

const ContactPage = () => {
  const viewport = useViewport();
  const { particles, shouldReduceMotion } = useFloatingParticles(viewport, {
    desktopBaseDuration: 5,
  });
  const isVisible = useInView("contact", { threshold: 0.1 });

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-zinc-900 px-4 py-24 md:py-28"
    >
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      >
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
      </motion.div>

      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-[#c4b5a0]/30"
          animate={{
            x: ["0%", `${p.xTo}%`],
            y: ["0%", `${p.yTo}%`],
            scale: [1, p.scale, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible || shouldReduceMotion ? 0 : 50,
        }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        className="w-full max-w-3xl"
      >
        <Card className="mx-auto border-none bg-[#1a1a1a]/90 py-8 shadow-xl backdrop-blur md:py-0">
          <CardHeader className="space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible || shouldReduceMotion ? 0 : -50,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
            >
              <CardTitle className="font-serif text-3xl font-semibold text-[#c4b5a0] md:text-6xl">
                Contact
              </CardTitle>
              <p className="text-lg text-[#d9c5a7]/80">Let's get in touch</p>
            </motion.div>
          </CardHeader>
          <CardContent>
            <ContactForm
              isVisible={isVisible}
              shouldReduceMotion={shouldReduceMotion}
            />
            <SocialLinks
              isVisible={isVisible}
              shouldReduceMotion={shouldReduceMotion}
            />
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default ContactPage;
