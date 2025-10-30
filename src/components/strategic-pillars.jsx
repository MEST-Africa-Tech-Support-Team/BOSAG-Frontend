import React from "react";
import { Link } from "react-router";
import { Globe, GraduationCap, Building2, FileSearch, BarChart3 } from "lucide-react";

const StrategicPillars = () => {
  const pillars = [
    {
      id: 1,
      icon: <Globe size={40} className="text-white" />,
      title: "International Visibility",
      description: "Elevating Ghana's profile in global outsourcing markets.",
    },
    {
      id: 2,
      icon: <GraduationCap size={40} className="text-white" />,
      title: "Skills Development",
      description: "Building world-class talent capabilities.",
    },
    {
      id: 3,
      icon: <Building2 size={40} className="text-white" />,
      title: "Local Capability",
      description: "Strengthening domestic sector capacity.",
    },
    {
      id: 4,
      icon: <FileSearch size={40} className="text-white" />,
      title: "Policy Advocacy",
      description: "Facilitating enabling regulatory frameworks.",
    },
    {
      id: 5,
      icon: <BarChart3 size={40} className="text-white" />,
      title: "Research & Knowledge",
      description: "Enabling data-driven sector insights.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <header className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#191970] mb-3">
            5 Strategic Pillars
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Our comprehensive framework for transforming Ghana's outsourcing landscape
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {pillars.map((pillar) => (
            <Link
              to="/about"
              key={pillar.id}
              className="group flex flex-col items-center text-center bg-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg p-4"
            >

              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 mb-5 shadow-md group-hover:brightness-110 transition-all duration-300">
                {pillar.icon}
              </div>

              <h3 className="text-[#191970] font-bold text-base mb-2">
                {pillar.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed max-w-[220px]">
                {pillar.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;
