import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlowCarib - Jamaica's Premier Beauty Services Marketplace",
  description: "Discover and book trusted beauty professionals across Jamaica. Hair, nails, makeup, barbers, and mobile services - all in one app.",
  keywords: "Jamaica beauty, hair salon Jamaica, makeup artist Jamaica, barber Jamaica, nail technician Jamaica, beauty marketplace",
  openGraph: {
    title: "GlowCarib - Jamaica's Premier Beauty Services Marketplace",
    description: "Discover and book trusted beauty professionals across Jamaica.",
    url: "https://www.glowcarib.com",
    siteName: "GlowCarib",
    locale: "en_JM",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
