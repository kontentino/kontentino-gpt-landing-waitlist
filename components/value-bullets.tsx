import { Calendar, CheckCircle2, Zap } from "lucide-react";

export default function ValueBullets() {
  return (
    <div className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 font-serif text-balance text-center text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
          The magic happens in seconds
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center rounded-2xl bg-card border-2 border-secondary/20 p-8 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all h-full">
            <div className="mb-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
              <Zap className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Watch content appear instantly</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Turn one ChatGPT conversation into a full month of organized posts with a visual calendar that appears in seconds.
            </p>
          </div>

          <div className="flex flex-col items-center text-center rounded-2xl bg-card border-2 border-primary/20 p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all h-full">
            <div className="mb-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Never leave ChatGPT</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plan, edit, approve, and schedule — all without switching tabs or copy-pasting between tools.
            </p>
          </div>

          <div className="flex flex-col items-center text-center rounded-2xl bg-card border-2 border-grass/20 p-8 shadow-sm hover:shadow-md hover:border-grass/40 transition-all h-full">
            <div className="mb-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-grass/10">
              <CheckCircle2 className="h-7 w-7 text-grass" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Ready to publish</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Approve, export to CSV/Sheets, or publish directly to your social platforms via Kontentino.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
