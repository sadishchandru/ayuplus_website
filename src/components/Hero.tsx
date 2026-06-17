"use client";

import Image from 'next/image';
import FadeIn from './FadeIn';

const Hero = ({ onOpenModal }: { onOpenModal?: () => void }) => {
    return (
        <>
            <section className="pt-[80px] md:pt-[140px] pb-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-white to-white overflow-hidden flex flex-col items-center relative z-10">
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
                        <h1 className="font-['Hedvig_Letters_Serif'] font-normal leading-[1.2] tracking-[0.12px] text-[#101828] mb-[20px] md:mb-[25px]"
                            style={{ fontSize: "clamp(26px, 5.5vw, 62px)", wordBreak: "break-word" }}>
                            Complete Ayurvedic Hospital <br className="hidden md:block" /> Management System
                        </h1>
                    </FadeIn>

                    <FadeIn delay={400}>
                        <p className="font-normal tracking-[0.07px] text-center text-[#4A5565] mb-[28px] md:mb-[28px] max-w-2xl mx-auto"
                           style={{ fontSize: "clamp(14px, 2vw, 18px)", lineHeight: "1.7" }}>
                            End-to-end OPD, IPD, treatments, pharmacy, billing, and administration.<br className="hidden md:block" /> Built specifically for Ayurvedic hospitals with operational maturity.
                        </p>
                    </FadeIn>

                    <FadeIn delay={600}>
                        <button
                            onClick={onOpenModal}
                            className="mb-[28px] border-2 border-[#5A9A04] text-[#5A9A04] bg-transparent font-medium text-[14px] md:text-[18px] leading-[28px] tracking-[-0.44px] px-[20px] py-[10px] md:px-[28px] md:py-[14px] rounded-[8px] cursor-pointer hover:bg-[#5A9A04] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Book Free Demo →
                        </button>
                    </FadeIn>
                </div>
            </section>

            <div className="w-full lg:mt-[-125px] mt-[0px] md:mt-[0px] px-4 md:px-0">
                <FadeIn direction="up" delay={800}>
                    <Image
                        src="/images/Dashboard_v1.png"
                        alt="Ayuplus Hospital Dashboard"
                        width={1450}
                        height={800}
                        className="rounded-xl mx-auto"
                        style={{ height: "auto", maxWidth: "100%", display: "block" }}
                        priority
                    />
                </FadeIn>
            </div>
        </>
    );
};

export default Hero;
