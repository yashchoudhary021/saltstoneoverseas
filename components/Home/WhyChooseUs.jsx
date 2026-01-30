export default function WhyChooseUs() {
  return (
    <section className="relative py-15">
      <div className="max-w-7xl mx-auto px-6">
        {/* Floating Container */}
        <div
          className="bg-[#eceff1] rounded-[40px] px-8 md:px-16 py-20 shadow-[0_30px_80px_rgba(0,0,0,0.16)] border border-black/10"
        >
          {/* Heading */}
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

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((item, index) => (
              <div
                key={item.title}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                {/* Icon */}
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
      </div>
    </section>
  );
}

const features = [
  {
    title: "Coal & Salt Specialists",
    description:
      "Primary focus on coal and salt trading for industrial and bulk buyers.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V9l7-6 7 6v12" />
      </svg>
    ),
  },
  {
    title: "Global Sourcing Network",
    description:
      "Strong supplier relationships across international commodity markets.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" />
      </svg>
    ),
  },
  {
    title: "Bulk & Custom Supply",
    description:
      "Flexible quantities, grades, and packaging tailored to buyer needs.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M7 7V5h10v2" />
      </svg>
    ),
  },
  {
    title: "Reliable Logistics",
    description:
      "End-to-end import–export handling with documentation support.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17h13V7H3v10z" />
        <path d="M16 10h4l1 2v5h-5V10z" />
        <circle cx="7" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
    ),
  },
];
