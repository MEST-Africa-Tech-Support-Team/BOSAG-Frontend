import React from "react";
import { Edit } from "lucide-react";
import { FaUsers, FaTrash, FaClock, FaCalendar } from "react-icons/fa6";

export default function EventManagementCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between">
          <span
            className={`text-xs px-2 py-1 rounded-full ${event.status === "Upcoming"
                ? "bg-orange-100 text-orange-600"
                : "bg-gray-200 text-gray-600"
              }`}
          >
            {event.status}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleEdit(event.id)}
              className="text-gray-800 hover:text-blue-800 transition"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => handleDelete(event.id)}
              className="text-red-400 hover:text-red-800 transition"
            >
              <FaTrash size={16} />
            </button>
          </div>
        </div>
        <h3 className="mt-2 font-semibold text-gray-800">{event.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{event.description}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
          <FaCalendar className="w-4 h-4 text-[#191970]" /> {event.date}
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
          <FaClock className="w-4 h-4 text-[#191970]" /> {event.time}
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
          <FaUsers className="w-4 h-4 text-[#191970]" /> {event.registered} Registered
        </div>
      </div>
    </div>
  );
}