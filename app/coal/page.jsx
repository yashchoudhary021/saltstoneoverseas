import Image from "next/image";
import OperationsCTA from "@/components/operations/OperationsCTA";

export default function CoalPage() {
    return (<div className="">
        <div>

            {/* Hero Section (No Background Now) */}
            <section
                className="pt-32 pb-20 bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('/coal/coal-banner.jpeg')" }}
            >
                {/* Optional dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Coal Trading And Supply
                    </h1>

                    <p className="text-gray-200 text-lg max-w-3xl leading-relaxed">
                        SaltStone Overseas operates as a structured coal trading and supply partner...
                    </p>

                    <p className="mt-6 text-gray-200 text-lg max-w-3xl leading-relaxed">
                        We work closely with buyers to align coal specifications...
                    </p>
                </div>
            </section>


            {/* Imported Coal Supply */}
            <section className="pt-20 pb-10 bg-[#eceff1]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] mb-6">
                            Imported Coal Supply
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            We specialize in the sourcing and supply of Indonesian coal to the Indian market, widely used for its consistent quality, reliable combustion characteristics, and suitability across multiple industrial sectors.
                        </p>

                        <ul className="space-y-3 list-disc pl-5 text-gray-600">
                            <li>High GCV coal for power generation and high-efficiency industrial use</li>
                            <li>Medium GCV coal for manufacturing units and process-based industries</li>
                            <li>Low GCV coal for cost-sensitive and blending applications</li>
                        </ul>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Each grade is selected and supplied based on calorific value requirements, ash content considerations, and usage conditions, helping customers achieve stable output and operational efficiency.
                        </p>
                    </div>

                    <div className="relative h-[450px] w-full">
                        <Image
                            src="/coal/coal1.png"
                            alt="Imported Coal"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* Coal Screening & Custom Sizing */}
            <section className="py-10 bg-[#eceff1]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    <div className="relative h-[450px] w-full">
                        <Image
                            src="/coal/coal-3.png"
                            alt="Coal Screening"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] mb-6">
                            Coal Screening And Custom Sizing
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            SaltStone Overseas provides coal screening services to support specific handling and combustion requirements. Imported or domestic coal can be processed and supplied in customized size ranges, depending on plant design and fuel feeding systems.
                        </p>

                        <ul className="space-y-3 list-disc pl-5 text-gray-600">
                            <li>Improved combustion efficiency</li>
                            <li>Better handling and storage</li>
                            <li>Reduced fines and wastage</li>
                            <li>Consistent feed size at the consumption point</li>
                        </ul>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Custom sizing is offered in coordination with client specifications and operational needs.
                        </p>
                    </div>

                </div>
            </section>

            {/* Domestic Coal Supply */}
            <section className="pt-10 pb-20 bg-[#eceff1]">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] mb-6">
                            Domestic Coal Supply
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            In addition to imported coal, we are engaged in the supply of Indian coal to customers who require locally sourced material as part of their fuel mix or procurement strategy.
                        </p>

                        <ul className="space-y-3 list-disc pl-5 text-gray-600">
                            <li>Blending requirements</li>
                            <li>Regional availability preferences</li>
                            <li>Operational cost management</li>
                        </ul>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Our approach allows customers to balance imported and domestic coal usage based on performance, availability, and commercial considerations.
                        </p>
                    </div>

                    <div className="relative h-[450px] w-full">
                        <Image
                            src="/coal/coal-2.jpeg"
                            alt="Domestic Coal"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* Applications */}
            <section className="py-20 bg-[#eceff1] mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] mb-12">
                        Applications
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                            <div className="relative h-56">
                                <Image
                                    src="/coal/power-1.jpg"   // put image inside public/images
                                    alt="Power Plants"
                                    fill
                                    className="object-cover hover:scale-110 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1d3e68]">
                                    Power Plants
                                </h3>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                            <div className="relative h-56">
                                <Image
                                    src="/coal/power-2.jpg"
                                    alt="Industrial Boilers"
                                    fill
                                    className="object-cover hover:scale-110 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1d3e68]">
                                    Industrial Boilers And Furnaces
                                </h3>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                            <div className="relative h-56">
                                <Image
                                    src="/coal/power-3.jpg"
                                    alt="Cement Textile Industry"
                                    fill
                                    className="object-cover hover:scale-110 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#1d3e68]">
                                    Cement, Textile And Large-Scale Industries
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Reliable Trade Execution */}
            <section className="py-20 bg-[#eceff1] mt-20 mb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e68] mb-8">
                        Reliable Trade Execution
                    </h2>

                    <ul className="space-y-4 list-disc pl-5 text-gray-600">
                        <li>Quality-focused sourcing and supplier coordination</li>
                        <li>Organized logistics and delivery planning</li>
                        <li>Flexible supply volumes based on buyer requirements</li>
                        <li>Clear documentation and transaction transparency</li>
                        <li>Long-term, relationship-driven trade approach</li>
                    </ul>

                    <p className="mt-8 text-gray-600 leading-relaxed">
                        SaltStone Overseas aims to build dependable coal supply partnerships by combining technical understanding with consistent execution and responsive coordination.
                    </p>
                </div>
            </section>

        </div>
        <OperationsCTA />
    </div>
    );
}
