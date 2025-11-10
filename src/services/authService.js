import axios from "axios";

const BASE_URL = "https://bosag-backend.onrender.com/api/users";


// Add this small helper function
export const getAuthHeader = () => {
  const token = localStorage.getItem("bosagToken");
  return {
    headers: {
      Authorization: `Bearer ${token}`, // send your token to backend
    },
  };
};


// User Signup
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data; 
  } catch (error) {
    throw error.response?.data || "Registration failed";
  }
};

// Admin signup
export const registerAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${BASE_URL}/create-admin`, adminData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Admin registration failed";
  }
};


// User Login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    if (response.data?.token) {
      localStorage.setItem("bosagToken", response.data.token);
    }
    return response.data;
  } catch (error) {
    // Extract backend message safely
    const message = error.response?.data?.message || "Login failed";
    console.error("Login failed:", message);
    throw new Error(message);
  }
};


// SOCIAL LOGIN
export const socialLogin = (provider) => {
  const urls = {
    google: "https://bosag-backend.onrender.com/api/users/auth/google",
  };

  if (urls[provider]) {
    window.location.href = urls[provider]; // redirects user to backend OAuth
  } else {
    console.error(`Unsupported provider: ${provider}`);
  }
};




// Forgot Password
export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}/forgot-password`, { email });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to send password reset email";
  }
};


// Reset Password
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(`${BASE_URL}/reset-password`, {
        token,
        newPassword,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Password reset failed";
  }
};


// User Logout
export const logoutUser = () => {
  localStorage.removeItem("bosagToken");
};

// Fetch User Profile
export const fetchUserProfile = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`, getAuthHeader());
    return response.data;
    } catch (error) {
    throw error.response?.data || "Failed to fetch user profile";
    }
};


// Update User Profile
export const updateUserProfile = async (userData, token) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/users/user-profile`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // the user’s token from login
          "Content-Type": "application/json",
        },
      }
    );

    return response.data; // returns the updated user info
  } catch (error) {
    console.error("Error updating user profile:", error.response?.data || error.message);
    throw error;
  }
};