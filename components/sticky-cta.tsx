"use client";

import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import JoinWaitlistDialog from "@/components/join-waitlist-dialog";
import { ChangeEvent } from "react";

interface StickyCTAProps {
  email: string;
  role: string;
  linkedin: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLinkedInChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function StickyCTA({
  email,
  role,
  linkedin,
  handleEmailChange,
  handleRoleChange,
  handleLinkedInChange,
  handleSubmit,
  loading,
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      {/* Pulsing ring effect */}
      <div className="absolute inset-0 animate-ping rounded-full bg-secondary opacity-20"></div>

      <JoinWaitlistDialog
        trigger={
          <div className="relative">
            <EnhancedButton
              variant="expandIcon"
              Icon={FaArrowRightLong}
              iconPlacement="right"
              size="lg"
              className="relative bg-gradient-to-r from-primary to-cta px-8 py-6 text-base font-bold text-white shadow-2xl hover:shadow-primary/50 animate-pulse-subtle hover:scale-110 transition-all duration-300">
              <span className="relative z-10">Get Early Access</span>
            </EnhancedButton>
            {/* Small "limited spots" badge */}
            <div className="absolute -top-2 -right-2 rounded-full bg-grass px-2 py-1 text-[10px] font-bold text-white shadow-lg animate-bounce">
              LIMITED
            </div>
          </div>
        }
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
  );
}
