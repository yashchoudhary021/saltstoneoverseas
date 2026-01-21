"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "./constants/navigation";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <header className="fixed top-0 z-50 w-full bg-[color:var(--brand-sky)]/80 backdrop-blur-md shadow-lg">
    // <header className="fixed top-0 z-50 w-full backdrop-blur-md shadow-lg">
    <header className="fixed top-0 z-50 w-full bg-[color:var(--brand-sky)]/35 backdrop-blur-md shadow-lg">

      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        {/* <Link href="/" className="text-xl font-semibold text-white">
          Saltstone Overseas
        </Link> */}
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logowithbg.png"
            alt="Saltstone Overseas"
            width={75}
            height={50}
            priority
          />
          {/* <span className="text-lg font-semibold text-white tracking-wide">
            Saltstone Overseas
          </span> */}
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-white/90 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-sky/95 backdrop-blur-md border-t border-white/20">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/90 hover:text-white font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
