export const metadata = {
  title: "Ayurvedic Pharmacy Management Software",
  description:
    "Complete pharmacy management for Ayurvedic hospitals. Medicine catalogue, stock purchase, patient dispensing linked to billing, audit log, low-stock alerts. Stop revenue leakage today.",
  alternates: { canonical: "https://www.ayuplus.in/ayurvedic-pharmacy-software" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/ayurvedic-pharmacy-software",
    title: "Ayurvedic Pharmacy Management Software | AyuPlus HMS",
    description:
      "Medicine catalogue, stock purchase, patient dispensing auto-linked to billing, audit log, low-stock alerts. Every dispensed medicine hits the invoice — zero unbilled dispensing.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus Ayurvedic pharmacy management software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Pharmacy Management Software | AyuPlus HMS",
    description:
      "Medicine catalogue, stock, dispensing linked to billing, audit log. Zero unbilled dispensing for Ayurvedic hospitals.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Layout({ children }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ayuplus.in" },
      { "@type": "ListItem", position: 2, name: "Ayurvedic Pharmacy Software", item: "https://www.ayuplus.in/ayurvedic-pharmacy-software" },
    ],
  };
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ayurvedic Pharmacy Management Software | AyuPlus HMS",
    description:
      "Complete pharmacy management for Ayurvedic hospitals. Medicine catalogue, stock purchase, patient dispensing linked to billing, audit log, low-stock alerts.",
    url: "https://www.ayuplus.in/ayurvedic-pharmacy-software",
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
