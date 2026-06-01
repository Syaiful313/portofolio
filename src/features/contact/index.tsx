"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFloatingParticles } from "@/hooks/useFloatingParticles";
import { useViewport } from "@/hooks/useViewport";
import { socialLinks } from "@/utils/socialLinks";
import Link from "next/link";
import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const FIELD_LIMITS = {
  name: 80,
  email: 120,
  message: 2000,
};

type ContactField = keyof typeof FIELD_LIMITS;
type ContactFormData = Record<ContactField, string>;
type ContactErrorResponse = {
  error?: string;
  detail?: {
    message?: string;
    raw?: string;
  };
  fields?: Partial<Record<ContactField, string[]>>;
};

const ContactPage = () => {
  const viewport = useViewport();
  const { particles, shouldReduceMotion } = useFloatingParticles(viewport, {
    desktopBaseDuration: 5,
  });
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (!isContactField(name)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const err = await res
          .json()
          .catch(() => ({} as ContactErrorResponse));
        const msg = getContactErrorMessage(err);
        throw new Error(msg);
      }
      const ok = await res.json().catch(() => ({}));
      toast.success("Message sent successfully", {
        description: ok?.id
          ? `I will respond within 1–2 business days.`
          : "Thank you for reaching out. I will respond within 1–2 business days.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const msg =
        error instanceof Error
          ? error.message
          : "Please try again in a moment.";
      toast.error("Unable to send your message", {
        description: `${msg}\nYou can also email me directly at mthitz313@gmail.com.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible || shouldReduceMotion ? 0 : 20,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.3,
                }}
                className="space-y-2"
              >
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-[#d9c5a7]"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  maxLength={FIELD_LIMITS.name}
                  required
                  className="rounded-xl border-[#333] bg-[#2a2a2a] text-[#d9c5a7] placeholder:text-[#d9c5a7]/50 focus:border-[#c4b5a0] focus:ring-[#c4b5a0]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible || shouldReduceMotion ? 0 : 20,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.4,
                }}
                className="space-y-2"
              >
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#d9c5a7]"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={FIELD_LIMITS.email}
                  required
                  className="rounded-xl border-[#333] bg-[#2a2a2a] text-[#d9c5a7] placeholder:text-[#d9c5a7]/50 focus:border-[#c4b5a0] focus:ring-[#c4b5a0]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible || shouldReduceMotion ? 0 : 20,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.5,
                }}
                className="space-y-2"
              >
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#d9c5a7]"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  maxLength={FIELD_LIMITS.message}
                  required
                  className="min-h-[150px] rounded-xl border-[#333] bg-[#2a2a2a] text-[#d9c5a7] placeholder:text-[#d9c5a7]/50 focus:border-[#c4b5a0] focus:ring-[#c4b5a0]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible || shouldReduceMotion ? 0 : 20,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.6,
                }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#c4b5a0] text-[#1a1a1a] transition-all duration-300 hover:bg-[#d9c5a7] hover:shadow-lg disabled:bg-[#c4b5a0]/50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <p className="mt-3 text-center text-sm text-[#d9c5a7]/80">
                  Or email me directly at{" "}
                  <a
                    href="mailto:mthitz313@gmail.com"
                    className="underline decoration-[#c4b5a0] underline-offset-4 hover:opacity-80"
                  >
                    mthitz313@gmail.com
                  </a>
                </p>
              </motion.div>
            </form>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible || shouldReduceMotion ? 0 : 20,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : social.delay,
                  }}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group focus:outline-none focus:ring-2 focus:ring-[#c4b5a0] focus:ring-offset-2"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-xl border-[#333] bg-[#2a2a2a] text-[#d9c5a7] transition-all duration-300 hover:border-[#c4b5a0] hover:bg-[#c4b5a0]/20"
                    >
                      <social.icon
                        size={20}
                        className="mr-2 flex-shrink-0 text-[#c4b5a0]"
                      />
                      <span className="hidden text-sm font-medium text-[#c4b5a0] sm:block">
                        {social.name}
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default ContactPage;

function isContactField(value: string): value is ContactField {
  return value in FIELD_LIMITS;
}

function getContactErrorMessage(error: ContactErrorResponse) {
  const fieldMessages = error.fields
    ? Object.values(error.fields).flat().filter(Boolean)
    : [];

  return (
    fieldMessages[0] ||
    error.error ||
    error.detail?.message ||
    error.detail?.raw ||
    "Failed to send"
  );
}
