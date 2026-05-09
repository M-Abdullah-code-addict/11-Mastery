

function Contact() {
  return (
    <section className="w-full min-h-screen bg-slate-950 text-white px-6 sm:px-10 lg:px-20 py-16">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">

        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Contact <span className="text-orange-400">Us</span>
        </h1>

        <p className="text-gray-400 mt-5 text-base sm:text-lg">
          Have questions about 11+ preparation? We’re here to help you anytime.
        </p>
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

          <h2 className="text-2xl font-bold text-orange-400 mb-6">
            Send us a message
          </h2>

          <form className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-400"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-lg shadow-orange-500/20"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Email Support
            </h3>
            <p className="text-gray-400">support@11plusmastery.com</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Response Time
            </h3>
            <p className="text-gray-400">Within 24 hours</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Support Hours
            </h3>
            <p className="text-gray-400">Mon - Fri (9 AM - 6 PM UK Time)</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;