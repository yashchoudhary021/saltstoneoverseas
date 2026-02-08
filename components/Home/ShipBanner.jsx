import Image from "next/image";

export default function ShipBanner() {
  return (
    <section className="relative w-full pb-0">
      
      <div className="w-full h-[400px] relative overflow-hidden">
        
        <Image
          src="global/shipbanner.jpg"
          alt="Global Shipping"
          fill
          priority
          className="object-cover"
        />

        {/* Optional Dark Overlay for Premium Look */}
        <div className="absolute inset-0"></div>

      </div>

    </section>
  );
}
