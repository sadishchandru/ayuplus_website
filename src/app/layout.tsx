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
import DemoNavbar from "@/components/DemoNavbar";
import StructuredData from "./structured-data";
import RecaptchaProvider from "@/components/RecaptchaProvider";

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
    "AyuPlus is India’s purpose-built Ayurvedic Hospital Management System. Manage OPD, IPD, Panchakarma, Pharmacy, Billing & Prakruti in one platform. Trusted by Hari Ashtanga Ayurveda Chikitsalaya, Puducherry — 14,757 patients. Starting ₹1,499/month.",
  keywords: [
    // Core product terms
    "Ayurvedic hospital management system",
    "Ayurveda HMS software India",
    "Ayurveda hospital management software India",
    "AYUSH hospital management software",
    // Clinic & practice terms (competitors rank heavily here)
    "Ayurvedic clinic software",
    "Ayurveda clinic management software India",
    "Ayurveda practice management software",
    // EMR / EHR (high-volume, under-targeted by AyuPlus)
    "Ayurvedic EMR software",
    "Ayurveda EHR software India",
    // Clinical modules
    "Panchakarma management software",
    "Panchakarma treatment software India",
    "OPD IPD management Ayurveda",
    "Prakruti assessment software",
    "dosha assessment software",
    "Nadi Pareeksha software",
    "Asta Sthana Pariksha digital",
    // Billing & pharmacy
    "hospital billing software Ayurveda",
    "Ayurvedic pharmacy management software",
    // Deployment & compliance (competitor differentiators)
    "cloud Ayurveda hospital software",
    "on-premises Ayurveda hospital software",
    "ABDM compliant Ayurveda software",
    // Unique AyuPlus features
    "Vaidya consultation software",
    "Panchakarma tracking system",
    "multilingual Ayurveda hospital software",
    "Tithi based scheduling software",
    // Pricing & geo (conversion-focused)
    "ayurvedic HMS pricing India",
    "ayurvedic hospital software ₹1499",
    "affordable ayurvedic clinic software",
    "Kerala Ayurveda hospital software",
    "Puducherry ayurvedic hospital software",
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
    <html lang="en-IN">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${hedvigSerif.variable} antialiased`}
        suppressHydrationWarning
      >
        <RecaptchaProvider>
          <DemoNavbar />
          {children}
          <ChatWidget />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
