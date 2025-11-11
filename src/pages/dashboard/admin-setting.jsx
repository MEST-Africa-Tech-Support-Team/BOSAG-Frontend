import { useState } from "react";
import AdminSidebar from "../../components/admin-sidebar";
import DashboardHeader from "../../components/dashboard-header";
import { FaEnvelope, FaSms, FaBell, FaShieldAlt, FaLaptop, FaMobileAlt } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md"

export default function AdminSettings() {

  const [user, setUser] = useState({
    name: "John Smith",
    email: "john@bosag.com",
    phone: "+1 (555) 123-4567",
    photo: "https://via.placeholder.com/100",
  });

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    twoFactor: true,
    darkMode: false,
    accentColor: "orange",
  });

  const sessions = [
    {
      icon: <FaLaptop className="text-blue-600" />,
      iconBg: "bg-blue-100",
      device: "Windows PC – Chrome",
      location: "New York, USA",
      status: "Current",
    },
    {
      icon: <FaMobileAlt className="text-purple-600" />,
      iconBg: "bg-purple-100",
      device: "iPhone 14 Pro – Safari",
      location: "Los Angeles, USA – 2 hours ago",
      status: "Revoke",
    },
  ];

  // handle change photo
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, photo: imageUrl });
    }
  };

  const handleSettingChange = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handleAccentChange = (color) => {
    setSettings({ ...settings, accentColor: color });
  };

  const colorClasses = {
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    red: "bg-red-500",
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <AdminSidebar />
        <div className="ml-16 md:ml-64 flex-1 bg-gray-50 min-h-screen">
          <DashboardHeader
            title="Settings"
            subtitle="Manage your account settings and preferences"
          />
          <div className="mt-6 p-4">

            {/* Profile Settings */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Profile Settings
              </h2>
              <p className="text-sm text-gray-500 mb-6 border-b pb-4 border-gray-300">
                Update your personal information and profile picture
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex flex-col items-center">
                  <img
                    src={user.photo}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <label className="mt-2 text-sm text-blue-600 cursor-pointer font-medium border p-1.5 rounded whitespace-nowrap">
                    Change Photo
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handlePhotoChange}
                    />
                  </label>
                </div>

                <div className="w-full mb-2">
                  <label className="text-gray-700 text-sm font-medium mb-1 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
                    placeholder="Full Name"
                  />
                  <label className="text-gray-700 text-sm font-medium mb-1 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
                    placeholder="Email Address"
                  />
                  <label className="text-gray-700 text-sm font-medium mb-1 block">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={user.phone}
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4 border-t border-gray-200 pt-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm whitespace-nowrap">
                  Change Password
                </button>
              </div>
            </div>

            {/* Notifications & Privacy */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Notifications */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">
                  Notifications
                </h2>
                <p className="text-sm text-gray-500 mb-4 border-b border-gray-300 pb-4">
                  Choose how you want to receive notifications
                </p>
                <div className="space-y-3">
                  {[
                    {
                      icon: (
                        <span className="p-2 rounded-lg bg-blue-100">
                          <FaEnvelope className="text-blue-600" />
                        </span>
                      ),
                      label: "Email Notifications",
                      key: "emailNotifications",
                      desc: "Receive updates via email",
                    },
                    {
                      icon: (
                        <span className="p-2 rounded-lg bg-green-100">
                          <FaSms className="text-green-600" />
                        </span>
                      ),
                      label: "SMS Notifications",
                      key: "smsNotifications",
                      desc: "Get text messages for updates",
                    },
                    {
                      icon: (
                        <span className="p-2 rounded-lg bg-orange-100">
                          <FaBell className="text-orange-600" />
                        </span>
                      ),
                      label: "Push Notifications",
                      key: "pushNotifications",
                      desc: "Receive push notifications on your device",
                    },
                  ].map((n) => (
                    <div
                      key={n.key}
                      className="flex items-center justify-between border-b border-gray-300  pb-3"
                    >
                      <div className="flex items-center gap-3">
                        {n.icon}
                        <div>
                          <p className="font-medium text-gray-700">{n.label}</p>
                          <p className="text-sm text-gray-500">{n.desc}</p>
                        </div>
                      </div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings[n.key]}
                          onChange={() => handleSettingChange(n.key)}
                          className="sr-only"
                        />
                        <div
                          className={`w-10 h-5 bg-gray-300 rounded-full relative transition ${settings[n.key] ? "bg-orange-500" : ""
                            }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition ${settings[n.key] ? "translate-x-5" : ""
                              }`}
                          ></span>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy & Security */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">
                  Privacy & Security
                </h2>
                <p className="text-sm text-gray-500 mb-4 border-b border-gray-300 pb-4">
                  Manage your security settings and privacy preferences
                </p>

                <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="border border-blue-100 bg-blue-100 p-2 rounded">
                      <FaShieldAlt className="text-indigo-600 " />
                    </span>
                    <div>
                      <p className="font-medium text-gray-700">
                        Two-Factor Authentication
                      </p>
                      <p className="text-sm text-gray-500">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.twoFactor}
                      onChange={() => handleSettingChange("twoFactor")}
                      className="sr-only"
                    />
                    <div
                      className={`w-10 h-5 bg-gray-300 rounded-full relative transition ${settings.twoFactor ? "bg-orange-500" : ""
                        }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition ${settings.twoFactor ? "translate-x-5" : ""
                          }`}
                      ></span>
                    </div>
                  </label>
                </div>

                <div>
                  <p className="font-medium text-gray-700">Active Sessions</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Manage devices where you’re currently logged in
                  </p>

                  <div className="space-y-3">
                    {sessions.map((s, i) => (
                      <div
                        key={i}
                        className="md:flex items-center justify-between border border-gray-100 bg-gray-50 rounded-md p-3"
                      >
                        {/* Device info section */}
                        <div className="flex items-center gap-3 mb-4 md:mb-0">
                          <span
                            className={`p-2 rounded-lg ${s.iconBg}`}
                          >
                            {s.icon}
                          </span>
                          <div>
                            <p className="font-medium text-gray-700">{s.device}</p>
                            <p className="text-sm text-gray-500">{s.location}</p>
                          </div>
                        </div>

                        {/* Status */}
                        <span
                          className={`text-sm font-medium flex justify-center ${s.status === "Current"
                            ? "text-green-600 bg-green-100 px-2 py-1 rounded-xl"
                            : "text-red-600 bg-red-100 px-2 py-1 rounded-xl"
                            }`}
                        >
                          {s.status === "Current" ? "Current" : "Revoke"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Appearance & Account Management */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Appearance */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">
                  Appearance
                </h2>
                <p className="text-sm text-gray-400 mb-3">
                  Customize how Bosag looks for you
                </p>

                <div className="flex items-center justify-between pt-4 mb-3 border-t border-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="border text-white bg-gray-800 p-1.5 rounded"><MdDarkMode /></span>
                    <span>
                      <p className="font-medium text-gray-700">Dark Mode</p>
                      <p className="text-gray-400 text-sm">Switch between light and dark themes</p>
                    </span>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.darkMode}
                      onChange={() => handleSettingChange("darkMode")}
                      className="sr-only"
                    />
                    <div
                      className={`w-10 h-5 bg-gray-300 rounded-full relative transition ${settings.darkMode ? "bg-orange-500" : ""
                        }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition ${settings.darkMode ? "translate-x-5" : ""
                          }`}
                      ></span>
                    </div>
                  </label>
                </div>

                <p className="text-sm text-gray-500 mb-2 border-t border-gray-300 pt-3">Accent Color</p>
                <div className="flex gap-3">
                  {Object.keys(colorClasses).map((color) => (
                    <div
                      key={color}
                      className={`w-6 h-6 rounded cursor-pointer border-2 ${settings.accentColor === color
                        ? "border-gray-800"
                        : "border-transparent"
                        } ${colorClasses[color]}`}
                      onClick={() => handleAccentChange(color)}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Account Management */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Account Management
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  Manage your account status and data
                </p>

                <div className="border border-yellow-200 bg-yellow-50 p-4 rounded-lg mb-3">
                  <h3 className="text-yellow-700 font-medium mb-2">
                    Deactivate Account
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Temporarily disable your account. You can reactivate anytime
                    by logging back in.
                  </p>
                  <button className="bg-yellow-400 text-white px-4 py-2 rounded-md text-sm hover:bg-yellow-500">
                    Deactivate Account
                  </button>
                </div>

                <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
                  <h3 className="text-red-700 font-medium mb-2">
                    Delete Account
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Permanently delete your account and all associated data. This
                    action cannot be undone.
                  </p>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-end mt-6 gap-3">
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md">
                Cancel
              </button>
              <button className="bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded-md">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}