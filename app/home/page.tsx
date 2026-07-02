"use client";

import { useMemo, useState } from "react";
import {
  Sparkles,
  Radio,
  AudioWaveform,
  Save,
  Wand2,
  CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/utils";

const SEED = `neon bleeds through the window frame
the city hums my given name
i trade my ghost for signal gain
`;

// Canned co-writer lines — the "AI" appends one of these on demand.
const COWRITER_LINES = [
  "static curls around a dial tone prayer,",
  "i left my pulse encrypted in the air,",
  "downtown flickers like a dying screen,",
  "we are the noise between the in-between,",
  "rain writes cipher on the neon glass,",
  "every chorus is a bridge we crash,",
];

/** Rough syllable estimate — vowel-group heuristic, good enough for a live HUD. */
function countSyllables(text: string): number {
  const words = text.toLowerCase().match(/[a-z]+/g) ?? [];
  return words.reduce((total, word) => {
    const groups = word.match(/[aeiouy]+/g)?.length ?? 0;
    let n = groups;
    if (word.endsWith("e") && n > 1) n -= 1; // silent-e
    return total + Math.max(1, n);
  }, 0);
}

function lastWord(text: string): string {
  const words = text.trim().match(/[a-zA-Z']+/g);
  return words?.[words.length - 1]?.toLowerCase() ?? "";
}

/** Naive rhyme surfacing: pool words sharing the last 2 characters of the seed. */
const RHYME_POOL = [
  "frame", "name", "gain", "chain", "domain", "reclaim", "flame", "arcane",
  "screen", "machine", "unseen", "routine", "serene", "caffeine",
  "glass", "crash", "trespass", "collapse", "aftermath", "backlash",
  "prayer", "elsewhere", "nowhere", "repair", "despair", "flare",
];

function rhymesFor(word: string): string[] {
  if (word.length < 2) return [];
  const tail = word.slice(-2);
  const matches = RHYME_POOL.filter((w) => w !== word && w.endsWith(tail));
  return (matches.length ? matches : RHYME_POOL).slice(0, 6);
}

export default function Workspace() {
  const [text, setText] = useState(SEED);
  const [cowriterIndex, setCowriterIndex] = useState(0);

  const stats = useMemo(() => {
    const lines = text.split("\n").filter((l) => l.trim().length > 0).length;
    const words = (text.match(/\S+/g) ?? []).length;
    const syllables = countSyllables(text);
    return { lines, words, syllables };
  }, [text]);

  const rhymes = useMemo(() => rhymesFor(lastWord(text)), [text]);

  function handleCoWrite() {
    const line = COWRITER_LINES[cowriterIndex % COWRITER_LINES.length];
    setText((prev) => (prev.endsWith("\n") ? prev : prev + "\n") + line + "\n");
    setCowriterIndex((i) => i + 1);
  }

  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-background text-foreground">
      <div className="cyber-mesh pointer-events-none absolute inset-0 -z-10" />

      {/* ===================== WORKSPACE BAR ===================== */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
          <Logo />
          <div className="hidden items-center gap-2 font-label text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <CircleDot className="h-3.5 w-3.5 animate-pulse text-accent" strokeWidth={1.5} />
            untitled_track.lyric
            <span className="text-accent-secondary">*unsaved</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden font-label text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              {stats.words} words
            </span>
            <Button variant="default" size="sm">
              <Save className="h-4 w-4" strokeWidth={1.5} /> Commit
            </Button>
          </div>
        </div>
      </header>

      {/* ===================== WORKSPACE GRID ===================== */}
      <main className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-12">
        {/* ---- Editor ---- */}
        <section className="lg:col-span-8">
          <Card
            variant="terminal"
            terminalTitle="lyricist@sprawl: ~/untitled_track.lyric"
            className="flex h-full flex-col"
          >
            <CardContent className="flex flex-1 flex-col p-0">
              <div className="flex flex-1">
                {/* line-number gutter */}
                <div
                  aria-hidden
                  className="select-none border-r border-border/60 bg-muted/20 px-4 py-6 text-right font-mono text-sm leading-relaxed text-muted-foreground"
                >
                  {Array.from({
                    length: Math.max(text.split("\n").length, 12),
                  }).map((_, i) => (
                    <div key={i}>{String(i + 1).padStart(2, "0")}</div>
                  ))}
                </div>

                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  spellCheck={false}
                  aria-label="Lyric editor"
                  placeholder="start writing the next line..."
                  className={cn(
                    "min-h-[24rem] flex-1 resize-none bg-transparent px-5 py-6",
                    "font-mono text-base leading-relaxed text-accent caret-accent",
                    "placeholder:text-muted-foreground focus:outline-none"
                  )}
                />
              </div>

              {/* editor footer / meter strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-muted/20 px-5 py-3 font-label text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <AudioWaveform className="h-3.5 w-3.5 text-accent-tertiary" strokeWidth={1.5} />
                  {stats.syllables} syllables // {stats.lines} lines
                </span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleCoWrite}
                  className="!min-h-9 !py-1.5"
                >
                  <Wand2 className="h-3.5 w-3.5" strokeWidth={1.5} /> Co-write next line
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ---- Side HUD ---- */}
        <aside className="flex flex-col gap-6 lg:col-span-4">
          {/* Session stats */}
          <Card variant="holographic" className="p-6">
            <p className="mb-4 flex items-center gap-2 font-label text-xs uppercase tracking-[0.25em] text-accent">
              <Sparkles className="h-4 w-4" strokeWidth={1.5} /> Session Vitals
            </p>
            <div className="grid grid-cols-3 divide-x divide-border/60 text-center">
              {[
                { v: stats.lines, l: "lines" },
                { v: stats.words, l: "words" },
                { v: stats.syllables, l: "syllables" },
              ].map((s) => (
                <div key={s.l} className="px-2">
                  <div className="font-heading text-3xl font-black text-foreground">
                    {s.v}
                  </div>
                  <div className="mt-1 font-label text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Rhyme radar */}
          <Card variant="terminal" terminalTitle="rhyme_radar.exe">
            <CardContent className="p-6 pt-6">
              <p className="mb-3 flex items-center gap-2 font-label text-xs uppercase tracking-[0.25em] text-accent-tertiary">
                <Radio className="h-4 w-4" strokeWidth={1.5} /> Rhyme Radar
              </p>
              <p className="mb-4 font-mono text-sm text-muted-foreground">
                <span className="text-accent">&gt;</span> matching{" "}
                <span className="text-foreground">
                  {lastWord(text) || "…"}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {rhymes.length ? (
                  rhymes.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() =>
                        setText((prev) =>
                          (prev.endsWith(" ") || prev.endsWith("\n") || !prev
                            ? prev
                            : prev + " ") + r
                        )
                      }
                      className="cyber-chamfer-sm border border-accent/30 px-3 py-1.5 font-label text-xs uppercase tracking-widest text-accent-tertiary transition-all duration-150 hover:border-accent hover:text-accent hover:shadow-neon-sm"
                    >
                      {r}
                    </button>
                  ))
                ) : (
                  <span className="font-mono text-sm text-muted-foreground">
                    write a line to scan for rhymes
                    <span className="cyber-cursor" />
                  </span>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Co-writer prompt */}
          <Card variant="holographic" className="p-6">
            <p className="mb-3 flex items-center gap-2 font-label text-xs uppercase tracking-[0.25em] text-accent-secondary">
              <Wand2 className="h-4 w-4" strokeWidth={1.5} /> Neural Co-Writer
            </p>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Stuck between lines? Let the model draft the next one in your
              register — then bend it until it&apos;s yours.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleCoWrite}
              className="w-full"
            >
              Generate Next Line
            </Button>
          </Card>
        </aside>
      </main>
    </div>
  );
}
