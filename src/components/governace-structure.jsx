import React from 'react';
import { Download } from 'lucide-react';

export default function GovernanceStructure() {
  return (
    <div className="bg-gray-50 py-16 px-6 h-[145vh] mb-16 md:hidden lg:block">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#191970] mb-4">
            Leadership & Accountability: Our Governance Framework
          </h2>
          <p className="text-gray-600 text-md max-w-4xl mx-auto">
            BOSAG's fiduciary oversight and strategic direction are managed through a robust, multi-tiered 
            structure ensuring transparency and alignment with national goals.
          </p>
        </div>

        {/* Organizational Chart */}
        <div className="flex flex-col items-center mb-12 relative">
          {/* General Assembly */}
          <div className="bg-[#191970] text-white rounded-xl shadow-lg p-7 w-60 text-center absolute top-0 left-47 mb-8">
            <h3 className="text-l font-bold mb-2">GENERAL ASSEMBLY</h3>
            <p className="text-sm opacity-90">All Voting Members</p>
          </div>

          {/* Connector Line */}
          <div className="w-1 h-12 bg-[#191970] absolute left-78 top-29"></div>

          {/* Governing Council with side connection */}
          <div className=" flex items-center mb-8">
            <div className="bg-white border-4 border-[#191970] rounded-xl shadow-lg p-6 w-60 absolute top-42 left-47 text-center">
              <h3 className="text-l font-bold text-[#191970] mb-2">GOVERNING COUNCIL</h3>
              <p className="text-sm text-gray-600">7 Governors/Council Members</p>
            </div>
            
            {/* Horizontal line to Advisory Board */}
            <div className="absolute left-112 top-55 w-97 h-1 bg-indigo-900" ></div>
             <div className="w-1 h-34 bg-[#191970] absolute left-209 top-55"></div>
          </div>

          {/* Connector Line */}
          <div className="w-1 h-14 bg-[#191970] absolute left-76 top-75"></div>

          {/* Executive Secretariat and Advisory Board Row */}
          <div className="flex justify-center items-start gap-48 mb-8">
            <div className="absolute left-119 top-106 w-50 h-1 bg-indigo-900" ></div>
            {/* Executive Secretariat */}
            <div className="">
              <div className="bg-orange-500 top-90 left-45 text-white rounded-xl shadow-lg absolute p-8 w-70 text-center">
                <h3 className="text-l font-bold mb-2">EXECUTIVE SECRETARIAT</h3>
                <p className="text-sm opacity-90">CEO and Operations Team</p>
              </div>
              
              {/* Two connector lines down skills development*/}
              <div className="absolute top-119 left-104 w-1 h-10 bg-[#191970]"></div>
              <div className="absolute top-119 left-55 w-1 h-10 bg-[#191970]"></div>
            </div>

            {/* Advisory Board */}
            <div className="">
              <div className="bg-white border-4 border-[#191970] rounded-xl shadow-lg p-7 w-70 absolute top-90 left-173 text-center">
                <h3 className="text-xl font-bold text-[#191970] mb-2">ADVISORY BOARD</h3>
                <p className="text-sm text-gray-600">Non-Executive, Expert-Driven</p>
              </div>
              
              {/* Two connector lines down individuals */}
              <div className="absolute top-120 left-234 w-1 h-12 bg-[#191970]"></div>
              <div className="absolute top-120 left-184 w-1 h-12 bg-[#191970]"></div>
            </div>
          </div>

          {/* Bottom Sections */}
           <div className="grid grid-cols-2 gap-48 w-full relative max-w-6xl"> 
            {/* Left Column - Specialised Committees */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-2 gap-4 w-full mb-4">
                <div className="bg-[#EFF6FF] border-2 border-[#191970] absolute top-114 left-19 rounded-xl p-4 text-center">
                  <h4 className="font-bold text-[#191970] text-sm mb-1">POLICY ADVOCACY</h4>
                  <p className="text-xs text-gray-600">Specialised Committee</p>
                </div>
                <div className="bg-[#EFF6FF] border-2 border-[#191970] absolute top-114 left-66 rounded-xl p-4 text-center">
                  <h4 className="font-bold text-[#191970] text-sm mb-1">SKILLS DEVELOPMENT</h4>
                  <p className="text-xs text-gray-600">Specialised Committee</p>
                </div>
              </div> 

              {/* sme lines */}
              <div className="absolute top-133 left-88 w-1 h-9 bg-[#191970]"></div>
              <div className="absolute top-133 left-39 w-1 h-9 bg-[#191970]"></div>
              

              <div className="grid grid-cols-2 gap-4 relative w-full ">
                <div className="bg-[#EFF6FF] border-2 border-[#191970] absolute top-140 left-6 rounded-xl p-4 text-center">
                  <h4 className="font-bold text-[#191970] text-sm mb-1">MARKETING & PROMOTION</h4>
                  <p className="text-xs text-gray-600">Specialised Committee</p>
                </div>
                <div className="bg-[#EFF6FF] border-2 border-[#191970] w-63 absolute top-140 left-67 rounded-xl p-4 text-center">
                  <h4 className="font-bold text-[#191970] text-sm mb-1">SME & CAPACITY BUILDING</h4>
                  <p className="text-xs text-gray-600">Specialised Committee</p>
                </div>
              </div> 

              {/* Connector lines */}
               <div className="grid grid-cols-2 gap-4 w-full mb-0">
                <div className="flex justify-center">
                  <div className="w-1 h-8 absolute top-163 left-37 bg-[#191970]"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-1 h-8 absolute top-163 left-89  bg-[#191970]"></div>
                </div>
              </div> 

               <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-[#EFF6FF] border-2 border-indigo-900 absolute top-172 left-6 rounded-xl p-4 text-center">
                  <h4 className="font-bold text-indigo-900  text-sm mb-1">RESEARCH & KNOWLEDGE</h4>
                  <p className="text-xs text-gray-600">Specialised Committee</p>
                </div>
                <div className="bg-[#EFF6FF] border-2 border-indigo-900 w-53 absolute top-172 left-67 rounded-xl p-4 text-center">
                  <h4 className="font-bold text-indigo-900 text-sm mb-1">MEMBERSHIP ETHICS</h4>
                  <p className="text-xs text-gray-600">Specialised Committee</p>
                </div>
              </div>
            </div> 

            {/* Right Column - Advisory Groups */}
             <div className="flex flex-col relative items-center">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="bg-[#EFF6FF] w-45 h-20 border-2 border-indigo-900 absolute top-117 -left-23 rounded-xl p-4 text-center">
                  <h4 className="font-bold text-indigo-900 text-sm mb-1">CORPORATES</h4>
                  <p className="text-xs text-gray-600">Sector Consultants</p>
                </div>
                <div className="bg-[#EFF6FF] w-45 h-20 border-2 border-indigo-900 absolute top-117 left-31 rounded-xl p-4 text-center">
                  <h4 className="font-bold text-indigo-900 text-sm mb-1">INDIVIDUALS</h4>
                  <p className="text-xs text-gray-600">Industry Experts</p>
                </div>
              </div> 
            </div>
         </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center relative mt-12">
            <a href="/Bosag_Governance_Structure.pdf" download="Bosag_Governance_Structure.pdf">
          <button className="bg-orange-500 hover:bg-orange-600 text-white absolute top-200 left-120  font-bold py-4 px-12 rounded-lg transition duration-300 inline-flex items-center gap-3 shadow-lg">
            <Download className="w-5 h-5" />
            Download Document
          </button>
          </a>
        </div> 
      </div>
    </div>
  );
}