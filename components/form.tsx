import Link from "next/link";
import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";

interface FormProps {
  email: string;
  role: string;
  linkedin: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLinkedInChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function Form({
  email,
  role,
  linkedin,
  handleEmailChange,
  handleRoleChange,
  handleLinkedInChange,
  handleSubmit,
  loading,
}: FormProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border-2 border-border bg-card p-6 shadow-lg">
      <div>
        <Input
          type="email"
          placeholder="Your Email Address*"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <Select
          value={role}
          onChange={handleRoleChange}>
          <option value="">Select Your Role (optional)</option>
          <option value="Social media pro">Social media pro</option>
          <option value="Agency">Agency</option>
          <option value="Creator">Creator</option>
          <option value="Other">Other</option>
        </Select>
      </div>
      <div>
        <Input
          type="url"
          placeholder="LinkedIn profile, Twitter, website... (optional)"
          value={linkedin}
          onChange={handleLinkedInChange}
        />
      </div>
      <div>
        <EnhancedButton
          variant="expandIcon"
          Icon={FaArrowRightLong}
          onClick={handleSubmit}
          iconPlacement="right"
          className="mt-2 w-full bg-gradient-to-r from-primary to-cta text-white hover:shadow-lg hover:shadow-primary/30 transition-all"
          disabled={loading}>
          {loading ? "Joining..." : "Join now — it's free"}
        </EnhancedButton>
      </div>
      <div className="mt-2 text-center text-base text-muted-foreground">
        <p>We&apos;ll start sending invites in small waves to keep feedback manageable.</p>
      </div>
      <div className="text-center text-base text-muted-foreground/80">
        <p>No spam. We only send early access updates.</p>
      </div>
    </div>
  );
}
