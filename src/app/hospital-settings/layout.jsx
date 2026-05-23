export const metadata = {
  title: "Ayurvedic Hospital Setup – Beds, Roles & WhatsApp Notifications",
  description:
    "Complete Ayurvedic hospital configuration in AyuPlus — bed setup, shift assignment, role-based access control, WhatsApp & SMS messaging integration, and master settings. Configure once, runs everywhere.",
  alternates: { canonical: "https://www.ayuplus.in/hospital-settings" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/hospital-settings",
    title: "Ayurvedic Hospital Setup – Beds, Roles & WhatsApp Notifications | AyuPlus HMS",
    description:
      "Ayurvedic hospital setup — bed layout, staff shifts, user roles, WhatsApp & SMS notifications. All master data configured once from a single panel. Go live in 4 days.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus hospital settings and configuration panel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurvedic Hospital Setup – Beds, Roles & WhatsApp | AyuPlus HMS",
    description:
      "Ayurvedic hospital setup — beds, shifts, roles, WhatsApp & SMS — all in one configuration panel. Go live in 4 days.",
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
    name: "Ayurvedic Hospital Setup – Beds, Roles & WhatsApp Notifications | AyuPlus HMS",
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
