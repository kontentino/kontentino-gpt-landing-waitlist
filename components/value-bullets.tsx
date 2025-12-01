import { Calendar, CheckCircle2, Zap } from "lucide-react";

export default function ValueBullets() {
  return (
    <div className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-balance text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
            Why Social Media Planner?
          </h2>
          <p className="text-2xl font-semibold text-foreground md:text-3xl">
            From idea to published. In minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center rounded-2xl bg-card border-2 border-secondary/20 p-8 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all h-full">
            <div className="mb-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
              <Zap className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Visual calendar in seconds</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Turn messy chats into a full monthly content calendar — posts, topics, and visuals included.
            </p>
          </div>

          <div className="flex flex-col items-center text-center rounded-2xl bg-card border-2 border-primary/20 p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all h-full">
            <div className="mb-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Ready to publish</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Approve, export, or schedule your content straight from ChatGPT via Kontentino Social media planner.
            </p>
          </div>

          <div className="flex flex-col items-center text-center rounded-2xl bg-card border-2 border-grass/20 p-8 shadow-sm hover:shadow-md hover:border-grass/40 transition-all h-full">
            <div className="mb-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-grass/10">
              <CheckCircle2 className="h-7 w-7 text-grass" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Stay in flow</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Turn ideas from ChatGPT into structured plans — seamlessly synced into spreadsheets or Kontentino, without the copy-paste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
