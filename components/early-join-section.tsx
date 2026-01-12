import { ChangeEvent } from "react";
import Form from "@/components/form";
import { Zap, Users, Clock, Sparkles } from "lucide-react";

interface EarlyJoinSectionProps {
  email: string;
  role: string;
  linkedin: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLinkedInChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function EarlyJoinSection({
  email,
  role,
  linkedin,
  handleEmailChange,
  handleRoleChange,
  handleLinkedInChange,
  handleSubmit,
  loading,
}: EarlyJoinSectionProps) {
  return (
    <div className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <h2 className="mb-12 font-serif text-balance text-center text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
          Secure Your Spot
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Join form */}
          <div>
            <div className="mb-8">
              {/* Wave Status Badge */}
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/30 bg-secondary/10 px-4 py-2">
                  <span className="text-xl">🚀</span>
                  <span className="text-base font-semibold text-foreground">
                    Wave 1 Beta Access
                  </span>
                  <span className="text-base text-muted-foreground">•</span>
                  <span className="text-base font-medium text-secondary">
                    Limited spots
                  </span>
                </div>
              </div>

              <h2 className="mb-4 text-center font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-left">
                Be among the first to transform your workflow
              </h2>
              <p className="text-center text-base text-muted-foreground lg:text-left">
                Join the exclusive Wave 1 beta and shape the future of social media planning in ChatGPT
              </p>
            </div>
            <div>
              <Form
                email={email}
                role={role}
                linkedin={linkedin}
                handleEmailChange={handleEmailChange}
                handleRoleChange={handleRoleChange}
                handleLinkedInChange={handleLinkedInChange}
                handleSubmit={handleSubmit}
                loading={loading}
              />
            </div>
          </div>

          {/* Right side - Why join now */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="mb-6 text-center text-2xl font-semibold text-foreground lg:text-left">
                Why join Wave 1?
              </h3>
              <div className="flex flex-col gap-6">
                {/* First to access & Shape the product - COMBINED */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Shape the product</h4>
                    <p className="text-base text-muted-foreground">
                      Be <span className="font-semibold text-foreground">first to access</span> the ChatGPT integration months before public launch. Your feedback directly influences features before wide release
                    </p>
                  </div>
                </div>

                {/* Free beta access */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-grass/10">
                    <Zap className="h-6 w-6 text-grass" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Free beta access</h4>
                    <p className="text-base text-muted-foreground">
                      Full access to all features during beta at zero cost
                    </p>
                  </div>
                </div>

                {/* Limited time */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Limited opportunity</h4>
                    <p className="text-base text-muted-foreground">
                      Only accepting beta testers in small waves to ensure quality
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional info about who we're looking for - FANCY */}
              <div className="mt-6 rounded-xl border-2 border-primary/20 bg-card/50 p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-base font-medium text-foreground leading-relaxed">
                    We&apos;re looking for people who love trying new workflows — <span className="font-semibold">innovative marketers</span>, <span className="font-semibold">early adopters</span>, and <span className="font-semibold">advanced AI users</span> who want a smoother way to plan their content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
