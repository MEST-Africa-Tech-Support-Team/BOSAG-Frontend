import React from "react";

const DashboardStatsCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-semibold mt-1">{value}</h2>
      </div>
      <div className={`p-3 rounded-xl ${color}`}>{icon}</div>
    </div>
  );
};

export default DashboardStatsCard;
