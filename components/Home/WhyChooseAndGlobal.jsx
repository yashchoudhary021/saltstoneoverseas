import Image from "next/image";

export default function WhyChooseAndGlobal() {
  return (
    <section className="w-full bg-[#eceff1]">
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="text-center mb-16">
          <p className="mt-2 max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
            A trusted global commodity trading partner specializing in coal and
            salt, delivering consistent supply backed by strong logistics and
            international trade expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={item.title}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              {/* Image */}
               <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#1d3e68] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-black/10 max-w-6xl mx-auto" />
    </section>
  );
}

const features = [
  {
    title: "Coal And Salt Trade Expertise",
    description:
      "Specialized expertise in coal and salt trading, serving industrial and bulk buyers through structured sourcing, quality-focused selection, and dependable supply execution.",
    image: "global/coal_salt.jpg",
  },
  {
    title: "Global Sourcing Network",
    description:
      "Established sourcing relationships across international commodity markets, enabling access to consistent quality materials aligned with market and operational requirements.",
    image: "global/global_sourcing.jpg",
  },
  {
    title: "Bulk And Customized Supply Solutions",
    description:
      "Capability to supply bulk volumes with flexibility in grades, specifications, screening, and packaging, tailored to the specific needs of industrial and trade partners.",
    image: "global/bulk_custom.jpg",
  },
  {
    title: "Reliable Logistics And Trade Execution",
    description:
      "End-to-end logistics coordination supported by structured documentation, ensuring smooth domestic distribution and international trade execution.",
    image: "global/relibal.jpg",
  },
];