"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const plans = [
  {
    name: "Starter",
    icon: "🌱",
    tag: "Single Doctor Clinic",
    monthlyPrice: 1499,
    yearlyPrice: 1199,
    yearlyTotal: 14388,
    setup: 2500,
    color: "#4a8c62",
    popular: false,
    description: "Essential features for solo Ayurvedic practitioners",
    features: [
      "OPD patient registration",
      "Patient records & history",
      "Consent forms (digital)",
      "Digital prescription pad",
      "Basic billing & invoices",
      "Basic reports",
      "1 user login",
      "WhatsApp/SMS notifications",
      "Cloud or on-premises",
    ],
    notIncluded: [
      "Vaidya Mode",
      "Pharmacy management",
      "Panchakarma forms",
      "Case sheets",
      "IPD / bed management",
    ],
  },
  {
    name: "Professional",
    icon: "🏥",
    tag: "Most Preferred",
    monthlyPrice: 3999,
    yearlyPrice: 3199,
    yearlyTotal: 38388,
    setup: 6000,
    color: "#00A63E",
    popular: true,
    description: "Everything most clinics need — the complete clinical workflow",
    features: [
      "Everything in Starter",
      "Vaidya Mode (full consultation)",
      "Treatment planning & tracking",
      "Therapist login & management",
      "Pharmacy management",
      "Role-based access control",
      "Advanced billing & advances",
      "OPD + IPD management",
      "Up to 10 user logins",
      "Staff training included",
    ],
    notIncluded: [
      "Panchakarma PKT forms",
      "Clinical case sheets",
      "AI prescription support",
      "Multi-branch setup",
    ],
  },
  {
    name: "Advanced",
    icon: "🌿",
    tag: "Clinical Depth",
    monthlyPrice: 5999,
    yearlyPrice: 4799,
    yearlyTotal: 57588,
    setup: 8000,
    color: "#2d6e44",
    popular: false,
    description: "Full Ayurvedic clinical system with Panchakarma & case sheets",
    features: [
      "Everything in Professional",
      "All 7 Panchakarma PKT forms",
      "All 9 clinical case sheets",
      "Prakruti assessment (auto-scored)",
      "Advanced reports & analytics",
      "Patient file uploads",
      "Discharge summaries",
      "Up to 25 user logins",
      "Priority support",
    ],
    notIncluded: [
      "AI prescription support",
      "Multi-branch setup",
    ],
  },
  {
    name: "Enterprise",
    icon: "🏨",
    tag: "Hospitals & Chains",
    monthlyPrice: 8999,
    yearlyPrice: 7199,
    yearlyTotal: 86388,
    setup: 12000,
    color: "#003d1a",
    popular: false,
    description: "Complete solution for large hospitals and multi-branch networks",
    features: [
      "Everything in Advanced",
      "AI prescription support",
      "Multi-branch management",
      "Centralised patient records",
      "Custom module development",
      "Dedicated account manager",
      "On-site staff training",
      "Unlimited user logins",
      "SLA-backed uptime guarantee",
      "Advanced data handling",
    ],
    notIncluded: [],
  },
];

const COMPARISON_ROWS = [
  { feature: "OPD registration", values: [true, true, true, true] },
  { feature: "Patient records", values: [true, true, true, true] },
  { feature: "Digital consent", values: [true, true, true, true] },
  { feature: "Prescription pad", values: [true, true, true, true] },
  { feature: "Basic billing", values: [true, true, true, true] },
  { feature: "Basic reports", values: [true, true, true, true] },
  { feature: "Vaidya Mode", values: [false, true, true, true] },
  { feature: "Pharmacy", values: [false, true, true, true] },
  { feature: "Therapist management", values: [false, true, true, true] },
  { feature: "Role-based access", values: [false, true, true, true] },
  { feature: "IPD / Bed management", values: [false, true, true, true] },
  { feature: "Panchakarma (7 forms)", values: [false, false, true, true] },
  { feature: "Clinical case sheets (9)", values: [false, false, true, true] },
  { feature: "Prakruti assessment", values: [false, false, true, true] },
  { feature: "Advanced analytics", values: [false, false, true, true] },
  { feature: "AI prescription", values: [false, false, false, true] },
  { feature: "Multi-branch", values: [false, false, false, true] },
  { feature: "User logins", values: ["1", "10", "25", "Unlimited"] },
];

const ADDONS = [
  {
    icon: "💬",
    title: "WhatsApp / SMS Integration",
    desc: "Automated appointment reminders, prescription delivery, alerts",
    price: "Contact for pricing",
  },
  {
    icon: "🤖",
    title: "AI Prescription Support",
    desc: "Medicine suggestions powered by AI during Vaidya Mode consultation",
    price: "Included in Enterprise",
  },
  {
    icon: "👥",
    title: "Additional User Logins",
    desc: "Add more staff logins beyond your plan limit",
    price: "₹299/user/month",
  },
  {
    icon: "💾",
    title: "Extra Storage",
    desc: "Additional document and image storage for large hospitals",
    price: "Contact for pricing",
  },
];

const FAQS = [
  {
    q: "Can I switch plans after signing up?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately. Downgrades apply from the next billing cycle.",
  },
  {
    q: "What is included in the setup fee?",
    a: "The one-time setup fee covers installation (cloud or on-premises), hospital configuration (bed setup, user roles, number series), data migration if needed, and staff training sessions.",
  },
  {
    q: "Is there a contract or lock-in?",
    a: "No long-term contract required. Monthly plans can be cancelled with 30 days notice. Yearly plans are billed annually.",
  },
  {
    q: "Do you offer a free trial?",
    a: "We offer a personalised live demo instead of a self-serve trial — so our team can walk you through the system configured for your specific workflows. Book a demo and see the full system in 20 minutes.",
  },
  {
    q: "Are WhatsApp notifications included?",
    a: "WhatsApp/SMS integration is an optional add-on available for all plans. It requires a MSG91 (SMS) or Twilio (WhatsApp) account which is billed separately by the provider.",
  },
  {
    q: "Do you support on-premises installation?",
    a: "Yes. All plans can be deployed on your own server (on-premises) or on the cloud. The choice is yours — no extra charge for on-premises.",
  },
];

function Check() {
  return <span style={{ color: "#00A63E", fontWeight: 700, fontSize: "16px" }}>✓</span>;
}

function Cross() {
  return <span style={{ color: "#ccc", fontSize: "16px" }}>✗</span>;
}

export default function PricingClient() {
  const [yearly, setYearly] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const openModal = () => setDemoOpen(true);

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-[100px] md:pt-[140px] pb-[60px] md:pb-[80px] bg-[radial-gradient(ellipse_at_top,_#00A63E0D_0%,_white_60%)] flex flex-col items-center">
        <div className="container-1280 text-center w-full px-4">
          <div className="flex justify-center mb-2">
            <img src="/images/leaf.svg" alt="Leaf" style={{ width: 55, height: "auto" }} />
          </div>
          <h1 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[52px] leading-[36px] md:leading-[62px] tracking-[0.12px] text-[#101828] mb-[20px]">
            Simple, Honest Pricing
          </h1>
          <p className="font-normal text-[14px] md:text-[17px] md:leading-[39px] tracking-[0.07px] text-center text-[#4A5565] mb-[28px] max-w-2xl mx-auto">
            From solo practitioners to large Ayurvedic hospitals — choose the plan that fits.<br className="hidden md:block" /> On-premises or cloud. Setup and training included in every plan.
          </p>
          <button
            onClick={openModal}
            className="bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] font-medium text-[14px] md:text-[18px] leading-[28px] tracking-[-0.44px] text-white px-[20px] py-[10px] md:px-[28px] md:py-[14px] rounded-[8px] cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* Billing toggle */}
      <div style={{ background: "#fff", padding: "24px 5%", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "8px", background: "#f7faf8", padding: "4px", borderRadius: "50px", border: "1px solid #c8dace" }}>
          <button
            onClick={() => setYearly(false)}
            style={{
              padding: "10px 24px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              background: !yearly ? "#00A63E" : "transparent",
              color: !yearly ? "#fff" : "#4a6654",
              transition: "all 0.2s",
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            style={{
              padding: "10px 24px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              background: yearly ? "#00A63E" : "transparent",
              color: yearly ? "#fff" : "#4a6654",
              transition: "all 0.2s",
            }}
          >
            Yearly (Save ~20%)
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <section style={{ background: "#fff", padding: "20px 5% 60px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{
              border: plan.popular ? "2px solid #00A63E" : "1px solid #e0ede4",
              borderRadius: "16px",
              padding: "28px",
              position: "relative",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
            }}>
              {plan.popular && (
                <div style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#00A63E",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "4px 14px",
                  borderRadius: "50px",
                  whiteSpace: "nowrap",
                }}>
                  ★ Most Preferred
                </div>
              )}

              <div style={{ marginBottom: "12px" }}>
                <span style={{ fontSize: "32px" }}>{plan.icon}</span>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#101828", marginBottom: "4px" }}>{plan.name}</h3>
              <span style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: 600,
                color: plan.color,
                background: `${plan.color}18`,
                padding: "3px 10px",
                borderRadius: "50px",
                marginBottom: "10px",
              }}>{plan.tag}</span>
              <p style={{ fontSize: "13px", color: "#4a6654", marginBottom: "16px", lineHeight: 1.5 }}>{plan.description}</p>

              <hr style={{ border: "none", borderTop: "1px solid #e8f0ea", marginBottom: "16px" }} />

              <div style={{ marginBottom: "4px" }}>
                <span style={{ fontSize: "42px", fontWeight: 800, color: "#003d1a" }}>
                  ₹{(yearly ? plan.yearlyPrice : plan.monthlyPrice).toLocaleString("en-IN")}
                </span>
                <span style={{ fontSize: "14px", color: "#4a6654" }}>/month</span>
              </div>
              {yearly && (
                <p style={{ fontSize: "12px", color: "#00A63E", marginTop: "2px" }}>
                  Billed ₹{plan.yearlyTotal.toLocaleString("en-IN")}/year
                </p>
              )}
              <p style={{ fontSize: "12px", color: "#6a8e74", marginTop: "4px", marginBottom: "20px" }}>
                + ₹{plan.setup.toLocaleString("en-IN")} one-time setup
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", flex: 1 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px", fontSize: "13px", color: "#374151" }}>
                    <span style={{ color: "#00A63E", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px", fontSize: "13px", color: "#bbb", textDecoration: "line-through" }}>
                    <span style={{ color: "#ddd", flexShrink: 0 }}>✗</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={openModal}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  background: plan.popular ? "#00A63E" : "transparent",
                  color: plan.popular ? "#fff" : "#00A63E",
                  border: plan.popular ? "none" : "1px solid #00A63E",
                }}
              >
                {plan.popular ? "Start with Professional →" : "Get Started →"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section style={{ background: "#f7faf8", padding: "60px 5%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Hedvig Letters Serif', serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 400, color: "#101828", textAlign: "center", marginBottom: "8px" }}>
            Optional Add-ons
          </h2>
          <p style={{ textAlign: "center", fontSize: "15px", color: "#4a6654", marginBottom: "40px" }}>
            Enhance any plan with these extras
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            {ADDONS.map((a) => (
              <div key={a.title} style={{
                background: "#fff",
                border: "1px solid #e0ede4",
                borderRadius: "14px",
                padding: "24px",
                minWidth: "220px",
                maxWidth: "260px",
                flex: "1 1 220px",
              }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{a.icon}</div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#101828", marginBottom: "6px" }}>{a.title}</h3>
                <p style={{ fontSize: "13px", color: "#4a6654", lineHeight: 1.5, marginBottom: "12px" }}>{a.desc}</p>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#00A63E" }}>{a.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ background: "#fff", padding: "60px 5%" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Hedvig Letters Serif', serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 400, color: "#101828", textAlign: "center", marginBottom: "40px" }}>
            Compare all plans
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e0ede4" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#4a6654", fontWeight: 600, minWidth: "200px" }}>Feature</th>
                  {plans.map((p) => (
                    <th key={p.name} style={{
                      padding: "12px 16px",
                      textAlign: "center",
                      color: p.popular ? "#00A63E" : "#101828",
                      fontWeight: 700,
                      background: p.popular ? "#f0faf4" : "transparent",
                      minWidth: "110px",
                    }}>
                      {p.icon} {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? "#fafafa" : "#fff", borderBottom: "1px solid #f0f0f0" }}>
                    <td style={{ padding: "11px 16px", color: "#374151", fontWeight: 500 }}>{row.feature}</td>
                    {row.values.map((v, j) => (
                      <td key={j} style={{
                        padding: "11px 16px",
                        textAlign: "center",
                        background: plans[j].popular ? "#f0faf4" : "transparent",
                      }}>
                        {v === true ? <Check /> : v === false ? <Cross /> : (
                          <span style={{ fontWeight: 600, color: "#374151", fontSize: "13px" }}>{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Client proof strip */}
      <section style={{ background: "#f0faf4", padding: "40px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{
            border: "1px solid #c8e6d0",
            borderRadius: "16px",
            padding: "20px 28px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "20px",
          }}>
            <img
              src="/images/hari_logo.png"
              alt="Hari Ashtanga Ayurveda Chikitsalaya"
              style={{ width: "70px", height: "70px", objectFit: "contain", borderRadius: "50%", border: "2px solid #e0ede4" }}
            />
            <div style={{ textAlign: "left", flex: 1, minWidth: "160px" }}>
              <p style={{ fontWeight: 700, color: "#003d1a", fontSize: "15px", marginBottom: "2px" }}>Hari Ashtanga Ayurveda Chikitsalaya</p>
              <p style={{ fontSize: "12px", color: "#4a6654", marginBottom: "4px" }}>Moolakulam, Puducherry</p>
              <p style={{ fontSize: "13px", color: "#00A63E", fontWeight: 700 }}>14,757 patients on AyuPlus</p>
            </div>
          </div>
          <p style={{ fontSize: "16px", color: "#003d1a", fontWeight: 600, marginBottom: "16px" }}>
            Join them — book your free demo today
          </p>
          <button
            onClick={openModal}
            style={{
              background: "#00A63E",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "14px 28px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section style={{ background: "#fff", padding: "60px 5%" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Hedvig Letters Serif', serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 400, color: "#101828", textAlign: "center", marginBottom: "40px" }}>
            Pricing FAQ
          </h2>
          <div style={{ borderTop: "1px solid #e8f0ea" }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} style={{ borderBottom: "1px solid #e8f0ea" }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "16px",
                    }}
                  >
                    <span style={{ fontSize: "15px", fontWeight: 600, color: "#101828" }}>{faq.q}</span>
                    <span style={{
                      flexShrink: 0,
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      border: `1px solid ${isOpen ? "#00A63E" : "#DBDBDB"}`,
                      background: isOpen ? "#00A63E" : "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: isOpen ? "rotate(45deg)" : "none",
                      transition: "all 0.2s",
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#fff" : "#667085"} strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <p style={{ fontSize: "14px", color: "#4a6654", lineHeight: 1.7, paddingBottom: "16px" }}>{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#003d1a", padding: "80px 5%", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Hedvig Letters Serif', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, color: "#fff", marginBottom: "16px" }}>
          Start with a free 20-minute demo
        </h2>
        <p style={{ fontSize: "16px", color: "#bbf7d0", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
          No credit card. No commitment. See AyuPlus configured for your hospital.
        </p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px", marginBottom: "28px" }}>
          <button
            onClick={openModal}
            style={{
              background: "#00A63E",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "14px 28px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Book Free Demo →
          </button>
          <a
            href="https://wa.me/919894997482"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff",
              borderRadius: "10px",
              padding: "14px 28px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Talk to us on WhatsApp
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "8px 24px", fontSize: "13px", color: "#86efac" }}>
          <a href="mailto:contact@ayuplus.com" style={{ color: "#86efac" }}>contact@ayuplus.com</a>
          <span style={{ color: "#4ade80" }}>|</span>
          <a href="tel:+919894997482" style={{ color: "#86efac" }}>+91 98949 97482</a>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
