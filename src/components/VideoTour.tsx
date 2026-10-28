"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function VideoTour() {
  return (
    <section className="py-[40px] md:py-[64px] bg-white flex justify-center">
      <div className="container-1280 text-center w-full px-4">
        <div className="flex justify-center mb-1">
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

        <FadeIn delay={200}>
          <h2
            className="font-['Hedvig_Letters_Serif'] font-normal leading-[1.3] tracking-[0.12px] text-center text-[#101828] mb-[12px] md:mb-[16px]"
            style={{ fontSize: "clamp(22px, 4vw, 42px)", wordBreak: "break-word" }}
          >
            See Ayuplus in action
          </h2>
        </FadeIn>

        <FadeIn delay={300}>
          <p
            className="font-normal tracking-[0.07px] text-center text-[#4A5565] mb-[28px] md:mb-[36px] max-w-2xl mx-auto"
            style={{ fontSize: "clamp(14px, 2vw, 18px)", lineHeight: "1.7" }}
          >
            Complete walkthrough of OPD, IPD, Panchakarma, pharmacy, and billing workflows.
          </p>
        </FadeIn>

        <FadeIn delay={400} direction="up">
          <div
            className="video-card-container dashboard-shadow"
            style={{
              border: "1px solid #c8e6d0",
              borderRadius: "20px",
              padding: "20px",
              background: "#f7faf8",
              maxWidth: "960px",
              margin: "0 auto",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <div
              className="relative w-full aspect-video overflow-hidden"
              style={{
                position: "relative",
                width: "100%",
                borderRadius: "14px",
                border: "1px solid #e8f0ea",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                background: "#000",
              }}
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/qGeNrgcCDFU?rel=0"
                title="AyuPlus Ayurvedic Hospital Management System Walkthrough"
                className="absolute inset-0 w-full h-full border-0 block"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .video-card-container {
            padding: 12px !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
