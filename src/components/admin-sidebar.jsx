import { NavLink } from "react-router";
import { GoGraph } from "react-icons/go";
import { FaUserCheck, FaUsers } from "react-icons/fa6";
import { FaCalendarPlus } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import React from "react";
import logo from "../assets/images/logo2.png";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center justify-center md:justify-start px-2 md:px-5 py-3 rounded-md transition text-sm font-medium ${
      isActive
        ? "bg-[#F8842B] text-white"
        : "text-gray-200 hover:bg-[#2a36b0]"
    }`;

  return (
    <aside className="bg-[#191970] h-screen text-white flex flex-col fixed transition-all duration-300 w-16 md:w-64">
      {/* Logo */}
      <div className="p-3 flex justify-center md:justify-center border-b border-gray-700">
        <img
          src={logo}
          alt="BOSAG"
          className="rounded-md w-8 h-8 md:w-auto md:h-auto"
        />
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex-1 px-1 md:px-3">
        <ul className="space-y-1">
          <li>
            <NavLink to="/admin-board" className={linkClass}>
              <GoGraph className="w-5 h-5" />
              <span className="hidden md:inline-block ml-3">Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/approval" className={linkClass}>
              <FaUserCheck className="w-5 h-5" />
              <span className="hidden md:inline-block ml-3">
                Membership Approval
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/event-management" className={linkClass}>
              <FaCalendarPlus className="w-5 h-5" />
              <span className="hidden md:inline-block ml-3">
                Events Management
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/members" className={linkClass}>
              <FaUsers className="w-5 h-5" />
              <span className="hidden md:inline-block ml-3">Members</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings" className={linkClass}>
              <IoMdSettings className="w-5 h-5" />
              <span className="hidden md:inline-block ml-3">Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
