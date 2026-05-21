"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const STEPS = [
  { num: "01", title: "Search Patient", desc: "Search by OPNo or name. Patient history, past prescriptions auto-load instantly." },
  { num: "02", title: "Assess & Record", desc: "Record pain scale, vitals, Asta Sthana Pariksha, and NCD disease history." },
  { num: "03", title: "Prescribe", desc: "Search Ayurvedic medicines, set dosage, Anupana, frequency, and duration." },
  { num: "04", title: "Add Advice", desc: "Enter diet Do's & Don'ts, activity instructions, and general advice." },
  { num: "05", title: "Send & Print", desc: "Digital prescription sent to patient (WhatsApp/SMS). One-click print backup." },
];

const FEATURE_CARDS = [
  { icon: "😣", title: "Pain Scale (0–10)", desc: "Emoji-based pain scale from 0 (None) to 10 (Unbearable). Patient selects their pain level visually — clear, fast, and accurate even for patients with low literacy.", tags: ["Visual", "Patient-friendly", "Fast entry"] },
  { icon: "📐", title: "Clinical Measurements (S/M/D × R/L)", desc: "Structured measurement grid — Small (S), Medium (M), Deep (D) palpation findings recorded for Right (R) and Left (L) sides. Captures regional examination data precisely.", tags: ["Bilateral", "Structured", "Examination"] },
  { icon: "🔢", title: "Quick Number Pad", desc: "Tap-optimised number grid (1–9, 0) for fast numeric entry on touch screens — no keyboard needed for dosage and measurement values on iPad.", tags: ["Touch-first", "iPad", "Fast"] },
  { icon: "❤️", title: "Vitals Panel", desc: "BP (mmHg), PR (pulse rate /min), SpO2 (%), Height (cm), Weight (kg) — all in a single compact row. Auto-calculates BMI when height and weight are entered.", tags: ["BP", "SpO2", "BMI auto-calc"] },
  { icon: "🦠", title: "NCD Disease Tracking", desc: "Record onset month and year for 10 conditions: HTN, DM, CAD, CVA, ASBR, Seizure, Psychological Disorders, APD, Thyroid, Dyslipidemia. Tracks chronic disease history per patient across all visits.", tags: ["Chronic conditions", "MM/YY", "History"] },
  { icon: "🌿", title: "Personal History", desc: "Capture Appetite (Good/Normal/Decreased) and Sleep quality (Good/Normal/Insomnia) as structured toggle buttons — no free-text required.", tags: ["Appetite", "Sleep", "Toggle buttons"] },
  { icon: "🔮", title: "Asta Sthana Pariksha", desc: "All 8 classical Ayurvedic examination parameters as structured tap-to-select buttons: 1.Pulse (V/P/K/VP/VK/PK) 2.Bowel 3.Urine 4.Tongue 5.Sound 6.Touch 7.Eye 8.Built. No typing — just tap the clinical finding.", tags: ["Classical Ayurveda", "8 parameters", "Tap-select"] },
  { icon: "💊", title: "Prescription Pad (Typing + Writing)", desc: "Two input modes: Typing Pad for structured text, Writing Pad for handwritten notes on touchscreen. Format: Rx → 1. Medicine – dose – frequency. Medicine name suggestions appear as you type.", tags: ["Typing mode", "Writing mode", "Medicine API"] },
  { icon: "🌿", title: "Medicine Name Suggestions", desc: "Start typing 2+ letters and get instant medicine suggestions from the Ayurvedic medicine database. Select to auto-fill name, dosage, and frequency — no manual typing of long Sanskrit medicine names.", tags: ["Auto-suggest", "2-letter search", "Database"] },
  { icon: "📷", title: "Image Capture", desc: "Capture patient condition photos directly from the tablet camera or drag-and-drop existing images. Multiple files supported. Tap to zoom preview. Stored against patient OPNo.", tags: ["Camera capture", "Drag-drop", "Multi-file"] },
  { icon: "🥗", title: "Diet & Activities Advice", desc: "Two separate sections: Diet Do's & Don'ts and Activity Do's & Don'ts. Free-text fields for personalised Ayurvedic dietary and lifestyle recommendations per visit.", tags: ["Diet", "Activities", "Personalised"] },
  { icon: "📋", title: "General Advice & Orders", desc: "General Do's & Don'ts free-text area plus structured Orders/Referrals panel: Path Lab tests ordered, MRI/Scan ordered, Hospital referral, Visit After (e.g. 7 days / 2 weeks).", tags: ["Referrals", "Lab orders", "Follow-up"] },
];

const WHO = [
  { icon: "👨‍⚕️", title: "Solo Practitioners", desc: "Run your entire consultation on an iPad. No receptionist, no paper, no wasted time — just you and your patient." },
  { icon: "🏥", title: "Multi-doctor Clinics", desc: "Each Vaidya has their own login. Consultation data is saved per doctor, per patient, per date. No overlap, no confusion." },
  { icon: "🌿", title: "Panchakarma Hospitals", desc: "Link prescriptions directly to Panchakarma treatment plans. One consultation, complete clinical record." },
];

const TABLE_ROWS = [
  { feature: "Asta Sthana Pariksha", paper: "Written freehand / skipped", digital: "Structured tap-select" },
  { feature: "Medicine suggestions", paper: "Memory only", digital: "Auto-suggest database" },
  { feature: "Patient delivery", paper: "Physical copy only", digital: "WhatsApp / SMS instant" },
  { feature: "Pain documentation", paper: "Verbal, unstructured", digital: "Visual 0–10 scale" },
  { feature: "NCD disease history", paper: "Separate paper file", digital: "Linked, searchable" },
  { feature: "Diet & activity advice", paper: "Verbal / printed pamphlet", digital: "Personalised per visit" },
  { feature: "Image capture", paper: "Not possible", digital: "Built-in tablet camera" },
  { feature: "Referral orders", paper: "Separate slip", digital: "Integrated in same form" },
];

const DELIVERY_LEFT = [
  "WhatsApp delivery via Twilio integration",
  "SMS delivery via MSG91 integration",
  "Clean formatted prescription format",
  "Includes medicines, dosage, diet & follow-up date",
  "Delivered the moment doctor taps Submit",
];

const DELIVERY_RIGHT = [
  "A5 / A4 print format",
  "Hospital letterhead auto-applied",
  "Doctor name and registration number",
  "Date, OPNo, patient name",
  "Medicine list with dosage and Anupana",
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

export default function DigitalPrescriptionPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openModal = () => setDemoOpen(true);

  return (
    <main className="min-h-screen bg-white">

      {/* 1. Hero */}
      <section className="pt-[80px] md:pt-[140px] pb-[60px] md:pb-[80px] bg-[radial-gradient(ellipse_at_top,_#00A63E0D_0%,_white_60%)] flex flex-col items-center">
        <div className="container-1280 text-center w-full px-4">
          <div className="flex justify-center mb-2">
            <img src="/images/leaf.svg" alt="Leaf" style={{ width: 55, height: "auto" }} />
          </div>
          <h1 className="font-['Hedvig_Letters_Serif'] font-normal leading-[1.2] tracking-[0.12px] text-[#101828] mb-[20px]" style={{ fontSize: "clamp(24px, 5vw, 52px)", wordBreak: "break-word" }}>
            The Digital Prescription Pad<br className="hidden md:block" /> Built for Vaidyas
          </h1>
          <p className="ayup-section-sub font-normal text-[16px] md:text-[18px] md:leading-[39px] tracking-[0.07px] text-center text-[#4A5565] mb-[28px] max-w-2xl mx-auto">
            One screen. Complete consultation. From pain assessment and Asta Sthana Pariksha to medicine prescription and diet advice — then send the prescription digitally to the patient. No paper, ever.
          </p>
          <button onClick={openModal} className="border-2 border-[#5A9A04] text-[#5A9A04] bg-transparent font-medium text-[14px] md:text-[18px] leading-[28px] tracking-[-0.44px] px-[20px] py-[10px] md:px-[28px] md:py-[14px] rounded-[8px] cursor-pointer hover:bg-[#5A9A04] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="ayup-strip-section" style={{ background: "#f0faf4", borderTop: "1px solid #d8ede0", borderBottom: "1px solid #d8ede0", padding: "16px 5%" }}>
        <div className="ayup-feature-strip" style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", gap: "0", flexWrap: "wrap" }}>
          {[
            { emoji: "📱", label: "iPad & Tablet Optimised" },
            { emoji: "🖥️", label: "Works on Desktop" },
            { emoji: "👨‍⚕️", label: "Solo Doctor Workflow" },
            { emoji: "📤", label: "Digital Prescription to Patient" },
          ].map((item, i, arr) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRight: i < arr.length - 1 ? "1px solid #c0ddc8" : "none", minWidth: 0, overflow: "hidden" }}>
              <span className="strip-emoji" style={{ fontSize: "15px", flexShrink: 0, lineHeight: 1, display: "inline-block", minWidth: "22px" }}>{item.emoji}</span>
              <span className="strip-label" style={{ fontSize: "13px", fontWeight: 600, color: "#2d6e44", lineHeight: 1.35, whiteSpace: "normal", wordBreak: "break-word" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How it works — 5 steps */}
      <section className="w-full bg-white py-[60px] md:py-[80px] px-4">
        <div className="container-1280 mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-4">
              From patient arrival to digital prescription in minutes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative flex flex-col">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#00A63E] flex items-center justify-center mb-4 flex-shrink-0">
                    <span className="font-['Inter'] font-bold text-[14px] text-white">{step.num}</span>
                  </div>
                  <h3 className="font-['Inter'] font-semibold text-[14px] text-[#101828] mb-2">{step.title}</h3>
                  <p className="font-['Inter'] text-[13px] leading-[20px] text-[#4A5565]">{step.desc}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-[38px] -right-[16px] z-10 items-center justify-center w-8">
                    <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                      <path d="M0 8H20M20 8L13 1M20 8L13 15" stroke="#00A63E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Feature cards */}
      <section className="w-full bg-[#FAFAFA] py-[60px] md:py-[80px] px-4">
        <div className="container-1280 mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-4">
              Every clinical detail. One screen.
            </h2>
            <p className="ayup-section-sub font-['Inter'] text-[16px] md:text-[18px] leading-[28px] text-[#4A5565] max-w-2xl mx-auto">
              Built from real Vaidya workflows — nothing missing, nothing unnecessary.
            </p>
          </div>
          <div className="ayup-grid-4">
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

      {/* 5. Digital delivery — 2 columns */}
      <section className="w-full bg-white py-[60px] md:py-[80px] px-4">
        <div className="container-1280 mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-4">
              Prescription delivered the moment you tap Submit
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-10" style={{ background: "#003d1a" }}>
              <h3 className="font-['Hedvig_Letters_Serif'] font-normal text-[22px] md:text-[28px] text-white mb-4">
                Prescription delivered instantly to the patient
              </h3>
              <p className="font-['Inter'] text-[14px] leading-[22px] text-white/80 mb-6">
                The moment the doctor taps Submit, the prescription is formatted and sent directly to the patient — no printing, no scanning, no delay. Patients receive a clean, readable prescription on their phone.
              </p>
              <ul className="flex flex-col gap-3">
                {DELIVERY_LEFT.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="font-['Inter'] text-[13px] leading-[20px] text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-10 bg-white border border-gray-100 shadow-sm">
              <h3 className="font-['Hedvig_Letters_Serif'] font-normal text-[22px] md:text-[28px] text-[#101828] mb-4">
                Plus — always a print backup
              </h3>
              <p className="font-['Inter'] text-[14px] leading-[22px] text-[#4A5565] mb-6">
                One-click print generates a fully formatted A5 or A4 prescription with the hospital letterhead applied automatically. Perfect for patient files, referrals, or whenever a physical copy is needed.
              </p>
              <ul className="flex flex-col gap-3">
                {DELIVERY_RIGHT.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#00A63E] mt-2 flex-shrink-0" />
                    <span className="font-['Inter'] text-[13px] leading-[20px] text-[#4A5565]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Who uses it — 3 cards */}
      <section className="w-full bg-[#FAFAFA] py-[60px] md:py-[80px] px-4">
        <div className="container-1280 mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-4">
              Who uses the Digital Prescription Pad?
            </h2>
          </div>
          <div className="ayup-grid-3">
            {WHO.map((item) => (
              <div key={item.title} className="ayup-card bg-white rounded-2xl border border-gray-100 p-7 text-center hover:shadow-md transition-shadow">
                <div className="text-[40px] mb-4">{item.icon}</div>
                <h3 className="font-['Inter'] font-semibold text-[15px] text-[#003d1a] mb-3">{item.title}</h3>
                <p className="font-['Inter'] text-[13px] leading-[20px] text-[#5a7a65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Comparison table */}
      <section className="w-full bg-white py-[60px] md:py-[80px] px-4">
        <div className="container-1280 mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-4">
              Paper prescription vs AyuPlus Prescription Pad
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="bg-[#f0faf4]">
                  <th className="font-['Inter'] font-semibold text-[14px] text-[#101828] text-left px-6 py-4 w-[35%]">Feature</th>
                  <th className="font-['Inter'] font-semibold text-[14px] text-red-500 text-left px-6 py-4 w-[32%]">Paper Prescription</th>
                  <th className="font-['Inter'] font-semibold text-[14px] text-[#00A63E] text-left px-6 py-4 w-[33%]">AyuPlus Digital</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                    <td className="font-['Inter'] font-medium text-[13px] text-[#101828] px-6 py-4">{row.feature}</td>
                    <td className="font-['Inter'] text-[13px] text-[#4A5565] px-6 py-4">{row.paper}</td>
                    <td className="font-['Inter'] font-semibold text-[13px] text-[#00A63E] px-6 py-4">{row.digital}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. Explore links */}
      <section className="w-full bg-white py-[40px] md:py-[60px] px-4">
        <div className="container-1280 mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[24px] md:text-[32px] text-[#101828]">
              Explore more of AyuPlus
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/vaidya-mode", label: "Vaidya Mode", sub: "Full consultation without front office" },
              { href: "/case-sheets", label: "Clinical Case Sheets", sub: "Condition-specific structured forms" },
              { href: "/hospital-settings", label: "Hospital Settings", sub: "Configure your clinic and workflows" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-[#f0faf4] rounded-xl p-5 hover:bg-[#dcfce7] transition-colors flex items-center justify-between group">
                <div>
                  <p className="font-['Inter'] font-semibold text-[15px] text-[#101828] mb-1">{link.label}</p>
                  <p className="font-['Inter'] text-[13px] text-[#4A5565]">{link.sub}</p>
                </div>
                <span className="text-[#00A63E] text-[20px] group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section style={{ background: "#003d1a" }} className="w-full flex justify-center py-[60px] md:py-[80px] px-4">
        <div className="container-1280 w-full text-center">
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-white mb-5">
            See the Digital Prescription Pad live on an iPad
          </h2>
          <p className="font-['Inter'] text-[15px] leading-[26px] text-white/80 mb-8 max-w-2xl mx-auto">
            Book a 20-minute demo — we will walk you through a real consultation from patient search to prescription delivery. No slides, just the live product.
          </p>
          <button onClick={openModal} className="border-2 border-white text-white bg-transparent font-['Inter'] font-medium text-[16px] px-8 py-4 rounded-[8px] cursor-pointer hover:bg-white hover:text-[#003d1a] transition-all duration-300 hover:scale-105 active:scale-95">
            Book Free Demo →
          </button>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <a href="mailto:contact@ayuplus.com" className="font-['Inter'] text-[14px] text-white/80 hover:text-white transition-colors">contact@ayuplus.com</a>
            <span className="hidden sm:inline font-['Inter'] text-white/40">|</span>
            <a href="tel:+919894997482" className="font-['Inter'] text-[14px] text-white/80 hover:text-white transition-colors">+91 98949 97482</a>
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
