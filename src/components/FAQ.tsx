"use client";

import { useState } from "react";
import Image from "next/image";

const FAQS = [
  {
    q: "What is AyuPlus?",
    a: "AyuPlus is a purpose-built Ayurvedic Hospital Management System (HMS) that covers the complete patient journey — from OPD registration and Panchakarma tracking to pharmacy, billing, and Prakruti assessment. Built by Gleaming Software.",
  },
  {
    q: "Does AyuPlus support Panchakarma management?",
    a: "Yes. AyuPlus has 7 dedicated Panchakarma procedure forms: SnehaPanam (day-wise), Samyak, Bahya Sneha, Vamanam, Virechanam, Vasthi, and Uttara Vasthi — all with printable records.",
  },
  {
    q: "Is AyuPlus cloud-based or on-premises?",
    a: "AyuPlus can be deployed on-premises on your own server or on the cloud. You retain full ownership of your data with no vendor lock-in.",
  },
  {
    q: "What is the pricing for AyuPlus?",
    a: "AyuPlus pricing is customised based on hospital size and the modules required. Contact Gleaming Software at +91 98949 97482 or contact@ayuplus.com for a tailored quote.",
  },
  {
    q: "Which languages does AyuPlus support?",
    a: "AyuPlus and its support team operate in Malayalam, Tamil, Hindi, and English.",
  },
  {
    q: "How long does it take to go live with AyuPlus?",
    a: "Most hospitals go live within days, not months. Gleaming Software handles data migration, system setup, and staff training as part of onboarding.",
  },
  {
    q: "Is AyuPlus billing GST-ready?",
    a: "Yes. AyuPlus generates GST-compliant invoices for consultations, pharmacy, and Panchakarma procedures, with automatic tax calculation and printable bills.",
  },
  {
    q: "What is Vaidya Mode in AyuPlus?",
    a: "Vaidya Mode is a dedicated interface for Ayurvedic doctors (Vaidyas) to record classical examination findings, Prakruti assessments, Dosha scores, and treatment plans — all within the patient's clinical record.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-[40px] md:py-[64px] bg-white border-t border-[#DBDBDB] flex justify-center">
      <div className="container-1280 w-full">
        <div className="flex justify-center mb-1">
          <Image src="/images/leaf.svg" alt="Leaf" width={55} height={25} className="h-auto" />
        </div>

        <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[24px] md:text-[32px] leading-[36px] md:leading-[62px] tracking-[0.12px] text-center text-[#101828] mb-[32px] md:mb-[48px]">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto divide-y divide-[#DBDBDB]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Inter'] font-medium text-[15px] md:text-[17px] leading-[26px] text-[#101828] group-hover:text-[#00A63E] transition-colors">
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#DBDBDB] flex items-center justify-center transition-transform duration-200 ${isOpen ? "rotate-45 bg-[#00A63E] border-[#00A63E]" : "bg-white"}`}>
                    <svg className={`w-3 h-3 ${isOpen ? "text-white" : "text-[#667085]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 pb-4" : "max-h-0"}`}
                >
                  <p className="font-['Inter'] font-normal text-[14px] md:text-[15px] leading-[24px] text-[#4A5565]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
