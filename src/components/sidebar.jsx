import React from "react";
import { NavLink, useNavigate } from "react-router";
import { LayoutDashboard, BookOpen, User, LogOut } from "lucide-react";
import logo from "../assets/images/logo2.png";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast"; // ✅ Import both toast and Toaster

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all auth and form data
    localStorage.removeItem("bosagToken");
    localStorage.removeItem("formA");
    localStorage.removeItem("formB");
    localStorage.removeItem("formC");
    localStorage.removeItem("formD");
    localStorage.removeItem("formE");
    localStorage.removeItem("formF");
    localStorage.removeItem("completedSteps");

    // Show elegant toast
    toast.success("You have been logged out successfully!", {
      duration: 3000,
      icon: "✅",
    });

    navigate("/login");
  };

  const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={16} />, path: "/dashboard" },
    { name: "Member Resource Hub", icon: <BookOpen size={16} />, path: "/onboarding/resource-hub" },
    { name: "Manage Profile", icon: <User size={16} />, path: "/onboarding/manage-profile" },
  ];

  return (
    <>
      {/* ✅ Toaster included right here — no need to add it elsewhere */}
      <Toaster position="top-right" reverseOrder={false} />

      <aside className="fixed top-0 left-0 h-screen w-64 bg-[#191970] text-white flex flex-col shadow-lg">
        {/* Logo Section */}
        <div className="flex flex-col items-center pt-6 pb-4 border-b border-[#2e2e86]">
          <Link to="/">
            <img src={logo} alt="BOSAG" className="w-28 mb-2" />
          </Link>
          <p className="text-[12px] text-gray-300 text-center px-4">
            Business Outsourcing Service Association, Ghana
          </p>
        </div>

        {/* Navigation Section */}
        <nav className="mt-6 flex flex-col gap-1 px-4 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#F58220] text-white shadow-sm"
                    : "text-gray-300 hover:bg-[#23236b] hover:text-white"
                }`
              }
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.name}</span>
              </div>
            </NavLink>
          ))}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 mt-4 text-sm text-gray-200 hover:bg-[#23236b] hover:text-white transition-colors rounded-md"
          >
            <LogOut size={16} />
            Log Out
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;