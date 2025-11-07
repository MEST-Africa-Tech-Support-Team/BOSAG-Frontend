import React from 'react';
import { Users, Building2, Lightbulb, Handshake } from 'lucide-react';

export default function SectorLeadership() {
  return (
    <section className="bg-[#191970] text-white py-10 px-4 sm:px-6 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Sector Leadership: BOSAG
          </h1>
          <p className="text-l text-gray-200">
            National Apex Body for BPO & IT-enabled Services
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Mission & Vision */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Our Mission & Vision</h2>

            {/* Mission Card */}
            <div className="bg-[#10245F] backdrop-blur-sm rounded-xl p-8 mb-8 border border-indigo-800/30">
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To position Ghana as the premier destination for Global Business Services in Africa through industry leadership, advocacy, and strategic development.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[#10245F]  backdrop-blur-sm rounded-xl p-8 border border-indigo-800/30">
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p className="text-gray-200 leading-relaxed">
                A thriving, globally competitive GBS ecosystem that drives economic growth and digital transformation across Ghana and Africa.
              </p>
            </div>
          </div>

          {/* Right Column - Organizational Structure */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Organizational Structure</h2>

            <div className="space-y-4">
              {/* Governing Council */}
              <div className="bg-[#10245F]  backdrop-blur-sm rounded-xl p-6 border border-indigo-800/30 hover:bg-indigo-900/50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-700 rounded-lg p-3">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-l font-semibold">Governing Council</span>
                </div>
              </div>

              {/* Executive Secretariat */}
              <div className="bg-[#10245F]  backdrop-blur-sm rounded-xl p-6 border border-indigo-800/30 hover:bg-indigo-900/50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-700 rounded-lg p-3">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-l font-semibold">Executive Secretariat</span>
                </div>
              </div>

              {/* Advisory Board */}
              <div className="bg-[#10245F]  backdrop-blur-sm rounded-xl p-6 border border-indigo-800/30 hover:bg-indigo-900/50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-700 rounded-lg p-3">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-l font-semibold">Advisory Board</span>
                </div>
              </div>

              {/* Industry Committees */}
              <div className="bg-[#10245F]  backdrop-blur-sm rounded-xl p-6 border border-indigo-800/30 hover:bg-indigo-900/50 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-700 rounded-lg p-3">
                    <Handshake className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-l font-semibold">Industry Committees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}