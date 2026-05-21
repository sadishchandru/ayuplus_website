"use client";

import Image from 'next/image';
import FadeIn from './FadeIn';

interface FeatureItem {
    title: string;
    description?: string;
}

interface FeatureBlockProps {
    title: string;
    description: string;
    image: string;
    items: (string | FeatureItem)[];
    reverse?: boolean;
    bgColor?: string;
}

const FeatureBlock = ({ title, description, image, items, reverse, bgColor }: FeatureBlockProps) => (
    <div className={`w-full flex justify-center ${bgColor || 'bg-white'}`}>
        <div className={`container-1280 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-12`}
             style={{ padding: "48px 5%" }}>
            <div className="flex-1 w-full" style={{ maxWidth: "580px" }}>
                <FadeIn delay={200}>
                    <h3 className="font-['Inter'] font-bold leading-[1.3] tracking-[0.35px] text-[#101828] mb-[16px] md:mb-[24px]"
                        style={{ fontSize: "clamp(20px, 3.5vw, 38px)", wordBreak: "break-word" }}>
                        {title}
                    </h3>
                    <p className="font-['Inter'] font-normal leading-[1.65] tracking-[-0.45px] text-[#4A5565] mb-[24px]"
                       style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}>
                        {description}
                    </p>
                    <ul className="space-y-5">
                        {items.map((item, idx) => {
                            const itemTitle = typeof item === 'string' ? item : item.title;
                            const itemDesc = typeof item === 'string' ? null : item.description;

                            return (
                                <li key={idx} className="flex items-start group">
                                    <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[#00A63E] flex items-center justify-center mr-[12px] border border-[#00A63E] mt-1">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="font-['Inter'] font-semibold text-[#101828]"
                                              style={{ fontSize: "clamp(14px, 1.6vw, 18px)", lineHeight: "1.5" }}>
                                            {itemTitle}
                                        </span>
                                        {itemDesc && (
                                            <p className="font-['Inter'] font-normal text-[#4A5565] mt-1"
                                               style={{ fontSize: "clamp(13px, 1.4vw, 16px)", lineHeight: "1.6" }}>
                                                {itemDesc}
                                            </p>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </FadeIn>
            </div>
            <div className="flex-1 w-full relative">
                <FadeIn delay={400} direction="up">
                    <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={500}
                        className="rounded-xl w-full h-auto"
                        style={{ maxWidth: "100%", borderRadius: "12px", marginTop: "0" }}
                    />
                </FadeIn>
                <div className={`absolute -inset-4 -z-10 bg-primary/5 blur-3xl rounded-full opacity-60 ${reverse ? 'left-auto right-0' : 'right-auto left-0'}`} />
            </div>
        </div>
    </div>
);

const Features = () => {
    return (
        <section className="relative">
            <div className="w-full">
                <FeatureBlock
                    title="Complete OPD & IPD patient management"
                    description="From patient registration to discharge, manage the entire patient lifecycle. Track consultations, admission status, and patient history in one unified system."
                    image="/images/dashboar-2.png"
                    items={[
                        { title: "Quick patient registration", description: "Add new patients or retrieve existing records instantly" },
                        { title: "Real-time bed management", description: "Track IPD admissions, bed availability, and ward occupancy" },
                        { title: "Complete patient history", description: "Access all past visits, treatments, and medical records" }
                    ]}
                />

                <FeatureBlock
                    title="Built for Ayurvedic diagnostic methods"
                    description="Not adapted from allopathy software. Native support for Prakruti assessment, Dosha evaluation, and traditional Panchakarma treatment documentation."
                    image="/images/dashboar-3.png"
                    items={[
                        { title: "Prakruti & Dosha tracking", description: "Constitutional assessment and imbalance documentation" },
                        { title: "Panchakarma workflows", description: "Complete procedure tracking for all traditional treatments" },
                        { title: "Tithi-based scheduling", description: "Panchang integration for auspicious treatment timing" }
                    ]}
                    reverse
                    bgColor="bg-[#FAFAFA]"
                />

                <FeatureBlock
                    title="Complete pharmacy and medicine inventory"
                    description="Track medicine stock, manage suppliers, automate reordering, and integrate directly with billing. Real-time alerts for low stock and expiring medicines."
                    image="/images/dashboar-4.png"
                    items={[
                        { title: "Stock management", description: "Real-time tracking with low stock alerts" },
                        { title: "Billing integration", description: "Automatic stock deduction and revenue tracking" }
                    ]}
                />
            </div>
        </section>
    );
};

export default Features;
