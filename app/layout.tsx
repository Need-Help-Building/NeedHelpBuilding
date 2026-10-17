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
    "NeedHelpBuilding",
    "NBH",
    "NeedHelpBuilding agency",
    "NeedHelpBuilding software development",
    "web application development agency",
    "custom software development",
    "AI automation services",
    "business process automation",
    "digital solutions for small and medium-sized businesses",
    "AI agents",
    "workflow automation",
    "Next.js agency",
    "fractional CTO for startups",
  ],
  authors: [{ name: "Need Help Building Team", url: "https://needhelpbuilding.com" }],
  creator: "Need Help Building",
  publisher: "Need Help Building",
  applicationName: "Need Help Building",
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
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
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
      alternateName: ["NeedHelpBuilding", "NBH", "NEED HELP BUILDING?"],
      url: "https://needhelpbuilding.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://needhelpbuilding.com/#logo",
        url: "https://needhelpbuilding.com/favicon.png",
        contentUrl: "https://needhelpbuilding.com/favicon.png",
        caption: "Need Help Building Logo",
      },
      image: "https://needhelpbuilding.com/hero.png",
      email: "hello@needhelpbuilding.com",
      telephone: "+91-9219061093",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9219061093",
          contactType: "customer service",
          email: "hello@needhelpbuilding.com",
          availableLanguage: ["English"],
        },
      ],
      description:
        "Need Help Building engineers custom web applications, bespoke UI/UX designs, end-to-end business automations, and digital systems for scaling businesses and startups.",
      knowsAbout: [
        "Web Application Development",
        "Custom Software Engineering",
        "Business Automation",
        "AI Agents and Workflow Systems",
        "Next.js Architecture",
        "Fractional CTO Leadership",
      ],
      sameAs: [
        "https://wa.me/919219061093",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://needhelpbuilding.com/#website",
      url: "https://needhelpbuilding.com",
      name: "NEED HELP BUILDING?",
      alternateName: ["NeedHelpBuilding", "NBH"],
      publisher: {
        "@id": "https://needhelpbuilding.com/#organization",
      },
      description:
        "Custom automations, AI agents, high-converting web apps, and enterprise systems for growing businesses.",
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://needhelpbuilding.com/#webpage",
      url: "https://needhelpbuilding.com",
      name: "NEED HELP BUILDING? | Custom Automations, AI Agents & Web Apps",
      isPartOf: {
        "@id": "https://needhelpbuilding.com/#website",
      },
      about: {
        "@id": "https://needhelpbuilding.com/#organization",
      },
      description:
        "We build custom automations, AI agents, high-converting web apps, and enterprise systems for growing businesses.",
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://needhelpbuilding.com/hero.png",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://needhelpbuilding.com/#service",
      name: "NEED HELP BUILDING?",
      alternateName: ["NeedHelpBuilding", "NBH"],
      url: "https://needhelpbuilding.com",
      image: "https://needhelpbuilding.com/hero.png",
      telephone: "+91-9219061093",
      email: "hello@needhelpbuilding.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Need Help Building Core Capabilities",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Websites & Web Applications",
              description:
                "Full-stack Next.js and React web applications built for speed, SEO domination, and effortless conversion. From interactive landing pages to high-scale SaaS products.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bespoke Web Design & UI/UX",
              description:
                "Custom typography, micro-interactions, responsive design systems, and neo-brutalist aesthetics engineered for strong brand recall.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Automations",
              description:
                "Automated lead capture, CRM syncing, AI telephone triage, invoicing pipelines, and instant customer notifications.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Digital Systems & AI Agents",
              description:
                "Custom integrations, AI copilots, payment setups, database syncing, and specialized tooling tailored to your business needs without vendor lock-in.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fractional CTO & Equity Partnership for Startups",
              description:
                "Technical co-founder and CTO co-pilot partnership with shared runway and hands-on architecture delivery.",
            },
          },
        ],
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Jay Agrawal",
            jobTitle: "Co-Founder",
            worksFor: {
              "@type": "Organization",
              name: "Ganges",
            },
          },
          reviewBody:
            "NeedHelpBuilding turned our concept into a high-performance web platform in record time. Their architectural clarity, speed of execution, and attention to user flow made a massive impact on our early traction.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Arinjay Saxena",
            jobTitle: "Co-Founder",
            worksFor: {
              "@type": "Organization",
              name: "Earnbuddy",
            },
          },
          reviewBody:
            "Partnering with them gave us the technical muscle of an elite engineering team without the startup friction. From intuitive UI/UX design to rock-solid automations, they delivered exactly what Earnbuddy needed to scale.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
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
