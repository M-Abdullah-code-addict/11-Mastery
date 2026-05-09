import { materials } from "../../constants";
import { NavLink } from "react-router-dom";

function Materials() {
  return (
    <section className="w-full bg-slate-950 py-20 px-6 sm:px-10 lg:px-20">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          Study
          <span className="text-orange-400"> Materials</span>
        </h2>

        <p className="text-gray-400 mt-5 text-base sm:text-lg">
          Access organized 11+ practice materials, worksheets, and exam papers to boost your preparation.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {materials.map((item) => (
          <NavLink
            key={item.id}
            to={item.route}
            className="group bg-white/5 border border-white/10 hover:border-orange-400/50 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 backdrop-blur-xl flex flex-col justify-center items-center gap-3"
          >

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-all duration-300">
              {item.text}
            </h3>

            {/* Small hint text */}
            <p className="text-gray-400 text-sm sm:text-base">
              Click to explore practice materials and PDFs
            </p>

            {/* Button style hint */}
            <div className="mt-3 px-5 py-2 rounded-xl border border-orange-400 text-orange-400 group-hover:bg-orange-400 group-hover:text-white transition-all duration-300 text-sm font-semibold">
              Open
            </div>

          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Materials;
