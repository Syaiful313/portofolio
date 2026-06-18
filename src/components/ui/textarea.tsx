import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-[8px] border border-[color:var(--color-olive-stone)] bg-transparent px-4 py-3 text-base text-[color:var(--color-cream-glow)] placeholder:text-[color:var(--color-ash-gray)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--color-cream-glow)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
