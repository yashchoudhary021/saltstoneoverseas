"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/hero/ship.jpg",
    title: "Your Trusted Export Partner",
    subtitle: "Delivering commodities, minerals, and agricultural products to global markets with reliability and operational excellence.",
    type: "dark",
    textColor: "text-white/80",
    subTextColor: "text-gray-200",
  },
  {
    image: "/hero/coal_banner.jpeg",
    title: "Trusted Coal Supplier",
    subtitle: "Sourcing high-quality coal from trusted international markets.",
    type: "dark",
    textColor: "text-white/80",
    subTextColor: "text-gray-200",
  },
  {
    image: "/hero/salt_banner.jpg",
    title: "Premium Salt Exporter",
    subtitle: "Industrial, iodized, pink and black salt with customized packaging.",
    type: "light",
    textColor: "text-white/80",
    subTextColor: "text-gray-200",
  },
  {
    image: "/hero/grain_banner.jpg",
    title: "Grain Exports You Can Trust",
    subtitle: "Supplying quality grains to global partners with consistency.",
    type: "light",
    textColor: "text-white/80",
    subTextColor: "text-gray-200",
  },
  {
    image: "/hero/stone_banner.png",
    title: "Stone And Mineral Exports",
    subtitle: "Marble, granite and natural stone for international markets.",
    type: "dark",
    textColor: "text-white/80",
    subTextColor: "text-gray-200",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    // <section className="relative h-screen w-full overflow-hidden">
    <section className="h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url(${s.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            slide.type === "light"
              ? "linear-gradient(to bottom, rgba(11,42,63,0.15), rgba(11,42,63,0.30))"
              : "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.55))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 pb-16">
          <div className="max-w-2xl animate-fade-in">
            
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight ${slide.textColor}`}
            >
              {slide.title}
            </h1>

            {/* <p
              className={`mt-6 text-lg md:text-xl leading-relaxed ${slide.subTextColor}`}
            >
              {slide.subtitle}
            </p> */}

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
          ${current === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </section>

  );
}
