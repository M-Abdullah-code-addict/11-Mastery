import { Calculator, BookOpen, Brain, Shapes } from "lucide-react";

function Subjects() {
  const subjects = [
    {
      id: 1,
      icon: <Calculator size={34} />,
      title: "Mathematics",
      desc: "Fractions, algebra, problem solving and full 11+ maths practice papers.",
    },
    {
      id: 2,
      icon: <BookOpen size={34} />,
      title: "English",
      desc: "Comprehension, grammar, vocabulary and writing skills for exams.",
    },
    {
      id: 3,
      icon: <Brain size={34} />,
      title: "Verbal Reasoning",
      desc: "Word puzzles, logic questions and pattern-based thinking skills.",
    },
    {
      id: 4,
      icon: <Shapes size={34} />,
      title: "Non-Verbal Reasoning",
      desc: "Shapes, sequences, patterns and visual problem solving practice.",
    },
  ];

  return (
    <section className="w-full bg-slate-950 py-20 px-6 sm:px-10 lg:px-20">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">

        <p className="text-orange-400 font-semibold tracking-widest uppercase mb-3">
          Subjects
        </p>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          Core Areas of
          <span className="text-orange-400"> 11+ Preparation</span>
        </h2>

        <p className="text-gray-400 mt-5 text-base sm:text-lg">
          Structured learning across all major subjects required for UK 11+ entrance exams.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {subjects.map((item) => (
          <div
            key={item.id}
            className="group bg-white/5 border border-white/10 hover:border-orange-400/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 backdrop-blur-xl"
          >

            {/* Icon */}
            <div className="text-orange-400 mb-6 group-hover:scale-110 transition-all duration-300">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Subjects;