import { ChangeEvent } from "react";
import Form from "@/components/form";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

interface FinalJoinSectionProps {
  email: string;
  role: string;
  linkedin: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLinkedInChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function FinalJoinSection({
  email,
  role,
  linkedin,
  handleEmailChange,
  handleRoleChange,
  handleLinkedInChange,
  handleSubmit,
  loading,
}: FinalJoinSectionProps) {
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
                Ready to get started?
              </h2>
              <p className="text-center text-lg text-muted-foreground lg:text-left">
                Join the waitlist and be among the first to access Social Media Planner
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

          {/* Right side - Contact info */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h3 className="mb-6 text-center text-2xl font-semibold text-foreground lg:text-left">
                Have questions?
              </h3>
              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Email us</h4>
                    <Link
                      href="mailto:support@kontentino.com"
                      className="text-muted-foreground transition-colors hover:text-primary">
                      support@kontentino.com
                    </Link>
                  </div>
                </div>

                {/* Chat */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <MessageCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Live chat</h4>
                    <p className="text-muted-foreground">
                      Available Mon-Fri, 9am-5pm CET
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="rounded-xl border border-border bg-card/50 p-6">
              <p className="text-sm text-muted-foreground">
                Looking for more info about Kontentino?{" "}
                <Link
                  href="https://www.kontentino.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary/80">
                  Visit our website
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
