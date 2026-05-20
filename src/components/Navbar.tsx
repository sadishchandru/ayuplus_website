"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: "/vaidya-mode", label: "Vaidya Mode" },
  { href: "/digital-prescription", label: "Prescription Pad" },
  { href: "/case-sheets", label: "Case Sheets" },
  { href: "/billing", label: "Billing" },
  { href: "/pricing", label: "Pricing" },
  { href: "/hospital-settings", label: "Settings" },
  { href: "/contact", label: "Contact" },
];

const Navbar = ({ onOpenModal }: { onOpenModal?: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#DBDBDB] flex justify-center transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="container-1280 w-full py-[16px] flex justify-between items-center px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <Image
            src="/images/Logo.svg"
            alt="AyuPlus Logo"
            width={123}
            height={42}
            className="rounded-xl w-[90px] md:w-full"
            style={{ height: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#374151] hover:text-[#00A63E] transition-colors font-medium text-[14px] whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenModal}
            className="hidden md:inline-flex px-[16px] py-[8px] rounded-md bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] text-white font-medium text-[14px] transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Request Hospital Demo
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-[#374151] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-[#374151] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-[#374151] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#DBDBDB] shadow-lg transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-['Inter'] font-medium text-[15px] text-[#374151] hover:text-[#00A63E] py-3 px-3 rounded-lg hover:bg-[#f0faf4] transition-colors"
          >
            Home
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-['Inter'] font-medium text-[15px] text-[#374151] hover:text-[#00A63E] py-3 px-3 rounded-lg hover:bg-[#f0faf4] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <button
              onClick={() => { setMenuOpen(false); onOpenModal?.(); }}
              className="w-full py-3 rounded-xl bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] text-white font-['Inter'] font-semibold text-[15px] shadow-md"
            >
              Request Hospital Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
