export default function WhatWeDo() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
            What We Do
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            We specialize in global sourcing and trading of essential commodities,
            with a primary focus on coal and salt for industrial and
            international markets.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {products.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-3xl border border-gray-200
                         p-10 bg-white transition-all duration-300
                         hover:-translate-y-2 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 flex items-center justify-center
                              rounded-2xl bg-brand-navy/10 text-brand-navy text-3xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-brand-navy mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>

              {/* Bottom Accent */}
              <span
                className="absolute bottom-0 left-0 w-full h-1 bg-brand-navy
                           scale-x-0 group-hover:scale-x-100 origin-left
                           transition-transform duration-300 rounded-b-3xl"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const products = [
  {
    title: "Coal (Primary Focus)",
    description:
      "High-quality imported coal sourced from trusted international suppliers for industrial and bulk usage.",
    icon: "🔥",
  },
  {
    title: "Salt (Multiple Varieties)",
    description:
      "Industrial, iodized, pink, and black salt with flexible bulk and customized packaging options.",
    icon: "🧂",
  },
  {
    title: "Grains",
    description:
      "Export-quality grains supplied to global markets with strict compliance and quality checks.",
    icon: "🌾",
  },
  {
    title: "Stone & Minerals",
    description:
      "Marble, granite, and natural stone products supplied for construction and industrial applications.",
    icon: "🪨",
  },
];
