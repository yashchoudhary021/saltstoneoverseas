export default function AboutFoundation() {
    return (
        <section className="relative py-24 bg-transparent">
            <div className="w-full">
                <div className="bg-[#eceff1] backdrop-blur-md shadow-xl px-6 md:px-16 py-20">

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-20">
                        <div>
                            <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To deliver reliable commodity trading solutions with a strong
                                focus on quality, transparency, and long-term partnerships
                                across global markets.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-brand-navy mb-4">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                To become a trusted global trading partner known for ethical
                                practices, operational excellence, and consistent value
                                delivery.
                            </p>
                        </div>
                    </div>

                    {/* Why Saltstone */}
                    <div className="py-15 mb-20">
                        <h3 className="text-3xl font-semibold text-brand-navy text-center mb-12">
                            Why Saltstone Overseas
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                            <WhyItem
                                title="Global Trade Expertise"
                                text="Strong understanding of international markets, regulations, and logistics."
                                icon={TradeIcon}
                            />
                            <WhyItem
                                title="Quality-Driven Approach"
                                text="Strict supplier selection and quality checks at every stage."
                                icon={QualityIcon}
                            />
                            <WhyItem
                                title="Reliable Partnerships"
                                text="Transparent communication and dependable long-term relationships."
                                icon={PartnershipIcon}
                            />
                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="pb-15">
                        <h3 className="text-3xl font-semibold text-brand-navy text-center mb-12">
                            Our Core Values
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                            <ValueItem
                                title="Quality"
                                description="Consistent standards and strict checks across all our operations."
                                icon={CheckIcon}
                            />
                            <ValueItem
                                title="Integrity"
                                description="Transparent dealings and ethical business practices."
                                icon={ShieldIcon}
                            />
                            <ValueItem
                                title="Reliability"
                                description="Dependable supply, timelines, and long-term commitment."
                                icon={ClockIcon}
                            />
                            <ValueItem
                                title="Sustainability"
                                description="Responsible sourcing with long-term environmental awareness."
                                icon={LeafIcon}
                            />

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

/* ---------- Sub Components ---------- */

function WhyItem({ title, text, icon: Icon }) {
    return (
        <div>
            <div className="flex justify-center mb-4 text-brand-navy">
                <Icon />
            </div>
            <h4 className="text-lg font-semibold text-brand-navy mb-2">
                {title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
                {text}
            </p>
        </div>
    );
}

function ValueItem({ title, description, icon: Icon }) {
  return (
    <div>
      <div className="flex justify-center mb-3 text-brand-navy">
        <Icon />
      </div>

      <p className="font-semibold text-brand-navy mb-1">
        {title}
      </p>

      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}


/* ---------- SVG ICONS ---------- */

function TradeIcon() {
    return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" />
        </svg>
    );
}

function QualityIcon() {
    return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    );
}

function PartnershipIcon() {
    return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M16 11c1.7 0 3 1.3 3 3v4H5v-4c0-1.7 1.3-3 3-3" />
            <circle cx="12" cy="7" r="3" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" />
        </svg>
    );
}

function ShieldIcon() {
    return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v6l4 2" />
        </svg>
    );
}

function LeafIcon() {
    return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12c6-9 15-9 18-9-1 12-8 18-18 18" />
        </svg>
    );
}
