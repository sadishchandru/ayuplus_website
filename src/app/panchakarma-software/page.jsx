"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const PROCEDURES = [
  { name: "SnehaPanam", desc: "Day-wise internal oleation with ghee or oil — dosage in ml/tsp, medicine name, timing, and bowel movement tracked each day." },
  { name: "Samyak", desc: "Samyak Lakshana clinical observation recorded per day to confirm optimal oleation status before the main procedure." },
  { name: "Bahya Sneha", desc: "External oleation procedure documentation including therapist assignment, oil used, duration, and session notes." },
  { name: "Vamanam", desc: "Emesis therapy with pre-procedure and post-procedure clinical observation fields, vomiting episodes, and outcome notes." },
  { name: "Virechanam", desc: "Purgation therapy with clinical outcome tracking — number of motions, consistency, and patient condition post-procedure." },
  { name: "Vasthi", desc: "Enema therapy covering both Anuvasana (oil) and Asthapana (decoction) — ingredients, volumes, and retention time." },
  { name: "Uttara Vasthi", desc: "Urethral or vaginal route therapy documentation with procedure details, patient response, and follow-up observations." },
];

const FEATURES = [
  "Day-wise dosage recording",
  "Samyak Lakshana assessment",
  "Therapist assignment per session",
  "Before / After Rx comparison",
  "Printable PKT procedure reports",
  "Linked to patient OPNo across all modules",
];

export default function PanchakarmaPage() {
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
            <span className="text-[#101828] font-medium">Panchakarma Software</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[60px] md:py-[80px] text-center max-w-3xl mx-auto">
          <span className="inline-block font-['Inter'] font-semibold text-[12px] leading-[20px] tracking-[1.5px] uppercase text-[#00A63E] border border-[#00A63E]/30 bg-[#00A63E0D] px-[12px] py-[4px] rounded-full mb-[20px]">
            Panchakarma Management
          </span>
          <h1 className="font-['Inter'] font-bold text-[32px] md:text-[52px] leading-[38px] md:leading-[62px] tracking-[-0.5px] text-[#101828] mb-[20px]">
            Digital Panchakarma Management — Built for Vaidyas
          </h1>
          <p className="font-['Inter'] text-[17px] md:text-[20px] leading-[28px] md:leading-[34px] text-[#4A5565] mb-[36px] max-w-2xl mx-auto">
            7 dedicated procedure forms. Day-wise dosage tracking. Printable PKT records. Replace paper logs forever.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 bg-[#00A63E] text-white font-['Inter'] font-semibold text-[16px] rounded-xl hover:bg-[#008236] transition-colors shadow-md hover:shadow-lg"
          >
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* 7 Procedures Grid */}
      <section className="w-full flex justify-center bg-[#FAFAFA]">
        <div className="container-1280 w-full py-[50px] md:py-[70px]">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block font-['Inter'] text-[13px] font-semibold text-[#00A63E] uppercase tracking-widest mb-3">
              All 7 Procedures Covered
            </span>
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] leading-[36px] md:leading-[52px] text-[#101828]">
              One dedicated form for every Panchakarma procedure
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {PROCEDURES.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f0faf4] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-['Inter'] font-semibold text-[16px] text-[#101828]">{p.name}</p>
                <p className="font-['Inter'] text-[13px] leading-[20px] text-[#6B7280]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[50px] md:py-[70px]">
          <div className="text-center mb-10">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-3">
              Built for real clinical workflows
            </h2>
            <p className="font-['Inter'] text-[16px] text-[#4A5565] max-w-xl mx-auto">
              Every field in AyuPlus Panchakarma forms was designed with practising Vaidyas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-[#f0faf4] rounded-xl p-5">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00A63E] flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="w-full flex justify-center bg-[#FAFAFA]">
        <div className="container-1280 w-full py-[50px] md:py-[70px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-2xl border border-red-100 p-8">
              <p className="font-['Inter'] font-semibold text-[13px] text-red-500 uppercase tracking-widest mb-4">The Problem</p>
              <h3 className="font-['Hedvig_Letters_Serif'] font-normal text-[22px] md:text-[28px] leading-[32px] md:leading-[38px] text-[#101828] mb-4">
                Paper PKT records are lost, illegible, and impossible to audit.
              </h3>
              <p className="font-['Inter'] text-[15px] leading-[24px] text-[#6B7280]">
                Vaidyas spend hours reconstructing patient history before every follow-up. Day-wise SnehaPanam dosage, Samyak Lakshana observations, therapist notes — all scattered across registers.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[#BBF7D0] p-8">
              <p className="font-['Inter'] font-semibold text-[13px] text-[#00A63E] uppercase tracking-widest mb-4">The AyuPlus Solution</p>
              <h3 className="font-['Hedvig_Letters_Serif'] font-normal text-[22px] md:text-[28px] leading-[32px] md:leading-[38px] text-[#101828] mb-4">
                Every session stored digitally — searchable and printable.
              </h3>
              <p className="font-['Inter'] text-[15px] leading-[24px] text-[#6B7280]">
                AyuPlus stores every Panchakarma session digitally — searchable, printable, and linked to the patient's complete medical record. Pull up any patient's PKT history in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex justify-center py-[50px] md:py-[70px]" style={{ background: "linear-gradient(135deg, #003d1a 0%, #005c28 100%)" }}>
        <div className="container-1280 w-full text-center">
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-white mb-4">
            See Panchakarma tracking live
          </h2>
          <p className="font-['Inter'] text-[16px] text-[#bbf7d0] mb-8 max-w-xl mx-auto">
            We'll walk you through every form — SnehaPanam to Uttara Vasthi — configured for your hospital's workflow.
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
            <Link href="/ayurvedic-pharmacy-software" className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
              <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">Pharmacy Software</span>
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
