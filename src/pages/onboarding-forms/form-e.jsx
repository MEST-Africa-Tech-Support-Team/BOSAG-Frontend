import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Upload } from "lucide-react"; 
import FormProgressBar from "../../components/form-header.jsx";

export default function FormStep5() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    attachments: {
      registrationCertificate: null,
      capabilityStatement: null,
      logo: null,
      marketingMaterial: null,
    },
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { registrationCertificate, capabilityStatement, logo } =
      formData.attachments;
    setIsFormValid(
      registrationCertificate !== null &&
        capabilityStatement !== null &&
        logo !== null
    );
  }, [formData]);

  const handleFileChange = (key, file) => {
    setFormData((prev) => ({
      attachments: { ...prev.attachments, [key]: file },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    navigate("/onboarding/form-f");
  };

  const UploadField = ({ label, name, required, optional, accept }) => {
    const file = formData.attachments[name];
    const inputId = `file-input-${name}`;

    return (
      <div className="border border-gray-200 rounded-md p-4 bg-white shadow-sm">


        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
          {optional && (
            <span className="text-gray-400 ml-2 text-sm">(Optional)</span>
          )}
        </label>


        <div className="flex items-center space-x-3">


          <div>
            <label
              htmlFor={inputId}
              className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-md cursor-pointer transition-colors"
            >
              <Upload className="w-4 h-4" />
              <span>Upload File</span>
            </label>
            <input
              id={inputId}
              type="file"
              accept={accept}
              className="hidden"
              onChange={(e) => handleFileChange(name, e.target.files[0])}
            />
          </div>


          <div className="flex-1">
            <div className="border border-gray-200 rounded-md px-4 py-2 bg-gray-50 text-sm">
              <span
                className={`truncate ${
                  file ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {file ? file.name : "No file selected"}
              </span>
            </div>
          </div>


          <div>
            <input
              type="checkbox"
              readOnly
              checked={!!file}
              className="w-4 h-4 accent-blue-700 cursor-default"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <FormProgressBar currentStep={5} completedSteps={[1, 2, 3, 4]} />

      <div className="max-w-5xl mx-auto px-4 py-10 w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-md rounded-md border border-gray-200"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-[#191970] mb-6">
            Section E: Required Attachments
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Please upload or attach the following documents:
          </p>

          <div className="space-y-6">
            <UploadField
              label="Company registration certificate"
              name="registrationCertificate"
              required
            />

            <UploadField
              label="Company profile or capability statement"
              name="capabilityStatement"
              required
            />

            <UploadField
              label="Logo (high-res PNG or vector)"
              name="logo"
              required
              accept=".png,.svg,.jpg,.jpeg"
            />

            <UploadField
              label="Any relevant brochures or marketing material"
              name="marketingMaterial"
              optional
            />
          </div>
        </form>

        <div className="flex justify-between mt-10">
          <button
            type="button"
            onClick={() => navigate("/onboarding/form-d")}
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
