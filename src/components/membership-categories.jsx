import React from "react";
import { Check, Crown } from "lucide-react";
import Navbar from "./navbar";
import Footer from "./footer";

const MembershipCategories = () => {
  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-md border border-gray-100">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-linear-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-sm">
            <Crown className="w-5 h-5 text-white fill-white" />
          </div>
          <h3 className="text-xl font-semibold text-[#1c1c57]">
            Platinum Full Members
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          Established BPO, ITO, and shared services providers with demonstrated
          delivery scale and international certifications.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-500 text-white">
              <Check className="w-3 h-3" />
            </div>
            Full voting rights
          </li>
          <li className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-500 text-white">
              <Check className="w-3 h-3" />
            </div>
            Eligible for Governing Council/Advisory Board
          </li>
          <li className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-500 text-white">
              <Check className="w-3 h-3" />
            </div>
            International certification recognition
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MembershipCategories;
