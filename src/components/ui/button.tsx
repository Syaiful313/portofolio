import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--color-cream-glow)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-[color:var(--color-cream-glow)] bg-transparent text-[color:var(--color-cream-glow)] hover:bg-[color:var(--color-cream-glow)] hover:text-[color:var(--color-void-black)]",
        destructive:
          "border-transparent bg-[color:var(--color-ember-orange)] text-[color:var(--color-void-black)] hover:opacity-90",
        outline:
          "border-[color:var(--color-cream-glow)] bg-transparent text-[color:var(--color-cream-glow)] hover:bg-[color:var(--color-cream-glow)] hover:text-[color:var(--color-void-black)]",
        secondary:
          "border-[color:var(--color-olive-stone)] bg-transparent text-[color:var(--color-cream-glow)] hover:border-[color:var(--color-cream-glow)] hover:bg-[color:var(--color-olive-stone)]",
        ghost:
          "border-transparent bg-transparent text-[color:var(--color-cream-glow)] hover:bg-[color:var(--color-olive-stone)]",
        link: "border-transparent px-0 py-0 text-[color:var(--color-cream-glow)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-6",
        icon: "h-10 w-10 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
