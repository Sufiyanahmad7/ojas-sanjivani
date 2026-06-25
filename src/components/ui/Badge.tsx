import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "success" | "warning";
}

export function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  const variantStyles = {
    primary: "bg-primary/10 text-primary border-transparent",
    secondary: "bg-secondary/10 text-secondary border-transparent",
    accent: "bg-accent-amber/10 text-accent-amber border-transparent",
    outline: "border-border-main text-text-secondary bg-transparent",
    success: "bg-accent-emerald/10 text-accent-emerald border-transparent",
    warning: "bg-accent-rose/10 text-accent-rose border-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
