"use client";

import Image from 'next/image';
import FadeIn from './FadeIn';

const Hero = ({ onOpenModal }: { onOpenModal?: () => void }) => {
    return (
        <>
            <section className="pt-[100px] md:pt-[153px] pb-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-white to-white overflow-hidden flex flex-col items-center relative z-10">
                <div className="container-1280 text-center w-full">
                    <div className="flex justify-center mb-1">
                        <FadeIn direction="up">
                            <Image
                                src="/images/leaf.svg"
                                alt="Leaf"
                                width={55}
                                height={25}
                                style={{ width: "auto", height: "auto" }}
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

                    
                </div>
            </section>

            <div className="w-full lg:mt-[-125px] mt-[-80px]">
                <FadeIn direction="up" delay={800}>
                    <Image
                        src="/images/Dashboard_v1.png"
                        alt="Ayuplus Hospital Dashboard"
                        width={1450}
                        height={800}
                        className="rounded-xl mx-auto"
                        style={{ height: "auto" }}
                        priority
                    />
                </FadeIn>
            </div>
        </>
    );
};

export default Hero;
