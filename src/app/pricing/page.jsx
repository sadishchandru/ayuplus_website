import PricingClient from "./PricingClient";

export const metadata = {
  title: "Ayurvedic Hospital Software Pricing – Plans from ₹1,499/month | AyuPlus",
  description:
    "India's only Ayurvedic HMS with transparent pricing. Starter ₹1,499/mo · Professional ₹3,999/mo · Advanced ₹5,999/mo · Enterprise ₹8,999/mo. Includes OPD, IPD, Panchakarma, Pharmacy & Billing. Setup and training included. No hidden fees.",
  alternates: { canonical: "https://www.ayuplus.in/pricing" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/pricing",
    title: "Ayurvedic Hospital Software Pricing – Plans from ₹1,499/month | AyuPlus",
    description:
      "India's only Ayurvedic HMS with transparent pricing — Starter to Enterprise. OPD, IPD, Panchakarma, Pharmacy & Billing. Setup and training included in every plan.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus pricing plans for Ayurvedic hospitals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Hospital Software Pricing – From ₹1,499/month | AyuPlus",
    description:
      "India's only Ayurvedic HMS with transparent pricing. Plans from ₹1,499/month. OPD, IPD, Panchakarma, Pharmacy & Billing. No hidden fees.",
    images: ["/images/og-image.jpg"],
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
