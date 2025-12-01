"use client";

import { Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full px-4 py-12 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Trust Badge */}
        <div className="mb-12 text-center">
          <p className={`text-base font-medium text-muted-foreground uppercase tracking-wider transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            Powered by Kontentino
          </p>
          <h3 className={`mt-2 text-3xl font-bold text-foreground transition-all duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            Trusted by 6,000+ teams
          </h3>
        </div>

        {/* Client Logos */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center">
            {/* BBDO */}
            <div className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="https://www.kontentino.com/img/logo/bbdo-primary-50.svg"
                alt="BBDO"
                width={100}
                height={50}
                className="h-10 w-auto"
                unoptimized
              />
            </div>
            {/* McCann */}
            <div className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="https://www.kontentino.com/img/logo/mccann-primary-50.svg"
                alt="McCann"
                width={100}
                height={50}
                className="h-10 w-auto"
                unoptimized
              />
            </div>
            {/* Ogilvy */}
            <div className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="https://www.kontentino.com/img/logo/ogilvy-primary-50.svg"
                alt="Ogilvy"
                width={100}
                height={50}
                className="h-10 w-auto"
                unoptimized
              />
            </div>
            {/* Telekom */}
            <div className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="https://www.kontentino.com/img/logo/telekom-primary-50.svg"
                alt="Telekom"
                width={100}
                height={50}
                className="h-10 w-auto"
                unoptimized
              />
            </div>
            {/* Acer */}
            <div className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="https://www.kontentino.com/img/logo/acer-primary-50.svg"
                alt="Acer"
                width={100}
                height={50}
                className="h-10 w-auto"
                unoptimized
              />
            </div>
            {/* Nescafé */}
            <div className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image
                src="https://www.kontentino.com/img/logo/nescafe-primary-50.svg"
                alt="Nescafé"
                width={100}
                height={50}
                className="h-10 w-auto"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Review Ratings */}
        <div className={`transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* G2 */}
            <a
              href="https://www.g2.com/products/kontentino/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">G2</div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`}
                  />
                ))}
              </div>
              <div className="text-lg font-semibold text-foreground">4.8/5</div>
              <div className="text-sm text-muted-foreground">Based on 100+ reviews</div>
            </a>

            {/* Capterra */}
            <a
              href="https://www.capterra.com/p/152937/Kontentino/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">Capterra</div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`}
                  />
                ))}
              </div>
              <div className="text-lg font-semibold text-foreground">4.7/5</div>
              <div className="text-sm text-muted-foreground">Based on 193 reviews</div>
            </a>

            {/* GetApp */}
            <a
              href="https://www.getapp.com/marketing-software/a/kontentino/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-8 shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">GetApp</div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`}
                  />
                ))}
              </div>
              <div className="text-lg font-semibold text-foreground">4.7/5</div>
              <div className="text-sm text-muted-foreground">Based on 196 reviews</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
