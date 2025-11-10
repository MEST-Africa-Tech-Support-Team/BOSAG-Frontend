import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FormProgressBar from "../../components/form-header.jsx";
import Sidebar from "../../components/sidebar.jsx";

export default function FormStep2() {
  const navigate = useNavigate();

  // ✅ Load any saved data first
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("formB");
    return saved
      ? JSON.parse(saved)
      : {
          contactName: "",
          jobTitle: "",
          email: "",
          phone: "",
        };
  });

  // ✅ Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("formB", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save before navigating
    localStorage.setItem("formB", JSON.stringify(formData));

    // Only mark complete if all fields filled
    const isComplete = Object.values(formData).every((v) => v.trim() !== "");
    const completed = JSON.parse(localStorage.getItem("completedSteps")) || [];

    if (isComplete && !completed.includes(2)) {
      completed.push(2);
      localStorage.setItem("completedSteps", JSON.stringify(completed));
    }

    navigate("/onboarding/form-c");
  };

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      {/* Fixed Sidebar */}
      <aside className="w-64 fixed top-0 left-0 h-full bg-[#0A0A3A] text-white shadow-lg">
        <Sidebar />
      </aside>

      {/* Main Section */}
      <main className="flex-1 ml-64 flex flex-col">
        {/* Header Progress Bar */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <FormProgressBar currentStep={2} />
        </div>

        {/* Content Area */}
        <div className="flex justify-center px-6 py-6">
          <div className="bg-white rounded-lg shadow-md w-full max-w-6xl p-10 border border-gray-200">
            <h2 className="text-xl font-semibold text-[#191970] mb-1">
              Section B: Contact Information
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              Please provide your organization’s contact details
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Primary Contact Name
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#191970] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Position/Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#191970] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#191970] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#191970] focus:outline-none"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-10">
                <button
                  type="button"
                  onClick={() => navigate("/onboarding/form-a")}
                  className="bg-[#191970] hover:bg-[#14145a] text-white font-medium px-8 py-2 rounded-md shadow-sm transition-colors"
                >
                  Previous
                </button>

                <button
                  type="submit"
                  className="bg-[#F58220] hover:bg-[#e16e10] text-white font-medium px-8 py-2 rounded-md shadow-sm transition-colors"
                >
                  Next: Section C
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
