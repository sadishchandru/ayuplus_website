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
      "@type": "AggregateOffer",
      lowPrice: "1499",
      highPrice: "8999",
      priceCurrency: "INR",
      offerCount: 4,
      url: "https://www.ayuplus.in/pricing",
    },
    creator: {
      "@type": "Organization",
      name: "Gleaming Software",
      url: "https://gleamingsoftware.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-98949-97482",
        contactType: "sales",
        email: "contact@ayuplus.in",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam", "Tamil", "Hindi"],
      },
    },
    featureList: [
      "Vaidya Mode — dedicated doctor-first Ayurvedic consultation EMR",
      "7 Panchakarma procedure forms: SnehaPanam, Samyak, Bahya Sneha, Vamanam, Virechanam, Vasthi, Uttara Vasthi",
      "9 Ayurvedic clinical case sheets including Nadi Pareeksha and Asta Sthana Pariksha",
      "Prakruti and Dosha assessment with scoring",
      "OPD and IPD patient management under one patient number",
      "Ayurvedic pharmacy management with formulary and inventory",
      "GST-compliant hospital billing linked to consultations and Panchakarma",
      "Digital prescription pad for Ayurvedic doctors",
      "Discharge summary management",
      "Role-based access control (Doctor, Receptionist, Pharmacist, Admin)",
      "Tithi-based Ayurvedic treatment scheduling",
      "Multilingual support: Malayalam, Tamil, Hindi, English",
      "Cloud or on-premises deployment",
      "WhatsApp and SMS patient notifications",
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
      email: "contact@ayuplus.in",
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
      {
        "@type": "Question",
        name: "What is the pricing for AyuPlus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AyuPlus has four transparent pricing plans: Starter at ₹1,499/month (1 user), Professional at ₹3,999/month (up to 10 users), Advanced at ₹5,999/month (up to 25 users), and Enterprise at ₹8,999/month (unlimited users). Each plan includes a one-time setup fee. See full pricing at https://www.ayuplus.in/pricing.",
        },
      },
      {
        "@type": "Question",
        name: "Is AyuPlus billing GST-ready?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AyuPlus generates GST-compliant invoices for consultations, pharmacy, and Panchakarma procedures, with automatic tax calculation and printable bills.",
        },
      },
      {
        "@type": "Question",
        name: "What is Vaidya Mode in AyuPlus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vaidya Mode is a dedicated interface for Ayurvedic doctors (Vaidyas) to record classical examination findings, Prakruti assessments, Dosha scores, and treatment plans — all within the patient's clinical record.",
        },
      },
      {
        "@type": "Question",
        name: "Does AyuPlus support Nadi Pareeksha and Asta Sthana Pariksha?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AyuPlus includes digital records for Nadi Pareeksha (pulse diagnosis) and Asta Sthana Pariksha (eightfold examination) as part of Vaidya Mode and the clinical case sheet system. Doctors can record findings digitally and link them to the patient's treatment plan.",
        },
      },
      {
        "@type": "Question",
        name: "What makes AyuPlus different from generic hospital management software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AyuPlus is purpose-built for Ayurveda — not adapted from generic HMS. It includes Vaidya Mode (doctor-first Ayurvedic EMR), 7 dedicated Panchakarma forms, 9 Ayurvedic clinical case sheets, Nadi Pareeksha and Asta Sthana Pariksha records, Prakruti & Dosha assessment, Tithi-based scheduling, and an Ayurvedic pharmacy formulary. No generic HMS offers these workflows.",
        },
      },
      {
        "@type": "Question",
        name: "Does AyuPlus work for small Ayurvedic clinics, not just hospitals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Starter plan at ₹1,499/month is designed for solo practitioners and small Ayurvedic clinics. The Professional plan at ₹3,999/month covers clinics with up to 10 staff. AyuPlus scales from a single-doctor practice to large multi-branch hospital networks.",
        },
      },
      {
        "@type": "Question",
        name: "How does AyuPlus compare to Ayurlive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AyuPlus and Ayurlive are both Ayurvedic HMS solutions. AyuPlus differentiators include: Vaidya Mode (dedicated doctor-first consultation EMR), Tithi-based scheduling, 7 Panchakarma forms with Nadi Pareeksha records, transparent published pricing starting at ₹1,499/month, and the option to deploy on-premises or on the cloud. Ayurlive focuses on ERP-style management across 18+ modules but does not publish its pricing.",
        },
      },
      {
        "@type": "Question",
        name: "What are the Panchakarma forms available in AyuPlus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AyuPlus includes 7 dedicated Panchakarma procedure forms: SnehaPanam (day-wise tracking), Samyak Snehapana, Bahya Sneha, Vamanam, Virechanam, Vasthi, and Uttara Vasthi. Each form supports day-wise progress tracking and generates printable procedure records.",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AyuPlus HMS",
    url: "https://www.ayuplus.in",
    description:
      "India's purpose-built Ayurvedic Hospital Management System — OPD, IPD, Panchakarma, Pharmacy, Billing, and Prakruti assessment.",
    publisher: {
      "@type": "Organization",
      name: "Gleaming Software",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
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
