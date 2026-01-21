import Link from "next/link";

export default function ProductsPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-brand-navy">
            Our Products
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            We trade and supply a wide range of commodities with a strong focus
            on coal and salt, serving industrial and international markets.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-gray-200 p-6
                         hover:shadow-xl hover:-translate-y-2 transition bg-white"
            >
              <div className="h-40 mb-4 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                Image Placeholder
              </div>

              <h3 className="text-lg font-semibold text-brand-navy mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

const products = [
  {
    title: "Coal",
    description: "High-quality imported coal for industrial and commercial use.",
    href: "/products/coal",
  },
  {
    title: "Salt",
    description: "Industrial, iodized, pink, and black salt with bulk options.",
    href: "/products/salt",
  },
  {
    title: "Grains",
    description: "Export-quality grains meeting international standards.",
    href: "/products/grains",
  },
  {
    title: "Stone & Minerals",
    description: "Natural stone and mineral products for global markets.",
    href: "/products/stone",
  },
];
