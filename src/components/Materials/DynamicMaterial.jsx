import { NavLink, useParams } from "react-router-dom";
import { materials } from "../../constants";
import { FileText } from "lucide-react";
import { PDFarray } from "../../SampleDatabase/Database"

function DynamicMaterial() {
  const { subject } = useParams();

  const selectedSubject = materials.find(
    (item) => String(item.route) === String(subject)
  );

  return (
    <section className="w-full min-h-screen bg-slate-950 text-white px-6 sm:px-10 lg:px-20 py-16">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          {selectedSubject?.text || "Study Materials"}
        </h1>

        <p className="text-gray-400 mt-4 text-base sm:text-lg">
          Access past papers, practice PDFs, and revision materials for better 11+ preparation.
        </p>
      </div>

      {/* PDF Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {PDFarray.map((item) => (
          <NavLink
            key={item.id}
            to={`/materials/${subject}/${item.id}`}
            className="group bg-white/5 border border-white/10 hover:border-orange-400/50 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 backdrop-blur-xl"
          >

            {/* Icon */}
            <div className="text-orange-400 group-hover:scale-110 transition-all duration-300">
              <FileText size={50} />
            </div>

            {/* PDF Name */}
            <h3 className="text-white font-semibold text-base sm:text-lg group-hover:text-orange-400 transition-all duration-300">
              {item.name}
            </h3>

            {/* Tag */}
            <span className="text-xs px-3 py-1 rounded-full border border-orange-400 text-orange-400">
              PDF
            </span>

          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default DynamicMaterial;