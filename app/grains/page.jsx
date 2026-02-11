import Image from "next/image";
import OperationsCTA from "@/components/operations/OperationsCTA";

export default function GrainsPage() {
    return (
        <div>
            <div>

                {/* ===== HERO BANNER ===== */}
                <section
                    className="relative min-h-[380px] bg-cover bg-center bg-no-repeat flex items-end"
                    style={{ backgroundImage: "url('/grains/grains-banner.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative max-w-7xl mx-auto px-6 pb-10 w-full">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Grains Export
                        </h1>
                    </div>
                </section>


                {/* ===== INTRO SECTION ===== */}
                <section className="py-20 bg-[#eceff1]">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
                            SaltStone Overseas is engaged in the export of grains to international markets, supplying quality-assured agricultural produce to global buyers through structured sourcing and export-ready operations.
                        </p>

                        <p className="mt-6 text-gray-600 text-lg max-w-4xl leading-relaxed">
                            Our grain export activities are aligned with international trade requirements, focusing on consistency, quality, and reliable shipment execution.
                        </p>
                    </div>
                </section>


                {/* ===== GRAIN PORTFOLIO (Coal Style Layout) ===== */}
                <section className="bg-[#eceff1] mb-20">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">

                        {/* Image */}
                        <div className="relative w-full min-h-[500px] md:min-h-full">
                            <Image
                                src="/grains/grains-2.jpg"
                                alt="Grain Portfolio"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center py-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] mb-6">
                                Grain Portfolio
                            </h2>

                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    We export a selected range of grains that are widely demanded in international markets, including:
                                </p>

                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Wheat</li>
                                    <li>Maize (Corn)</li>
                                    <li>Barley</li>
                                    <li>Pearl Millet (Bajra)</li>
                                    <li>Sorghum (Jowar)</li>
                                    <li>Other trade-specific grains based on buyer demand</li>
                                </ul>

                                <p className="mt-4">
                                    Product selection and volumes are aligned with seasonal availability and international market requirements.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>



                {/* ===== EXPORT OPERATIONS (Salt Floating Card Style) ===== */}
                <section className="bg-[#eceff1] mb-12">
                    <div className="relative h-[550px] w-full overflow-hidden">

                        {/* Background Image */}
                        <Image
                            src="/grains/grains-1.jpg"
                            alt="Grain Export Logistics"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Floating Card */}
                        <div className="absolute right-10 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-10 w-[520px] shadow-xl rounded-xl">

                            <h2 className="text-2xl md:text-3xl font-semibold text-[#1d3e68] mb-6">
                                Export-Focused Operations
                            </h2>

                            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">

                                <p>
                                    SaltStone Overseas manages grain exports through a structured process that includes:
                                </p>

                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Quality assessment and grading coordination</li>
                                    <li>Procurement aligned with export specifications</li>
                                    <li>Compliance with destination market requirements</li>
                                    <li>Export documentation and shipment coordination</li>
                                </ul>

                                <p className="mt-4">
                                    We offer customized packaging solutions based on buyer specifications and destination market standards, including:
                                </p>

                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Bulk export packaging</li>
                                    <li>Bagged consignments</li>
                                    <li>Market-specific packing and labeling</li>
                                </ul>

                                <p className="mt-4">
                                    Our operations are supported by organized sourcing, consistent quality control coordination, transparent documentation, and timely export execution.
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
