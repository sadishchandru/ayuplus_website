"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const OPD_FEATURES = [
  { title: "Auto OPNo generation", desc: "YEAR-SEQUENCE format — unique patient number across all visits" },
  { title: "Vaidya Mode consultation workflow", desc: "Doctor-led OPD without front-office dependency" },
  { title: "Asta Sthana Pariksha fields", desc: "All 8 classical examination parameters captured digitally" },
  { title: "NCD tracking", desc: "Non-communicable disease tracking by month and year" },
  { title: "Digital medicine prescription", desc: "Linked directly to pharmacy dispensing" },
  { title: "Treatment planning & scheduling", desc: "Plan and track treatments across visits" },
];

const IPD_FEATURES = [
  { title: "IP admission with bed assignment", desc: "Real-time bed occupancy view across all wards" },
  { title: "Real-time bed occupancy tracking", desc: "Available, occupied, and reserved bed status" },
  { title: "Daily progress notes", desc: "Structured daily entries for each admitted patient" },
  { title: "Panchakarma session linking", desc: "Each IPD day links to Panchakarma procedure records" },
  { title: "Discharge summary generation", desc: "Auto-generated summary with full treatment history" },
  { title: "Complete patient history view", desc: "All visits, prescriptions, and notes in one record" },
];

const VAIDYA_FEATURES = [
  "Patient Info & Clinical History",
  "Pain Assessment",
  "NCD Tracking (Month / Year)",
  "Asta Sthana Pariksha",
  "Complaints & Diagnosis",
  "NIH Anatomical Area Notation",
  "Clinical Measurements",
  "Reports & File Management",
  "Disease Follow-up Tracking",
  "Medicine Prescription",
  "Treatment Planning",
];

const STATS = [
  { value: "10,229+", label: "Patient Records" },
  { value: "13", label: "Integrated Modules" },
  { value: "36+", label: "Clinical Screens" },
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

export default function OpdIpdPage() {
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
            Complete OPD &amp; IPD Management<br className="hidden md:block" /> for Ayurvedic Hospitals
          </h1>
          <p className="font-normal text-[16px] md:text-[18px] md:leading-[39px] tracking-[0.07px] text-center text-[#4A5565] mb-[28px] max-w-2xl mx-auto">
            From first registration to discharge —<br className="hidden md:block" /> manage every step of the patient journey in one unified system.
          </p>
          <button
            onClick={openModal}
            className="bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] font-medium text-[14px] md:text-[18px] leading-[28px] tracking-[-0.44px] text-white px-[20px] py-[10px] md:px-[28px] md:py-[14px] rounded-[8px] cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* OPD / IPD Two Columns */}
      <section className="w-full flex justify-center bg-[#FAFAFA]">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828]">
              OPD and IPD — fully integrated
            </h2>
            <p className="font-['Inter'] text-[16px] md:text-[18px] leading-[28px] text-[#4A5565] mt-3 max-w-xl mx-auto">
              One patient number, one record, across every department — from OPD to discharge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* OPD */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#f0faf4] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-['Inter'] font-bold text-[22px] text-[#101828]">Outpatient (OPD)</h3>
              </div>
              <ul className="space-y-5">
                {OPD_FEATURES.map((f) => (
                  <li key={f.title} className="flex items-start gap-3 group">
                    <CheckIcon />
                    <div>
                      <span className="font-['Inter'] font-semibold text-[16px] leading-[26px] tracking-[-0.44px] text-[#101828]">{f.title}</span>
                      <p className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.31px] text-[#4A5565]">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* IPD */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#f0faf4] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-['Inter'] font-bold text-[22px] text-[#101828]">Inpatient (IPD)</h3>
              </div>
              <ul className="space-y-5">
                {IPD_FEATURES.map((f) => (
                  <li key={f.title} className="flex items-start gap-3 group">
                    <CheckIcon />
                    <div>
                      <span className="font-['Inter'] font-semibold text-[16px] leading-[26px] tracking-[-0.44px] text-[#101828]">{f.title}</span>
                      <p className="font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.31px] text-[#4A5565]">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vaidya Mode Spotlight */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-['Inter'] font-semibold text-[12px] leading-[20px] tracking-[1.5px] uppercase text-[#00A63E] border border-[#00A63E]/30 bg-[#00A63E0D] px-[12px] py-[4px] rounded-full mb-4">
                Exclusive Feature
              </span>
              <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-3">
                The only HMS with a dedicated doctor workflow
              </h2>
              <p className="font-['Inter'] text-[16px] md:text-[18px] leading-[28px] text-[#4A5565] max-w-xl mx-auto">
                Vaidya Mode lets Ayurvedic doctors manage the entire OPD consultation independently — no front-office dependency.
              </p>
            </div>
            <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {VAIDYA_FEATURES.map((f) => (
                <div key={f} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                  <div className="p-8 flex flex-col flex-1">
                    <ul className="space-y-5">
                      <li className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="font-['Inter'] font-semibold text-[16px] leading-[26px] tracking-[-0.44px] text-[#101828]">{f}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full flex justify-center bg-[#f0faf4] border-y border-[#BBF7D0] py-[28px]">
        <div className="container-1280 w-full flex flex-wrap justify-center md:justify-around items-center gap-8 px-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-['Inter'] font-bold text-[32px] md:text-[40px] text-[#00A63E] leading-none">{value}</span>
              <span className="font-['Inter'] text-[14px] text-[#4A5565] mt-1">{label}</span>
            </div>
          ))}
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
            <Link href="/ayurvedic-pharmacy-software" className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
              <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">Pharmacy Software</span>
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
            See OPD &amp; IPD management live
          </h2>
          <p className="font-['Inter'] text-[16px] md:text-[18px] leading-[28px] text-[#bbf7d0] mb-8 max-w-xl mx-auto">
            We&apos;ll walk you through the complete patient journey — registration, Vaidya Mode, IPD admission, and discharge — in one demo.
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

      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
