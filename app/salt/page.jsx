import OperationsCTA from "@/components/operations/OperationsCTA";
import Image from "next/image";

export default function SaltPage() {
  return (<>
    <div className="mb-12">

      {/* Hero Section */}
      <section
        className="relative min-h-[350px] bg-cover bg-center bg-no-repeat flex items-end"
        style={{ backgroundImage: "url('/salt/salt-banner.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-6 w-full pb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Salt Export And Trading
          </h1>
        </div>
      </section>

      <section className="relative pb-0">

        <div className="bg-[#eceff1] shadow-[0_25px_60px_rgba(0,0,0,0.08)] py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center">

              {/* Left Side */}
              <div className="text-center md:text-right pr-20">
                <h2 className="text-4xl md:text-4xl font-bold text-[#1d3e68] leading-snug">
                  Global Salt Sourcing <br/> Export Excellence
                </h2>
              </div>

              {/* Center Divider */}
              <div className="hidden md:block w-px h-32 bg-[#1d3e68]/30"></div>

              {/* Right Side */}
              <div className="pl-20 text-center md:text-left mt-6 md:mt-0 max-w-lg">
                <p className="text-gray-600 text-md leading-relaxed">
                  SaltStone Overseas is a leading supplier of premium grade industrial and edible salt, trusted by global buyers for consistent quality and reliable bulk exports.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Salt Product Portfolio */}
      {/* <section className="pt-30 pb-10 bg-[#eceff1]">
        <div className="relative h-[500px] w-full overflow-hidden">

          <Image
            src="/salt/saltposter.jpg"
            alt="Salt Product Portfolio"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-0 left-0 w-[80%] bg-white/40 backdrop-blur-md shadow-xl rounded-tr-xl p-2 border-t border-r border-[#1d3e68]/90">
            <div className="group">

              <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] cursor-pointer">
                Salt Product Portfolio
              </h2>
              <div
                className="
            opacity-0 max-h-0 overflow-hidden
            transition-all duration-500 ease-in-out
            group-hover:opacity-100
            group-hover:max-h-[1000px]
            mt-6
          "
              >
                <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">

                  <p>
                    We deal in a wide range of salt products to meet industrial, commercial, and consumer-grade requirements:
                  </p>

                  <p><strong>Industrial Raw Salt</strong><br />
                    Suitable for chemical, textile, detergent, and other industrial applications.</p>

                  <p><strong>Free-Flow Non-Iodised Salt</strong><br />
                    Processed salt designed for industrial and food-processing usage where iodine addition is not required.</p>

                  <p><strong>Free-Flow Iodised Salt</strong><br />
                    Consumer and institutional-grade iodised salt, processed to ensure flowability, uniformity, and compliance with applicable standards.</p>

                  <p><strong>Black Salt</strong><br />
                    Processed and supplied for food, culinary, and specialty applications, including domestic and export markets.</p>

                  <p><strong>Pink Salt</strong><br />
                    Natural pink salt supplied in various grades and forms for culinary, wellness, and specialty market requirements.</p>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section> */}

      <section className="pt-20 pb-10 bg-[#eceff1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] mb-10">
            Salt Product Portfolio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                img: "/salt/non_salt.jpg",
                title: "Non-Iodised Salt",
                desc: "Processed salt designed for industrial and food-processing usage where iodine addition is not required."
              },
              {
                img: "/salt/iodide_salt.jpg",
                title: "Iodised Salt",
                desc: "Consumer and institutional-grade iodised salt processed for uniformity, flowability, and compliance."
              },
              {
                img: "/salt/pink_salt.jpg",
                title: "Pink Salt",
                desc: "Natural pink salt supplied in various grades and forms for culinary, wellness, and specialty markets."
              },
              {
                img: "/salt/black_salt.png",
                title: "Black Salt",
                desc: "Mineral-rich processed salt used for food, gourmet, and specialty applications."
              }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-[#1d3e68] mb-3 text-lg">
                    {product.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* Domestic Supply & Global Exports */}
      <section className="py-20 bg-[#eceff1]">
        <div className="relative h-[550px] w-full overflow-hidden">

          {/* Background Image */}
          <Image
            src="/salt/salt-3.jpg"
            alt="Domestic Supply & Exports"
            fill
            className="object-cover"
          />

          {/* Optional subtle overlay for readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Floating Content Card (Right Side) */}
          <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-10 w-[500px] shadow-xl rounded-xl">

            <h2 className="text-2xl md:text-3xl font-semibold text-[#1d3e68] mb-6">
              Domestic Supply And Global Exports
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 text-[15px]">
              SaltStone Overseas supplies salt products across India through an organized domestic distribution network. In parallel, we export selected salt products to international markets, catering to bulk buyers, distributors, and trade partners.
            </p>

            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-[15px]">
              <li>Consistent quality across shipments</li>
              <li>Reliable delivery timelines</li>
              <li>Compliance with domestic and export regulations</li>
            </ul>

          </div>

        </div>
      </section>

      {/* Customization & Packaging - Card Section */}
      <section className="pt-3 pb-20 bg-[#eceff1]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#1d3e68] mb-6">
                Custom And Processing
              </h3>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li>• Grade and purity adjustments</li>
                <li>• Free-flow processing as required</li>
                <li>• Particle size and moisture control</li>
                <li>• Application-specific specifications</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#1d3e68] mb-6">
                Packaging Solutions
              </h3>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li>• Bulk packaging</li>
                <li>• Industrial-grade bags</li>
                <li>• Consumer and institutional packs</li>
                <li>• Export-ready packaging as per buyer specifications</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#1d3e68] mb-6">
                Reliable Supply Execution
              </h3>
              <ul className="space-y-3 text-gray-600 leading-relaxed">
                <li>• Quality-focused sourcing and processing</li>
                <li>• Organized logistics and dispatch planning</li>
                <li>• Structured documentation for domestic and export trade</li>
                <li>• Long-term, relationship-driven supply approach</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


    </div>
    <OperationsCTA />
  </>
  );
}
