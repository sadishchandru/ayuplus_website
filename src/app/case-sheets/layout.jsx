export const metadata = {
  title: "9 Ayurvedic Clinical Case Sheets – Nadi Pareeksha, Prakruti & More",
  description:
    "9 structured digital case sheets for Ayurvedic hospitals — Nadi Pareeksha, Asta Sthana Pariksha, Prakruti Assessment, Panchakarma, Cervical Spine, Knee Joint, Low Back Pain, Gynaecology, CNS, and Cardiovascular. Replace paper records with digital Ayurvedic EMR forms.",
  alternates: { canonical: "https://www.ayuplus.in/case-sheets" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/case-sheets",
    title: "9 Ayurvedic Clinical Case Sheets – Nadi Pareeksha, Prakruti & More | AyuPlus HMS",
    description:
      "Digital Ayurvedic case sheets including Nadi Pareeksha, Asta Sthana Pariksha, Prakruti Assessment, and Panchakarma forms. Linked to patient OPNo, editable, printable.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus Ayurvedic clinical case sheets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "9 Ayurvedic Clinical Case Sheets – Nadi Pareeksha & Prakruti | AyuPlus HMS",
    description:
      "Digital Ayurvedic case sheets — Nadi Pareeksha, Asta Sthana Pariksha, Prakruti, Panchakarma and more. No more paper records.",
    images: ["/images/og-image.jpg"],
  },
};

export default function CaseSheetsLayout({ children }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ayuplus.in" },
      { "@type": "ListItem", position: 2, name: "Clinical Case Sheets", item: "https://www.ayuplus.in/case-sheets" },
    ],
  };
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "9 Ayurvedic Clinical Case Sheets – Nadi Pareeksha, Prakruti & More | AyuPlus HMS",
    description:
      "Digital Ayurvedic case sheets — Nadi Pareeksha, Asta Sthana Pariksha, Prakruti Assessment, Panchakarma, Cervical Spine, Knee Joint, Gynaecology, CNS, and Cardiovascular. Replace paper records with Ayurvedic EMR forms.",
    url: "https://www.ayuplus.in/case-sheets",
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
