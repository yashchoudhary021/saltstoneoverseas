export default function WhatWeDo() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
            What We Do
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            We specialize in global sourcing and trading of essential commodities,
            with a primary focus on coal and salt, serving industrial and
            international markets.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-brand-navy mb-4">
              Reliable Commodity Trading for Global Markets
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Saltstone Overseas is a global import–export company dealing in
              coal, salt, grains, and stone products. With strong supplier
              networks and export expertise, we ensure consistent quality,
              competitive pricing, and timely delivery worldwide.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Primary focus on coal & salt supply</li>
              <li>✔ Multiple salt varieties & bulk options</li>
              <li>✔ Global sourcing & export compliance</li>
              <li>✔ Reliable logistics & documentation</li>
            </ul>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-200 p-6 transition hover:shadow-xl hover:-translate-y-1 bg-white"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy text-xl">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-brand-navy mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

const products = [
  {
    title: "Coal (Primary Focus)",
    description:
      "High-quality imported coal sourced from trusted global suppliers for industrial use.",
    icon: "🔥",
  },
  {
    title: "Salt (Multiple Varieties)",
    description:
      "Industrial, iodized, pink, and black salt with bulk and customized packaging.",
    icon: "🧂",
  },
  {
    title: "Grains",
    description:
      "Supplying quality grains to international markets with consistency and compliance.",
    icon: "🌾",
  },
  {
    title: "Stone & Minerals",
    description:
      "Marble, granite, and natural stone products for global construction markets.",
    icon: "🪨",
  },
];
