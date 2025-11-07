import React, { useState } from "react";
import { useNavigate } from "react-router";
import FormProgressBar from "../../components/form-header.jsx";
import Sidebar from "../../components/sidebar.jsx";

export default function FormStep3() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nominatedRep: "",
    positionRole: "",
    alternateRep: "",
    authorizedSignatory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nominatedRep, positionRole, alternateRep, authorizedSignatory } =
      formData;

    const allFilled =
      nominatedRep.trim() &&
      positionRole.trim() &&
      alternateRep.trim() &&
      authorizedSignatory.trim();

    // ✅ Mark step 3 as completed only when all fields are filled
    const completed = JSON.parse(localStorage.getItem("completedSteps")) || [];
    if (allFilled && !completed.includes(3)) {
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nominated Representative */}
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

              {/* Position/Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position/Role
                </label>
                <input
                  type="text"
                  name="positionRole"
                  value={formData.positionRole}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Alternate Representative */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alternate Representative{" "}
                  <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  name="alternateRep"
                  value={formData.alternateRep}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Authorized Signatory */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Authorized Signatory (if different)
                </label>
                <input
                  type="text"
                  name="authorizedSignatory"
                  value={formData.authorizedSignatory}
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
