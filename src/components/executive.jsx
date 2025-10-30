import React from "react";
import { Users, Lightbulb, BarChart2, FileText, Headphones } from "lucide-react";

const executives = [
  {
    icon: <Users size={28} className="text-white" />,
    title: "Chief Executive Officer",
    subtitle: "Strategic Leadership",
    description:
      "Provides overall leadership and accountability for BOSAG’s mission, achieving key strategic goals and advancing Ghana’s digital GBS structure.",
  },
  {
    icon: <Lightbulb size={28} className="text-white" />,
    title: "Head of Research & Policy",
    subtitle: "Intelligence & Strategy",
    description:
      "Leads research, trend forecasting, and policy development to strengthen Ghana’s position in global digital services.",
  },
  {
    icon: <BarChart2 size={28} className="text-white" />,
    title: "Head of Investment Promotion",
    subtitle: "Market Development",
    description:
      "Drives local and international investor engagement for ITES and KPO expansion.",
  },
  {
    icon: <FileText size={28} className="text-white" />,
    title: "Finance & Operations Manager",
    subtitle: "Operational Excellence",
    description:
      "Delivers fiscal management and operational coordination to ensure BOSAG’s sustained growth and efficiency.",
  },
  {
    icon: <Headphones size={28} className="text-white" />,
    title: "Member Services Officer",
    subtitle: "Member Engagement",
    description:
      "Coordinates programs and engagement activities for BOSAG members, ensuring value delivery and member support.",
  },
];

const ExecutiveSecretariat = () => {
  return (
    <section className="bg-[#f8f9ff] py-10 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-[#1c1c57] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          The Executive Secretariat: Driving Digital Strategy and Execution
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Our operational leadership team combines deep industry expertise with
          strategic vision to deliver on BOSAG’s ambitious digital transformation agenda.
        </p>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {executives.map((person, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-[#e6e9ff] p-6 text-left hover:shadow-lg transition-all duration-300"
          >
            {/* Icon Circle */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 mb-5">
              {person.icon}
            </div>

            <h3 className="text-[#1c1c57] text-lg font-semibold mb-1">
              {person.title}
            </h3>

            <p className="text-orange-500 text-sm font-medium mb-3">
              {person.subtitle}
            </p>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              {person.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExecutiveSecretariat;
