import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa";

export default function Header() {
  const handleSeeInAction = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to video section
    const videoSection = document.querySelector("video")?.closest("section");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-0 z-[50] w-full bg-background shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Title + Logo on the left */}
        <div className="flex items-center gap-2">
          <span className="hidden text-xl font-medium text-primary md:inline">
            Social Media Planner for ChatGPT by
          </span>
          <Link
            href="https://www.kontentino.com"
            rel="noopener noreferrer"
            target="_blank">
            <Image
              src="https://www.kontentino.com/kontentino-pink-dust.svg"
              alt="Kontentino"
              width={120}
              height={28}
              className="h-[1.1rem] w-auto [filter:brightness(0)_saturate(100%)_invert(24%)_sepia(99%)_saturate(3088%)_hue-rotate(227deg)_brightness(98%)_contrast(93%)]"
              unoptimized
            />
          </Link>
        </div>

        {/* CTAs on the right */}
        <div className="flex items-center gap-4">
          <Button
            data-name="header-see-action"
            size="sm"
            onClick={handleSeeInAction}
            className="rounded-xl bg-card px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white hover:shadow-lg">
            <FaPlay className="mr-1.5 text-xs" />
            <span>See in action</span>
          </Button>
          <Link
            data-name="header-about-kontentino"
            href="https://www.kontentino.com"
            rel="noopener noreferrer"
            target="_blank"
            className="hidden md:inline-block">
            <span className="text-sm font-medium text-primary transition-colors hover:text-primary/70">
              About Kontentino
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
