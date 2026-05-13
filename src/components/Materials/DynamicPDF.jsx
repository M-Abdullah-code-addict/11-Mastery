import { useParams } from "react-router-dom";
import { PDFarray } from "../../SampleDatabase/Database";
import { getAllPdfs } from "../../api/pdfapi"
import { useEffect, useState } from "react";

function DynamicPDF() {
  const { pdfId, subject } = useParams();
  const [pdfDetails, setPdfDetails] = useState()

  useEffect(() => {
    const getPdfDetails = async () => {
      const allPdfs = await getAllPdfs(subject)
      const pdfDetail = allPdfs.find(
        (item) => String(item.id) === String(pdfId)
      )
      setPdfDetails(pdfDetail)
    }

    getPdfDetails()
  }, [])
  

  if (!pdfDetails) {
    return (
      <div className="w-full min-h-screen bg-slate-950 flex items-center justify-center text-red-400 text-2xl">
        PDF Not Found 😢
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-950 px-4 py-6">

      {/* PDF Container */}
      <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">

          <h2 className="text-orange-400 text-lg sm:text-2xl font-bold text-center sm:text-left">
            {pdfDetails.name}
          </h2>

          {/* Download Button */}
          <a
            href={pdfDetails.secure_url}
            download
            target="_blank"
            rel="noreferrer"
            className="bg-orange-400 hover:bg-orange-500 transition-all duration-300 text-white px-5 py-2 rounded-xl font-semibold shadow-lg shadow-orange-500/20"
          >
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <iframe
          src={`https://docs.google.com/gview?embedded=true&url=${pdfDetails.secure_url}`}
          className="w-full min-h-[80vh] bg-white"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
}

export default DynamicPDF;