export const metadata = {
  title: "Ayurvedic OPD & IPD Management System",
  description:
    "Complete OPD and IPD management for Ayurvedic hospitals. Patient registration, bed management, Vaidya Mode consultations, discharge summaries — all under one patient number. Built specifically for Ayurveda.",
  alternates: { canonical: "https://www.ayuplus.in/opd-ipd-management" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/opd-ipd-management",
    title: "Ayurvedic OPD & IPD Management System | AyuPlus HMS",
    description:
      "From first registration to discharge — OPD, IPD, Vaidya Mode, bed management, discharge summaries. One patient number, one record, across every department.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus OPD and IPD management for Ayurvedic hospitals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic OPD & IPD Management System | AyuPlus HMS",
    description:
      "Complete OPD and IPD management — patient registration, bed management, Vaidya Mode, discharge summaries. Built for Ayurveda.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Layout({ children }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ayuplus.in" },
      { "@type": "ListItem", position: 2, name: "OPD & IPD Management", item: "https://www.ayuplus.in/opd-ipd-management" },
    ],
  };
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ayurvedic OPD & IPD Management System | AyuPlus HMS",
    description:
      "Complete OPD and IPD management for Ayurvedic hospitals. Patient registration, bed management, Vaidya Mode consultations, discharge summaries — all under one patient number.",
    url: "https://www.ayuplus.in/opd-ipd-management",
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
