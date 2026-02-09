export default function AboutCompany() {
  return (
    <section className="w-full pt-24 pb-10 bg-white">
      <div className="px-8 md:px-20">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">

            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68]">
              Our Story And Global Presence
            </h2>

            <p>
              SaltStone Overseas Private Limited is a globally focused trading and 
              export company with a strong legacy in the salt and commodities industry. 
              Established in 2002 and strengthened for international operations in 2014, 
              we specialize in sourcing, processing, and supplying high-quality salt 
              and allied products to domestic and global markets.
            </p>

            <p>
              With decades of hands-on industry experience, we have built a reputation 
              for consistent quality, ethical business practices, and dependable 
              supply chains backed by deep market understanding and reliable logistics.
            </p>

            <p>
              We deal in Industrial Salt, Edible Salt, Black Salt, Pink Salt, and 
              selected agricultural commodities. Under our Indian consumer brand 
              <span className="font-semibold text-[#1d3e68]"> “Tirth Salt”</span>, 
              we serve the domestic market with safe and hygienic products.
            </p>

          </div>

          {/* Right Highlight Block */}
          <div className="bg-[#f4f7fa] p-12 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-[#1d3e68] mb-6">
              Our Mission
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              To deliver purity, reliability, and value across borders. Every shipment 
              reflects our commitment to quality control, timely delivery, regulatory 
              compliance, and long-term global partnerships.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
