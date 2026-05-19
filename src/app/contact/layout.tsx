import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AyuPlus – Book a Free Demo",
  description:
    "Get in touch with the AyuPlus team. Book a free demo, ask about pricing, or reach us directly. Gleaming Software, Puducherry, India. +91 98949 97482 | contact@ayuplus.com",
  alternates: { canonical: "https://www.ayuplus.in/contact" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/contact",
    title: "Contact AyuPlus – Book a Free Demo | AyuPlus HMS",
    description:
      "Book a free demo or reach us directly. Gleaming Software, Puducherry, India. We respond within one business day.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Contact AyuPlus – Gleaming Software Puducherry" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AyuPlus – Book a Free Demo | AyuPlus HMS",
    description:
      "Book a free demo or reach us directly. Gleaming Software, Puducherry. We respond within one business day.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ayuplus.in" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.ayuplus.in/contact" },
    ],
  };
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Gleaming Software",
    description: "Developer of AyuPlus — India's purpose-built Ayurvedic Hospital Management System.",
    url: "https://www.ayuplus.in",
    logo: "https://www.ayuplus.in/images/Logo.svg",
    image: "https://www.ayuplus.in/images/og-image.jpg",
    telephone: "+91-98949-97482",
    email: "contact@ayuplus.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "St Anthony Koil St, Kavery Nagar, Reddiarpalayam",
      addressLocality: "Puducherry",
      addressRegion: "Puducherry",
      postalCode: "605010",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.918,
      longitude: 79.834,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "19:00",
    },
    sameAs: [
      "https://www.linkedin.com/company/111806170",
      "https://www.facebook.com/profile.php?id=61588704586539",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      {children}
    </>
  );
}
