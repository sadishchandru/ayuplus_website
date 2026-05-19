import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Prescription Pad for Ayurvedic Doctors",
  description:
    "AyuPlus Digital Prescription Pad — the complete tablet-first consultation screen for solo Ayurvedic practitioners. Pain scale, Asta Sthana Pariksha, vitals, medicine suggestions, diet advice, and instant digital prescription to patient. No paper needed.",
  alternates: { canonical: "https://www.ayuplus.in/digital-prescription" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/digital-prescription",
    title: "Digital Prescription Pad for Ayurvedic Doctors | AyuPlus HMS",
    description:
      "Complete tablet-first consultation for Vaidyas. Pain scale, Asta Sthana Pariksha, medicine suggestions, diet advice — then send the prescription digitally. No paper, ever.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus Digital Prescription Pad for Ayurvedic doctors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Prescription Pad for Ayurvedic Doctors | AyuPlus HMS",
    description:
      "Complete tablet-first consultation for Vaidyas. Asta Sthana Pariksha, medicine suggestions — send prescription digitally.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ayuplus.in" },
      { "@type": "ListItem", position: 2, name: "Digital Prescription Pad", item: "https://www.ayuplus.in/digital-prescription" },
    ],
  };
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Digital Prescription Pad for Ayurvedic Doctors | AyuPlus HMS",
    description:
      "AyuPlus Digital Prescription Pad — complete tablet-first consultation screen. Pain scale, Asta Sthana Pariksha, vitals, medicine suggestions, diet advice, and instant digital prescription delivery.",
    url: "https://www.ayuplus.in/digital-prescription",
    isPartOf: { "@type": "WebSite", url: "https://www.ayuplus.in", name: "AyuPlus HMS" },
    breadcrumb: breadcrumb,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
