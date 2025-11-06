"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Figma-based Button component
 * Extracted from: Solar for Lexipol Design System
 * Node IDs: 2677:17954, 2677:17993, 2677:17929, 2677:17866, etc.
 */

const buttonFigmaVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 font-[var(--button-font-family,Inter)] font-[var(--button-font-weight,500)]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--buttons-primary-default-background,#004b87)] text-[var(--buttons-primary-default-text,#ffffff)] border border-[var(--buttons-primary-default-stroke,#004b87)] hover:opacity-90",
        destructive:
          "bg-[var(--buttons-destructive-default-background,#dc2626)] text-[var(--buttons-destructive-default-text,#ffffff)] border border-[var(--buttons-destructive-default-stroke,#dc2626)] hover:bg-[var(--buttons-destructive-hovered-background,#dc2626)]",
        secondary:
          "bg-[var(--buttons-secondary-default-background,#ffffff)] text-[var(--buttons-secondary-default-text,#121926)] border border-[var(--buttons-secondary-default-stroke,#e3e8ef)] hover:bg-gray-50",
        outline:
          "bg-transparent text-[var(--buttons-ghost-default-text,#004b87)] border border-[var(--buttons-secondary-default-stroke,#e3e8ef)] hover:bg-gray-50",
        ghost:
          "bg-[var(--buttons-ghost-default-background,transparent)] text-[var(--buttons-ghost-default-text,#004b87)] border-[var(--buttons-ghost-default-stroke,transparent)] hover:bg-gray-100",
        link:
          "bg-transparent text-[var(--buttons-primary-default-background,#004b87)] border-transparent underline-offset-4 hover:underline",
      },
      size: {
        sm: "px-[var(--spacing-4,16px)] py-[var(--spacing-2,8px)] rounded-[var(--button-radius-sm,4px)] text-[var(--button-sm-font-size,16px)] leading-[var(--button-sm-line-height,1.2)] tracking-[var(--button-sm-letter-spacing,0.16px)] [&_svg]:size-[var(--button-icon-sm,16px)]",
        default:
          "px-[var(--spacing-6,24px)] py-[var(--spacing-3,12px)] rounded-[var(--button-radius-md,4px)] text-[var(--button-md-font-size,18px)] leading-[var(--button-md-line-height,1.2)] tracking-[var(--button-md-letter-spacing,0.18px)] [&_svg]:size-[var(--button-icon-md,24px)]",
        lg: "px-[var(--spacing-8,32px)] py-[var(--spacing-4,16px)] rounded-[var(--button-radius-lg,8px)] text-[var(--button-lg-font-size,22px)] leading-[var(--button-lg-line-height,1.2)] tracking-[var(--button-lg-letter-spacing,0.22px)] [&_svg]:size-[var(--button-icon-lg,24px)]",
        icon: "h-9 w-9 rounded-[var(--button-radius-md,4px)] [&_svg]:size-[var(--button-icon-md,24px)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonFigmaProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonFigmaVariants> {
  asChild?: boolean
}

const ButtonFigma = React.forwardRef<HTMLButtonElement, ButtonFigmaProps>(
  ({ className, variant, size, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Handle disabled state with Figma tokens
    const disabledClasses = disabled
      ? "bg-[var(--buttons-primary-disabled-background,#eef2f6)] text-[var(--buttons-primary-disabled-text,#121926)] border-[var(--buttons-primary-disabled-stroke,#e3e8ef)] cursor-not-allowed opacity-50"
      : ""
    
    return (
      <Comp
        className={cn(
          buttonFigmaVariants({ variant, size }),
          disabledClasses,
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    )
  }
)
ButtonFigma.displayName = "ButtonFigma"

export { ButtonFigma, buttonFigmaVariants }
