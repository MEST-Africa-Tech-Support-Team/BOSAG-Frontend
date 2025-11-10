import React from "react";
import { LineChart, GraduationCap, DollarSign, Wifi } from "lucide-react"; // using lucide-react icons

const highlights = [
  {
    icon: <LineChart size={28} className="text-white" />,
    value: "9–10%",
    label: "Projected CAGR through 2030",
    bg: "bg-[#0070B8]",
  },
  {
    icon: <GraduationCap size={28} className="text-white" />,
    value: "105,000+",
    label: "Annual Graduates",
    bg: "bg-[#F97316]",
  },
  {
    icon: <DollarSign size={28} className="text-white" />,
    value: "94%",
    label: "Cost Savings Potential",
    bg: "bg-[#0FA958]",
  },
  {
    icon: <Wifi size={28} className="text-white" />,
    value: "78%",
    label: "4G/LTE Coverage & 5G Launch",
    bg: "bg-[#7C3AED]",
  },
];

const KeyHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-xl md:text-4xl font-bold text-[#0A0A0A] mb-6">
          Key Industry Highlights
        </h1>
        <p className="text-gray-600 mb-12">
          Ghana's competitive advantages in the global services sector
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl py-10 px-4 flex flex-col items-center shadow-sm hover:shadow-md transition"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full ${item.bg} mb-5`}
              >
                {item.icon}
              </div>
              <h3
                className={`text-2xl font-bold mb-1 ${
                  index === 0
                    ? "text-[#0070B8]"
                    : index === 1
                    ? "text-[#F97316]"
                    : index === 2
                    ? "text-[#0FA958]"
                    : "text-[#7C3AED]"
                }`}
              >
                {item.value}
              </h3>
              <p className="text-gray-700 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
