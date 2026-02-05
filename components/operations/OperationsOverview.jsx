import Image from "next/image";

const operations = [
  {
    title: "Salt Export and Trading Operations",
    description:
      "We manage bulk salt trading across industrial, edible, and specialty segments with structured sourcing and strict quality control systems. Our portfolio includes iodised, non-iodised, industrial-grade, pink, and black salts tailored to diverse market requirements. From customized packaging solutions to containerized export logistics, we ensure seamless coordination at every stage of the supply chain. Our established supplier network and port-handling expertise enable efficient domestic distribution and global shipment. With a strong focus on consistency, compliance, and long-term partnerships, we deliver reliable salt solutions to buyers across multiple industries.",
    image: "/operations/salt.jpg",
  },
  {
    title: "Coal Supply Operations",
    description:
      "Our coal supply operations focus on sourcing and delivering high-grade thermal and industrial coal for power plants, manufacturing units, and heavy industries. We conduct thorough supplier verification and quality inspections to ensure optimal GCV standards and performance efficiency. Our logistics team coordinates inland transport, port handling, and timely dispatch to maintain uninterrupted supply cycles. With experience in bulk handling and documentation processes, we ensure smooth import and domestic distribution operations. Through structured procurement and operational planning, we provide dependable coal solutions that support energy and industrial demands.",
    image: "/operations/coal.jpg",
  },
  {
    title: "Grains Export Operations",
    description:
      "Operating from Rajasthan’s leading agricultural belt, we specialize in structured procurement and export of premium-quality grains and seed spices. Our export portfolio includes guar gum, bajra (pearl millet), high-protein wheat varieties such as Sharbati, and select spices like cumin, coriander, and fenugreek. Each batch undergoes systematic grading, cleaning, and packaging to meet international food safety and quality standards. We manage documentation, certification, and global shipping compliance to ensure smooth cross-border trade operations. With strong farmer networks and export partnerships, we maintain consistency in quality, quantity, and delivery timelines.",
    image: "/operations/grains.jpg",
  },
  {
    title: "Stone & Mineral Export Operations",
    description:
      "We facilitate sourcing and export of natural stones and mineral materials for construction, infrastructure, and industrial applications. Our operations include marble, granite, and other processed stone products tailored to project specifications. We coordinate quarry sourcing, processing supervision, quality inspection, and packaging to ensure durability and finish standards. Export documentation, container loading, and logistics planning are managed with precision to ensure safe international transit. Through strategic partnerships and structured operational oversight, we deliver stone and mineral solutions that meet global construction and infrastructure requirements.",
    image: "/operations/stone.jpg",
  },
];


export default function OperationsOverview() {
  return (
    <section className="pb-15 pt-10">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {operations.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={item.title}
              className="grid lg:grid-cols-2 gap-20 items-center"
            >
              {/* Image */}
              <div className={`${isReverse ? "lg:order-2" : ""}`}>
                <div className="relative h-[70vh] min-h-[500px] rounded-3xl overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${isReverse ? "lg:order-1" : ""}`}>
                <h2 className="text-4xl md:text-4xl font-bold text-[#1d3e68] leading-tight mb-6">
                  {item.title}
                </h2>

                <p className="text-m md:text-m text-gray-600 leading-relaxed">
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
