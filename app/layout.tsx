import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixelify | AI Product Photos & Shoppable Video for Shopify",
  description:
    "Generate studio-quality product images, run shoppable video widgets, publish to Instagram, and track usage — all inside your Shopify admin. Install Pixelify.",
  keywords: [
    "Shopify AI product photography",
    "AI product images Shopify",
    "shoppable video Shopify app",
    "Instagram publish Shopify",
    "product photo generator",
    "e-commerce AI images",
  ],
  openGraph: {
    title: "Pixelify | AI Product Photos & Shoppable Video for Shopify",
    description:
      "Generate studio-quality product images, run shoppable video widgets, publish to Instagram, and track usage — all inside your Shopify admin.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#faf9f7] text-[#1a1a1a]">{children}</body>
    </html>
  );
}
