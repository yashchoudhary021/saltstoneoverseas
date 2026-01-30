import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Floating CTA Container */}
        <div
          className="
            rounded-[40px]
            px-8 md:px-16 py-20
            text-center
            bg-gradient-to-br from-brand-navy to-[#0a2233]
            shadow-[0_30px_80px_rgba(0,0,0,0.25)]
          "
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Looking for Reliable Exporters?
          </h2>

          <p className="max-w-2xl mx-auto text-white/80 mb-10 text-base md:text-lg">
            Get in touch with our export team today for customized solutions
            and competitive pricing.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              rounded-full bg-white text-brand-navy
              px-10 py-3 font-semibold
              transition-all duration-300
              hover:bg-gray-100 hover:scale-105
            "
          >
            Request a Quote
          </Link>
        </div>

      </div>
    </section>
  );
}
