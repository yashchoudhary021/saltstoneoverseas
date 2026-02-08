import Image from "next/image";

export default function SaltPage() {
  return (
    <div>

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



      {/* Salt Product Portfolio */}
      <section className="pt-30 pb-10 bg-[#eceff1]">
        <div className="relative h-[550px] w-full overflow-hidden">

          {/* Background Image */}
          <Image
            src="/salt/salt-1.jpg"
            alt="Salt Product Portfolio"
            fill
            className="object-cover"
          />

          {/* Fixed Glass Card 60% Width */}
          <div className="absolute bottom-0 left-0 w-[60%] bg-white/75 backdrop-blur-md shadow-xl rounded-tr-xl p-2">
            <div className="group">

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] cursor-pointer">
                Salt Product Portfolio
              </h2>

              {/* Content Appears On Hover */}
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
          <div className="absolute right-10 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-10 w-[500px] shadow-xl rounded-xl">

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

      {/* Customization & Packaging */}
      <section className="pt-0 pb-20 bg-[#eceff1]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] mb-6">
            Customization And Processing Capabilities
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-3 mb-8">
            <li>Grade and purity adjustments</li>
            <li>Free-flow processing as required</li>
            <li>Particle size and moisture control</li>
            <li>Application-specific specifications</li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] mb-6 mt-16">
            Packaging Solutions
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-3 mb-8">
            <li>Bulk packaging</li>
            <li>Industrial-grade bags</li>
            <li>Consumer and institutional packs</li>
            <li>Export-ready packaging as per buyer specifications</li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] mb-6 mt-16">
            Reliable Supply Execution
          </h2>

          <ul className="list-disc pl-5 text-gray-600 space-y-3">
            <li>Quality-focused sourcing and processing</li>
            <li>Organized logistics and dispatch planning</li>
            <li>Structured documentation for domestic and export trade</li>
            <li>A long-term, relationship-driven supply approach</li>
          </ul>

          <p className="mt-8 text-gray-600 leading-relaxed">
            SaltStone Overseas aims to build dependable partnerships by delivering salt products that meet functional, regulatory, and commercial expectations across markets.
          </p>

        </div>
      </section>

    </div>
  );
}
