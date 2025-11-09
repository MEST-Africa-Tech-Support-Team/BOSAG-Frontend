import React, { useState } from "react";
import { Crown, Building, Users } from "lucide-react";
import Sidebar from "../../components/sidebar.jsx";

const CompanyProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("Company Info");
  const [formData, setFormData] = useState({
    companyName: "NewCorp Solutions Ltd",
    companyAddress: "123 Business District, London, UK, SW1A 1AA",
    website: "https://newcorp.com",
    sectorFocus: "Technology & Software",
    numberOfEmployees: "50-100",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    alert("Changes saved successfully!");
    console.log("Saved data:", formData);
  };

  const handleUploadDocument = () => {
    alert("Document upload functionality would open a file picker here");
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-sans">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full z-10">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Navbar */}
        <div className="flex justify-end items-center h-16 px-8 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3">
            <span className="text-[#F58220] text-sm">●</span>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User"
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="font-medium text-gray-800 text-sm">
              Sarah Johnson
            </span>
          </div>
        </div>

        {/* Page content */}
        <div className="p-6 md:p-8 max-w-4xl w-full">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Manage Company Profile & Settings
            </h1>
            <p className="text-gray-600 mt-1 text-sm">
              Update your company information and manage account settings
            </p>
          </div>

          {/* Platinum Member Badge */}
          <div className="bg-gradient-to-r from-[#F58220] to-[#ff9940] rounded-lg p-5 mb-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Crown size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-base">Platinum Member</h3>
                <p className="text-sm text-white/90">Premium membership with full access</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/80">Expires</p>
              <p className="font-semibold">January 2026</p>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200 px-6">
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveTab("Company Info")}
                  className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "Company Info"
                      ? "border-[#1a1f71] text-[#1a1f71]"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Building size={16} />
                    <span>Company Info</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("Contacts")}
                  className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "Contacts"
                      ? "border-[#1a1f71] text-[#1a1f71]"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>Contacts</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Form Content */}
            {activeTab === "Company Info" && (
              <div className="p-6 space-y-6">
                {/* Company Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1f71] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1f71] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Company Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Address
                  </label>
                  <input
                    type="text"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1f71] focus:border-transparent"
                  />
                </div>

                {/* Sector Focus and Number of Employees */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sector Focus
                    </label>
                    <select
                      name="sectorFocus"
                      value={formData.sectorFocus}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1f71] focus:border-transparent bg-white"
                    >
                      <option>Technology & Software</option>
                      <option>Finance & Banking</option>
                      <option>Healthcare</option>
                      <option>Manufacturing</option>
                      <option>Retail & E-commerce</option>
                      <option>Consulting</option>
                      <option>Education</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees
                    </label>
                    <select
                      name="numberOfEmployees"
                      value={formData.numberOfEmployees}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1f71] focus:border-transparent bg-white"
                    >
                      <option>1-10</option>
                      <option>11-50</option>
                      <option>50-100</option>
                      <option>101-250</option>
                      <option>251-500</option>
                      <option>501-1000</option>
                      <option>1000+</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleUploadDocument}
                    className="px-5 py-2.5 bg-[#F58220] text-white text-sm font-medium rounded-md hover:bg-[#e37010] transition-all"
                  >
                    Update Document
                  </button>
                  <button
                    onClick={handleSaveChanges}
                    className="px-5 py-2.5 bg-[#1a1f71] text-white text-sm font-medium rounded-md hover:bg-[#151a5f] transition-all"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === "Contacts" && (
              <div className="p-6">
                <div className="text-center py-12">
                  <Users size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Manage Your Contacts
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Add and manage company contacts and representatives
                  </p>
                  <button className="px-5 py-2.5 bg-[#1a1f71] text-white text-sm font-medium rounded-md hover:bg-[#151a5f] transition-all">
                    Add New Contact
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileSettings;