"use client";

import { Button } from "@/components/ui/button";
import { socialLinks } from "@/utils/socialLinks";
import { motion } from "framer-motion";
import Link from "next/link";

type SocialLinksProps = {
  isVisible: boolean;
  shouldReduceMotion: boolean | null;
};

const SocialLinks = ({ isVisible, shouldReduceMotion }: SocialLinksProps) => {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.href}
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
  );
};

export default SocialLinks;
