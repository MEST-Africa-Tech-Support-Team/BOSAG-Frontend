import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FormProgressBar from "../../components/form-header.jsx";

export default function FormStep3() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    nominatedRep: "",
    positionRole: "",
    alternateRep: "",
    authorizedSignatory: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);


  useEffect(() => {
    const { nominatedRep, positionRole, alternateRep, authorizedSignatory } = formData;
    const isValid =
      nominatedRep.trim() &&
      positionRole.trim() &&
      alternateRep.trim() &&
      authorizedSignatory.trim();
    setIsFormValid(Boolean(isValid));
  }, [formData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    navigate("/onboarding/form-d");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <FormProgressBar currentStep={3} completedSteps={[1, 2]} />


      <div className="max-w-5xl mx-auto px-4 py-10 w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-md rounded-md border border-gray-200"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-[#191970] mb-6">
            Section C: Governance and Representation
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nominated Representative to BOSAG
              </label>
              <input
                type="text"
                name="nominatedRep"
                value={formData.nominatedRep}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-700 focus:outline-none"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Position/Role
              </label>
              <input
                type="text"
                name="positionRole"
                value={formData.positionRole}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-700 focus:outline-none"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alternate Representative <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                name="alternateRep"
                value={formData.alternateRep}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-700 focus:outline-none"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Authorized Signatory (if different)
              </label>
              <input
                type="text"
                name="authorizedSignatory"
                value={formData.authorizedSignatory}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-700 focus:outline-none"
              />
            </div>
          </div>
        </form>


        <div className="flex justify-between mt-10">
          <button
            type="button"
            onClick={() => navigate("/onboarding/form-b")}
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-2 rounded-md shadow-sm transition-colors"
          >
            Previous
          </button>

          <button
            type="button"
            disabled={!isFormValid}
            onClick={handleSubmit}
            className={`font-medium px-8 py-2 rounded-md shadow-sm transition-colors ${
              isFormValid
                ? "bg-blue-700 hover:bg-blue-800 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
