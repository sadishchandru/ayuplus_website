"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const Hero = ({ onOpenModal }: { onOpenModal?: () => void }) => {
  const scrollToVideo = () => {
    const el = document.getElementById("video-tour");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="pt-[80px] md:pt-[130px] pb-10 md:pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-white to-white overflow-hidden flex flex-col items-center relative z-10">
        <div className="container-1280 text-center w-full px-4">
          <div className="flex justify-center mb-2">
            <FadeIn direction="up">
              <Image
                src="/images/leaf.svg"
                alt="Leaf"
                width={55}
                height={25}
                style={{ width: "auto", height: "auto", maxWidth: "100%" }}
              />
            </FadeIn>
          </div>

          <FadeIn delay={150}>
            <div className="inline-flex items-center gap-2 bg-[#00A63E]/10 border border-[#00A63E]/20 text-[#008236] font-semibold text-xs md:text-sm tracking-wide uppercase px-4 py-1.5 rounded-full mb-4 md:mb-5">
              <span className="w-2 h-2 rounded-full bg-[#00A63E] animate-pulse" />
              <span>India’s Purpose-Built Ayurvedic HMS • Starting ₹1,499/mo</span>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <h1
              className="font-['Hedvig_Letters_Serif'] font-normal leading-[1.18] tracking-[0.12px] text-[#101828] mb-[20px] md:mb-[24px]"
              style={{ fontSize: "clamp(28px, 5.5vw, 62px)", wordBreak: "break-word" }}
            >
              Complete Ayurvedic Hospital <br className="hidden md:block" /> Management System
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p
              className="font-normal tracking-[0.05px] text-center text-[#4A5565] mb-[28px] md:mb-[34px] max-w-2xl mx-auto"
              style={{ fontSize: "clamp(15px, 2vw, 18px)", lineHeight: "1.7" }}
            >
              End-to-end OPD, IPD, Panchakarma treatments, pharmacy, billing, and administration.<br className="hidden md:block" /> Built specifically for Ayurvedic hospitals with clinical and operational maturity.
            </p>
          </FadeIn>

          <FadeIn delay={550}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
              <button
                type="button"
                onClick={onOpenModal}
                className="w-full sm:w-auto bg-[#00A63E] hover:bg-[#008236] text-white font-semibold text-[15px] md:text-[17px] px-7 py-3.5 rounded-xl cursor-pointer transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(0,166,62,0.35)] hover:shadow-[0_15px_30px_-5px_rgba(0,166,62,0.45)] hover:scale-105 active:scale-95"
              >
                Book Free Demo →
              </button>
              <button
                type="button"
                onClick={scrollToVideo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f0faf4] text-[#00A63E] border-2 border-[#00A63E] font-semibold text-[15px] md:text-[17px] px-6 py-3.5 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo Video
              </button>
            </div>

            {/* Micro Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-[#5a7a65]">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Trusted by 14,700+ Patients
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Cloud or On-Premises
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Multilingual (ML, TA, HI, EN)
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hero Dashboard Showcase with subtle browser frame and glow */}
      <div className="w-full container-1280 px-4 -mt-4 md:-mt-6 relative z-20">
        <FadeIn direction="up" delay={700}>
          <div className="relative group cursor-pointer" onClick={scrollToVideo}>
            {/* Ambient background glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00A63E]/30 via-[#80b918]/20 to-[#00A63E]/30 rounded-2xl md:rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-500" />

            <div className="relative bg-[#002710] rounded-xl md:rounded-2xl p-1.5 md:p-2.5 shadow-2xl border border-white/10 overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-black/30 rounded-t-lg text-white/50 text-xs mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="hidden sm:inline-block ml-2 text-[11px] font-mono text-white/60">
                    AyuPlus Hospital Dashboard
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] text-[#86efac] font-medium bg-[#003d1a] px-2.5 py-0.5 rounded-full">
                  <span>▶ Watch 2-min Walkthrough Below</span>
                </div>
              </div>

              <Image
                src="/images/Dashboard_v1.png"
                alt="Ayuplus Hospital Dashboard"
                width={1450}
                height={800}
                className="rounded-lg mx-auto w-full h-auto block"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default Hero;
