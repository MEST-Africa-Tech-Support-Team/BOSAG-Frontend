import React from "react";
import absllogo from "../assets/images/logos/absllogo.png";
import hrlogo from "../assets/images/logos/24logo.png";
import Gbs from "../assets/images/logos/GBS.png";
import gdcl from "../assets/images/logos/GDCL.png";
import GIPC from "../assets/images/logos/GIPC_2.png";
import generation from "../assets/images/logos/GENERATION GHANA.png";
import gepa from "../assets/images/logos/GEPA.png";
import gfza from "../assets/images/logos/GFZA.png";
import iipgh from "../assets/images/logos/IIPGH.png";
import ghn from "../assets/images/logos/ghn.png";
import knust from "../assets/images/logos/KNUST.png";
import soronko from "../assets/images/logos/SORONKO.png";
import tbi from "../assets/images/logos/TBI.png";
import gaba from "../assets/images/logos/gaba.png";

const AdvisoryBoard = () => {
  const advisoryMembers = [
    {
      name: "Ghana Digital Centres Limited",
      logo: gdcl,
      subtitle: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "24-Hour Economy Secretariat",
      logo: hrlogo,
      subtitle: "Government Agency",
       width: "500px",
      description:
        "Promotes round-the-clock economic activity; aligns with BPO/ITO sector’s global time zone operations.",
    },
    {
      name: "Ghana Investment Promotion Centre (GIPC)",
      logo: GIPC,
      width: "500px",
      subtitle: "Government Agency",
      description:
        "Drives investment into Ghana; strategic for attracting outsourcing and digital services investors.",
    },
    {
      name: "Ghana Hubs Network",
      logo: ghn,
      subtitle: "Startup Ecosystem Enabler",
      description:
        "National network of innovation hubs; provides strategic advice on integrating startups into the BPO/ITO ecosystem across Ghana.",
    },
    {
      name: "Tony Blair Institute for Global Change",
      logo: tbi,
      subtitle: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Institute of ICT Professionals Ghana (IIPGH)",
      logo: iipgh,
      subtitle: "ICT Professional Body",
      description:
        "National body mobilizing ICT professionals across sectors; supports continuous professional development, curriculum review, and policy advocacy.",
    },
    {
      name: "Kwame Nkrumah University of Science and Technology",
      logo: knust,
      subtitle: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Africa Federation of GBS Associations",
      logo: Gbs,
      subtitle: "Industry Association",
      description:
        "Pan-African body promoting global business services; offers regional insights and strategic partnerships.",
    },
    {
      name: "Association of Business Service Leaders (ABSL)",
      logo: absllogo,
      subtitle: "International Services Leaders",
      description:
        "Leading European nonprofit representing SSC, GBS, BPO, ITO, and R&D investors; provides global insights, standards, and strategic connections.",
    },
    {
      name: "Generation",
      logo: generation,
      subtitle: "International Nonprofit",
      description:
        "Supports economic mobility through employment-focused training; relevant for workforce development and inclusion in BPO/ITO sectors.",
    },
    {
      name: "German-Africa Business Association",
      logo: gaba,
      subtitle: "International Business Network",
      description:
        "Promotes trade and investment between Germany and Africa; strategy for connecting Ghanaian BPO/ITO firms with European markets.",
    },
    {
      name: "Ghana Export Promotion Authority",
      logo: gepa,
      subtitle: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Soronko Academy",
      logo: soronko,
      subtitle: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Ghana Free Zones Authority",
      logo: gfza,
      subtitle: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-16 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          BOSAG Advisory Board
        </h2>
        <p className="text-gray-600 leading-relaxed text-[15px]">
          The Advisory Board serves as a non-executive, expert-driven body that
          provides strategic guidance, external insights, and credibility to
          BOSAG’s operations and long-term direction. While it does not hold
          decision-making authority, the Advisory Board plays a critical role in
          shaping high-level thinking, strengthening stakeholder alignment, and
          informing BOSAG’s engagement with government, development partners,
          academia, and the private sector.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisoryMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 text-center flex flex-col items-center"
          >
            <img
              src={member.logo}
              alt={member.name}
              className="h-20 w-[5000px] mb-4 object-contain"
              style={{ width: member.width || "auto" }}
            />
            <h3 className="text-lg font-bold text-[#0F172A] mb-1">
              {member.name}
            </h3>
            {member.subtitle && (
              <p className="text-sm text-[#2563EB] font-medium mb-2">
                {member.subtitle}
              </p>
            )}
            <p className="text-gray-600 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryBoard;
