"use client";

import { useEffect, useState } from "react";

const slides = [
    {
        image: "/hero/coal.jpg",
        title: "Trusted Global Coal Import Solutions",
        subtitle: "Sourcing high-quality coal from trusted international markets.",
        overlay: "bg-brand-navy/90",
    },
    {
        image: "/hero/salt.jpg",
        title: "Premium Salt Exporter",
        subtitle: "Industrial, iodized, pink and black salt with customized packaging.",
        overlay: "bg-brand-navy/65",
    },
    {
        image: "/hero/grains.jpg",
        title: "Grain Exports You Can Trust",
        subtitle: "Supplying quality grains to global partners with consistency.",
        overlay: "bg-brand-navy/80",
    },
    {
        image: "/hero/stone.jpg",
        title: "Stone & Mineral Exports",
        subtitle: "Marble, granite and natural stone for international markets.",
        overlay: "bg-brand-navy/60",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[calc(100vh-64px)] pt-16 w-full overflow-hidden">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            ))}

            {/* Dark Overlay */}
            <div className={`absolute inset-0 transition-colors duration-700 ${slides[current].overlay}`}/>

            {/* Content */}
            <div className="relative z-10 min-h-[calc(100vh-64px)] flex items-center">
                <div className="animate-fade-in">
                    <div className="max-w-6xl mx-auto px-4 lg:px-8">
                        <h1 className="text-white max-w-3xl">
                            {slides[current].title}
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
                            {slides[current].subtitle}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="/products"
                                className="bg-white text-brand-navy px-6 py-3 font-medium rounded-md hover:bg-gray-100 transition"
                            >
                                View Products
                            </a>

                            <a
                                href="/contact"
                                className="border border-white text-white px-6 py-3 font-medium rounded-md hover:bg-white hover:text-brand-navy transition"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300
                ${current === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white"}`}
                    />
                ))}
            </div>

        </section>
    );
}
