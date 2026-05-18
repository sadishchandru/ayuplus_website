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
      <div className="container-1280 w-full flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-6">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <span className="font-['Inter'] font-bold text-[22px] md:text-[28px] text-[#00A63E] leading-none">
              {value}
            </span>
            <span className="font-['Inter'] text-[12px] md:text-[13px] text-[#4A5565] leading-tight text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── PainPointsSection ────────────────────────────────────────────────────────

const PAIN_POINTS = [
  {
    emoji: "📋",
    title: "Paper-based Panchakarma records",
    description: "Day-wise dosage tracked on paper — lost, illegible, and impossible to audit or reference at follow-up.",
  },
  {
    emoji: "🔗",
    title: "No unified patient journey",
    description: "OPD, pharmacy, and billing operate in silos. Staff re-enter the same data across three different registers.",
  },
  {
    emoji: "🌿",
    title: "Prakruti lost in notes",
    description: "Dosha assessments recorded once and never seen again — never accessible at follow-up when it matters most.",
  },
  {
    emoji: "💸",
    title: "Unbilled procedures = revenue leakage",
    description: "Treatment sessions happen without invoices being raised. Thousands lost every month to manual billing gaps.",
  },
];

export function PainPointsSection() {
  return (
    <section className="w-full flex justify-center bg-[#FAFAFA] py-[50px] md:py-[80px]">
      <div className="container-1280 w-full">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block font-['Inter'] text-[13px] font-semibold text-[#00A63E] uppercase tracking-widest mb-3">
            The Problem
          </span>
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[48px] leading-[36px] md:leading-[58px] tracking-[0.12px] text-[#101828]">
            Generic HMS software wasn't built for Ayurveda
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PAIN_POINTS.map(({ emoji, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border-t-2 border-t-[#00A63E] border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-[28px] mb-3">{emoji}</div>
              <h3 className="font-['Inter'] font-semibold text-[16px] text-[#101828] mb-2">{title}</h3>
              <p className="font-['Inter'] text-[14px] leading-[22px] text-[#4A5565]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TestimonialsSection ──────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote: "Finally a system that understands Panchakarma documentation. Day-wise Snehapanam entries, Samyak Lakshana tracking, therapist notes — all in one place. Our Vaidyas stopped complaining about software for the first time.",
    name: "Dr. Radhakrishnan N.",
    role: "Chief Physician",
    hospital: "Thrissur Ayurveda Hospital",
    initials: "RN",
  },
  {
    quote: "The Prakruti assessment module transformed our consultation quality. Doctors now pull up the constitutional profile at every visit — it's become central to how we plan treatments and measure outcomes.",
    name: "Sunita Menon",
    role: "Administrator",
    hospital: "Bengaluru",
    initials: "SM",
  },
  {
    quote: "Billing across departments used to be chaos. AyuPlus unified it — OPD charges, pharmacy, procedures, and advance payments all reconcile automatically. Month-end closing went from two days to two hours.",
    name: "Krishna Prasad",
    role: "Director",
    hospital: "Vaidyasala Network",
    initials: "KP",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full flex justify-center bg-white py-[50px] md:py-[80px]">
      <div className="container-1280 w-full">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block font-['Inter'] text-[13px] font-semibold text-[#00A63E] uppercase tracking-widest mb-3">
            What Clinics Say
          </span>
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[48px] leading-[36px] md:leading-[58px] tracking-[0.12px] text-[#101828]">
            Loved by Vaidyas &amp; Administrators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, role, hospital, initials }) => (
            <div
              key={name}
              className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#00A63E] text-[18px] leading-none">★</span>
                ))}
              </div>

              <p className="font-['Inter'] text-[15px] leading-[26px] text-[#374151] mb-5 flex-1">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#00A63E] text-white flex items-center justify-center font-['Inter'] font-semibold text-[13px] flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="font-['Inter'] font-semibold text-[14px] text-[#101828] leading-tight">{name}</p>
                  <p className="font-['Inter'] text-[12px] text-[#6B7280] leading-tight">{role}</p>
                  <p className="font-['Inter'] text-[12px] text-[#00A63E] leading-tight mt-0.5">{hospital}</p>
                </div>
              </div>
            </div>
          ))}
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
    <section className="w-full flex justify-center py-[50px] md:py-[80px]" style={{ background: "linear-gradient(135deg, #003d1a 0%, #005c28 100%)" }}>
      <div className="container-1280 w-full">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Left: perks */}
          <div className="flex-1">
            <span className="inline-block font-['Inter'] text-[13px] font-semibold text-[#86efac] uppercase tracking-widest mb-4">
              Book a Demo
            </span>
            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[48px] leading-[36px] md:leading-[58px] tracking-[0.12px] text-white mb-4">
              See Ayuplus in action at your hospital
            </h2>
            <p className="font-['Inter'] text-[16px] text-[#bbf7d0] mb-10 max-w-md">
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
            <div className="bg-white rounded-2xl p-8 shadow-xl">
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
