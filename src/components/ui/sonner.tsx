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
          // Use requested palette: text #c4b5a0, bg #1a1a1a
          toast:
            "group toast border border-[#c4b5a0]/30 bg-[#1a1a1a] text-[#c4b5a0] shadow-xl backdrop-blur-md",
          title: "text-[#c4b5a0] font-medium",
          description: "text-[#c4b5a0]",
          actionButton:
            "rounded-md bg-[#c4b5a0] px-3 py-1 text-[#1a1a1a] hover:bg-[#d9c5a7]",
          cancelButton:
            "rounded-md border border-[#c4b5a0]/30 bg-transparent px-3 py-1 text-[#c4b5a0] hover:bg-white/5",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
