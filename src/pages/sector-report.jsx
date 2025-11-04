import React, { useState } from "react";
import { Download, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

import report1 from "../assets/images/hero1.jpg";
import report2 from "../assets/images/hero1.jpg";
import report3 from "../assets/images/hero1.jpg";
import report4 from "../assets/images/hero1.jpg";
import report5 from "../assets/images/hero1.jpg";
import report6 from "../assets/images/hero1.jpg";
import report7 from "../assets/images/hero1.jpg";
import report8 from "../assets/images/hero1.jpg";

const reports = [
  {
    id: 1,
    title: "State of the GB&BPPO Sector in Ghana 2025",
    category: "Annual Reports",
    description:
      "Comprehensive analysis of the BPO and shared services sector in Ghana, highlighting key trends, growth areas, and policy recommendations.",
    image: report1,
    file: "/reports/state-of-sector.pdf",
  },
  {
    id: 2,
    title: "Ghana’s Competitive Cost Benchmarks",
    category: "Market Benchmarks",
    description:
      "A cost benchmarking study comparing Ghana’s competitiveness across major outsourcing destinations.",
    image: report2,
    file: "/reports/ghana-cost-benchmarks.pdf",
  },
  {
    id: 3,
    title: "Policy Brief: SEZ Tax Incentives for BPO",
    category: "Policy Briefs",
    description:
      "An overview of policy incentives and fiscal frameworks designed to attract BPO and ICT investments in Ghana.",
    image: report3,
    file: "/reports/sez-tax-incentives.pdf",
  },
  {
    id: 4,
    title: "Case Study: GCC Attraction Successes",
    category: "Case Studies",
    description:
      "A compilation of successful case studies detailing Ghana’s global competitiveness in customer service delivery.",
    image: report4,
    file: "/reports/gcc-attraction.pdf",
  },
  {
    id: 5,
    title: "Talent Development & Skills Assessment",
    category: "Annual Reports",
    description:
      "Analysis of the skills landscape and readiness for the outsourcing and digital service sectors in Ghana.",
    image: report5,
    file: "/reports/talent-development.pdf",
  },
  {
    id: 6,
    title: "Digital Infrastructure Readiness Report",
    category: "Market Benchmarks",
    description:
      "Evaluation of Ghana’s ICT infrastructure readiness to support scalable outsourcing operations.",
    image: report6,
    file: "/reports/digital-infrastructure.pdf",
  },
  {
    id: 7,
    title: "Market Penetration Strategies 2026",
    category: "Policy Briefs",
    description:
      "Strategic insights for expanding Ghana’s global outsourcing market presence and partnerships.",
    image: report7,
    file: "/reports/market-strategies.pdf",
  },
  {
    id: 8,
    title: "Innovation & Technology Strategies",
    category: "Case Studies",
    description:
      "Highlights on innovation-driven initiatives transforming the outsourcing ecosystem in Ghana.",
    image: report8,
    file: "/reports/innovation-strategies.pdf",
  },
];

const categories = [
  "All Reports",
  "Annual Reports",
  "Market Benchmarks",
  "Policy Briefs",
  "Case Studies",
  "Tech & Innovation",
];

const SectorReports = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Reports");
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 8;

  const filteredReports =
    selectedCategory === "All Reports"
      ? reports
      : reports.filter((r) => r.category === selectedCategory);

  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);

  const indexOfLast = currentPage * reportsPerPage;
  const indexOfFirst = indexOfLast - reportsPerPage;
  const currentReports = filteredReports.slice(indexOfFirst, indexOfLast);

  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb]">
      <Navbar />

      <main className="flex-grow py-10 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#191970] mb-4">
            Sector Reports & Knowledge Hub
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access BOSAG’s comprehensive research, market intelligence, and
            performance benchmarks that inform strategic decision-making across
            the sector.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[#ff6600] text-white shadow-md"
                  : "bg-white text-gray-800 border hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentReports.map((report) => (
            <div
              key={report.id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <FileText className="text-white" size={28} />
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {report.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow mb-4">
                  {report.description}
                </p>
                <a
                  href={report.file}
                  download
                  className="flex items-center justify-center gap-2 bg-[#ff6600] hover:bg-[#e95c00] text-white py-2 rounded-md font-medium transition-colors"
                >
                  <Download size={16} />
                  Download Full Report
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="p-2 rounded-full border disabled:opacity-40 hover:bg-gray-100"
            >
              <ChevronLeft size={18} />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md font-medium ${
                  currentPage === i + 1
                    ? "bg-[#191970] text-white"
                    : "bg-white border text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-2 rounded-full border disabled:opacity-40 hover:bg-gray-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SectorReports;
