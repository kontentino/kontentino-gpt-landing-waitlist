import Link from "next/link";

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t bg-card py-12 pb-28 md:py-16 md:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-muted-foreground sm:px-6 lg:px-8">
        {/* Logo and Slogan - Centered */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="https://www.kontentino.com"
            rel="noopener noreferrer"
            target="_blank">
            <img
              src={`${assetPrefix}/kontentino-logo.svg`}
              alt="Kontentino"
              className="h-8 w-auto transition-opacity hover:opacity-80 md:h-10"
            />
          </Link>
          <p className="text-center text-base font-medium text-muted-foreground md:text-lg">
            Making social media a piece of cake 🍰
          </p>
        </div>

        {/* Links and Copyright */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link
              href="https://www.kontentino.com/privacy-policy/"
              rel="noopener noreferrer"
              target="_blank">
              <span className="text-sm text-muted-foreground underline underline-offset-2 transition-all duration-200 ease-linear hover:text-primary">
                Privacy Policy
              </span>
            </Link>
            <Link
              href="https://www.kontentino.com/terms-of-service/"
              rel="noopener noreferrer"
              target="_blank">
              <span className="text-sm text-muted-foreground underline underline-offset-2 transition-all duration-200 ease-linear hover:text-primary">
                Terms of Service
              </span>
            </Link>
            <Link
              href="https://www.kontentino.com/cookies-policy/"
              rel="noopener noreferrer"
              target="_blank">
              <span className="text-sm text-muted-foreground underline underline-offset-2 transition-all duration-200 ease-linear hover:text-primary">
                Cookie Policy
              </span>
            </Link>
          </div>
          <div className="text-sm text-muted-foreground/80">
            © 2025 Kontentino — Social Media Management Platform
          </div>
        </div>
      </div>
    </footer>
  );
}
