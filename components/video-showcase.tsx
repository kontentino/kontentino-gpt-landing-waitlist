"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Maximize2, X } from "lucide-react";

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

export default function VideoShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex h-full w-full flex-col gap-8">

        {/* Large header section */}
        <div className="text-center space-y-4">
          <h2 className="font-serif text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            See it in action
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Watch how ChatGPT becomes your social media command center
          </p>
        </div>

        {/* Video container */}
        <div className="w-full relative">
          {/* Glowing animated background */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/60 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/60 rounded-full blur-3xl animate-pulse" style={{
              animationDelay: "1s",
            }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary-light/50 rounded-full blur-3xl animate-pulse" style={{
              animationDelay: "2s",
            }}></div>
          </div>

          <div className="w-full rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm p-3 shadow-xl">
            <div className="relative w-full rounded-lg overflow-hidden group">
              <video
                className="w-full h-auto rounded-lg block"
                autoPlay
                loop
                muted
                playsInline
                controls>
                <source src={`${assetPrefix}/hero-demo.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Enlarge icon overlay - top right */}
              <div
                data-name="video-expand"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10"
                onClick={() => setIsOpen(true)}
              >
                <div className="bg-primary/90 rounded-full p-2 hover:bg-primary transition-colors shadow-lg">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0">
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
            {/* Close button */}
            <button
              data-name="video-close"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 text-white transition-all hover:opacity-70"
              aria-label="Close video">
              <X className="h-6 w-6" />
            </button>
            <video
              className="w-full h-full"
              autoPlay
              loop
              muted
              playsInline
              controls>
              <source src={`${assetPrefix}/hero-demo.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
