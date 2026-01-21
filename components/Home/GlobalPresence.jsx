export default function GlobalPresence() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
            Our Global Presence
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Supplying coal, salt, grains, and minerals to international markets
            with reliable logistics and compliance-driven trade operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <div>
            <h3 className="text-2xl font-semibold text-brand-navy mb-4">
              Serving Global Industrial Markets
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Saltstone Overseas operates across multiple countries, supporting
              industrial buyers with consistent commodity supply, transparent
              pricing, and dependable shipping schedules.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <Stat number="15+" label="Countries" />
              <Stat number="500+" label="Shipments" />
              <Stat number="10+" label="Years Experience" />
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h4 className="text-lg font-semibold text-brand-navy mb-6">
              Export Markets
            </h4>

            <ul className="grid grid-cols-2 gap-y-3 text-gray-700">
              {countries.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="text-brand-navy">✔</span>
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
      <p className="text-3xl font-semibold text-brand-navy">{number}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
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
