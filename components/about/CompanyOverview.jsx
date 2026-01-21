export default function CompanyOverview() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-3xl font-semibold text-brand-navy mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Saltstone Overseas is an international trading company dealing in
              coal, salt, grains, and stone & mineral products. Our primary
              strength lies in coal and salt trading for industrial and bulk
              buyers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a strong global sourcing network, transparent trade practices,
              and dependable logistics, we deliver consistent commodity solutions
              across borders.
            </p>
          </div>

          <div className="h-80 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
            Commodity Trading Operations
          </div>

        </div>

      </div>
    </section>
  );
}
