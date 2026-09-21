import type { Metadata } from "next";
import { Anton, Archivo_Black, Space_Grotesk, Inter, Silkscreen } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://needhelpbuilding.com"),
  title: {
    default: "NEED HELP BUILDING? | Custom Automations, AI Agents & Web Apps",
    template: "%s | NEED HELP BUILDING?",
  },
  description:
    "We build custom automations, AI agents, high-converting web apps, and enterprise systems for growing businesses. Fast execution, direct communication, production-ready code.",
  keywords: [
    "AI agents",
    "workflow automation",
    "custom software development",
    "web application development",
    "Next.js agency",
    "business automation",
    "enterprise systems",
    "software engineering agency",
    "need help building",
  ],
  authors: [{ name: "Need Help Building Team", url: "https://needhelpbuilding.com" }],
  creator: "Need Help Building",
  publisher: "Need Help Building",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://needhelpbuilding.com",
    siteName: "NEED HELP BUILDING?",
    title: "NEED HELP BUILDING? | Custom Automations, AI Agents & Web Apps",
    description:
      "We build custom automations, AI agents, high-converting web apps, and enterprise systems for growing businesses.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "NEED HELP BUILDING? - Systems, Automations & Web Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEED HELP BUILDING? | Custom Automations, AI Agents & Web Apps",
    description:
      "We build custom automations, AI agents, high-converting web apps, and enterprise systems for growing businesses.",
    images: ["/hero.png"],
    creator: "@needhelpbuilding",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://needhelpbuilding.com/#organization",
      name: "Need Help Building",
      url: "https://needhelpbuilding.com",
      logo: "https://needhelpbuilding.com/favicon.png",
      email: "hello@needhelpbuilding.com",
      description:
        "We build custom automations, AI agents, high-converting web apps, and enterprise systems for growing businesses.",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://needhelpbuilding.com/#website",
      url: "https://needhelpbuilding.com",
      name: "NEED HELP BUILDING?",
      publisher: {
        "@id": "https://needhelpbuilding.com/#organization",
      },
      description:
        "Custom automations, AI agents, high-converting web apps, and enterprise systems for growing businesses.",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://needhelpbuilding.com/#service",
      name: "NEED HELP BUILDING?",
      url: "https://needhelpbuilding.com",
      image: "https://needhelpbuilding.com/hero.png",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Workflow & AI Automations",
          description: "Custom internal tools, multi-step integrations, and AI agent workflows.",
        },
        {
          "@type": "Offer",
          name: "Custom Web Applications",
          description: "High-performance Next.js web applications and digital products.",
        },
        {
          "@type": "Offer",
          name: "Enterprise Integrations & Systems",
          description: "Secure, reliable backend systems and API integrations.",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivoBlack.variable} ${silkscreen.variable} ${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#0c0c0d] text-white overflow-x-hidden selection:bg-[#fbda03] selection:text-black">
        {children}
      </body>
    </html>
  );
}
