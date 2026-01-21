export default function SaltPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-semibold text-brand-navy mb-6">
          Salt Varieties & Supply
        </h1>

        <p className="max-w-3xl text-gray-600 mb-12">
          We supply multiple varieties of salt for industrial, commercial,
          and consumption purposes with flexible packaging options.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {salts.map((salt) => (
            <div
              key={salt}
              className="rounded-2xl border border-gray-200 p-6 bg-gray-50"
            >
              <h3 className="text-lg font-semibold text-brand-navy">
                {salt}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const salts = [
  "Industrial Salt",
  "Iodized Salt",
  "Pink Salt",
  "Black Salt",
];
