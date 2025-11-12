import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import { ChevronRight, Lock, Clock, FileText, FileBadge, Shield, Gavel } from "lucide-react";
import { Link, Navigate } from "react-router";

const MembershipDashboard = () => {
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(true);

  // Check if user is authenticated
  const token = localStorage.getItem("bosagToken");
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setFirstName(parsedUser.firstName || parsedUser.firstname || "Member");
      } catch (error) {
        console.error("Error parsing user data:", error);
        setFirstName("Member");
      }
    } else {
      setFirstName("Member");
    }
    setLoading(false);
  }, []);

  // Redirect to login if no token
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const steps = [
    { id: "A", label: "Personal Information" },
    { id: "B", label: "Professional Background" },
    { id: "C", label: "Educational Credentials" },
    { id: "D", label: "Work Experience" },
    { id: "E", label: "References" },
    { id: "F", label: "Documentation Upload" },
    { id: "G", label: "Review & Submit" },
  ];

  
  const documents = [
    {
      icon: <FileText className="text-blue-600 w-5 h-5" />,
      title: "BOSAG Constitution",
      viewUrl: "https://docs.google.com/document/d/1VKyKRw3fVuc-WsvSdNKSA4kwXV_gDPQc/edit",
      downloadUrl: "https://docs.google.com/document/d/1VKyKRw3fVuc-WsvSdNKSA4kwXV_gDPQc/export?format=pdf",
    },
    {
      icon: <FileBadge className="text-blue-600 w-5 h-5" />,
      title: "Membership Terms & Conditions",
      viewUrl: "https://docs.google.com/document/d/13fuxoYOnm7T1IPnJo-v-nJYpSui9dwRm/edit",
      downloadUrl: "https://docs.google.com/document/d/13fuxoYOnm7T1IPnJo-v-nJYpSui9dwRm/export?format=pdf",
    },
    {
      icon: <Shield className="text-blue-600 w-5 h-5" />,
      title: "Code of Conduct and Ethics",
      viewUrl: "https://bosag.org/docs/code-of-conduct.pdf",
      downloadUrl: "https://bosag.org/docs/code-of-conduct.pdf",
    },
    {
      icon: <Gavel className="text-blue-600 w-5 h-5" />,
      title: "Governing Council Mandate",
      viewUrl: "https://drive.google.com/file/d/14j9OGGuZskM8snNAOJY2Yz4yHtzBjBwc/view",
      downloadUrl: "https://drive.google.com/uc?export=download&id=14j9OGGuZskM8snNAOJY2Yz4yHtzBjBwc",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f9fafc] flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fafc] flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto">
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <header className="mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome, {firstName}! Your Membership Journey Starts Here.
              </h1>

              <div className="mt-3 flex items-start gap-3 bg-[#fff7f0] border border-[#ffd7b8] rounded-md p-3">
                <div className="w-1.5 h-8 bg-[#ff6600] rounded-sm mt-0.5"></div>
                <p className="text-sm text-[#e65c00] leading-snug">
                  <strong>Action Required:</strong> Complete your 7-Step Application to Unlock
                  Member Benefits.
                </p>
              </div>
            </header>

            <section className="bg-white p-6 rounded-lg border border-gray-100">
              <h2 className="text-sm font-semibold text-gray-800 mb-4">
                Read these Documents Before Application
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border border-gray-100 rounded-md p-3"
                  >
                    <div className="flex items-center gap-2">
                      {doc.icon}
                      <span className="text-sm text-gray-700 font-medium">{doc.title}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <a
                        href={doc.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:underline"
                      >
                        View
                      </a>
                      <a
                        href={doc.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:underline"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

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
                <Link 
                  to="/onboarding/form-a"
                  className="flex items-center gap-2 bg-[#191970] text-white text-sm font-medium py-2.5 px-6 rounded-md hover:bg-[#14145e] transition-colors shadow-sm"
                >
                  Start Application: Section A
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

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