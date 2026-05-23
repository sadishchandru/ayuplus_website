export default function PricingLayout({ children }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ayuplus.in" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.ayuplus.in/pricing" },
    ],
  };

  const productOffers = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AyuPlus – Ayurvedic Hospital Management System",
    url: "https://www.ayuplus.in",
    description:
      "Purpose-built HMS for Ayurvedic hospitals. OPD, IPD, Panchakarma, Pharmacy, Billing & Prakruti assessment.",
    brand: { "@type": "Brand", name: "Gleaming Software" },
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "1499",
        priceCurrency: "INR",
        priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
        description: "Essential features for solo Ayurvedic practitioners. 1 user login.",
        url: "https://www.ayuplus.in/pricing",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Professional",
        price: "3999",
        priceCurrency: "INR",
        priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
        description: "Complete clinical workflow — Vaidya Mode, Pharmacy, OPD + IPD. Up to 10 user logins.",
        url: "https://www.ayuplus.in/pricing",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Advanced",
        price: "5999",
        priceCurrency: "INR",
        priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
        description: "Full Ayurvedic clinical system — all 7 Panchakarma forms, 9 case sheets, Prakruti assessment. Up to 25 user logins.",
        url: "https://www.ayuplus.in/pricing",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "8999",
        priceCurrency: "INR",
        priceSpecification: { "@type": "UnitPriceSpecification", billingDuration: "P1M" },
        description: "Complete solution for large hospitals and multi-branch networks. Unlimited user logins. AI prescription support.",
        url: "https://www.ayuplus.in/pricing",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productOffers) }} />
      {children}
    </>
  );
}
