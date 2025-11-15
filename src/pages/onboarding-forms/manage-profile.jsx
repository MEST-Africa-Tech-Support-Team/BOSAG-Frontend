import React, { useState, useEffect, useRef } from "react";
import { Crown, Building, Users, User } from "lucide-react";
import Sidebar from "../../components/sidebar.jsx";
import bosagApi from "../../api/bosagApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CompanyProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("Company Info");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    companyName: "",
    companyAddress: "",
    website: "",
    sectorFocus: "",
    numberOfEmployees: "",
  });

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await bosagApi.get("/onboarding/me");
        const userData = response.data;

        setUser(userData);

        setFormData({
          companyName: userData.organizationName || "",
          companyAddress: userData.companyAddress || "",
          website: userData.companyWebsite || "",
          sectorFocus: userData.sectorFocus || "",
          numberOfEmployees: getEmployeeRange(
            userData.employeesGhana || userData.employeesGlobal || 0
          ),
        });
      } catch (error) {
        toast.error("Unable to load profile. Please log in again.");
        navigate("/auth/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const getEmployeeRange = (count) => {
    if (count <= 10) return "1-10";
    if (count <= 50) return "11-50";
    if (count <= 100) return "50-100";
    if (count <= 250) return "101-250";
    if (count <= 500) return "251-500";
    if (count <= 1000) return "501-1000";
    return "1000+";
  };

  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const payload = new FormData();
      payload.append("organizationName", formData.companyName);
      payload.append("companyAddress", formData.companyAddress);
      payload.append("companyWebsite", formData.website);
      payload.append("sectorFocus", formData.sectorFocus);

      const response = await bosagApi.put("/onboarding/update", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Changes saved successfully!");
    } catch (error) {
      toast.error("Failed to save changes.");
    }
  };

  const handleUploadDocument = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const form = new FormData();
      form.append("document", file);

      await bosagApi.post("/documents/upload", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Document uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload document.");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-[#F9FAFB] items-center justify-center">
        <div className="text-gray-600">Loading your profile...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-sans">
      
      <div className="fixed left-0 top-0 h-full z-10">
        <Sidebar />
      </div>

      
      <div className="flex-1 flex flex-col ml-64">
        
        <div className="flex justify-end items-center h-16 px-8 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3">
            <span className="text-[#F58220] text-sm">●</span>

            
            <div className="w-9 h-9 rounded-full bg-[#1a1f71] flex items-center justify-center text-white text-sm font-medium">
              {getInitials(user?.headOfOrganizatioName || user?.name)}
            </div>

            <span className="font-medium text-gray-800 text-sm">
              {user?.headOfOrganizatioName || user?.name}
            </span>
          </div>
        </div>

       
        <div className="p-6 md:p-8 max-w-4xl w-full">
          
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Manage Company Profile & Settings
            </h1>
            <p className="text-gray-600 mt-1 text-sm">
              Update your company information and manage account settings
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#F58220] to-[#ff9940] rounded-lg p-5 mb-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Crown size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-base">
                  {user?.membershipTier || "Member"}
                </h3>
                <p className="text-sm text-white/90">
                  Membership with full access
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/80">Status</p>
              <p className="font-semibold">Active</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            
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

            {activeTab === "Company Info" && (
              <div className="p-6 space-y-6">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#1a1f71]"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#1a1f71]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Address
                  </label>
                  <input
                    type="text"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#1a1f71]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sector Focus
                    </label>
                    <input
                      type="text"
                      name="sectorFocus"
                      value={formData.sectorFocus}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#1a1f71]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees (Ghana)
                    </label>
                    <select
                      name="numberOfEmployees"
                      value={formData.numberOfEmployees}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:ring-2 focus:ring-[#1a1f71]"
                    >
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="50-100">50-100</option>
                      <option value="101-250">101-250</option>
                      <option value="251-500">251-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>
                </div>

                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileUpload}
                />

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleUploadDocument}
                    className="px-5 py-2.5 bg-[#F58220] text-white text-sm font-medium rounded-md hover:bg-[#e37010]"
                  >
                    Update Document
                  </button>

                  <button
                    onClick={handleSaveChanges}
                    className="px-5 py-2.5 bg-[#1a1f71] text-white text-sm font-medium rounded-md hover:bg-[#151a5f]"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === "Contacts" && (
              <div className="p-6 text-center">
                <Users size={48} className="mx-auto text-gray-400 mb-4" />

                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Manage Your Contacts
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Add and manage company contacts and representatives
                </p>

                <button
                  className="px-5 py-2.5 bg-[#1a1f71] text-white text-sm font-medium rounded-md hover:bg-[#151a5f]"
                >
                  Add New Contact
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileSettings;
