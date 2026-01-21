import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        // <footer className="bg-black text-gray-500">
        // <footer className="bg-[var(--brand-navy)] text-gray-300">
        <footer className="bg-[#111827] text-gray-300">

            {/* Accent top line */}
            {/* <div className="h-1 bg-brand-sky" /> */}
            <div className="h-1 bg-[var(--brand-sky)]" />
            {/* <div className="h-px bg-white/10" /> */}

            {/* Main footer */}
            {/* <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4"> */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4 items-start">

                {/* About */}
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
                    <h4 className="text-white font-medium mb-4">Products</h4>
                    <ul className="space-y-2 text-sm">
                        {["Coal", "Salt", "Grains", "Stone & Minerals"].map((item) => (
                            <li key={item}>
                                <Link href="#" className="hover:text-white transition">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-white font-medium mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        {["About Us", "Why Choose Us", "Certifications", "Contact"].map(
                            (item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition">
                                        {item}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-medium mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>📍 India</li>
                        <li>📧 info@saltstoneoverseas.com</li>
                        <li>📞 +91 8290547778</li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>
                        © 2026 Saltstone Overseas Pvt Ltd. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
