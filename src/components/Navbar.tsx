"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: "/digital-prescription", label: "Prescription Pad" },
  { href: "/vaidya-mode", label: "Vaidya Mode" },
  { href: "/case-sheets", label: "Case Sheets" },
  { href: "/billing", label: "Billing" },
  { href: "/hospital-settings", label: "Features" },
  { href: "/pricing", label: "Pricing" },
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
      <div className="container-1280 w-full py-[14px] flex justify-between items-center px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <Image
            src="/images/Logo.svg"
            alt="AyuPlus Logo"
            width={123}
            height={42}
            className="rounded-xl"
            style={{ width: "clamp(88px, 12vw, 123px)", height: "auto" }}
          />
        </Link>

        {/* Desktop nav — only on xl (1280px+) */}
        <div className="hidden xl:flex items-center gap-x-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#374151] hover:text-[#00A63E] transition-colors font-medium text-[13px] whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: CTA (tablet+) + hamburger (under xl) */}
        <div className="flex items-center gap-3">
          {/* CTA — visible on tablet (md) and desktop, hidden on mobile (< 480px) */}
          <button
            onClick={onOpenModal}
            className="hidden sm:inline-flex px-[14px] py-[8px] rounded-md bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] text-white font-medium text-[13px] transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Request Demo
          </button>

          {/* Hamburger — under 1280px */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="xl:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-[#374151] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-[#374151] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-[#374151] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Dropdown menu — under xl */}
      <div
        className={`xl:hidden absolute top-full left-0 right-0 bg-white border-b border-[#DBDBDB] shadow-lg transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-['Inter'] font-medium text-[16px] text-[#374151] hover:text-[#00A63E] hover:bg-[#f0faf4] transition-colors rounded-lg"
            style={{ padding: "14px 12px", minHeight: "48px", display: "flex", alignItems: "center" }}
          >
            Home
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-['Inter'] font-medium text-[16px] text-[#374151] hover:text-[#00A63E] hover:bg-[#f0faf4] transition-colors rounded-lg"
              style={{ padding: "14px 12px", minHeight: "48px", display: "flex", alignItems: "center" }}
            >
              {link.label}
            </Link>
          ))}
          {/* CTA inside menu — visible only on mobile (< sm) */}
          <div className="pt-3 pb-1 sm:hidden">
            <button
              onClick={() => { setMenuOpen(false); onOpenModal?.(); }}
              className="w-full py-3 rounded-xl bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] text-white font-['Inter'] font-semibold text-[15px] shadow-md"
              style={{ minHeight: "48px" }}
            >
              Book Free Demo →
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
