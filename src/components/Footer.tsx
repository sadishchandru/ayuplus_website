import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './FadeIn';

const PLATFORM_LINKS = [
  { href: "/opd-ipd-management", label: "Hospital Modules" },
  { href: "/vaidya-mode", label: "Dashboard Preview" },
  { href: "/case-sheets", label: "Ayurveda Compliance" },
  { href: "mailto:contact@ayuplus.com?subject=Privacy%20Policy%20Enquiry", label: "Security & Privacy" },
  { href: "/hospital-settings", label: "Integration APIs" },
];

const RESOURCE_LINKS = [
  { href: "#", label: "Documentation", target: "_blank" },
  { href: "#", label: "Training Videos", target: "_blank" },
  { href: "#", label: "Tutorials", target: "_blank" },
  { href: "/contact", label: "Case Studies" },
  { href: "/contact", label: "Support Center" },
];

const Footer = () => {
  return (
    <footer className="bg-[#101828] text-[#f0fdf4] flex flex-col items-center">

      {/* Main content */}
      <div className="container-1280 w-full px-4 pt-[48px] pb-[40px]">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 mb-[40px]">

            {/* Col 1 — Brand */}
            <div>
              <Link href="/" className="inline-flex items-center mb-[16px]">
                <Image
                  src="/images/footer-logo.svg"
                  alt="AyuPlus"
                  width={95}
                  height={33}
                  className="w-[95px] h-auto"
                />
              </Link>
              <p className="font-['Inter'] font-normal text-[14px] leading-[23px] tracking-[-0.15px] text-[#99A1AF] max-w-[240px]">
                Complete Ayurvedic Hospital Management System built for operational maturity and clinical depth. Designed for institutions, not experiments.
              </p>
            </div>

            {/* Col 2 — Platform */}
            <div>
              <h3 className="font-['Inter'] font-semibold text-[15px] text-white mb-[16px]">Platform</h3>
              <ul className="flex flex-col gap-[10px]">
                {PLATFORM_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-['Inter'] font-normal text-[14px] leading-[20px] text-[#99A1AF] hover:text-[#00A63E] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Resources */}
            <div>
              <h3 className="font-['Inter'] font-semibold text-[15px] text-white mb-[16px]">Resources</h3>
              <ul className="flex flex-col gap-[10px]">
                {RESOURCE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.target}
                      rel={link.target ? "noopener noreferrer" : undefined}
                      className="font-['Inter'] font-normal text-[14px] leading-[20px] text-[#99A1AF] hover:text-[#00A63E] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <h3 className="font-['Inter'] font-semibold text-[15px] text-white mb-[16px]">Contact</h3>
              <ul className="flex flex-col gap-[10px]">
                <li>
                  <Link
                    href="mailto:contact@ayuplus.com"
                    className="font-['Inter'] font-normal text-[14px] text-[#99A1AF] hover:text-[#00A63E] transition-colors flex items-center gap-[8px]"
                  >
                    <Image src="/images/email.svg" alt="Email" width={15} height={15} className="h-auto flex-shrink-0" />
                    <span>contact@ayuplus.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+919894997482"
                    className="font-['Inter'] font-normal text-[14px] text-[#99A1AF] hover:text-[#00A63E] transition-colors flex items-center gap-[8px]"
                  >
                    <Image src="/images/phone.svg" alt="Phone" width={15} height={15} className="h-auto flex-shrink-0" />
                    <span>+91 98949 97482</span>
                  </Link>
                </li>
                <li>
                  <span className="font-['Inter'] font-normal text-[14px] text-[#99A1AF] flex items-center gap-[8px]">
                    <Image src="/images/location.svg" alt="Location" width={15} height={15} className="h-auto flex-shrink-0" />
                    <span>India</span>
                  </span>
                </li>
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-4 mt-5 justify-start sm:justify-start">
                <Link href="https://www.linkedin.com/company/111806170" target="_blank" rel="noopener noreferrer" aria-label="AyuPlus on LinkedIn" className="text-[#99A1AF] hover:text-[#00A63E] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61588704586539" target="_blank" rel="noopener noreferrer" aria-label="AyuPlus on Facebook" className="text-[#99A1AF] hover:text-[#00A63E] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-[#1F2937]">
        <div className="container-1280 w-full px-4 py-[18px] flex flex-col items-center gap-3 sm:flex-row sm:justify-between text-center sm:text-left">
          <p className="font-['Inter'] font-normal text-[13px] text-[#99A1AF]">
            © 2026{" "}
            <Link href="https://gleamingsoftware.com/" target="_blank" className="hover:text-[#00A63E] transition-colors">
              Gleaming Software
            </Link>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-[10px] font-['Inter'] font-normal text-[13px] text-[#99A1AF]">
            <Link href="/contact" className="hover:text-[#00A63E] transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-[#00A63E] transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-[#00A63E] transition-colors">Data Services</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
