export const metadata = {
  title: "Vaidya Mode – Doctor-First Consultation Workflow",
  description:
    "AyuPlus Vaidya Mode lets Ayurvedic doctors manage the complete OPD consultation independently — patient info, Asta Sthana Pariksha, NCD tracking, prescriptions and treatment planning in one seamless workflow. No front-office dependency.",
  alternates: { canonical: "https://www.ayuplus.in/vaidya-mode" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/vaidya-mode",
    title: "Vaidya Mode – Doctor-First Consultation Workflow | AyuPlus HMS",
    description:
      "The only Ayurvedic HMS with a dedicated doctor workflow. Complete OPD consultation — Asta Sthana Pariksha, prescriptions, treatment planning — without front-office support.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus Vaidya Mode consultation screen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaidya Mode – Doctor-First Consultation Workflow | AyuPlus HMS",
    description:
      "The only Ayurvedic HMS with a dedicated doctor workflow. Complete OPD without front-office dependency.",
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
    name: "Vaidya Mode – Doctor-First Consultation Workflow | AyuPlus HMS",
    description:
      "AyuPlus Vaidya Mode lets Ayurvedic doctors manage the complete OPD consultation independently — Asta Sthana Pariksha, NCD tracking, prescriptions and treatment planning in one screen.",
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
