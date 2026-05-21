"use client";

// ─── SocialProofBar ───────────────────────────────────────────────────────────

const STATS = [
  { value: "10,229+", label: "Patient Records" },
  { value: "13", label: "Modules" },
  { value: "36+", label: "Clinical Screens" },
  { value: "7", label: "Panchakarma Forms" },
  { value: "~35%", label: "Less Admin Time" },
];

export function SocialProofBar() {
  return (
    <section className="w-full bg-[#f0faf4] border-y border-[#BBF7D0] flex justify-center py-[18px] md:py-[22px]">
      <div className="container-1280 w-full px-4">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px 8px", justifyItems: "center" }}
             className="spb-grid">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1" style={{ minWidth: 0 }}>
              <span className="font-['Inter'] font-bold text-[#00A63E] leading-none"
                    style={{ fontSize: "clamp(18px, 3.5vw, 28px)" }}>
                {value}
              </span>
              <span className="font-['Inter'] text-[#4A5565] leading-tight text-center"
                    style={{ fontSize: "clamp(11px, 1.3vw, 13px)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <style>{`
          @media (min-width: 640px) {
            .spb-grid { grid-template-columns: repeat(5, 1fr) !important; gap: 8px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

// ─── PainPointsSection ────────────────────────────────────────────────────────

const PAIN_POINTS = [
  {
    title: "Paper-based Panchakarma records",
    description: "Day-wise dosage tracked on paper — lost, illegible, and impossible to audit or reference at follow-up.",
  },
  {
    title: "No unified patient journey",
    description: "OPD, pharmacy, and billing operate in silos. Staff re-enter the same data across three different registers.",
  },
  {
    title: "Prakruti lost in notes",
    description: "Dosha assessments recorded once and never seen again — never accessible at follow-up when it matters most.",
  },
  {
    title: "Unbilled procedures = revenue leakage",
    description: "Treatment sessions happen without invoices being raised. Thousands lost every month to manual billing gaps.",
  },
];

export function PainPointsSection() {
  return (
    <div className="w-full flex justify-center bg-[#FAFAFA]">
      <div className="container-1280 flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12 px-4"
           style={{ padding: "48px 5%" }}>

        {/* Left: text + checklist */}
        <div className="flex-1 w-full" style={{ maxWidth: "580px" }}>
          <h3 className="font-['Inter'] font-bold leading-[1.3] tracking-[0.35px] text-[#101828] mb-[16px] md:mb-[24px]"
              style={{ fontSize: "clamp(20px, 3.5vw, 38px)", wordBreak: "break-word" }}>
            Generic HMS software wasn't built for Ayurveda
          </h3>
          <p className="font-['Inter'] font-normal leading-[1.65] tracking-[-0.45px] text-[#4A5565] mb-[24px]"
             style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}>
            Most hospital software is adapted from generic tools. Ayuplus was built ground-up for Ayurvedic workflows — the problems below are exactly what it was designed to eliminate.
          </p>
          <ul className="space-y-5">
            {PAIN_POINTS.map(({ title, description }) => (
              <li key={title} className="flex items-start group">
                <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[#00A63E] flex items-center justify-center mr-[12px] border border-[#00A63E] mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-['Inter'] font-semibold text-[#101828]"
                        style={{ fontSize: "clamp(14px, 1.6vw, 18px)", lineHeight: "1.5" }}>
                    {title}
                  </span>
                  <p className="font-['Inter'] font-normal text-[#4A5565] mt-1"
                     style={{ fontSize: "clamp(13px, 1.4vw, 16px)", lineHeight: "1.6" }}>
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: stat card */}
        <div className="flex-1 w-full relative">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm space-y-6"
               style={{ padding: "clamp(20px, 4vw, 40px)" }}>
            <p className="font-['Inter'] font-semibold text-[13px] text-[#00A63E] uppercase tracking-widest">The Problem</p>
            <p className="font-['Hedvig_Letters_Serif'] font-normal text-[#101828]"
               style={{ fontSize: "clamp(18px, 2.8vw, 28px)", lineHeight: "1.4" }}>
              Ayurvedic hospitals lose time and revenue every day to software that doesn't understand their workflows.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { value: "~35%", label: "Admin time saved" },
                { value: "7", label: "Panchakarma forms" },
                { value: "13", label: "Integrated modules" },
                { value: "36+", label: "Clinical screens" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-[#f0faf4] rounded-xl p-4">
                  <p className="font-['Inter'] font-bold text-[#00A63E] leading-none mb-1"
                     style={{ fontSize: "clamp(20px, 3vw, 26px)" }}>{value}</p>
                  <p className="font-['Inter'] text-[12px] text-[#4A5565]">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -inset-4 -z-10 bg-primary/5 blur-3xl rounded-full opacity-60 left-auto right-0" />
        </div>

      </div>
    </div>
  );
}

// ─── TestimonialsSection ──────────────────────────────────────────────────────

export function TestimonialsSection() {
  return (
    <section className="w-full flex justify-center bg-[#f7fdf9] py-[60px] md:py-[90px] border-y border-[#d4ead9]">
      <div className="container-1280 w-full px-4">

        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block font-['Inter'] text-[13px] font-semibold text-[#00A63E] uppercase tracking-widest mb-3">
            From a practising Vaidya
          </span>
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[26px] md:text-[40px] leading-[34px] md:leading-[52px] text-[#101828]">
            In their own words
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#c8e6d0] shadow-sm p-8 md:p-12 relative">

            {/* Opening quote mark */}
            <div className="absolute top-6 left-8 md:top-8 md:left-10 font-['Hedvig_Letters_Serif'] text-[80px] md:text-[100px] leading-none text-[#00A63E] opacity-15 select-none pointer-events-none">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#00A63E] text-[18px] leading-none">★</span>
              ))}
            </div>

            {/* Quote — 4 paragraphs */}
            <div className="space-y-4 mb-8 relative z-10">
              <p className="font-['Inter'] text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] text-[#374151]">
                Panchakarma records on paper — day-wise Snehapana, Vamanam, Vasthi — all handwritten. At follow-up, we were often reconstructing from memory. That&apos;s not how a serious practice should run.
              </p>
              <p className="font-['Inter'] text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] text-[#374151]">
                With Varma and Shalyatantra alongside OPD, our workflows are more layered than a general clinic. AyuPlus was the first system that understood that — Prakruti, Asta Sthana Pariksha, Dosha evaluation all live inside the patient record where they belong. Vaidya Mode lets me complete the full consultation without depending on the front desk.
              </p>
              <p className="font-['Inter'] text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] text-[#374151]">
                Billing gaps are gone. Panchakarma sessions now tie directly to invoices. We&apos;ve crossed 14,700+ patient records and the team onboarded us in Tamil with no friction.
              </p>
              <p className="font-['Inter'] font-semibold text-[15px] md:text-[16px] leading-[26px] text-[#003d1a]">
                For any Ayurvedic hospital serious about clinical documentation — this is it.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-[#e8f0ea] pt-6">
              <div className="flex items-center gap-4">
                <img
                  src="/images/hari_logo.png"
                  alt="Hari Ashtanga Ayurveda Chikitsalaya"
                  className="w-[52px] h-[52px] rounded-full border-2 border-[#c8e6d0] object-contain flex-shrink-0"
                />
                <div>
                  <p className="font-['Inter'] font-semibold text-[15px] text-[#101828] leading-tight">
                    Dr. N. Jeeva Anand, BAMS
                  </p>
                  <p className="font-['Inter'] text-[12px] text-[#6B7280] leading-snug mt-0.5">
                    PGDIP, ACU., M.Sc (Varmam &amp; Thokkanam Science) · Reg. No. 379
                  </p>
                  <p className="font-['Inter'] font-semibold text-[12px] text-[#00A63E] leading-tight mt-1">
                    Hari Ashtanga Ayurveda Chikitsalaya, Puducherry
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Stat tag below card */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex items-center gap-2 bg-[#003d1a] text-white rounded-full px-5 py-2.5">
              <span className="font-['Inter'] font-bold text-[14px]">14,700+</span>
              <span className="font-['Inter'] text-[13px] text-[#86efac]">patient records on AyuPlus</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── LeadSection ──────────────────────────────────────────────────────────────

const PERKS = [
  { icon: "🎯", title: "Personalised Demo", desc: "45-min walkthrough tailored to your hospital size and speciality" },
  { icon: "⚡", title: "Fast Onboarding", desc: "Go live in days — we handle migration, setup, and staff training" },
  { icon: "💬", title: "Local Language Support", desc: "Malayalam, Tamil, Hindi, and English throughout the system" },
  { icon: "🔒", title: "Your Data, Your Server", desc: "On-premises or cloud deployment — no vendor lock-in" },
];

export function LeadSection({ onOpenModal }) {
  return (
    <section className="w-full flex justify-center" style={{ background: "linear-gradient(135deg, #003d1a 0%, #005c28 100%)", padding: "48px 5%" }}>
      <div className="container-1280 w-full">

        {/* Top: merged CTA heading */}
        <div className="text-center mb-[40px] md:mb-[56px]">
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal tracking-[0.12px] text-white mb-[16px]"
              style={{ fontSize: "clamp(24px, 5vw, 48px)", lineHeight: "1.25", wordBreak: "break-word" }}>
            Start digitizing your hospital today
          </h2>
          <p className="font-['Inter'] font-normal text-[#bbf7d0] max-w-2xl mx-auto"
             style={{ fontSize: "clamp(14px, 2vw, 20px)", lineHeight: "1.7" }}>
            See the complete Ayuplus platform in action with a personalised demo for your hospital.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">

          {/* Left: perks */}
          <div className="flex-1 w-full">
            <span className="inline-block font-['Inter'] text-[13px] font-semibold text-[#86efac] uppercase tracking-widest mb-4">
              Book a Demo
            </span>
            <h3 className="font-['Hedvig_Letters_Serif'] font-normal tracking-[0.12px] text-white mb-4"
                style={{ fontSize: "clamp(20px, 3.5vw, 36px)", lineHeight: "1.3", wordBreak: "break-word" }}>
              See Ayuplus in action at your hospital
            </h3>
            <p className="font-['Inter'] text-[#bbf7d0] mb-8 max-w-md"
               style={{ fontSize: "clamp(14px, 1.6vw, 16px)", lineHeight: "1.7" }}>
              A live demo, configured for your workflows — not a generic product tour.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PERKS.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[20px]">
                    {icon}
                  </div>
                  <div>
                    <p className="font-['Inter'] font-semibold text-[14px] text-white mb-1">{title}</p>
                    <p className="font-['Inter'] text-[13px] text-[#86efac] leading-[20px]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="flex-shrink-0 w-full md:w-[340px]">
            <div className="bg-white rounded-2xl shadow-xl" style={{ padding: "clamp(20px, 4vw, 32px)" }}>
              <h3 className="font-['Hedvig_Letters_Serif'] font-normal text-[22px] text-[#101828] mb-2">
                Ready to see it live?
              </h3>
              <p className="font-['Inter'] text-[14px] text-[#6B7280] mb-6">
                Our team will reach out within 24 hours to schedule your personalised demo.
              </p>

              <button
                onClick={onOpenModal}
                className="w-full py-[14px] bg-[#00A63E] text-white font-['Inter'] font-semibold text-[16px] rounded-xl hover:bg-[#008236] transition-colors duration-300 shadow-md hover:shadow-lg mb-6"
              >
                Book Free Demo →
              </button>

              <div className="border-t border-gray-100 pt-5 space-y-3">
                <p className="font-['Inter'] text-[12px] text-[#9CA3AF] text-center mb-3">Or reach us directly</p>
                <a
                  href="mailto:contact@ayuplus.com"
                  className="flex items-center gap-2 text-[13px] text-[#374151] hover:text-[#00A63E] transition-colors font-['Inter']"
                >
                  <svg className="w-4 h-4 text-[#00A63E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@ayuplus.com
                </a>
                <a
                  href="tel:+919894997482"
                  className="flex items-center gap-2 text-[13px] text-[#374151] hover:text-[#00A63E] transition-colors font-['Inter']"
                >
                  <svg className="w-4 h-4 text-[#00A63E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                  +91 98949 97482
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
