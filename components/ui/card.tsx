import * as React from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "terminal" | "holographic";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  /** Lift + neon glow on hover. */
  hoverEffect?: boolean;
  /** Optional label shown in the terminal header bar. */
  terminalTitle?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hoverEffect = false,
      terminalTitle,
      children,
      ...props
    },
    ref
  ) => {
    const shared = cn(
      "relative cyber-chamfer transition-all duration-300",
      hoverEffect &&
        "hover:-translate-y-px hover:border-accent hover:shadow-neon"
    );

    if (variant === "terminal") {
      return (
        <div
          ref={ref}
          className={cn(
            shared,
            "border border-border bg-background pt-10",
            className
          )}
          {...props}
        >
          {/* Decorative window chrome with traffic-light dots */}
          <div className="absolute inset-x-0 top-0 flex h-8 items-center gap-2 border-b border-border bg-muted/40 px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffb020]" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            {terminalTitle && (
              <span className="ml-2 truncate font-label text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                {terminalTitle}
              </span>
            )}
          </div>
          {children}
        </div>
      );
    }

    if (variant === "holographic") {
      return (
        <div
          ref={ref}
          className={cn(
            shared,
            "cyber-corners border border-accent/30 bg-muted/30 shadow-neon backdrop-blur-md",
            className
          )}
          {...props}
        >
          {children}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(shared, "border border-border bg-card", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2 p-6", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-heading text-xl font-semibold uppercase tracking-wide text-foreground",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}
