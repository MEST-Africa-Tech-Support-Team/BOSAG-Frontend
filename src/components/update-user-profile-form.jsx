
import React, { useState } from "react";
import { updateUserProfile } from "../services/authService";

export default function UpdateUserProfileForm({ currentUser, onUpdate }) {
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName || "",
    lastName: currentUser.lastName || "",
    email: currentUser.email || "",
  });
  const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");


    const token = localStorage.getItem("authToken");

    try {
      const updatedUser = await updateUserProfile(formData);
      setSuccessMessage("Profile updated successfully!");
      onUpdate(updatedUser); // Notify parent of the update
    }
    catch (error) {
      console.error("Update profile error:", error);
      setErrorMessage("Failed to update profile. Please try again.");
    }
    finally {
      setLoading(false);
    }
    };
    return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
        <input
          type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
        <input
          type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        </div>
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        </div>
        <button
            type="submit"
            disabled={loading}
            className={`w-full ${
            loading ? "bg-gray-400" : "bg-indigo-900 hover:bg-indigo-800"
          } text-white font-semibold py-3 rounded-lg transition duration-300`}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
        {successMessage && (
          <p className="text-green-500 text-sm mt-4 text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-4 text-center">{errorMessage}</p>
        )}
    </form>
  );
}

