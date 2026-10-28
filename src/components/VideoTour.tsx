"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

interface VideoTourProps {
  onOpenModal?: () => void;
}

export default function VideoTour({ onOpenModal }: VideoTourProps) {
  return (
    <section
      id="video-tour"
      className="w-full py-14 md:py-24 bg-gradient-to-b from-white via-[#f4faf5] to-white relative overflow-hidden flex justify-center border-t border-[#e2efe5]"
    >
      {/* Background ambient decorative blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#80b918]/10 blur-[90px] rounded-full pointer-events-none -z-0" />

      <div className="container-1280 w-full px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <FadeIn direction="up">
            <div className="flex justify-center mb-2">
              <Image
                src="/images/leaf.svg"
                alt="Leaf"
                width={50}
                height={22}
                className="h-auto w-auto"
              />
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <span className="inline-flex items-center gap-2 bg-[#00A63E]/10 border border-[#00A63E]/20 text-[#008236] font-semibold text-xs md:text-sm tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00A63E] animate-pulse" />
              Product Walkthrough
            </span>
          </FadeIn>

          <FadeIn delay={250}>
            <h2
              className="font-['Hedvig_Letters_Serif'] font-normal text-[#101828] mb-4 leading-tight"
              style={{ fontSize: "clamp(26px, 4.5vw, 46px)", wordBreak: "break-word" }}
            >
              See AyuPlus in Action
            </h2>
          </FadeIn>

          <FadeIn delay={350}>
            <p
              className="font-normal text-[#4A5565] max-w-2xl mx-auto"
              style={{ fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: "1.7" }}
            >
              Take a guided tour through our dedicated Ayurvedic Hospital Management System.
              Explore OPD, IPD, Panchakarma procedure tracking, pharmacy stock management,
              and GST-compliant billing in one seamless workflow.
            </p>
          </FadeIn>
        </div>

        {/* Video Player Mockup Container */}
        <FadeIn delay={450} direction="up">
          <div className="max-w-4xl lg:max-w-5xl mx-auto">
            <div className="bg-[#0f1d14] rounded-2xl md:rounded-3xl p-2 md:p-3 shadow-[0_25px_60px_-15px_rgba(0,61,26,0.3)] border border-[#1e3d28]">
              {/* Browser-style / App-style top header bar */}
              <div className="flex items-center justify-between px-3 md:px-4 py-2 text-xs text-white/60 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block" />
                  <span className="hidden sm:inline-block ml-3 text-white/50 font-mono text-[11px]">
                    AyuPlus HMS • Product Overview
                  </span>
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-full text-[11px] font-mono text-white/70 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C950]" />
                  <span>https://ayuplus.in/tour</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[11px] text-white/50">
                  <span className="px-1.5 py-0.5 rounded bg-white/10 font-semibold text-[10px] text-white/80">
                    HD
                  </span>
                </div>
              </div>

              {/* 16:9 Responsive Video Iframe */}
              <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-black shadow-inner">
                <iframe
                  className="w-full h-full border-0 absolute inset-0"
                  src="https://www.youtube-nocookie.com/embed/qGeNrgcCDFU?rel=0&modestbranding=1"
                  title="AyuPlus Ayurvedic Hospital Management System Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
              <div className="bg-white rounded-xl p-5 border border-[#c8e6d0] shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#00A63E]/10 flex items-center justify-center text-[#00A63E] mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-['Inter'] font-semibold text-[16px] text-[#101828] mb-1.5">
                  Vaidya Consultation Mode
                </h4>
                <p className="font-['Inter'] text-[13px] text-[#4A5565] leading-relaxed">
                  Doctor-first EMR featuring Nadi Pareeksha, Asta Sthana Pariksha, and Prakruti assessment directly inside the consultation record.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#c8e6d0] shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#00A63E]/10 flex items-center justify-center text-[#00A63E] mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="font-['Inter'] font-semibold text-[16px] text-[#101828] mb-1.5">
                  7 Panchakarma Forms
                </h4>
                <p className="font-['Inter'] text-[13px] text-[#4A5565] leading-relaxed">
                  Day-wise Snehapanam, Vamanam, Virechanam, Vasthi tracking with dosage, observations, and printable discharge summaries.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#c8e6d0] shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#00A63E]/10 flex items-center justify-center text-[#00A63E] mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-['Inter'] font-semibold text-[16px] text-[#101828] mb-1.5">
                  Integrated Pharmacy &amp; Billing
                </h4>
                <p className="font-['Inter'] text-[13px] text-[#4A5565] leading-relaxed">
                  Real-time stock deduction, batch expiry alerts, and GST-compliant invoicing for OPD, IPD, and therapy sessions.
                </p>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-8 bg-[#003d1a] rounded-2xl p-6 md:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
              <div className="text-center sm:text-left">
                <h4 className="font-['Hedvig_Letters_Serif'] text-[20px] md:text-[24px] font-normal mb-1">
                  Ready to see it tailored for your hospital?
                </h4>
                <p className="text-[13px] md:text-[14px] text-[#bbf7d0] leading-relaxed">
                  Get a 45-minute live walkthrough configured for your doctors, beds, and departments.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenModal}
                className="flex-shrink-0 bg-[#00A63E] hover:bg-[#008236] text-white font-semibold text-[14px] md:text-[15px] px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                Book Free Demo →
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
