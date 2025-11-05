import React, { useState } from "react";
import {
  Home,
  FileText,
  LayoutDashboard,
  BookOpen,
  User,
  Lock,
  LogOut,
} from "lucide-react";
import logo from "../assets/images/logo2.png";

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  const handleLogout = () => {
    console.log("User logged out");
    alert("You have been logged out!");
  };

  const navItems = [
    { name: "Home", icon: <Home size={16} />, locked: false },
    { name: "Membership Application", icon: <FileText size={16} />, locked: true },
    { name: "Dashboard", icon: <LayoutDashboard size={16} />, locked: true },
    { name: "Resource Hub", icon: <BookOpen size={16} />, locked: true },
    { name: "Manage Profile", icon: <User size={16} />, locked: true },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#191970] text-white flex flex-col justify-between shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center gap-2 px-5 py-5 border-b border-[#2c2c7a]">
        <img src={logo} alt="BOSAG" className="w-10 h-10 rounded-md" />
        <div>
          <h1 className="text-sm font-semibold leading-tight">BOSAG</h1>
          <p className="text-[11px] text-gray-300">Member Portal</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4 flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => !item.locked && setActive(item.name)}
            className={`group relative flex items-center gap-3 px-5 py-2 text-sm font-medium rounded-md transition-all duration-200 
              ${
                active === item.name
                  ? "bg-[#ff6600] text-white shadow-sm"
                  : "text-gray-300 hover:bg-[#23236b] hover:text-white"
              }`}
          >
            {/* Icon and label */}
            <span className="flex items-center gap-3 flex-1">
              {item.icon}
              <span className="truncate">{item.name}</span>
            </span>

            {/* Lock icon */}
            {item.locked && (
              <Lock
                size={13}
                className="text-gray-400 ml-1 opacity-80 group-hover:opacity-100 transition-opacity"
              />
            )}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-[#2c2c7a]">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 w-full text-red-500 font-medium py-2 rounded-md hover:bg-red-600 hover:text-white transition-colors"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
