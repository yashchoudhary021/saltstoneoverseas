export default function ContactForm() {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mb-4 text-center">
            Request a Quote
          </h2>

          <p className="text-center text-gray-600 mb-10">
            Fill out the form below and our export team will get back to you shortly.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            />

            <input
              type="text"
              placeholder="Country"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            ></textarea>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center
                           rounded-full bg-brand-navy text-white
                           px-10 py-3 font-medium transition
                           hover:bg-brand-navy/90"
              >
                Submit Inquiry
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
