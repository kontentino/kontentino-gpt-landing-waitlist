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
        <div className="w-full">
          <div className="w-full rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm p-3 shadow-xl">
            <div
              className="relative w-full bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-lg overflow-hidden cursor-pointer group"
              style={{ aspectRatio: '1920 / 1004' }}
              onClick={() => setIsOpen(true)}
            >
              <video
                className="w-full h-full rounded-lg"
                autoPlay
                loop
                muted
                playsInline>
                <source src={`${assetPrefix}/hero-demo.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Enlarge icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3">
                  <Maximize2 className="w-8 h-8 text-primary" />
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
