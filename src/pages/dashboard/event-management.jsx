import React, { useState, useMemo } from "react";
import AdminSidebar from "../../components/admin-sidebar";
import EventmanagementCard from "../../components/event-management-card";
import AdminEventFilter from "../../components/admin-event-filter";
import { FaClock, FaUsers, FaCheck, FaCalendarDays } from "react-icons/fa6";
import DashboardHeader from "../../components/dashboard-header";

export default function EventManagement() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      description:
        "Join industry leaders for cutting-edge technology discussions and networking opportunities.",
      date: "March 15, 2024",
      time: "9:00 AM – 5:00 PM",
      registered: 156,
      image: "https://picsum.photos/400/300?random=1",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Entrepreneur Connect 2025",
      description:
        "An exclusive event to connect local entrepreneurs and investors.",
      date: "April 25, 2025",
      time: "8:00 AM – 3:00 PM",
      registered: 120,
      image: "https://picsum.photos/400/300?random=2",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Sustainable Business Forum 2025",
      description:
        "A conference focused on promoting eco-friendly business strategies and sustainable entrepreneurship in Africa.",
      date: "June 10, 2025",
      time: "9:30 AM – 4:30 PM",
      registered: 182,
      image: "https://picsum.photos/400/300?random=3",
      status: "Upcoming",
    },
    {
      id: 4,
      title: "Digital Business Forum 2023",
      description:
        "Exploring the future of digital entrepreneurship and business growth.",
      date: "October 10, 2023",
      time: "10:00 AM – 4:00 PM",
      registered: 98,
      image: "https://picsum.photos/400/300?random=4",
      status: "Past",
    },
  ];

  // Filtered events
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesFilter = filter === "All" || event.status === filter;
      const matchesSearch = event.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search, events]);

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="ml-16 md:ml-64 flex-1 bg-gray-50 w-full min-h-screen p-6 transition-all duration-300">
        <DashboardHeader />
        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          <StatCard
            icon={<FaCalendarDays size={24} />}
            label="Total Events"
            value={24}
            iconBg="bg-purple-100"
            iconColor="text-purple-800"
          />
          <StatCard
            icon={<FaClock size={24} />}
            label="Upcoming"
            value={8}
            iconBg="bg-orange-100"
            iconColor="text-orange-700"
          />
          <StatCard
            icon={<FaCheck size={24} />}
            label="Past Events"
            value={16}
            iconBg="bg-gray-100"
            iconColor="text-gray-700"
          />
          <StatCard
            icon={<FaUsers size={24} />}
            label="Total Attendees"
            value={1246}
            iconBg="bg-green-100"
            iconColor="text-green-800"
          />
        </div>

        {/* Filter Bar */}
        <AdminEventFilter
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />

        {/* Event Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventmanagementCard key={event.id} event={event} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No events found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, iconBg, iconColor }) {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-1">{value}</h2>
      </div>
      <div className={`p-3 rounded-lg ${iconBg}`}>
        <div className={iconColor}>{icon}</div>
      </div>
    </div>
  );
}