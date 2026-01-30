export default function WhatWeDo() {
  return (
    <section className="relative py-15">
      {/* Floating Container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* <div className="bg-gray-100/95 rounded-[40px] px-8 md:px-16 py-20 shadow-sm"> */}
        {/* <div className="bg-[#eceff1] rounded-[40px] px-8 md:px-16 py-20 shadow-[20px_20px_80px_rgba(0,0,0,0.59)] border border-black/10"> */}
        <div className="bg-[#eceff1] rounded-[40px] px-8 md:px-16 py-20 shadow-[0_30px_80px_rgba(0,0,0,0.16)] border border-black/10">
        
          {/* Section Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-wide">
              WHAT WE DO
            </h2>
            <div className="w-20 h-1 bg-brand-navy mx-auto mt-4 mb-6" />
            <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
              We specialize in global sourcing and trading of essential commodities,
              with a primary focus on coal and salt for industrial and
              international markets.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
            {products.map((item, index) => (
              <div
                key={item.title}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium text-brand-navy mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
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
    title: "Coal",
    description: "High-quality imported coal for industrial and bulk usage.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B2A3F" strokeWidth="1.5">
        <path d="M3 21h18M5 21V9l7-6 7 6v12" />
      </svg>
    ),
  },
  {
    title: "Salt",
    description: "Industrial, iodized, pink and black salt varieties.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B2A3F" strokeWidth="1.5">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M7 7V5h10v2" />
      </svg>
    ),
  },
  {
    title: "Grains",
    description: "Export-quality grains supplied to global markets.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B2A3F" strokeWidth="1.5">
        <path d="M12 2v20M7 7c5 2 5 8 0 10M17 7c-5 2-5 8 0 10" />
      </svg>
    ),
  },
  {
    title: "Stone & Minerals",
    description: "Natural stone and minerals for construction industries.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B2A3F" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polygon points="2 7 2 17 12 22 12 12 2 7" />
        <polygon points="22 7 22 17 12 22 12 12 22 7" />
      </svg>
    ),
  },
];
