import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FormProgressBar from "../../components/form-header.jsx";
import Sidebar from "../../components/sidebar.jsx";

export default function FormStep1() {
  const navigate = useNavigate();

  const ORG_TYPES = [
    "BPO",
    "ITO",
    "Shared Services",
    "Training Provider",
    "Technology Vendor",
    "Consultancy",
    "Public Sector",
    "Other (Please specify)",
  ];

  // Load saved data from localStorage if available
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("formA");
    return saved
      ? JSON.parse(saved)
      : {
          organizationName: "",
          yearEstablished: "",
          registrationNumber: "",
          sectorFocus: "",
          employeesGhana: "",
          employeesGlobal: "",
          organizationType: [],
          otherOrganizationText: "",
          membershipTier: "",
        };
  });

  // Save form data to localStorage on every change
  useEffect(() => {
    localStorage.setItem("formA", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updated = checked
        ? [...prev.organizationType, value]
        : prev.organizationType.filter((item) => item !== value);

      return {
        ...prev,
        organizationType: updated,
        otherOrganizationText:
          value === "Other (Please specify)" && !checked
            ? ""
            : prev.otherOrganizationText,
      };
    });
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, membershipTier: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save final Section A data
    localStorage.setItem("formA", JSON.stringify(formData));

    // Mark step completed
    const completed = JSON.parse(localStorage.getItem("completedSteps")) || [];
    if (!completed.includes(1)) {
      completed.push(1);
      localStorage.setItem("completedSteps", JSON.stringify(completed));
    }

    // Navigate to Section B
    navigate("/onboarding/form-b");
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
          <FormProgressBar currentStep={1} />
        </div>

        {/* Form Section */}
        <section className="max-w-6xl mx-auto pt-2 pb-24 px-4 md:px-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md border border-gray-200 rounded-lg p-8 md:p-10 w-full"
          >
            <h2 className="text-xl font-semibold text-[#191970] mb-8">
              Section A: Organisational Details
            </h2>

            {/* Organisation Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organisation Name
              </label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Year and Registration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year of Establishment
                </label>
                <input
                  type="text"
                  name="yearEstablished"
                  placeholder="YYYY"
                  value={formData.yearEstablished}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Registration Number
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Sector Focus */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sector Focus Areas
              </label>
              <textarea
                name="sectorFocus"
                rows="2"
                placeholder="Describe your sector focus areas..."
                value={formData.sectorFocus}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400"
              />
            </div>

            {/* Employee Count */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Employees (Ghana-based)
                </label>
                <input
                  type="number"
                  name="employeesGhana"
                  value={formData.employeesGhana}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Employees (Global)
                </label>
                <input
                  type="number"
                  name="employeesGlobal"
                  value={formData.employeesGlobal}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Organisation Type */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type of Organisation
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {ORG_TYPES.map((type) => {
                  const isOther = type === "Other (Please specify)";
                  return (
                    <div key={type} className="flex flex-col text-sm">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={type}
                          checked={formData.organizationType.includes(type)}
                          onChange={handleCheckboxChange}
                        />
                        <span>{type}</span>
                      </label>

                      {isOther && formData.organisationTypes.includes(type) && (
                        <input
                          type="text"
                          name="otherOrganizationText"
                          value={formData.otherOrganizationText}
                          onChange={handleChange}
                          placeholder="Please specify"
                          className="mt-1 border border-gray-300 rounded-md p-1 text-sm w-full placeholder-gray-400"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Membership Tier */}
            <div className="mb-12">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Membership Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                {[
                  "Platinum Member",
                  "Gold Member",
                  "Start-ups & Associate Member",
                  "Vendors & Affiliate Member",
                ].map((tier) => (
                  <label key={tier} className="flex items-center gap-3 text-sm">
                    <input
                      type="radio"
                      name="membershipTier"
                      value={tier}
                      checked={formData.membershipTier === tier}
                      onChange={handleRadioChange}
                    />
                    <span>{tier}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end mt-10">
              <button
                type="submit"
                className="px-10 py-2 font-medium rounded-md bg-[#F58220] text-white hover:bg-[#e16e10] transition-colors"
              >
                Next: Section B
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
