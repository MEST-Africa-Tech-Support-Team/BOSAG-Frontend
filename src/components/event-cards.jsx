import React from "react";

const EventCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Event Image */}
        <div className="aspect-video w-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Community workshop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Event Details */}
        <div className="p-12">
          <div className="text-orange-500 font-bold text-2xl mb-6">
            March 15, 2025
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Community Leadership Workshop
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Empowering local leaders with essential skills for community
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
