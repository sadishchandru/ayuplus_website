"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const FEATURE_CARDS = [
  { icon: "📦", title: "Medicine Catalogue", desc: "Categories, dosage forms, unit masters with duplicate-check typeahead. Covers Churna, Oil, Capsule, Ghee, Kashayam and more." },
  { icon: "🛒", title: "Stock Purchase", desc: "Supplier entry with invoice number, batch number, expiry date — auto-updates inventory on every purchase." },
  { icon: "💊", title: "Patient Dispensing", desc: "Linked directly to patient OPNo. Every medicine dispensed is auto-added to the patient invoice — zero manual entry." },
  { icon: "📋", title: "Audit Log", desc: "Every dispensing timestamped and staff-tagged. Full audit trail of who changed what, when, and the old vs new value." },
  { icon: "⚠️", title: "Low Stock Alerts", desc: "Automated threshold alerts so you never run out of critical medicines without warning." },
  { icon: "💰", title: "Billing Integration", desc: "Pharmacy charges flow directly into the patient invoice with GST auto-calculated. Cash, Card, and UPI supported." },
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

export default function PharmacyPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openModal = () => setDemoOpen(true);

  return (
    <main className="min-h-screen bg-white">
      <Navbar onOpenModal={openModal} />

      {/* Breadcrumb */}
      <div className="w-full flex justify-center bg-white border-b border-gray-100">
        <div className="container-1280 w-full pt-[90px] pb-3">
          <nav className="flex items-center gap-2 text-[13px] text-[#6B7280]">
            <Link href="/" className="hover:text-[#00A63E] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#101828] font-medium">Pharmacy Software</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[60px] md:py-[80px] text-center max-w-3xl mx-auto">
          <span className="inline-block font-['Inter'] font-semibold text-[12px] leading-[20px] tracking-[1.5px] uppercase text-[#00A63E] border border-[#00A63E]/30 bg-[#00A63E0D] px-[12px] py-[4px] rounded-full mb-[20px]">
            Ayurvedic Pharmacy Management
          </span>
          <h1 className="font-['Inter'] font-bold text-[32px] md:text-[52px] leading-[38px] md:leading-[62px] tracking-[-0.5px] text-[#101828] mb-[20px]">
            Ayurvedic Pharmacy Software — Zero Revenue Leakage
          </h1>
          <p className="font-['Inter'] text-[17px] md:text-[20px] leading-[28px] md:leading-[34px] text-[#4A5565] mb-[36px] max-w-2xl mx-auto">
            Every medicine dispensed is automatically added to the patient invoice. No unbilled dispensing. No manual entry.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 bg-[#00A63E] text-white font-['Inter'] font-semibold text-[16px] rounded-xl hover:bg-[#008236] transition-colors shadow-md hover:shadow-lg"
          >
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="w-full flex justify-center bg-[#FAFAFA]">
        <div className="container-1280 w-full py-[50px] md:py-[70px]">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block font-['Inter'] text-[13px] font-semibold text-[#00A63E] uppercase tracking-widest mb-3">
              6 Pharmacy Screens
            </span>
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] leading-[36px] md:leading-[52px] text-[#101828]">
              Everything pharmacy — in one place
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURE_CARDS.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="text-[28px]">{card.icon}</div>
                <p className="font-['Inter'] font-semibold text-[17px] text-[#101828]">{card.title}</p>
                <p className="font-['Inter'] text-[14px] leading-[22px] text-[#6B7280]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[50px] md:py-[70px]">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828]">
              Before &amp; After AyuPlus
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-red-100 p-8">
              <p className="font-['Inter'] font-semibold text-[13px] text-red-500 uppercase tracking-widest mb-5">Before AyuPlus</p>
              <ul className="space-y-4">
                {BEFORE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="font-['Inter'] text-[14px] leading-[22px] text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#BBF7D0] p-8">
              <p className="font-['Inter'] font-semibold text-[13px] text-[#00A63E] uppercase tracking-widest mb-5">After AyuPlus</p>
              <ul className="space-y-4">
                {AFTER.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00A63E] flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-['Inter'] text-[14px] leading-[22px] text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex justify-center py-[50px] md:py-[70px]" style={{ background: "linear-gradient(135deg, #003d1a 0%, #005c28 100%)" }}>
        <div className="container-1280 w-full text-center">
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-white mb-4">
            Stop losing revenue on pharmacy billing
          </h2>
          <p className="font-['Inter'] text-[16px] text-[#bbf7d0] mb-8 max-w-xl mx-auto">
            See how AyuPlus links every dispensing to an invoice automatically — no gaps, no manual reconciliation.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 bg-white text-[#00A63E] font-['Inter'] font-semibold text-[16px] rounded-xl hover:bg-[#f0faf4] transition-colors shadow-md mb-6"
          >
            Book Free Demo →
          </button>
          <div>
            <Link href="/" className="font-['Inter'] text-[14px] text-[#86efac] hover:text-white transition-colors">
              ← Back to AyuPlus Home
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="w-full flex justify-center bg-white py-[40px] md:py-[56px]">
        <div className="container-1280 w-full">
          <p className="font-['Inter'] font-semibold text-[13px] text-[#6B7280] uppercase tracking-widest mb-6 text-center">Explore other AyuPlus modules</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/" className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
              <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">AyuPlus Home</span>
              <svg className="w-4 h-4 text-[#00A63E] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/panchakarma-software" className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
              <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">Panchakarma Software</span>
              <svg className="w-4 h-4 text-[#00A63E] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/opd-ipd-management" className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
              <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">OPD & IPD Management</span>
              <svg className="w-4 h-4 text-[#00A63E] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
