export default function OperationsFlow() {
  return (
    <section className="py-10 bg-transparent px-0">

      <div className="w-full">

        {/* Floating Container */}
        {/* <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl px-10 py-16"> */}
        <div className="bg-[#eceff1] backdrop-blur-md shadow-xl px-6 md:px-16 py-30">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
              Our Operational Workflow
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              A structured and transparent process ensuring efficiency,
              compliance, and reliability at every stage.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center relative text-brand-navy">

                {/* SVG Icon */}
                <div className="flex justify-center mb-4">
                  {stepIcons[index]}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

const steps = [
  {
    title: "Market Analysis",
    description: "Understanding buyer requirements and global market conditions.",
  },
  {
    title: "Supplier Sourcing",
    description: "Identifying reliable coal, salt, and commodity suppliers worldwide.",
  },
  {
    title: "Quality & Compliance",
    description: "Ensuring specifications, inspections, and regulatory standards.",
  },
  {
    title: "Logistics Planning",
    description: "Coordinating transport, packaging, and shipment schedules.",
  },
  {
    title: "Delivery & Support",
    description: "Timely delivery with post-shipment coordination and support.",
  },
];

const stepIcons = [
  (
    <svg key="market" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 3v18h18" />
      <path d="M7 14l3-3 4 4 5-6" />
    </svg>
  ),
  (
    <svg key="supplier" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3" />
      <path d="M4 21c1-4 6-6 8-6s7 2 8 6" />
    </svg>
  ),
  (
    <svg key="quality" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  (
    <svg key="logistics" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="1" y="6" width="15" height="10" rx="2" />
      <path d="M16 9h4l3 3v4h-7z" />
      <circle cx="5.5" cy="18" r="1.5" />
      <circle cx="18.5" cy="18" r="1.5" />
    </svg>
  ),
  (
    <svg key="delivery" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18" />
      <path d="M5 10l7-7 7 7" />
      <path d="M5 14l7 7 7-7" />
    </svg>
  ),
];