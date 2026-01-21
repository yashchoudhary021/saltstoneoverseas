export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
            Why Choose Saltstone Overseas
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            A trusted global commodity trading partner specializing in coal and
            salt, delivering consistent supply backed by strong logistics and
            international trade expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl border border-gray-200 p-6
                         hover:shadow-lg transition"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
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
    icon: "🔥",
  },
  {
    title: "Global Sourcing Network",
    description:
      "Strong supplier relationships across international commodity markets.",
    icon: "🌍",
  },
  {
    title: "Bulk & Custom Supply",
    description:
      "Flexible quantities, grades, and packaging tailored to buyer needs.",
    icon: "⚙️",
  },
  {
    title: "Reliable Logistics",
    description:
      "End-to-end import–export handling with documentation support.",
    icon: "🚢",
  },
];
