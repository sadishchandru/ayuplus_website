"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const OPD_FEATURES = [
  "Auto OPNo generation (YEAR-SEQUENCE format)",
  "Vaidya Mode direct consultation workflow",
  "Asta Sthana Pariksha fields",
  "NCD tracking by month and year",
  "Digital medicine prescription",
  "Treatment planning and scheduling",
];

const IPD_FEATURES = [
  "IP admission with bed assignment",
  "Real-time bed occupancy tracking",
  "Daily progress notes",
  "Panchakarma session linking",
  "Discharge summary generation",
  "Complete patient history view",
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

export default function OpdIpdPage() {
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
            <span className="text-[#101828] font-medium">OPD & IPD Management</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[60px] md:py-[80px] text-center max-w-3xl mx-auto">
          <span className="inline-block font-['Inter'] font-semibold text-[12px] leading-[20px] tracking-[1.5px] uppercase text-[#00A63E] border border-[#00A63E]/30 bg-[#00A63E0D] px-[12px] py-[4px] rounded-full mb-[20px]">
            OPD & IPD Management
          </span>
          <h1 className="font-['Inter'] font-bold text-[32px] md:text-[52px] leading-[38px] md:leading-[62px] tracking-[-0.5px] text-[#101828] mb-[20px]">
            Complete OPD &amp; IPD Management for Ayurvedic Hospitals
          </h1>
          <p className="font-['Inter'] text-[17px] md:text-[20px] leading-[28px] md:leading-[34px] text-[#4A5565] mb-[36px] max-w-2xl mx-auto">
            From first registration to discharge — manage every step of the patient journey in one unified system.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 bg-[#00A63E] text-white font-['Inter'] font-semibold text-[16px] rounded-xl hover:bg-[#008236] transition-colors shadow-md hover:shadow-lg"
          >
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* OPD / IPD Two Columns */}
      <section className="w-full flex justify-center bg-[#FAFAFA]">
        <div className="container-1280 w-full py-[50px] md:py-[70px]">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828]">
              OPD and IPD — fully integrated
            </h2>
            <p className="font-['Inter'] text-[16px] text-[#4A5565] mt-3 max-w-xl mx-auto">
              One patient number, one record, across every department — from OPD to discharge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#f0faf4] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-['Inter'] font-bold text-[20px] text-[#101828]">Outpatient (OPD)</h3>
              </div>
              <ul className="space-y-3">
                {OPD_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00A63E] flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-['Inter'] text-[14px] leading-[22px] text-[#374151]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#f0faf4] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-['Inter'] font-bold text-[20px] text-[#101828]">Inpatient (IPD)</h3>
              </div>
              <ul className="space-y-3">
                {IPD_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00A63E] flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-['Inter'] text-[14px] leading-[22px] text-[#374151]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vaidya Mode Spotlight */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[50px] md:py-[70px]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block font-['Inter'] font-semibold text-[12px] leading-[20px] tracking-[1.5px] uppercase text-[#00A63E] border border-[#00A63E]/30 bg-[#00A63E0D] px-[12px] py-[4px] rounded-full mb-4">
                Exclusive Feature
              </span>
              <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-3">
                The only HMS with a dedicated doctor workflow
              </h2>
              <p className="font-['Inter'] text-[16px] text-[#4A5565] max-w-xl mx-auto">
                Vaidya Mode lets Ayurvedic doctors manage the entire OPD consultation independently — no front-office dependency.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {VAIDYA_FEATURES.map((f) => (
                <div key={f} className="flex items-start gap-3 bg-[#f0faf4] rounded-xl p-4">
                  <svg className="w-5 h-5 text-[#00A63E] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-['Inter'] text-[13px] leading-[20px] text-[#374151]">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full flex justify-center bg-[#f0faf4] border-y border-[#BBF7D0] py-[22px]">
        <div className="container-1280 w-full flex flex-wrap justify-center md:justify-around items-center gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-['Inter'] font-bold text-[28px] md:text-[36px] text-[#00A63E] leading-none">{value}</span>
              <span className="font-['Inter'] text-[13px] text-[#4A5565]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex justify-center py-[50px] md:py-[70px]" style={{ background: "linear-gradient(135deg, #003d1a 0%, #005c28 100%)" }}>
        <div className="container-1280 w-full text-center">
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-white mb-4">
            See OPD &amp; IPD management live
          </h2>
          <p className="font-['Inter'] text-[16px] text-[#bbf7d0] mb-8 max-w-xl mx-auto">
            We'll walk you through the complete patient journey — registration, Vaidya Mode, IPD admission, and discharge — in one demo.
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
            <Link href="/ayurvedic-pharmacy-software" className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
              <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">Pharmacy Software</span>
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
