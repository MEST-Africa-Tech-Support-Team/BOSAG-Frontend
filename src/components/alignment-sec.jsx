import React from "react";
import { Globe2, Target, Handshake } from "lucide-react"; // exact icons

const AlignmentSection = () => {
  return (
    <section className="bg-[#f9f9fb] py-10 px-6 sm:px-10 lg:px-20 text-center">

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1b1b5e] mb-6">
        Alignment with National and Sector <br className="hidden sm:block" />
        Priorities
      </h2>

      <div className="bg-white shadow-md rounded-2xl max-w-5xl mx-auto p-8 sm:p-10">
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 text-left">
          BOSAG’s governance structure and strategic framework are meticulously
          aligned with Ghana’s National BPO/ITO Strategy, ensuring seamless
          integration with broader economic development objectives. Our approach
          incorporates global best practices in digital services governance,
          drawing from successful models in India, Philippines, and other
          leading outsourcing destinations.
        </p>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-left">
          This alignment ensures that our institutional credibility and
          operational transparency meet the highest international standards,
          providing confidence to multinational corporations, development
          partners, and government stakeholders in our capacity to deliver on
          ambitious digital transformation commitments.
        </p>

        {/* Icons Row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-[#1b1b5e] p-4 rounded-full mb-4">
              <Target className="text-white" size={28} />
            </div>
            <h4 className="font-semibold text-[#1b1b5e] mb-1">
              National Strategy
            </h4>
            <p className="text-gray-600 text-sm">
              Aligned with Ghana’s digital economy roadmap
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#1b1b5e] p-4 rounded-full mb-4">
              <Globe2 className="text-white" size={28} />
            </div>
            <h4 className="font-semibold text-[#1b1b5e] mb-1">Global Standards</h4>
            <p className="text-gray-600 text-sm">
              International best practices implementation
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#1b1b5e] p-4 rounded-full mb-4">
              <Handshake className="text-white" size={28} />
            </div>
            <h4 className="font-semibold text-[#1b1b5e] mb-1">
              Stakeholder Trust
            </h4>
            <p className="text-gray-600 text-sm">
              Credible partner for international investors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlignmentSection;
