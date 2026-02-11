export default function PrivacyPolicy() {
    return (
        <div className="bg-[#f8fafc] text-gray-700">

            <div className="max-w-5xl mx-auto px-6 py-20">

                {/* Page Title */}
                <h1 className="text-4xl mt-5 font-bold text-[#1d3e68] mb-6">
                    Privacy Policy
                </h1>

                <p className="text-lg font-medium mb-2">
                    SaltStone Overseas Private Limited
                </p>

                <p className="mb-8 leading-relaxed">
                    SaltStone Overseas Private Limited values the trust placed in us by our clients, suppliers, and website visitors.
                    We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
                </p>

                <p className="mb-12 leading-relaxed">
                    This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or engage with our services.
                </p>

                {/* Section 1 */}
                <SectionTitle title="Information We Collect" />

                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>When you submit an inquiry through our website</li>
                    <li>When you contact us via email or phone</li>
                    <li>When you engage with us for domestic trading or export business</li>
                    <li>When you voluntarily provide business-related documentation</li>
                </ul>

                <p className="mb-4 font-medium">The information collected may include:</p>

                <ul className="list-disc pl-6 space-y-2 mb-12">
                    <li>Name</li>
                    <li>Company Name</li>
                    <li>Email Address</li>
                    <li>Phone Number</li>
                    <li>Business Address</li>
                    <li>Trade or shipment-related details</li>
                </ul>

                <p className="mb-12 leading-relaxed">
                    We collect only the information necessary to respond to inquiries, process business transactions, and maintain professional communication.
                </p>

                {/* Section 2 */}
                <SectionTitle title="How We Use Your Information" />

                <ul className="list-disc pl-6 space-y-2 mb-12">
                    <li>Responding to inquiries and business proposals</li>
                    <li>Processing domestic supply or export transactions</li>
                    <li>Managing documentation and compliance requirements</li>
                    <li>Improving our communication and service quality</li>
                    <li>Sending relevant business updates (if requested)</li>
                </ul>

                <p className="mb-12 leading-relaxed">
                    We do not sell, rent, or trade your personal or business information to third parties.
                </p>

                {/* Section 3 */}
                <SectionTitle title="Business And Transactional Information" />

                <p className="mb-12 leading-relaxed">
                    Any information shared during domestic trading or export operations — including contracts, invoices, shipment documents, or compliance paperwork —
                    is treated with strict confidentiality and used solely for transaction execution and regulatory compliance.
                    <br /><br />
                    We do not store sensitive financial information beyond what is necessary for lawful business operations.
                </p>

                {/* Section 4 */}
                <SectionTitle title="Cookies And Website Usage" />

                <p className="mb-12 leading-relaxed">
                    Our website may use basic cookies to enhance user experience and analyze website traffic.
                    These cookies help us understand visitor behavior and improve site performance.
                    <br /><br />
                    You may choose to disable cookies through your browser settings if you prefer.
                </p>

                {/* Section 5 */}
                <SectionTitle title="Email Communication" />

                <ul className="list-disc pl-6 space-y-2 mb-12">
                    <li>In response to your inquiries</li>
                    <li>For business-related communication</li>
                    <li>To provide requested information</li>
                </ul>

                <p className="mb-12 leading-relaxed">
                    We maintain a strict communication policy and do not send unsolicited promotional emails.
                </p>

                {/* Section 6 */}
                <SectionTitle title="Data Security" />

                <p className="mb-12 leading-relaxed">
                    We implement reasonable technical and administrative measures to protect your information from unauthorized access, misuse, or disclosure.
                    While no system can guarantee absolute security, we continuously review and enhance our safeguards to maintain data protection standards.
                </p>

                {/* Section 7 */}
                <SectionTitle title="Access to Your Information" />

                <p className="mb-12 leading-relaxed">
                    You may request access to the information you have provided to us. Upon verification of your identity,
                    we will allow you to review or correct your information, where applicable.
                </p>

                {/* Section 8 */}
                <SectionTitle title="Changes to This Policy" />

                <p className="mb-12 leading-relaxed">
                    SaltStone Overseas Private Limited reserves the right to update this Privacy Policy as required by operational, legal, or regulatory changes.
                    Updates will be posted on this page along with the revised effective date.
                    <br /><br />
                    We encourage visitors to review this policy periodically.
                </p>

                {/* Contact Section */}
                <SectionTitle title="Contact Information" />

                <p className="leading-relaxed">
                    SaltStone Overseas Private Limited <br />
                    Jaipur, Rajasthan, India <br />
                    Email: support@saltstoneoverseas.com
                </p>

            </div>
        </div>
    );
}


/* Reusable Section Title Component */
function SectionTitle({ title }) {
    return (
        <h2 className="text-2xl font-semibold text-[#1d3e68] mb-6 mt-12">
            {title}
        </h2>
    );
}
