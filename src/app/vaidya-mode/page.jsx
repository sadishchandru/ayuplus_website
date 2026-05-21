"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const FEATURES = [
  { icon: "👤", title: "Patient Info & Clinical History", desc: "Auto-fill from OPNo. Full past visit history, current complaints, and allergy flags at a glance." },
  { icon: "😣", title: "Pain Assessment", desc: "Structured pain location mapping using NIH anatomical area notation. Record site, severity, and nature of pain." },
  { icon: "🩺", title: "Asta Sthana Pariksha", desc: "All 8 classical Ayurvedic examination parameters — Nadi, Moothra, Mala, Jihwa, Shabda, Sparsha, Druk, Aakruti." },
  { icon: "📆", title: "NCD Tracking (Month / Year)", desc: "Track non-communicable disease history with month and year of onset — for chronic condition management." },
  { icon: "🔬", title: "Clinical Measurements", desc: "Record height, weight, BMI, BP, temperature, SpO2, pulse, and heart rate — all in structured fields." },
  { icon: "📂", title: "Reports & File Management", desc: "Upload and view patient documents — X-rays, MRI scans, blood reports — directly within the consultation." },
  { icon: "🦠", title: "Complaints & Diagnosis", desc: "Enter chief complaints, system review, and dual diagnosis (Ayurvedic + conventional ICD coding)." },
  { icon: "🔄", title: "Disease Follow-up Tracking", desc: "Track the progress of each diagnosed condition across visits — see improvement, regression, or new symptoms." },
  { icon: "💊", title: "Medicine Prescription", desc: "Prescribe from a pre-loaded Ayurvedic medicine database. Set dosage, frequency, Anupana, and duration per medicine." },
  { icon: "📋", title: "Treatment Planning", desc: "Assign Panchakarma procedures, therapy sessions, and dietary recommendations linked to the same consultation." },
  { icon: "🖨️", title: "Print Consultation Summary", desc: "One-click printable consultation record — formatted for patient files, referrals, or insurance documentation." },
];

const BEFORE = [
  "Wait for front office to register the patient",
  "Receptionist enters vitals separately",
  "Doctor manually looks up past visit notes",
  "Prescription written on paper, typed elsewhere",
  "No structured Asta Sthana Pariksha documentation",
];

const AFTER = [
  "Doctor opens AyuPlus, searches OPNo — done",
  "All history, vitals, and records in one screen",
  "Asta Sthana Pariksha form built into consultation",
  "Digital prescription with Anupana and duration",
  "Printable consultation summary in one click",
];

const WHO = [
  { icon: "🏥", title: "Solo Practitioners", desc: "Run your full practice without administrative staff" },
  { icon: "🏨", title: "Department Doctors", desc: "Each Vaidya works independently in their department" },
  { icon: "🌿", title: "Panchakarma Specialists", desc: "Link PKT prescriptions directly from consultation" },
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

export default function VaidyaModePage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openModal = () => setDemoOpen(true);

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-[80px] md:pt-[140px] pb-[60px] md:pb-[80px] bg-[radial-gradient(ellipse_at_top,_#00A63E0D_0%,_white_60%)] flex flex-col items-center">
        <div className="container-1280 text-center w-full px-4">
          <div className="flex justify-center mb-2">
            <img src="/images/leaf.svg" alt="Leaf" style={{ width: 55, height: "auto" }} />
          </div>
          <h1 className="font-['Hedvig_Letters_Serif'] font-normal leading-[1.2] tracking-[0.12px] text-[#101828] mb-[20px]" style={{ fontSize: "clamp(24px, 5vw, 52px)", wordBreak: "break-word" }}>
            Vaidya Mode — Complete Consultation<br className="hidden md:block" /> Without Front Office
          </h1>
          <p className="ayup-section-sub font-normal text-[16px] md:text-[18px] md:leading-[39px] tracking-[0.07px] text-center text-[#4A5565] mb-[28px] max-w-2xl mx-auto">
            The only Ayurvedic HMS with a dedicated doctor-first workflow.<br className="hidden md:block" /> From patient arrival to prescription — everything in one screen, no support staff required.
          </p>
          <button onClick={openModal} className="border-2 border-[#5A9A04] text-[#5A9A04] bg-transparent font-medium text-[14px] md:text-[18px] leading-[28px] tracking-[-0.44px] px-[20px] py-[10px] md:px-[28px] md:py-[14px] rounded-[8px] cursor-pointer hover:bg-[#5A9A04] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* Feature Strip */}
      <section style={{ background: "#f0faf4", borderTop: "1px solid #d8ede0", borderBottom: "1px solid #d8ede0", padding: "16px 5%" }}>
        <div className="ayup-feature-strip" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "0", flexWrap: "wrap" }}>
          {[
            { emoji: "🩺", label: "Complete Consultation Screen" },
            { emoji: "🌿", label: "Asta Sthana Pariksha Built-in" },
            { emoji: "💊", label: "Ayurvedic Medicine Database" },
            { emoji: "🖨️", label: "One-click Print & Submit" },
          ].map((item, i, arr) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRight: i < arr.length - 1 ? "1px solid #c0ddc8" : "none", fontSize: "13px", fontWeight: 600, color: "#2d6e44", whiteSpace: "nowrap" }}>
              <span style={{ fontSize: "15px" }}>{item.emoji}</span>
              {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* What is Vaidya Mode — 2-col */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[26px] md:text-[40px] leading-[34px] md:leading-[52px] text-[#101828] mb-5">
                Built for the independent Vaidya
              </h2>
              <p className="ayup-section-sub font-['Inter'] text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] text-[#4A5565]">
                In most hospitals, doctors depend on front-office staff to register patients, enter vitals, and pull up history before a consultation can begin. Vaidya Mode eliminates that dependency. A doctor can walk into their consultation room, open AyuPlus, and manage the entire patient encounter themselves — from first registration to final prescription.
              </p>
            </div>
            <div className="bg-[#f0faf4] border-l-4 border-[#00A63E] rounded-2xl p-8">
              <p className="font-['Hedvig_Letters_Serif'] font-normal text-[22px] md:text-[28px] text-[#101828] leading-snug italic">
                &ldquo;Designed for Ayurvedic clinical depth — not adapted from generic software.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11 Features Grid */}
      <section className="w-full flex justify-center bg-[#FAFAFA]">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-3">
              Everything in one consultation screen
            </h2>
            <p className="ayup-section-sub font-['Inter'] text-[16px] md:text-[18px] leading-[28px] text-[#4A5565]">
              All 11 clinical components — structured, linked, and printable.
            </p>
          </div>
          <div className="ayup-grid-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="ayup-card bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f0faf4] flex items-center justify-center text-[20px] flex-shrink-0">
                      {f.icon}
                    </div>
                    <h3 className="font-['Inter'] font-semibold text-[15px] leading-snug text-[#003d1a]">{f.title}</h3>
                  </div>
                  <p className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#5a7a65]">{f.desc}</p>
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
              The difference Vaidya Mode makes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#fff5f5] border-l-4 border-red-400 rounded-2xl p-8">
              <p className="font-['Inter'] font-bold text-[14px] text-red-500 mb-6">❌ Without Vaidya Mode</p>
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
            <div className="bg-[#f0faf4] border-l-4 border-[#00A63E] rounded-2xl p-8">
              <p className="font-['Inter'] font-bold text-[14px] text-[#00A63E] mb-6">✅ With Vaidya Mode</p>
              <ul className="space-y-4">
                {AFTER.map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <CheckIcon />
                    <span className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#101828]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="w-full flex justify-center bg-[#FAFAFA]">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="text-center mb-10">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[38px] text-[#101828]">
              Who uses Vaidya Mode?
            </h2>
          </div>
          <div className="ayup-grid-3">
            {WHO.map((w) => (
              <div key={w.title} className="ayup-card bg-white rounded-2xl border border-gray-100 shadow-sm p-7 text-center hover:shadow-md transition-shadow">
                <div className="text-[38px] mb-4">{w.icon}</div>
                <h3 className="font-['Inter'] font-semibold text-[15px] text-[#003d1a] mb-2">{w.title}</h3>
                <p className="font-['Inter'] text-[13px] leading-[20px] text-[#5a7a65]">{w.desc}</p>
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
              { href: "/digital-prescription", label: "Digital Prescription Pad" },
              { href: "/case-sheets", label: "Clinical Case Sheets" },
              { href: "/opd-ipd-management", label: "OPD & IPD Management" },
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
            See Vaidya Mode live in a 20-minute demo
          </h2>
          <p className="font-['Inter'] text-[15px] text-[#bbf7d0] mb-8 max-w-xl mx-auto">
            We&apos;ll walk through the complete consultation workflow — patient search, Asta Sthana Pariksha, prescription, and print.
          </p>
          <button onClick={openModal} className="border-2 border-white text-white bg-transparent font-['Inter'] font-medium text-[16px] px-8 py-4 rounded-[8px] cursor-pointer hover:bg-white hover:text-[#003d1a] transition-all duration-300 hover:scale-105 active:scale-95 mb-6">
            Book Free Demo →
          </button>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
            <a href="mailto:contact@ayuplus.com" className="font-['Inter'] text-[14px] text-[#86efac] hover:text-white transition-colors">contact@ayuplus.com</a>
            <span className="hidden sm:inline text-[#4ade80]">|</span>
            <a href="tel:+919894997482" className="font-['Inter'] text-[14px] text-[#86efac] hover:text-white transition-colors">+91 98949 97482</a>
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
