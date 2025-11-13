import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate, Navigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signupimage from '../assets/images/signup.png';
import GoogleButton from '../components/google-button';
import { loginUser } from '../services/authService';

export default function BosagLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("bosagToken");
  

    // Validate fields
    if (!formData.email || !formData.password) {
      toast.error('Please enter both email and password');
      return;
    }

    setLoading(true);
    try {
      // Call login API
      const response = await loginUser({ 
        email: formData.email, 
        password: formData.password 
      });

      // Save user data to localStorage based on your backend response
      if (response && response.user) {
        localStorage.setItem('user', JSON.stringify({
          firstName: response.user.firstName || response.user.firstname,
          lastName: response.user.lastName || response.user.lastname,
          email: response.user.email
        }));
      }
     

      // Token is already saved by loginUser function in authService

      // Show success toast
      toast.success('Login successful! Redirecting to dashboard...', {
        position: 'top-right',
        autoClose: 2000,
      });

      if(localStorage.getItem("bosagToken")){
navigate("/dashboard")
}


    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.message || 'Login failed. Please check your credentials and try again.';
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Toast Container */}
      <ToastContainer />

      {/* Left Side - Brand Section */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#191970] text-white items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-indigo-700 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-600 rounded-full opacity-20"></div>
        <img src={signupimage} alt="" className="absolute" />
        <div className="inset-0 bg-[#191970] absolute opacity-40"></div>

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

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Log In</h2>
            <p className="text-gray-600">Please Log in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent pr-12"
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

            <div className="text-right">
              <a href="/forgot-password" className="text-sm text-indigo-900 hover:text-indigo-700 font-medium">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? 'bg-gray-400' : 'bg-indigo-900 hover:bg-indigo-800'} text-white font-semibold py-3 px-6 rounded-lg transition duration-300`}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>

            {/* <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-gray-300 w-full"></div>
              <span className="bg-white px-4 text-sm text-gray-500 absolute">OR</span>
            </div> */}

            {/* Social Auth */}
            {/* <GoogleButton /> */}

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="/signup" className="text-[#191970] hover:text-indigo-700 font-semibold">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}