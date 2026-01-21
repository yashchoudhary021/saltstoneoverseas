export default function WhySaltstone() {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-brand-navy">
            Why Saltstone Overseas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            title="Global Export Expertise"
            text="Deep understanding of international trade and stone export logistics."
          />
          <Feature
            title="Premium Quality Stones"
            text="Carefully sourced and processed to meet global standards."
          />
          <Feature
            title="Client-Centric Approach"
            text="Customized solutions and dedicated customer support."
          />
        </div>

      </div>
    </section>
  );
}

function Feature({ title, text }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
      <h3 className="text-lg font-semibold text-brand-navy mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600">
        {text}
      </p>
    </div>
  );
}