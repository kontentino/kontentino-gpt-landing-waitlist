import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function WhoItsFor() {
  return (
    <div className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <h2 className="font-serif text-balance text-center text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
          Who is Social Media Planner for
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {/* For Social Media Marketers */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="relative w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img/freelancers.webp"
                alt="Social Media Marketers"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="mb-6 text-2xl font-semibold text-foreground">For Social Media Marketers</h3>
              <ul className="flex flex-col gap-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base">You use ChatGPT for ideas and drafts, and you want an easier way to turn them into a content plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base">You need a clean visual calendar, fast edits, and simple approvals without jumping between tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base">You want smoother collaboration and faster feedback loops — without the copy-paste</span>
                </li>
              </ul>
            </div>
          </div>

          {/* For Everyday Creators */}
          <div className="flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-12">
            <div className="relative w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/img/brands.webp"
                alt="Everyday Creators"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="mb-6 text-2xl font-semibold text-foreground">For Everyday Creators</h3>
              <ul className="flex flex-col gap-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base">You want to plan your social content visually inside ChatGPT</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base">You want to easily adjust posts — change images, tweak text, and refine ideas — without leaving the chat</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base">You want to publish directly from ChatGPT to your social media platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
