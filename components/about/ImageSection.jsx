export default function ImageSection() {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105"
        style={{ backgroundImage: "url('/images/company-background.jpg')" }}
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
        <h2 className="text-4xl font-bold text-white text-center px-4">
          Committed to Quality, Compliance & Global Standards
        </h2>
      </div>
    </section>
  );
}
