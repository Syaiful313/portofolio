"use client";

import MarqueeText from "@/components/MarqueeSection";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <>
      <MarqueeText />

      <section
        id="contact"
        className="mx-auto min-h-screen max-w-4xl rounded-md bg-black p-7 py-60 text-[#d9c5a7]"
      >
        <Card className="border border-[#d9c5a7]/15 bg-[#d9c5a7]/10 p-6">
          <CardHeader>
            <p className="mb-2 text-sm uppercase text-[#d9c5a7]">Contact</p>
            <CardTitle className="font-serif text-4xl text-[#d9c5a7]">
              Let&apos;s get in touch
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form className="grid gap-4">
              <Input
                type="text"
                placeholder="Name"
                className="text-[#d9c5a7] placeholder:text-[#d9c5a7]"
              />
              <Input
                type="email"
                placeholder="Email"
                className="text-[#d9c5a7] placeholder:text-[#d9c5a7]"
              />
              <Textarea
                placeholder="Message"
                className="h-32 text-[#d9c5a7] placeholder:text-[#d9c5a7]"
              />
              <Button className="w-full bg-[#d9c5a7] text-black hover:bg-[#c4ae93]">
                Send Message
              </Button>
            </form>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {[
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
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Button
                    variant="outline"
                    className="flex w-full items-center justify-between gap-4 border-[#333] bg-[#1a1a1a] text-[#d9c5a7] hover:bg-[#2a2a2a]"
                  >
                    <social.icon size={24} />
                    <span>{social.label}</span>
                    <span>→</span>
                  </Button>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default ContactSection;
