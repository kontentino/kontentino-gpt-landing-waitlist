import { ChangeEvent } from "react";
import Form from "@/components/form";

interface JoinSectionProps {
  email: string;
  role: string;
  linkedin: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLinkedInChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function JoinSection({
  email,
  role,
  linkedin,
  handleEmailChange,
  handleRoleChange,
  handleLinkedInChange,
  handleSubmit,
  loading,
}: JoinSectionProps) {
  return (
    <div className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          {/* Wave Status Badge */}
          <div className="mb-6 flex justify-center">
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

          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the waitlist and be among the first to access Social Media Planner
          </p>
        </div>
        <div className="mx-auto max-w-md">
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
    </div>
  );
}
