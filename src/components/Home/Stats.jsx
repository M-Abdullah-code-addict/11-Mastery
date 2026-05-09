import { Users, FileText, Trophy, Globe } from "lucide-react";

function Stats() {
  const stats = [
    {
      id: 1,
      icon: <Users size={32} />,
      number: "12,000+",
      label: "Students Supported",
    },
    {
      id: 2,
      icon: <FileText size={32} />,
      number: "600+",
      label: "Practice Papers",
    },
    {
      id: 3,
      icon: <Trophy size={32} />,
      number: "92%",
      label: "Success Rate",
    },
    {
      id: 4,
      icon: <Globe size={32} />,
      number: "UK Wide",
      label: "Trusted Across Schools",
    },
  ];

  return (
    <section className="w-full bg-slate-950 py-20 px-6 sm:px-10 lg:px-20">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          Proven Results in
          <span className="text-orange-400"> 11+ Preparation</span>
        </h2>

        <p className="text-gray-400 mt-5 text-base sm:text-lg">
          Thousands of students across the UK trust 11+ Mastery for their exam preparation journey.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {stats.map((item) => (
          <div
            key={item.id}
            className="group bg-white/5 border border-white/10 hover:border-orange-400/40 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 backdrop-blur-xl"
          >

            {/* Icon */}
            <div className="flex justify-center text-orange-400 mb-5 group-hover:scale-110 transition-all duration-300">
              {item.icon}
            </div>

            {/* Number */}
            <h3 className="text-4xl font-extrabold text-white mb-2">
              {item.number}
            </h3>

            {/* Label */}
            <p className="text-gray-400 text-sm sm:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;