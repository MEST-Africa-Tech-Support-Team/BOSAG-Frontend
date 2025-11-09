import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Upload } from "lucide-react";
import FormProgressBar from "../../components/form-header.jsx";
import Sidebar from "../../components/sidebar.jsx";

export default function FormStep5() {
  const navigate = useNavigate();

  // ✅ Initialize form data
  const [formData, setFormData] = useState({
    companyProfile: "",
    attachments: {
      registrationCertificate: null,
      logo: null,
      marketingMaterial: null,
    },
  });

  const [wordCount, setWordCount] = useState(0);

  // ✅ Load saved data from localStorage (consistent key: "formE")
  useEffect(() => {
    const saved = localStorage.getItem("formE");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed);

        // Update word count
        if (parsed.companyProfile) {
          const words = parsed.companyProfile.trim().split(/\s+/).filter(Boolean);
          setWordCount(words.length);
        }
      } catch (err) {
        console.error("Error loading formE data:", err);
      }
    }
  }, []);

  // ✅ Auto-save whenever formData changes
  useEffect(() => {
    localStorage.setItem("formE", JSON.stringify(formData));
  }, [formData]);

  // ✅ Convert file to Base64 (for saving persistently)
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve({ name: file.name, data: reader.result });
      reader.onerror = (error) => reject(error);
    });

  // ✅ Handle file upload
  const handleFileChange = async (key, file) => {
    if (!file) return;
    const base64File = await fileToBase64(file);
    setFormData((prev) => ({
      ...prev,
      attachments: { ...prev.attachments, [key]: base64File },
    }));
  };

  // ✅ Handle text area
  const handleTextChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, companyProfile: value }));
    const words = value.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  };

  // ✅ Submit (go to next page)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save data to localStorage (redundant safety)
    localStorage.setItem("formE", JSON.stringify(formData));

    // Track completed step
    const completed = JSON.parse(localStorage.getItem("completedSteps")) || [];
    if (!completed.includes(5)) {
      completed.push(5);
      localStorage.setItem("completedSteps", JSON.stringify(completed));
    }

    navigate("/onboarding/form-f"); // Go to summary
  };

  // ✅ Reusable file upload component
  const UploadField = ({ label, name, required, optional, accept }) => {
    const file = formData.attachments[name];
    const inputId = `file-input-${name}`;

    return (
      <div className="border border-gray-200 rounded-md p-4 bg-white shadow-sm">
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
          {optional && <span className="text-gray-400 ml-2 text-sm">(Optional)</span>}
        </label>

        <div className="flex items-center space-x-3">
          {/* Upload Button */}
          <label
            htmlFor={inputId}
            className="inline-flex items-center space-x-2 bg-[#191970] hover:bg-[#14145a] text-white text-sm font-medium px-4 py-2 rounded-md cursor-pointer transition-colors"
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

          {/* File Name Display */}
          <div className="flex-1">
            <div className="border border-gray-200 rounded-md px-4 py-2 bg-gray-50 text-sm">
              <span className={`truncate ${file ? "text-gray-700" : "text-gray-400"}`}>
                {file ? file.name : "No file selected"}
              </span>
            </div>
          </div>

          {/* ✅ File Preview / Link */}
          {file?.data && (
            file.name.match(/\.(png|jpg|jpeg|svg)$/i) ? (
              <img
                src={file.data}
                alt="Preview"
                className="w-10 h-10 object-cover border rounded-md"
              />
            ) : (
              <a
                href={file.data}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
              >
                View File
              </a>
            )
          )}

          {/* Checkbox */}
          <input
            type="checkbox"
            readOnly
            checked={!!file}
            className="w-4 h-4 accent-[#F58220] cursor-default"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-20">
        <Sidebar />
      </aside>

      {/* Main */}
      <main className="flex-1 ml-64">
        <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
          <FormProgressBar currentStep={5} completedSteps={[1, 2, 3, 4]} />
        </div>

        <section className="max-w-6xl mx-auto pt-2 pb-24 px-4 md:px-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md border border-gray-200 rounded-lg p-8 md:p-10 w-full"
          >
            <h2 className="text-xl font-semibold text-[#191970] mb-8">
              Section E: Required Company Information
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              Please upload or attach the following documents:
            </p>

            {/* Text Input */}
            <div className="border border-gray-200 rounded-md p-4 bg-white shadow-sm mb-6">
              <label
                htmlFor="companyProfile"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company profile or capability statement
                <span className="text-red-500 ml-1">*</span>
              </label>

              <textarea
                id="companyProfile"
                rows="5"
                maxLength={500}
                value={formData.companyProfile}
                onChange={handleTextChange}
                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-[#191970] focus:border-[#191970] resize-none bg-gray-50"
              />

              <div className="text-right text-xs text-gray-500 mt-1">
                Word Count: {wordCount}/500
              </div>
            </div>

            {/* Upload Fields */}
            <div className="space-y-6">
              <UploadField
                label="Company registration certificate"
                name="registrationCertificate"
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

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10">
              <button
                type="button"
                onClick={() => navigate("/onboarding/form-d")}
                className="bg-[#191970] hover:bg-[#14145a] text-white font-medium px-8 py-2 rounded-md shadow-sm transition-colors"
              >
                Previous
              </button>

              <button
                type="submit"
                className="px-10 py-2 font-medium rounded-md bg-[#F58220] text-white hover:bg-[#e16e10] transition-colors"
              >
                Next: Section F
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
