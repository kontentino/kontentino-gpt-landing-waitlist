"use client";

import { ChangeEvent, MouseEvent, useState } from "react";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { Button } from "@/components/ui/button";
import JoinWaitlistDialog from "@/components/join-waitlist-dialog";
import Image from "next/image";

interface CTAProps {
  email: string;
  role: string;
  linkedin: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLinkedInChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function CTA({
  email,
  role,
  linkedin,
  handleEmailChange,
  handleRoleChange,
  handleLinkedInChange,
  handleSubmit,
  loading,
}: CTAProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      {/* LEFT side - Text */}
      <div className="flex flex-col justify-center gap-6">
        <div>
          <h1 className="text-balance text-center font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-left lg:text-6xl">
            Stop juggling tabs. Stay in ChatGPT.
          </h1>
          <p className="mt-4 text-balance text-center text-xl font-medium text-secondary sm:text-2xl lg:text-left">
            Turn messy chat threads into a visual content calendar — ready to approve and publish.
          </p>
        </div>

        <div>
          <p className="mx-auto max-w-[30rem] text-pretty text-center text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0 lg:text-left">
            The first social media planner built inside ChatGPT. Plan, approve, and schedule — without copy-pasting into other tools.
          </p>
        </div>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <JoinWaitlistDialog
            trigger={
              <EnhancedButton
                variant="expandIcon"
                Icon={FaArrowRightLong}
                iconPlacement="right"
                size="lg"
                className="bg-white px-8 py-6 text-lg text-primary hover:bg-white/90">
                Join the waitlist — it&apos;s free
              </EnhancedButton>
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
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              const videoSection = document
                .querySelector("video")
                ?.closest("section");
              if (videoSection) {
                videoSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="border-white/30 px-8 py-6 text-lg text-white hover:bg-white/10">
            <FaPlay className="mr-2" />
            See in action
          </Button>
        </div>

        <div className="mt-4">
          <p className="text-center text-sm text-white/70 lg:text-left">
            Powered by Kontentino — trusted by 6,000+ teams
          </p>
        </div>
      </div>

      {/* RIGHT side - Badge + Image/GIF showcase */}
      <div className="flex w-full flex-col gap-4">
        {/* Badge at top */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 text-center backdrop-blur-sm">
            <AnimatedShinyText className="px-4 py-1 text-sm text-white/90">
              <span>Social Media Planner for ChatGPT by Kontentino</span>
            </AnimatedShinyText>
          </div>
        </div>

        {/* Image/GIF showcase with tilt effect */}
        <div
          className="flex w-full items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.1s ease-out",
          }}>
          <div className="relative w-full overflow-hidden rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm shadow-2xl">
            {/* Placeholder for GIF/Image - replace with actual image */}
            <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-white/10 to-white/5">
              {/* TODO: Replace with actual GIF or image */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-semibold text-white/90">Product Demo GIF</p>
                  <p className="mt-2 text-sm text-white/70">Place your GIF/image here</p>
                  <p className="mt-1 text-xs text-white/60">/public/hero-showcase.gif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
