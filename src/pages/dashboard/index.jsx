import React from "react";
import Sidebar from "../../components/sidebar";
import { ChevronRight, Lock, Clock } from "lucide-react";
import { Link } from "react-router";

const MembershipDashboard = () => {
  const steps = [
    { id: "A", label: "Personal Information" },
    { id: "B", label: "Professional Background" },
    { id: "C", label: "Educational Credentials" },
    { id: "D", label: "Work Experience" },
    { id: "E", label: "References" },
    { id: "F", label: "Documentation Upload" },
    { id: "G", label: "Review & Submit" },
  ];

  return (
    <div className="min-h-screen bg-[#f9fafc] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            {/* Header inside card */}
            <header className="mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome, John! Your Membership Journey Starts Here.
              </h1>

              <div className="mt-3 flex items-start gap-3 bg-[#fff7f0] border border-[#ffd7b8] rounded-md p-3">
                <div className="w-1.5 h-8 bg-[#ff6600] rounded-sm mt-0.5"></div>
                <p className="text-sm text-[#e65c00] leading-snug">
                  <strong>Action Required:</strong> Complete your 7-Step Application to Unlock
                  Member Benefits.
                </p>
              </div>
            </header>

            {/* Application Progress */}
            <h2 className="text-lg font-semibold text-gray-900 mb-5">
              Application Progress
            </h2>

            <ul className="space-y-4 mb-8">
              {steps.map((step) => (
                <li
                  key={step.id}
                  className="flex flex-col bg-[#f9f9ff] rounded-md px-4 py-3 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-600 text-sm font-semibold">
                      {step.id}
                    </div>
                    <span className="text-sm text-gray-800 font-medium">
                      {step.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1.5 ml-9">
                    <Lock size={13} className="text-gray-400" />
                    <span className="text-xs text-gray-500">Pending</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Next Step Section */}
            <div className="bg-[#eef4ff] p-5 rounded-md border border-[#d7e3ff]">
              <h3 className="font-semibold text-gray-800 mb-1">
                Next Step: Educational Credentials
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Please provide details about your educational background, including degrees,
                certifications, and relevant coursework. This information helps us verify your
                qualifications for membership.
              </p>

              <p className="flex items-center text-xs text-gray-400 mt-3 gap-1">
                <Clock size={13} /> Estimated time: 10–15 minutes
              </p>

              <div className="mt-5 flex justify-center">
                <button className="flex items-center gap-2 bg-[#191970] text-white text-sm font-medium py-2.5 px-6 rounded-md hover:bg-[#14145e] transition-colors shadow-sm">
                  <Link to="/onboarding/form-a">Start Application: Section A</Link>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Bottom Info Section */}
            <div className="mt-10 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <article>
                <div className="text-[#191970] font-semibold mb-1">🔒 Secure Process</div>
                <p className="text-sm text-gray-600">
                  Your information is protected with bank-level security.
                </p>
              </article>

              <article>
                <div className="text-[#191970] font-semibold mb-1">💾 Auto-Save</div>
                <p className="text-sm text-gray-600">
                  Your progress is automatically saved as you go.
                </p>
              </article>

              <article>
                <div className="text-[#191970] font-semibold mb-1">🛠️ Support Available</div>
                <p className="text-sm text-gray-600">
                  Get help from our team if you need assistance.
                </p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MembershipDashboard;
