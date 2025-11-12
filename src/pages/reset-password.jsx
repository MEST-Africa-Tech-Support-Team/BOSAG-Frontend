import React, { useState } from "react";
import { useParams } from "react-router";
import { resetPassword } from "../services/authService";
import { toast } from "react-toastify";

export default function ResetPasswordPage() {
  const { token } = useParams(); // get the token from the URL
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await resetPassword(token, password);

      toast.success('Password has been reset successfully!', {
              position: 'top-right',
              autoClose: 2000,
            });
      setPassword("");
    } catch (error) {
      console.error("Reset error:", error);
      
      toast.error('Failed to reset password. Try again or check your link.', {
              position: 'top-right',
              autoClose: 2000,
            });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Reset Password
        </h2>
        <input
          type="password"
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? "bg-gray-400" : "bg-indigo-900 hover:bg-indigo-800"
          } text-white font-semibold py-3 rounded-lg transition duration-300`}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
