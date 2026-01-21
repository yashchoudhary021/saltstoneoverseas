export default function ContactInfo() {
    return (
        <section className="relative py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Address */}
                    <div className="rounded-2xl border border-gray-200 p-6 text-center">
                        <div className="text-3xl mb-4">📍</div>
                        <h3 className="text-lg font-semibold text-brand-navy mb-2">
                            Our Office
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Saltstone Overseas<br />
                            Rajasthan, India
                        </p>
                    </div>

                    {/* Email */}
                    <div className="rounded-2xl border border-gray-200 p-6 text-center">
                        <div className="text-3xl mb-4">✉️</div>
                        <h3 className="text-lg font-semibold text-brand-navy mb-2">
                            Email Us
                        </h3>
                        <p className="text-gray-600 text-sm">
                            info@saltstoneoverseas.com<br />
                            sales@saltstoneoverseas.com
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="rounded-2xl border border-gray-200 p-6 text-center">
                        <div className="text-3xl mb-4">📞</div>
                        <h3 className="text-lg font-semibold text-brand-navy mb-2">
                            Call Us
                        </h3>
                        <p className="text-gray-600 text-sm">
                            +91 8290547778<br />
                            Mon – Sat, 9:00 AM – 6:00 PM
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
