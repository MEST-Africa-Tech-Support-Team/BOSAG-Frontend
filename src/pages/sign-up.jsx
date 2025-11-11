import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import signup from "../assets/images/signup.png";
import { registerUser } from "../services/authService"; // API helper
import GoogleButton from "../components/google-button.jsx"; // Google Button Component



export default function BosagSignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, agreedToTerms } = formData;
    if (!firstName || !lastName || !email || !password || !agreedToTerms) {
      alert("Please fill all fields and agree to the Terms of Service.");
      return;
    }

    setLoading(true);
    try {
      await registerUser({ firstName, lastName, email, password });
      alert("✅ Signup successful!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        agreedToTerms: false,
      });
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      alert("❌ Signup failed. Please check your details or try again later.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="flex min-h-screen">
      {/* Left Side - Brand Section */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#191970] text-white items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-indigo-700 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-600 rounded-full opacity-20"></div>
        <img src={signup} alt="Signup" className="absolute object-cover w-full h-full" />
        <div className="inset-0 bg-black absolute opacity-40"></div>
        <div className="text-center z-10 max-w-md">
          <h1 className="text-6xl font-bold mb-3">BOSAG</h1>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-0.5 w-16 bg-orange-500"></div>
            <p className="text-xl tracking-wider">MEMBERSHIP</p>
            <div className="h-0.5 w-16 bg-orange-500"></div>
          </div>
          <p className="text-lg leading-relaxed text-gray-200">
            Join our exclusive community and unlock premium benefits designed for forward-thinking professionals.
          </p>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h2>
            <p className="text-gray-600">Create your account to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
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
                  placeholder="Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className="w-4 h-4 mt-1 text-indigo-900 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label className="ml-2 text-sm text-gray-700">
                I’ve read and agree with{" "}
                <a href="#" className="text-indigo-900 hover:text-indigo-700 font-medium underline">
                  Terms of Service
                </a>{" "}
                and our{" "}
                <a href="#" className="text-indigo-900 hover:text-indigo-700 font-medium underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? "bg-gray-400" : "bg-indigo-900 hover:bg-indigo-800"} text-white font-semibold py-3 px-6 rounded-lg transition duration-300`}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-6">
            <div className="border-t border-gray-300 w-full"></div>
            <span className="bg-white px-4 text-sm text-gray-500 absolute">OR</span>
          </div>

          {/* Social Auth */}
          <GoogleButton />
          

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-[#191970] hover:text-indigo-700 font-semibold">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
                         