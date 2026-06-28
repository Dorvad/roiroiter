import type { Metadata } from "next";
import { Cormorant_Garamond, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Roi Roiter — A Surreal Private Museum",
    template: "%s — Roi Roiter",
  },
  description: site.manifesto,
  keywords: [
    "Roi Roiter",
    "surreal painting",
    "wood carving",
    "contemporary art",
    "private museum",
  ],
  openGraph: {
    title: "Roi Roiter — A Surreal Private Museum",
    description: site.heroLine,
    type: "website",
    url: site.url,
    images: [{ url: "/art/the-reliquary.jpg", width: 1200, height: 1500 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${hanken.variable} ${plexMono.variable}`}
    >
      <body>
        <Header />
        <main style={{ position: "relative" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
