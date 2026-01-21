import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner With a Trusted Stone Exporter
        </h2>

        <p className="max-w-2xl mx-auto text-white/80 mb-8">
          Connect with Saltstone Overseas today to discuss your stone
          requirements and export needs.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center
                     rounded-full bg-white text-brand-navy
                     px-8 py-3 font-medium transition
                     hover:bg-gray-100"
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
}
