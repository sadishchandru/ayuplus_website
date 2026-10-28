import Image from "next/image";
import FadeIn from "./FadeIn";
import CountUp from "./CountUp";

const Stats = () => {
    const stats = [
        { value: 15, suffix: "+", label: "Core hospital modules" },
        { value: 60, suffix: "%", label: "Reduction in admin time" },
        { value: 100, suffix: "%", label: "Ayurveda-focused design" }
    ];

    return (
        <section className="py-[40px] md:py-[64px] bg-[#FAFFF3] border-t border-[#DBDBDB] flex justify-center">
            <div className="container-1280 text-center w-full px-4">
                <div className="flex justify-center mb-1">
                    <FadeIn direction="up">
                        <Image
                            src="/images/leaf.svg"
                            alt="Leaf"
                            width={55}
                            height={25}
                            className="h-auto"
                            style={{ maxWidth: "100%" }}
                        />
                    </FadeIn>
                </div>

                <FadeIn delay={200}>
                    <h2 className="font-['Hedvig_Letters_Serif'] font-normal leading-[1.3] tracking-[0.12px] text-center text-[#101828] mb-[32px] md:mb-[48px]"
                        style={{ fontSize: "clamp(22px, 4vw, 42px)", wordBreak: "break-word" }}>
                        Why hospitals choose Ayuplus
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {stats.map((stat, idx) => (
                        <FadeIn key={idx} delay={400 + (idx * 100)}>
                            <div className="flex flex-col items-center group">
                                <span style={{ fontSize: "clamp(32px, 6vw, 52px)", display: "block" }}>
                                    <CountUp
                                        end={stat.value}
                                        suffix={stat.suffix}
                                        className="font-['Inter'] font-bold leading-none tracking-[0.12px] text-center text-[#00A63E]"
                                    />
                                </span>
                                <span className="font-['Inter'] font-normal text-[16px] md:text-[18px] leading-[28px] tracking-[-0.44px] text-center text-[#4A5565] mt-[12px] mb-[20px] md:mb-[40px]">
                                    {stat.label}
                                </span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
