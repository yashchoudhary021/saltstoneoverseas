import Image from "next/image";
import OperationsCTA from "@/components/operations/OperationsCTA";

export default function StonePage() {
    return (
        <div>
            <div>

                {/* ===== HERO BANNER ===== */}
                <section
                    className="relative min-h-[380px] bg-cover bg-center bg-no-repeat flex items-end"
                    style={{ backgroundImage: "url('/stone/stone-banner.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative max-w-7xl mx-auto px-6 pb-10 w-full">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Stone Export
                        </h1>
                    </div>
                </section>


                {/* ===== INTRO SECTION ===== */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
                            SaltStone Overseas is engaged in the export of natural stone products to international markets, supplying carefully selected marble and granite to global buyers. Our stone export operations are focused on quality consistency, specification accuracy, and reliable international delivery.
                        </p>

                        <p className="mt-6 text-gray-600 text-lg max-w-4xl leading-relaxed">
                            We work with trade partners, distributors, and project buyers who require dependable sourcing and export-ready execution.
                        </p>
                    </div>
                </section>


                {/* ===== PRODUCT PORTFOLIO (Coal Style Layout) ===== */}
                <section className="py-20 bg-[#eceff1]">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                        {/* Image */}
                        <div className="relative h-[450px] w-full rounded-xl overflow-hidden">
                            <Image
                                src="/stone/stone-1.jpg"
                                alt="Granite and Marble"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] mb-6">Product Portfolio</h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>We export a selected range of natural stone products, including:</p>
                                <p><strong>Granite</strong><br />Durable and application-ready granite supplied in multiple grades and finishes for construction, infrastructure, and architectural use.</p>
                                <p><strong>Marble</strong><br />Natural marble selected for uniformity, appearance, and structural suitability, supplied for residential, commercial, and decorative applications.</p>
                                <p>Product selection is aligned with buyer specifications and international market requirements.</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ===== PROCESSING & EXPORT (Salt Floating Card Style) ===== */}
                <section className="py-20 mb-12 bg-[#eceff1]">
                    <div className="relative h-[550px] w-full overflow-hidden">

                        {/* Background Image */}
                        <Image
                            src="/stone/stone-2.jpg"
                            alt="Stone Export Logistics"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Floating Card */}
                        <div className="absolute right-10 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-10 w-[520px] shadow-xl rounded-xl">

                            <h2 className="text-2xl md:text-3xl font-semibold text-[#1d3e68] mb-6">
                                Export Logistics
                            </h2>

                            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">

                                <p>
                                    SaltStone Overseas supports customized stone supply based on project and buyer needs, including:
                                </p>

                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Size and thickness specifications</li>
                                    <li>Finish and surface requirements</li>
                                    <li>Application-specific grading</li>
                                    <li>Project-based quantity planning</li>
                                </ul>

                                <p className="mt-4">
                                    We provide export-ready packing solutions designed to protect material integrity during transit, including:
                                </p>

                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Crate and palletized packing</li>
                                    <li>Container-optimized loading</li>
                                    <li>Packaging aligned with international handling standards</li>
                                </ul>

                                <p className="mt-4">
                                    Our stone export operations are supported by structured documentation, compliance with destination market norms, and reliable shipment coordination.
                                </p>

                            </div>

                        </div>

                    </div>
                </section>

            </div>
            <OperationsCTA />
        </div>
    );
}
