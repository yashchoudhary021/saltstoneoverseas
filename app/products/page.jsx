import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mt-5 mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-brand-navy">
            TIRTH SALT
          </h1>
        </div>

        {/* Brand Highlight */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-brand-navy mb-6">
              About TIRTH
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>TIRTH</strong> is our upcoming salt brand currently under development.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We are working on introducing a simple and reliable range of
              iodised, pink, and black salt for both domestic and international markets.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The brand will be officially launched soon.
            </p>

            <p className="text-gray-700 leading-relaxed">
              For any inquiries, please feel free to contact us.
            </p>
          </div>


          <div className="relative h-72 rounded-2xl bg-gray-200 flex items-center justify-center">
            <div className="relative w-full h-full p-10">
              <Image
                src="/product/tirth.jpeg"
                alt="TIRTH Salt"
                fill
                className="object-contain scale-110"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
