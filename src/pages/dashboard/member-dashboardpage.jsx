import React from "react";
import DashboardHeader from "../../components/dashboard-header";
import DashboardStatsCard from "../../components/dashboardstats-card";
import MemberCategoryCard from "../../components/member-category-card";
import PendingApplicationsTable from "../../components/pending-applications-table";
import Sidebar from "../../components/sidebar";

export default function MembershipApproval() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-6 space-y-6">
      {/* Header */}
      <DashboardHeader
        title="Membership Approval"
        subtitle="Manage and approve member applications"
      />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardStatsCard
          title="Total Applications"
          value="56"
            color="bg-blue-50"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5l2 2h5a2 2 0 012 2v5" /> 
            </svg>} 
        />
        <DashboardStatsCard
          title="Pending Reviews"
            value="18"
            color="bg-yellow-50"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">        
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}
        />
        <DashboardStatsCard
            title="Approved Today"
            value="7"
            color="bg-green-50"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>}
        />
        <DashboardStatsCard
            title="Rejected"
            value="4"
            color="bg-red-50"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>}
        />

      </div>

      {/* Member Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MemberCategoryCard
          color="#fdd835"
          title="Platinum Members"
          active={48}
          pending={3}
        />
        <MemberCategoryCard
          color="#ffb300"
          title="Gold Members"
          active={127}
          pending={8}
        />
        <MemberCategoryCard
          color="#1e88e5"
          title="Vendors & Affiliates"
          active={234}
          pending={5}
        />
        <MemberCategoryCard
          color="#43a047"
          title="Start-ups & Associates"
          active={189}
          pending={4}
        />
        <MemberCategoryCard
          color="#8e24aa"
          title="Government Members"
          active={67}
          pending={2}
        />
        <MemberCategoryCard
          color="#546e7a"
          title="Honorary & Observers"
          active={32}
          pending={2}
        />
      </div>

      {/* Pending Applications Table */}
      <PendingApplicationsTable />
    </div>
    </div>
  );
}
