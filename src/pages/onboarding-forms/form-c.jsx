import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FormProgressBar from "../../components/form-header.jsx";
import Sidebar from "../../components/sidebar.jsx";

export default function FormStep3() {
  const navigate = useNavigate();

  // ✅ Load saved data from localStorage first
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("formC");
    return saved
      ? JSON.parse(saved)
      : {
          nominatedRep: "",
          nomPositionRole: "",
          nomEmailAddress: "",
          nomPhoneNumber: "",
          alternateRep: "",
          altPositionRole: "",
          altEmailAddress: "",
          altPhoneNumber: "",
        };
  });

  // ✅ Save to localStorage on every change
  useEffect(() => {
    localStorage.setItem("formC", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("formC", JSON.stringify(formData));

    // Check if all required fields for nominated rep are filled
    const isComplete =
      formData.nominatedRep.trim() &&
      formData.nomPositionRole.trim() &&
      formData.nomEmailAddress.trim() &&
      formData.nomPhoneNumber.trim();

    // ✅ Mark step 3 complete if all main fields filled
    const completed = JSON.parse(localStorage.getItem("completedSteps")) || [];
    if (isComplete && !completed.includes(3)) {
      completed.push(3);
      localStorage.setItem("completedSteps", JSON.stringify(completed));
    }

    navigate("/onboarding/form-d");
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
          <FormProgressBar currentStep={3} />
        </div>

        {/* Form Section */}
        <section className="max-w-6xl mx-auto pt-2 pb-24 px-4 md:px-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md border border-gray-200 rounded-lg p-8 md:p-10 w-full"
          >
            <h2 className="text-xl font-semibold text-[#191970] mb-8">
              Section C: Governance and Representation
            </h2>

            {/* Nominated Representative */}
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                   Nominated Representative to BOSAG
                </label>
                <input
                  type="text"
                  name="nominatedRep"
                  value={formData.nominatedRep}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position/Role
                </label>
                <input
                  type="text"
                  name="nomPositionRole"
                  value={formData.nomPositionRole}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="nomEmailAddress"
                  placeholder="example@company.com"
                  value={formData.nomEmailAddress}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="nomPhoneNumber"
                  value={formData.nomPhoneNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Alternate Representative */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alternate Representative{" "}
              <span className="text-gray-400 text-sm font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="alternateRep"
                  value={formData.alternateRep}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position/Role
                </label>
                <input
                  type="text"
                  name="altPositionRole"
                  value={formData.altPositionRole}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="altEmailAddress"
                  placeholder="example@company.com"
                  value={formData.altEmailAddress}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="altPhoneNumber"
                  value={formData.altPhoneNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10">
              <button
                type="button"
                onClick={() => navigate("/onboarding/form-b")}
                className="bg-[#191970] hover:bg-[#14145a] text-white font-medium px-8 py-2 rounded-md shadow-sm transition-colors"
              >
                Previous
              </button>

              <button
                type="submit"
                className="px-10 py-2 font-medium rounded-md bg-[#F58220] text-white hover:bg-[#e16e10] transition-colors"
              >
                Next: Section D
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}