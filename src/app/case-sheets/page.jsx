"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const CASE_SHEETS = [
  {
    icon: "🦴",
    name: "Cervical Spine Examination",
    desc: "Structured clinical examination for cervical spine conditions. Records ROM in degrees, special orthopaedic tests, and neurological grading.",
    fields: [
      { title: "Range of Motion", desc: "Flexion, Extension, Lateral Flexion (L/R), Rotation (L/R)" },
      { title: "Special Tests", desc: "Spurling, Compression, Distraction, Valsalva" },
      { title: "Neurological grading", desc: "Power, Sensation, Deep Tendon Reflexes per nerve root" },
      { title: "Before / After Rx comparison", desc: null },
      { title: "Clinical notes & treatment plan", desc: null },
    ],
  },
  {
    icon: "🌿",
    name: "Panchakarma Procedures",
    desc: "7 dedicated procedure forms covering the complete Panchakarma protocol — from internal oleation to Uttara Vasthi.",
    fields: [
      { title: "SnehaPanam", desc: "Day-wise ghee/oil dosage, Samyak Lakshana assessment" },
      { title: "Vamanam", desc: "Emesis therapy with pre/post clinical observations" },
      { title: "Virechanam", desc: "Purgation therapy with clinical outcome tracking" },
      { title: "Vasthi", desc: "Anuvasana & Asthapana enema documentation" },
      { title: "Bahya Sneha / Samyak / Uttara Vasthi", desc: "External oleation, daily assessment, and urethral route records" },
    ],
  },
  {
    icon: "🦵",
    name: "Knee Joint Examination",
    desc: "Comprehensive bilateral knee assessment covering ROM, ligament stability, and meniscal tests with imaging upload.",
    fields: [
      { title: "ROM", desc: "Flexion/Extension in degrees for both knees" },
      { title: "Ligament stability", desc: "Anterior Drawer, Posterior Drawer, Lachman" },
      { title: "Valgus/Varus stress tests", desc: null },
      { title: "McMurray test", desc: "Medial/Lateral Meniscus" },
      { title: "Swelling, crepitus, effusion & imaging upload", desc: "X-ray / MRI" },
    ],
  },
  {
    icon: "🔙",
    name: "Low Back Pain Examination",
    desc: "Detailed low back pain evaluation with postural analysis, SLR test, muscle power grading, and VAS pain documentation.",
    fields: [
      { title: "Postural analysis", desc: "Antalgic posture, Scoliosis, Kyphosis" },
      { title: "SLR test", desc: "Angle and side recorded" },
      { title: "FABER / FADIR test results", desc: null },
      { title: "Muscle Power grading", desc: "0–5 scale" },
      { title: "VAS Pain Score & sensory/reflex findings", desc: "0–10 scale" },
    ],
  },
  {
    icon: "💪",
    name: "Shoulder Joint Examination",
    desc: "Multi-section shoulder assessment covering inspection, palpation, ROM, and Rotator Cuff / AC joint special tests.",
    fields: [
      { title: "Inspection", desc: "Asymmetry, Wasting, Swelling" },
      { title: "Palpation", desc: "AC joint, bicipital groove, subacromial space tenderness" },
      { title: "ROM", desc: "Abduction, Forward Flexion, Internal/External Rotation" },
      { title: "Special tests", desc: "Empty Can, Hawkins-Kennedy, Neer, Apprehension" },
      { title: "AC joint & Rotator Cuff", desc: "Cross Body, O'Brien, strength grading" },
    ],
  },
  {
    icon: "🌸",
    name: "Gynaecology Case Sheet",
    desc: "Structured gynaecological history and examination form for Ayurvedic female patient assessment and treatment planning.",
    fields: [
      { title: "Menstrual history", desc: "Cycle, duration, flow, dysmenorrhoea" },
      { title: "Obstetric history", desc: "G/P/L/A details" },
      { title: "Ayurvedic Prakriti correlation", desc: null },
      { title: "Examination findings", desc: "Local, per abdomen" },
      { title: "Treatment plan & medicine prescription", desc: null },
    ],
  },
  {
    icon: "🧠",
    name: "Central Nervous System (CNS)",
    desc: "Neurological examination form for CNS conditions — motor, sensory, cranial nerve, and cognitive function assessment.",
    fields: [
      { title: "Higher mental functions", desc: "Orientation, memory, speech" },
      { title: "Cranial nerve examination", desc: "I–XII" },
      { title: "Motor system", desc: "Tone, power (0–5), coordination" },
      { title: "Sensory system", desc: "Pain, touch, vibration, proprioception" },
      { title: "Cerebellar signs", desc: "Romberg, Finger-nose, Gait" },
    ],
  },
  {
    icon: "🔮",
    name: "Prakruti Assessment",
    desc: "Ayurvedic body constitution questionnaire that auto-calculates Vata, Pitta & Kapha dosha dominance scores.",
    fields: [
      { title: "Physical attributes", desc: "Body frame, skin, hair, eyes, appetite" },
      { title: "Physiological attributes", desc: "Sleep, digestion, bowel, energy" },
      { title: "Psychological attributes", desc: "Memory, temperament, stress response" },
      { title: "Auto-calculated dosha scores", desc: "Vata / Pitta / Kapha percentages" },
      { title: "Prakriti result label & printable report", desc: "e.g. Vata-Pitta dominant" },
    ],
  },
  {
    icon: "❤️",
    name: "Cardiovascular Case Sheet",
    desc: "Cardiovascular system examination for Ayurvedic cardiac and circulatory condition assessment and management.",
    fields: [
      { title: "Pulse examination", desc: "Rate, rhythm, volume, character (Nadi Pariksha)" },
      { title: "Blood pressure", desc: "Both arms, lying/standing" },
      { title: "Precordial examination", desc: "Inspection, palpation, percussion" },
      { title: "Heart sounds", desc: "S1, S2, murmurs, additional sounds" },
      { title: "Ayurvedic correlation", desc: "Vata/Pitta involvement in Hridaya Roga" },
    ],
  },
];

const WHY_ITEMS = [
  {
    icon: "📂",
    title: "All in one place",
    desc: "Every case sheet linked to the patient OPNo — accessible from any module instantly.",
  },
  {
    icon: "🖨️",
    title: "Print-ready reports",
    desc: "Every case sheet generates a clean, formatted printable report for patient files or referrals.",
  },
  {
    icon: "✏️",
    title: "Edit anytime",
    desc: "Update findings after re-examination. Full edit history maintained per visit.",
  },
  {
    icon: "🔒",
    title: "Never lost again",
    desc: "Paper records get damaged, lost, or misfiled. Digital records are permanent and searchable.",
  },
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

export default function CaseSheetsPage() {
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
            9 Structured Clinical Case Sheets
          </h1>
          <p className="ayup-section-sub font-normal text-[16px] md:text-[18px] md:leading-[39px] tracking-[0.07px] text-center text-[#4A5565] mb-[28px] max-w-2xl mx-auto">
            Purpose-built digital forms for every Ayurvedic clinical workflow —<br className="hidden md:block" /> from orthopaedic examinations to Panchakarma procedures. No more paper. No more lost records.
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
            { emoji: "📋", label: "9 Clinical Case Sheets" },
            { emoji: "🔗", label: "Linked to Patient OPNo" },
            { emoji: "✏️", label: "Editable Anytime" },
            { emoji: "🖨️", label: "Printable Reports" },
          ].map((item, i, arr) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRight: i < arr.length - 1 ? "1px solid #c0ddc8" : "none", fontSize: "13px", fontWeight: 600, color: "#2d6e44", whiteSpace: "nowrap" }}>
              <span style={{ fontSize: "15px" }}>{item.emoji}</span>
              {item.label}
            </div>
          ))}
        </div>
      </section>

      {/* Case Sheet Cards Grid */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-3">
              Every case sheet your hospital needs
            </h2>
            <p className="ayup-section-sub font-['Inter'] text-[16px] md:text-[18px] leading-[28px] text-[#4A5565] max-w-xl mx-auto">
              Each form is linked to the patient&apos;s OPNo — searchable, editable, and printable at any time.
            </p>
          </div>

          <div className="ayup-grid-3">
            {CASE_SHEETS.map((sheet) => (
              <div key={sheet.name} className="ayup-card bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f0faf4] flex items-center justify-center text-[20px] flex-shrink-0">
                      {sheet.icon}
                    </div>
                    <h3 className="font-['Inter'] font-semibold text-[15px] leading-snug text-[#003d1a]">
                      {sheet.name}
                    </h3>
                  </div>
                  <p className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#5a7a65] mb-4">{sheet.desc}</p>
                  <ul className="space-y-3">
                    {sheet.fields.map((f) => (
                      <li key={f.title} className="flex items-start gap-3 group">
                        <CheckIcon />
                        <div>
                          <span className="font-['Inter'] font-medium text-[13px] leading-[20px] text-[#101828]">
                            {f.title}
                          </span>
                          {f.desc && (
                            <p className="font-['Inter'] font-normal text-[12px] leading-[18px] text-[#4A5565]">
                              {f.desc}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital Case Sheets */}
      <section className="w-full flex justify-center bg-[#FAFAFA]">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="text-center mb-12">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[38px] text-[#101828] mb-3">
              Why digital case sheets?
            </h2>
            <p className="ayup-section-sub font-['Inter'] text-[16px] md:text-[18px] leading-[28px] text-[#4A5565] max-w-lg mx-auto">
              Paper forms slow down clinicians and lose data. AyuPlus keeps every finding structured and instantly retrievable.
            </p>
          </div>
          <div className="ayup-grid-4">
            {WHY_ITEMS.map((item) => (
              <div key={item.title} className="ayup-card bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-[38px] mb-4">{item.icon}</div>
                <h3 className="font-['Inter'] font-semibold text-[15px] text-[#003d1a] mb-2">{item.title}</h3>
                <p className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#5a7a65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="w-full flex justify-center bg-white py-[40px] md:py-[56px]">
        <div className="container-1280 w-full px-4">
          <p className="font-['Inter'] font-semibold text-[13px] text-[#6B7280] uppercase tracking-widest mb-6 text-center">
            Explore other AyuPlus modules
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/ayurvedic-pharmacy-software" className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
              <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">Pharmacy Software</span>
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
            <Link href="/" className="flex items-center justify-between bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors group">
              <span className="font-['Inter'] font-medium text-[15px] text-[#101828]">All Modules</span>
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
            See all 9 case sheets in a live demo
          </h2>
          <p className="font-['Inter'] text-[15px] text-[#bbf7d0] mb-8 max-w-xl mx-auto leading-[26px]">
            Our team will walk you through every form configured for your hospital&apos;s clinical workflows.
          </p>
          <button onClick={openModal} className="border-2 border-white text-white bg-transparent font-['Inter'] font-medium text-[16px] px-8 py-4 rounded-[8px] cursor-pointer hover:bg-white hover:text-[#003d1a] transition-all duration-300 hover:scale-105 active:scale-95 mb-7">
            Book Free Demo →
          </button>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:contact@ayuplus.com" className="font-['Inter'] text-[14px] text-[#86efac] hover:text-white transition-colors">
              contact@ayuplus.com
            </a>
            <span className="hidden sm:inline text-[#4ade80]">|</span>
            <a href="tel:+919894997482" className="font-['Inter'] text-[14px] text-[#86efac] hover:text-white transition-colors">
              +91 98949 97482
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
