import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-brand-navy">
            TIRTH Salt Products
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
            <strong className="text-brand-navy">TIRTH</strong> is our dedicated
            salt brand, offering high-quality salt products for industrial,
            edible, and specialized applications. Our salt is supplied with
            strict quality standards and customized packaging options.
          </p>
        </div>

        {/* Brand Highlight */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-brand-navy mb-4">
              About TIRTH
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              TIRTH salt products are sourced and processed to meet the demands
              of both domestic and international markets. We cater to industries
              such as food processing, chemicals, infrastructure, and FMCG.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Available in bulk and customized packaging, our salt products are
              known for purity, consistency, and reliable supply.
            </p>
          </div>

          <div className="relative h-72 rounded-2xl bg-gray-200 flex items-center justify-center">
            <div className="relative w-full h-full p-10">
              <Image
                src="/product/tirth.jpeg"
                alt="TIRTH Salt"
                fill
                className="object-contain scale-95"
              />
            </div>
          </div>

        </div>

        {/* Salt Variants */}
        <div>
          <h2 className="text-3xl font-semibold text-brand-navy text-center mb-14">
            Our Salt Variants
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {saltVariants.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="
                  group rounded-2xl border border-gray-200 bg-white/90
                  p-6 transition-all duration-300
                  hover:shadow-xl hover:-translate-y-2
                "
              >
                <div className="h-36 mb-4 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                  {item.imageText}
                </div>

                <h3 className="text-lg font-semibold text-brand-navy mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const saltVariants = [
  {
    title: "Industrial Salt",
    description:
      "High-purity salt suitable for chemical, infrastructure, and industrial applications.",
    href: "/products/salt/industrial",
    imageText: "Industrial Salt",
  },
  {
    title: "Iodized Salt",
    description:
      "Refined iodized salt meeting food-grade and health standards.",
    href: "/products/salt/iodized",
    imageText: "Iodized Salt",
  },
  {
    title: "Pink Salt",
    description:
      "Natural pink salt supplied for culinary, wellness, and specialty use.",
    href: "/products/salt/pink",
    imageText: "Pink Salt",
  },
  {
    title: "Black Salt",
    description:
      "Traditional black salt used in food processing and seasoning.",
    href: "/products/salt/black",
    imageText: "Black Salt",
  },
];
