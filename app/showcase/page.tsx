import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Planner by Kontentino - App Showcase',
  description: 'Demo videos showing Social Media Planner features across iOS, Android, and Desktop platforms',
  robots: 'noindex, nofollow', // Not for public indexing - for reviewers only
};

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <img
              src="/icon.png"
              alt="Kontentino"
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-2xl font-bold">Social Media Planner by Kontentino</h1>
              <p className="text-sm text-muted-foreground">App Showcase for ChatGPT Apps Directory</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Demo Videos</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Watch Social Media Planner in action across all platforms.
              Turn messy ChatGPT threads into organized visual calendars.
            </p>
            <div className="bg-muted/30 rounded-lg p-6 text-left">
              <p className="text-sm text-muted-foreground mb-3">
                <strong className="text-foreground">For OpenAI Reviewers:</strong> These videos demonstrate the core functionality of our ChatGPT app on Desktop (Web), iOS, and Android platforms.
              </p>
              <p className="text-sm text-muted-foreground">
                Each video shows the same workflow: creating social media content in ChatGPT, organizing it into a visual calendar, previewing posts across multiple platforms (Instagram, Facebook, LinkedIn, etc.), and exporting the plan to PDF/PNG/CSV. The app is fully functional across all platforms with consistent behavior.
              </p>
            </div>
          </div>
        </section>

        {/* Video Grid */}
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Desktop Demo */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <h3 className="text-xl font-semibold">Desktop (Web)</h3>
              </div>

              <div className="bg-card rounded-lg border overflow-hidden">
                <video
                  controls
                  playsInline
                  className="w-full aspect-video bg-black"
                >
                  <source src={`${assetPrefix}/chatgpt/showcase/desktop-demo.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="text-sm text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">What you&apos;ll see in this video:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Creating a content calendar from natural language prompts</li>
                  <li>10+ posts organized by date and platform</li>
                  <li>Multi-platform previews (Instagram, Facebook, LinkedIn, etc.)</li>
                  <li>Interactive drag-and-drop rescheduling</li>
                  <li>Click-to-preview any post in the calendar</li>
                  <li>Export functionality (PDF, PNG, CSV)</li>
                </ul>
                <p className="text-xs mt-3 pt-3 border-t border-border">
                  <strong>Duration:</strong> ~2-3 minutes | <strong>Shows:</strong> Complete workflow from prompt to export
                </p>
              </div>
            </div>

            {/* iOS Demo */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <h3 className="text-xl font-semibold">iOS (iPhone/iPad)</h3>
              </div>

              <div className="bg-card rounded-lg border overflow-hidden">
                <video
                  controls
                  playsInline
                  className="w-full aspect-video bg-black"
                >
                  <source src={`${assetPrefix}/chatgpt/showcase/ios-demo.mov`} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="text-sm text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">Mobile experience on iPhone/iPad:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Touch-optimized calendar interface</li>
                  <li>Tap to preview posts in full-screen modal</li>
                  <li>Swipe gestures for navigation</li>
                  <li>Native iOS ChatGPT app integration</li>
                  <li>Same features as desktop in mobile format</li>
                  <li>Responsive layout for all screen sizes</li>
                </ul>
                <p className="text-xs mt-3 pt-3 border-t border-border">
                  <strong>Platform:</strong> iOS ChatGPT App | <strong>Shows:</strong> Mobile-optimized workflow
                </p>
              </div>
            </div>

            {/* Android Demo */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.5 11.5 0 0 0-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C2.92 10.82 1 13.97 1 17.6h22c0-3.63-1.92-6.78-5.4-8.12zM7.34 15.93c-.54 0-.97-.44-.97-.97 0-.54.43-.97.97-.97s.97.44.97.97c0 .54-.43.97-.97.97zm9.32 0c-.54 0-.97-.44-.97-.97 0-.54.43-.97.97-.97s.97.44.97.97c0 .54-.43.97-.97.97z"/>
                </svg>
                <h3 className="text-xl font-semibold">Android</h3>
              </div>

              <div className="bg-card rounded-lg border overflow-hidden">
                <video
                  controls
                  playsInline
                  className="w-full aspect-video bg-black"
                >
                  <source src={`${assetPrefix}/chatgpt/showcase/android-demo.mov`} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="text-sm text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">Mobile experience on Android:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Touch-optimized calendar interface</li>
                  <li>Tap to preview posts in full-screen modal</li>
                  <li>Material Design integration</li>
                  <li>Native Android ChatGPT app integration</li>
                  <li>Same features as desktop and iOS</li>
                  <li>Works across all Android devices</li>
                </ul>
                <p className="text-xs mt-3 pt-3 border-t border-border">
                  <strong>Platform:</strong> Android ChatGPT App | <strong>Shows:</strong> Mobile-optimized workflow
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Key Features Overview */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border p-8">
            <h2 className="text-2xl font-bold mb-4">What Social Media Planner Does</h2>
            <p className="text-muted-foreground mb-6">
              Our ChatGPT app brings structure and visualization to social media content planning. Users can organize ideas, preview posts, and export ready-to-execute plans—all without leaving ChatGPT.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">✨ Visual Calendar Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Turn messy ChatGPT conversations into organized monthly calendars.
                  Posts appear organized by date and platform with color-coded styling.
                  See your entire content strategy at a glance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">👁️ Multi-Platform Previews (9 Platforms)</h3>
                <p className="text-sm text-muted-foreground">
                  Preview posts with authentic platform styling on Instagram, Facebook, LinkedIn, Twitter/X, TikTok,
                  YouTube, Pinterest, Threads, and Google My Business. Supports text, images, videos, carousels, and reels in desktop or mobile view.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">🎯 Interactive Calendar Editing</h3>
                <p className="text-sm text-muted-foreground">
                  Click any post to preview it in full detail. Drag-and-drop to reschedule posts to different dates.
                  All interactions happen inside the ChatGPT interface with no external navigation.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">📤 Export for Execution</h3>
                <p className="text-sm text-muted-foreground">
                  Export calendars to CSV (import to scheduling tools), PNG (share with clients), or PDF (professional presentations).
                  Bridge the gap between planning in ChatGPT and executing in your workflow.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Built by Kontentino:</strong> Trusted by 6,000+ social media teams worldwide. This ChatGPT app is designed for professionals who want to bring their proven social media workflow inside ChatGPT.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="mt-12 max-w-4xl mx-auto">
          <details className="bg-muted/50 rounded-lg p-6">
            <summary className="cursor-pointer font-semibold">Technical Details</summary>
            <div className="mt-4 space-y-4 text-sm text-muted-foreground">
              <div>
                <strong>Tools Included:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li><code>social_media.preview_post</code> - Multi-platform post previews</li>
                  <li><code>social_media.view_calendar</code> - Interactive calendar visualization</li>
                </ul>
              </div>

              <div>
                <strong>Supported Platforms (9 total):</strong>
                <p className="ml-4 mt-1">
                  Instagram, Facebook, Twitter/X, LinkedIn, TikTok, YouTube,
                  Pinterest, Threads, Google My Business
                </p>
              </div>

              <div>
                <strong>Authentication:</strong>
                <p className="ml-4 mt-1">
                  None required - fully public tool
                </p>
              </div>

              <div>
                <strong>Data Storage:</strong>
                <p className="ml-4 mt-1">
                  Zero retention - all processing is transient
                </p>
              </div>
            </div>
          </details>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              <p>© 2025 Kontentino s.r.o. - Social Media Management Platform</p>
            </div>
            <div className="flex gap-6">
              <a href="https://www.kontentino.com/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="https://www.kontentino.com/terms-of-service" className="hover:underline">
                Terms of Service
              </a>
              <a href="https://www.kontentino.com" className="hover:underline">
                kontentino.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
