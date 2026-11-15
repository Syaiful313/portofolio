"use client";

import CountUp from "@/components/CountUp";
import { skills } from "@/utils/skills";
import { socialLinks } from "@/utils/socialLinks";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Tahun berkarya", value: 3, suffix: "+" },
  { label: "Proyek dikerjakan", value: 10, suffix: "+" },
  { label: "Teknologi utama", value: 6, suffix: "" },
];

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-24">
      <div className="section-shell py-20 sm:py-24">
        <div className="section-divider pb-10 pt-0" />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-6">
            <p className="curly-label">{`{ Tentang Saya }`}</p>
            <h2 className="max-w-xl text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Dari ide hingga website yang siap digunakan.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[color:var(--color-ash-gray)] sm:text-lg">
              Saya Muhammad Syaiful Mu&apos;min, full-stack web developer yang
              membantu bisnis dan personal brand membangun website profesional.
              Saya menangani proses dari struktur dan antarmuka hingga
              implementasi, dengan perhatian pada performa, kemudahan penggunaan,
              dan identitas brand.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.35,
                    delay: shouldReduceMotion ? 0 : index * 0.03,
                  }}
                  className="rounded-full border border-[color:var(--color-olive-stone)] px-3 py-1 text-sm text-[color:var(--color-cream-glow)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[8px] border border-[color:var(--color-olive-stone)] p-4"
                >
                  <div className="text-3xl leading-none tracking-[-0.04em] text-[color:var(--color-cream-glow)]">
                    <CountUp to={stat.value} duration={1.2} />
                    {stat.suffix}
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--color-ash-gray)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[8px] border border-[color:var(--color-olive-stone)] p-6">
              <p className="section-eyebrow">{`{ Links }`}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-link"
                  >
                    {social.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[8px] border border-[color:var(--color-olive-stone)] p-6">
              <p className="section-eyebrow">{`{ Teknologi }`}</p>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ash-gray)]">
                Next.js, TypeScript, React, Tailwind CSS, Node.js, dan
                PostgreSQL menjadi fondasi kerja saya untuk membangun produk web
                yang stabil dan mudah dikembangkan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
