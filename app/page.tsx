import Link from "next/link";
import {
  BrainCircuit,
  AudioWaveform,
  GitBranch,
  Radio,
  Zap,
  Terminal as TerminalIcon,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GlitchText } from "@/components/ui/glitch-text";
import { Logo } from "@/components/site/logo";

const FEATURES = [
  {
    icon: BrainCircuit,
    title: "Neural Co-Writer",
    body: "Feed it a mood, a genre, a single broken line. The model returns verses, hooks, and rhyme schemes tuned to your voice — not a template.",
    accent: "text-accent",
  },
  {
    icon: AudioWaveform,
    title: "Meter & Cadence",
    body: "Real-time syllable + stress analysis. See where a line drags, where it lands, and where the flow flatlines before you ever hit record.",
    accent: "text-accent-tertiary",
  },
  {
    icon: GitBranch,
    title: "Version Control for Verses",
    body: "Branch a chorus. Fork a bridge. Diff two drafts side by side. Every idea is kept — nothing gets lost to a closed tab at 3AM.",
    accent: "text-accent-secondary",
  },
  {
    icon: Radio,
    title: "Rhyme Radar",
    body: "Perfect, slant, multisyllabic and internal rhymes surfaced as you type. Break out of the same four end-words you always reach for.",
    accent: "text-accent",
  },
  {
    icon: Zap,
    title: "Instant Rewrites",
    body: "Highlight a weak line. Get five rewrites in different registers — darker, cleaner, more abstract — without losing the thread.",
    accent: "text-accent-tertiary",
  },
  {
    icon: TerminalIcon,
    title: "Command-Line Craft",
    body: "A distraction-free terminal for words. No ribbons, no clutter. Just you, the cursor, and the next line waiting to be written.",
    accent: "text-accent-secondary",
  },
];

const STATS = [
  { value: "2.4M", label: "Lines Written" },
  { value: "48K", label: "Active Writers" },
  { value: "97ms", label: "Rewrite Latency" },
  { value: "∞", label: "Undo Depth" },
];

export default function Landing() {
  return (
    <div className="relative flex-1 overflow-hidden bg-background text-foreground">
      {/* Ambient neon mesh behind everything */}
      <div className="cyber-mesh pointer-events-none absolute inset-0 -z-10" />

      {/* ===================== NAV ===================== */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <div className="hidden items-center gap-8 font-label text-xs uppercase tracking-[0.2em] text-muted-foreground lg:flex">
            <Link href="#features" className="transition-colors hover:text-accent">
              Features
            </Link>
            <Link href="#console" className="transition-colors hover:text-accent">
              Console
            </Link>
            <Link href="#access" className="transition-colors hover:text-accent">
              Access
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/home" className="hidden sm:block">
              <Button variant="glitch" size="sm">
                Jack In
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="cyber-grid relative border-b border-border/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-5 lg:py-32">
          {/* 60% — headline */}
          <div className="lg:col-span-3">
            <div className="mb-6 inline-flex items-center gap-2 border border-accent/40 bg-accent/5 px-3 py-1.5 font-label text-[0.65rem] uppercase tracking-[0.25em] text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              System Online // v2.4.0
            </div>

            <h1 className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              <span className="block text-foreground">Write like</span>
              <GlitchText
                as="span"
                text="the machine"
                className="block text-accent"
              />
              <span className="block text-foreground">is listening.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              <span className="text-accent">&gt;</span> Lyricist is a neural
              songwriting terminal for the ones who write at 3AM. Draft, mutate,
              and version your lyrics with an AI co-writer that respects your
              voice.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/home">
                <Button variant="glitch" size="lg" className="w-full sm:w-auto">
                  Start Writing <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Button>
              </Link>
              <Link href="#console">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Watch The Console
                </Button>
              </Link>
            </div>
          </div>

          {/* 40% — holographic HUD panel (desktop only) */}
          <div className="hidden lg:col-span-2 lg:block">
            <Card
              variant="holographic"
              className="h-full min-h-[22rem] p-6 font-mono text-sm"
            >
              <div className="mb-4 flex items-center justify-between font-label text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                <span>draft.lyric</span>
                <span className="text-accent">● REC</span>
              </div>
              <div className="space-y-2 leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-accent-tertiary">01</span> neon bleeds
                  through the window frame
                </p>
                <p className="text-muted-foreground">
                  <span className="text-accent-tertiary">02</span> the city hums
                  my given name
                </p>
                <p className="text-foreground">
                  <span className="text-accent-tertiary">03</span> i trade my
                  ghost for signal gain
                  <span className="cyber-cursor" />
                </p>
                <div className="!mt-6 border-t border-border pt-4">
                  <p className="font-label text-[0.6rem] uppercase tracking-[0.2em] text-accent">
                    rhyme radar
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 font-label text-[0.65rem] uppercase tracking-widest">
                    {["frame", "name", "gain", "chain", "domain"].map((r) => (
                      <span
                        key={r}
                        className="border border-accent/30 px-2 py-0.5 text-accent-tertiary"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="border-b border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 px-4 py-10 text-center"
            >
              <span className="font-heading text-4xl font-black text-accent md:text-5xl">
                {s.value}
              </span>
              <span className="font-label text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-label text-xs uppercase tracking-[0.25em] text-accent-secondary">
            core_modules
          </p>
          <h2 className="font-heading text-4xl font-bold uppercase tracking-wide md:text-5xl">
            An arsenal for the{" "}
            <span className="text-accent">3AM writer</span>
          </h2>
        </div>

        {/* -skew-y-1 gives the grid a subtle broken-HUD tilt */}
        <div className="-skew-y-1">
          <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <Card key={f.title} hoverEffect>
                <CardContent className="p-8 pt-8">
                  <span className="cyber-chamfer-sm mb-5 inline-flex h-12 w-12 items-center justify-center border border-border bg-muted/40 transition-all duration-150">
                    <f.icon className={`h-6 w-6 ${f.accent}`} strokeWidth={1.5} />
                  </span>
                  <h3 className="mb-3 font-heading text-xl font-semibold uppercase tracking-wide">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONSOLE / TERMINAL ===================== */}
      <section
        id="console"
        className="cyber-grid border-y border-border/60 bg-card/20"
      >
        <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32">
          <div className="mb-10 text-center">
            <p className="mb-3 font-label text-xs uppercase tracking-[0.25em] text-accent-tertiary">
              live_session
            </p>
            <h2 className="font-heading text-4xl font-bold uppercase tracking-wide md:text-5xl">
              Talk to the terminal
            </h2>
          </div>

          <Card
            variant="terminal"
            terminalTitle="lyricist@sprawl: ~/session"
            className="mx-auto"
          >
            <CardContent className="space-y-3 p-6 font-mono text-sm leading-relaxed md:text-base">
              <p className="text-muted-foreground">
                <span className="text-accent">lyricist$</span> new verse --mood
                &quot;rain-soaked, defiant&quot;
              </p>
              <p className="text-foreground">
                &nbsp;&nbsp;i wore the static like a second skin,
              </p>
              <p className="text-foreground">
                &nbsp;&nbsp;let the downpour wash the sellout in—
              </p>
              <p className="text-muted-foreground">
                <span className="text-accent">lyricist$</span> rewrite line 2
                --register darker
              </p>
              <p className="text-accent-tertiary">
                &nbsp;&nbsp;let the flood decide which version wins—
              </p>
              <p className="text-muted-foreground">
                <span className="text-accent">lyricist$</span>{" "}
                <span className="cyber-cursor" />
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===================== CTA / ACCESS ===================== */}
      <section id="access" className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <Card
          variant="holographic"
          className="overflow-hidden px-8 py-16 text-center md:px-16"
        >
          <p className="mb-4 font-label text-xs uppercase tracking-[0.25em] text-accent">
            request_access
          </p>
          <h2 className="mx-auto max-w-3xl font-heading text-4xl font-black uppercase leading-tight tracking-wide md:text-6xl">
            The next line is
            <GlitchText as="span" text=" already yours" className="text-accent" />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Jack into the terminal and write something the algorithm can&apos;t
            predict.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/home">
              <Button variant="glitch" size="lg">
                Jack In Now <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </Link>
          </div>
        </Card>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <Logo />
          <p className="font-label text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            © 2088 Lyricist.sys — no rights reserved in the sprawl
          </p>
        </div>
      </footer>
    </div>
  );
}
