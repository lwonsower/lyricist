import Link from "next/link";
import { ArrowLeft, Fingerprint, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input, Label } from "@/components/ui/input";
import { Logo } from "@/components/site/logo";

export default function Login() {
  return (
    <div className="cyber-grid relative flex flex-1 items-center justify-center overflow-hidden bg-background px-6 py-16">
      {/* ambient corner glow */}
      <div className="cyber-mesh pointer-events-none absolute inset-0" />

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-label text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} /> Exit
          </Link>
        </div>

        <Card variant="terminal" terminalTitle="auth.node // secure_channel">
          <CardContent className="p-8 pt-8">
            <div className="mb-8">
              <p className="font-label text-xs uppercase tracking-[0.25em] text-accent">
                // identify_yourself
              </p>
              <h1 className="mt-2 font-heading text-3xl font-black uppercase tracking-wide">
                Access <span className="text-accent">Terminal</span>
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="text-accent">&gt;</span> Re-establish connection
                to your session in the sprawl.
              </p>
            </div>

            <form className="space-y-6" action="/home">
              <div className="space-y-2">
                <Label htmlFor="handle">Operator Handle</Label>
                <Input
                  id="handle"
                  name="handle"
                  type="text"
                  autoComplete="username"
                  placeholder="ghost_writer_88"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="passkey">Passkey</Label>
                  <Link
                    href="#"
                    className="font-label text-[0.65rem] uppercase tracking-[0.15em] text-accent-tertiary transition-colors hover:text-accent"
                  >
                    Recover?
                  </Link>
                </div>
                <Input
                  id="passkey"
                  name="passkey"
                  type="password"
                  autoComplete="current-password"
                  prefixGlyph="#"
                  placeholder="••••••••••••"
                  required
                />
              </div>

              <Button type="submit" variant="glitch" size="lg" className="w-full">
                <Fingerprint className="h-4 w-4" strokeWidth={1.5} /> Authenticate
              </Button>
            </form>

            <div className="mt-6 flex items-center gap-2 border-t border-border pt-6 font-label text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
              End-to-end encrypted // zero-log protocol
            </div>
          </CardContent>
        </Card>

        <p className="mt-6 text-center font-label text-xs uppercase tracking-[0.2em] text-muted-foreground">
          No credentials?{" "}
          <Link href="/home" className="text-accent hover:underline">
            Request access
          </Link>
        </p>
      </div>
    </div>
  );
}
