"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const FEATURE_CARDS = [
  {
    icon: "📦",
    title: "Medicine Catalogue",
    desc: "Categories, dosage forms, unit masters with duplicate-check typeahead. Covers Churna, Oil, Capsule, Ghee, Kashayam and more.",
  },
  {
    icon: "🛒",
    title: "Stock Purchase",
    desc: "Supplier entry with invoice number, batch number, expiry date — auto-updates inventory on every purchase.",
  },
  {
    icon: "💊",
    title: "Patient Dispensing",
    desc: "Linked directly to patient OPNo. Every medicine dispensed is auto-added to the patient invoice — zero manual entry.",
  },
  {
    icon: "📋",
    title: "Audit Log",
    desc: "Every dispensing timestamped and staff-tagged. Full audit trail of who changed what, when, and the old vs new value.",
  },
  {
    icon: "⚠️",
    title: "Low Stock Alerts",
    desc: "Automated threshold alerts so you never run out of critical medicines without warning.",
  },
  {
    icon: "💰",
    title: "Billing Integration",
    desc: "Pharmacy charges flow directly into the patient invoice with GST auto-calculated. Cash, Card, and UPI supported.",
  },
];

const BEFORE = [
  "Manual stock register updated end-of-day",
  "Medicines dispensed without invoices raised",
  "No audit trail — discrepancies hard to investigate",
  "Monthly stock counts reveal large unexplained losses",
  "Billing and pharmacy operate in silos",
];

const AFTER = [
  "Real-time inventory updated on every dispensing",
  "Zero unbilled dispensing — auto-linked to invoice",
  "Full audit trail with staff tags and timestamps",
  "Automated alerts before stock hits zero",
  "Pharmacy and billing unified in one system",
];

function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-[#00A63E] flex items-center justify-center border border-[#00A63E] mt-[2px]">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

export default function PharmacyPage() {
  const [demoOpen, setDemoOpen] = useState(false);
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
            Ayurvedic Pharmacy Software —<br className="hidden md:block" /> Zero Revenue Leakage
          </h1>
          <p className="ayup-section-sub font-normal text-[16px] md:text-[18px] md:leading-[39px] tracking-[0.07px] text-center text-[#4A5565] mb-[28px] max-w-2xl mx-auto">
            Every medicine dispensed is automatically added to the patient invoice.<br className="hidden md:block" /> No unbilled dispensing. No manual entry.
          </p>
          <button onClick={openModal} className="border-2 border-[#5A9A04] text-[#5A9A04] bg-transparent font-medium text-[14px] md:text-[18px] leading-[28px] tracking-[-0.44px] px-[20px] py-[10px] md:px-[28px] md:py-[14px] rounded-[8px] cursor-pointer hover:bg-[#5A9A04] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="w-full flex justify-center bg-[#FAFAFA]">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="text-center mb-12">
            <span className="inline-block font-['Inter'] text-[13px] font-semibold text-[#00A63E] uppercase tracking-widest mb-3">
              6 Pharmacy Screens
            </span>
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] leading-[36px] md:leading-[52px] text-[#101828]">
              Everything pharmacy — in one place
            </h2>
            <p className="ayup-section-sub font-['Inter'] text-[16px] md:text-[18px] leading-[28px] text-[#4A5565] mt-3 max-w-xl mx-auto">
              From catalogue management to patient dispensing, every pharmacy operation is covered.
            </p>
          </div>
          <div className="ayup-grid-3">
            {FEATURE_CARDS.map((card) => (
              <div key={card.title} className="ayup-card bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f0faf4] flex items-center justify-center text-[20px] flex-shrink-0">
                      {card.icon}
                    </div>
                    <h3 className="font-['Inter'] font-semibold text-[15px] leading-snug text-[#003d1a]">{card.title}</h3>
                  </div>
                  <p className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#5a7a65]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828]">
              Before &amp; After AyuPlus
            </h2>
            <p className="ayup-section-sub font-['Inter'] text-[16px] md:text-[18px] leading-[28px] text-[#4A5565] mt-3 max-w-xl mx-auto">
              See what changes the moment you go live.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-red-100 p-8 hover:shadow-md transition-shadow">
              <p className="font-['Inter'] font-semibold text-[13px] text-red-500 uppercase tracking-widest mb-6">Before AyuPlus</p>
              <ul className="space-y-4">
                {BEFORE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-red-100 flex items-center justify-center mt-[2px]">
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="font-['Inter'] text-[13px] leading-[20px] text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#BBF7D0] p-8 hover:shadow-md transition-shadow">
              <p className="font-['Inter'] font-semibold text-[13px] text-[#00A63E] uppercase tracking-widest mb-6">After AyuPlus</p>
              <ul className="space-y-4">
                {AFTER.map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <CheckIcon />
                    <span className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="w-full flex justify-center bg-white py-[40px] md:py-[56px]">
        <div className="container-1280 w-full px-4">
          <p className="font-['Inter'] font-semibold text-[13px] text-[#6B7280] uppercase tracking-widest mb-6 text-center">Explore other AyuPlus modules</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/" className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
              <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">AyuPlus Home</span>
              <svg className="w-4 h-4 text-[#00A63E] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/case-sheets" className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
              <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">Clinical Case Sheets</span>
              <svg className="w-4 h-4 text-[#00A63E] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/opd-ipd-management" className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
              <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">OPD &amp; IPD Management</span>
              <svg className="w-4 h-4 text-[#00A63E] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex justify-center py-[60px] md:py-[80px]" style={{ background: "linear-gradient(135deg, #003d1a 0%, #005c28 100%)" }}>
        <div className="container-1280 w-full text-center px-4">
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-white mb-4">
            Stop losing revenue on pharmacy billing
          </h2>
          <p className="font-['Inter'] text-[15px] leading-[26px] text-[#bbf7d0] mb-8 max-w-xl mx-auto">
            See how AyuPlus links every dispensing to an invoice automatically — no gaps, no manual reconciliation.
          </p>
          <button onClick={openModal} className="border-2 border-white text-white bg-transparent font-['Inter'] font-medium text-[16px] px-8 py-4 rounded-[8px] cursor-pointer hover:bg-white hover:text-[#003d1a] transition-all duration-300 hover:scale-105 active:scale-95 mb-6">
            Book Free Demo →
          </button>
          <div>
            <Link href="/" className="font-['Inter'] text-[14px] text-[#86efac] hover:text-white transition-colors">
              ← Back to AyuPlus Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
