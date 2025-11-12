import React, { useMemo, useState } from "react";
import AdminSidebar from "../../components/admin-sidebar";
import DashboardHeader from "../../components/dashboard-header";

// icons
import {
  FaCrown,
  FaMedal,
  FaHandshake,
  FaRocket,
  FaLandmark,
  FaEye,
  FaEdit,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const TIERS = [
  { key: "All", label: "All Tiers" },
  { key: "Platinum", label: "Platinum", icon: <FaCrown />, bg: "bg-purple-100", color: "text-purple-700" },
  { key: "Gold", label: "Gold", icon: <FaMedal />, bg: "bg-yellow-100", color: "text-yellow-700" },
  { key: "Vendor", label: "Vendors", icon: <FaHandshake />, bg: "bg-blue-100", color: "text-blue-700" },
  { key: "Start-up", label: "Start-ups & Associates", icon: <FaRocket />, bg: "bg-green-100", color: "text-green-700" },
  { key: "Government", label: "Government", icon: <FaLandmark />, bg: "bg-red-100", color: "text-red-700" },
  { key: "Honorary", label: "Honorary & Observers", icon: <FaEye />, bg: "bg-indigo-100", color: "text-indigo-700" },
];

const STATUS_OPTIONS = ["All", "Active", "Expiring Soon", "Expired"];

// Mock data: change/replace with real data source
const MOCK_MEMBERS = [
  {
    id: 1,
    name: "John Anderson",
    email: "john.anderson@company.com",
    tier: "Platinum",
    joinDate: "Jan 15, 2023",
    expiryDate: "Jan 15, 2025",
    status: "Active",
    avatar: "https://i.pravatar.cc/48?img=1",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@startup.io",
    tier: "Gold",
    joinDate: "Mar 22, 2023",
    expiryDate: "Mar 22, 2025",
    status: "Expiring Soon",
    avatar: "https://i.pravatar.cc/48?img=2",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@techcorp.com",
    tier: "Vendor",
    joinDate: "May 10, 2023",
    expiryDate: "May 10, 2025",
    status: "Active",
    avatar: "https://i.pravatar.cc/48?img=3",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "e.rodriguez@innovate.com",
    tier: "Start-up",
    joinDate: "Jul 08, 2023",
    expiryDate: "Jul 08, 2025",
    status: "Active",
    avatar: "https://i.pravatar.cc/48?img=4",
  },
  {
    id: 5,
    name: "David Thompson",
    email: "d.thompson@gov.org",
    tier: "Government",
    joinDate: "Sep 15, 2023",
    expiryDate: "Sep 15, 2025",
    status: "Active",
    avatar: "https://i.pravatar.cc/48?img=5",
  },
  {
    id: 6,
    name: "Anna Moore",
    email: "anna.moore@consult.io",
    tier: "Honorary",
    joinDate: "Nov 01, 2022",
    expiryDate: "Nov 01, 2024",
    status: "Expired",
    avatar: "https://i.pravatar.cc/48?img=6",
  },
  // add more mock members as needed to test pagination
];

export default function AdminMembersDashboard() {
  const [tierFilter, setTierFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;

  // computed counts for tier cards (based on MOCK_MEMBERS)
  const tierCounts = useMemo(() => {
    const counts = {};
    MOCK_MEMBERS.forEach((m) => {
      counts[m.tier] = (counts[m.tier] || 0) + 1;
    });
    return counts;
  }, []);

  // filter members by tier, status, and search
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return MOCK_MEMBERS.filter((m) => {
      const matchesTier = tierFilter === "All" ? true : m.tier === tierFilter;
      const matchesStatus = statusFilter === "All" ? true : m.status === statusFilter;
      const matchesSearch = q === "" ? true : (m.name + " " + m.email).toLowerCase().includes(q);
      return matchesTier && matchesStatus && matchesSearch;
    });
  }, [tierFilter, statusFilter, search]);

  // pagination
  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const startIndex = (page - 1) * perPage;
  const paginated = filtered.slice(startIndex, startIndex + perPage);

  // helpers: status badge classes
  const statusBadge = (status) => {
    if (status === "Active") return "bg-green-100 text-green-800";
    if (status === "Expiring Soon") return "bg-orange-100 text-orange-700";
    if (status === "Expired") return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-700";
  };

  const tierMeta = (tier) => TIERS.find((t) => t.key === tier) || {};

  // action handlers (stub)
  const handleView = (id) => alert(`View member ${id}`);
  const handleEdit = (id) => alert(`Edit member ${id}`);

  // reset page when filters/search change
  React.useEffect(() => {
    setPage(1);
  }, [tierFilter, statusFilter, search]);

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="ml-16 md:ml-64 flex-1 bg-gray-50 min-h-screen overflow-x-hidden">
        <DashboardHeader
          title="Members Dashboard"
          subtitle="Manage and approve member applications"
        />

        <main className="p-4">
          {/* Tier stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
            {TIERS.slice(1).map((t) => (
              <div
                key={t.key}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between gap-4"
              >
                <div className="flex items-center justify-between w-full">
                  <div>
                    <p className="text-xs text-gray-500">{t.label}</p>
                    <h3 className="text-lg font-semibold">
                      {tierCounts[t.key] ?? 0}
                    </h3>
                  </div>

                  <div className={`p-3 rounded-lg ${t.bg}`}>
                    <div className={`${t.color} text-xl`}>{t.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filters row */}
          <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-3 items-start">
                {/* Tier select */}
                <select
                  value={tierFilter}
                  onChange={(e) => setTierFilter(e.target.value)}
                  className="border border-gray-400 rounded-md px-3 py-2 text-sm bg-white"
                >
                  {TIERS.map((t) => (
                    <option key={t.key} value={t.key}>
                      {t.label}
                    </option>
                  ))}
                </select>

                {/* Status select */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-400 rounded-md px-3 py-2 text-sm bg-white"
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-none md:flex items-center gap-3 justify-end">
                {/* Search */}
                <div className="relative w-full md:w-64">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search members..."
                    className="pl-10 pr-3 py-2 border border-gray-400 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#F8842B]"
                  />
                </div>

                <button className="bg-[#F8842B] text-white px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap mt-4 md:mt-0 flex md:flex-none justify-center">
                  Add Member
                </button>
              </div>
            </div>
          </div>

          {/* Table (md+), Card list on small screens */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            {/* responsive: table for md+, stacked cards for small screens */}
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-nowrap text-left border-collapse">
                  <thead>
                    <tr className="text-xs text-gray-500 border-b">
                      <th className="py-3 px-4 whitespace-nowrap">Tier</th>
                      <th className="py-3 px-4 whitespace-nowrap">Member</th>
                      <th className="py-3 px-4 whitespace-nowrap">Join Date</th>
                      <th className="py-3 px-4 whitespace-nowrap">Expiry Date</th>
                      <th className="py-3 px-4 whitespace-nowrap">Status</th>
                      <th className="py-3 px-4 whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginated.map((m) => {
                      const tier = tierMeta(m.tier);
                      const expiryClass =
                        m.status === "Expired"
                          ? "text-red-600"
                          : m.status === "Expiring Soon"
                            ? "text-orange-600"
                            : "text-gray-600";
                      return (
                        <tr key={m.id} className="border-b border-gray-300">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={m.avatar}
                                alt={m.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div>
                                <div className="font-medium text-gray-800">
                                  {m.name}
                                </div>
                                <div className="text-sm text-gray-500 pr-6">
                                  {m.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${tier.bg} ${tier.color}`}
                            >
                              <span className="text-sm">{tier.icon}</span>
                              <span className="whitespace-nowrap">{m.tier}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600">{m.joinDate}</td>
                          <td className={`py-4 px-4 text-sm ${expiryClass}`}>{m.expiryDate}</td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm ${statusBadge(m.status)}`}>
                              {m.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleView(m.id)}
                                className="p-2 rounded-md hover:bg-gray-100 text-[#F8842B]"
                              >
                                <FaEye />
                              </button>
                              <button
                                onClick={() => handleEdit(m.id)}
                                className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
                              >
                                <FaEdit />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

            {/* small screen card layout */}
            {/* <div className="md:hidden flex flex-col gap-3">
              {paginated.map((m) => {
                const tier = tierMeta(m.tier);
                return (
                  <div key={m.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={m.avatar}
                          alt={m.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-gray-800">{m.name}</div>
                          <div className="text-sm text-gray-500">{m.email}</div>
                          <div className="mt-2 flex items-center gap-2">
                            <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-sm ${tier.bg} ${tier.color}`}>
                              <span>{tier.icon}</span>
                              <span>{m.tier}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className={`text-sm ${statusBadge(m.status)}`}>{m.status}</div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleView(m.id)} className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><FaEye /></button>
                          <button onClick={() => handleEdit(m.id)} className="p-2 rounded-md hover:bg-gray-100 text-gray-600"><FaEdit /></button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                      <div>Joined: {m.joinDate}</div>
                      <div className={m.status === "Expired" ? "text-red-600" : m.status === "Expiring Soon" ? "text-orange-600" : "text-gray-600"}>
                        Expires: {m.expiryDate}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}

            {/* footer: showing X of Y and pagination */}
            <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="text-sm text-gray-600">
                Showing {total === 0 ? 0 : startIndex + 1} to{" "}
                {Math.min(startIndex + perPage, total)} of {total} results
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className={`px-3 py-1 rounded-md border ${page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}
                >
                  <span className="inline-block">
                    Previous
                  </span>
                </button>

                {/* page numbers (show up to 5 pages for simplicity) */}
                <div className="hidden sm:flex items-center gap-1">
                  {Array.from({ length: pages }).map((_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`px-3 py-1 rounded-md ${page === pageNum ? "bg-[#191970] text-white" : "hover:bg-gray-100"}`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setPage((p) => Math.min(pages, p + 1))}
                  disabled={page === pages}
                  className={`px-3 py-1 rounded-md border ${page === pages ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}
                >
                  <span className="inline-block">
                    Next
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}