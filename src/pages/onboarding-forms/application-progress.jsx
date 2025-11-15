import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router"; 
import Sidebar from "../../components/sidebar.jsx";

const Submitted = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-20">
        <Sidebar />
      </aside>

      <main className="flex-1 ml-64">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-6" />
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="mb-6">
            <div className="rounded-md bg-[#F58220]/10 border border-[#F58220]/20 px-4 py-3">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#F58220] flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"
                    fill="#F58220"
                    opacity="0.15"
                  />
                  <path
                    d="M11 7h2v6h-2V7zm0 8h2v2h-2v-2z"
                    fill="#F58220"
                  />
                </svg>
                <p className="text-sm font-medium text-[#783E00]">
                  Thank you! Your application is under review by the Admin.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0a0a3a]">
              Application Submitted: Under Review
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Your application has been successfully submitted and is currently
              being reviewed by our team.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold text-[#0a0a3a]">
                  Application Status
                </h2>
              </div>

              <div className="mt-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
                  <div className="flex items-center gap-4 sm:flex-1">
                    <div className="w-9 h-9 rounded-full bg-[#191970] flex items-center justify-center text-white font-semibold">
                      ✓
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0a0a3a]">
                        Application Received
                      </div>
                      <div className="text-xs text-gray-400">Completed</div>
                    </div>
                  </div>

                  <div className="hidden sm:block flex-1">
                    <div
                      className="h-1 bg-gradient-to-r from-[#191970] to-[#191970] rounded-full mx-4 relative"
                      style={{ height: 4 }}
                    >
                      <div className="absolute left-1/2 -translate-x-1/2 top-0 transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#F58220] border-2 border-white"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:flex-1 mt-4 sm:mt-0">
                    <div className="w-9 h-9 rounded-full bg-[#F58220] flex items-center justify-center text-white font-semibold">
                      2
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0a0a3a]">
                        Due Diligence
                      </div>
                      <div className="text-xs text-[#F58220]">In Progress</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:flex-1 mt-4 sm:mt-0">
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                      3
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#0a0a3a]">
                        Final Approval
                      </div>
                      <div className="text-xs text-gray-400">Pending</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="border border-gray-200 rounded-md bg-[#FAFBFF] p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-[#191970] flex items-center justify-center text-[#191970]">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2v6"
                          stroke="#191970"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 10h12"
                          stroke="#191970"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#191970]">
                        Review Timeline
                      </div>
                      <div className="text-xs text-gray-500">
                        Review typically takes 5–7 business days. Our team will
                        carefully evaluate your application and contact you if
                        additional information is needed.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-md p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-[#0a0a3a] mb-2">
                      View Application Summary
                    </h3>
                    <p className="text-xs text-gray-500 mb-4">
                      Review the details you submitted
                    </p>
                  </div>
                  <Link to="/onboarding/summary" className="w-full">
                    <button className="inline-flex items-center justify-center w-full md:w-auto bg-[#F58220] hover:bg-[#e36b0a] text-white text-sm font-medium px-6 py-2 rounded-md shadow transition">
                      View Summary
                    </button>
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-md p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-[#0a0a3a] mb-2">
                      Contact Us
                    </h3>
                    <p className="text-xs text-gray-500 mb-4">
                      Get in touch with our team
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/contact")}
                    className="inline-flex items-center justify-center w-full md:w-auto border border-[#191970] text-[#191970] text-sm font-medium px-6 py-2 rounded-md shadow-sm hover:bg-[#191970] hover:text-white transition"
                  >
                    Send Message
                  </button>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-6">
                <h4 className="text-sm font-semibold text-[#0a0a3a] mb-3">
                  What Happens Next?
                </h4>
                <ul className="text-sm text-gray-700 space-y-3">
                  <li>
                    <span className="font-semibold">Document Review:</span> Our
                    team will thoroughly review all submitted documents and
                    information.
                  </li>
                  <li>
                    <span className="font-semibold">Verification:</span> We may
                    contact you for additional information or clarification if
                    needed.
                  </li>
                  <li>
                    <span className="font-semibold">Notification:</span> You'll
                    receive an email notification once the review is complete.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-6" />
        </main>
      </main>
    </div>
  );
};

export default Submitted;