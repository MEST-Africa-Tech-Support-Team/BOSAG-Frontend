import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Upload, X } from "lucide-react";
import FormProgressBar from "../../components/form-header.jsx";
import Sidebar from "../../components/sidebar.jsx";
import { Link } from "react-router";

// ✅ Base64 helper (outside component)
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export default function FormStep5() {
  const navigate = useNavigate();
  const [wordCount, setWordCount] = useState(0);

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("formE");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Clean old object URLs (they're not valid after reload)
        const cleanFiles = {};
        for (const key in parsed.files) {
          const val = parsed.files[key];
          // Keep only base64 strings or null
          cleanFiles[key] = typeof val === "string" && val.startsWith("data:") ? val : null;
        }
        return { ...parsed, files: cleanFiles };
      } catch (err) {
        console.error("Failed to parse formE", err);
      }
    }
    return {
      companyProfile: "",
      files: {
        registrationCertificate: null,
        logo: null,
        brochure: null,
      },
    };
  });

  useEffect(() => {
    const words = formData.companyProfile.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  }, [formData.companyProfile]);

  useEffect(() => {
    // Only store base64 strings (they're safe in localStorage)
    const safeFiles = {};
    for (const key in formData.files) {
      const val = formData.files[key];
      safeFiles[key] = typeof val === "string" && val.startsWith("data:") ? val : null;
    }
    localStorage.setItem("formE", JSON.stringify({ ...formData, files: safeFiles }));
  }, [formData]);

  const handleTextChange = (e) => {
    const value = e.target.value;
    const words = value.trim().split(/\s+/).filter(Boolean);
    if (words.length <= 500) {
      setFormData((prev) => ({ ...prev, companyProfile: value }));
      setWordCount(words.length);
    }
  };

  // ✅ FIXED: Convert file to Base64 instead of object URL
  const handleFileChange = async (key, file) => {
    if (!file) return;
    try {
      const base64 = await fileToBase64(file);
      setFormData((prev) => ({
        ...prev,
        files: { ...prev.files, [key]: base64 },
      }));
    } catch (err) {
      console.error("Failed to read file:", err);
      alert("Failed to load file. Please try again.");
    }
  };

  const handleFileRemove = (key) => {
    setFormData((prev) => ({
      ...prev,
      files: { ...prev.files, [key]: null },
    }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.companyProfile.trim())
      errors.push("Company profile is required");
    if (!formData.files.registrationCertificate)
      errors.push("Registration certificate is required");
    if (!formData.files.logo) errors.push("Company logo is required");
    return errors;
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      alert("Please complete all required fields:\n" + errors.join("\n"));
      return;
    }

    const completed = JSON.parse(localStorage.getItem("completedSteps")) || [];
    if (!completed.includes(5)) {
      completed.push(5);
      localStorage.setItem("completedSteps", JSON.stringify(completed));
    }

    navigate("/onboarding/summary");
  };

  const UploadField = ({ label, name, required, optional, accept }) => {
    const fileUrl = formData.files[name]; // Now a base64 string (safe for <img> and display)
    const inputId = `file-input-${name}`;

    return (
      <div className="border border-gray-200 rounded-md p-4 bg-white shadow-sm">
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
          {optional && <span className="text-gray-400 ml-2 text-sm">(Optional)</span>}
        </label>

        <div className="flex items-center space-x-3">
          <label
            htmlFor={inputId}
            className="inline-flex items-center space-x-2 text-sm font-medium px-4 py-2 rounded-md cursor-pointer bg-[#191970] hover:bg-[#14145a] text-white"
          >
            <Upload className="w-4 h-4" />
            <span>Upload File</span>
          </label>
          <input
            id={inputId}
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => e.target.files[0] && handleFileChange(name, e.target.files[0])}
          />
          <div className="flex-1 min-w-0">
            <div className="border border-gray-200 rounded-md px-4 py-2 bg-gray-50 text-sm flex items-center justify-between">
              <span className={`truncate ${fileUrl ? "text-gray-700" : "text-gray-400"}`}>
                {fileUrl ? "File selected" : "No file selected"}
              </span>
              {fileUrl && (
                <button
                  type="button"
                  onClick={() => handleFileRemove(name)}
                  className="ml-2 text-red-500 hover:text-red-700"
                  title="Remove file"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-20">
        <Sidebar />
      </aside>

      <main className="flex-1 ml-64">
        <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
          <FormProgressBar currentStep={5} />
        </div>

        <section className="max-w-6xl mx-auto pt-2 pb-24 px-4 md:px-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md border border-gray-200 rounded-lg p-8 md:p-10 w-full"
          >
            <h2 className="text-xl font-semibold text-[#191970] mb-8">
              Section E: Required Company Information
            </h2>

            <div className="border border-gray-200 rounded-md p-4 bg-white shadow-sm mb-6">
              <label htmlFor="companyProfile" className="block text-sm font-medium text-gray-700 mb-2">
                Company profile or capability statement
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="companyProfile"
                rows="5"
                value={formData.companyProfile}
                onChange={handleTextChange}
                placeholder="Describe your company (max 500 words)..."
                className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-[#191970] focus:border-[#191970] resize-none bg-gray-50 placeholder-gray-400"
              />
              <div className="text-right text-xs text-gray-500 mt-1">{wordCount}/500 words</div>
            </div>

            <div className="space-y-6">
              <UploadField label="Company registration certificate" name="registrationCertificate" required accept=".pdf,.jpg,.jpeg,.png" />
              <UploadField label="Logo (high-res PNG or vector)" name="logo" required accept=".png,.svg,.jpg,.jpeg" />
              <UploadField label="Any relevant brochures or marketing material" name="brochure" optional accept=".pdf,.jpg,.jpeg,.png" />
            </div>

            <Link to="/onboarding/form-f">
              <button type="button" className="bg-[#191970] hover:bg-[#14145a] text-white font-medium px-8 py-2 rounded-md shadow-sm transition-colors mt-6">
                View Consent and Disclaimer
              </button>
            </Link>

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
                Continue to Summary
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}