import React from "react";

export default function MemberCategoryCard({ color, title, active, pending }) {
  return (
    <div className="bg-white border  rounded-2xl shadow-sm border-gray-100 p-4">
      <div className="flex items-center mb-2">
        <span
          className={`h-3 w-3 rounded-full mr-2`}
          style={{ backgroundColor: color }}
        />
        <h3 className="font-semibold text-[#1a237e]">{title}</h3>
      </div>
      <div className="text-sm text-gray-700">
        <p>Active <span className="font-semibold text-gray-900 ml-2">{active}</span></p>
        <p>Pending <span className="font-semibold text-orange-600 ml-2">{pending}</span></p>
      </div>
    </div>
  );
}
