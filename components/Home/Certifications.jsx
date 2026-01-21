export default function Certifications() {
    return (
        <section className="relative py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy">
                        Certifications & Compliance
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                        We follow internationally recognized standards to ensure quality,
                        safety, and ethical sourcing.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {certs.map((cert) => (
                        <div
                            key={cert}
                            className="flex items-center justify-center h-28
                         rounded-2xl border border-gray-200 bg-gray-50
                         text-brand-navy font-semibold"
                        >
                            {cert}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

const certs = [
    "ISO Certified",
    "Export Compliance",
    "Quality Assurance",
    "Sustainable Sourcing",
];
