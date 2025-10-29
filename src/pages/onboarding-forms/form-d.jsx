import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FormProgressBar from "../../components/form-header.jsx";

export default function FormStep4() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    declarations: [false, false, false, false, false],
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const declarationItems = [
    "We have reviewed and agree to abide by BOSAG Constitution.",
    "We consent to active participation in BOSAG activities and initiatives.",
    "We agree to pay membership dues as determined by BOSAG Board.",
    "We ensure that all submitted information in this application is accurate and complete.",
    "We understand that membership is subject to approval by the BOSAG Board.",
  ];


  useEffect(() => {
    const isValid = formData.declarations.every(Boolean);
    setIsFormValid(isValid);
  }, [formData]);


  const handleCheckboxChange = (index) => {
    setFormData((prev) => {
      const updated = [...prev.declarations];
      updated[index] = !updated[index];
      return { declarations: updated };
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    navigate("/onboarding/form-e"); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">


      <FormProgressBar currentStep={4} completedSteps={[1, 2, 3]} />

      <div className="max-w-5xl mx-auto px-4 py-10 w-full">
        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-md rounded-md border border-gray-200"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-[#191970] mb-6">
            Section D: Commitment and Declarations
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Please tick to confirm your organization’s agreement with the following:
          </p>

          <div className="space-y-4">
            {declarationItems.map((item, index) => (
              <label
                key={index}
                className="flex justify-between items-start border rounded-md p-3 cursor-pointer hover:border-blue-700 transition"
              >
                <span className="text-sm text-gray-700 leading-5 pr-4">
                  {item}
                </span>

                <input
                  type="checkbox"
                  checked={formData.declarations[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="w-4 h-4 border-gray-400"
                />
              </label>
            ))}
          </div>
        </form>



        <div className="flex justify-between mt-10">
          <button
            type="button"
            onClick={() => navigate("/onboarding/form-c")}
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-2 rounded-md shadow-sm transition-colors"
          >
            Previous
          </button>

          <button
            type="submit"
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
