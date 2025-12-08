"use client";

import { ChangeEvent, MouseEvent, useState } from "react";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { Button } from "@/components/ui/button";
import JoinWaitlistDialog from "@/components/join-waitlist-dialog";
import Image from "next/image";
import { motion } from "framer-motion";

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

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
          <h1 className="text-balance text-center font-serif text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-left lg:text-6xl">
            Your social media calendar now lives inside ChatGPT
          </h1>
          <p className="mt-4 text-balance text-center text-xl font-medium text-primary sm:text-2xl lg:text-left">
            Plan a month of content in one conversation. Ready to approve,
            export, and schedule.
          </p>
        </div>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <JoinWaitlistDialog
            trigger={
              <EnhancedButton
                data-name="hero-join-wave1"
                variant="expandIcon"
                Icon={FaArrowRightLong}
                iconPlacement="right"
                size="lg"
                className="bg-gradient-to-r from-primary to-cta px-8 py-6 text-lg text-white transition-all hover:shadow-lg hover:shadow-primary/30">
                Join Wave 1 Beta
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
            data-name="hero-see-action"
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
            variant="secondary"
            className="border-0 bg-card px-8 py-6 text-lg text-primary transition-all hover:bg-primary hover:text-white hover:shadow-lg">
            <FaPlay className="mr-2" />
            See in action
          </Button>
        </div>

        {/* Powered by section */}
        <div className="mt-4">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
            <div className="flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 backdrop-blur-sm">
              <svg
                className="h-4 w-4 text-secondary"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-base font-medium text-primary">
                Powered by Kontentino
              </span>
            </div>
            <span className="text-base text-primary/60">
              trusted by 6,000+ social media teams
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT side - Image/GIF showcase */}
      <div className="flex w-full flex-col justify-center gap-4">
        {/* Image/GIF showcase with tilt effect */}
        <div
          className="relative flex w-full items-center justify-center"
          style={{ perspective: "1000px" }}>
          {/* CSS animation wrapper - always running, captures mouse events */}
          <div
            className="w-full animate-[gentle-float_6s_ease-in-out_infinite]"
            style={{ transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
            {/* Mouse hover motion wrapper */}
            <motion.div
              className="w-full"
              animate={{
                rotateY: tilt.y,
                rotateX: tilt.x,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}>
              {/* Glowing animated background */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute -left-10 -top-10 h-80 w-80 animate-pulse rounded-full bg-primary/50 blur-3xl"></div>
                <div
                  className="absolute -bottom-10 -right-10 h-96 w-96 animate-pulse rounded-full bg-secondary/50 blur-3xl"
                  style={{
                    animationDelay: "1s",
                  }}></div>
                <div
                  className="absolute -right-20 top-1/2 h-64 w-64 animate-pulse rounded-full bg-secondary-light/40 blur-3xl"
                  style={{
                    animationDelay: "2s",
                  }}></div>
              </div>

              <div
                className="relative w-full overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10"
                style={{
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 10px 20px -5px rgba(0, 0, 0, 0.3)",
                }}>
                {/* ChatGPT Browser Frame - Blue Theme */}
                <div className="flex items-center justify-between border-b border-primary-dark bg-primary px-2 py-1 md:px-3">
                  {/* Left: Browser dots */}
                  <div className="flex gap-1 md:gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-white/40 md:h-2.5 md:w-2.5"></div>
                    <div className="h-2 w-2 rounded-full bg-white/40 md:h-2.5 md:w-2.5"></div>
                    <div className="h-2 w-2 rounded-full bg-white/40 md:h-2.5 md:w-2.5"></div>
                  </div>

                  {/* Center: "Works inside ChatGPT" badge */}
                  <div className="flex items-center gap-1 rounded-full border border-white/30 bg-white/20 px-2 py-0.5 text-white backdrop-blur-sm md:gap-1.5 md:px-3 md:py-1">
                    <div className="h-1 w-1 animate-pulse rounded-full bg-green-400 md:h-1.5 md:w-1.5"></div>
                    <span className="whitespace-nowrap text-[10px] font-semibold text-white md:text-sm">
                      Works inside ChatGPT
                    </span>
                  </div>

                  {/* Right: Spacer for symmetry */}
                  <div className="w-8 md:w-24"></div>
                </div>
                {/* GIF Content */}
                <div className="relative aspect-[16/9] w-full bg-white">
                  <Image
                    src={`${assetPrefix}/hero-demo-gif.gif`}
                    alt="Social Media Planner Demo"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Description text */}
        <div className="mt-4">
          <p className="text-pretty text-center text-base leading-relaxed text-primary/90 sm:text-lg">
            Turn messy threads into a visual calendar. No copy-paste, no
            switching tools, no chaos.
          </p>
        </div>
      </div>
    </div>
  );
}
