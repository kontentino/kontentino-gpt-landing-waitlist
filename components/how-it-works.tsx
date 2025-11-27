export default function HowItWorks() {
  return (
    <div className="w-full bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <h2 className="font-serif text-balance text-center text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
          How Social Media Planner works
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="flex flex-col gap-4 rounded-2xl bg-card border-2 border-primary/20 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all">
            <div className="text-5xl font-bold text-primary/20">1</div>
            <h3 className="text-xl font-semibold text-foreground">Connect your brand</h3>
            <p className="text-sm text-muted-foreground">
              Paste your website or social profile. Social Media Planner learns your tone of voice and brand basics.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-4 rounded-2xl bg-card border-2 border-secondary/20 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all">
            <div className="text-5xl font-bold text-secondary/20">2</div>
            <h3 className="text-xl font-semibold text-foreground">Turn your ChatGPT content into a visual calendar</h3>
            <p className="text-sm text-muted-foreground">
              No matter what you create in your ChatGPT thread — a single post or a whole month of content for all your channels — Social Media Planner instantly transforms it into a clean visual calendar. You can edit text, swap images, reorganize posts, and shape it into a real content plan.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-4 rounded-2xl bg-card border-2 border-grass/20 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-grass/40 transition-all">
            <div className="text-5xl font-bold text-grass/20">3</div>
            <h3 className="text-xl font-semibold text-foreground">Approve, refine, and publish — all in one flow</h3>
            <p className="text-sm text-muted-foreground">
              Once your calendar looks right, you can send it for approval, export it, or publish it directly via Kontentino. No copy-pasting, no jumping between tools — just a smooth handoff from ideas to execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
