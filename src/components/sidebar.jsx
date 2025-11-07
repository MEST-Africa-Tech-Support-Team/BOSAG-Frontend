import React, { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  User,
  Lock,
  LogOut,
} from "lucide-react";
import logo from "../assets/images/logo2.png";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const handleLogout = () => {
    alert("You have been logged out!");
  };

  const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={16} />, locked: false },
    { name: "Resource Hub", icon: <BookOpen size={16} />, locked: true },
    { name: "Manage Profile", icon: <User size={16} />, locked: true },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#191970] text-white flex flex-col shadow-lg">
      {/* Logo Section */}
      <div className="flex flex-col items-center pt-6 pb-4 border-b border-[#2e2e86]">
        <img src={logo} alt="BOSAG" className="w-28 mb-2" />
        <p className="text-[12px] text-gray-300 text-center px-4">
          Business Outsourcing Service Association, Ghana
        </p>
      </div>

      {/* Navigation Section */}
      <nav className="mt-6 flex flex-col gap-1 px-4 flex-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => !item.locked && setActive(item.name)}
            className={`flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 
              ${
                active === item.name
                  ? "bg-[#ff7a00] text-white shadow-sm"
                  : "text-gray-300 hover:bg-[#23236b] hover:text-white"
              }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.name}</span>
            </div>
            {item.locked && <Lock size={13} className="text-gray-400" />}
          </button>
        ))}

        {/* Logout Button — directly below Manage Profile */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 mt-2 text-sm text-gray-200 hover:bg-[#23236b] hover:text-white transition-colors rounded-md"
        >
          <LogOut size={16} />
          Log Out
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
