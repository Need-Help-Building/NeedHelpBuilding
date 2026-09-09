import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Express Daily Mart - Fresh Groceries & Daily Essentials | Gomti Nagar, Lucknow",
  description:
    "Express Daily Mart at Kathauta Chauraha, Vijayant Khand, Gomti Nagar, Lucknow. Fresh groceries, packaged foods, daily essentials & fast WhatsApp ordering. Call +91 88535 67103.",
  keywords: [
    "Express Daily Mart",
    "Grocery store Gomti Nagar",
    "Supermarket Lucknow",
    "Kathauta Chauraha grocery",
    "Vijayant Khand supermarket",
    "Daily essentials Lucknow",
    "Online grocery order Gomti Nagar",
  ],
  openGraph: {
    title: "Express Daily Mart - Supermarket in Gomti Nagar, Lucknow",
    description:
      "Shop no 19-22, Kathauta Chauraha Rd, in front of petrol pump, Vijayant Khand, Gomti Nagar. Rated 5.0 ★.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-emerald-600 selection:text-white bg-[#fbfdfa] text-gray-900">
        {children}
      </body>
    </html>
  );
}
