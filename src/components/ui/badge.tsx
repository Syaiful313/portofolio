import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-[color:var(--color-cream-glow)] focus:ring-offset-0",
  {
    variants: {
      variant: {
        default:
          "border-[color:var(--color-olive-stone)] bg-transparent text-[color:var(--color-cream-glow)] hover:border-[color:var(--color-cream-glow)]",
        secondary:
          "border-[color:var(--color-olive-stone)] bg-transparent text-[color:var(--color-ash-gray)] hover:text-[color:var(--color-cream-glow)]",
        destructive:
          "border-transparent bg-[color:var(--color-ember-orange)] text-[color:var(--color-void-black)]",
        outline:
          "border-[color:var(--color-olive-stone)] text-[color:var(--color-cream-glow)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
