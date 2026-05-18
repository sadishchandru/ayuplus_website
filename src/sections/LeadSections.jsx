"use client";

// ─── SocialProofBar ───────────────────────────────────────────────────────────

const STATS = [
  { value: "500+", label: "Ayurvedic Hospitals" },
  { value: "10L+", label: "Patients Managed" },
  { value: "98%", label: "Client Retention" },
  { value: "4.9★", label: "Average Rating" },
];

export function SocialProofBar() {
  return (
    <section className="w-full bg-[#F0FDF4] border-y border-[#BBF7D0] flex justify-center py-[18px] md:py-[22px]">
      <div className="container-1280 w-full flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-4">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="font-['Inter'] font-bold text-[22px] md:text-[28px] text-[#00A63E] leading-none">
              {value}
            </span>
            <span className="font-['Inter'] text-[13px] md:text-[15px] text-[#4A5565] leading-tight max-w-[90px]">
              {label}
            </span>
          </div>
        ))}
        <div className="hidden md:flex items-center gap-2 text-[#4A5565] text-[14px] font-['Inter']">
          <svg className="w-4 h-4 text-[#00A63E]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Trusted across India
        </div>
      </div>
    </section>
  );
}

// ─── PainPointsSection ────────────────────────────────────────────────────────

const PAIN_POINTS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Drowning in paper records",
    description: "Patient files lost, illegible prescriptions, and hours wasted searching for past visit notes. Digital records end this forever.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Billing errors & revenue loss",
    description: "Manual billing lets charges slip through the cracks. Integrated pharmacy and treatment billing ensures nothing is missed.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Panchakarma scheduling chaos",
    description: "Coordinating therapists, treatment rooms, and Tithi calendars manually is error-prone. Ayuplus automates it all in one view.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "No visibility into performance",
    description: "Flying blind without real-time reports on revenue, occupancy, and stock. Ayuplus dashboards give you instant clarity.",
  },
];

export function PainPointsSection() {
  return (
    <section className="w-full flex justify-center bg-[#FAFAFA] py-[50px] md:py-[80px]">
      <div className="container-1280 w-full">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[24px] md:text-[42px] leading-[32px] md:leading-[54px] tracking-[0.12px] text-[#101828] mb-3">
            Does your hospital face these challenges?
          </h2>
          <p className="font-['Inter'] text-[16px] md:text-[18px] text-[#4A5565] max-w-2xl mx-auto">
            Ayuplus was built by practitioners who understand Ayurvedic operations — not adapted from generic hospital software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PAIN_POINTS.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-gray-100 p-6 flex gap-4 shadow-sm hover:shadow-md hover:border-[#00A63E]/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#00A63E]/10 text-[#00A63E] flex items-center justify-center">
                {icon}
              </div>
              <div>
                <h3 className="font-['Inter'] font-semibold text-[16px] text-[#101828] mb-1">{title}</h3>
                <p className="font-['Inter'] text-[14px] leading-[22px] text-[#4A5565]">{description}</p>
              </div>
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
    quote: "Ayuplus transformed our IPD workflow. We went from handwritten bed registers to real-time occupancy tracking in a week. The staff adapted faster than I expected.",
    name: "Dr. Meera Krishnan",
    role: "Medical Director",
    hospital: "Sanjeevanam Ayurveda Hospital, Thrissur",
    initials: "MK",
  },
  {
    quote: "The Panchakarma module alone was worth it. Tithi-based scheduling, therapist assignment, and post-treatment notes — all in one place. Our practitioners love it.",
    name: "Vaidya Suresh Patil",
    role: "Chief Vaidya",
    hospital: "Dhanvantari Ayurvedic Centre, Pune",
    initials: "SP",
  },
  {
    quote: "Our pharmacy losses dropped significantly after integrating Ayuplus billing. No more manual reconciliation at month-end. The reports are clear and audit-ready.",
    name: "Dr. Anjali Rao",
    role: "Hospital Administrator",
    hospital: "Arya Vaidya Sala, Bengaluru",
    initials: "AR",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full flex justify-center bg-white py-[50px] md:py-[80px]">
      <div className="container-1280 w-full">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[24px] md:text-[42px] leading-[32px] md:leading-[54px] tracking-[0.12px] text-[#101828] mb-3">
            Trusted by hospital leaders across India
          </h2>
          <p className="font-['Inter'] text-[16px] md:text-[18px] text-[#4A5565]">
            Real results from Ayurvedic institutions like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, role, hospital, initials }) => (
            <div
              key={name}
              className="bg-[#FAFAFA] rounded-2xl border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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
  "60-minute live walkthrough tailored to your hospital",
  "See Panchakarma, OPD/IPD & pharmacy in action",
  "Pricing for your hospital size — no hidden charges",
  "Free data migration consultation",
];

export function LeadSection({ onOpenModal }) {
  return (
    <section className="w-full flex justify-center bg-[#F0FDF4] py-[50px] md:py-[80px]">
      <div className="container-1280 w-full">
        <div className="bg-white rounded-3xl border border-[#BBF7D0] shadow-sm px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row items-center gap-10">
          {/* Left: Copy */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-[#00A63E]/10 text-[#00A63E] text-[13px] font-['Inter'] font-medium px-3 py-1 rounded-full mb-4">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free, no-obligation demo
            </div>

            <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[24px] md:text-[40px] leading-[32px] md:leading-[50px] tracking-[0.12px] text-[#101828] mb-4">
              See Ayuplus running in a<br className="hidden md:block" /> real Ayurvedic hospital
            </h2>
            <p className="font-['Inter'] text-[15px] md:text-[17px] text-[#4A5565] mb-6 max-w-md">
              Our team will give you a live demo customised to your hospital's size, speciality, and workflows.
            </p>

            <ul className="space-y-3 mb-8">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00A63E] flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-['Inter'] text-[14px] md:text-[15px] text-[#374151]">{perk}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onOpenModal}
              className="bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] font-['Inter'] font-medium text-[16px] leading-[28px] tracking-[-0.44px] text-white px-[28px] py-[14px] rounded-[8px] cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Request Hospital Demo
            </button>
          </div>

          {/* Right: Trust signals */}
          <div className="flex-shrink-0 w-full md:w-[280px]">
            <div className="bg-[#FAFAFA] rounded-2xl border border-gray-100 p-6 space-y-4">
              <p className="font-['Inter'] font-semibold text-[14px] text-[#101828]">What happens next</p>
              {[
                { step: "1", text: "Submit your request below" },
                { step: "2", text: "We call within 24 hours to schedule" },
                { step: "3", text: "60-min live demo with your team" },
                { step: "4", text: "Custom proposal for your hospital" },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#00A63E] text-white font-['Inter'] font-bold text-[13px] flex items-center justify-center">
                    {step}
                  </div>
                  <span className="font-['Inter'] text-[14px] text-[#4A5565]">{text}</span>
                </div>
              ))}

              <div className="pt-3 border-t border-gray-200 flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-['Inter'] text-[12px] text-[#6B7280]">Your data is never shared</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
