import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "#1 Font Generator -  𝒞𝑜𝓅𝓎 𝒶𝓃𝒹 𝒫𝒶𝓈𝓉𝑒 Fancy Text",
  description: "Our free Font Generator can Transform your text into fancy fonts for Instagram, Twitter, Facebook, in just a few clicks!",
  authors: [{ name: "Font Generator Pro" }],
  creator: "Font Generator Pro",
  publisher: "Font Generator Pro",
  metadataBase: new URL("https://font-generator.pro/"),
  alternates: {
    canonical: "https://font-generator.pro/",
  },
  openGraph: {
    title: "#1 Font Generator -  𝒞𝑜𝓅𝓎 𝒶𝓃𝒹 𝒫𝒶𝓈𝓉𝑒 Fancy Text",
    description: "Our free Font Generator can Transform your text into fancy fonts for Instagram, Twitter, Facebook, in just a few clicks!",
    url: "https://font-generator.pro/",
    siteName: "Font Generator Pro",
    type: "website",
    images: [
      {
        url: "https://font-generator.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Font Generator - Free Online Text Font Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Font Generator - #1 Free Online Text Font Converter",
    description: "Transform your text with 159+ unique font styles. Free font generator for Instagram, Discord, and social media.",
    images: ["https://font-generator.pro/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Font Generator Pro",
    "description": "Free online font generator with 159+ unique text styles. Transform your text for Instagram, Discord, and social media instantly.",
    "url": "https://font-generator.pro/",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Font Generator Pro"
    },
    "featureList": [
      "159+ unique font styles",
      "Real-time text conversion",
      "Copy and paste functionality",
      "Mobile responsive design",
      "Unicode compatibility",
      "No registration required"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16.svg" type="image/svg+xml" sizes="16x16" />
        <link rel="icon" href="/favicon-32.svg" type="image/svg+xml" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon-32.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
