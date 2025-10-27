import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FormProgressBar from "../../components/form-header.jsx";

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

  const [formData, setFormData] = useState({
    organisationName: "",
    yearOfEstablishment: "",
    companyRegNumber: "",
    sectorFocus: "",
    employeesGhana: "",
    employeesGlobal: "",
    organisationTypes: [], 
    otherOrganisationText: "", 
    membershipTier: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const {
      organisationName,
      yearOfEstablishment,
      companyRegNumber,
      sectorFocus,
      employeesGhana,
      employeesGlobal,
      organisationTypes,
      otherOrganisationText,
      membershipTier,
    } = formData;

    const otherSelected = organisationTypes.includes("Other (Please specify)");

    const isValid =
      organisationName.trim() &&
      yearOfEstablishment.trim() &&
      companyRegNumber.trim() &&
      sectorFocus.trim() &&
      employeesGhana.toString().trim() &&
      employeesGlobal.toString().trim() &&
      organisationTypes.length > 0 &&
      membershipTier.trim() &&
      (!otherSelected || otherOrganisationText.trim()); 

    setIsFormValid(Boolean(isValid));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      let updated;
      if (checked) {
        updated = [...prev.organisationTypes, value];
      } else {
        updated = prev.organisationTypes.filter((item) => item !== value);
      }


      const otherUnchecked = !checked && value === "Other (Please specify)";
      return {
        ...prev,
        organisationTypes: updated,
        otherOrganisationText: otherUnchecked ? "" : prev.otherOrganisationText,
      };
    });
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, membershipTier: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    navigate("/onboarding/form-b");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <FormProgressBar currentStep={1} completedSteps={[]} />

      <div className="max-w-6xl mx-auto pt-10 pb-20 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md border border-gray-200 rounded-lg p-10 w-full"
        >
          <h2 className="text-lg font-semibold text-[#191970] mb-8">
            Section A: Organisational Details
          </h2>


          <label className="block text-sm font-medium text-gray-700">Organisation Name</label>
          <input
            type="text"
            name="organisationName"
            value={formData.organisationName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mb-6"
          />


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Year of Establishment</label>
              <input
                type="text"
                name="yearOfEstablishment"
                placeholder="YYYY"
                value={formData.yearOfEstablishment}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Company Registration Number</label>
              <input
                type="text"
                name="companyRegNumber"
                value={formData.companyRegNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>


          <label className="block text-sm font-medium text-gray-700">Sector Focus Areas</label>
          <textarea
            name="sectorFocus"
            rows="2"
            placeholder="Describe your sector focus areas..."
            value={formData.sectorFocus}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mb-6 placeholder-gray-400"
          />


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
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


          <label className="block text-sm font-medium text-gray-700 mb-2">Type of Organisation</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            {ORG_TYPES.map((type) => {
              const isOther = type === "Other (Please specify)";
              return (
                <div key={type} className="flex items-start gap-2">
                  <label className="flex items-center gap-2 text-sm w-full">
                    <input
                      type="checkbox"
                      value={type}
                      checked={formData.organisationTypes.includes(type)}
                      onChange={handleCheckboxChange}
                      className="mt-1"
                    />
                    <span className="leading-tight">{type}</span>
                  </label>


                  {isOther && formData.organisationTypes.includes(type) && (
                    <input
                      type="text"
                      name="otherOrganisationText"
                      value={formData.otherOrganisationText}
                      onChange={handleChange}
                      placeholder="Please specify"
                      className="ml-2 border border-gray-300 rounded-md p-1 text-sm w-36 placeholder-gray-400"
                    />
                  )}
                </div>
              );
            })}
          </div>


          {formData.organisationTypes.includes("Other (Please specify)") && !formData.otherOrganisationText.trim() && (
            <p className="text-xs text-red-500 mb-4">Please specify the organisation type for "Other".</p>
          )}


          <label className="block text-sm font-medium text-gray-700 mb-2">Membership Tier</label>
          <div className="flex flex-col gap-3 mb-10">
            {[
              "Platinum Full Member",
              "Gold Full Member",
              "Silver Full Member",
              "Bronze Full Member",
              "Associate Member",
              "Affiliate Member",
            ].map((tier) => (
              <label key={tier} className="flex items-center gap-3 text-sm">
                <input
                  type="radio"
                  name="membership"
                  value={tier}
                  checked={formData.membershipTier === tier}
                  onChange={handleRadioChange}
                />
                <span>{tier}</span>
              </label>
            ))}
          </div>
        </form>


        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`px-10 py-2 font-medium rounded-md ${
              isFormValid
                ? "bg-blue-700 text-white hover:bg-blue-800"
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
