import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FormProgressBar from "../../components/form-header.jsx";
import Sidebar from "../../components/sidebar.jsx";

export default function FormStep4() {
  const navigate = useNavigate();

  // ✅ Load saved data from localStorage first
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("formD");
    return saved
      ? JSON.parse(saved)
      : {
          agreesConstitution: false,
          commitsParticipation: false,
          agreesFeePayment: false,
          accurateInformation: false,
          BosagApproval: false,
        };
  });

  const declarationItems = [
    {
      text: "We have reviewed and agree to abide by BOSAG Constitution.",
      name: "agreesConstitution"
    },
    {
      text: "We consent to active participation in BOSAG activities and initiatives.",
      name: "commitsParticipation"
    },
    {
      text: "We agree to pay membership dues as determined by BOSAG Board.",
      name: "agreesFeePayment"
    },
    {
      text: "We ensure that all submitted information in this application is accurate and complete.",
      name: "accurateInformation"
    },
    {
      text: "We understand that membership is subject to approval by the BOSAG Board.",
      name: "BosagApproval"
    },
  ];

  // ✅ Save to localStorage every time declarations change
  useEffect(() => {
    localStorage.setItem("formD", JSON.stringify(formData));
  }, [formData]);

  const handleCheckboxChange = (name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("formD", JSON.stringify(formData));

    const allChecked = Object.values(formData).every(Boolean);

    // ✅ Mark Section D as completed only when all are checked
    const completed = JSON.parse(localStorage.getItem("completedSteps")) || [];
    if (allChecked && !completed.includes(4)) {
      completed.push(4);
      localStorage.setItem("completedSteps", JSON.stringify(completed));
    }

    navigate("/onboarding/form-e");
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
          <FormProgressBar currentStep={4} />
        </div>

        {/* Form Section */}
        <section className="max-w-6xl mx-auto pt-2 pb-24 px-4 md:px-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md border border-gray-200 rounded-lg p-8 md:p-10 w-full"
          >
            <h2 className="text-xl font-semibold text-[#191970] mb-8">
              Section D: Commitment and Declarations
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              Please tick to confirm your organization's agreement with the following:
            </p>

            <div className="space-y-4">
              {declarationItems.map((item, index) => (
                <label
                  key={index}
                  className="flex justify-between items-start border rounded-md p-3 cursor-pointer hover:border-[#191970] transition"
                >
                  <span className="text-sm text-gray-700 leading-5 pr-4">
                    {item.text}
                  </span>

                  <input
                    type="checkbox"
                    name={item.name}
                    checked={formData[item.name]}
                    onChange={() => handleCheckboxChange(item.name)}
                    className="w-4 h-4 border-gray-400 accent-[#F58220]"
                  />
                </label>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10">
              <button
                type="button"
                onClick={() => navigate("/onboarding/form-c")}
                className="bg-[#191970] hover:bg-[#14145a] text-white font-medium px-8 py-2 rounded-md shadow-sm transition-colors"
              >
                Previous
              </button>

              <button
                type="submit"
                className="px-10 py-2 font-medium rounded-md bg-[#F58220] text-white hover:bg-[#e16e10] transition-colors"
              >
                Next: Section E
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}