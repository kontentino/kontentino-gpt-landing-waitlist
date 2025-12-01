import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export default function FinalJoinSection() {
  return (
    <div className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="mb-8 text-center text-2xl font-semibold text-foreground">
              Have questions?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Email us</h4>
                  <Link
                    href="mailto:support@kontentino.com"
                    className="text-muted-foreground transition-colors hover:text-primary">
                    support@kontentino.com
                  </Link>
                </div>
              </div>

              {/* Chat */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <MessageCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Live chat</h4>
                  <p className="text-muted-foreground">
                    Available Mon-Fri, 9am-5pm CET
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="rounded-xl border border-border bg-card/50 p-6 text-center">
            <p className="text-base text-muted-foreground">
              Looking for more info about Kontentino?{" "}
              <Link
                href="https://www.kontentino.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-2 hover:text-primary/80">
                Visit our website
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
