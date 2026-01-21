export default function OperationsOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          <div>
            <h2 className="text-3xl font-semibold text-brand-navy mb-4">
              How We Operate
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Saltstone Overseas operates as a global commodity trading company
              with a primary focus on coal and salt. Our operations are designed
              to ensure quality sourcing, transparent trade practices, and
              reliable delivery for industrial buyers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We manage end-to-end trade execution — from supplier selection and
              quality verification to logistics coordination and documentation.
            </p>
          </div>

          <div className="h-80 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
            Operations Image Placeholder
          </div>

        </div>

      </div>
    </section>
  );
}
