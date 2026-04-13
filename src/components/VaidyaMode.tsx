"use client";

import Image from 'next/image';
import FadeIn from './FadeIn';

const checklistItems = [
    ["Patient Info & Clinical History", "Pain Assessment"],
    ["NCD Tracking (Month / Year)", "Asta Sthana Pariksha"],
    ["Complaints & Diagnosis", "NIH Anatomical Area Notation"],
    ["Clinical Measurements", "Reports & File Management"],
    ["Disease Follow-up Tracking", "Medicine Prescription"],
    ["Treatment Planning", ""],
];

const VaidyaMode = () => {
    return (
        <section className="w-full flex justify-center bg-white">
            <div className="container-1280 flex flex-col lg:flex-row items-center gap-8 md:gap-12 py-[40px] md:py-[70px]">
                {/* Left Content */}
                <div className="w-full lg:w-[45%] md:pr-0">
                    <FadeIn delay={400} direction="down">
                        {/* Tag */}
                        <span className="inline-block font-['Inter'] font-semibold text-[12px] md:text-[12px] leading-[20px] tracking-[1.5px] uppercase text-[#11D432] border bg-[#11D4320D] px-[12px] py-[4px] rounded-full mb-[20px]">
                            Independent Practitioner Workflow
                        </span>

                        <h3 className="font-['Inter'] font-bold text-[24px] md:text-[36px] leading-[30px] md:leading-[40px] tracking-[0.35px] text-[#0D1B10] mb-[16px] md:mb-[24px]">
                            Vaidya Mode – Direct Consultation Workflow for Ayurvedic Doctors
                        </h3>

                        <p className="font-['Inter'] font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[32.5px] tracking-[-0.45px] text-[#4A5565] mb-[24px]">
                            Vaidya Mode in AyuPlus allows Ayurvedic doctors to
                            manage the entire OPD consultation independently
                            without relying on front office staff. From patient
                            information and Asta Sthana Pariksha to diagnosis,
                            prescription, and treatment planning, everything is
                            structured in one seamless workflow.
                        </p>

                        {/* Checklist Grid */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                            {checklistItems.map((row, rowIdx) =>
                                row.map((item, colIdx) =>
                                    item ? (
                                        <div key={`${rowIdx}-${colIdx}`} className="flex items-start gap-[10px]">
                                            <div className="flex-shrink-0 w-[28px] h-[28px] flex items-center justify-center mt-[2px]">
                                                <svg className="w-9 h-9 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="font-['Inter'] font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#4A5565]">
                                                {item}
                                            </span>
                                        </div>
                                    ) : null
                                )
                            )}
                        </div>
                    </FadeIn>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-[55%] relative">
                    <FadeIn delay={400} direction="up">
                        <div>
                            <Image
                                src="/images/VaidyaMode.png"
                                alt="Vaidya Mode Dashboard - Direct Consultation Workflow"
                                width={800}
                                height={600}
                                className="rounded-xl w-full h-auto"
                            />
                        </div>
                    </FadeIn>
                    {/* Background Accent */}
                    <div className="absolute -inset-4 -z-10 bg-primary/5 blur-3xl rounded-full opacity-60 right-auto left-0" />
                </div>
            </div>
        </section>
    );
};

export default VaidyaMode;
