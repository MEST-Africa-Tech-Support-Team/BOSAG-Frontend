import React from "react";
import { Check, X, Eye } from "lucide-react";

const applicants = [
  {
    name: "John Smith",
    email: "john@techcorp.com",
    tier: "Platinum Member",
    applied: "November 2, 2025",
    status: "Under Review",
    badgeColor: "bg-yellow-100 text-yellow-800",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    name: "Sarah Johnson",
    email: "sarah@startup.io",
    tier: "Start-up & Associates",
    applied: "December 1, 2025",
    status: "Documents Pending",
    badgeColor: "bg-green-100 text-green-800",
    avatar: "https://i.pravatar.cc/40?img=8",
  },
];

export default function PendingApplicationsTable() {
  return (
    <div className="bg-white border shadow-sm p-4 mt-6 rounded-2xl  border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-[#1a237e]">Pending Applications</h3>
        <div className="flex items-center gap-2">
          <select className="border rounded-lg px-3 py-1 text-sm">
            <option>All Tiers</option>
            <option>Platinum</option>
            <option>Gold</option>
          </select>
          <button className="bg-[#1a237e] text-white px-3 py-1 rounded-lg text-sm">
            Filter
          </button>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="text-left py-2">Applicant</th>
            <th className="text-left py-2">Membership Tier</th>
            <th className="text-left py-2">Applied Date</th>
            <th className="text-left py-2">Status</th>
            <th className="text-left py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, idx) => (
            <tr
              key={idx}
              className="border-b last:border-0 hover:bg-gray-50 transition-colors"
            >
              <td className="py-3 flex items-center gap-3">
                <img
                  src={applicant.avatar}
                  alt={applicant.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-800">{applicant.name}</p>
                  <p className="text-gray-500 text-xs">{applicant.email}</p>
                </div>
              </td>
              <td>
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${applicant.badgeColor}`}
                >
                  {applicant.tier}
                </span>
              </td>
              <td className="text-gray-700">{applicant.applied}</td>
              <td>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                  {applicant.status}
                </span>
              </td>
              <td className="flex items-center gap-2 py-3">
                <Check size={16} className="text-green-500 cursor-pointer" />
                <X size={16} className="text-red-500 cursor-pointer" />
                <Eye size={16} className="text-blue-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
