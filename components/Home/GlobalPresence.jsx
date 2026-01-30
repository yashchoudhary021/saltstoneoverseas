export default function GlobalPresence() {
  return (
    <section className="relative py-15">
      <div className="max-w-7xl mx-auto px-6">

        {/* Floating Container */}
        <div
          className="
            bg-[#eceff1]
            rounded-[40px]
            px-8 md:px-16 py-20
            shadow-[0_30px_80px_rgba(0,0,0,0.16)]
            border border-black/10
          "
        >
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
              Our Global Presence
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
              Supplying coal, salt, grains, and minerals to international markets
              with reliable logistics and compliance-driven trade operations.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                Serving Global Industrial Markets
              </h3>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Saltstone Overseas operates across multiple countries, supporting
                industrial buyers with consistent commodity supply, transparent
                pricing, and dependable shipping schedules.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <Stat number="15+" label="Countries" />
                <Stat number="500+" label="Shipments" />
                <Stat number="10+" label="Years Experience" />
              </div>
            </div>

            {/* Right */}
            <div
              className="
                bg-white/80
                rounded-3xl
                p-10
                border border-black/5
                shadow-sm
              "
            >
              <h4 className="text-lg font-semibold text-brand-navy mb-8">
                Export Markets
              </h4>

              <ul className="grid grid-cols-2 gap-y-4 text-gray-700 text-sm">
                {countries.map((c) => (
                  <li key={c} className="flex items-center gap-3">
                    <CheckIcon />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-3xl md:text-4xl font-semibold text-brand-navy">
        {number}
      </p>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  );
}


function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-brand-navy flex-shrink-0"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}


const countries = [
  "India",
  "United Arab Emirates",
  "Indonesia",
  "Vietnam",
  "Bangladesh",
  "United Kingdom",
  "Africa",
  "Europe",
];
