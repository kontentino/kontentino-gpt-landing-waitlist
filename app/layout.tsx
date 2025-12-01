import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

const FigtreeFont = Figtree({ subsets: ["latin"] });

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

export const metadata: Metadata = {
  title: "Kontentino – Social Media Planner for ChatGPT",
  description:
    "Create and schedule posts in a visual content calendar. Plan, create, approve and schedule social media content with AI.",
  icons: {
    icon: [
      { url: `${assetPrefix}/favicon.ico` },
      { url: `${assetPrefix}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${assetPrefix}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
    ],
    apple: `${assetPrefix}/apple-touch-icon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Cookiebot */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="c5141a63-bce3-4de6-8756-2f673694bf8e"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />

        <meta property="og:image" content={`${assetPrefix}/opengraph-image.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="832" />
        <meta
          property="og:site_name"
          content="Kontentino – Social Media Planner for ChatGPT"
        />
        <meta
          property="og:url"
          content="https://gpt-waitlist.kontentino.com/"
        />
        <meta name="twitter:image" content={`${assetPrefix}/twitter-image.png`} />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1280" />
        <meta name="twitter:image:height" content="832" />
      </head>
      <body className={`${FigtreeFont.className} bg-background text-foreground`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TR4BX98"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TR4BX98');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange>
          {children}
          <Toaster richColors position="top-center" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
