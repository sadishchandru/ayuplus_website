export const metadata = {
  title: "9 Ayurvedic Clinical Case Sheets – Digital Forms",
  description:
    "9 structured digital case sheets built for Ayurvedic hospitals — Cervical Spine, Panchakarma, Knee Joint, Low Back Pain, Shoulder Joint, Gynaecology, CNS, Prakruti Assessment, and Cardiovascular. Replace paper records forever.",
  alternates: { canonical: "https://www.ayuplus.in/case-sheets" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AyuPlus HMS",
    url: "https://www.ayuplus.in/case-sheets",
    title: "9 Ayurvedic Clinical Case Sheets – Digital Forms | AyuPlus HMS",
    description:
      "Purpose-built digital forms for every Ayurvedic clinical workflow — from orthopaedic examinations to Panchakarma procedures. Linked to patient OPNo, editable, printable.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "AyuPlus Ayurvedic clinical case sheets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "9 Ayurvedic Clinical Case Sheets – Digital Forms | AyuPlus HMS",
    description:
      "9 structured digital case sheets for Ayurvedic hospitals. Panchakarma, Cervical Spine, Prakruti Assessment and more. No more paper.",
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
    name: "9 Ayurvedic Clinical Case Sheets – Digital Forms | AyuPlus HMS",
    description:
      "9 structured digital case sheets built for Ayurvedic hospitals — Cervical Spine, Panchakarma, Knee Joint, Low Back Pain, Shoulder Joint, Gynaecology, CNS, Prakruti Assessment, and Cardiovascular.",
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
