import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FormProgressBar from "../../components/form-header.jsx";

export default function FormStep2() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    contactName: "",
    jobTitle: "",
    email: "",
    countryCode: "+233",
    phone: "",
    website: "",
    address: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);


  useEffect(() => {
    const { contactName, jobTitle, email, countryCode, phone, website, address } = formData;
    const isValid =
      contactName.trim() &&
      jobTitle.trim() &&
      email.trim() &&
      countryCode.trim() &&
      phone.trim() &&
      website.trim() &&
      address.trim();
    setIsFormValid(Boolean(isValid));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    navigate("/onboarding/form-c"); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Progress bar */}
      <FormProgressBar currentStep={2} completedSteps={[1]} />


      <div className="max-w-5xl mx-auto px-4 py-10 w-full">
        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-md rounded-md border border-gray-200"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-[#191970] mb-6">
            Section B: Contact Information
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Contact Name
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-700 focus:outline-none"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-700 focus:outline-none"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-700 focus:outline-none placeholder-gray-400"
              />
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex">
                <input
                  type="text"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => {
                    const value = e.target.value.startsWith("+")
                      ? e.target.value
                      : "+" + e.target.value;
                    setFormData((prev) => ({ ...prev, countryCode: value }));
                  }}
                  className="w-20 border border-gray-300 rounded-l-md p-2 focus:ring-2 focus:ring-blue-700 focus:outline-none text-center"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="flex-1 border-t border-b border-r border-gray-300 rounded-r-md p-2 focus:ring-2 focus:ring-blue-700 focus:outline-none  placeholder-gray-400"
                />
              </div>
            </div>


            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Website
              </label>
              <input
                type="url"
                name="website"
                placeholder="https://www.company.com"
                value={formData.website}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-700 focus:outline-none  placeholder-gray-400"
              />
            </div>

            {/* Company Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Address
              </label>
              <textarea
                name="address"
                rows="2"
                placeholder="Enter complete company address..."
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-700 focus:outline-none  placeholder-gray-400"
              ></textarea>
            </div>
          </div>
        </form>

        {/* Buttons outside card */}
        <div className="flex justify-between mt-10">
          <button
            type="button"
            onClick={() => navigate("/onboarding/form-a")}
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-2 rounded-md shadow-sm transition-colors"
          >
            Previous
          </button>

          <button
            type="button"
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
