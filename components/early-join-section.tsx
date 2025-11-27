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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Join form */}
          <div>
            <div className="mb-8">
              {/* Wave Status Badge */}
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/30 bg-secondary/10 px-4 py-2">
                  <span className="text-xl">🚀</span>
                  <span className="text-sm font-semibold text-foreground">
                    Wave 1 Beta Access
                  </span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm font-medium text-secondary">
                    Limited spots
                  </span>
                </div>
              </div>

              <h2 className="mb-4 text-center font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-left">
                Be among the first to transform your workflow
              </h2>
              <p className="text-center text-lg text-muted-foreground lg:text-left">
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
                {/* First to access */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">First to access</h4>
                    <p className="text-sm text-muted-foreground">
                      Get the ChatGPT integration months before it launches in Europe
                    </p>
                  </div>
                </div>

                {/* Shape the product */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Shape the product</h4>
                    <p className="text-sm text-muted-foreground">
                      Your feedback directly influences features before public launch
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
                    <p className="text-sm text-muted-foreground">
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
                    <p className="text-sm text-muted-foreground">
                      Only accepting beta testers in small waves to ensure quality
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
