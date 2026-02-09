import Image from "next/image";

export default function Leadership() {
    return (
        <section className="py-18 bg-white relative overflow-hidden">

            {/* Section Heading */}
            <div className="text-center mb-24">
                <h2 className="text-4xl font-bold text-[#1d3e68]">
                    Leadership
                </h2>
            </div>

            {/* ===== Director 1 ===== */}
            <div className="relative mb-32">

                {/* Background Strip */}
                <div className="absolute left-0 top-[120px] w-full h-[380px] bg-[#eef2f6] -z-0"></div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 items-center gap-16">

                        {/* Image */}
                        <div className="relative h-[460px] overflow-hidden">
                            <Image
                                src="/rajveer.png"
                                alt="Rajveer Choudhary"
                                fill
                                className="object-contain -translate-y-[15%]"
                                priority
                            />
                        </div>

                        {/* Content Card */}
                        <div className="bg-white shadow-2xl p-12 rounded-xl">
                            <h3 className="text-2xl font-semibold text-[#1d3e68] mb-2">
                                Rajveer Choudhary
                            </h3>

                            <p className="text-[#1d3e68] font-medium mb-6">
                                Managing Director
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                Rajveer Choudhary leads SaltStone Overseas with strategic
                                vision and extensive expertise in global trade and supply
                                chain operations. His leadership has been central to
                                strengthening international partnerships and ensuring
                                consistent quality delivery across markets.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* ===== Director 2 ===== */}
            <div className="relative">

                {/* Background Strip */}
                <div className="absolute left-0 top-[120px] w-full h-[380px] bg-[#eef2f6] -z-0"></div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 items-center gap-16">

                        {/* Content First on Desktop */}
                        <div className="md:order-1 order-2 bg-white shadow-2xl p-12 rounded-xl">
                            <h3 className="text-2xl font-semibold text-[#1d3e68] mb-2">
                                Lokesh Choudhary
                            </h3>

                            <p className="text-[#1d3e68] font-medium mb-6">
                                Director
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                Lokesh Choudhary brings strong operational leadership and
                                market insight to the company’s expansion strategy. His
                                focus on compliance, quality assurance, and long-term client
                                relationships ensures dependable supply execution and
                                sustainable business growth.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative h-[500px] md:order-2 order-1">
                            <Image
                                src="/rajveer.jpg"
                                alt="Lokesh Choudhary"
                                fill
                                className="object-contain"
                            />
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}
