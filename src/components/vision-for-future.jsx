import React from "react";
import { Globe, GraduationCap, Handshake, Scale, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: <Globe size={28} className="text-[#0070B8]" />,
    title: "International Visibility",
    desc: "Promoting Ghana globally as a GBS destination",
  },
  {
    icon: <GraduationCap size={28} className="text-[#F97316]" />,
    title: "Skills Development",
    desc: "Building world-class talent and capabilities",
  },
  {
    icon: <Handshake size={28} className="text-[#16A34A]" />,
    title: "Local Operator Support",
    desc: "Empowering domestic service providers",
  },
  {
    icon: <Scale size={28} className="text-[#9333EA]" />,
    title: "Policy Alignment",
    desc: "Advocating for supportive regulatory frameworks",
  },
  {
    icon: <BarChart3 size={28} className="text-[#4F46E5]" />,
    title: "Sector Research",
    desc: "Data-driven insights and market intelligence",
  },
];

const VisionForFuture = () => {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-xl md:text-4xl font-bold text-[#0A0A0A] mb-2">
          Vision for the Future
        </h2>
        <p className="text-gray-600 mb-12">
          Five strategic pillars driving Ghana&apos;s digital transformation
        </p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionForFuture;
