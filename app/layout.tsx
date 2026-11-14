import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Pixelify_Sans, Silkscreen } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/site/MotionProvider";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { JsonLd, siteJsonLd } from "@/lib/structured-data";
import { site } from "@/content/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Pixel identity (business card): display headlines and arcade counters only.
const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-pixelify",
  display: "swap",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
  display: "swap",
});

// Kept within SERP limits: title ≤ 60 characters, description ≤ 160.
const title = "NeedHelpBuilding | AI, Software & Technology Consulting";
const description =
  "NHB helps businesses make better technology decisions, then designs and builds the systems: AI agents, automation, custom software, web and mobile apps.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | NeedHelpBuilding",
  },
  description,
  keywords: [
    "NeedHelpBuilding",
    "NHB",
    "digital product engineering",
    "AI development company",
    "AI agent development",
    "business process automation",
    "technology consulting",
    "fractional CTO",
    "custom software development",
    "web application development",
    "SaaS development",
    "AI voice agents",
  ],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
};

export const viewport: Viewport = {
  themeColor: "#f5f3ed",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${pixelify.variable} ${silkscreen.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before first paint so scroll-reveal styles never hide content for no-JS visitors. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd data={siteJsonLd()} />
      </head>
      <body className="bg-ivory font-sans text-ink antialiased">
        <a
          href="#main"
          className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-ink px-4 py-2 text-sm text-ivory transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
