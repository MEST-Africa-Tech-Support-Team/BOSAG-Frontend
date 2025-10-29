import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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
    <Navbar/>
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#191970] mb-4">
            Get in Touch with BOSAG
          </h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-5"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to answer your questions, discuss membership, and explore partnership opportunities.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[786px_422.66px] gap-7 mb-10 p-8 mx-auto justify-center">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 h-[718px] w-[720px]">
            <h2 className="text-2xl font-semibold text-[#191970] mb-6">
              Send Us a Message
            </h2>

            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Submit Inquiry
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-[718px]">
            <h2 className="text-xl font-semibold text-[#191970] mb-6">
              Our Details
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-blue-900 font-semibold text-sm mb-1">Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    BOSAG Secretariat, Digital Economy Centre, High Street, Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-blue-900 font-semibold text-sm mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm">+233 242 77 37 62</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  {/* <Link to=""> */}
                  <h3 className="text-blue-900 font-semibold text-sm mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">info@bosag</p>
                  {/* </Link> */}
                </div>
              </div>

              <div className="flex items-start">
                <div className="shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-blue-900 font-semibold text-sm mb-1">Office Hours</h3>
                  <p className="text-gray-600 text-sm">Mon - Fri: 8:00am - 5:00pm GMT</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
            Find Us on the Map
          </h2>
          <div className="bg-gray-200 rounded-lg h-80 flex flex-col items-center justify-center text-gray-500">
            <MapPin className="w-16 h-16 mb-4" />
            <p className="text-center">Map Placeholder - Location of BOSAG Office</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}