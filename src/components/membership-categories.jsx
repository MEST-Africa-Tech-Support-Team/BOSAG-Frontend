import React from "react";
import { useNavigate } from "react-router";
import {
  Crown,
  Shield,
  Store,
  Rocket,
  Landmark,
  Eye,
  Check,
} from "lucide-react";


const categories = [
  {
    title: "Platinum Members",
    icon: <Crown className="w-6 h-6 text-white" />,
    gradient: "from-gray-400 to-gray-500",
    description:
      "Established BPO, ITO, and shared service providers with demonstrated delivery scale and international certifications.",
    points: [
      "Full voting rights",
      "Eligible for Governing Council/Advisory Board",
      "International certification recognition",
    ],
  },
  {
    title: "Gold Members",
    icon: <Shield className="w-6 h-6 text-white" />,
    gradient: "from-yellow-400 to-yellow-500",
    description:
      "Active BPO, ITO, and shared services operations with proven delivery capability.",
    points: [
      "Full voting rights",
      "Serve on Governing Council and Committees",
      "Second tier weighting for benefits",
    ],
  },
  {
    title: "Vendors & Affiliate Members",
    icon: <Store className="w-6 h-6 text-white" />,
    gradient: "from-indigo-500 to-indigo-600",
    description:
      "Ecosystem enablers such as training providers, technology vendors, consultancy firms, and real estate developers.",
    points: [
      "Non-voting rights",
      "Can become Associate/Voting later",
      "Cross-sector partnership opportunities",
    ],
  },
  {
    title: "Start-ups & Associate Members",
    icon: <Rocket className="w-6 h-6 text-white" />,
    gradient: "from-green-400 to-green-500",
    description:
      "Early-stage BPO/ITO firms, incubated ventures, and small innovators seeking growth and collaboration opportunities.",
    points: [
      "Access to capacity building",
      "Eligible for special startup policies",
      "Listed as growing entities",
    ],
  },
  {
    title: "Government Members",
    icon: <Landmark className="w-6 h-6 text-white" />,
    gradient: "from-blue-400 to-blue-500",
    description:
      "National, regional, and local authorities, and policy institutions that partner to enable industry growth.",
    points: [
      "Advisory role participation",
      "Policy collaboration",
      "Public-private dialogue inclusion",
    ],
  },
  {
    title: "Honorary & Observer Members",
    icon: <Eye className="w-6 h-6 text-white" />,
    gradient: "from-red-400 to-red-500",
    description:
      "Advisors, investors, researchers, and key stakeholders engaged through invitations or strategic interest.",
    points: [
      "Non-voting observer status",
      "Access to events and insights",
      "Strategic collaboration roles",
    ],
  },
];

const MembershipCategories = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="py-10 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1c1c57] mb-4">
              Membership Tiers & Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose the membership tier that best fits your organization's
              profile and needs.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <article
                key={index}
                onClick={() => navigate("/signup")}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-[#191970]/40"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cat.gradient} flex items-center justify-center shadow-sm`}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1c1c57]">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  {cat.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-700">
                  {cat.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-orange-500 text-white mt-[2px]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
     
    </>
  );
};

export default MembershipCategories;
