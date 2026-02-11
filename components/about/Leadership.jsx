import Image from "next/image";

export default function Leadership() {
    return (
        <section className="py-18 bg-white relative overflow-hidden">

            {/* Section Heading */}
            {/* <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#1d3e68]">
                    Leadership And Strategic Direction
                </h2>
            </div> */}

            <section className="pt-2 pb-20">
                <div className="relative h-[500px] w-full overflow-hidden">

                    <Image
                        src="/about_page_ship.jpg"
                        alt="Leadership Vision"
                        fill
                        className="object-cover"
                    />

                    <div className="absolute bottom-0 left-0 w-[80%] 
                    bg-white/40 backdrop-blur-md shadow-xl 
                    rounded-tr-xl p-6 
                    border-t border-r border-[#1d3e68]/90">

                        <div className="group">

                            {/* Updated Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68]">
                                Leadership And Strategic Direction
                            </h2>

                            {/* Hover Content */}
                            <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-[1000px] mt-6">
                                <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                                    Under the guidance of our Director, SaltStone Overseas operates
                                    with clarity of vision and strong strategic intent.
                                </p>

                                <p className="text-[#1d3e68] font-semibold mb-3">
                                    Our leadership philosophy emphasizes:
                                </p>

                                {/* Proper Bullet Points */}
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[15px] leading-relaxed">
                                    <li>Consistency in quality</li>
                                    <li>Strong supply chain management</li>
                                    <li>Responsible sourcing practices</li>
                                    <li>Transparent business dealings</li>
                                    <li>Sustainable expansion into international markets</li>
                                </ul>

                                <p className="mt-4 text-gray-700 text-[15px] leading-relaxed">
                                    With a practical understanding of market dynamics and a
                                    forward-looking approach, our leadership continues to
                                    strengthen domestic presence while expanding global reach.
                                </p>

                            </div>

                        </div>
                    </div>

                </div>
            </section>


            <div className="relative mb-12">
                <div className="absolute left-0 top-[120px] w-full h-[380px] bg-[#eef2f6] -z-0"></div>
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 items-center gap-16">
                        <div className="relative h-[460px] overflow-hidden">
                            {/* <Image
                                src="/rajveer.png"
                                alt="Rajveer Choudhary"
                                fill
                                className="object-contain -translate-y-[15%]"
                                priority
                            /> */}
                        </div>
                        <div className="bg-white shadow-2xl md:p-12 rounded-xl max-w-4xl">

                            {/* Heading */}
                            <h3 className="text-2xl md:text-3xl font-bold text-[#1d3e68] mb-6">
                                Our Commitment
                            </h3>

                            {/* Intro Paragraph */}
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We believe reliability is the foundation of long-term business.
                                Through disciplined procurement, efficient logistics, and strict
                                adherence to quality benchmarks, we ensure:
                            </p>

                            {/* Bullet Points */}
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li>Timely domestic supply</li>
                                <li>Structured export execution</li>
                                <li>Transparent documentation</li>
                                <li>Strong supplier and buyer relationships</li>
                            </ul>

                            {/* Closing Statement */}
                            <p className="mt-6 text-gray-800 leading-relaxed font-medium">
                                At <span className="text-[#1d3e68] font-semibold">
                                    SaltStone Overseas Private Limited
                                </span>, we do not merely trade commodities —
                                we build dependable supply partnerships across borders.
                            </p>

                        </div>


                    </div>
                </div>
            </div>
            {/* ===== Director 1 ===== */}
            {/* <div className="relative mb-32">
                <div className="absolute left-0 top-[120px] w-full h-[380px] bg-[#eef2f6] -z-0"></div>
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 items-center gap-16">
                        <div className="relative h-[460px] overflow-hidden">
                            <Image
                                src="/rajveer.png"
                                alt="Rajveer Choudhary"
                                fill
                                className="object-contain -translate-y-[15%]"
                                priority
                            />
                        </div>
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
            </div> */}

        </section>
    );
}
