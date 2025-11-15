import React, { useState, useEffect } from "react";
import { Search, Download } from "lucide-react";
import { useNavigate } from "react-router";
import Sidebar from "../../components/sidebar.jsx";
import bosagApi from "../../api/bosagApi.js";

const MemberResourceHub = () => {
  const navigate = useNavigate();

  const tabs = ["All", "Annual Reports", "Quarterly Dashboards", "Case Studies"];
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

 
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth();  
    fetchUser();
  }, []);

  
  async function checkAuth() {
    try {
      await bosagApi.get("/user/profile");
    } catch (error) {
      console.log("Auth failed → redirecting to login");
      navigate("/login");
    }
  }

  async function fetchUser() {
    try {
      const res = await bosagApi.get("/user/profile");
      setUser(res.data);
    } catch (err) {
      console.log("Error fetching user:", err);
    }
  }

  const fullName = user ? `${user.firstName} ${user.lastName}` : "Loading...";
  const initials =
    user && user.firstName && user.lastName
      ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
      : "";

  
  const documents = [
    {
      title: "2023 State-of-Sector Report",
      date: "December 15, 2023",
      desc: "Comprehensive analysis of sector performance and market trends.",
      category: "Annual Reports",
      file: "/docs/report1.pdf",
    },
    {
      title: "Q4 2023 Dashboard",
      date: "January 5, 2024",
      desc: "Key performance indicators and quarterly summaries.",
      category: "Quarterly Dashboards",
      file: "/docs/dashboard_q4.pdf",
    },
    {
      title: "Cost Analysis Study 2024",
      date: "January 8, 2024",
      desc: "Detailed cost structure analysis and operational benchmarks.",
      category: "Case Studies",
      file: "/docs/case_study.pdf",
    },
    {
      title: "Market Outlook 2024",
      date: "March 4, 2024",
      desc: "Forward-looking analysis of market conditions and opportunities.",
      category: "Annual Reports",
      file: "/docs/outlook_2024.pdf",
    },
    {
      title: "Regulatory Update Brief",
      date: "March 8, 2024",
      desc: "Latest regulatory changes and compliance requirements.",
      category: "Quarterly Dashboards",
      file: "/docs/regulatory_update.pdf",
    },
    {
      title: "Q1 2024 Performance",
      date: "March 12, 2024",
      desc: "Quarterly performance metrics and trend analysis.",
      category: "Quarterly Dashboards",
      file: "/docs/q1_perf.pdf",
    },
  ];

  const filteredDocs = documents.filter((doc) => {
    const matchesTab = activeTab === "All" || doc.category === activeTab;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  
  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop();
    link.click();
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-sans">
      
      <div className="fixed left-0 top-0 h-full z-10">
        <Sidebar />
      </div>

      
      <div className="flex-1 flex flex-col ml-64">
       
        <div className="flex justify-end items-center h-16 px-8 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3">
            <span className="text-[#F58220] text-sm">●</span>

            
            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
              {initials}
            </div>

            <span className="font-medium text-gray-800 text-sm">
              {fullName}
            </span>
          </div>
        </div>

        
        <div className="p-6 md:p-8 max-w-6xl w-full space-y-6">
         
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
              Exclusive Member Resource Hub
            </h1>
            <p className="text-gray-600 mt-1.5 text-sm md:text-[0.95rem] leading-relaxed">
              Access proprietary sector insights, official governance documents, and research essential for strategic decision-making.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                alt="Featured"
                className="w-full md:w-[240px] h-48 md:h-auto object-cover"
              />
              <div className="flex-1 p-5 md:p-6">
                <span className="inline-block bg-[#F58220] text-white text-xs font-semibold px-2.5 py-1 rounded">
                  Featured Insight
                </span>
                <p className="text-gray-500 text-xs mt-2 mb-2">
                  Published 3 days ago
                </p>
                <h2 className="text-base md:text-lg font-semibold text-gray-900 leading-snug mb-2">
                  Musa Interview: 2024 Market Trends & Forecast
                </h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Exclusive insights from industry leader Musa on emerging market opportunities, regulatory changes, and strategic positioning for the upcoming fiscal year.
                </p>

                <button
                  onClick={() => navigate("/blog")}
                  className="bg-[#F58220] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#e37010] transition-all"
                >
                  Read Full Analysis
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                Sector Research & Publications
              </h3>
              <div className="relative mt-3 md:mt-0 w-full md:w-64">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#F58220] bg-white"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 text-sm rounded font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[#F58220] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDocs.length > 0 ? (
                filteredDocs.map((doc, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div
                        className="bg-white p-2 rounded border border-gray-200 cursor-pointer"
                        onClick={() => handleDownload(doc.file)}
                      >
                        <Download size={18} className="text-gray-600" />
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-gray-500 mb-2">{doc.date}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                      {doc.desc}
                    </p>

                    <button
                      onClick={() => handleDownload(doc.file)}
                      className="text-[#F58220] text-xs font-medium hover:underline"
                    >
                      Download PDF
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm col-span-full text-center py-10">
                  No documents found for your search.
                </p>
              )}
            </div>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
              Governance & Compliance
            </h3>
            <div className="space-y-3">
              {[
                {
                  title: "BOSAG Constitution",
                  version: "v4.0",
                  updated: "January 16, 2024",
                  icon: "📄",
                  file: "/docs/constitution.pdf",
                },
                {
                  title: "Code of Conduct and Ethics",
                  version: "v3.2",
                  updated: "February 1, 2024",
                  icon: "⚖️",
                  file: "/docs/ethics.pdf",
                },
                {
                  title: "Membership Terms & Conditions",
                  version: "v2.8",
                  updated: "March 1, 2024",
                  icon: "📋",
                  file: "/docs/terms.pdf",
                },
                {
                  title: "Governing Council Mandate",
                  version: "v3.2",
                  updated: "December 10, 2023",
                  icon: "📊",
                  file: "/docs/mandate.pdf",
                },
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{doc.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {doc.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        Version {doc.version} • Last updated {doc.updated}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownload(doc.file)}
                    className="text-[#F58220] text-xs font-medium hover:underline whitespace-nowrap"
                  >
                    View/Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberResourceHub;
