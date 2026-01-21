export default function QualityProcess() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
            Our Trading & Quality Process
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            A structured, quality-driven approach ensuring reliable sourcing,
            compliance, and global delivery of coal, salt, and other commodities.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 top-[210px] w-[75%] h-[2px] bg-gradient-to-r from-transparent via-brand-navy/30 to-transparent -translate-x-1/2" />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6
                         text-center transition-all duration-300
                         hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-brand-navy/5 opacity-0
                              group-hover:opacity-100 transition pointer-events-none" />

              {/* Step Number */}
              <div className="relative z-10 w-14 h-14 mx-auto mb-4 flex items-center justify-center
                              rounded-full bg-brand-navy text-white font-semibold text-lg
                              group-hover:scale-110 transition">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-semibold text-brand-navy mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Bottom Accent */}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-navy
                               scale-x-0 group-hover:scale-x-100 origin-left
                               transition-transform duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const steps = [
  {
    title: "Global Sourcing",
    description:
      "Identifying and partnering with reliable international suppliers.",
  },
  {
    title: "Quality Verification",
    description:
      "Specification checks, inspections, and compliance validation.",
  },
  {
    title: "Contract & Compliance",
    description:
      "Trade contracts, certifications, and regulatory documentation.",
  },
  {
    title: "Packaging & Handling",
    description:
      "Bulk, bagged, or customized packaging based on commodity type.",
  },
  {
    title: "Export & Delivery",
    description:
      "Coordinated logistics ensuring timely and secure global delivery.",
  },
];
