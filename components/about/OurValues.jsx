export default function OurValues() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-brand-navy">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-gray-200 p-6 text-center
                         hover:shadow-lg transition"
            >
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const values = [
  {
    title: "Quality",
    description: "Uncompromising quality in every product we deliver.",
    icon: "✔️",
  },
  {
    title: "Integrity",
    description: "Honest business practices and transparent communication.",
    icon: "🤝",
  },
  {
    title: "Reliability",
    description: "Consistent supply and timely global deliveries.",
    icon: "⏱️",
  },
  {
    title: "Sustainability",
    description: "Responsible sourcing with environmental awareness.",
    icon: "🌱",
  },
];
