"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        duration: 5000,
        classNames: {
          toast:
            "group toast border border-[color:var(--color-olive-stone)] bg-[color:var(--color-void-black)] text-[color:var(--color-cream-glow)] shadow-xl backdrop-blur-md",
          title: "font-medium",
          actionButton:
            "rounded-md bg-[color:var(--color-pulse-green)] px-3 py-1 text-[color:var(--color-void-black)]",
          cancelButton:
            "rounded-md border border-[color:var(--color-olive-stone)] bg-transparent text-[color:var(--color-cream-glow)]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
