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
    <div className="sticky top-0 z-[50] w-full bg-pink-600 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Title + Logo on the left */}
        <div className="flex items-center gap-2">
          <span className="hidden text-xl font-medium text-white md:inline">
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
              className="h-[1.1rem] w-auto brightness-0 invert"
              unoptimized
            />
          </Link>
        </div>

        {/* CTAs on the right */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={handleSeeInAction}
            className="rounded-xl border-0 bg-white font-medium text-pink-600 transition-all duration-150 ease-linear hover:bg-white/90">
            <FaPlay className="mr-1.5 text-xs" />
            <span className="text-pink-600">See in action</span>
          </Button>
          <Link
            href="https://www.kontentino.com"
            rel="noopener noreferrer"
            target="_blank"
            className="hidden md:inline-block">
            <Button
              size="sm"
              variant="ghost"
              className="rounded-xl border-2 border-white font-medium text-white transition-all duration-150 ease-linear hover:bg-white hover:text-pink-600">
              <span>About Kontentino</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
