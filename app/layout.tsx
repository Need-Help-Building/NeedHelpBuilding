import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "future automations | AI-powered systems for real businesses",
  description: "From custom automations to AI agents, we help teams save time, cut manual work and ship what matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-[#F4F4F6] text-[#0A0A0C] selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
