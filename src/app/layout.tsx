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
import ChatWidget from "@/components/ChatWidget";
import StructuredData from "./structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hedvigSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ayuplus.in"),
  title: {
    default: "AyuPlus – Ayurvedic Hospital Management System | HMS Software India",
    template: "%s | AyuPlus HMS",
  },
  description:
    "AyuPlus is India’s purpose-built Ayurvedic Hospital Management System. Manage OPD, IPD, Panchakarma, Pharmacy, Billing & Prakruti assessment in one platform. Trusted by Ayurvedic hospitals across Kerala, Karnataka, Tamil Nadu.",
  keywords: [
    "Ayurvedic hospital management system",
    "Ayurveda HMS software India",
    "Panchakarma management software",
    "Ayurvedic clinic software",
    "OPD IPD management Ayurveda",
    "Prakruti assessment software",
    "hospital billing software Ayurveda",
    "Kerala Ayurveda hospital software",
    "Panchakarma tracking system",
    "Vaidya consultation software",
    "Ayurvedic EMR software",
    "dosha assessment software",
    "Gleaming Software AyuPlus",
  ],
  authors: [{ name: "Gleaming Software", url: "https://gleamingsoftware.com" }],
  creator: "Gleaming Software",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ayuplus.in",
    siteName: "AyuPlus HMS",
    title: "AyuPlus – Ayurvedic Hospital Management System",
    description:
      "Purpose-built HMS for Ayurvedic hospitals. OPD, IPD, Panchakarma, Pharmacy, Billing & Prakruti — all in one platform.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AyuPlus Ayurvedic Hospital Management System Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AyuPlus – Ayurvedic Hospital Management System",
    description:
      "Purpose-built HMS for Ayurvedic hospitals. OPD, IPD, Panchakarma, Pharmacy, Billing & Prakruti — all in one platform.",
    images: ["/images/og-image.jpg"],
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
  alternates: {
    canonical: "https://www.ayuplus.in",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico.bak", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${hedvigSerif.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
