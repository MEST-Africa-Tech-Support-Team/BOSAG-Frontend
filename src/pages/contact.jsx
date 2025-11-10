import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Linkedin } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function BosagContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-900 mb-4">
            Get in Touch with BOSAG
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            We're here to answer your questions, discuss membership, and explore partnership opportunities.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-2xl font-bold text-indigo-900 mb-8">
              Send Us a Message
            </h2>

            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                />
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none bg-white"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-indigo-900 text-white font-semibold py-4 px-6 rounded-lg hover:bg-indigo-800 transition duration-300"
              >
                Submit Inquiry
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-2xl font-bold text-indigo-900 mb-8">
              Our Details
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-11 h-11 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-indigo-900 font-bold text-base mb-1">Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Ghana Digital Centre, Ring Road West, Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-11 h-11 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-indigo-900 font-bold text-base mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm">+233 242 773762</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-11 h-11 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-indigo-900 font-bold text-base mb-1">Email</h3>
                  <a href="mailto:david.gowu@bosag.org" className="text-gray-600 text-sm underline hover:text-indigo-900">
                    david.gowu@bosag.org
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-11 h-11 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Globe className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-indigo-900 font-bold text-base mb-1">Website</h3>
                  <a href="https://www.bosag.org" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm underline hover:text-indigo-900">
                    www.bosag.org
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-11 h-11 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Linkedin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-indigo-900 font-bold text-base mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/david-gowu-9158027/" className="text-gray-600 text-sm underline hover:text-indigo-900">
                    Visit our LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}