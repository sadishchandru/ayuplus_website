"use client";

import Image from 'next/image';
import FadeIn from './FadeIn';
import Link from 'next/link';

const Hero = ({ onOpenModal }: { onOpenModal?: () => void }) => {
    return (
        <>
            <section className="pt-[100px] md:pt-[153px] pb-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-white to-white overflow-hidden flex flex-col items-center relative z-10">
                <div className="container-1280 text-center w-full">
                    {/* Leaf Icon */}
                    <div className="flex justify-center mb-1">
                        <FadeIn direction="up">
                            <Image
                                src="/images/leaf.svg"
                                alt="Leaf"
                                width={55}
                                height={25}
                                className="h-auto"
                            />
                        </FadeIn>
                    </div>

                    <FadeIn delay={200}>
                        <h1 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[52px] leading-[36px] md:leading-[62px] tracking-[0.12px] text-[#101828] mb-[25px]">
                            Complete Ayurvedic Hospital <br className="hidden md:block" /> Management System
                        </h1>
                    </FadeIn>

                    <FadeIn delay={400}>
                        <p className="font-normal text-[18px] md:leading-[39px] tracking-[0.07px] text-center text-[#4A5565] mb-[25px]">
                            End-to-end OPD, IPD, treatments, pharmacy, billing, and administration.<br className="hidden md:block" /> Built specifically for Ayurvedic hospitals with operational maturity.
                        </p>
                    </FadeIn>

                    <FadeIn delay={600}>
                        <div className="mb-20">
                            <button
                                onClick={onOpenModal}
                                className="bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] font-medium text-[14px] md:text-[18px] leading-[28px] tracking-[-0.44px] text-center text-white px-[20px] py-[10px] md:px-[28px] md:py-[14px] rounded-[8px] cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95 shadow-lg hover:shadow-xl">
                                Request Hospital Demo
                            </button>
                        </div>
                    </FadeIn>

                    {/* Dashboard Image */}

                </div>
            </section>
            <div className="w-full lg:mt-[-125px] mt-[-80px]">
                <div className="w-full">
                    <FadeIn direction="up" delay={800}>
                        <Image
                            src="/images/Dashboard_v1.png"
                            alt="Ayuplus Hospital Dashboard"
                            width={1450}
                            height={800}
                            className="rounded-xl h-auto mx-auto"
                            priority
                        />
                    </FadeIn>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full bg-primary/2 blur-[100px] rounded-full" />
            </div>
        </>
    );
};

export default Hero;
