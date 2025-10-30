import React from "react";
import { X } from "lucide-react";

const StrategicPlanModal = ({ plan, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background blur */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative bg-white rounded-xl shadow-lg w-[90%] sm:w-[600px] max-w-2xl p-6 sm:p-8 z-10">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        {/* Modal Content */}
        <h3 className="text-[#1c1c57] font-bold text-lg sm:text-xl mb-4 border-b border-gray-200 pb-2">
          {plan.pillar}
        </h3>

        <h4 className="text-[#1c1c57] font-semibold text-base sm:text-lg mb-3">
          {plan.title}
        </h4>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {plan.content}
        </p>
      </div>
    </div>
  );
};

export default StrategicPlanModal;
