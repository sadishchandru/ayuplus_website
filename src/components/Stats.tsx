import Image from "next/image";
import FadeIn from "./FadeIn";
import CountUp from "./CountUp";

const Stats = () => {
  const stats = [
    {
      value: 15,
      suffix: "+",
      label: "Core hospital modules",
      desc: "OPD, IPD, Panchakarma, Pharmacy, Billing, Vaidya Mode & more",
    },
    {
      value: 60,
      suffix: "%",
      label: "Reduction in admin time",
      desc: "Eliminates duplicate registers and speeds up discharge billing",
    },
    {
      value: 100,
      suffix: "%",
      label: "Ayurveda-focused design",
      desc: "Native Nadi Pareeksha, Dosha evaluation, and Tithi scheduling",
    },
  ];

  return (
    <section className="py-[50px] md:py-[80px] bg-[#f7fbf8] border-t border-[#e2efe5] flex justify-center">
      <div className="container-1280 text-center w-full px-4">
        <div className="flex justify-center mb-2">
          <FadeIn direction="up">
            <Image
              src="/images/leaf.svg"
              alt="Leaf"
              width={50}
              height={22}
              className="h-auto w-auto"
            />
          </FadeIn>
        </div>

        <FadeIn delay={150}>
          <span className="inline-block font-semibold text-xs md:text-sm uppercase tracking-wider text-[#008236] bg-[#00A63E]/10 border border-[#00A63E]/20 px-3.5 py-1.5 rounded-full mb-3">
            Proven Clinical Impact
          </span>
        </FadeIn>

        <FadeIn delay={250}>
          <h2
            className="font-['Hedvig_Letters_Serif'] font-normal leading-[1.25] text-center text-[#101828] mb-[36px] md:mb-[52px]"
            style={{ fontSize: "clamp(24px, 4vw, 42px)", wordBreak: "break-word" }}
          >
            Why hospitals choose AyuPlus
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={350 + idx * 100}>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#c8e6d0] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center h-full">
                <span
                  className="mb-2"
                  style={{ fontSize: "clamp(36px, 6vw, 54px)", display: "block" }}
                >
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    className="font-['Inter'] font-extrabold leading-none tracking-tight text-[#00A63E]"
                  />
                </span>
                <span className="font-['Inter'] font-bold text-[17px] md:text-[19px] text-[#101828] mt-2 mb-2 text-center">
                  {stat.label}
                </span>
                <p className="font-['Inter'] text-[13px] md:text-[14px] text-[#5a7a65] leading-relaxed text-center">
                  {stat.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
