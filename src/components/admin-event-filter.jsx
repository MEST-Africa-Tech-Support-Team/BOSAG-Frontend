import React from "react";

export default function AdminEventFilter({ filter, setFilter, search, setSearch }) {
  const filters = ["All", "Upcoming", "Past"];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 border border-gray-300 p-4 bg-white rounded-xl">
      {/* Filter Buttons */}
      <div className="flex gap-2">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              filter === item
                ? "bg-[#1b237e] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search events..."
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#1b237e]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
