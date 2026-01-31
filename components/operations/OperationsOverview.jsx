import Image from "next/image";

const operations = [
  {
    title: "Salt Trading Operations",
    description:
      "We handle bulk salt trading for industrial, edible, and specialized applications. Our operations ensure consistent quality, customized packaging, and reliable supply chains for domestic and international buyers.",
    image: "/operations/salt.jpg",
  },
  {
    title: "Coal Trading Operations",
    description:
      "Our coal operations focus on sourcing and supplying high-quality thermal and industrial coal. We manage supplier verification, quality checks, logistics coordination, and timely delivery to power plants and manufacturing units.",
    image: "/operations/coal.jpg",
  },
  {
    title: "Grain Export Operations",
    description:
      "Our grain export operations are centered in Rajasthan, one of India’s leading agricultural regions. We export guar gum—where Rajasthan contributes nearly 84% of India’s total production—along with bajra (pearl millet), accounting for around 30% of India’s millet output. We also supply high-protein wheat varieties such as Sharbati, and export seed spices including cumin (jeera), coriander, and fenugreek, all processed and shipped in compliance with international quality standards.",
    image: "/operations/grains.jpg",
  },
  {
    title: "Stone & Mineral Operations",
    description:
      "Saltstone Overseas facilitates stone and mineral sourcing for construction and industrial requirements, managing logistics, quality checks, and export documentation with precision.",
    image: "/operations/stone.jpg",
  },
];


export default function OperationsOverview() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 space-y-18">

        {operations.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={item.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                isReverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${isReverse ? "lg:order-2 relative h-80 overflow-hidden rounded-2xl group" : "relative h-80 overflow-hidden rounded-2xl group"}`}>
                <div className="relative h-[320px] rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${isReverse ? "lg:order-1" : ""}`}>
                <h2 className="text-3xl font-semibold text-brand-navy mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
