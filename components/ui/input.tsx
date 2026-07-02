import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Terminal-style prefix glyph rendered inside the field. Defaults to ">". */
  prefixGlyph?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, prefixGlyph = ">", type = "text", ...props }, ref) => {
    return (
      <div className="relative w-full">
        <span
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-label text-accent"
        >
          {prefixGlyph}
        </span>
        <input
          ref={ref}
          type={type}
          className={cn(
            "cyber-chamfer-sm w-full min-h-11 border border-border bg-input py-3 pl-9 pr-4",
            "font-mono text-accent tracking-wide caret-accent",
            "transition-all duration-200",
            "placeholder:text-muted-foreground placeholder:tracking-wide",
            "focus:border-accent focus:shadow-neon focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-40",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "font-label text-xs uppercase tracking-[0.2em] text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
