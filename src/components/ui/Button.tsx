"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  animateScale?: boolean;
  href?: string;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", animateScale = true, type = "button", children, href, asChild, ...props }, ref) => {
    // Style configurations based on variant
    const variantStyles = {
      primary: "bg-primary text-bg-white shadow-soft-sm hover:bg-primary-hover border border-transparent",
      secondary: "bg-light-green text-primary hover:bg-secondary/15 border border-transparent",
      outline: "border border-border-main bg-transparent text-text-main hover:bg-mint hover:border-primary/30",
      ghost: "hover:bg-mint text-text-main hover:text-primary border border-transparent",
      link: "text-primary underline-offset-4 hover:underline bg-transparent border border-transparent p-0",
    };

    // Padding/Size configurations
    const sizeStyles = {
      sm: "h-9 px-4 text-xs rounded-full font-medium",
      md: "h-11 px-6 text-sm rounded-full font-semibold tracking-wide",
      lg: "h-13 px-8 text-base rounded-full font-bold tracking-wide",
      icon: "h-11 w-11 rounded-full items-center justify-center p-0",
    };

    const baseClassNames = cn(
      "inline-flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (animateScale) {
        return (
          <motion.a
            ref={ref as any}
            href={href}
            className={baseClassNames}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            {...(props as any)}
          >
            {children}
          </motion.a>
        );
      }

      return (
        <a ref={ref as any} href={href} className={baseClassNames} {...(props as any)}>
          {children}
        </a>
      );
    }

    if (animateScale) {
      return (
        <motion.button
          ref={ref}
          type={type}
          className={baseClassNames}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          {...(props as any)}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <button ref={ref} type={type} className={baseClassNames} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
