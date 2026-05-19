export const metadata = {
  title: "Hospital Settings – Beds, Roles & Messaging Config",
  description:
    "Complete hospital configuration in AyuPlus — bed setup, shift assignment, role-based access control, SMS/WhatsApp messaging integration, and master settings. Everything configured once, works everywhere.",
  alternates: { canonical: "https://www.ayuplus.in/hospital-settings" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/hospital-settings",
    title: "Hospital Settings – Beds, Roles & Messaging Config | AyuPlus HMS",
    description:
      "Bed layout, staff shifts, user roles, SMS/WhatsApp notifications, and all master data — configured once from a single settings panel. Go live in 4 days.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus hospital settings and configuration panel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Settings – Beds, Roles & Messaging Config | AyuPlus HMS",
    description:
      "Bed setup, staff shifts, roles, SMS/WhatsApp — all hospital configuration in one place. Go live in 4 days.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Layout({ children }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ayuplus.in" },
      { "@type": "ListItem", position: 2, name: "Hospital Settings", item: "https://www.ayuplus.in/hospital-settings" },
    ],
  };
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hospital Settings – Beds, Roles & Messaging Config | AyuPlus HMS",
    description:
      "Complete hospital configuration in AyuPlus — bed setup, shift assignment, role-based access control, SMS/WhatsApp messaging integration, and master settings.",
    url: "https://www.ayuplus.in/hospital-settings",
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
