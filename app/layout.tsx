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
  title: "NEED HELP BUILDING? | needhelpbuilding.com",
  description: "We build custom automations, AI agents, high-converting web apps, and enterprise systems for growing businesses.",
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
      <body className="antialiased bg-[#0c0c0d] text-white overflow-x-hidden selection:bg-[#fbda03] selection:text-black">
        {children}
      </body>
    </html>
  );
}
