"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "default" | "mint" | "glass" | "outline";
  hoverEffect?: "none" | "lift" | "glow";
  animateTransition?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hoverEffect = "lift", animateTransition = true, children, ...props }, ref) => {
    const variantStyles = {
      default: "bg-bg-white border border-border-main/50 shadow-soft-sm",
      mint: "bg-mint border border-primary/5 shadow-soft-sm",
      glass: "glassmorphism shadow-glass",
      outline: "border border-border-main bg-transparent",
    };

    const hoverStyles = {
      none: "",
      lift: "hover:-translate-y-1.5 hover:shadow-soft-lg hover:border-primary/10 transition-all duration-300",
      glow: "hover:shadow-[0_0_25px_rgba(46,125,50,0.08)] hover:border-primary/20 transition-all duration-300",
    };

    const baseClassNames = cn(
      "rounded-xl sm:rounded-2xl overflow-hidden", // 20-24px rounded corners
      variantStyles[variant],
      hoverEffect !== "none" && hoverStyles[hoverEffect],
      className
    );

    return (
      <motion.div
        ref={ref}
        className={baseClassNames}
        initial={animateTransition ? { opacity: 0, y: 10 } : undefined}
        whileInView={animateTransition ? { opacity: 1, y: 0 } : undefined}
        viewport={animateTransition ? { once: true, margin: "-50px" } : undefined}
        transition={animateTransition ? { duration: 0.5, ease: "easeOut" } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6 sm:p-8", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("font-heading text-lg sm:text-xl font-bold leading-tight text-text-main", className)}
      {...props}
    >
      {children}
    </h3>
  )
);
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-text-secondary leading-relaxed", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 sm:p-8 pt-0 sm:pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 sm:p-8 pt-0 sm:pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";
