import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Bell,
  FileText,
  Headphones,
  BookOpen,
  Settings,
} from "lucide-react";
import Sidebar from "../../components/sidebar";
import bosagApi from "../../api/bosagApi";

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [notifications, setNotifications] = useState(0);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    validateUser();
  }, []);

  
  async function validateUser() {
    try {
      
      await bosagApi.get("/auth/me");

      
      fetchDashboardData();
    } catch (err) {
      console.log("Auth failed:", err);
      localStorage.removeItem("token");
      navigate("/login");
    }
  }

  async function fetchDashboardData() {
    try {
      const res = await bosagApi.get("/user/profile");
      setUser(res.data);

      const statRes = await bosagApi.get("/user/membership");
      setStats(statRes.data);

      const notifRes = await bosagApi.get("/notifications/unread-count");
      setNotifications(notifRes.data.count);
    } catch (error) {
      console.log("Error loading dashboard:", error);
    } finally {
      setLoading(false);
    }
  }

  const firstName = user?.firstName || "";
  const lastName = user?.lastName || "";
  const fullName = user ? `${firstName} ${lastName}` : "Loading...";
  const initials =
    user && firstName && lastName
      ? `${firstName[0]}${lastName[0]}`.toUpperCase()
      : "";

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB] text-gray-600">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] text-gray-900">
      
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      
      <main className="flex-1 lg:ml-64 flex flex-col">
        
        <nav className="w-full bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm">
          <div className="text-[#1E1E2D] font-bold text-lg">
            B
            <span className="text-orange-400">O</span>
            SAG <span className="font-normal text-gray-600">Dashboard</span>
          </div>

          <div className="flex items-center space-x-6">
            {/* Notifications */}
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#F58220] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>

            {/* Profile */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700">
                {initials}
              </div>
              <span className="font-medium text-gray-800 text-sm">
                {fullName}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </nav>

        
        <header className="flex justify-between items-center px-8 py-6">
          <div>
            <h1 className="text-2xl font-semibold text-[#1E1E2D]">
              Welcome back, {firstName || "Member"}
            </h1>
            <p className="text-gray-600 text-sm">
              Here’s what’s happening with your BOSAG membership today.
            </p>
          </div>

          <div>
            <span className="text-sm font-medium text-green-700 bg-green-100 border border-green-200 px-3 py-1 rounded-md">
              ● {stats?.status || "Active Member"}
            </span>
          </div>
        </header>

        <div className="flex-1 px-8 pb-8 space-y-8 overflow-y-auto">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatusCard
              label="Membership Tier"
              value={stats?.tier || "..."}
              badge="PREMIUM"
            />
            <StatusCard
              label="Renewal Date"
              value={stats?.renewalDate || "..."}
              badge="ACTIVE"
            />
            <StatusCard
              label="Governance Role"
              value={stats?.governanceRole || "..."}
              badge="ROLE"
            />
            <StatusCard
              label="Events Attended"
              value={`${stats?.eventsAttended ?? 0} Events`}
              badge="THIS YEAR"
            />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#1E1E5A] text-white rounded-xl shadow-md p-6 space-y-4 lg:col-span-2">
              <span className="bg-[#F58220] text-white text-[11px] px-2 py-1 rounded font-semibold uppercase tracking-wide">
                Exclusive Content
              </span>

              <h2 className="text-xl font-semibold">Musa Interview Analysis</h2>
              <p className="text-sm text-gray-200 leading-relaxed">
                Get exclusive insights from our latest interview with industry
                leader Musa. Deep-dive analysis covering market trends,
                strategic decisions, and future outlook.
              </p>

              <div className="flex items-center text-sm text-gray-300 space-x-4">
                <span>⏱ 45 min read</span>
                <span>⭐ Premium Content</span>
              </div>

              <button
                onClick={() => navigate("/blog")}
                className="mt-2 bg-[#F58220] hover:bg-[#e46f15] text-white px-5 py-2 rounded-md text-sm font-medium transition"
              >
                Access Full Analysis →
              </button>
            </div>

            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-semibold text-[#1E1E2D]">
                  Upcoming Events
                </h3>
                <button
                  onClick={() => navigate("/event")}
                  className="text-sm text-[#F58220] font-medium hover:underline"
                >
                  View All
                </button>
              </div>

              <div className="divide-y divide-gray-100">
                <EventCard
                  date="15"
                  month="Dec"
                  title="Annual Strategy Summit"
                  type="Virtual Conference"
                  time="Dec 15, 2024 · 2:00 PM EST"
                />
                <EventCard
                  date="22"
                  month="Dec"
                  title="Governance Workshop"
                  type="In-Person Meeting"
                  time="Dec 22, 2024 · 10:00 AM EST"
                />
                <EventCard
                  date="05"
                  month="Jan"
                  title="New Year Networking"
                  type="Social Event"
                  time="Jan 05, 2025 · 6:00 PM EST"
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-[#1E1E2D] mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <QuickAction
                icon={<FileText size={20} />}
                label="Member Documents"
                desc="Access your certificates and official documents"
                onClick={() => navigate("/documents")}
              />
              <QuickAction
                icon={<Headphones size={20} />}
                label="Member Support"
                desc="Get help from our dedicated support team"
                onClick={() => navigate("/support")}
              />
              <QuickAction
                icon={<BookOpen size={20} />}
                label="Resource Library"
                desc="Browse our extensive collection of resources"
                onClick={() => navigate("/resources")}
              />
              <QuickAction
                icon={<Settings size={20} />}
                label="Account Settings"
                desc="Manage your profile and preferences"
                onClick={() => navigate("/profile")}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


const StatusCard = ({ label, value, badge }) => (
  <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[13px] text-gray-500">{label}</span>
      <span className="text-[10px] font-semibold text-white bg-[#F58220] px-2 py-[2px] rounded">
        {badge}
      </span>
    </div>
    <div className="text-[17px] font-semibold text-[#1E1E2D]">{value}</div>
  </div>
);

const EventCard = ({ date, month, title, type, time }) => (
  <div className="flex justify-between items-center py-3 hover:bg-gray-50 px-2 rounded-md transition">
    <div className="flex items-center space-x-4">
      <div className="text-center w-8">
        <div className="text-[#F58220] text-lg font-bold leading-none">
          {date}
        </div>
        <div className="text-gray-500 text-[10px] uppercase">{month}</div>
      </div>
      <div>
        <div className="font-medium text-gray-800 text-[14px]">{title}</div>
        <div className="text-[12px] text-gray-500">{type}</div>
      </div>
    </div>
    <div className="text-[11px] text-gray-400">{time}</div>
  </div>
);

const QuickAction = ({ icon, label, desc, onClick }) => (
  <button
    onClick={onClick}
    className="text-left bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
  >
    <div className="flex items-center mb-2 space-x-2 text-[#F58220]">
      {icon}
      <h4 className="font-semibold text-sm text-[#1E1E2D]">{label}</h4>
    </div>
    <p className="text-[12px] text-gray-600 leading-snug">{desc}</p>
  </button>
);
