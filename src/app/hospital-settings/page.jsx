"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const MODULES = [
  {
    icon: "🛏️",
    title: "Bed Setup & Ward Management",
    badge: "/Masters/BedSetup",
    desc: "Configure your hospital's complete bed layout — wards, room types, and individual beds. Real-time occupancy tracking across the entire facility from a single screen.",
    features: [
      "Create wards — General, Private, ICU, Panchakarma ward",
      "Add individual beds per ward with bed names/numbers",
      "Set bed type — Standard, Semi-private, Private, Deluxe",
      "Real-time availability — Available / Occupied / Reserved",
      "Bed assignment during IP admission (auto-updates status)",
      "Bed release on patient discharge",
    ],
  },
  {
    icon: "🕐",
    title: "Staff Shift Assignment",
    badge: "/Masters/ShiftAssign",
    desc: "Define work shifts and assign them to staff members. Ensure every ward, pharmacy, and front desk is covered — with a clear schedule visible to all authorised managers.",
    features: [
      "Create shifts — Morning, Afternoon, Night, custom hours",
      "Assign shifts to individual staff or role groups",
      "Set shift start time, end time, and break duration",
      "Weekly / monthly shift schedule view",
      "Conflict detection — flags double-assigned staff",
      "Shift history per staff member",
    ],
  },
  {
    icon: "🔐",
    title: "Role-Based Access Control",
    badge: "/Masters/Role",
    desc: "Control exactly what each staff member can see and do in AyuPlus. Assign roles with page-level and action-level permissions — no staff member ever sees more than they should.",
    features: [
      "Pre-built roles: Admin, Doctor, Receptionist, Pharmacist, Therapist",
      "Create custom roles for your hospital structure",
      "Page-level permissions — grant or revoke per module",
      "Action-level permissions — View / Add / Edit / Delete per page",
      "Staff login shows only their permitted pages",
      "Queue Number visibility control per role",
    ],
  },
  {
    icon: "💬",
    title: "SMS & WhatsApp Messaging Integration",
    badge: "Configured via /Masters/Settings",
    desc: "Keep patients informed automatically. AyuPlus integrates with MSG91 for SMS and Twilio for WhatsApp — send appointment reminders, admission alerts, and discharge summaries directly from the system.",
    features: [
      "MSG91 API integration for SMS notifications",
      "Twilio integration for WhatsApp messages",
      "Appointment confirmation messages",
      "Admission and discharge alerts",
      "Configure in Settings → System Settings",
      "No third-party app needed — send from within AyuPlus",
    ],
  },
  {
    icon: "⚙️",
    title: "System & Master Settings",
    badge: "/Masters/Settings",
    desc: "The central control panel for your AyuPlus installation. Configure your hospital profile, number series, backup schedule, file storage, and all API integrations from one screen.",
    features: [
      "Hospital profile — name, address, phone, email, logo",
      "Number series prefixes — OP prefix, IP prefix, Invoice prefix",
      "Backup scheduler — frequency and destination path",
      "File upload path for patient documents",
      "MSG91 SMS API key configuration",
      "Twilio WhatsApp credentials",
      "Medicine masters — categories, dosage forms, units",
      "Service charge masters — OPD fees, bed rates, procedure costs",
    ],
  },
];

const ROLES = [
  { icon: "👑", title: "Admin", desc: "Full access to all settings, roles, and master data" },
  { icon: "🏥", title: "Hospital Manager", desc: "Bed setup, shift assignment, staff management" },
  { icon: "👨‍💻", title: "IT / Technical", desc: "API credentials, backup config, file storage paths" },
];

const TIMELINE = [
  { day: "Day 1", task: "Hospital profile + number series" },
  { day: "Day 2", task: "Bed layout + ward setup" },
  { day: "Day 3", task: "Staff roles + shift assignment" },
  { day: "Day 4", task: "Messaging APIs + go live ✅" },
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

export default function HospitalSettingsPage() {
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
            Complete Hospital Configuration<br className="hidden md:block" /> in One Place
          </h1>
          <p className="ayup-section-sub font-normal text-[16px] md:text-[18px] md:leading-[39px] tracking-[0.07px] text-center text-[#4A5565] mb-[28px] max-w-2xl mx-auto">
            Bed layout, staff shifts, user roles, SMS/WhatsApp notifications, and all master data —<br className="hidden md:block" /> configured once from a single settings panel.
          </p>
          <button onClick={openModal} className="border-2 border-[#5A9A04] text-[#5A9A04] bg-transparent font-medium text-[14px] md:text-[18px] leading-[28px] tracking-[-0.44px] px-[20px] py-[10px] md:px-[28px] md:py-[14px] rounded-[8px] cursor-pointer hover:bg-[#5A9A04] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95">
            Book Free Demo →
          </button>
        </div>
      </section>

      {/* 5 Configuration Modules */}
      <section className="w-full flex justify-center bg-white">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="text-center mb-14">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[42px] text-[#101828] mb-3">
              5 configuration modules
            </h2>
            <p className="ayup-section-sub font-['Inter'] text-[16px] md:text-[18px] text-[#4A5565]">
              Everything your hospital needs to run — configured once.
            </p>
          </div>
          <div className="ayup-grid-3">
            {MODULES.map((mod) => (
              <div key={mod.title} className="ayup-card bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f0faf4] flex items-center justify-center text-[20px] flex-shrink-0">{mod.icon}</div>
                    <h3 className="font-['Inter'] font-semibold text-[15px] leading-snug text-[#003d1a]">{mod.title}</h3>
                  </div>
                  <p className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#5a7a65] mb-4">{mod.desc}</p>
                  <ul className="space-y-3">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#374151]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who manages settings */}
      <section className="w-full flex justify-center bg-[#FAFAFA]">
        <div className="container-1280 w-full py-[60px] md:py-[80px] px-4">
          <div className="text-center mb-10">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[38px] text-[#101828]">
              Who manages settings?
            </h2>
          </div>
          <div className="ayup-grid-3">
            {ROLES.map((r) => (
              <div key={r.title} className="ayup-card bg-white rounded-2xl border border-gray-100 shadow-sm p-7 text-center hover:shadow-md transition-shadow">
                <div className="text-[38px] mb-4">{r.icon}</div>
                <h3 className="font-['Inter'] font-semibold text-[15px] text-[#003d1a] mb-2">{r.title}</h3>
                <p className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#5a7a65]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup timeline */}
      <section className="w-full flex justify-center bg-white py-[50px] md:py-[60px]">
        <div className="container-1280 w-full px-4">
          <div className="text-center mb-10">
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[24px] md:text-[34px] text-[#101828]">
              Go live in 4 days
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {TIMELINE.map((step, i) => (
              <div key={step.day} className="flex items-center">
                <div className="flex flex-col items-center text-center px-6 py-4">
                  <div className="w-12 h-12 rounded-full bg-[#00A63E] flex items-center justify-center text-white font-['Inter'] font-bold text-[13px] mb-3 flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="font-['Inter'] font-bold text-[13px] text-[#00A63E] mb-1">{step.day}</p>
                  <p className="font-['Inter'] text-[13px] leading-[18px] text-[#4A5565] max-w-[120px]">{step.task}</p>
                </div>
                {i < TIMELINE.length - 1 && (
                  <svg className="w-6 h-6 text-[#BBF7D0] flex-shrink-0 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
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
              { href: "/vaidya-mode", label: "Vaidya Mode" },
              { href: "/billing", label: "Billing" },
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
            We configure everything with you during onboarding
          </h2>
          <p className="font-['Inter'] text-[15px] leading-[26px] text-[#bbf7d0] mb-8 max-w-2xl mx-auto">
            Our team handles the complete hospital setup during your onboarding session — bed layout, roles, number series, and messaging APIs — so you go live without any technical friction.
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
