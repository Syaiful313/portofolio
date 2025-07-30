"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/utils/sosialLink";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [animationData, setAnimationData] = useState<
    Array<{
      id: number;
      initialX: number;
      initialY: number;
      targetX: number;
      targetY: number;
      scale: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    setIsMounted(true);

    const data = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      targetX: Math.random() * 100,
      targetY: Math.random() * 100,
      scale: Math.random() + 0.5,
      duration: Math.random() * 5 + 5,
    }));
    setAnimationData(data);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact");
      if (element) {
        const position = element.getBoundingClientRect();
        setIsVisible(position.top < window.innerHeight && position.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
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
        transition={{ duration: 0.5 }}
      >
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
      </motion.div>

      {/* Only render animated elements after component mounts */}
      {isMounted &&
        animationData.map((item) => (
          <motion.div
            key={item.id}
            className="absolute h-1 w-1 rounded-full bg-[#c4b5a0]/30"
            animate={{
              x: [`${item.initialX}%`, `${item.targetX}%`],
              y: [`${item.initialY}%`, `${item.targetY}%`],
              scale: [1, item.scale, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${item.initialX}%`,
              top: `${item.initialY}%`,
            }}
          />
        ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 50,
        }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl"
      >
        <Card className="mx-auto border-none bg-[#1a1a1a]/90 py-8 shadow-xl backdrop-blur md:py-0">
          <CardHeader className="space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : -50,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.3 }}
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
                  required
                  className="rounded-xl border-[#333] bg-[#2a2a2a] text-[#d9c5a7] placeholder:text-[#d9c5a7]/50 focus:border-[#c4b5a0] focus:ring-[#c4b5a0]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.4 }}
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
                  required
                  className="rounded-xl border-[#333] bg-[#2a2a2a] text-[#d9c5a7] placeholder:text-[#d9c5a7]/50 focus:border-[#c4b5a0] focus:ring-[#c4b5a0]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.5 }}
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
                  required
                  className="min-h-[150px] rounded-xl border-[#333] bg-[#2a2a2a] text-[#d9c5a7] placeholder:text-[#d9c5a7]/50 focus:border-[#c4b5a0] focus:ring-[#c4b5a0]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#c4b5a0] text-[#1a1a1a] transition-all duration-300 hover:bg-[#d9c5a7] hover:shadow-lg disabled:bg-[#c4b5a0]/50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </form>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: social.delay }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
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
                        {social.label}
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
