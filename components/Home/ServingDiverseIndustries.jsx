import Image from "next/image";

export default function ServingDiverseIndustries() {
    return (
        <section className="relative py-20">
            {/* OUTER SECTION — DO NOT CHANGE */}
            <div className="max-w-7xl mx-auto px-6">

                {/* GREY CONTAINER — FULL WIDTH */}
                <div className="bg-[#eceff1] rounded-[40px] px-8 md:px-16 py-20 shadow-[0_30px_80px_rgba(0,0,0,0.16)] border border-black/10">

                    {/* SECTION HEADING */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy tracking-wide">
                            Serving Diverse Industries
                        </h2>
                        <div className="w-24 h-1 bg-brand-navy mx-auto mt-4 mb-6" />
                       
                    </div>

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
                                        <div className="h-[120px] flex items-center justify-center mb-4">
                                            <div className="relative w-[100px] h-[100px] transition-transform duration-300 group-hover:scale-115">
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
        title: "Salt Trading",
        description: "Industrial, edible, iodized, pink, and black salt supplied to domestic and international markets.",
        image: "/svgs/salt.png",
    },
    {
        title: "Coal Supply",
        description: "High-quality imported coal for power plants, manufacturing units, and bulk industrial usage.",
        image: "/svgs/coal.png",
    },
    {
        title: "Stone & Minerals",
        description: "Natural stones and minerals used across construction, infrastructure, and industrial projects.",
        image: "/svgs/stone.png",
    },
    {
        title: "Grains Export",
        description: "Export-grade grains sourced from trusted producers and delivered with strict quality compliance.",
        image: "/svgs/grain.png",
    },
];