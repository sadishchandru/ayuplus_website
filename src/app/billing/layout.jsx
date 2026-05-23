export const metadata = {
  title: "Ayurvedic Hospital Billing Software – Invoices, Payments & Reports",
  description:
    "Purpose-built Ayurvedic hospital billing software — multi-service invoices, quick bills, advance payments, Cash/Card/UPI/Insurance. Every Panchakarma session and pharmacy item linked to an invoice automatically. Stop revenue leakage today.",
  alternates: { canonical: "https://www.ayuplus.in/billing" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/billing",
    title: "Ayurvedic Hospital Billing Software – Invoices, Payments & Reports | AyuPlus HMS",
    description:
      "Ayurvedic hospital billing built for Panchakarma treatments and pharmacy. Multi-service invoices, quick bills, advance payments — every session linked automatically. Zero revenue leakage.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus hospital billing and invoice management" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Hospital Billing Software | AyuPlus HMS",
    description:
      "Ayurvedic hospital billing software — multi-service invoices, Panchakarma billing, pharmacy. Zero revenue leakage.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Layout({ children }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ayuplus.in" },
      { "@type": "ListItem", position: 2, name: "Hospital Billing", item: "https://www.ayuplus.in/billing" },
    ],
  };
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ayurvedic Hospital Billing Software – Invoices, Payments & Reports | AyuPlus HMS",
    description:
      "Complete Ayurvedic hospital billing — multi-service invoices, quick bills, advance payments, Cash/Card/UPI/Insurance. Every treatment session linked to an invoice automatically.",
    url: "https://www.ayuplus.in/billing",
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
