import React, { useState } from "react";
import {
  Rocket,
  Users,
  Building2,
  ShieldCheck,
  Globe2,
  Download,
} from "lucide-react";
import StrategicPlanModal from "./strategic-modal";

const strategies = [
  {
    id: 1,
    icon: <Globe2 className="text-white w-6 h-6" />,
    title: "Enable Sector Research & Knowledge Sharing",
    pillar: "Pillar 1: Raise International Visibility & Client Engagement",
    content:
      "BOSAG will activate a strategic global visibility plan including the launch of the national Ghana GBS/BPO Value Proposition, international client events, and the establishment of overseas offices in priority markets. It will also produce case studies, success stories, and client conversion tools. Notably, a concierge support programme for visiting investors will be established to strengthen conversion and confidence. This pillar is the primary lever for attracting new international demand (including GBS/BPO buyers, Global Capability Centres (GCCs), and remote work platforms) and will be central to job growth.",
  },
  {
    id: 2,
    icon: <Users className="text-white w-6 h-6" />,
    title: "Addressing talent readiness, Pillar 2 focuses on demand-aligned curriculum development, role-specific training, and AI-driven workforce skills.",
    pillar: "Pillar 2: Drive Skills Development & Talent Readiness",
    content:
      "BOSAG will co-develop a national competency framework, launch internship and job matching platforms, and introduce AI bootcamps in partnership with the Ghana AI Hub. It also supports embedding GBS-focused curricula into universities, offering scholarships, and driving sector certifications. A new initiative will focus on preparing workers for placement through remote-first talent platforms (such as Remote4Africa, FlexJobs and Yoummday). BOSAG’s approach to skills is scalable, inclusive, and designed to match employers’ evolving needs, particularly in customer support, automation, cloud, and AI-aligned job roles.",
  },
  {
    id: 3,
    icon: <Building2 className="text-white w-6 h-6" />,
    title: "This pillar aims to build the strength and scalability of Ghana’s local GBS/BPO and ITO operators, particularly SMEs, by combining domestic demand stimulation with targeted capability support.",
    pillar: "Pillar 3: Promote and Support Local Sector & Operator Capability Building",
    content:
      "BOSAG will implement a national “Think Local, Source Local” campaign, expand public sector outsourcing models, and promote local operator success stories. At the same time, local firms will benefit from quarterly bootcamps, mentorship pairings, legal literacy tools, contract templates, and ISO certification support. These initiatives will be reinforced by access to AI testing through the national AI Hub and peer-led Special Interest Groups. By supporting both demand and supply readiness, this pillar positions local operators to grow sustainably, secure anchor clients, and transition into globally competitive service providers.",
  },
  {
    id: 4,
    icon: <ShieldCheck className="text-white w-6 h-6" />,
    title: "Pillar 4 strengthens BOSAG’s role as a sector advocate, engaging with government to influence GBS/BPO policies and drive regulatory reform.",
    pillar: "Pillar 4: Facilitate Policy Advocacy & Public-Private Alignment",
    content:
      "Actions include quarterly roundtables with ministries, a regulatory task force, and active participation in national strategy formulation. BOSAG will advocate for enabling incentives (e.g., tax exemptions, licensing streamlining) and represent the sector in regional and multilateral platforms. The strategy also promotes alignment with AfCFTA for regional service alignment. Strengthening public-private dialogue and embedding BOSAG in formal consultation processes will help reduce policy lag, improve sector responsiveness, and foster a more predictable business environment. In this regard, BOSAG should also establish proxy GBS desks/points of presence at the Ghana Investment Promotion Centre (GIPC) and Ghana Free Zones Authority (GFZA).",
  },
  {
    id: 5,
    icon: <Rocket className="text-white w-6 h-6" />,
    title: "Pillar 5 establishes BOSAG as the sector’s knowledge hub through structured research, data, and learning dissemination.",
    pillar: "Pillar 5: Enable Sector Research & Knowledge Sharing",
    content:
      "It will produce quarterly dashboards, vertical research papers, cost competitiveness studies, and annual state-of-sector reports. A key initiative will be to offer feasibility and market entry support for global investors and Global Capability Centres (GCCs) or Shared Services Centres (SCCs) considering Ghana. BOSAG will also build a central repository of tools and templates for operators, while leading national benchmarking efforts. This pillar enables evidence-based decision-making and helps position Ghana as a transparent, data-driven ecosystem for outsourcing and service delivery.",
  },
];

const StrategicPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className=" py-10 px-6 sm:px-10 lg:px-24 text-center">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-[#1c1c57] text-2xl sm:text-3xl lg:text-4xl font-bold mb-10">
          BOSAG 5-Year Strategic Plan (2025–2030)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
          {strategies.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPlan(item)}
              className="cursor-pointer group"
            >
              <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-[#1c1c57] font-semibold text-base sm:text-lg mb-2 leading-snug max-w-[220px]">
                  {item.pillar}
                </h3>
                <span className="text-red-500 text-sm font-medium group-hover:underline">
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/bosag-5yr-plan.pdf"
            download="bosag-5yr-plan.pdf"
            className="flex items-center justify-center gap-2 mx-auto bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md shadow-md transition-colors w-fit"
          >
            <Download size={18} /> Download Full Strategic Plan (PDF)
          </a>

        </div>
      </div>

      {/* Modal */}
      {selectedPlan && (
        <StrategicPlanModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </section>
  );
};

export default StrategicPlan;
