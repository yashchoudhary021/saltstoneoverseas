import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">

      {/* Accent top line */}
      <div className="h-1 bg-[var(--brand-sky)]" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4 items-start">

        {/* Logo */}
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="inline-block">
            <Image
              src="/logowithbg.png"
              alt="Saltstone Overseas"
              width={150}
              height={70}
              className="w-[150px]"
            />
          </Link>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-medium mb-4">Products & Commodities</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/products/coal" className="hover:text-white transition">
                Coal
              </Link>
            </li>
            <li>
              <Link href="/products/salt" className="hover:text-white transition">
                Salt
              </Link>
            </li>
            <li>
              <Link href="/products/grains" className="hover:text-white transition">
                Grains
              </Link>
            </li>
            <li>
              <Link href="/products/stone" className="hover:text-white transition">
                Stone & Minerals
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Saltstone
              </Link>
            </li>
            <li>
              <Link href="/our-operations" className="hover:text-white transition">
                Our Operations
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white transition">
                Products & Commodities
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 India</li>
            <li>
              📧{" "}
              <a
                href="mailto:info@saltstoneoverseas.com"
                className="hover:text-white transition"
              >
                info@saltstoneoverseas.com
              </a>
            </li>
            <li>
              📞{" "}
              <a
                href="tel:+918290547778"
                className="hover:text-white transition"
              >
                +91 8290547778
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Saltstone Overseas Pvt Ltd. All rights reserved.</p>

          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
