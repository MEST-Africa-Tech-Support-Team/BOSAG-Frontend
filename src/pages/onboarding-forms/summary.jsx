import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../components/sidebar.jsx";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

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

      // Upload files to backend first and get URLs
      const uploadedFiles = {};

      if (formE.files?.registrationCertificate?.data) {
        const blob = await fetch(formE.files.registrationCertificate.data).then(r => r.blob());
        const form = new FormData();
        form.append("file", blob, formE.files.registrationCertificate.name);

        const resp = await axios.post(
          "https://bosag-backend.onrender.com/api/upload",
          form,
          { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
        );
        uploadedFiles.registrationCertificate = resp.data.url;
      }

      if (formE.files?.logo?.data) {
        const blob = await fetch(formE.files.logo.data).then(r => r.blob());
        const form = new FormData();
        form.append("file", blob, formE.files.logo.name);

        const resp = await axios.post(
          "https://bosag-backend.onrender.com/api/upload",
          form,
          { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
        );
        uploadedFiles.logo = resp.data.url;
      }

      if (formE.files?.brochure?.data) {
        const blob = await fetch(formE.files.brochure.data).then(r => r.blob());
        const form = new FormData();
        form.append("file", blob, formE.files.brochure.name);

        const resp = await axios.post(
          "https://bosag-backend.onrender.com/api/upload",
          form,
          { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
        );
        uploadedFiles.brochure = resp.data.url;
      }

      const today = new Date().toISOString().split("T")[0];

      const payload = {
        // Section A
        organizationName: formA.organizationName || "",
        organizationType: formA.organizationType || [],
        yearEstablished: formA.yearEstablished || null,
        registrationNumber: formA.registrationNumber || "",
        membershipTier: formA.membershipTier || "",
        sectorFocus: formA.sectorFocus || "",
        employeesGhana: formA.employeesGhana || 0,
        employeesGlobal: formA.employeesGlobal || 0,

        // Section B
        email: formB.email || "",
        contactEmail: formB.contactEmail || "",
        headOfOrganizationName: formB.headOfOrganizationName || "",
        jobTitle: formB.jobTitle || "",
        phone: formB.phone || "",
        companyWebsite: formB.companyWebsite || "",
        companyAddress: formB.companyAddress || "",
        contactPhone: formB.contactPhone || "",

        // Section C
        nominatedRep: formC.nominatedRepName || "",
        nomPositionRole: formC.nominatedRepPosition || "",
        nomPhoneNumber: formC.nominatedRepPhone || "",
        nomEmailAddress: formC.nominatedRepEmail || "",
        alternateRep: formC.alternateRepName || "",
        altPositionRole: formC.altPositionRole || "",
        altPhoneNumber: formC.altPhoneNumber || "",
        altEmailAddress: formC.altEmailAddress || "",

        // Section D
        agreesConstitution: !!formD.agreesConstitution,
        accurateInformation: !!formD.accurateInformation,
        commitsParticipation: !!formD.commitsParticipation,
        agreesFeePayment: !!formD.agreesFeePayment,
        BosagApproval: !!formD.BosagApproval,

        // Section E
        companyProfile: formE.companyProfile || "",
        registrationCertificate: uploadedFiles.registrationCertificate || "",
        logo: uploadedFiles.logo || "",
        brochure: uploadedFiles.brochure || "",

        // Section F
        acknowledged: !!formF.acknowledged,
        authorizedSignatory: formC.nominatedRepName || "",
        dateSigned: today,

        // Admin
        status: "Pending",
        remarks: "",
      };

      const response = await axios.post(
        "https://bosag-backend.onrender.com/api/onboarding/submit",
        payload,
        {
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("✅ Application submitted successfully!");
        navigate("/onboarding/application");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
      toast.error(`❌ Error: ${err.message}`);
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
            Please verify all information below is accurate before submitting your application for Due Diligence.
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

        {/* Summary Sections */}
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

// ===================== SUMMARY SECTION =====================
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

      {/* Section content */}
      {isSectionD ? (
        <div className="space-y-4 text-sm">
          {Object.entries(data)
            .filter(([key]) => key !== "files" && key !== "attachments")
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
              <p className="text-gray-600 text-sm mb-1">Company Profile Overview Statement (Text)</p>
              <p className="text-gray-900 font-medium">{data.companyProfile ? `${data.companyProfile.trim().split(/\s+/).length}/500 words entered` : "No text provided"}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Company Registration Certificate</p>
              <p className="font-medium">{data.files?.registrationCertificate ? <span className="text-teal-600">File Uploaded: {data.files.registrationCertificate.name}</span> : <span className="text-gray-500">No File Uploaded</span>}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 text-sm mb-1">Logo (High-res PNG or vector)</p>
              <p className="font-medium">{data.files?.logo ? <span className="text-teal-600">File Uploaded: {data.files.logo.name}</span> : <span className="text-gray-500">No File Uploaded</span>}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Relevant Brochure or Marketing Material (Optional)</p>
              <p className="font-medium">{data.files?.marketingMaterial ? <span className="text-teal-600">File Uploaded: {data.files.marketingMaterial.name}</span> : <span className="text-gray-500">No File Uploaded</span>}</p>
            </div>
          </div>
        </div>
      ) : isSectionF ? (
        <div className="text-sm">
          <div className="pb-2">
            <p className="text-gray-700 mb-1">Terms Acknowledgement</p>
            <p className="font-medium">{data.acknowledged ? <span className="text-teal-600">Confirmed</span> : <span className="text-gray-500">Not Confirmed</span>}</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
          {Object.entries(data)
            .filter(([key]) => key !== "files" && key !== "attachments")
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

// ===================== HELPER FUNCTIONS =====================
function formatLabel(label) {
  return label.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).replaceAll("_", " ");
}

function formatDeclarationLabel(label) {
  const labelMap = {
    agreesConstitution: "Reviewed and agreed to abide by the BOSAG Constitution",
    accurateInformation: "Confirm that all information provided in this application is accurate and complete",
    commitsParticipation: "Commit to active participation in BOSAG activities and initiatives",
    agreesFeePayment: "Agree to pay membership fees as determined by the BOSAG Board",
    BosagApproval: "Understand that membership is subject to approval by the BOSAG Board",
  };
  return labelMap[label] || formatLabel(label);
}

function formatValue(value) {
  if (typeof value === "boolean") return value ? <span className="text-teal-600 font-medium">Confirmed</span> : <span className="text-gray-500">Not Confirmed</span>;
  if (Array.isArray(value)) return value.join(", ") || "—";
  if (typeof value === "string") return value.trim() || "—";
  return "—";
}
