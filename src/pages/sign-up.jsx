import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import signup from '../assets/images/signup.png';

export default function BosagSignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState("user"); // user or admin
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

  if (!formData.agreedToTerms) {
    alert("Please agree to the Terms of Service first!");
    return;
  }

  setLoading(true);
  try {
    const { firstName, lastName, email, password } = formData;

    if (accountType === "user") {
      await registerUser({ firstName, lastName, email, password });
      alert("User signed up successfully!");
    } else {
      await registerAdmin({ firstName, lastName, email, password });
      alert("Admin account created successfully!");
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreedToTerms: false,
    });
  } catch (error) {
    console.error("Signup error:", error);
    alert("Signup failed. Please check your details or try again.");
  } finally {
    setLoading(false);
  }
};

  return (
  
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#191970] text-white items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-indigo-700 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-600 rounded-full opacity-20"></div>
         <img src={signup} alt="" className='absolute '/>
         <div className='inset-0 bg-[#31318D]  absolute opacity-40'></div>
        
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

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h2>
            <p className="text-gray-600">Create your account to get started</p>
          </div>

          {/* Account Type Toggle */}
          <div className="flex justify-center mb-6">
            <button
              type="button"
              onClick={() => setAccountType("user")}
              className={`px-4 py-2 rounded-l-lg border ${
                accountType === "user"
                  ? "bg-indigo-900 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              User
            </button>
            <button
              type="button"
              onClick={() => setAccountType("admin")}
              className={`px-4 py-2 rounded-r-lg border ${
                accountType === "admin"
                  ? "bg-indigo-900 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Admin
            </button>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

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
                <a href="#" className="text-indigo-900 underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-indigo-900 underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-400" : "bg-indigo-900 hover:bg-indigo-800"
              } text-white font-semibold py-3 px-6 rounded-lg transition duration-300`}
            >
              {loading
                ? "Signing up..."
                : accountType === "user"
                ? "Sign Up as User"
                : "Sign Up as Admin"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
