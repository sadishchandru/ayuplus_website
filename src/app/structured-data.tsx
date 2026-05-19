export default function StructuredData() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AyuPlus",
    applicationCategory: "HealthcareApplication",
    operatingSystem: "Web",
    url: "https://www.ayuplus.in",
    description:
      "Purpose-built Ayurvedic Hospital Management System covering OPD, IPD, Panchakarma, Pharmacy, Billing, and Prakruti assessment.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Contact for custom pricing based on hospital size",
    },
    creator: {
      "@type": "Organization",
      name: "Gleaming Software",
      url: "https://gleamingsoftware.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-98949-97482",
        contactType: "sales",
        email: "contact@ayuplus.com",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam", "Tamil", "Hindi"],
      },
    },
    featureList: [
      "Panchakarma procedure tracking",
      "Prakruti & Dosha assessment",
      "OPD and IPD patient management",
      "Ayurvedic pharmacy management",
      "Hospital billing and invoicing",
      "Role-based access control",
      "Clinical examination forms",
      "Discharge summary management",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gleaming Software",
    url: "https://gleamingsoftware.com",
    logo: "https://www.ayuplus.in/images/Logo.svg",
    sameAs: [
      "https://www.linkedin.com/company/111806170",
      "https://www.facebook.com/profile.php?id=61588704586539",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98949-97482",
      contactType: "customer support",
      email: "contact@ayuplus.com",
      areaServed: "IN",
      availableLanguage: ["English", "Malayalam", "Tamil", "Hindi"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AyuPlus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AyuPlus is a purpose-built Ayurvedic Hospital Management System (HMS) that covers the complete patient journey — from OPD registration and Panchakarma tracking to pharmacy, billing, and Prakruti assessment. Built by Gleaming Software.",
        },
      },
      {
        "@type": "Question",
        name: "Does AyuPlus support Panchakarma management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AyuPlus has 7 dedicated Panchakarma procedure forms: SnehaPanam (day-wise), Samyak, Bahya Sneha, Vamanam, Virechanam, Vasthi, and Uttara Vasthi — all with printable records.",
        },
      },
      {
        "@type": "Question",
        name: "Can AyuPlus handle pharmacy and billing together?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AyuPlus links pharmacy dispensing directly to patient billing. Medicines issued are automatically added to the invoice, eliminating manual billing gaps and revenue leakage.",
        },
      },
      {
        "@type": "Question",
        name: "Which languages does AyuPlus support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AyuPlus and its support team operate in Malayalam, Tamil, Hindi, and English.",
        },
      },
      {
        "@type": "Question",
        name: "Is AyuPlus cloud-based or on-premises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AyuPlus can be deployed on-premises on your own server or on the cloud. You retain full ownership of your data with no vendor lock-in.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to go live with AyuPlus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most hospitals go live within days, not months. Gleaming Software handles data migration, system setup, and staff training as part of onboarding.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
