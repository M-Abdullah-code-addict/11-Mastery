import {
  BookOpen,
  FileText,
  Brain,
  Trophy,
} from "lucide-react";

function Features() {

  const features = [
    {
      id: 1,
      icon: <FileText size={40} />,
      title: "Past Papers & Practice Sets",
      disc: "Access carefully selected 11+ past papers and practice materials designed to improve confidence and exam performance.",
    },

    {
      id: 2,
      icon: <BookOpen size={40} />,
      title: "Step-by-Step Answer PDFs",
      disc: "Learn faster with detailed answer sheets and explanations that help students understand mistakes and improve quickly.",
    },

    {
      id: 3,
      icon: <Brain size={40} />,
      title: "Structured Learning Resources",
      disc: "Study smarter with organized topics, subject-based materials, and focused preparation resources for every student.",
    },

    {
      id: 4,
      icon: <Trophy size={40} />,
      title: "Build Confidence for 11+ Exams",
      disc: "Practice consistently with high-quality resources that help students master key concepts and perform confidently in exams.",
    },
  ];

  return (
    <section className="w-full bg-slate-950 py-20 px-6 sm:px-10 lg:px-20">

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">

        <p className="text-orange-400 font-semibold tracking-widest uppercase mb-3">
          Why Choose Us
        </p>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Why Students Choose
          <span className="text-orange-400"> 11+ Mastery</span>
        </h2>

        <p className="text-gray-400 mt-5 text-base sm:text-lg leading-relaxed">
          High-quality learning resources designed to help students
          prepare confidently for 11+ entry exams.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {features.map((item) => (
          <div
            key={item.id}
            className="group bg-white/5 border border-white/10 hover:border-orange-400/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 backdrop-blur-xl"
          >

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-all duration-300">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-base">
              {item.disc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;