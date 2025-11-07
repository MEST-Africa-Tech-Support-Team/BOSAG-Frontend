import React from "react";
import DashboardStatsCard from "../../components/dashboardstats-card";
import MembershipApproval from "../../components/membership-approval";
import EventsManagement from "../../components/event-mgt";
import { Users, UserPlus, CheckCircle, XCircle } from "lucide-react";
import Sidebar from "../../components/admin-sidebar";
import DashboardHeader from "../../components/dashboard-header";

const AdminDashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-64 min-h-screen bg-gray-50 p-6">
        {/* Header Section */}
        <DashboardHeader />

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <DashboardStatsCard
          title="Pending Approvals"
          value="12"
          icon={<UserPlus className="text-orange-500" size={24} />}
          color="bg-orange-50"
        />
        <DashboardStatsCard
          title="Total Members"
          value="248"
          icon={<Users className="text-indigo-500" size={24} />}
          color="bg-indigo-50"
        />
        <DashboardStatsCard
          title="Approved Today"
          value="5"
          icon={<CheckCircle className="text-green-500" size={24} />}
          color="bg-green-50"
        />
        <DashboardStatsCard
          title="Rejected"
          value="32"
          icon={<XCircle className="text-red-500" size={24} />}
          color="bg-red-50"
        />
      </div>

      {/* Approval & Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MembershipApproval />
        <EventsManagement />
      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
