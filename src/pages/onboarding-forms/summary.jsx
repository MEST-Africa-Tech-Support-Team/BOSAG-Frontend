import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../components/sidebar.jsx";
import toast, { Toaster } from "react-hot-toast";
import bosagApi from "../../api/bosagApi.js";

// ✅ Cloudinary frontend upload config
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export default function SummaryPage() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [forms, setForms] = useState({
    formA: {},
    formB: {},
    formC: {},
    formD: {},
    formE: {},
    formF: {},
  });

  useEffect(() => {
    setForms({
      formA: JSON.parse(localStorage.getItem("formA")) || {},
      formB: JSON.parse(localStorage.getItem("formB")) || {},
      formC: JSON.parse(localStorage.getItem("formC")) || {},
      formD: JSON.parse(localStorage.getItem("formD")) || {},
      formE: JSON.parse(localStorage.getItem("formE")) || {},
      formF: JSON.parse(localStorage.getItem("formF")) || {},
    });
  }, []);

  const handleEdit = (path) => navigate(path);

  // ✅ Upload file to Cloudinary
  const uploadToCloudinary = async (file) => {
    if (!CLOUD_NAME || !UPLOAD_PRESET) {
      throw new Error("Cloudinary not configured");
    }

    // If file is already a URL string, return as-is (assume backend URL)
    if (typeof file === "string" && file.startsWith("blob:") === false) return file;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", "membership_applications");

    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.error?.message || "Cloudinary upload failed");
    }
    const result = await res.json();
    return result.secure_url;
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const token = localStorage.getItem("bosagToken");
    if (!token) {
      toast.error("No authentication token found. Please log in again.");
      setSubmitting(false);
      return;
    }

    try {
      const formA = JSON.parse(localStorage.getItem("formA")) || {};
      const formB = JSON.parse(localStorage.getItem("formB")) || {};
      const formC = JSON.parse(localStorage.getItem("formC")) || {};
      const formD = JSON.parse(localStorage.getItem("formD")) || {};
      const formE = JSON.parse(localStorage.getItem("formE")) || {};
      const formF = JSON.parse(localStorage.getItem("formF")) || {};

      const formData = new FormData();

      // Section A
      formData.append("organizationName", formA.organizationName || "");
      formData.append("yearEstablished", formA.yearEstablished?.toString() || "");
      formData.append("registrationNumber", formA.registrationNumber || "");

      if (Array.isArray(formA.organizationType)) {
        formA.organizationType.forEach((type) => formData.append("organizationType[]", type));
      } else if (formA.organizationType) {
        formData.append("organizationType[]", formA.organizationType);
      }

      if (formA.organizationType?.includes("Other")) {
        formData.append("otherOrganizationType", formA.otherOrganizationType || "");
      }

      formData.append("membershipTier", formA.membershipTier || "");
      formData.append("sectorFocus", formA.sectorFocus || "");
      formData.append("employeesGhana", formA.employeesGhana?.toString() || "");
      formData.append("employeesGlobal", formA.employeesGlobal?.toString() || "");

      // Section B
      Object.entries(formB).forEach(([key, value]) => formData.append(key, value || ""));

      // Section C
      Object.entries(formC).forEach(([key, value]) => formData.append(key, value || ""));

      // Section D
      Object.entries(formD).forEach(([key, value]) => formData.append(key, value ? "true" : "false"));

      // Section E – files & company profile
      const fileKeys = ["registrationCertificate", "logo", "brochure"];
      for (const key of fileKeys) {
        if (formE.files?.[key]) {
          const uploadedUrl = await uploadToCloudinary(formE.files[key]);
          formData.append(key, uploadedUrl);
        }
      }
      formData.append("companyProfile", formE.companyProfile || "");

      // Section F
      formData.append("acknowledged", formF.acknowledged ? "true" : "false");

      // ✅ POST to backend
      await bosagApi.post("/onboarding/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      // Clear localStorage
      ["formA", "formB", "formC", "formD", "formE", "formF"].forEach((key) =>
        localStorage.removeItem(key)
      );
      localStorage.removeItem("completedSteps");

      toast.success("✅ Application submitted successfully!");
      navigate("/onboarding/application");
    } catch (err) {
      console.error("Submission error:", err);
      const message =
        err.response?.data?.message || err.response?.statusText || err.message || "Failed to submit application.";
      toast.error(`❌ ${message}`);
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Toaster position="top-right" />
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-20">
        <Sidebar />
      </aside>

      <main className="flex-1 ml-64 px-10 py-10">
        <div className="mb-6">
          <h1 className="text-[#191970] font-bold text-2xl">
            Application Review: Final Submission
          </h1>
          <p className="text-gray-600 mt-1">
            Please verify all information below is accurate before submitting.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-800 px-5 py-3 rounded-md mb-8 text-sm">
            ❌ <span className="font-semibold">Error:</span> {error}
          </div>
        )}

        <div className="bg-green-50 border border-green-300 text-green-800 px-5 py-3 rounded-md mb-8 text-sm font-medium">
          ✅ <span className="font-semibold">Status:</span> All Sections Completed & Ready for Submission
        </div>

        <SummarySection title="Section A: Organisational Details" data={forms.formA} onEdit={() => handleEdit("/onboarding/form-a")} />
        <SummarySection title="Section B: Organization Contact Information" data={forms.formB} onEdit={() => handleEdit("/onboarding/form-b")} />
        <SummarySection title="Section C: Governance and Representation" data={forms.formC} onEdit={() => handleEdit("/onboarding/form-c")} />
        <SummarySection title="Section D: Commitment and Declarations" data={forms.formD} onEdit={() => handleEdit("/onboarding/form-d")} />
        <SummarySection title="Section E: Required Company Information" data={forms.formE} onEdit={() => handleEdit("/onboarding/form-e")} />
        <SummarySection title="Section F: Consent and Disclaimer" data={forms.formF} onEdit={() => handleEdit("/onboarding/form-f")} />

        <div className="flex justify-between items-center mt-10">
          <button
            onClick={() => navigate("/onboarding/form-f")}
            className="px-6 py-2 border border-[#191970] text-[#191970] font-medium rounded-md hover:bg-[#191970] hover:text-white transition"
            disabled={submitting}
          >
            Go Back
          </button>

          <button
            onClick={handlePostSubmit}
            disabled={submitting}
            className="px-6 py-2 bg-[#F58220] hover:bg-[#e16e10] text-white font-medium rounded-md transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </main>
    </div>
  );
}

// ===================== SUMMARY SECTION (unchanged UI) =====================
const SummarySection = ({ title, data, onEdit }) => {
  if (!data || Object.keys(data).length === 0) return null;
  const isSectionD = title.includes("Commitment and Declarations");
  const isSectionE = title.startsWith("Section E");
  const isSectionF = title.includes("Consent and Disclaimer");

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-semibold text-[#1a365d]">{title}</h2>
        <button
          onClick={onEdit}
          className="flex items-center gap-1.5 text-[#d97706] border border-[#d97706] px-3 py-1.5 rounded text-xs font-medium hover:bg-[#d97706] hover:text-white transition"
        >
          <span>✎</span> Edit Section
        </button>
      </div>

      {isSectionD ? (
        <div className="space-y-4 text-sm">
          {Object.entries(data)
            .filter(([key]) => !["files", "attachments"].includes(key))
            .map(([key, value]) => (
              <div key={key} className="pb-2">
                <p className="text-gray-700 mb-1">{formatDeclarationLabel(key)}</p>
                <p className="text-teal-600 font-medium">{value ? "Confirmed" : "Not Confirmed"}</p>
              </div>
            ))}
        </div>
      ) : isSectionE ? (
        <div className="space-y-6 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 text-sm mb-1">Company Profile Overview Statement</p>
              <p className="text-gray-900 font-medium">
                {data.companyProfile ? `${data.companyProfile.trim().split(/\s+/).length}/500 words` : "Not provided"}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Registration Certificate</p>
              <p className="font-medium text-teal-600">
                {data.files?.registrationCertificate ? "File Selected" : "Missing"}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 text-sm mb-1">Logo</p>
              <p className="font-medium text-teal-600">{data.files?.logo ? "File Selected" : "Missing"}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Brochure</p>
              <p className="font-medium">{data.files?.brochure ? "File Selected" : "Not provided (optional)"}</p>
            </div>
          </div>
        </div>
      ) : isSectionF ? (
        <div className="text-sm">
          <div className="pb-2">
            <p className="text-gray-700 mb-1">Terms Acknowledgement</p>
            <p className="font-medium">
              {data.acknowledged ? <span className="text-teal-600">Confirmed</span> : <span className="text-gray-500">Not Confirmed</span>}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
          {Object.entries(data)
            .filter(([key]) => !["files", "attachments"].includes(key))
            .map(([key, value]) => (
              <div key={key}>
                <p className="text-gray-600 text-sm mb-1">{formatLabel(key)}</p>
                <p className="text-gray-900 font-medium">{formatValue(value)}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

function formatLabel(label) {
  return label.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).replaceAll("_", " ");
}

function formatDeclarationLabel(label) {
  const labelMap = {
    agreesConstitution: "Reviewed and agreed to abide by the BOSAG Constitution",
    accurateInformation: "Confirm that all information provided is accurate",
    commitsParticipation: "Commit to active participation in BOSAG activities",
    agreesFeePayment: "Agree to pay membership fees as determined",
    BosagApproval: "Understand membership is subject to BOSAG Board approval",
  };
  return labelMap[label] || formatLabel(label);
}

function formatValue(value) {
  if (typeof value === "boolean") return value ? "Confirmed" : "Not Confirmed";
  if (Array.isArray(value)) return value.join(", ") || "—";
  return value?.toString().trim() || "—";
}
