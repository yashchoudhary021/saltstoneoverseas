"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "./constants/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-300 ${
        isSticky ? "top-0 w-full" : "top-6 w-full"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-300 ${
          isSticky ? "max-w-full px-0" : "max-w-7xl px-2"
        }`}
      >
        <div
          className={`relative bg-white/60 backdrop-blur-md border-b border-black/5 shadow-[0_22px_55px_rgba(0,0,0,0.2)] transition-all duration-300 ${
            isSticky ? "rounded-none" : "rounded-2xl"
          } px-6 lg:px-10`}
        >
          <div className="max-w-6xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-end">
            
            {/* Logo */}
            <Link
              href="/"
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2"
            >
              <Image
                src="/logowithbg.png"
                alt="Saltstone Overseas"
                width={isSticky ? 100 : 150}
                height={isSticky ? 95 : 95}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative font-semibold tracking-wide text-[#1d3e68] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[#1d3e68] after:transition-all hover:after:w-full"
                >
                  <h4>{item.label}</h4>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#1d3e68] text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-black/5">
            <nav className="flex flex-col px-4 py-4 gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#1d3e68] font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// old header code without sticky behavior
// "use client"; import { useState } from "react"; import Link from "next/link"; import Image from "next/image"; import { NAV_ITEMS } from "./constants/navigation"; export default function Header() { const [menuOpen, setMenuOpen] = useState(false); return ( <header className="w-full fixed top-6 z-50 overflow-visible"> <div className="max-w-7xl mx-auto px-2"> <div className="relative bg-white/60 backdrop-blur-md border-b border-black/5 rounded-2xl shadow-[0_22px_55px_rgba(0,0,0,0.2)] overflow-visible px-6 lg:px-10"> <div className="max-w-6xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-end"> {/* Logo (overlapping) */} <Link href="/" className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 overflow-visible" > <Image src="/logowithbg.png" alt="Saltstone Overseas" width={150} height={95} priority /> </Link> {/* Desktop Nav */} <nav className="hidden md:flex gap-10"> {NAV_ITEMS.map((item) => ( <Link key={item.href} href={item.href} className="relative font-semibold text-m tracking-wide text-[color:#1d3e68] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[color:#1d3e68] after:transition-all hover:after:w-full"> {item.label} </Link> ))} </nav> {/* Mobile Menu Button */} <button className="md:hidden text-[color:#1d3e68] text-2xl" onClick={() => setMenuOpen(!menuOpen)} > ☰ </button> </div> </div> {/* Mobile Menu */} {menuOpen && ( <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-black/5"> <nav className="flex flex-col px-4 py-4 gap-4"> {NAV_ITEMS.map((item) => ( <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-[color:#1d3e68] font-medium" > {item.label} </Link> ))} </nav> </div> )} </div> </header> ); }