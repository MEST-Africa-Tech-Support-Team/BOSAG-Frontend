import React from "react";
import { FileText, CalendarDays, BarChart2 } from "lucide-react";

export default function MembershipAccountability() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A57] mb-14">
        Membership & Accountability
      </h2>

      {/* Grid layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Membership Tiers */}
        <div className="bg-[#F6F8FC] rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-[#1A1A57] mb-4">
            Membership Tiers
          </h3>
          <ul className="space-y-3 text-[#1A1A57]">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#F38B00]"></span>
              Platinum Full Members
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FFD600]"></span>
              Gold Full Members
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#9CA3AF]"></span>
              Vendors & Affiliate Members
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#22C55E]"></span>
              Start-ups & Associate Members
            </li>
          </ul>
        </div>

        {/* Code of Conduct */}
        <div className="bg-[#F1F2F8] rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-[#1A1A57] mb-4">
            Code of Conduct
          </h3>
          <p className="text-[#4B5563] mb-4">
            All members must adhere to BOSAG's Code of Conduct outlining
            principles of:
          </p>
          <ul className="space-y-2 text-[#4B5563]">
            <li>• Integrity and ethical business practices</li>
            <li>• Fair labour practices</li>
            <li>• Data security and privacy protection</li>
          </ul>
          <p className="text-sm text-[#6B7280] mt-4">
            The Membership, Ethics & Governance Committee handles disciplinary
            review.
          </p>
        </div>

        {/* Governance Rights */}
        <div className="bg-[#FFF7F0] rounded-2xl p-8 border border-[#FBD5A8] shadow-sm">
          <h3 className="text-xl font-semibold text-[#1A1A57] mb-4">
            Governance Rights
          </h3>
          <p className="text-[#4B5563]">
            Rights are reserved for Full Members in good standing. Elections for
            the Governing Council will be conducted after five years and then
            after every three years.
          </p>
        </div>

        {/* Governance Tools */}
        <div className="bg-[#F9FAFB] rounded-2xl p-8 shadow-sm border border-[#E5E7EB]">
          <h3 className="text-xl font-semibold text-[#1A1A57] mb-4">
            Governance Tools
          </h3>
          <ul className="space-y-3 text-[#1A1A57]">
            <li className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#F97316]" />
              Formal Constitution
            </li>
            <li className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-[#F97316]" />
              Annual General Meetings
            </li>
            <li className="flex items-center gap-3">
              <BarChart2 className="w-5 h-5 text-[#F97316]" />
              Quarterly Reports
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}