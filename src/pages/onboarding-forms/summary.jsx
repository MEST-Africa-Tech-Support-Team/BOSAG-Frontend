import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../components/sidebar.jsx";

export default function SummaryPage() {
  const navigate = useNavigate();

  const [forms, setForms] = useState({
    formA: {},
    formB: {},
    formC: {},
    formD: {},
    formE: {},
  });

  useEffect(() => {
    setForms({
      formA: JSON.parse(localStorage.getItem("formA")) || {},
      formB: JSON.parse(localStorage.getItem("formB")) || {},
      formC: JSON.parse(localStorage.getItem("formC")) || {},
      formD: JSON.parse(localStorage.getItem("formD")) || {},
      formE: JSON.parse(localStorage.getItem("formStep5")) || {}, // ✅ Using same key as your Form E
    });
  }, []);

  const handleEdit = (path) => navigate(path);

  const handleSubmit = () => {
    alert("✅ Application submitted successfully!");
    localStorage.clear();
    navigate("/onboarding/application");
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-20">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 px-10 py-10">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[#191970] font-bold text-2xl">
            Application Review: Final Submission
          </h1>
          <p className="text-gray-600 mt-1">
            Please verify all information below is accurate before submitting
            your application for Due Diligence.
          </p>
        </div>

        {/* Status Banner */}
        <div className="bg-green-50 border border-green-300 text-green-800 px-5 py-3 rounded-md mb-8 text-sm font-medium">
          ✅ <span className="font-semibold">Status:</span> All Sections
          Completed & Ready for Submission
        </div>

        {/* Summary Sections */}
        <SummarySection
          title="Section A: Organisational Details"
          data={forms.formA}
          onEdit={() => handleEdit("/onboarding/form-a")}
        />
        <SummarySection
          title="Section B: Organization Contact Information"
          data={forms.formB}
          onEdit={() => handleEdit("/onboarding/form-b")}
        />
        <SummarySection
          title="Section C: Governance and Representation"
          data={forms.formC}
          onEdit={() => handleEdit("/onboarding/form-c")}
        />
        <SummarySection
          title="Section D: Commitment and Declarations"
          data={forms.formD}
          onEdit={() => handleEdit("/onboarding/form-d")}
        />
        <SummarySection
          title="Section E: Required Company Information"
          data={forms.formE}
          onEdit={() => handleEdit("/onboarding/form-e")}
        />

        {/* Buttons */}
        <div className="flex justify-between items-center mt-10">
          <button
            onClick={() => navigate("/onboarding/form-e")}
            className="px-6 py-2 border border-[#191970] text-[#191970] font-medium rounded-md hover:bg-[#191970] hover:text-white transition"
          >
            Go Back
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#F58220] hover:bg-[#e16e10] text-white font-medium rounded-md transition"
          >
            Submit Application
          </button>
        </div>
      </main>
    </div>
  );
}


const SummarySection = ({ title, data, onEdit }) => {
  if (!data || Object.keys(data).length === 0) return null;

  const attachments = data.attachments || {};
  const isSectionE = title.includes("Company Information");

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-[#191970]">{title}</h2>
        <button
          onClick={onEdit}
          className="flex items-center gap-1 text-[#F58220] border border-[#F58220] px-4 py-1 rounded-md text-sm font-medium hover:bg-[#F58220] hover:text-white transition"
        >
          ✎ Edit Section
        </button>
      </div>

      {/* ✅ Section E: Custom file layout */}
      {isSectionE ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {/* Left column */}
          <div className="space-y-4">
            {/* Company Profile */}
            <div>
              <p className="text-gray-700 font-medium">
                Company Profile Overview Statement (Text)
              </p>
              <p className="text-gray-500 border-b border-dotted border-gray-200 pb-1">
                {data.companyProfile
                  ? `${data.companyProfile.trim().split(/\s+/).length}/500 words entered`
                  : "No text provided"}
              </p>
            </div>

            {/* Logo */}
            <div>
              <p className="text-gray-700 font-medium">
                Logo (high-res PNG or vector)
              </p>
              <p className="border-b border-dotted border-gray-200 pb-1">
                {attachments.logo ? (
                  <a
                    href={attachments.logo.data}
                    download={attachments.logo.name}
                    className="text-green-700 font-medium hover:underline"
                  >
                    File Uploaded: {attachments.logo.name}
                  </a>
                ) : (
                  <span className="text-gray-400">No File Uploaded</span>
                )}
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Registration Certificate */}
            <div>
              <p className="text-gray-700 font-medium">
                Company Registration Certificate
              </p>
              <p className="border-b border-dotted border-gray-200 pb-1">
                {attachments.registrationCertificate ? (
                  <a
                    href={attachments.registrationCertificate.data}
                    download={attachments.registrationCertificate.name}
                    className="text-green-700 font-medium hover:underline"
                  >
                    File Uploaded: {attachments.registrationCertificate.name}
                  </a>
                ) : (
                  <span className="text-gray-400">No File Uploaded</span>
                )}
              </p>
            </div>

            {/* Marketing Material */}
            <div>
              <p className="text-gray-700 font-medium">
                Relevant Brochure or Marketing Material (Optional)
              </p>
              <p className="border-b border-dotted border-gray-200 pb-1">
                {attachments.marketingMaterial ? (
                  <a
                    href={attachments.marketingMaterial.data}
                    download={attachments.marketingMaterial.name}
                    className="text-green-700 font-medium hover:underline"
                  >
                    File Uploaded: {attachments.marketingMaterial.name}
                  </a>
                ) : (
                  <span className="text-gray-400">No File Uploaded</span>
                )}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* ✅ Other Sections (A–D) */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {Object.entries(data)
            .filter(([key]) => key !== "attachments")
            .map(([key, value]) => (
              <div key={key}>
                <p className="text-gray-700 font-medium">{formatLabel(key)}</p>
                <p className="text-gray-900 font-semibold border-b border-dotted border-gray-200 pb-1">
                  {formatValue(value)}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

/* -------------------------------
   HELPERS
-------------------------------- */
function formatLabel(label) {
  return label
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .replaceAll("_", " ");
}

function formatValue(value) {
  if (typeof value === "boolean")
    return value ? (
      <span className="text-green-600 font-medium">Confirmed</span>
    ) : (
      <span className="text-gray-500">Not Confirmed</span>
    );

  if (typeof value === "string") return value.trim() || "—";

  return "—";
}
