import * as React from "react";
import { cn } from "@/lib/utils";

type GlitchTag = "h1" | "h2" | "h3" | "span" | "div";

export interface GlitchTextProps
  extends React.HTMLAttributes<HTMLElement> {
  /** The text to render. Also mirrored into data-text for the RGB-split layers. */
  text: string;
  as?: GlitchTag;
}

/**
 * Chromatic-aberration headline. The magenta/cyan pseudo-element layers read
 * from data-text, so the visible text and the glitch layers stay in sync.
 * Motion is disabled automatically under prefers-reduced-motion (see globals.css),
 * leaving a static RGB split.
 */
export function GlitchText({
  text,
  as = "span",
  className,
  ...props
}: GlitchTextProps) {
  const Tag = as;
  return (
    <Tag
      data-text={text}
      className={cn("cyber-glitch inline-block", className)}
      {...props}
    >
      {text}
    </Tag>
  );
}
