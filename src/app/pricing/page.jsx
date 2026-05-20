import PricingClient from "./PricingClient";

export const metadata = {
  title: "AyuPlus Pricing — Ayurvedic Hospital Management Software Plans",
  description:
    "Transparent pricing for every Ayurvedic hospital size. Starter ₹1,499/mo · Professional ₹3,999/mo · Advanced ₹5,999/mo · Enterprise ₹8,999/mo. Setup and training included.",
  alternates: { canonical: "https://www.ayuplus.in/pricing" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/pricing",
    title: "AyuPlus Pricing — Ayurvedic Hospital Management Software Plans",
    description:
      "Transparent pricing for every Ayurvedic hospital size. Starter to Enterprise. Setup and training included in every plan.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus pricing plans for Ayurvedic hospitals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AyuPlus Pricing — Ayurvedic Hospital Management Software Plans",
    description:
      "Transparent pricing for every Ayurvedic hospital size. Starter to Enterprise. No hidden fees.",
    images: ["/images/og-image.jpg"],
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
