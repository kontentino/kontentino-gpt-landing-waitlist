"use client";

import { toast } from "sonner";
import { useState } from "react";
import CTA from "@/components/cta";
import Form from "@/components/form";
import VideoShowcase from "@/components/video-showcase";
import ProblemStatement from "@/components/problem-statement";
import ValueBullets from "@/components/value-bullets";
import SocialProof from "@/components/social-proof";
import EarlyJoinSection from "@/components/early-join-section";
import HowItWorks from "@/components/how-it-works";
import WhoItsFor from "@/components/who-its-for";
import EarlyAccessBenefits from "@/components/early-access-benefits";
import FinalJoinSection from "@/components/final-join-section";
import StickyCTA from "@/components/sticky-cta";
import Particles from "@/components/ui/particles";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  const handleLinkedInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkedin(event.target.value);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    const promise = new Promise(async (resolve, reject) => {
      try {
        // Save to Pipedrive CRM
        const pipedriveResponse = await fetch("/api/pipedrive", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, role, linkedin }),
        });

        if (!pipedriveResponse.ok) {
          if (pipedriveResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Failed to save");
          }
          return;
        }

        resolve({ email });
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(promise, {
      loading: "Securing your beta access...",
      success: (data) => {
        setEmail("");
        setRole("");
        setLinkedin("");
        return "Welcome! You're on the waitlist. We'll be in touch soon.";
      },
      error: (error) => {
        if (error === "Rate limited") {
          return "You're doing that too much. Please try again later";
        } else if (error === "Failed to save") {
          return "Failed to save your details. Please try again.";
        }
        return "An error occurred. Please try again.";
      },
    });

    promise.finally(() => {
      setLoading(false);
    });
  };

  return (
    <main className="relative flex min-h-screen flex-col overflow-x-clip">
      <Header />

      {/* Blue Hero Section */}
      <section className="relative w-full bg-primary px-4 pt-12 pb-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20 lg:pb-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center">
          <CTA
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
      </section>

      {/* Video Showcase Section */}
      <section className="w-full bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <VideoShowcase />
        </div>
      </section>

      {/* Problem Statement - Show the pain */}
      <section className="w-full">
        <ProblemStatement />
      </section>

      {/* Value Bullets - The magic */}
      <section className="w-full bg-background">
        <ValueBullets />
      </section>

      {/* Social Proof - Trust signals */}
      <section className="w-full bg-background">
        <SocialProof />
      </section>

      {/* Early Join Section - First conversion opportunity with FOMO */}
      <section className="w-full bg-card">
        <EarlyJoinSection
          email={email}
          role={role}
          linkedin={linkedin}
          handleEmailChange={handleEmailChange}
          handleRoleChange={handleRoleChange}
          handleLinkedInChange={handleLinkedInChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </section>

      {/* How It Works - For those who need more info */}
      <section className="w-full bg-background">
        <HowItWorks />
      </section>

      {/* Who It's For - Self-identification */}
      <section className="w-full bg-background">
        <WhoItsFor />
      </section>

      {/* Early Access Benefits - Final FOMO push */}
      <section className="w-full bg-background">
        <EarlyAccessBenefits />
      </section>

      {/* Final Join Section with Contact Info - Second conversion opportunity */}
      <section className="w-full bg-card">
        <FinalJoinSection
          email={email}
          role={role}
          linkedin={linkedin}
          handleEmailChange={handleEmailChange}
          handleRoleChange={handleRoleChange}
          handleLinkedInChange={handleLinkedInChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </section>

      <Footer />

      {/* Sticky CTA */}
      <StickyCTA
        email={email}
        role={role}
        linkedin={linkedin}
        handleEmailChange={handleEmailChange}
        handleRoleChange={handleRoleChange}
        handleLinkedInChange={handleLinkedInChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />

      {/* Light mode particles */}
      <div className="block dark:hidden">
        <Particles
          quantityDesktop={500}
          quantityMobile={200}
          ease={80}
          color={"#0f2a8f"}
          refresh
        />
      </div>

      {/* Dark mode particles */}
      <div className="hidden dark:block">
        <Particles
          quantityDesktop={350}
          quantityMobile={100}
          ease={80}
          color={"#ab7eff"}
          refresh
        />
      </div>
    </main>
  );
}
