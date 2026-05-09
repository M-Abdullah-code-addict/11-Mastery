import ceoImage from "../../assets/ceoImage.png"

function About() {
  return (
    <section className="w-full min-h-screen bg-slate-950 text-white px-6 sm:px-10 lg:px-20 py-16">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <h1 className="text-4xl sm:text-5xl font-extrabold">
          About <span className="text-orange-400">11+ Mastery</span>
        </h1>

        <p className="text-gray-400 mt-5 text-base sm:text-lg leading-relaxed">
          11+ Mastery is an online learning platform designed to help students
          prepare for UK 11+ entrance exams with structured practice materials,
          past papers, and step-by-step learning resources.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl">

        <h2 className="text-3xl font-bold text-orange-400 mb-4">
          Our Mission
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Our mission is to make 11+ exam preparation simple, accessible, and
          effective for every student in the UK. We focus on high-quality
          practice materials, real exam-style questions, and clear answer
          explanations to build confidence and improve performance.
        </p>
      </div>

      {/* CEO Section */}
      <div className="max-w-5xl mx-auto mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl flex flex-col md:flex-row items-center gap-10">

        {/* Image */}
        <div className="shrink-0">
          <img
            src={ceoImage}
            alt="CEO Naveed Khan"
            className="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-full border-4 border-orange-400 shadow-lg"
          />
        </div>

        {/* Info */}
        <div className="text-center md:text-left">

          <h3 className="text-3xl font-bold text-white">
            Naveed Khan
          </h3>

          <p className="text-orange-400 font-semibold mt-1">
            Founder & CEO
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Naveed Khan is the founder and CEO of 11+ Mastery. He created this
            platform with the vision of helping students achieve success in
            competitive UK grammar school entrance exams through structured and
            accessible learning resources.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        Built with ❤️ for better 11+ preparation
      </div>

    </section>
  );
}

export default About;