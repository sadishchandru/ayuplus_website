import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './FadeIn';
const Footer = () => {
    return (
        <footer className="bg-[#101828] text-[#f0fdf4] pt-[34px] md:pt-[34px] flex justify-center">
            <div className="container-1280 w-full">
                <FadeIn direction="up">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-[32px]">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center space-x-1 mb-[16px]">
                                <Link href="/" className="flex items-center group">
                                    <Image
                                        src="/images/footer-logo.svg"
                                        alt="Logo"
                                        width={95}
                                        height={33}
                                        className="rounded-xl w-full h-auto"
                                    />
                                </Link>
                            </div>
                            <p className="font-['Inter'] font-normal text-[14px] leading-[22.75px] tracking-[-0.15px] text-[#99A1AF]">
                                Complete Ayurvedic Hospital Management System built for operational maturity and clinical depth. Designed for institutions, not experiments.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-['Inter'] font-semibold text-[16px] leading-[24px] tracking-[-0.31px] text-white mb-[16px]">Contact</h3>
                            <ul className="space-y-[8px] font-['Inter'] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#D1D5DC]">
                                <li><Link href="mailto:contact@ayuplus.com" className="hover:text-primary transition-colors flex items-center space-x-[8px]">
                                    <Image
                                        src="/images/email.svg"
                                        alt="Logo"
                                        width={16}
                                        height={16}
                                        className="h-auto"
                                    />
                                    <span>contact@ayuplus.com</span>
                                </Link></li>
                                <li><Link href="tel:+919894997482" className="hover:text-primary transition-colors flex items-center space-x-[8px]">
                                    <Image
                                        src="/images/phone.svg"
                                        alt="Logo"
                                        width={16}
                                        height={16}
                                        className="h-auto"
                                    />
                                    <span>+91 98949 97482</span>

                                </Link></li>
                                <li><Link href="https://www.google.com/maps/place/AYUPLUS/@12.9716,77.5946,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae1b0a0a0a0a0a:0x0!8m2!3d12.9716!4d77.5946" target='_blank' className="hover:text-primary transition-colors flex items-center space-x-[8px]">
                                    <Image
                                        src="/images/location.svg"
                                        alt="Logo"
                                        width={16}
                                        height={16}
                                        className="h-auto"
                                    />
                                    <span>India</span>

                                </Link></li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex flex-col md:flex-col">
                                <p className="font-['Inter'] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#99A1AF] mb-[15px] md:mb-0">© 2026 Gleaming Software. All rights reserved.</p>
                                <div className="flex space-x-[10px] font-['Inter'] font-normal text-[14px] leading-[22px] tracking-[-0.15px] text-[#99A1AF]">
                                    <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                                    <span>|</span>
                                    <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                                </div>
                            </div>
                        </div>



                    </div>


                </FadeIn>
            </div>
        </footer>
    );
};

export default Footer;
