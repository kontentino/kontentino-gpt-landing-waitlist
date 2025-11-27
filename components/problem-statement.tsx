import { Copy, RefreshCcw, Sparkles, ArrowRight } from "lucide-react";

export default function ProblemStatement() {
  return (
    <div className="w-full bg-gradient-to-b from-background to-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            The problem isn&apos;t ChatGPT. Or your calendar.
          </p>
          <h2 className="mb-16 font-serif text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            It&apos;s the annoying gap between them.
          </h2>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Problem 1: Copy-paste breaks flow */}
            <div className="relative rounded-2xl border-2 border-secondary/30 bg-card p-8 shadow-lg hover:border-secondary/50 transition-all">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Copy className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <p className="mb-4 text-base font-bold uppercase tracking-wide text-secondary">
                Problem #1
              </p>
              <h3 className="mb-6 text-xl font-bold text-foreground">
                Copy-paste breaks your flow
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <p className="text-sm text-foreground">
                    Brainstorm in ChatGPT
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <p className="text-sm text-foreground">
                    Copy-paste into Google Sheets
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <p className="text-sm text-foreground">
                    Copy-paste into scheduling tool
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <p className="text-sm text-foreground">
                    Send approval links to team
                  </p>
                </div>
              </div>
              <p className="mt-6 text-lg font-bold text-primary">
                Every. Single. Time.
              </p>
            </div>

            {/* Problem 2: No live sync */}
            <div className="relative rounded-2xl border-2 border-primary/30 bg-card p-8 shadow-lg hover:border-primary/50 transition-all">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <RefreshCcw className="h-8 w-8 text-primary" />
                </div>
              </div>
              <p className="mb-4 text-base font-bold uppercase tracking-wide text-primary">
                Problem #2
              </p>
              <h3 className="mb-6 text-xl font-bold text-foreground">
                Your ideas should become your calendar
              </h3>
              <div className="space-y-4 text-left">
                <p className="text-sm text-foreground">
                  But instead, you manually rebuild everything outside ChatGPT.
                </p>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="text-sm font-semibold text-foreground/90">
                    Why isn&apos;t this automatic?
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 3: No wow factor */}
            <div className="relative rounded-2xl border-2 border-grass/30 bg-card p-8 shadow-lg hover:border-grass/50 transition-all">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-grass/10">
                  <Sparkles className="h-8 w-8 text-grass" />
                </div>
              </div>
              <p className="mb-4 text-base font-bold uppercase tracking-wide text-grass">
                Problem #3
              </p>
              <h3 className="mb-6 text-xl font-bold text-foreground">
                Where&apos;s the magic?
              </h3>
              <div className="space-y-4 text-left">
                <p className="text-sm text-foreground">
                  You want to see a full month of content appear instantly.
                </p>
                <p className="text-sm text-foreground/70">
                  Not spend hours formatting and organizing.
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="mt-12 inline-block rounded-2xl border-2 border-primary/40 bg-gradient-to-r from-primary/10 to-secondary/10 px-10 py-6 shadow-xl">
            <p className="text-2xl font-bold text-foreground sm:text-3xl">
              Social Media Planner closes the gap.
            </p>
            <p className="mt-3 text-lg text-foreground/80">
              Stay in ChatGPT. Watch the magic happen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
