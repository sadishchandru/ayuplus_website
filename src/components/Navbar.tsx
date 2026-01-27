"use client";

import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#DBDBDB] flex justify-center transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="container-1280 w-full py-[20px] flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              width={123}
              height={42}
              className="rounded-xl w-[90px] md:w-full h-auto"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-8">
          <Link href="#" className="hidden text-[#0A0A0A] hover:text-primary transition-colors font-[500] text-[12px] md:text-[14px] hover:scale-105 duration-200">Login</Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfuU2xfAl-tG8Y51UauZqYdeiE4wL_b1iH2g7EWRbawnhcx3A/viewform?pli=1"
            target='_blank'
            className="px-[12px] py-[6px] md:px-[16px] md:py-[8px] rounded-md bg-[linear-gradient(180deg,_#69B109_0%,_#5A9A04_100%)] text-white font-[500] text-[12px] md:text-[14px] transition-all duration-300 hover:bg-primary-hover hover:scale-105 active:scale-95 whitespace-nowrap shadow-md hover:shadow-lg"
          >
            Request Hospital Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
