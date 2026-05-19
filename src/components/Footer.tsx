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
                            <div className="flex items-center gap-4 mt-5">
                                <Link href="https://www.linkedin.com/company/111806170" target="_blank" rel="noopener noreferrer" aria-label="AyuPlus on LinkedIn" className="text-[#99A1AF] hover:text-[#00A63E] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </Link>
                                <Link href="https://www.facebook.com/profile.php?id=61588704586539" target="_blank" rel="noopener noreferrer" aria-label="AyuPlus on Facebook" className="text-[#99A1AF] hover:text-[#00A63E] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col md:flex-col">
                                <p className="font-['Inter'] font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-[#99A1AF] mb-[15px] md:mb-0">© 2026 <Link href="https://gleamingsoftware.com/" target='_blank' className="hover:text-primary transition-colors">Gleaming Software</Link>. All rights reserved.</p>
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
