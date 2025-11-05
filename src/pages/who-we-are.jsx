import React from "react";
import {
  Globe2,
  Eye,
  Rocket,
  Users,
  Building2,
  TrendingUp,
  Wrench,
  Lightbulb,
  Leaf,
  Network,
  ShieldCheck,
  Siren,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function WhoWeAre() {
  const objectives = [
    {
      icon: <Users className="w-6 h-6 text-[#F86208]" />,
      title: "Industry Coordination",
      desc: "Foster collaboration and coordination among BPO and GBS companies operating in Ghana.",
    },
    {
      icon: <Siren className="w-6 h-6 text-[#F86208]" />,
      title: "Policy Advocacy",
      desc: "Advocate for favorable policies and regulations that support industry growth and competitiveness.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#F86208]" />,
      title: "Skills Development",
      desc: "Enhance workforce capabilities through comprehensive training and talent pipeline development programs.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#F86208]" />,
      title: "Technology Adoption",
      desc: "Drive innovation and future readiness through advanced technology integration and digital transformation.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#F86208]" />,
      title: "Market Expansion",
      desc: "Expand Ghana’s presence in global markets and attract international business partnerships.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F86208]" />,
      title: "Quality Assurance",
      desc: "Establish and maintain high standards of service delivery and operational excellence.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#F86208]" />,
      title: "Infrastructure Development",
      desc: "Support the development of robust infrastructure to enable seamless business operations.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#F86208]" />,
      title: "Economic Growth",
      desc: "Drive sustainable economic development through strategic industry initiatives and partnerships.",
    },
    {
      icon: <Network className="w-6 h-6 text-[#F86208]" />,
      title: "Knowledge Sharing",
      desc: "Facilitate knowledge transfer and best practice sharing across the industry ecosystem.",
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#F86208]" />,
      title: "Sustainability",
      desc: "Promote sustainable business practices and environmental responsibility across the sector.",
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="">
      {/* Header */}
      <div className="text-center py-10 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-[#131663]">
        Who We Are: Ghana&apos;s Gateway to{" "}
        <span className="text-[#FF7A00] relative inline-block">
          Global Services
          <span className="absolute left-0 right-0 -bottom-1 mx-auto w-10 h-[3px] bg-[#FF7A00] rounded-full"></span>
        </span>
      </h2>
    </div>

      {/* Vision & Mission */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20 px-6">
        <div className="bg-[#191970] text-white p-8 rounded-2xl shadow-lg">
          <Eye className="w-7 h-7 text-[#F86208] mb-4" />
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-sm leading-relaxed text-white/90">
            Transform Ghana into Africa’s premier services hub and economic
            gateway. We aspire to position Ghana as the leading destination for
            global business services, creating a thriving ecosystem that attracts
            international investment, fosters innovation, and drives sustainable
            economic growth across the continent.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <Rocket className="w-7 h-7 text-[#F86208] mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-[#1c1c57]">
            Our Mission
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Empowering Global Commerce. We facilitate seamless global business
            operations by providing comprehensive support, advocacy, and
            strategic guidance to organizations operating in Ghana’s business
            process outsourcing and global business services sector.
          </p>
        </div>
      </div>

      {/* Objectives */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h3 className="text-center text-2xl font-bold text-[#191970] mb-10">
          Our 10 Objectives: BOSAG's Core Mandate
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {objectives.map((obj, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-md hover:shadow-md transition"
            >
              <div className="flex justify-center mb-3">{obj.icon}</div>
              <h4 className="font-semibold text-[#1c1c57] mb-2 text-sm">
                {obj.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center ">
        <h4 className="text-xl font-semibold text-[#1c1c57] mb-2">
          Ready to drive the future of Ghana's GBS sector?
        </h4>
        <p className="text-gray-600 mb-6">Join the unified voice.</p>

        <div className="flex justify-center mb-10 gap-4">
          <button className="bg-[#F86208] hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md transition">
            Join BOSAG
          </button>
          <button className="border border-[#F86208] text-[#F86208] hover:bg-orange-50 px-6 py-2 rounded-lg transition">
            Meet the Governing Council
          </button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
