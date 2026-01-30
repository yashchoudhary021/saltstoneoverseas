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
          <ul className="space-y-3 text-sm text-gray-400">

            <li className="flex items-start gap-3">
              <LocationIcon />
              <span>India</span>
            </li>

            <li className="flex items-start gap-3">
              <MailIcon />
              <a
                href="mailto:info@saltstoneoverseas.com"
                className="hover:text-white transition"
              >
                info@saltstoneoverseas.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <PhoneIcon />
              <a
                href="tel:+918290547778"
                className="hover:text-white transition"
              >
                +91 82905 47778
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

function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="text-gray-400 mt-[2px]"
    >
      <path d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="text-gray-400 mt-[2px]"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="text-gray-400 mt-[2px]"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1l-1.3 1.3a16 16 0 0 0 6.9 6.9l1.3-1.3a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
