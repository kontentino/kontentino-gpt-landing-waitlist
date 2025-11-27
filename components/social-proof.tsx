"use client";

import { Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";

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
          <p className={`text-sm font-medium text-muted-foreground uppercase tracking-wider transition-all duration-700 ${
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
              <span className="text-2xl font-bold text-foreground">BBDO</span>
            </div>
            {/* McCann */}
            <div className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-2xl font-bold text-foreground">McCANN</span>
            </div>
            {/* Ogilvy */}
            <div className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-2xl font-bold text-foreground">OGILVY</span>
            </div>
            {/* Telekom */}
            <div className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-2xl font-bold text-foreground">TELEKOM</span>
            </div>
            {/* Acer */}
            <div className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-2xl font-bold text-foreground">acer</span>
            </div>
            {/* Nescafé */}
            <div className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-2xl font-bold text-foreground">NESCAFÉ</span>
            </div>
          </div>
        </div>

        {/* Review Ratings */}
        <div className={`transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* G2 */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="text-xl font-bold text-foreground">G2</div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`}
                  />
                ))}
              </div>
              <div className="text-sm font-semibold text-foreground">4.8/5</div>
              <div className="text-xs text-muted-foreground">Based on 100+ reviews</div>
            </div>

            {/* Capterra */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="text-xl font-bold text-foreground">Capterra</div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`}
                  />
                ))}
              </div>
              <div className="text-sm font-semibold text-foreground">4.7/5</div>
              <div className="text-xs text-muted-foreground">Based on 80+ reviews</div>
            </div>

            {/* GetApp */}
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="text-xl font-bold text-foreground">GetApp</div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`}
                  />
                ))}
              </div>
              <div className="text-sm font-semibold text-foreground">4.7/5</div>
              <div className="text-xs text-muted-foreground">Based on 80+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
