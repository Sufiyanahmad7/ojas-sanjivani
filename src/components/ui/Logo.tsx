import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  iconSize?: number;
  hideText?: boolean;
  variant?: "horizontal" | "vertical" | "icon" | "favicon";
}

/**
 * Premium Vector Logo for Ojas Sanjivani.
 * Combines a leaf, medical cross, human wellness silhouette, and circular harmony.
 */
export function Logo({
  className,
  iconSize = 40,
  hideText = false,
  variant = "horizontal",
  ...props
}: LogoProps) {
  // Render the core brand mark
  const renderIcon = (size: number) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Outer Ring: Circular Harmony */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="#2E7D32"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="210 40"
      />
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="#43A047"
        strokeWidth="1.5"
        strokeOpacity="0.25"
        strokeDasharray="5 5"
      />

      {/* Healing Energy Arc */}
      <path
        d="M20 32 C 32 18, 68 18, 80 32"
        stroke="#43A047"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />

      {/* Natural Leaf Backdrop */}
      <path
        d="M50 14 C 68 30, 68 62, 50 86 C 32 62, 32 30, 50 14 Z"
        fill="#43A047"
      />

      {/* Professional Medical Cross (Negative Space / White) */}
      <path
        d="M46 32 H54 V44 H66 V52 H54 V64 H46 V52 H34 V44 H46 Z"
        fill="#FFFFFF"
      />

      {/* Human Wellness Silhouette (Representing Ojas / Vitality) */}
      {/* Head */}
      <circle cx="50" cy="38.5" r="3.5" fill="#2E7D32" />
      {/* Torso & Reaching Arms for Vitality */}
      <path
        d="M50 43.5 C44 43.5, 39 41.5, 36 38.5 C41 42.5, 46 45, 50 45 C54 45, 59 42.5, 64 38.5 C61 41.5, 56 43.5, 50 43.5 Z"
        fill="#2E7D32"
      />
      <path
        d="M48.5 43.5 V62 H51.5 V43.5 Z"
        fill="#2E7D32"
      />
      {/* Grounding Base Line */}
      <path
        d="M42 62 C 46 59.5, 54 59.5, 58 62"
        stroke="#2E7D32"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === "icon" || hideText) {
    return (
      <div className={cn("inline-flex items-center justify-center", className)} {...props}>
        {renderIcon(iconSize)}
      </div>
    );
  }

  if (variant === "favicon") {
    return renderIcon(16);
  }

  if (variant === "vertical") {
    return (
      <div
        className={cn("inline-flex flex-col items-center text-center space-y-3", className)}
        {...props}
      >
        {renderIcon(iconSize)}
        <div className="flex flex-col items-center">
          <span className="font-heading text-lg font-extrabold tracking-wide text-primary">
            OJAS
          </span>
          <span className="font-sans text-sm font-semibold tracking-widest text-text-secondary uppercase -mt-1">
            Sanjivani
          </span>
        </div>
      </div>
    );
  }

  // Default: Horizontal
  return (
    <div
      className={cn("inline-flex items-center space-x-3 select-none", className)}
      {...props}
    >
      {renderIcon(iconSize)}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline">
          <span className="font-heading text-xl font-extrabold tracking-wide text-primary">
            OJAS
          </span>
          <span className="font-heading text-xl font-light tracking-wide text-secondary ml-1">
            SANJIVANI
          </span>
        </div>
        <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-text-secondary uppercase mt-0.5">
          Holistic Healthcare
        </span>
      </div>
    </div>
  );
}
