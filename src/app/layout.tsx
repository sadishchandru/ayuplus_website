import type { Metadata, Viewport } from "next";

// ... existing imports

export const viewport: Viewport = {
  themeColor: "#00A63E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};
import { Inter, Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hedvigSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ayurvedic Hospital Management System - Ayuplus",
    template: "%s | Ayuplus"
  },
  description: "Complete Ayurvedic Hospital Management System (HMS) featuring specialized modules for Panchakarma, Tithi calendars, IPD/OPD, and pharmacy billing. Scale your institution with Ayuplus’s professional, secure, and data-driven SaaS platform.",
  keywords: ["Ayurveda", "Hospital Management System", "Ayurvedic Software", "HMS", "OPD", "IPD", "Panchakarma", "Medical Software"],
  authors: [{ name: "Gleaming Software" }],
  creator: "Gleaming Software",
  publisher: "Gleaming Software",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayuplus.com",
    title: "Ayurvedic Hospital Management System - Ayuplus",
    description: "Complete Ayurvedic Hospital Management System (HMS) featuring specialized modules for Panchakarma, Tithi calendars, IPD/OPD, and pharmacy billing. Scale your institution with Ayuplus’s professional, secure, and data-driven SaaS platform.",
    siteName: "Ayuplus",
    images: [
      {
        url: "/images/og-image.jpg", // Assuming this will be added or exists, fallback is fine
        width: 1200,
        height: 630,
        alt: "Ayuplus Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Hospital Management System - Ayuplus",
    description: "Complete Ayurvedic Hospital Management System (HMS) featuring specialized modules for Panchakarma, Tithi calendars, IPD/OPD, and pharmacy billing. Scale your institution with Ayuplus’s professional, secure, and data-driven SaaS platform.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${hedvigSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
