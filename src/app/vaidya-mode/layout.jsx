export const metadata = {
  title: "Vaidya Mode – Ayurvedic Doctor Consultation Software & EMR",
  description:
    "AyuPlus Vaidya Mode is India's only Ayurvedic doctor-first EMR — complete OPD consultation independently: Asta Sthana Pariksha, Nadi Pareeksha, NCD tracking, digital prescriptions and Panchakarma treatment planning. No front-office dependency.",
  alternates: { canonical: "https://www.ayuplus.in/vaidya-mode" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/vaidya-mode",
    title: "Vaidya Mode – Ayurvedic Doctor Consultation Software & EMR | AyuPlus HMS",
    description:
      "India's only Ayurvedic doctor-first EMR. Complete OPD consultation — Asta Sthana Pariksha, Nadi Pareeksha, prescriptions, Panchakarma treatment planning — without front-office support.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus Vaidya Mode consultation screen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaidya Mode – Ayurvedic Doctor EMR | AyuPlus HMS",
    description:
      "India's only doctor-first Ayurvedic EMR. Asta Sthana Pariksha, Nadi Pareeksha, prescriptions — no front-office needed.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Layout({ children }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ayuplus.in" },
      { "@type": "ListItem", position: 2, name: "Vaidya Mode", item: "https://www.ayuplus.in/vaidya-mode" },
    ],
  };
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Vaidya Mode – Ayurvedic Doctor Consultation Software & EMR | AyuPlus HMS",
    description:
      "India's only Ayurvedic doctor-first EMR — Asta Sthana Pariksha, Nadi Pareeksha, NCD tracking, digital prescriptions and Panchakarma treatment planning in one screen.",
    url: "https://www.ayuplus.in/vaidya-mode",
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
