import React from "react";
import { Bell } from "lucide-react";

export default function DashboardHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 p-4 border-b border-gray-200 shadow-b">
      {/* Left: Title & Subtitle */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      {/* Right: Notifications + Profile */}
      <div className="flex items-center gap-4 mt-3 sm:mt-0">
        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=1"
            alt="Admin Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="leading-tight">
            <p className="text-sm font-medium text-gray-900">John Admin</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
