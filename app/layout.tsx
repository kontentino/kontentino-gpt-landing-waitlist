import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

const FigtreeFont = Figtree({ subsets: ["latin"] });

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";
// For OG images, always use absolute URLs (required by social media crawlers)
// Hard-coded production URL to ensure it's available at build time
const baseUrl = "https://kontentino-gpt-landing-waitlist-production.up.railway.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Social Media Planner for ChatGPT by Kontentino | Join Wave 1 Beta",
  description:
    "Plan a month of social media content in one ChatGPT conversation. Turn ideas into a visual content calendar with ready-to-publish posts. Join the exclusive Wave 1 beta by Kontentino - trusted by 6,000+ social media teams.",
  keywords: [
    "ChatGPT social media planner",
    "social media content calendar",
    "ChatGPT integration",
    "Kontentino",
    "AI social media management",
    "content planning ChatGPT",
    "social media scheduling",
    "visual content calendar",
    "ChatGPT for social media",
    "social media planning tool",
  ],
  authors: [{ name: "Kontentino" }],
  creator: "Kontentino",
  publisher: "Kontentino",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kontentino.com/chatgpt/",
    title: "Social Media Planner for ChatGPT by Kontentino | Join Wave 1 Beta",
    description:
      "Plan a month of social media content in one ChatGPT conversation. Turn ideas into a visual content calendar with ready-to-publish posts. Join the exclusive Wave 1 beta.",
    siteName: "Kontentino Social Media Planner for ChatGPT",
    images: [
      {
        url: `${baseUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Social Media Planner for ChatGPT by Kontentino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Planner for ChatGPT by Kontentino | Join Wave 1 Beta",
    description:
      "Plan a month of social media content in one ChatGPT conversation. Visual calendar, ready-to-publish posts. Join the beta now.",
    creator: "@kontentino",
    images: [`${baseUrl}/twitter-image.png`],
  },
  icons: {
    icon: [
      { url: `${baseUrl}/favicon.ico` },
      {
        url: `${baseUrl}/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: `${baseUrl}/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: `${baseUrl}/apple-touch-icon.png`,
  },
  alternates: {
    canonical: "https://www.kontentino.com/chatgpt/",
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
        {/* Heap Analytics */}
        <Script id="heap-analytics" strategy="beforeInteractive">
          {`
            window.heapReadyCb=window.heapReadyCb||[],window.heap=window.heap||[],heap.load=function(e,t){window.heap.envId=e,window.heap.clientConfig=t=t||{},window.heap.clientConfig.shouldFetchServerConfig=!1;var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.us.heap-api.com/config/"+e+"/heap_config.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r);var n=["init","startTracking","stopTracking","track","resetIdentity","identify","getSessionId","getUserId","getIdentity","addUserProperties","addEventProperties","removeEventProperty","clearEventProperties","addAccountProperties","addAdapter","addTransformer","addTransformerFn","onReady","addPageviewProperties","removePageviewProperty","clearPageviewProperties","trackPageview"],i=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);window.heapReadyCb.push({name:e,fn:function(){heap[e]&&heap[e].apply(heap,t)}})}};for(var p=0;p<n.length;p++)heap[n[p]]=i(n[p])};
            heap.load("3823457192");
          `}
        </Script>

        {/* Cookiebot */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="c5141a63-bce3-4de6-8756-2f673694bf8e"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />

        {/* Structured Data - JSON-LD */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kontentino",
              url: "https://www.kontentino.com",
              logo: "https://www.kontentino.com/kontentino-pink-dust.svg",
              description:
                "Social Media Management Platform trusted by 6,000+ teams",
              sameAs: [
                "https://www.facebook.com/kontentino",
                "https://www.linkedin.com/company/kontentino",
                "https://twitter.com/kontentino",
              ],
            }),
          }}
        />
        <Script
          id="structured-data-webapp"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Social Media Planner for ChatGPT",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free Beta Access",
              },
              provider: {
                "@type": "Organization",
                name: "Kontentino",
              },
              description:
                "Plan a month of social media content in one ChatGPT conversation. Turn ideas into a visual content calendar with ready-to-publish posts.",
              featureList: [
                "Visual content calendar in ChatGPT",
                "Social media planning",
                "Content scheduling",
                "AI-powered content creation",
                "Ready-to-publish posts",
              ],
              audience: {
                "@type": "Audience",
                audienceType:
                  "Social media professionals, agencies, and creators",
              },
            }),
          }}
        />
        <Script
          id="structured-data-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Social Media Planner for ChatGPT by Kontentino - Join Wave 1 Beta",
              description:
                "Plan a month of social media content in one ChatGPT conversation. Turn ideas into a visual content calendar with ready-to-publish posts. Join the exclusive Wave 1 beta by Kontentino.",
              url: "https://www.kontentino.com/chatgpt/",
              inLanguage: "en-US",
              isPartOf: {
                "@type": "WebSite",
                name: "Kontentino",
                url: "https://www.kontentino.com",
              },
              about: {
                "@type": "Thing",
                name: "ChatGPT Social Media Integration",
                description:
                  "ChatGPT integration for social media content planning and scheduling",
              },
              keywords:
                "ChatGPT social media planner, social media content calendar, ChatGPT integration, Kontentino, AI social media management",
            }),
          }}
        />
      </head>
      <body
        className={`${FigtreeFont.className} bg-background text-foreground`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TR4BX98"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
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
