import Image from "next/image";

export default function ContactInfo() {
  return (
    <section className="relative py-32 mb-15 mt-15 overflow-hidden">

      {/* Background Image */}
      <Image
        src="/contact-bg.jpg"
        alt="Contact Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-[#0f172a]/5" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex justify-end">

        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 text-white w-full max-w-md">

          <h2 className="text-3xl font-semibold mb-8">
            Contact Information
          </h2>

          <div className="space-y-6 text-sm">

            {/* Address */}
            <div className="flex items-start gap-4">
              {/* Your SVG here */}
              <LocationIcon />
              <div>
                <p className="font-medium">HO: 06, Nawa Road, Sambhar Lake, Jaipur (Raj) - 303 604</p>
                <p className="font-medium">Rajasthan, India</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <MailIcon />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-white">
                  info@saltstoneoverseas.com
                </p>
                <p className="text-white">
                  support@saltstoneoverseas.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <PhoneIcon />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-white">
                  +91 8239936524
                </p>
                <p className="text-white text-md mt-5">
                  Mon – Sat, 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="text-white mt-[2px]"
    >
      <path d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="text-white mt-[2px]"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="text-white mt-[2px]"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1l-1.3 1.3a16 16 0 0 0 6.9 6.9l1.3-1.3a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}
