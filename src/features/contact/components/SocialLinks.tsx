"use client";

import { socialLinks } from "@/utils/socialLinks";
import { motion } from "framer-motion";
import Link from "next/link";

type SocialLinksProps = {
  isVisible: boolean;
  shouldReduceMotion: boolean | null;
};

const SocialLinks = ({ isVisible, shouldReduceMotion }: SocialLinksProps) => {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
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
            className="pill-link group w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--color-cream-glow)]"
          >
            <social.icon
              size={20}
              className="mr-2 flex-shrink-0 text-[color:var(--color-pulse-green)]"
            />
            <span className="hidden text-sm font-medium text-[color:var(--color-cream-glow)] sm:block">
              {social.name}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialLinks;
