export default function ContactHero() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(29,62,104,0.4),_transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Let’s Connect
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Reach out to Saltstone Overseas for product inquiries, quotations,
          domestic supply, or export partnerships. Our team is committed to
          responding promptly and professionally.
        </p>
      </div>
    </section>
  );
}
