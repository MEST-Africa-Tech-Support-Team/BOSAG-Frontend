import React from "react";

const members = [
  { name: "Sarah Johnson", email: "sarah.j@email.com", img: "https://i.pravatar.cc/40?img=1" },
  { name: "Michael Chen", email: "m.chen@email.com", img: "https://i.pravatar.cc/40?img=2" },
  { name: "Emma Davis", email: "emma.d@email.com", img: "https://i.pravatar.cc/40?img=3" },
];

const MembershipApproval = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
        <h3 className="font-semibold text-gray-800 text-base">Membership Approval</h3>
        <button className="text-sm text-orange-500 hover:underline font-medium">View All</button>
      </div>

      {/* Member list */}
      <div className="space-y-3">
        {members.map((m, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition"
          >
            {/* Profile */}
            <div className="flex items-center gap-3">
              <img
                src={m.img}
                alt={m.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-800">{m.name}</p>
                <p className="text-sm text-gray-500">{m.email}</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <button className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-200 transition">
                ✓ Approve
              </button>
              <button className="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-200 transition">
                ✕ Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipApproval;
