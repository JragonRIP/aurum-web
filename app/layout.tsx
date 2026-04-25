import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SITE, defaultOpenGraph, resolvedPublicSiteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(resolvedPublicSiteUrl),
  title: {
    default: `${SITE.name}: Websites for contractors & trades`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Premium websites for contractors and trades businesses. Fast turnaround, monthly plans, mobile first. Aurum Web Design.",
  openGraph: {
    ...defaultOpenGraph,
    title: SITE.name,
    description:
      "Websites for contractors and trades: professional, fast, and built to win clients.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description:
      "Websites for contractors and trades: professional, fast, and built to win clients.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
