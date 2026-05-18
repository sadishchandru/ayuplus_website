import Link from "next/link";
import FadeIn from "./FadeIn";

const CTA = ({ onOpenModal }: { onOpenModal?: () => void }) => {
    return (
        <section className="lg:py-[128px] py-[50px] bg-[linear-gradient(135deg,_#00A63E_0%,_#00A63E_50%,_#008236_100%)] relative overflow-hidden flex justify-center">
            {/* Decorative Overlays */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -ml-48 -mb-48" />

            <div className="container-1280 w-full text-center relative z-10 text-white">
                <FadeIn>
                    <h2 className="font-['Hedvig_Letters_Serif'] font-normal text-[28px] md:text-[60px] leading-[36px] md:leading-[75px] tracking-[0.26px] text-center text-white mb-[24px]">
                        Start digitizing your <br className="hidden md:block" /> hospital today
                    </h2>
                    <p className="font-['Inter'] font-normal text-[18px] md:text-[24px] leading-[28px] md:leading-[39px] tracking-[0.07px] text-center text-white mb-[40px]">
                        See the complete Ayuplus platform in action with a personalized demo for your hospital.
                    </p>
                    <button
                        onClick={onOpenModal}
                        className="font-['Inter'] font-medium text-[14px] md:text-[18px] leading-[28px] tracking-[-0.44px] text-center text-[#008236] px-[20px] py-[12px] md:px-[35px] md:py-[24px] bg-white rounded-[8px] cursor-pointer hover:scale-105 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl">
                        Request Hospital Demo
                    </button>
                </FadeIn>
            </div>
        </section>
    );
};

export default CTA;
