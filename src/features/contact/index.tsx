"use client";

import { motion, useReducedMotion } from "framer-motion";
import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";

const ContactPage = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="scroll-mt-24">
      <section className="section-shell py-20 sm:py-24">
        <div className="section-divider pb-10" />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="space-y-4"
          >
            <p className="curly-label">{`{ Contact }`}</p>
            <h1 className="max-w-2xl text-4xl leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Let&apos;s build something precise.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[color:var(--color-ash-gray)] sm:text-lg">
              Ceritakan kebutuhan project, deadline, dan target pengguna. Saya
              akan jawab dengan arah yang jelas dan realistis.
            </p>
            <SocialLinks
              isVisible={true}
              shouldReduceMotion={Boolean(shouldReduceMotion)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.05 }}
            className="rounded-[8px] border border-[color:var(--color-olive-stone)] p-6 sm:p-8"
          >
            <ContactForm
              isVisible={true}
              shouldReduceMotion={Boolean(shouldReduceMotion)}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
