export default function WhyChooseAndGlobal() {
  return (
    <section className="w-full bg-[#eceff1]">

      {/* WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
            Why Choose Saltstone Overseas
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
            A trusted global commodity trading partner specializing in coal and
            salt, delivering consistent supply backed by strong logistics and
            international trade expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((item, index) => (
            <div
              key={item.title}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 flex items-center justify-center text-brand-navy">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-brand-navy mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DIVIDER (optional subtle separation) */}
      <div className="h-px bg-black/10 max-w-6xl mx-auto" />

      {/* GLOBAL PRESENCE */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
            Our Global Presence
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
            Supplying coal, salt, grains, and minerals to international markets
            with reliable logistics and compliance-driven trade operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
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

          {/* RIGHT */}
          <div className="bg-white/80 rounded-3xl p-10 border border-black/5 shadow-sm">
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



const features = [
  {
    title: "Coal & Salt Specialists",
    description: "Primary focus on coal and salt trading for industrial and bulk buyers.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-50 h-50" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 44c6-8 12-12 22-12s16 4 22 12" />
        <path d="M16 44l6-8 6 8 6-8 6 8" />
        <circle cx="44" cy="26" r="2" />
        <circle cx="48" cy="30" r="2" />
        <circle cx="40" cy="30" r="2" />
      </svg>
    ),
  },
  {
    title: "Global Sourcing Network",
    description: "Strong supplier relationships across international commodity markets.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="32" cy="32" r="22" />
        <path d="M10 32h44M32 10c6 8 6 36 0 44M32 10c-6 8-6 36 0 44" />
        <path d="M42 20l6 6-6 6" />
        <path d="M22 44l-6-6 6-6" />
      </svg>
    ),
  },
  {
    title: "Bulk & Custom Supply",
    description: "Flexible quantities, grades, and packaging tailored to buyer needs.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10h20l-4 6H26l-4-6z" />
        <path d="M20 16h24l4 34H16l4-34z" />
        <path d="M24 30h16" />
      </svg>
    ),
  }
  ,
  {
    title: "Reliable Logistics",
    description: "End-to-end import–export handling with documentation support.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="22" width="36" height="18" rx="2" />
        <path d="M40 28h10l6 8v4H40v-12z" />
        <circle cx="16" cy="44" r="3" />
        <circle cx="44" cy="44" r="3" />
      </svg>
    ),
  },
];
