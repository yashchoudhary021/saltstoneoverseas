export default function QualityProcess() {
  return (
    <section className="relative py-15">
      <div className="max-w-7xl mx-auto px-6">

        {/* Floating Container */}
        <div
          className="
            bg-[#eceff1]
            rounded-[40px]
            px-8 md:px-16 py-20
            shadow-[0_30px_80px_rgba(0,0,0,0.16)]
            border border-black/10
          "
        >
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
              Our Trading & Quality Process
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
              A structured, quality-driven approach ensuring reliable sourcing,
              compliance, and global delivery of coal, salt, and other commodities.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-14">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">

                {/* Icon */}
                <div className="flex justify-center mb-5 text-brand-navy">
                  {step.icon}
                </div>

                {/* Step number */}
                <div className="text-xs font-semibold tracking-wider text-brand-navy mb-2">
                  {/* STEP {index + 1} */}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-brand-navy mb-2">
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
    title: "Global Sourcing",
    description:
      "Identifying and partnering with reliable international suppliers.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" />
      </svg>
    ),
  },
  {
    title: "Quality Verification",
    description:
      "Specification checks, inspections, and compliance validation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
      </svg>
    ),
  },
  {
    title: "Contract & Compliance",
    description:
      "Trade contracts, certifications, and regulatory documentation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
  },
  {
    title: "Packaging & Handling",
    description:
      "Bulk, bagged, or customized packaging based on commodity type.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M7 7V5h10v2" />
      </svg>
    ),
  },
  {
    title: "Export & Delivery",
    description:
      "Coordinated logistics ensuring timely and secure global delivery.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 17h13V7H3v10z" />
        <path d="M16 10h4l1 2v5h-5V10z" />
        <circle cx="7" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
    ),
  },
];
