import Image from "next/image";
export default function CompanyOverview() {
  return (
    // <section className="relative py-20 bg-white">
    <section className="relative pt-5 pb-20 bg-transparent">

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

          <div className="relative h-80 overflow-hidden rounded-2xl group">
            <Image
              src="/company.jpg"
              alt="Saltstone Overseas Corporate Operations"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
          </div>


        </div>

      </div>
    </section>
  );
}
