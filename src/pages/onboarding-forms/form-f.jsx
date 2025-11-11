import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../components/sidebar.jsx";
import FormProgressBar from "../../components/form-header.jsx";
import { FileText } from "lucide-react";

export default function FormStep6() {
  const navigate = useNavigate();

  // ✅ Load saved data from localStorage if available
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("formF");
    return saved
      ? JSON.parse(saved)
      : {
          acknowledged: false,
        };
  });

  // ✅ Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("formF", JSON.stringify(formData));
  }, [formData]);

  const handleCheckboxChange = () => {
    setFormData((prev) => ({
      ...prev,
      acknowledged: !prev.acknowledged,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acknowledged) {
      alert("Please acknowledge and agree to the terms before continuing.");
      return;
    }

    // Save final data
    localStorage.setItem("formF", JSON.stringify(formData));

    // Mark step completed
    const completed = JSON.parse(localStorage.getItem("completedSteps")) || [];
    if (!completed.includes(6)) {
      completed.push(6);
      localStorage.setItem("completedSteps", JSON.stringify(completed));
    }

    // Navigate to summary
    navigate("/onboarding/summary");
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-20">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Progress Bar */}
        <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
          <FormProgressBar currentStep={6} />
        </div>

        {/* Content */}
        <section className="max-w-6xl mx-auto pt-2 pb-24 px-4 md:px-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md border border-gray-200 rounded-lg p-8 md:p-10 w-full"
          >
            <div className="text-center mb-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#E6ECFF] flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#1B2B65]" />
              </div>
              <h1 className="text-2xl font-semibold text-[#1B2B65] mt-4">
                BOSAG Membership
              </h1>
              <p className="text-gray-600 text-sm font-medium mt-1">
                Consent and Disclaimer
              </p>
              <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
                Please read the following terms and conditions carefully before
                proceeding with your membership application.
              </p>
            </div>

            {/* --- Consent Section --- */}
            <section className="mb-8">
              <h2 className="text-lg font-semibold text-[#1B2B65] mb-3 flex items-center">
                <span className="text-[#1B2B65] font-bold mr-2">1.</span>Consent
              </h2>
              <ol className="space-y-2 text-black text-sm leading-relaxed pl-6">
                <li>
                  <span className="text-[#3C6FE0] font-semibold mr-1">1.1</span>
                  The Member confirms that all information provided in this
                  application is true, accurate, and complete to the best of its
                  knowledge.
                </li>
                <li>
                  <span className="text-[#3C6FE0] font-semibold mr-1">1.2</span>
                  The Member agrees to be bound by the Constitution of the
                  Business Outsourcing Services Association of Ghana (BOSAG),
                  including any amendments made to it, and to comply with the
                  BOSAG Code of Conduct and Ethics.
                </li>
                <li>
                  <span className="text-[#3C6FE0] font-semibold mr-1">1.3</span>
                  The Member consents to active participation in BOSAG programs,
                  initiatives, and sector-wide engagements, and commits to
                  uphold the values and mission of the Association.
                </li>
                <li>
                  <span className="text-[#3C6FE0] font-semibold mr-1">1.4</span>
                  The Member authorizes BOSAG to publicly display its name,
                  logo, and sector affiliation in member directories, promotional
                  materials, and official communications, unless otherwise
                  declined in writing.
                </li>
                <li>
                  <span className="text-[#3C6FE0] font-semibold mr-1">1.5</span>
                  The Member acknowledges that membership data may be used for
                  legal, regulatory, or enforcement purposes by BOSAG and that
                  participation is voluntary and subject to BOSAG's governance
                  framework.
                </li>
              </ol>
            </section>

            {/* --- Data Protection Section --- */}
            <section className="mb-8">
              <h2 className="text-lg font-semibold text-[#1B2B65] mb-3 flex items-center">
                <span className="text-[#1B2B65] font-bold mr-2">2.</span>Data
                Protection
              </h2>
              <ol className="space-y-2 text-black text-sm leading-relaxed pl-6">
                <li>
                  <span className="text-[#F58220] font-semibold mr-1">2.1</span>
                  BOSAG shall collect, process, and store Member data in
                  accordance with applicable data protection laws and
                  regulations, including the Data Protection Act, 2012 (Act 843).
                </li>
                <li>
                  <span className="text-[#F58220] font-semibold mr-1">2.2</span>
                  The information obtained shall be used solely for purposes
                  related to membership administration, strategic coordination,
                  sector development, and compliance with applicable laws.
                </li>
                <li>
                  <span className="text-[#F58220] font-semibold mr-1">2.3</span>
                  BOSAG shall not disclose Member data to third parties without
                  prior written consent, except where required by law or
                  regulatory obligation.
                </li>
                <li>
                  <span className="text-[#F58220] font-semibold mr-1">2.4</span>
                  BOSAG shall implement appropriate technical and organizational
                  measures to safeguard Member data against unauthorized access,
                  loss, misuse, or alteration.
                </li>
              </ol>
            </section>

            {/* --- Disclaimer Section --- */}
            <section className="mb-8">
              <h2 className="text-lg font-semibold text-[#1B2B65] mb-3 flex items-center">
                <span className="text-[#1B2B65] font-bold mr-2">3.</span>
                Disclaimer of Liability
              </h2>
              <ol className="space-y-2 text-black text-sm leading-relaxed pl-6">
                <li>
                  <span className="text-[#D93025] font-semibold mr-1">3.1</span>
                  BOSAG and its affiliates shall not be liable for any direct,
                  indirect, incidental, or consequential damage arising from the
                  Member's participation in BOSAG activities or use of BOSAG
                  platforms or interactions with other members.
                </li>
                <li>
                  <span className="text-[#D93025] font-semibold mr-1">3.2</span>
                  The Member acknowledges that any commercial, business,
                  financial, or sectoral benefits are of a mutual nature, and
                  disclaims any responsibility for any engagements initiated
                  through BOSAG's network.
                </li>
                <li>
                  <span className="text-[#D93025] font-semibold mr-1">3.3</span>
                  The Member agrees to indemnify and hold harmless BOSAG, its
                  officers, employees, and affiliates from any claims,
                  liabilities, or damages resulting from the Member's conduct,
                  representation, or breach of BOSAG's policies.
                </li>
                <li>
                  <span className="text-[#D93025] font-semibold mr-1">3.4</span>
                  BOSAG reserves the right to amend its membership terms,
                  governance policies, and operational guidelines. Members shall
                  be notified of any material changes and retain the right to
                  review their membership if they do not agree to revised terms.
                </li>
              </ol>
            </section>

            {/* --- Acknowledgement --- */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <label className="flex items-start text-sm text-gray-700 space-x-2">
                <input
                  type="checkbox"
                  checked={formData.acknowledged}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 accent-[#F58220] mt-0.5 cursor-pointer"
                />
                <span>
                  <span className="font-medium">
                    I acknowledge and agree to the terms
                  </span>
                  <span className="block text-gray-500 text-xs mt-1">
                    By checking this box, I confirm that I have read, understood,
                    and voluntarily agreed to the terms outlined in this Consent
                    and Disclaimer Notice.
                  </span>
                </span>
              </label>

              {/* Buttons */}
              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => navigate("/onboarding/form-e")}
                  className="bg-[#191970] hover:bg-[#14145a] text-white font-medium px-8 py-2 rounded-md shadow-sm transition-colors"
                >
                  Previous
                </button>

                <button
                  type="submit"
                  className={`px-10 py-2 font-medium rounded-md shadow-sm transition-colors ${
                    formData.acknowledged
                      ? "bg-[#F58220] text-white hover:bg-[#e16e10]"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!formData.acknowledged}
                >
                  Next: Summary
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}