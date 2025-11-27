import { CheckCircle2 } from "lucide-react";

export default function EarlyAccessBenefits() {
  return (
    <div className="w-full bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-purple-500/5 p-8 md:p-12 lg:p-16">
        <h3 className="text-balance text-center text-2xl font-semibold text-primary md:text-3xl">
          What you get as an early access member
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h4 className="mb-1 font-semibold text-foreground">Free access to the Social Media Planner beta</h4>
              <p className="text-sm text-muted-foreground">Your input won&apos;t be &quot;feedback&quot; — it will define the product.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h4 className="mb-1 font-semibold text-foreground">Early access inside ChatGPT</h4>
              <p className="text-sm text-muted-foreground">Use Social Media Planner inside ChatGPT — long before any other apps launch in Europe.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h4 className="mb-1 font-semibold text-foreground">Regular updates from the product team</h4>
              <p className="text-sm text-muted-foreground">Early, behind-the-scenes updates before the public launch.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h4 className="mb-1 font-semibold text-foreground">Share your experience</h4>
              <p className="text-sm text-muted-foreground">If you choose to share your experience, we&apos;ll be happy to help you do so.</p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          We&apos;re looking for people who love trying new workflows — innovative marketers, early adopters, and advanced AI users who want a smoother way to plan their content.
        </p>
      </div>
    </div>
  );
}
