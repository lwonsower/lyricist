import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "ghost"
  | "glitch";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Chamfer the corners (tech-panel cut). Defaults to true. */
  chamfer?: boolean;
}

const base = cn(
  "inline-flex items-center justify-center gap-2 font-label uppercase tracking-[0.2em]",
  "cursor-pointer select-none whitespace-nowrap",
  "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "focus-visible:shadow-neon",
  "disabled:pointer-events-none disabled:opacity-40"
);

const sizes: Record<ButtonSize, string> = {
  // >=44px tall for touch targets
  sm: "min-h-11 px-4 py-2 text-xs",
  md: "min-h-11 px-6 py-3 text-sm",
  lg: "min-h-12 px-8 py-4 text-base",
};

const variants: Record<ButtonVariant, string> = {
  default: cn(
    "border-2 border-accent bg-transparent text-accent",
    "hover:bg-accent hover:text-background hover:shadow-neon"
  ),
  secondary: cn(
    "border-2 border-accent-secondary bg-transparent text-accent-secondary",
    "hover:bg-accent-secondary hover:text-background hover:shadow-neon-secondary"
  ),
  outline: cn(
    "border border-border bg-transparent text-foreground",
    "hover:border-accent hover:text-accent hover:shadow-neon"
  ),
  ghost: cn(
    "border-2 border-transparent bg-transparent text-foreground",
    "hover:bg-accent/10 hover:text-accent"
  ),
  glitch: cn(
    "border-2 border-accent bg-accent text-background font-bold",
    "hover:brightness-110 hover:shadow-neon-lg"
  ),
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "md", chamfer = true, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          base,
          sizes[size],
          variants[variant],
          chamfer && "cyber-chamfer-sm",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
