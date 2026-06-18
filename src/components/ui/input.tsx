import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-[8px] border border-[color:var(--color-olive-stone)] bg-transparent px-4 py-2 text-base text-[color:var(--color-cream-glow)] transition-colors placeholder:text-[color:var(--color-ash-gray)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--color-cream-glow)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
