import Link from "next/link";
import { HeadphonesIcon, Users, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function FinalJoinSection() {
  return (
    <div className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Have questions about the beta?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're here to help. Reach out and we'll get back to you shortly.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* General Questions */}
            <div className="flex flex-col gap-4 rounded-xl border-2 border-primary/20 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">General Questions</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Questions about the ChatGPT integration, beta access, or how it works? We're happy to help.
              </p>
              <Link
                href="https://www.kontentino.com/contact/"
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white">
                  Contact us
                </Button>
              </Link>
            </div>

            {/* Enterprise & Teams */}
            <div className="flex flex-col gap-4 rounded-xl border-2 border-secondary/20 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Enterprise & Teams</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Need early access for your team or looking for enterprise pricing? Let's talk.
              </p>
              <Link
                href="https://www.kontentino.com/contact/"
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full border-secondary/30 text-secondary hover:bg-secondary hover:text-white">
                  Talk to sales
                </Button>
              </Link>
            </div>
          </div>

          {/* Additional Help */}
          <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Need immediate assistance?
            </h3>
            <p className="mb-5 text-base text-muted-foreground">
              Chat with our support team on kontentino.com for real-time help
            </p>
            <Link
              href="https://www.kontentino.com/contact/"
              target="_blank"
              rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Open live chat on kontentino.com
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
