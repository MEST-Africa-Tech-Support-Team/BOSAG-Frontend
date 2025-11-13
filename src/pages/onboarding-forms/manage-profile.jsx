import React, { useState, useEffect } from "react";
import { Crown, Building, Users, User } from "lucide-react";
import Sidebar from "../../components/sidebar.jsx";
import bosagApi from "../../api/bosagApi"; // Adjust path as needed
import toast from "react-hot-toast";

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

  // Fetch user profile on mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await bosagApi.get("/onboarding/me"); // or /auth/me
        const userData = response.data;

        setUser(userData);

        // Populate form with real data (use empty string if missing)
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
        console.error("Failed to fetch user profile:", error);
        toast.error("Unable to load profile. Please log in again.");
        // Redirect to login if needed
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Helper: Convert employee count to range string
  const getEmployeeRange = (count) => {
    if (count <= 10) return "1-10";
    if (count <= 50) return "11-50";
    if (count <= 100) return "50-100";
    if (count <= 250) return "101-250";
    if (count <= 500) return "251-500";
    if (count <= 1000) return "501-1000";
    return "1000+";
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
      // Prepare payload for update
      const payload = new FormData();
      payload.append("organizationName", formData.companyName);
      payload.append("companyAddress", formData.companyAddress);
      payload.append("companyWebsite", formData.website);
      payload.append("sectorFocus", formData.sectorFocus);
      // Note: numberOfEmployees is derived; you may not send it back

      // Add all required fields from original schema to avoid validation errors
      // (You may need to fetch full data and merge)
      await bosagApi.put("/onboarding/update", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("✅ Changes saved successfully!");
    } catch (error) {
      console.error("Save failed:", error);
      toast.error("Failed to save changes. Please try again.");
    }
  };

  const handleUploadDocument = () => {
    // You can implement file upload here later
    toast.info("Document upload coming soon!");
  };

  // Extract first name from full name
  const getFirstName = (fullName) => {
    if (!fullName) return "User";
    return fullName.split(" ")[0] || "User";
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
            <div className="w-9 h-9 rounded-full bg-[#1a1f71] flex items-center justify-center text-white text-sm font-medium">
              <User size={16} />
            </div>
            <span className="font-medium text-gray-800 text-sm">
              {user ? getFirstName(user.headOfOrganizatioName || user.name || "User") : "User"}
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

          {/* Platinum Member Badge (you can fetch tier from user data) */}
          <div className="bg-gradient-to-r from-[#F58220] to-[#ff9940] rounded-lg p-5 mb-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Crown size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-base">
                  {user?.membershipTier || "Member"}
                </h3>
                <p className="text-sm text-white/90">Membership with full access</p>
              </div>
            </div>
            {/* Optional: show expiry if available */}
            <div className="text-right">
              <p className="text-xs text-white/80">Status</p>
              <p className="font-semibold">Active</p>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1f71] focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1f71] focus:border-transparent bg-white"
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