import Link from "next/link";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LogoProps {
  href?: string;
  className?: string;
  /** Show the small ">_ terminal" glyph badge. Defaults to true. */
  badge?: boolean;
}

/**
 * The LYRICIST wordmark. Chamfered glyph badge + Orbitron wordmark with a
 * neon-cyan ".sys" suffix. Kept as a single primitive so the brand mark
 * stays identical everywhere it appears.
 */
export function Logo({ href = "/", className, badge = true }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 font-heading",
        className
      )}
    >
      {badge && (
        <span className="cyber-chamfer-sm flex h-9 w-9 items-center justify-center border border-accent/60 bg-accent/5 text-accent transition-all duration-150 group-hover:bg-accent group-hover:text-background group-hover:shadow-neon">
          <Terminal className="h-4 w-4" strokeWidth={1.5} />
        </span>
      )}
      <span className="text-lg font-black uppercase tracking-[0.3em] text-foreground">
        Lyric<span className="text-accent">ist</span>
        <span className="ml-0.5 font-label text-xs tracking-normal text-accent-tertiary">
          .sys
        </span>
      </span>
    </Link>
  );
}
