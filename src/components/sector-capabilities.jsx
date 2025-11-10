import React from "react";
import {
  Headphones,
  Code,
  Brain,
  Calculator,
  Users,
  ShieldCheck,
} from "lucide-react";

const sectors = [
  {
    icon: <Headphones size={28} className="text-[#0070B8]" />,
    title: "Customer Experience (CX)",
    desc: "Advanced customer support and engagement services across multiple channels.",
  },
  {
    icon: <Code size={28} className="text-[#F97316]" />,
    title: "IT Outsourcing (ITO)",
    desc: "Software development, system integration, and technical support services.",
  },
  {
    icon: <Brain size={28} className="text-[#0FA958]" />,
    title: "Knowledge Process (KPO)",
    desc: "Research, analytics, and specialized knowledge-based services.",
  },
  {
    icon: <Calculator size={28} className="text-[#7C3AED]" />,
    title: "Finance & Accounting",
    desc: "Comprehensive financial services and accounting process outsourcing.",
  },
  {
    icon: <Users size={28} className="text-[#E11D48]" />,
    title: "Human Resources",
    desc: "HR management, recruitment, and workforce administration services.",
  },
  {
    icon: <ShieldCheck size={28} className="text-[#2563EB]" />,
    title: "Cybersecurity",
    desc: "Security monitoring, threat detection, and compliance services.",
  },
];

const SectorCapabilities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-xl md:text-4xl font-bold text-[#0A0A0A] mb-2">
          Sector Evolution & Capabilities
        </h2>
        <p className="text-gray-600 mb-12">
          From traditional call centers to advanced digital services
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {sectors.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition"
            >
              <div>{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorCapabilities;
