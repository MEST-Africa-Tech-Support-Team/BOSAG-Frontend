import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../components/sidebar.jsx";

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
    // Load all form data from localStorage
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

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No authentication token found. Please log in.");

      const formDataObj = new FormData();

      // ---------------- SECTION A ----------------
      const formA = forms.formA;
      if (formA.organisationName) formDataObj.append("organizationName", formA.organisationName);
      if (formA.yearOfEstablishment) formDataObj.append("yearEstablished", formA.yearOfEstablishment);
      if (formA.companyRegNumber) formDataObj.append("registrationNumber", formA.companyRegNumber);
      if (formA.organisationTypes?.length) formDataObj.append("organizationType", formA.organisationTypes[0]);
      if (formA.membershipTier) formDataObj.append("membershipTier", formA.membershipTier);
      if (formA.sectorFocus) formDataObj.append("sectorFocus", formA.sectorFocus);
      if (formA.employeesGhana) formDataObj.append("employeesGhana", formA.employeesGhana);
      if (formA.employeesGlobal) formDataObj.append("employeesGlobal", formA.employeesGlobal);

      // ---------------- SECTION B ----------------
      const formB = forms.formB;
      if (formB.headOfOrganizationName) formDataObj.append("primaryContactName", formB.headOfOrganizationName);
      if (formB.jobTitle) formDataObj.append("jobTitle", formB.jobTitle);
      if (formB.email) formDataObj.append("email", formB.email);
      if (formB.phone) formDataObj.append("phone", formB.phone);
      if (formB.companyWebsite) formDataObj.append("website", formB.companyWebsite);
      if (formB.companyAddress) formDataObj.append("PostalAddress", formB.companyAddress);
      if (formB.contactEmail) formDataObj.append("CompanyEmail", formB.contactEmail);
      if (formB.contactPhone) formDataObj.append("CompanyPhone", formB.contactPhone);

      // ---------------- SECTION C ----------------
      const formC = forms.formC;
      if (formC.nominatedRepName) formDataObj.append("nominatedRepresentative", formC.nominatedRepName);
      if (formC.nominatedRepPosition) formDataObj.append("position", formC.nominatedRepPosition);
      if (formC.nominatedRepEmail) formDataObj.append("NomEmail", formC.nominatedRepEmail);
      if (formC.nominatedRepPhone) formDataObj.append("NomPhone", formC.nominatedRepPhone);
      if (formC.alternateRepName) formDataObj.append("alternateRepresentative", formC.alternateRepName);
      if (formC.alternateRepPosition) formDataObj.append("altPosition", formC.alternateRepPosition);
      if (formC.alternateRepEmail) formDataObj.append("AltEmail", formC.alternateRepEmail);

      // ---------------- SECTION D ----------------
      const formD = forms.formD;
      formDataObj.append("agreesConstitution", formD.agreesConstitution || false);
      formDataObj.append("accurateInformation", formD.accurateInformation || false);
      formDataObj.append("commitsParticipation", formD.commitsParticipation || false);
      formDataObj.append("agreesFeePayment", formD.agreesFeePayment || false);
      formDataObj.append("BosagApproval", formD.BosagApproval || false);

      // ---------------- SECTION E ----------------
      const formE = forms.formE;
      if (formE.companyProfile) formDataObj.append("companyProfile", formE.companyProfile);

      const files = formE.files || {};
      if (files.registrationCertificate?.data) {
        const blob = await fetch(files.registrationCertificate.data).then(r => r.blob());
        formDataObj.append("registrationCertificate", blob, files.registrationCertificate.name);
      }
      if (files.logo?.data) {
        const blob = await fetch(files.logo.data).then(r => r.blob());
        formDataObj.append("logo", blob, files.logo.name);
      }
      if (files.marketingMaterial?.data) {
        const blob = await fetch(files.marketingMaterial.data).then(r => r.blob());
        formDataObj.append("brochure", blob, files.marketingMaterial.name);
      }

      // ---------------- SECTION F ----------------
      const formF = forms.formF;
      if (formC.nominatedRepName) formDataObj.append("representativeName", formC.nominatedRepName);
      if (formC.nominatedRepName) formDataObj.append("authorizedSignatory", formC.nominatedRepName);
      const today = new Date().toISOString().split("T")[0];
      formDataObj.append("dateSigned", today);

      // ---------------- SEND REQUEST ----------------
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/onboarding/update`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formDataObj,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      alert("✅ Application submitted successfully!");
      navigate("/onboarding/application");

    } catch (err) {
      console.error("Error submitting application:", err);
      setError(err.message);
      alert(`❌ Error: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-20">
        <Sidebar />
      </aside>

      <main className="flex-1 ml-64 px-10 py-10">
        <div className="mb-6">
          <h1 className="text-[#191970] font-bold text-2xl">
            Application Review: Final Submission
          </h1>
          <p className="text-gray-600 mt-1">
            Please verify all information below is accurate before submitting
            your application for Due Diligence.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-800 px-5 py-3 rounded-md mb-8 text-sm">
            ❌ <span className="font-semibold">Error:</span> {error}
          </div>
        )}

        <div className="bg-green-50 border border-green-300 text-green-800 px-5 py-3 rounded-md mb-8 text-sm font-medium">
          ✅ <span className="font-semibold">Status:</span> All Sections
          Completed & Ready for Submission
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
            onClick={handleSubmit}
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
              <p className="text-gray-600 text-sm mb-1">
                Company Profile Overview Statement (Text)
              </p>
              <p className="text-gray-900 font-medium">
                {data.companyProfile ? `${data.companyProfile.trim().split(/\s+/).length}/500 words entered` : "No text provided"}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Company Registration Certificate</p>
              <p className="font-medium">
                {data.files?.registrationCertificate ? (
                  <span className="text-teal-600">File Uploaded: {data.files.registrationCertificate.name}</span>
                ) : (
                  <span className="text-gray-500">No File Uploaded</span>
                )}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 text-sm mb-1">Logo (High-res PNG or vector)</p>
              <p className="font-medium">
                {data.files?.logo ? (
                  <span className="text-teal-600">File Uploaded: {data.files.logo.name}</span>
                ) : (
                  <span className="text-gray-500">No File Uploaded</span>
                )}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm mb-1">Relevant Brochure or Marketing Material (Optional)</p>
              <p className="font-medium">
                {data.files?.marketingMaterial ? (
                  <span className="text-teal-600">File Uploaded: {data.files.marketingMaterial.name}</span>
                ) : (
                  <span className="text-gray-500">No File Uploaded</span>
                )}
              </p>
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
