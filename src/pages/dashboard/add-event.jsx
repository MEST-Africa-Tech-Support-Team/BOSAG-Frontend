import React, { useState } from "react";
import { FaMapMarkerAlt, FaUpload, FaClock, FaTimes, FaCalendarAlt } from "react-icons/fa";
import AdminSidebar from "../../components/admin-sidebar";
import DashboardHeader from "../../components/dashboard-header";

export default function AddEvent() {
  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [mapPreview, setMapPreview] = useState(null);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleFindOnMap = () => {
    if (eventData.location.trim() === "") return;
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
      eventData.location
    )}&output=embed`;
    setMapPreview(mapUrl);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="ml-12 md:ml-64 flex-1 bg-gray-50 min-h-screen">
        <DashboardHeader
          title="Add Event"
          subtitle="Create and manage your event details."
        />

        <main className="flex-1 p-6">
          {/* Main Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-8">
            {/* Basic Information */}
            <section>
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Basic Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-700 text-sm font-medium mb-1 block">
                    Event Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={eventData.name}
                    onChange={handleChange}
                    placeholder="Enter event name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#F8842B] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Date */}
                  <div>
                    <label className="text-gray-700 text-sm font-medium mb-1 block">
                      Date
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={eventData.date}
                        onChange={handleChange}
                        className="w-full pl-10 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#F8842B] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="text-gray-700 text-sm font-medium mb-1 block">
                      Time
                    </label>
                    <div className="relative">
                      <FaClock className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="time"
                        name="time"
                        value={eventData.time}
                        onChange={handleChange}
                        className="w-full pl-10 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#F8842B] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Location Details */}
            <section>
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Location Details
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="text"
                    name="location"
                    value={eventData.location}
                    onChange={handleChange}
                    placeholder="Enter location address"
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#F8842B] focus:outline-none"
                  />
                  <button
                    onClick={handleFindOnMap}
                    className="bg-[#F8842B] text-white flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-[#e76d12] transition"
                  >
                    <FaMapMarkerAlt /> Find on Map
                  </button>
                </div>

                <div className="border border-gray-300 rounded-md p-4 h-48 flex items-center justify-center text-gray-400 text-sm">
                  {mapPreview ? (
                    <iframe
                      src={mapPreview}
                      title="Map Preview"
                      className="w-full h-full rounded-md border-none"
                      loading="lazy"
                    ></iframe>
                  ) : (
                    <p>
                      Map preview will appear here
                      <br />
                      Click “Find on Map” to select location
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Event Image Upload */}
            <section>
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Event Image
              </h2>
              <label
                htmlFor="imageUpload"
                className={`border-2 border-dashed border-gray-300 rounded-md h-40 flex flex-col items-center justify-center cursor-pointer hover:border-[#F8842B] transition relative overflow-hidden`}
              >
                {imagePreview ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-gray-50">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-full max-w-full object-contain rounded-md"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
                    >
                      <FaTimes size={14} />
                    </button>
                  </div>
                ) : (
                  <>
                    <FaUpload className="text-2xl mb-2 text-gray-400" />
                    <p className="text-gray-500 text-sm">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">
                      PNG, JPG, or WEBP (max. 5MB)
                    </p>
                  </>
                )}
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </section>

            {/* Event Description */}
            <section>
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Event Description
              </h2>
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleChange}
                placeholder="Provide detailed information about the event..."
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#F8842B] focus:outline-none"
              />
            </section>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button className="bg-[#191970] text-white px-6 py-2 rounded-md hover:bg-[#0f1163] transition">
                Save Event
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
