"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
const BILLING_MODULES = [
  {
    icon: "🧾",
    title: "Hospital Invoices",
    badge: "/Billings/Invoices",
    desc: "Comprehensive multi-service invoices covering OPD charges, bed rent, Panchakarma procedure fees, investigation fees, and miscellaneous charges — all in one invoice per patient visit.",
    features: [
      "Auto-assigned invoice number",
      "Add unlimited line items (OPD, bed, procedure, investigation)",
      "Flat or percentage discount control",
      "Tax calculation — Subtotal, Tax, Net Total auto-calculated",
      "Payment mode: Cash / Card / UPI / Insurance",
      "Print formatted receipt",
    ],
  },
  {
    icon: "⚡",
    title: "Quick Bills",
    badge: "/Billings/Bills",
    desc: "Fast single-service billing for outpatient visits. Ideal for simple consultation fee collection without creating a full multi-line invoice.",
    features: [
      "Patient search by OPNo",
      "Single service + amount entry",
      "Payment mode selection",
      "Instant bill generation and print",
      "Linked to patient billing history",
    ],
  },
  {
    icon: "💵",
    title: "Advance Payments",
    badge: "/Billings/AdvancePayments",
    desc: "Record patient deposits before treatment begins. Track remaining balance and auto-adjust against future invoices — no manual reconciliation needed.",
    features: [
      "Record advance deposit amount",
      "Payment mode: Cash / Card / UPI",
      "Add remarks per transaction",
      "Running balance auto-tracked",
      "Adjustable against any future invoice",
    ],
  },
];

const PAIN_POINTS = [
  "Panchakarma sessions completed but never invoiced",
  "Pharmacy medicines dispensed without billing entry",
  "Advance deposits not tracked, lost in reconciliation",
  "Discounts applied inconsistently — no audit trail",
];

const SOLUTIONS = [
  "Every PKT session linked to patient OPNo — billable on demand",
  "Pharmacy dispensing auto-adds to invoice",
  "Advance balance tracked per patient, adjusts automatically",
  "Discount field with flat/% toggle — logged per invoice",
];

const PAYMENT_MODES = [
  { icon: "💵", label: "Cash" },
  { icon: "💳", label: "Card" },
  { icon: "📱", label: "UPI" },
  { icon: "🏥", label: "Insurance" },
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

export default function BillingPage() {
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
            Hospital Billing — Zero Revenue Leakage
          </h1>
          <p className="font-normal text-[16px] md:text-[18px] md:leading-[39px] tracking-[0.07px] text-center text-[#4A5565] mb-[28px] max-w-2xl mx-auto">
            Multi-service invoices. Quick bills. Advance payments with balance tracking.<br className="hidden md:block" /> Every treatment, pharmacy item, and consultation fee in one invoice.
          </p>
          <button onClick={openModal} className="bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] font-medium text-[14px] md:text-[18px] leading-[28px] tracking-[-0.44px] text-white px-[20px] py-[10px] md:px-[28px] md:py-[14px] rounded-[8px] cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95 shadow-lg hover:shadow-xl">
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* 3 Billing Modules */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-3">
              Three billing workflows, one system
            </h2>
            <p className="font-['Inter'] text-[16px] md:text-[18px] text-[#4A5565]">Every billing scenario your hospital faces — handled.</p>
          </div>
          <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {BILLING_MODULES.map((mod) => (
              <div key={mod.title} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[#f0faf4] flex items-center justify-center text-[20px] flex-shrink-0">{mod.icon}</div>
                    <h3 className="font-['Inter'] font-bold text-[20px] leading-snug text-[#101828]">{mod.title}</h3>
                  </div>
                  <p className="font-['Inter'] text-[15px] leading-[24px] text-[#4A5565] mb-6">{mod.desc}</p>
                  <ul className="space-y-5">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="font-['Inter'] font-semibold text-[16px] leading-[26px] tracking-[-0.44px] text-[#101828]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue leakage — 2 col */}
      <section className="w-full flex justify-center bg-[#FAFAFA]">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-white p-8 md:p-10">
              <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[24px] md:text-[34px] text-[#101828] mb-6">
                Where hospitals lose revenue every month
              </h2>
              <ul className="space-y-5">
                {PAIN_POINTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-red-400 mt-2" />
                    <span className="font-['Inter'] text-[15px] leading-[24px] text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-10" style={{ background: "#003d1a" }}>
              <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[24px] md:text-[34px] text-white mb-6">
                How AyuPlus fixes it
              </h2>
              <ul className="space-y-5">
                {SOLUTIONS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#00A63E] mt-2" />
                    <span className="font-['Inter'] text-[15px] leading-[24px] text-[#bbf7d0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment modes strip */}
      <section className="w-full flex justify-center bg-white py-[40px]">
        <div className="container-1280 w-full text-center px-4">
          <p className="font-['Inter'] font-semibold text-[13px] text-[#6B7280] uppercase tracking-widest mb-6">Accepted payment modes</p>
          <div className="flex flex-wrap justify-center gap-4">
            {PAYMENT_MODES.map((m) => (
              <div key={m.label} className="flex items-center gap-2 bg-[#f0faf4] border border-[#BBF7D0] rounded-full px-6 py-3">
                <span className="text-[20px]">{m.icon}</span>
                <span className="font-['Inter'] font-semibold text-[15px] text-[#101828]">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore links */}
      <section className="w-full flex justify-center bg-white py-[40px] md:py-[56px]">
        <div className="container-1280 w-full px-4">
          <p className="font-['Inter'] font-semibold text-[13px] text-[#6B7280] uppercase tracking-widest mb-6 text-center">Explore other AyuPlus modules</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/ayurvedic-pharmacy-software", label: "Pharmacy Software" },
              { href: "/opd-ipd-management", label: "OPD & IPD Management" },
              { href: "/case-sheets", label: "Clinical Case Sheets" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
                <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">{l.label}</span>
                <svg className="w-4 h-4 text-[#00A63E] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex justify-center py-[60px] md:py-[80px]" style={{ background: "#003d1a" }}>
        <div className="container-1280 w-full text-center px-4">
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-white mb-4">
            See hospital billing live in a demo
          </h2>
          <p className="font-['Inter'] text-[16px] text-[#bbf7d0] mb-8 max-w-xl mx-auto">
            We&apos;ll walk through invoicing, quick bills, advance payments, and discount controls in one session.
          </p>
          <button onClick={openModal} className="bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] font-['Inter'] font-medium text-[16px] text-white px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg">
            Book Free Demo →
          </button>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
