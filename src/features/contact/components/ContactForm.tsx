"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
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

type ContactFormProps = {
  isVisible: boolean;
  shouldReduceMotion: boolean | null;
};

const ContactForm = ({ isVisible, shouldReduceMotion }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          ? `I will respond within 1-2 business days.`
          : "Thank you for reaching out. I will respond within 1-2 business days.",
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

  const fieldTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.8,
    delay: shouldReduceMotion ? 0 : delay,
  });

  const fieldAnimate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible || shouldReduceMotion ? 0 : 20,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={fieldAnimate}
        transition={fieldTransition(0.3)}
        className="space-y-2"
      >
        <label htmlFor="name" className="text-sm font-medium text-[#d9c5a7]">
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
        animate={fieldAnimate}
        transition={fieldTransition(0.4)}
        className="space-y-2"
      >
        <label htmlFor="email" className="text-sm font-medium text-[#d9c5a7]">
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
        animate={fieldAnimate}
        transition={fieldTransition(0.5)}
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
        animate={fieldAnimate}
        transition={fieldTransition(0.6)}
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
  );
};

export default ContactForm;

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
