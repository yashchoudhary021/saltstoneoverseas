import Image from "next/image";

export default function ServingDiverseIndustries() {
    return (
        <section className="relative py-20">
            {/* OUTER SECTION — DO NOT CHANGE */}
            <div className="max-w-6xl mx-auto px-6">

                {/* GREY CONTAINER — FULL WIDTH */}
                <div className="bg-[#eceff1] rounded-[24px] px-8 md:px-1 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.16)] border border-black/10">

                    {/* SECTION HEADING */}
                    {/* <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-wide">
                            Serving Diverse Industries
                        </h2>
                        <div className="w-24 h-1 bg-brand-navy mx-auto mt-4 mb-6" />
                       
                    </div> */}

                    {/* WHITE CARD AREA — NARROWER WIDTH */}
                    
                    <div className="rounded-6xl overflow-hidden">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
                                {industries.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className={`group px-10 py-2 text-center cursor-pointer ${index % 2 === 0 ? "md:border-r border-gray-300" : ""} ${index < industries.length - 2 ? "border-b border-gray-300" : ""}`}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 120}
                                    >
                                        {/* Image */}
                                        <div className="h-[100px] flex items-center justify-center mb-4">
                                            <div className="relative w-[80px] h-[80px] transition-transform duration-300 group-hover:scale-107">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    // className="object-contain"
                                                    className="object-contain filter-brand-navy"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="pb-4">
                                            <h3 className="text-xl font-semibold text-brand-navy mb-1">
                                                {item.title}
                                            </h3>
                                            <div className="h-[60px] overflow-hidden">
                                                <p className="text-sm text-gray-600 leading-relaxed opacity-0 translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                                                {/* <p className="text-sm"> */}
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

const industries = [
    {
        title: "SALT EXPORT AND TRADING",
        description: "Supplying industrial, Free Flow-iodised and Non-iodised , pink, and black salts across India and international markets.",
        image: "/svgs/salt.png",
    },
    {
        title: "COAL SUPPLY",
        description: "High GCV Imported coal for power, manufacturing, and bulk industrial applications",
        image: "/svgs/coal.png",
    },
    {
        title: "STONE AND MINERALS EXPORT",
        description: "Export of marble, granite, and natural stone products to international markets.",
        image: "/svgs/stone.png",
    },
    {
        title: "GRAINS EXPORT",
        description: "Structured export of quality-assured grains to global buyers.",
        image: "/svgs/grain.png",
    },
];