export default function AboutHero() {
  return (
    <section
      className="sticky top-0 h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/company.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute bottom-16 left-16 text-white">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
          About
        </h1>
      </div>
    </section>
  );
}
