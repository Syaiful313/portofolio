"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const socialLinks = [
    {
      href: "https://github.com/Syaiful313",
      label: "GitHub",
      icon: FaGithub,
    },
    {
      href: "https://x.com/fulful_tmg",
      label: "Twitter",
      icon: FaTwitter,
    },
    {
      href: "https://www.facebook.com/profile.php?id=100009387189626",
      label: "Facebook",
      icon: FaFacebook,
    },
    {
      href: "https://www.linkedin.com/in/muhammad-syaiful-mu-min-599a27283/",
      label: "LinkedIn",
      icon: FaLinkedin,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] px-4 py-16 md:py-24 lg:py-32">
      <Card className="mx-auto max-w-3xl border-none bg-[#1a1a1a]/90 shadow-xl backdrop-blur">
        <CardHeader className="space-y-4 text-center">
          <CardTitle className="text-4xl font-bold text-[#d9c5a7]">
            Contact
          </CardTitle>
          <p className="text-lg text-[#d9c5a7]/80">Let's get in touch</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
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
                className="border-[#333] bg-[#2a2a2a] text-[#d9c5a7] placeholder:text-[#d9c5a7]/50 focus:border-[#d9c5a7] focus:ring-[#d9c5a7]"
              />
            </div>
            <div className="space-y-2">
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
                className="border-[#333] bg-[#2a2a2a] text-[#d9c5a7] placeholder:text-[#d9c5a7]/50 focus:border-[#d9c5a7] focus:ring-[#d9c5a7]"
              />
            </div>
            <div className="space-y-2">
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
                className="min-h-[150px] border-[#333] bg-[#2a2a2a] text-[#d9c5a7] placeholder:text-[#d9c5a7]/50 focus:border-[#d9c5a7] focus:ring-[#d9c5a7]"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#d9c5a7] text-[#1a1a1a] transition-all duration-300 hover:bg-[#c4ae93] hover:shadow-lg disabled:bg-[#d9c5a7]/50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group focus:outline-none focus:ring-2 focus:ring-[#d9c5a7] focus:ring-offset-2"
              >
                <Button
                  variant="outline"
                  className="w-full border-[#333] bg-[#2a2a2a] text-[#d9c5a7] transition-all duration-300 hover:border-[#d9c5a7] hover:bg-[#1a1a1a] hover:shadow-lg group-hover:scale-105"
                >
                  <social.icon size={20} className="mr-2 flex-shrink-0" />
                  <span className="hidden text-sm font-medium sm:block">
                    {social.label}
                  </span>
                </Button>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactSection;
