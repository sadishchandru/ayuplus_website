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
                    <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[24px] md:text-[32px] leading-[36px] md:leading-[62px] tracking-[0.12px] text-center text-[#101828] mb-[40px] md:mb-[58px]">
                        Why hospitals choose Ayuplus
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {stats.map((stat, idx) => (
                        <FadeIn key={idx} delay={400 + (idx * 100)}>
                            <div className="flex flex-col items-center group">
                                <CountUp
                                    end={stat.value}
                                    suffix={stat.suffix}
                                    className="font-['Inter'] font-bold text-[28px] md:text-[52px] leading-[36px] md:leading-[72px] tracking-[0.12px] text-center text-[#00A63E]"
                                />
                                <span className="font-['Inter'] font-normal text-[18px] leading-[28px] tracking-[-0.44px] text-center text-[#4A5565] mt-[12px] mb-[40px]">
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
