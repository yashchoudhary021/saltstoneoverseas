export default function OperationsFlow() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
            Our Operational Workflow
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            A structured process ensuring efficiency, compliance, and consistency
            in every transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl border border-gray-200 p-6 text-center
                         hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center
                              rounded-full bg-brand-navy text-white font-semibold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const steps = [
  {
    title: "Market Analysis",
    description:
      "Understanding buyer requirements and global market conditions.",
  },
  {
    title: "Supplier Sourcing",
    description:
      "Identifying reliable coal, salt, and commodity suppliers worldwide.",
  },
  {
    title: "Quality & Compliance",
    description:
      "Ensuring specifications, inspections, and regulatory standards.",
  },
  {
    title: "Logistics Planning",
    description:
      "Coordinating transport, packaging, and shipment schedules.",
  },
  {
    title: "Delivery & Support",
    description:
      "Timely delivery with post-shipment coordination and support.",
  },
];
