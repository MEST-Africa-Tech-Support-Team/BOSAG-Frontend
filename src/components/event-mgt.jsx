import React from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

const events = [
  {
    title: "Annual Conference 2024",
    date: "March 15, 2024 • 9:00 AM",
    location: "Convention Center, Downtown",
  },
  {
    title: "Networking Mixer",
    date: "March 22, 2024 • 6:00 PM",
    location: "Business Hub, Level 5",
  },
  {
    title: "Workshop: Digital Marketing",
    date: "April 5, 2024 • 2:00 PM",
    location: "Training Room A",
  },
];

const EventsManagement = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
        <h3 className="font-semibold text-gray-800 text-base">Events Management</h3>
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-3.5 py-2 rounded-lg transition">
          <Plus size={16} />
          Add Event
        </button>
      </div>

      {/* Event list */}
      <div className="space-y-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex justify-between items-start bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition"
          >
            {/* Event Info */}
            <div>
              <h4 className="font-medium text-gray-800">{event.title}</h4>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-sm text-gray-400">{event.location}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-1">
              <button className="text-blue-500 hover:text-blue-600 transition">
                <Pencil size={18} />
              </button>
              <button className="text-red-500 hover:text-red-600 transition">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsManagement;
